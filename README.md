# OpenClaw Dev Days

OpenClaw Dev Days is the reusable workshop kit for teaching OpenClaw without turning the room into install hell.

The point is simple: get people to one real operator win fast, then show them how to extend it.

This repo includes raw research notes to show the workshop-building process; sensitive or private details should be excluded before anything is published.

## Choose your path

Start with [`START-HERE.md`](START-HERE.md) if you are not sure which file you need.

- Attendees: use the event-specific links your facilitator shared.
- Facilitators: use [`RUNBOOK.md`](RUNBOOK.md).
- Organizers: copy [`event-specific/_template/`](event-specific/_template/) for a new event.
- Curriculum: use [`curriculum/README.md`](curriculum/README.md) and [`curriculum/course-map.md`](curriculum/course-map.md).
- AI literacy alignment: use [`docs/ai-literacy-framework-alignment.md`](docs/ai-literacy-framework-alignment.md).
- Contributors: review [`CONTRIBUTING.md`](CONTRIBUTING.md) and
  [`PUBLICATION-SAFETY.md`](PUBLICATION-SAFETY.md) before publishing.
- Architecture: use [`docs/openclaw-architecture.md`](docs/openclaw-architecture.md) or the visual [`docs/openclaw-architecture-showcase.html`](docs/openclaw-architecture-showcase.html).
- Codebase health: see [`docs/codebase-audit.md`](docs/codebase-audit.md).
- Changes: see [`CHANGELOG.md`](CHANGELOG.md).
- Event metadata: see [`event-specific/events.json`](event-specific/events.json) and [`event-specific/refresh-checklist.md`](event-specific/refresh-checklist.md).

## Current And Upcoming Events

### Houston Business Analysts - August 19, 2026

Interactive session for business analysis practitioners and business-technology
partners on turning requirements, process knowledge, and data definitions into
durable, reviewable AI context.

- Packet: [`event-specific/houston-business-analysts-codex-2026-08-19/README.md`](event-specific/houston-business-analysts-codex-2026-08-19/README.md)
- Session plan: [`session-plan.md`](event-specific/houston-business-analysts-codex-2026-08-19/session-plan.md)
- Attendee workbook: [`attendee-workbook.md`](event-specific/houston-business-analysts-codex-2026-08-19/attendee-workbook.md)
- Prompt pack: [`prompt-pack.md`](event-specific/houston-business-analysts-codex-2026-08-19/prompt-pack.md)
- Fictional demo: [`demo/README.md`](event-specific/houston-business-analysts-codex-2026-08-19/demo/README.md)

Slides are intentionally deferred to a future update.

### Personal AI Agents LIVE - July 21, 2026

Workshop packet for developers, builders, security practitioners, product
leaders, and AI workflow adopters.

- Packet: [`event-specific/personal-ai-agents-live-2026-07-21/README.md`](event-specific/personal-ai-agents-live-2026-07-21/README.md)
- Product Requirements Document (PRD): [`event-specific/personal-ai-agents-live-2026-07-21/PRD.md`](event-specific/personal-ai-agents-live-2026-07-21/PRD.md)
- Slides: [`slides.html`](event-specific/personal-ai-agents-live-2026-07-21/slides.html) / [`slides.pdf`](event-specific/personal-ai-agents-live-2026-07-21/slides.pdf)
- Speaker notes: [`speaker-notes-45-minute.md`](event-specific/personal-ai-agents-live-2026-07-21/speaker-notes-45-minute.md)
- Demo workflow: [`demo/openclaw-prd-workflow.md`](event-specific/personal-ai-agents-live-2026-07-21/demo/openclaw-prd-workflow.md)

### H.U.G. Summer Summit AI Panel And Workshop - June 26, 2026

AI panel and workshop packet for educators, students, nonprofit leaders,
community partners, and workforce-readiness supporters.

- Packet: [`event-specific/hug-summer-summit-ai-panel-workshop-2026-06-26/README.md`](event-specific/hug-summer-summit-ai-panel-workshop-2026-06-26/README.md)
- Agenda: [`agenda.md`](event-specific/hug-summer-summit-ai-panel-workshop-2026-06-26/agenda.md)
- Slides: [`slides.html`](event-specific/hug-summer-summit-ai-panel-workshop-2026-06-26/slides.html) / [`slides.pdf`](event-specific/hug-summer-summit-ai-panel-workshop-2026-06-26/slides.pdf)
- Speaker notes: [`speaker-notes-20-minute.md`](event-specific/hug-summer-summit-ai-panel-workshop-2026-06-26/speaker-notes-20-minute.md)
- Workshop prompts: [`prompt-pack.md`](event-specific/hug-summer-summit-ai-panel-workshop-2026-06-26/prompt-pack.md)

## Past Events

- [OpenClaw at Microsoft Build Open Source Zone](event-specific/github-open-source-zone-build-2026-06-02-03/README.md)
- [OpenClaw Creator Demo at GitHub Build](event-specific/github-build-creators-2026-06-01/README.md)
- [InfraGard Houston AI Agent Workshop](event-specific/infragard-ai-agent-workshop-2026-05-14/attendee-links.md)
- [TAMU OpenClaw Dev Days](event-specific/tamu-openclaw-2026-05-02/attendee-links.md)

## Learn more with the community

Dev Days is the starting line, not the finish line. If you want a calmer place to ask follow-up questions, keep building with other operators, and hear about future training, join the Start Small, Think Big community:

- Start Small, Think Big Discord: https://discord.gg/Gmfkm7QVSF

For deeper training, future workshops, and small-business AI/operator playbooks, sign up at:

- Start Small, Think Big: https://sstb.ai

## General OpenClaw install docs

For non-TAMU workshops or personal setup, use the direct OpenClaw installer for your platform, then choose your model provider during onboarding:

- Mac: [`setup-guides/openclaw-mac.md`](setup-guides/openclaw-mac.md)
- Windows: [`setup-guides/openclaw-windows.md`](setup-guides/openclaw-windows.md)
- Microsoft Foundry key setup: [`setup-guides/microsoft-foundry.md`](setup-guides/microsoft-foundry.md)

## What this curriculum is trying to do
- Get attendees from zero to one working OpenClaw loop quickly
- Teach operator workflow, not just terminal commands
- Keep mixed-skill rooms moving together
- Leave behind reusable material other organizers can run with
- Convert curiosity into actual adoption after the event

The curriculum is aligned to the U.S. Department of Labor's AI Literacy Framework:
understand AI principles, explore AI uses directly, direct AI effectively,
evaluate AI outputs, and use AI responsibly. See the
[AI Literacy Framework alignment](docs/ai-literacy-framework-alignment.md) for
the source citation and workshop mapping.

## Core stance
- **First success beats feature coverage.** If people don’t get a working loop early, the rest doesn’t matter.
- **Dashboard first. Channels second.** Messaging integrations are cool and fragile. They are not the critical path.
- **Scenario-first beats blank slate.** Give people a concrete use case instead of a vague platform tour.
- **Workshop time is expensive.** Anything likely to explode should be preflighted, optional, or moved to helper lanes.

## Structure
- `curriculum/` — modules, labs, pacing, facilitator notes, including the Markdown thinking-layer module
- `setup-guides/` — Mac, Windows, AI-assisted install, and Microsoft Foundry instructions
- `labs/` — attendee exercises with binary success checkpoints, including the Markdown thinking-layer lab
- `helper-runbook/` — facilitator triage and rescue-lane guidance
- `troubleshooting/` — common install/model/provider failures
- `docs/` — reusable explainers and visual docs, including the OpenClaw architecture showcase
- `docs/ai-literacy-framework-alignment.md` — mapping to the U.S. Department of Labor AI Literacy Framework
- `event-specific/` — event-specific materials plus a reusable event template
- `research/` — source notes and planning context; not attendee instructions
- `scripts/` — lightweight repo maintenance and publication safety checks
- `CONTRIBUTING.md` — contributor workflow, verification, and review checklist
- `PUBLICATION-SAFETY.md` — public repo safety guidelines for contributors

## Current refinement priorities
1. Keep current and upcoming event packets ready to run from the README.
2. Keep first-success paths short: install, provider, gateway, dashboard, first response.
3. Keep channel setup optional unless the event is specifically about channels.
4. Keep each event packet public-safe, source-backed, and easy to audit.
5. Drive post-event follow-up toward OpenClaw adoption and the SSTB community.

## Success criteria
A good Dev Days session ends with most attendees having:
- OpenClaw installed and running
- a model provider selected during onboarding
- the gateway verified
- the dashboard working
- one first response received
- one memory-backed workflow or scenario sketched, tested, or partially live
- a clear next step into OpenClaw adoption and the SSTB/community follow-up path
