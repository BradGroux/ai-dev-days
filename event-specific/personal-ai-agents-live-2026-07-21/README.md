# Personal AI Agents LIVE OpenClaw Workshop

Date: July 21, 2026
Time: 3:20-4:05 PM EST, as published by the organizer
Session: Using Personal AI in 2026: OpenClaw and the New Developer Workflow
Format: live online workshop
Event page and schedule: https://summit.ai/#schedule
Audience: developers, technical builders, security practitioners, product leaders, and AI workflow adopters

This packet supports a 45-minute workshop showing the full path from messy stakeholder discovery to a working app.

## Workshop Arc

1. OpenClaw generates or loads fictional E Corp business context.
2. OpenClaw runs `$grill-with-docs` to sharpen the product direction.
3. OpenClaw creates the Product Requirements Document (PRD).
4. Codex creates full-context issue artifacts for a fabricated repo page.
5. Codex writes the `/goal` prompt in Markdown.
6. Codex builds a local static app from the goal.

## Materials

- Product Requirements Document (PRD): [PRD.md](PRD.md)
- Prompt pack: [prompt-pack.md](prompt-pack.md)
- OpenClaw workflow: [demo/openclaw-prd-workflow.md](demo/openclaw-prd-workflow.md)
- Corpus generation prompt: [demo/corpus-generation-prompt.md](demo/corpus-generation-prompt.md)
- Codex issue prompt: [demo/codex-issue-prompt.md](demo/codex-issue-prompt.md)
- Goal prompt: [demo/goal-prompt.md](demo/goal-prompt.md)
- Presentation prompt: [demo/presentation-prompt.md](demo/presentation-prompt.md)
- Implementation plan: [demo/implementation-plan.md](demo/implementation-plan.md)
- App output spec: [demo/app-output-spec.md](demo/app-output-spec.md)
- Issue artifacts: [demo/issue-artifacts.md](demo/issue-artifacts.md)
- Source corpus: [demo/source-corpus/](demo/source-corpus/)
- Local app: [demo/app/index.html](demo/app/index.html)
- Slides: [slides.html](slides.html)
- PDF deck: [slides.pdf](slides.pdf)
- Speaker notes: [speaker-notes-45-minute.md](speaker-notes-45-minute.md)
- Facilitator runbook: [facilitator-runbook.md](facilitator-runbook.md)
- Day-before checklist: [day-before-checklist.md](day-before-checklist.md)
- Fallback plan: [fallback-plan.md](fallback-plan.md)
- Attendee links: [attendee-links.md](attendee-links.md)

## Demo Outcome

The final output is the E Corp Cyber Escalation Command Center: a local-only static app for triaging fictional cyber risks, issues, and threats.

The app includes a command center, evidence feed, executive brief, fabricated repo page, build trace, local persistence, JSON export, and reset.

The final packet also includes a local HTML slide deck, PDF export, and 45-minute speaker notes.

The HTML deck is the visual source of truth. Regenerate the PDF from one dark-theme
1920x1080 screenshot per `#slideN`, assembled in slide order with the HTTPS link
annotations preserved. Do not use browser print-to-PDF because print rendering can
change the screen colors.

## Seed Data

[`demo/app/data/app-seed.json`](demo/app/data/app-seed.json) is the canonical app seed.
After editing it, regenerate the direct-file fallback from the repository root:

```bash
node scripts/sync-personal-ai-agents-seed.mjs
```

Verify parity without writing files:

```bash
node scripts/sync-personal-ai-agents-seed.mjs --check
```

The repository audit runs the same parity and 12-escalation check.

## Safety Boundary

Do not paste secrets, API keys, tokens, credentials, real personal data, real customer records, live incident details, or non-public work material into the demo.
Do not connect live accounts, send messages, create live GitHub issues, open pull requests, trigger alerts, deploy code, delete data, or take irreversible actions.

Use the checked-in fictional corpus or generate a small fictional live slice.
