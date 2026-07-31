# Implementation Plan

## Goal

Build a static, local-only E Corp Cyber Escalation Command Center app for the workshop.

## Steps

1. Convert source corpus and issue artifacts into `demo/app/data/app-seed.json`, then run `node scripts/sync-personal-ai-agents-seed.mjs` from the repository root to regenerate the direct-file fallback.
2. Create static app shell with semantic tabs.
3. Add command center queue with filters and local workflow controls.
4. Add evidence feed linked to escalation IDs.
5. Add executive brief with top risks, heatmap, blockers, and decisions.
6. Add fabricated repo page with issue details and optional simulated commits/PRs.
7. Add Build Trace tab showing the artifact chain.
8. Add localStorage persistence, export, and reset.
9. Create `slides.html`, `slides.pdf`, and `speaker-notes-45-minute.md` after the app direction is stable.
10. Open app locally and run a visual/manual smoke check.
11. Open slides locally and confirm the PDF export matches the HTML deck.

## Verification

- All tabs render.
- Queue filters work.
- Owner, status, reviewed, and notes persist locally.
- Export returns JSON.
- Reset clears local changes.
- The app does not call external services.
- `slides.html` opens locally.
- `slides.pdf` exists and reflects the same deck.
- Speaker notes support the 45-minute workshop.

## Skip If Behind

- Simulated commits and pull requests.
- Advanced charts.
- Markdown rendering beyond simple excerpts.

Keep the core queue, evidence, executive brief, repo page, and build trace.
