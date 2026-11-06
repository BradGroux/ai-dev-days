import { lookup as dnsLookup } from 'node:dns/promises'
import http from 'node:http'
import https from 'node:https'
import { BlockList, isIP } from 'node:net'

const nonPublic = new BlockList()
for (const [address, prefix] of [
  ['0.0.0.0', 8], ['10.0.0.0', 8], ['100.64.0.0', 10],
  ['127.0.0.0', 8], ['169.254.0.0', 16], ['172.16.0.0', 12],
  ['192.0.0.0', 24], ['192.0.2.0', 24], ['192.88.99.0', 24],
  ['192.168.0.0', 16], ['198.18.0.0', 15], ['198.51.100.0', 24],
  ['203.0.113.0', 24], ['224.0.0.0', 4], ['240.0.0.0', 4],
]) nonPublic.addSubnet(address, prefix, 'ipv4')

const globalIPv6 = new BlockList()
globalIPv6.addSubnet('2000::', 3, 'ipv6')
for (const [address, prefix] of [
  ['2001::', 23], ['2001:db8::', 32], ['2002::', 16], ['3fff::', 20],
]) nonPublic.addSubnet(address, prefix, 'ipv6')

export function isPublicAddress(address) {
  const family = isIP(address)
  if (family === 4) return !nonPublic.check(address, 'ipv4')
  // Only global unicast; also excludes mapped IPv4, NAT64, ULA and link-local.
  return family === 6 && globalIPv6.check(address, 'ipv6') &&
    !nonPublic.check(address, 'ipv6')
}

export class PublicUrlError extends Error {}

export function displayUrl(input) {
  try {
    const url = new URL(input)
    url.username = ''
    url.password = ''
    url.hash = ''
    if (url.search) url.search = '?[redacted]'
    return url.toString()
  } catch {
    return '[invalid URL]'
  }
}

function parseUrl(input, base) {
  let url
  try { url = new URL(input, base) } catch {
    throw new PublicUrlError('invalid HTTP(S) URL')
  }
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) {
    throw new PublicUrlError('unsupported scheme or URL credentials')
  }
  const hostname = url.hostname.replace(/^\[|\]$/g, '').toLowerCase()
  const name = hostname.replace(/\.$/, '')
  if (name === 'localhost' || name.endsWith('.localhost') || name.endsWith('.local')) {
    throw new PublicUrlError('non-public destination blocked')
  }
  return { url, hostname }
}

async function resolveAddresses(hostname, lookup, signal) {
  signal.throwIfAborted()
  let answers
  if (isIP(hostname)) {
    answers = [{ address: hostname, family: isIP(hostname) }]
  } else {
    answers = await new Promise((resolve, reject) => {
      const abort = () => reject(signal.reason)
      signal.addEventListener('abort', abort, { once: true })
      Promise.resolve().then(() => lookup(hostname, { all: true, verbatim: true })).then(
        result => { signal.removeEventListener('abort', abort); resolve(result) },
        error => { signal.removeEventListener('abort', abort); reject(error) },
      )
    })
  }
  signal.throwIfAborted()
  if (!answers.length || answers.some(answer => !isPublicAddress(answer.address) ||
    answer.family !== isIP(answer.address))) {
    throw new PublicUrlError('non-public or invalid DNS destination blocked')
  }
  return answers
}

const defaultRequest = (url, options, callback) =>
  (url.protocol === 'https:' ? https : http).request(url, options, callback)

function requestHeaders(url, method, addresses, signal, request) {
  return new Promise((resolve, reject) => {
    const req = request(url, {
      method,
      signal,
      agent: false,
      autoSelectFamily: true,
      // Keep the URL hostname for Host/SNI/certificate checks, but never resolve again.
      lookup: (_hostname, options, callback) => options.all
        ? callback(null, addresses)
        : callback(null, addresses[0].address, addresses[0].family),
      headers: { 'user-agent': 'ai-dev-days-link-checker/1.0' },
    }, response => {
      resolve({ status: response.statusCode, location: response.headers.location })
      response.destroy() // Availability checks need headers, never response bodies.
    })
    req.on('error', reject)
    req.end()
  })
}

export async function fetchPublicUrl(input, method, {
  lookup = dnsLookup, request = defaultRequest, timeoutMs = 10000, maxRedirects = 5,
} = {}) {
  if (!['HEAD', 'GET'].includes(method)) throw new PublicUrlError('unsupported HTTP method')
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(new PublicUrlError('request timed out')), timeoutMs)
  try {
    let target = parseUrl(input)
    for (let hop = 0; ; hop += 1) {
      const addresses = await resolveAddresses(target.hostname, lookup, controller.signal)
      // Native address-family selection can try every checked answer, without DNS rebinding.
      const response = await requestHeaders(target.url, method, addresses, controller.signal, request)
      if (![301, 302, 303, 307, 308].includes(response.status) || !response.location) {
        return { status: response.status, ok: response.status >= 200 && response.status < 300 }
      }
      if (hop >= maxRedirects) throw new PublicUrlError('redirect limit exceeded')
      target = parseUrl(response.location, target.url)
    }
  } finally {
    clearTimeout(timer)
  }
}

export async function checkPublicUrl(input, options) {
  const response = await fetchPublicUrl(input, 'HEAD', options)
  return [403, 405].includes(response.status)
    ? fetchPublicUrl(input, 'GET', options)
    : response
}
