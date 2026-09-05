#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
export function validateEdition(root) {
  const read = name => fs.readFileSync(path.join(root, name), 'utf8')
  const edition = read('VERSION').trim()
  if (!/^\d{4}\.\d{2}\.\d{2}(?:\.[1-9]\d*)?$/.test(edition)) throw new Error('Invalid calendar edition')
  const date = edition.slice(0, 10).replaceAll('.', '-')
  if (Number.isNaN(Date.parse(date)) || new Date(date).toISOString().slice(0,10) !== date) throw new Error('Invalid publication date')
  const cff = read('CITATION.cff')
  if (!cff.includes(`version: "${edition}"\n`) || !cff.includes(`date-released: ${date}\n`)) throw new Error('Citation edition/date mismatch')
  for (const name of ['CHARTER.md','GOVERNANCE.md','CONTRIBUTING.md','docs/research-and-education-method.md']) {
    if (!read(name).split('\n').find(line => line.startsWith('**Status:**'))?.toLowerCase().includes(`edition ${edition}`)) throw new Error(`Stale status: ${name}`)
  }
  if (!read('CHANGELOG.md').includes(`## [${edition}] - ${date}`)) throw new Error('Missing dated changelog')
  if (!read(`docs/releases/v${edition}.md`).startsWith(`# AI Dev Days v${edition}\n`)) throw new Error('Release note edition mismatch')
  if (!read('docs/releases/README.md').includes(`(v${edition}.md)`)) throw new Error('Release navigation missing')
  const provenance = '8868a248457dd7b663563beb243c5ebcbb8ac360'
  if (!read('CHARTER.md').includes(provenance) || !read('CHARTER.md').includes('Commons v2026.09.05')) throw new Error('Commons provenance mismatch')
  return edition
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try { console.log(`Edition metadata passed: ${validateEdition(process.cwd())}`) }
  catch (error) { console.error(error.message); process.exit(1) }
}
