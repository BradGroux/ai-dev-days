import test from 'node:test'
import assert from 'node:assert/strict'
import { EventEmitter } from 'node:events'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync, spawnSync } from 'node:child_process'
import { checkPublicUrl, displayUrl, fetchPublicUrl, isPublicAddress } from './public-http.mjs'

const publicAnswer = { address: '93.184.215.14', family: 4 }

// No sockets: the double consumes the actual connection lookup and response callback.
function transport(responses) {
  const calls = []
  const request = (url, options, callback) => {
    const req = new EventEmitter()
    req.end = () => queueMicrotask(() => {
      options.lookup(url.hostname, {}, (error, address, family) => {
        assert.ifError(error)
        calls.push({ url: url.href, options, address, family })
        const response = responses[calls.length - 1] || { statusCode: 200 }
        callback({ ...response, headers: response.headers || {}, destroy() { calls.at(-1).destroyed = true } })
      })
    })
    return req
  }
  return { calls, request, lookup: async () => [publicAnswer] }
}

test('address policy rejects non-public ranges and mapped/transition IPv6', () => {
  for (const ip of ['0.0.0.1', '10.1.2.3', '100.64.0.1', '127.0.0.2',
    '169.254.169.254', '172.31.1.1', '192.0.0.1', '192.0.2.1', '192.88.99.1',
    '192.168.0.1', '198.18.0.1', '198.51.100.1', '203.0.113.1', '224.0.0.1',
    '255.255.255.255', '::', '::1', 'fc00::1', 'fe80::1', 'ff02::1',
    '::ffff:8.8.8.8', '64:ff9b::808:808', '2001::1', '2001:db8::1',
    '2002:7f00:1::1', '3fff::1', 'not-an-address']) {
    assert.equal(isPublicAddress(ip), false, ip)
  }
  for (const ip of ['8.8.8.8', '1.1.1.1', '93.184.215.14', '2606:4700:4700::1111', '2001:4860:4860::8888']) {
    assert.equal(isPublicAddress(ip), true, ip)
  }
})

test('canonical URL forms and local names cannot reach the transport', async () => {
  for (const host of ['127.0.0.2', '127.1', '2130706433', '0x7f000001',
    '0177.0.0.1', '[::1]', '[::ffff:127.0.0.1]', '[fc00::1]',
    'localhost.', 'sub.localhost', 'host.local']) {
    const fixture = transport([])
    await assert.rejects(fetchPublicUrl(`http://${host}:8080/`, 'HEAD', fixture))
    assert.equal(fixture.calls.length, 0, host)
  }
  for (const url of ['file:///tmp/private', 'ftp://example.com/', 'https://user:secret@example.com/']) {
    const fixture = transport([])
    await assert.rejects(fetchPublicUrl(url, 'HEAD', fixture))
    assert.equal(fixture.calls.length, 0)
  }
})

test('DNS answers are validated as a set and the connection uses the checked address', async () => {
  for (const answers of [[], [{ address: '127.0.0.1', family: 4 }],
    [publicAnswer, { address: '10.0.0.1', family: 4 }],
    [{ address: 'fc00::1', family: 6 }, publicAnswer], [{ ...publicAnswer, family: 6 }]]) {
    const fixture = transport([])
    await assert.rejects(fetchPublicUrl('https://example.com/', 'HEAD', {
      ...fixture, lookup: async () => answers,
    }))
    assert.equal(fixture.calls.length, 0)
  }
  const fixture = transport([])
  let resolutions = 0
  const result = await fetchPublicUrl('https://example.com:8443/path', 'HEAD', {
    ...fixture, lookup: async () => { resolutions++; return resolutions === 1 ? [publicAnswer] : [{ address: '127.0.0.1', family: 4 }] },
  })
  assert.equal(result.status, 200)
  assert.equal(resolutions, 1)
  assert.equal(fixture.calls[0].address, publicAnswer.address)
  assert.equal(fixture.calls[0].url, 'https://example.com:8443/path')
  assert.equal(fixture.calls[0].options.agent, false)
  assert.equal(fixture.calls[0].options.autoSelectFamily, true)
  assert.equal(fixture.calls[0].options.rejectUnauthorized, undefined)
  assert.equal(fixture.calls[0].destroyed, true)
})

test('public IPv4/IPv6 literals need no DNS and preserve the original hostname', async () => {
  for (const address of ['8.8.8.8', '[2606:4700:4700::1111]']) {
    const fixture = transport([])
    await fetchPublicUrl(`https://${address}/`, 'HEAD', {
      ...fixture, lookup: () => { throw Error('literal must not resolve') },
    })
    assert.equal(fixture.calls.length, 1)
    assert.equal(fixture.calls[0].address, address.replace(/^\[|\]$/g, ''))
  }
})

test('native dual-stack fallback receives every pinned answer and preserves response statuses', async () => {
  for (const statusCode of [200, 404, 410]) {
    const attempted = []
    let lookups = 0
    const result = await fetchPublicUrl('https://example.com/', 'HEAD', {
      lookup: async () => { lookups++; return [{ address: '2606:4700:4700::1111', family: 6 }, publicAnswer] },
      request: (url, options, callback) => {
        const req = new EventEmitter()
        req.end = () => queueMicrotask(() => options.lookup(url.hostname, { all: true }, (_error, addresses) => {
          assert.equal(options.autoSelectFamily, true)
          assert.equal(options.family, undefined)
          attempted.push(...addresses.map(answer => answer.address))
          // Emulate the native transport succeeding on the second, IPv4 candidate.
          assert.deepEqual(addresses[1], publicAnswer)
          callback({ statusCode, headers: {}, destroy() {} })
        }))
        return req
      },
    })
    assert.deepEqual(attempted, ['2606:4700:4700::1111', publicAnswer.address])
    assert.equal(lookups, 1)
    assert.equal(result.status, statusCode)
    assert.equal(result.ok, statusCode === 200)
  }
})

test('every redirect is checked, including relative redirects and later hops', async () => {
  for (const statusCode of [301, 302, 303, 307, 308]) {
    const fixture = transport([{ statusCode, headers: { location: '../next' } }, { statusCode: 204 }])
    assert.equal((await fetchPublicUrl('https://example.com/start/path', 'HEAD', fixture)).status, 204)
    assert.equal(fixture.calls[1].url, 'https://example.com/next')
    assert.deepEqual(fixture.calls.map(call => call.options.method), ['HEAD', 'HEAD'])
  }
  for (const location of ['http://127.0.0.2/private', 'http://[::1]/',
    'https://private.example/', 'file:///etc/passwd', 'https://user:secret@example.com/', 'http://[invalid']) {
    const fixture = transport([{ statusCode: 302, headers: { location: '/second' } }, { statusCode: 307, headers: { location } }])
    await assert.rejects(fetchPublicUrl('https://example.com/', 'HEAD', {
      ...fixture, lookup: async host => host === 'private.example' ? [{ address: '10.0.0.1', family: 4 }] : [publicAnswer],
    }))
    assert.equal(fixture.calls.length, 2, location)
  }
  const loop = transport(Array.from({ length: 3 }, () => ({ statusCode: 302, headers: { location: '/' } })))
  await assert.rejects(fetchPublicUrl('https://example.com/', 'GET', { ...loop, maxRedirects: 2 }), /redirect limit/)
  assert.equal(loop.calls.length, 3)
})

test('GET retries revalidate DNS and redirects, and other statuses do not retry', async () => {
  for (const statusCode of [403, 405]) {
    const fixture = transport([{ statusCode }, { statusCode: 302, headers: { location: '/get' } }, { statusCode: 200 }])
    assert.equal((await checkPublicUrl('https://example.com/', fixture)).ok, true)
    assert.deepEqual(fixture.calls.map(call => call.options.method), ['HEAD', 'GET', 'GET'])
    const blocked = transport([{ statusCode }])
    let lookups = 0
    await assert.rejects(checkPublicUrl('https://example.com/', {
      ...blocked, lookup: async () => ++lookups === 1 ? [publicAnswer] : [{ address: '127.0.0.1', family: 4 }],
    }))
    assert.equal(blocked.calls.length, 1)
  }
  for (const statusCode of [200, 404, 410, 429, 500]) {
    const fixture = transport([{ statusCode }])
    assert.deepEqual(await checkPublicUrl('https://example.com/', fixture), { status: statusCode, ok: statusCode === 200 })
    assert.equal(fixture.calls.length, 1)
  }
})

test('timeouts cover stalled DNS and HTTP headers', async () => {
  const fixture = transport([])
  await assert.rejects(fetchPublicUrl('https://example.com/', 'HEAD', {
    ...fixture, timeoutMs: 10, lookup: () => new Promise(() => {}),
  }), /timed out/)
  assert.equal(fixture.calls.length, 0)
  await assert.rejects(fetchPublicUrl('https://example.com/', 'HEAD', {
    ...fixture, timeoutMs: 10, request: (_url, options) => {
      const req = new EventEmitter()
      req.end = () => options.signal.addEventListener('abort', () => req.emit('error', options.signal.reason), { once: true })
      return req
    },
  }), /timed out/)
})

test('diagnostics redact credentials/query values and local repository links still pass', () => {
  assert.equal(displayUrl('https://user:password@example.com/path?token=secret#private'), 'https://example.com/path?[redacted]')
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'public-http-test-'))
  const script = fileURLToPath(new URL('./check-external-links.mjs', import.meta.url))
  try {
    execFileSync('git', ['init', '--quiet'], { cwd: fixture })
    fs.writeFileSync(path.join(fixture, 'README.md'), '[Readme](https://github.com/BradGroux/ai-dev-days/blob/master/README.md)\n')
    execFileSync('git', ['add', 'README.md'], { cwd: fixture })
    const pass = spawnSync(process.execPath, [script], { cwd: fixture, encoding: 'utf8' })
    assert.equal(pass.status, 0, pass.stdout + pass.stderr)
    fs.appendFileSync(path.join(fixture, 'README.md'), '\nhttp://127.0.0.1/?token=hidden-value\nhttps://user:private-password@example.com/\nhttp://127.0.0.2/\n')
    const blocked = spawnSync(process.execPath, [script], { cwd: fixture, encoding: 'utf8' })
    assert.equal(blocked.status, 1)
    const output = blocked.stdout + blocked.stderr
    assert.match(output, /Credential-bearing URL is not allowed/)
    assert.match(output, /non-public/)
    assert.doesNotMatch(output, /private-password|hidden-value/)
  } finally {
    fs.rmSync(fixture, { recursive: true, force: true })
  }
})
