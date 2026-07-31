# Goal Prompt

```text
/goal Build the E Corp Cyber Escalation Command Center static app from the checked-in workshop corpus and issue artifacts.

Work from:
event-specific/2026-07-21-personal-ai-agents-live/

Read:
- PRD.md
- demo/app-output-spec.md
- demo/issue-artifacts.md
- demo/implementation-plan.md
- demo/source-corpus/company-brief.md
- demo/source-corpus/stakeholder-brief.md
- demo/source-corpus/discovery-transcript.md
- demo/source-corpus/emails.md
- demo/source-corpus/memos.md
- demo/source-corpus/chats.md
- demo/source-corpus/people.yaml
- demo/source-corpus/systems.yaml
- demo/source-corpus/signals.json

Build:
- demo/app/index.html
- demo/app/styles.css
- demo/app/app.js
- demo/app/data/app-seed.json

Requirements:
- static local-only app
- no React, Vite, backend, database, auth, or external services
- dark professional UI
- command center tab
- evidence feed tab
- executive brief tab
- fabricated repo tab
- build trace tab
- local filters
- local owner/status changes
- reviewed evidence toggle
- local notes
- simulated commits/PR toggle
- JSON export and reset

Safety:
- no live GitHub actions
- no live account connections
- no external sends
- no operational cyber instructions
- clearly label corpus and repo as fictional workshop material

Verification:
- open the app locally
- confirm all tabs render
- confirm filters and local state controls work
- confirm export produces JSON
- confirm reset clears local state
```
