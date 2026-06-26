# Issue Artifacts

Repository: `ecorp-cyber-escalation-command-center`

Status: fabricated local repo for workshop use only.

## Labels

- `app-shell`
- `data`
- `command-center`
- `evidence`
- `executive-brief`
- `repo-simulation`
- `build-trace`
- `local-state`
- `verification`

## Milestones

- `M1: Static command center`
- `M2: Evidence and executive brief`
- `M3: Repo simulation and build trace`

## Issues

### Issue 1: Build Static App Shell

Labels: `app-shell`, `verification`
Milestone: `M1: Static command center`

Acceptance criteria:

- app opens from `index.html`
- tabs render for Command Center, Evidence Feed, Executive Brief, Fabricated Repo, and Build Trace
- no framework or external service is required

Evidence needed:

- local browser smoke check

### Issue 2: Create App Seed Data

Labels: `data`
Milestone: `M1: Static command center`

Acceptance criteria:

- corpus and issue artifacts are represented in `app-seed.json`
- escalations link to evidence IDs
- issue artifacts link to app features

Evidence needed:

- JSON validates
- app loads data without errors

### Issue 3: Implement Command Center Queue

Labels: `command-center`, `local-state`
Milestone: `M1: Static command center`

Acceptance criteria:

- queue shows title, category, division, severity, owner, status, SLA risk, and next action
- filters work for search, division, severity, status, owner, and SLA risk
- owner and status can be changed locally

Evidence needed:

- manual filter and update check

### Issue 4: Implement Evidence Feed

Labels: `evidence`, `local-state`
Milestone: `M2: Evidence and executive brief`

Acceptance criteria:

- feed displays emails, memos, chats, and signals
- evidence can be filtered by type and escalation
- reviewed state can be toggled locally

Evidence needed:

- manual linked-evidence check

### Issue 5: Implement Executive Brief

Labels: `executive-brief`
Milestone: `M2: Evidence and executive brief`

Acceptance criteria:

- brief shows top risks, heatmap, blockers, unresolved decisions, and recommended actions
- language is board-ready and concise
- brief does not include operational attack steps

Evidence needed:

- visual review

### Issue 6: Implement Fabricated Repo Page

Labels: `repo-simulation`
Milestone: `M3: Repo simulation and build trace`

Acceptance criteria:

- page clearly labels the repo as fictional and local
- issues show labels, milestone, acceptance criteria, and evidence needed
- simulated commits and PRs can be shown or hidden

Evidence needed:

- manual toggle check

### Issue 7: Implement Build Trace

Labels: `build-trace`
Milestone: `M3: Repo simulation and build trace`

Acceptance criteria:

- trace shows source corpus, OpenClaw grill notes, PRD, issue artifacts, goal prompt, implementation plan, and app output
- each trace item has a short summary and source path

Evidence needed:

- visual review

### Issue 8: Add Export And Reset

Labels: `local-state`, `verification`
Milestone: `M3: Repo simulation and build trace`

Acceptance criteria:

- export returns JSON of local app state
- reset clears local owner, status, notes, and reviewed changes
- no external service is called

Evidence needed:

- manual export/reset check
