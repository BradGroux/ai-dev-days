#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { verifyEmbeddedSeed } from './sync-personal-ai-agents-seed.mjs'

const root = process.cwd()
const skipDirectories = new Set(['.git', 'node_modules', 'dist', '.vite'])
const requiredFiles = [
  'README.md',
  'CHARTER.md',
  'GOVERNANCE.md',
  'CONTRIBUTING.md',
  'CODE_OF_CONDUCT.md',
  'SECURITY.md',
  'LICENSE.md',
  'CITATION.cff',
  '.github/CODEOWNERS',
  'MIGRATION.md',
  'START-HERE.md',
  'RUNBOOK.md',
  'PUBLICATION-SAFETY.md',
  'decisions/README.md',
  'decisions/TEMPLATE.md',
  'decisions/0001-framework-companion-for-research-and-education.md',
  'decisions/0002-adopt-open-framework-commons-v1.0.0.md',
  'decisions/0003-refresh-open-framework-commons-v1.0.0-pin.md',
  'docs/ai-native-operating-framework-alignment.md',
  'docs/program-map.md',
  'docs/research-and-education-method.md',
  'docs/release-process.md',
  'docs/releases/v1.0.0.md',
  'docs/releases/v1.1.0.md',
  'research/README.md',
  'research/source-note-template.md',
  'research/digital-meld-operating-research.md',
  'scripts/publication-scan.sh',
  'scripts/validate-release.sh',
  'event-specific/events.json',
  'event-specific/_template/post-event-review.md',
  'projects/beaver-badges/app/package.json',
  'projects/beaver-badges/data/locations.json',
  'projects/beaver-badges/data/badges.json',
]

const failures = []
const warnings = []
let suppressedWarnings = 0
const files = []
const maxWarningsToPrint = 60
const intentionalRepeatedLocalLinks = new Set([
  'event-specific/2026-05-14-infragard-ai-agent-workshop/demo-script.md::prompt-pack.md',
  'event-specific/2026-05-14-infragard-ai-agent-workshop/demo-script.md::scenario-cards.md',
  'event-specific/2026-05-14-infragard-ai-agent-workshop/prompt-pack.md::demo-script.md',
  'event-specific/2026-05-14-infragard-ai-agent-workshop/scenario-cards.md::demo-script.md',
  'event-specific/2026-05-14-infragard-ai-agent-workshop/scenario-cards.md::prompt-pack.md',
  'projects/infragard-agent-team/README.md::../../event-specific/2026-05-14-infragard-ai-agent-workshop/prompt-pack.md',
])

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (skipDirectories.has(entry.name)) continue

    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      walk(fullPath)
      continue
    }

    files.push(fullPath)
  }
}

function relative(filePath) {
  return path.relative(root, filePath)
}

function stripMarkdownCodeBlocks(markdown) {
  return markdown.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]+`/g, '')
}

function isExternalLink(link) {
  return /^(https?:|mailto:|tel:|data:|javascript:)/i.test(link)
}

function normalizeLink(rawLink) {
  const withoutTitle = rawLink
    .trim()
    .replace(/\s+"[^"]*"\s*$/, '')
    .replace(/\s+'[^']*'\s*$/, '')

  return withoutTitle.split('#')[0].split('?')[0]
}

function checkLocalLinks(filePath, text) {
  const source = filePath.endsWith('.md') ? stripMarkdownCodeBlocks(text) : text
  const linkPattern = /!?\[[^\]\n]*\]\(([^)]+)\)|(?:href|src)=["']([^"']+)["']/g
  let match

  while ((match = linkPattern.exec(source))) {
    const rawLink = match[1] ?? match[2] ?? ''
    const normalized = normalizeLink(rawLink)

    if (!normalized || normalized.startsWith('#') || normalized.startsWith('/')) continue
    if (isExternalLink(normalized)) continue

    const target = path.resolve(path.dirname(filePath), decodeURIComponent(normalized))
    if (!fs.existsSync(target)) {
      failures.push(`${relative(filePath)} references missing local target: ${rawLink}`)
    }
  }
}

function addWarning(message) {
  if (warnings.length < maxWarningsToPrint) {
    warnings.push(message)
    return
  }

  suppressedWarnings += 1
}

function isIntentionalRepeatedLocalLink(relativePath, link) {
  return intentionalRepeatedLocalLinks.has(`${relativePath}::${link}`)
}

function readJson(relativePath) {
  const fullPath = path.join(root, relativePath)
  try {
    return JSON.parse(fs.readFileSync(fullPath, 'utf8'))
  } catch (error) {
    failures.push(`${relativePath} is not valid JSON: ${error.message}`)
    return null
  }
}

function validateBeaverBadgesData() {
  const locations = readJson('projects/beaver-badges/data/locations.json')
  const badges = readJson('projects/beaver-badges/data/badges.json')
  if (!Array.isArray(locations) || !Array.isArray(badges)) return

  const locationIds = new Set()
  for (const location of locations) {
    if (!location.id || locationIds.has(location.id)) {
      failures.push(`projects/beaver-badges/data/locations.json has a missing or duplicate id: ${location.id}`)
    }
    locationIds.add(location.id)

    for (const field of ['name', 'city', 'state', 'region']) {
      if (!location[field]) {
        failures.push(`Location ${location.id ?? '(unknown)'} is missing ${field}`)
      }
    }
  }

  let previousRequiredVisits = 0
  for (const badge of badges) {
    if (!badge.id || !badge.name || !Number.isInteger(badge.requiredVisits)) {
      failures.push(`projects/beaver-badges/data/badges.json has an invalid badge entry: ${JSON.stringify(badge)}`)
      continue
    }

    if (badge.requiredVisits <= 0) {
      failures.push(`Badge ${badge.id} must require at least one visit`)
    }

    if (badge.requiredVisits < previousRequiredVisits) {
      failures.push(`Badge ${badge.id} is out of requiredVisits order`)
    }

    previousRequiredVisits = badge.requiredVisits
  }

  const maxReachableVisits = locations.length
  const undocumentedRoadmapBadges = badges.filter(
    (badge) => badge.requiredVisits > maxReachableVisits && badge.roadmap !== true,
  )
  if (undocumentedRoadmapBadges.length > 0) {
    failures.push(
      `Beaver Badges has unreachable badges not marked as roadmap: ${undocumentedRoadmapBadges
        .map((badge) => `${badge.name} (${badge.requiredVisits})`)
        .join(', ')}`,
    )
  }
}

function validateEventMetadata() {
  const metadata = readJson('event-specific/events.json')
  if (!metadata) return

  if (!Array.isArray(metadata.events)) {
    failures.push('event-specific/events.json must contain an events array')
    return
  }

  const eventDirectories = fs
    .readdirSync(path.join(root, 'event-specific'), { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith('_'))
    .map((entry) => entry.name)
    .sort()
  const metadataBySlug = new Map(metadata.events.map((event) => [event.slug, event]))

  for (const directory of eventDirectories) {
    if (!/^\d{4}-\d{2}-\d{2}-[a-z0-9][a-z0-9-]*$/.test(directory)) {
      failures.push(`event-specific/${directory} must use YYYY-MM-DD-<event-slug>`)
    }

    if (!metadataBySlug.has(directory)) {
      failures.push(`event-specific/${directory} is missing from event-specific/events.json`)
    }
  }

  for (const event of metadata.events) {
    const missingFields = [
      'slug',
      'title',
      'date',
      'status',
      'audience',
      'entrypoint',
      'agenda',
      'setupPath',
      'facilitatorRunbook',
    ].filter((field) => !event[field])
    if (missingFields.length > 0) {
      failures.push(`event metadata entry is missing ${missingFields.join(', ')}: ${event.slug ?? '(unknown slug)'}`)
      continue
    }

    if (event.slug && !event.slug.startsWith(`${event.date}-`)) {
      failures.push(`event metadata slug must start with its date for ${event.slug}: ${event.date}-`)
    }

    const eventDirectory = path.join(root, 'event-specific', event.slug)
    if (!fs.existsSync(eventDirectory)) {
      failures.push(`event metadata references a missing folder: event-specific/${event.slug}`)
      continue
    }

    const requiredEventFiles = [
      'attendee-links.md',
      'requirements.md',
      'facilitator-runbook.md',
      'fallback-plan.md',
      'day-before-checklist.md',
    ]
    for (const requiredEventFile of requiredEventFiles) {
      if (!fs.existsSync(path.join(eventDirectory, requiredEventFile))) {
        failures.push(`event-specific/${event.slug} is missing ${requiredEventFile}`)
      }
    }

    const metadataPaths = [
      event.entrypoint,
      event.agenda,
      event.setupPath,
      event.facilitatorRunbook,
      ...(event.requiredFiles ?? []),
    ].filter(Boolean)
    for (const metadataPath of metadataPaths) {
      if (!fs.existsSync(path.join(root, metadataPath))) {
        failures.push(`event-specific/events.json references missing path for ${event.slug}: ${metadataPath}`)
      }
    }

    const eventText = requiredEventFiles
      .map((file) => path.join(eventDirectory, file))
      .filter((filePath) => fs.existsSync(filePath))
      .map((filePath) => fs.readFileSync(filePath, 'utf8'))
      .join('\n')
    if (!/Do not (put|post|paste).*(secret|API key|token|credential)/is.test(eventText)) {
      failures.push(`event-specific/${event.slug} is missing explicit public-safety wording`)
    }

    const eventTime = Date.parse(`${event.date}T00:00:00Z`)
    const today = new Date().toISOString().slice(0, 10)
    if (!Number.isNaN(eventTime) && event.date < today && !['completed', 'archived'].includes(event.status)) {
      addWarning(`event-specific/${event.slug} has a past date but status is ${event.status}`)
    }

    if (event.listedInRoot === true) {
      const rootNavigation = `${fs.readFileSync(path.join(root, 'README.md'), 'utf8')}\n${fs.readFileSync(
        path.join(root, 'START-HERE.md'),
        'utf8',
      )}`
      if (!rootNavigation.includes(event.entrypoint)) {
        failures.push(`Root navigation does not include listed event entrypoint: ${event.entrypoint}`)
      }
    }
  }
}

function checkMarkdownQuality(filePath, text) {
  const relativePath = relative(filePath)
  const skipLongLineChecks =
    relativePath.startsWith('research/metics-') ||
    relativePath.endsWith('slides.html') ||
    relativePath.endsWith('openclaw-architecture-showcase.html')
  const lines = text.split(/\r?\n/)
  let inCodeFence = false
  let previousHeadingLevel = 0
  const localLinkCounts = new Map()
  const linkPattern = /!?\[[^\]\n]*\]\(([^)]+)\)/g

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]
    const lineNumber = index + 1
    const trimmed = line.trim()

    if (trimmed.startsWith('```')) {
      inCodeFence = !inCodeFence
      continue
    }

    if (inCodeFence) continue

    const heading = /^(#{1,6})\s+\S/.exec(line)
    if (heading) {
      const level = heading[1].length
      if (previousHeadingLevel > 0 && level > previousHeadingLevel + 1) {
        addWarning(`${relativePath}:${lineNumber} jumps from H${previousHeadingLevel} to H${level}`)
      }
      previousHeadingLevel = level
    }

    if (
      !skipLongLineChecks &&
      line.length > 240 &&
      !trimmed.startsWith('|') &&
      !/^[-*]?\s*<?https?:\/\//.test(trimmed)
    ) {
      addWarning(`${relativePath}:${lineNumber} is ${line.length} characters long`)
    }
  }

  let match
  while ((match = linkPattern.exec(stripMarkdownCodeBlocks(text)))) {
    const normalized = normalizeLink(match[1])
    if (!normalized || normalized.startsWith('#') || normalized.startsWith('/') || isExternalLink(normalized)) continue
    localLinkCounts.set(normalized, (localLinkCounts.get(normalized) ?? 0) + 1)
  }

  for (const [link, count] of localLinkCounts.entries()) {
    if (count > 5) {
      if (isIntentionalRepeatedLocalLink(relativePath, link)) continue
      addWarning(`${relativePath} links to ${link} ${count} times`)
    }
  }
}

function validateRequiredFiles() {
  for (const requiredFile of requiredFiles) {
    if (!fs.existsSync(path.join(root, requiredFile))) {
      failures.push(`Required file is missing: ${requiredFile}`)
    }
  }
}

function validateProgramMethod() {
  const requiredResearchHeadings = [
    '## Question',
    '## Primary Sources Inspected',
    '## Freshness and Provenance',
    '## Rights and Publishability',
    '## Source Facts',
    '## Analysis',
    '## Relevance to the AI-Native Operating Framework',
    '## Relevance to AI Dev Days',
    '## What Should Be Reused',
    '## What Should Not Be Copied',
    '## Remaining Gaps',
    '## Recommendation',
  ]
  const templatePath = path.join(root, 'research/source-note-template.md')
  if (fs.existsSync(templatePath)) {
    const template = fs.readFileSync(templatePath, 'utf8')
    for (const heading of requiredResearchHeadings) {
      if (!template.includes(heading)) {
        failures.push(`research/source-note-template.md is missing ${heading}`)
      }
    }
  }

  const charterPath = path.join(root, 'CHARTER.md')
  if (fs.existsSync(charterPath)) {
    const charter = fs.readFileSync(charterPath, 'utf8')
    for (const requiredSection of [
      '## Mission',
      '## Scope',
      '## Founding Commitments',
      '## Relationship to the AI-Native Operating Framework',
      '## Non-Goals',
      '## Stewardship',
      '## Amendment',
    ]) {
      if (!charter.includes(requiredSection)) {
        failures.push(`CHARTER.md is missing ${requiredSection}`)
      }
    }
  }
}

function validateAppScripts() {
  const packageJson = readJson('projects/beaver-badges/app/package.json')
  if (!packageJson?.scripts) return

  for (const scriptName of ['build', 'typecheck', 'check']) {
    if (!packageJson.scripts[scriptName]) {
      failures.push(`projects/beaver-badges/app/package.json is missing scripts.${scriptName}`)
    }
  }
}

function validatePersonalAiAgentsSeed() {
  try {
    verifyEmbeddedSeed(root)
  } catch (error) {
    failures.push(`Personal AI Agents seed fallback check failed: ${error.message}`)
  }
}

walk(root)
validateRequiredFiles()
validateProgramMethod()
validateAppScripts()
validateBeaverBadgesData()
validateEventMetadata()
validatePersonalAiAgentsSeed()

const linkFiles = files.filter((file) => file.endsWith('.md') || file.endsWith('.html'))
for (const file of linkFiles) {
  checkLocalLinks(file, fs.readFileSync(file, 'utf8'))
}

const markdownFiles = files.filter((file) => file.endsWith('.md'))
for (const file of markdownFiles) {
  checkMarkdownQuality(file, fs.readFileSync(file, 'utf8'))
}

console.log('AI Dev Days repo audit')
console.log(`- Files scanned: ${files.length}`)
console.log(`- Markdown/HTML files checked for local links: ${linkFiles.length}`)
console.log(`- Markdown files checked for quality: ${markdownFiles.length}`)
console.log(`- Required files checked: ${requiredFiles.length}`)

if (warnings.length > 0) {
  console.log('\nWarnings:')
  for (const warning of warnings) {
    console.log(`- ${warning}`)
  }
  if (suppressedWarnings > 0) {
    console.log(`- ${suppressedWarnings} additional warnings suppressed`)
  }
}

if (failures.length > 0) {
  console.error('\nFailures:')
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exit(1)
}

console.log('\nAudit passed.')
