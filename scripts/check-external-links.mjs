#!/usr/bin/env node
import fs from 'node:fs'
import { execFileSync } from 'node:child_process'
import path from 'node:path'

const root = process.cwd()
const skipDirectories = new Set(['.git', 'node_modules', 'dist', '.vite'])
const checkedExtensions = new Set(['.md', '.html'])
const timeoutMs = 10000
const concurrency = 8
const hardFailureStatuses = new Set([404, 410])
const skippedHosts = new Set([
  'discord.gg',
  'eventbrite.com',
  'linkedin.com',
  'www.eventbrite.com',
  'www.linkedin.com',
])

const files = []
const discoveredUrls = new Map()
const skippedUrls = new Map()
const warnings = []
const failures = []

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (skipDirectories.has(entry.name)) continue

    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      walk(fullPath)
      continue
    }

    if (checkedExtensions.has(path.extname(entry.name))) {
      files.push(fullPath)
    }
  }
}

function relative(filePath) {
  return path.relative(root, filePath)
}

function stripIgnoredMarkdown(text) {
  return text.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]+`/g, '')
}

function trimUrl(rawUrl) {
  return rawUrl
    .trim()
    .replace(/[),.;:!?]+$/g, '')
    .replace(/^<|>$/g, '')
}

function normalizeUrl(rawUrl) {
  try {
    const parsed = new URL(trimUrl(rawUrl))
    if (!['http:', 'https:'].includes(parsed.protocol)) return null
    parsed.hash = ''
    return parsed.toString()
  } catch {
    failures.push(`Invalid URL: ${rawUrl}`)
    return null
  }
}

function isPrivateOrLocalHost(hostname) {
  return (
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname === '::1' ||
    hostname.endsWith('.local') ||
    hostname.startsWith('10.') ||
    hostname.startsWith('192.168.') ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname)
  )
}

function addSkippedUrl(normalized, sourceFile, reason) {
  const key = `${normalized}::${reason}`
  if (!skippedUrls.has(key)) {
    skippedUrls.set(key, {
      normalized,
      reason,
      sourceFiles: new Set(),
    })
  }

  skippedUrls.get(key).sourceFiles.add(relative(sourceFile))
}

function validateSameRepositoryUrl(parsed, normalized, sourceFile) {
  if (parsed.hostname !== 'github.com') return false

  const match = /^\/bradgroux\/ai-dev-days\/(?:blob|tree)\/(?:master|main)\/(.+)$/i.exec(
    parsed.pathname,
  )
  if (!match) return false

  const repositoryPath = decodeURIComponent(match[1])
  const target = path.resolve(root, repositoryPath)
  const relativeTarget = path.relative(root, target)
  if (relativeTarget.startsWith('..') || path.isAbsolute(relativeTarget)) {
    failures.push(`${normalized} resolves outside the repository (${relative(sourceFile)})`)
    return true
  }

  if (!fs.existsSync(target)) {
    failures.push(`${normalized} references missing repository path: ${repositoryPath} (${relative(sourceFile)})`)
    return true
  }

  addSkippedUrl(normalized, sourceFile, 'same-repository path validated locally')
  return true
}

function addUrl(rawUrl, sourceFile) {
  const normalized = normalizeUrl(rawUrl)
  if (!normalized) return

  const parsed = new URL(normalized)
  if (validateSameRepositoryUrl(parsed, normalized, sourceFile)) return
  if (isPrivateOrLocalHost(parsed.hostname)) {
    addSkippedUrl(normalized, sourceFile, 'local/private host')
    return
  }

  if (skippedHosts.has(parsed.hostname)) {
    addSkippedUrl(normalized, sourceFile, 'bot-blocked or volatile host')
    return
  }

  if (!discoveredUrls.has(normalized)) {
    discoveredUrls.set(normalized, new Set())
  }
  discoveredUrls.get(normalized).add(relative(sourceFile))
}

function collectUrls(filePath) {
  const text = fs.readFileSync(filePath, 'utf8')
  const source = filePath.endsWith('.md') ? stripIgnoredMarkdown(text) : text
  const urlPattern = /https?:\/\/[^\s<>"']+/g
  let match

  while ((match = urlPattern.exec(source))) {
    addUrl(match[0], filePath)
  }
}

function formatSourceList(sourceFiles) {
  const sources = [...sourceFiles].sort()
  const visibleSources = sources.slice(0, 6).join(', ')
  const remainingCount = sources.length - 6
  return remainingCount > 0 ? `${visibleSources}, +${remainingCount} more` : visibleSources
}

async function fetchWithTimeout(url, method) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)
  try {
    return await fetch(url, {
      method,
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent': 'ai-dev-days-link-checker/1.0',
      },
    })
  } finally {
    clearTimeout(timeout)
  }
}

async function checkUrl(url, sourceFiles) {
  let response
  try {
    response = await fetchWithTimeout(url, 'HEAD')
    if ([403, 405].includes(response.status)) {
      response = await fetchWithTimeout(url, 'GET')
    }
  } catch (error) {
    warnings.push(`${url} could not be checked: ${error.message}`)
    return
  }

  if (hardFailureStatuses.has(response.status)) {
    failures.push(`${url} returned ${response.status} (${[...sourceFiles].join(', ')})`)
    return
  }

  if (!response.ok) {
    warnings.push(`${url} returned ${response.status}; not failing because external checks can be blocked`)
  }
}

async function runChecks() {
  const entries = [...discoveredUrls.entries()]
  let index = 0

  async function worker() {
    while (index < entries.length) {
      const currentIndex = index
      index += 1
      const [url, sourceFiles] = entries[currentIndex]
      await checkUrl(url, sourceFiles)
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, entries.length) }, worker))
}

files.push(...execFileSync('git', ['ls-files', '-z'], {encoding:'utf8'}).split('\0').filter(name => checkedExtensions.has(path.extname(name))).map(name => path.join(root, name)))
for (const file of files) {
  collectUrls(file)
}

await runChecks()

console.log('AI Dev Days external link check')
console.log(`- Files scanned: ${files.length}`)
console.log(`- Unique external URLs found: ${discoveredUrls.size + skippedUrls.size}`)
console.log(`- URLs checked: ${discoveredUrls.size}`)
console.log(`- URLs skipped: ${skippedUrls.size}`)

if (skippedUrls.size > 0) {
  console.log('\nSkipped:')
  for (const { normalized, reason, sourceFiles } of skippedUrls.values()) {
    console.log(`- ${normalized} (${reason}; ${formatSourceList(sourceFiles)})`)
  }
}

if (warnings.length > 0) {
  console.log('\nWarnings:')
  for (const warning of warnings) {
    console.log(`- ${warning}`)
  }
}

if (failures.length > 0) {
  console.error('\nFailures:')
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exit(1)
}

console.log('\nExternal link check passed.')
