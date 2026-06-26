# Goal Prompt: Complete Personal AI Agents LIVE Implementation Issues

Use this from the root of `BradGroux/openclaw-dev-days`.

```text
/goal Complete the Personal AI Agents LIVE workshop implementation by creating, verifying, and merging PRs in dependency order for issues #34-#43.

Repository:
- BradGroux/openclaw-dev-days

Issue set:
- #34 Generate app seed data from the E Corp source corpus
- #35 Build static app shell for the command center
- #36 Implement command center queue filters and workflow controls
- #37 Implement evidence feed linked to corpus and signals
- #38 Implement executive brief with heatmap and decision summary
- #39 Implement fabricated repo view with simulated commits and PRs
- #40 Implement Build Trace workflow proof
- #41 Add local persistence, JSON export, and reset
- #42 Create workshop slides, PDF export, and 45-minute speaker notes
- #43 Run final workshop smoke checks and packet polish

Authority:
- This goal authorizes creating branches, commits, PRs, and merging those PRs for this issue set after local verification passes.
- Preserve unrelated local changes.
- Do not create new labels unless Brad separately asks.
- Do not include private planning details, local absolute paths, credentials, tokens, real personal data, or operational cyber instructions in public files, commits, PRs, or issues.

Start:
1. Inspect `git status --short --branch`, remotes, and open issues #34-#43.
2. If the event packet source docs under `event-specific/personal-ai-agents-live-2026-07-21/` are not already on `origin/master`, create and merge a small bootstrap PR that adds only the already-authored event packet docs needed by the issues. Do not include app implementation in that bootstrap PR.
3. Sync local `master` after every merge before starting the next branch.

PR order:
1. PR A closes #34: create `demo/app/data/app-seed.json`.
2. PR B closes #35: create framework-free static app shell.
3. PR C closes #36, #37, and #41: implement queue, evidence feed, local persistence, export, and reset.
4. PR D closes #38, #39, and #40: implement executive brief, fabricated repo, and Build Trace.
5. PR E closes #42: create `slides.html`, regenerate `slides.pdf`, and add `speaker-notes-45-minute.md`.
6. PR F closes #43: final smoke checks, packet polish, and any docs needed for accurate handoff.

Implementation constraints:
- Static local app only: HTML, CSS, JavaScript, JSON, YAML, Markdown.
- No React, Vite, backend, database, auth, external services, or live GitHub actions inside the demo app.
- Use the checked-in fictional E Corp corpus only.
- Keep the UI dark, dense, professional, and operational.
- Keep the simulated repo clearly fictional and local.
- Use relative repo paths in app/build-trace content.

Required source reading before coding:
- `event-specific/personal-ai-agents-live-2026-07-21/PRD.md`
- `event-specific/personal-ai-agents-live-2026-07-21/README.md`
- `event-specific/personal-ai-agents-live-2026-07-21/demo/app-output-spec.md`
- `event-specific/personal-ai-agents-live-2026-07-21/demo/implementation-plan.md`
- `event-specific/personal-ai-agents-live-2026-07-21/demo/issue-artifacts.md`
- `event-specific/personal-ai-agents-live-2026-07-21/demo/goal-prompt.md`
- `event-specific/personal-ai-agents-live-2026-07-21/demo/presentation-prompt.md`
- `event-specific/personal-ai-agents-live-2026-07-21/demo/source-corpus/`

Verification before each PR:
- Run the smallest meaningful check for the changed batch.
- Validate JSON after data changes.
- Open app/slides locally when those artifacts exist.
- Run leak scans for local paths/private source filenames/secrets over changed public files.

Final verification before closing #43:
- App opens locally.
- All tabs render.
- Filters work.
- Owner/status/notes/reviewed state persists.
- Export produces valid JSON.
- Reset clears local changes.
- Slides open locally.
- `slides.pdf` exists and matches `slides.html`.
- Speaker notes support the 45-minute workshop.
- `./scripts/publication-scan.sh`
- `node scripts/audit-repo.mjs`

PR behavior:
- Each PR title should name the issue(s) it closes.
- Each PR body must include summary, verification, risks/notes, and `Closes #...`.
- Merge each PR only after verification passes.
- After each merge, sync `master`, confirm the closed issue state, then continue.

Finish with:
- Merged PR URLs in order.
- Closed issue numbers.
- Verification commands/results.
- Any remaining known warnings or follow-ups.
```
