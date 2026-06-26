# App Output Spec

## App Name

E Corp Cyber Escalation Command Center

## Delivery Shape

Static local app:

- `index.html`
- `styles.css`
- `app.js`
- `data/app-seed.json`

No framework, backend, database, auth, or external services.

## Navigation

### Command Center

Purpose: triage cyber risks, issues, and threats.

Controls:

- search
- division filter
- severity filter
- status filter
- owner filter
- SLA risk filter
- assign owner
- change status
- add local note

### Evidence Feed

Purpose: inspect emails, memos, chats, and signals linked to escalations.

Controls:

- evidence type filter
- escalation filter
- reviewed toggle
- source excerpt drawer

### Executive Brief

Purpose: summarize business impact for leadership.

Includes:

- top risks
- heatmap by division and severity
- unresolved decisions
- blockers
- recommended next actions

### Fabricated Repo

Purpose: show generated GitHub-style issue artifacts without live GitHub.

Includes:

- repo overview
- local issue board
- labels
- milestones
- issue detail drawer
- acceptance criteria
- evidence needed
- simulated commit/PR toggle

### Build Trace

Purpose: prove the workflow.

Show:

1. source corpus
2. OpenClaw grill notes
3. PRD
4. issue artifacts
5. `/goal` prompt
6. implementation plan
7. simulated commits/PRs if enabled
8. final app state/export

## Data Objects

### Escalation

- id
- title
- category: risk, issue, or threat
- division
- severity
- status
- owner
- slaRisk
- businessImpact
- linkedEvidenceIds
- nextAction

### Evidence

- id
- type: email, memo, chat, signal
- date
- participants
- division
- escalationIds
- summary
- excerpt
- reviewed

### Issue Artifact

- id
- title
- labels
- milestone
- acceptanceCriteria
- evidenceNeeded
- implementationNotes
- simulatedCommits
- simulatedPr

## Visual Direction

Dark, professional, dense, and operational.
Avoid marketing-style hero sections.
Prioritize scanning, filtering, comparison, and repeated action.
