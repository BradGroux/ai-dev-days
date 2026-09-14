# TAMU OpenClaw Dev Days

This directory is the complete historical packet for the May 2, 2026 Texas A&M workshop.

The workshop originally lived across the root of the OpenClaw Dev Days repository. The AI Dev Days refactor renamed the event directory but left the Beaver Badges app, curriculum, labs, setup guides, agent resources, and supporting material at shared top-level paths. This restored copy keeps the event self-contained.

## Start here

1. [Requirements](requirements.md)
2. [Attendee links](attendee-links.md)
3. [TAMU OpenClaw onboarding](openclaw-onboarding-tamu-gpt-5-5.md)
4. [Workshop agenda](curriculum/agenda/tamu-2026-05-02.md)
5. [Mac setup](curriculum/setup-guides/mac.md) or [Windows setup](curriculum/setup-guides/windows.md)
6. [First success lab](labs/first-success.md)
7. [Markdown thinking-layer lab](labs/markdown-thinking-layer.md)
8. [Beaver Badges project](projects/beaver-badges/README.md)

## Beaver Badges

The complete workshop project is restored here:

- [Product requirements](projects/beaver-badges/PRD.md)
- [Project guide](projects/beaver-badges/README.md)
- [React/Vite app](projects/beaver-badges/app/)
- [Badge and location data](projects/beaver-badges/data/)
- [Logo and image assets](projects/beaver-badges/app/public/)

From the repository root, run the historical app:

```bash
cd event-specific/2026-05-02-tamu-openclaw/projects/beaver-badges/app
npm ci
npm run dev
```

## Curriculum and exercises

- [Agent roles](curriculum/agent-roles/README.md)
- [TAMU challenges](curriculum/challenges/tamu-2026-05-02.md)
- [Curriculum modules](curriculum/modules/)
- [Hands-on labs](labs/)
- [Example memory](examples/memory/first-memory.md)
- [Orchestrator example](examples/orchestrator-patterns/startup-orchestration.md)
- [Beaver Badges prompt](examples/prompts/beaver-badges-mvp.md)

## Facilitator resources

- [Facilitator runbook](facilitator-runbook.md)
- [Day-before checklist](day-before-checklist.md)
- [Fallback plan](fallback-plan.md)
- [First-hour speaker notes](first-hour-speaker-notes.md)
- [Install triage](helper-runbook/install-triage.md)
- [Workshop runbook](RUNBOOK.md)
- [Publication safety](PUBLICATION-SAFETY.md)

## Setup and reference material

- [Setup guides](setup-guides/)
- [Troubleshooting](troubleshooting/)
- [OpenClaw architecture](docs/openclaw-architecture.md)
- [Architecture visual](docs/openclaw-architecture-showcase.html)
- [Research and source notes](research/)

## Recovery source

The restored nested files come from Git commit [`cd4e86e8e104abb30de8c518a25ab6f57bc9ae35`](https://github.com/BradGroux/ai-dev-days/tree/cd4e86e8e104abb30de8c518a25ab6f57bc9ae35), the direct parent of the July 30 AI Dev Days refactor.

Git history does not contain a TAMU-specific `slides.html`, PDF, PowerPoint, or Keynote file. The presentation material committed for this event is the agenda, curriculum modules, and first-hour speaker notes above.
