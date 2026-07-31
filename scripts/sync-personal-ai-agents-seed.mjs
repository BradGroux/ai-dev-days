#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'
import { fileURLToPath } from 'node:url'

export const seedJsonPath = 'event-specific/2026-07-21-personal-ai-agents-live/demo/app/data/app-seed.json'
export const embeddedSeedPath = 'event-specific/2026-07-21-personal-ai-agents-live/demo/app/data/app-seed.js'

const header = '// Generated from app-seed.json so the demo can run directly from file://.\n'

export function buildEmbeddedSeed(seedData) {
  return `${header}window.ECORP_APP_SEED = ${JSON.stringify(seedData, null, 2)};\n`
}

function readSeedData(root) {
  const fullJsonPath = path.join(root, seedJsonPath)
  if (!fs.existsSync(fullJsonPath)) {
    throw new Error(`missing canonical seed: ${seedJsonPath}`)
  }

  try {
    return JSON.parse(fs.readFileSync(fullJsonPath, 'utf8'))
  } catch (error) {
    throw new Error(`invalid canonical seed JSON: ${error.message}`)
  }
}

function evaluateEmbeddedSeed(source) {
  const context = { window: {} }
  vm.runInNewContext(source, context, { filename: embeddedSeedPath })
  return context.window.ECORP_APP_SEED
}

export function verifyEmbeddedSeed(root = process.cwd()) {
  const seedData = readSeedData(root)
  const fullEmbeddedPath = path.join(root, embeddedSeedPath)
  if (!fs.existsSync(fullEmbeddedPath)) {
    throw new Error(`missing direct-file seed fallback: ${embeddedSeedPath}`)
  }

  const actual = fs.readFileSync(fullEmbeddedPath, 'utf8')
  const expected = buildEmbeddedSeed(seedData)
  if (actual !== expected) {
    throw new Error(`direct-file seed fallback is out of sync; run node scripts/sync-personal-ai-agents-seed.mjs`)
  }

  let embeddedSeed
  try {
    embeddedSeed = evaluateEmbeddedSeed(actual)
  } catch (error) {
    throw new Error(`direct-file seed fallback is not executable: ${error.message}`)
  }

  if (JSON.stringify(embeddedSeed) !== JSON.stringify(seedData)) {
    throw new Error('direct-file seed fallback does not expose the canonical seed data')
  }

  if (embeddedSeed?.escalations?.length !== 12) {
    throw new Error(`direct-file seed fallback must expose 12 escalations; found ${embeddedSeed?.escalations?.length ?? 0}`)
  }

  return { escalationCount: embeddedSeed.escalations.length }
}

export function syncEmbeddedSeed(root = process.cwd()) {
  const seedData = readSeedData(root)
  const fullEmbeddedPath = path.join(root, embeddedSeedPath)
  const expected = buildEmbeddedSeed(seedData)
  const current = fs.existsSync(fullEmbeddedPath) ? fs.readFileSync(fullEmbeddedPath, 'utf8') : null

  if (current === expected) return { changed: false }

  fs.writeFileSync(fullEmbeddedPath, expected)
  return { changed: true }
}

function runCli() {
  const mode = process.argv[2] ?? '--write'
  if (!['--write', '--check'].includes(mode) || process.argv.length > 3) {
    console.error('Usage: node scripts/sync-personal-ai-agents-seed.mjs [--write|--check]')
    process.exit(2)
  }

  try {
    if (mode === '--check') {
      const result = verifyEmbeddedSeed()
      console.log(`Personal AI Agents seed fallback matches the canonical JSON (${result.escalationCount} escalations).`)
      return
    }

    const result = syncEmbeddedSeed()
    const verification = verifyEmbeddedSeed()
    console.log(
      `${result.changed ? 'Updated' : 'No change to'} Personal AI Agents seed fallback (${verification.escalationCount} escalations).`,
    )
  } catch (error) {
    console.error(`Personal AI Agents seed fallback check failed: ${error.message}`)
    process.exit(1)
  }
}

const invokedPath = process.argv[1] ? fs.realpathSync(path.resolve(process.argv[1])) : null
const modulePath = fs.realpathSync(fileURLToPath(import.meta.url))
if (invokedPath === modulePath) {
  runCli()
}
