# Codebase Audit

Date: 2026-05-16

## Scope

This audit covered the OpenClaw Dev Days repository as a workshop kit, publication artifact, and sample application codebase.

- 96 Markdown files
- reusable setup guides, labs, curriculum modules, facilitator runbooks, event packets, research notes, and public safety guidance
- one Vite/React sample app under `projects/beaver-badges/app`
- publication safety tooling under `scripts/`

## Current State

The repo is in solid shape for a Markdown-first workshop kit. Navigation is clear, event-specific folders are separated from evergreen curriculum, and the publication safety script catches the highest-risk public-sharing mistakes.

The main maintainability gaps were not security blockers. They were repeatability and drift risks:

- repo health checks depended on ad hoc shell commands instead of a durable audit command
- event packet completeness was not machine-checked
- event entry points were manually synchronized across root docs
- Markdown quality checks were not repeatable
- the Beaver Badges app mixed state, progress logic, region derivation, and presentation in one component
- region filtering was hard-coded from city names instead of being explicit data
- the app showed unreachable 10- and 25-stop badges as the next goal after the five-stop demo route was complete
- the sample app had a build script but no explicit TypeScript check script

## Refactors Completed

- Added `node scripts/audit-repo.mjs` for repeatable repo checks.
- Added local Markdown/HTML link validation that ignores code fences and external URLs.
- Added event metadata and event-packet validation.
- Added warning-oriented Markdown quality checks.
- Added conservative external link checking for public Markdown and HTML files.
- Added required-file checks for the main repo entry points and Beaver Badges app assets.
- Added Beaver Badges JSON validation for required location fields, duplicate IDs, badge ordering, and milestone sanity.
- Split Beaver Badges app logic into typed progress helpers and focused React components.
- Moved region classification into `projects/beaver-badges/data/locations.json`.
- Fixed demo-route completion copy so roadmap badges do not look like reachable next steps.
- Added `typecheck` and `check` scripts to the Beaver Badges app.
- Added facilitator, research, and OpenClaw install refresh checklists.

## Verification

Run these before publishing or using the sample app in a workshop:

```bash
./scripts/publication-scan.sh
node scripts/audit-repo.mjs
node scripts/check-external-links.mjs
cd projects/beaver-badges/app
npm run check
npm run smoke:visual
```

## Improvement Backlog

All audit backlog items have implementation coverage. Keep expanding this file when a future audit identifies new repo-health work.
