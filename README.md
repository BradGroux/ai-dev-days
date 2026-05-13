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
- Contributors: review [`PUBLICATION-SAFETY.md`](PUBLICATION-SAFETY.md) and run `./scripts/publication-scan.sh` before publishing.
- Architecture: use [`docs/openclaw-architecture.md`](docs/openclaw-architecture.md) or the visual [`docs/openclaw-architecture-showcase.html`](docs/openclaw-architecture-showcase.html).
- Changes: see [`CHANGELOG.md`](CHANGELOG.md).

## TAMU attendees: start here

For the May 2 TAMU workshop, use these files first:

1. Requirements: [`event-specific/tamu-openclaw-2026-05-02/requirements.md`](event-specific/tamu-openclaw-2026-05-02/requirements.md)
2. Attendee links: [`event-specific/tamu-openclaw-2026-05-02/attendee-links.md`](event-specific/tamu-openclaw-2026-05-02/attendee-links.md)
3. TAMU OpenClaw onboarding: [`event-specific/tamu-openclaw-2026-05-02/openclaw-onboarding-tamu-gpt-5-5.md`](event-specific/tamu-openclaw-2026-05-02/openclaw-onboarding-tamu-gpt-5-5.md)
4. Agenda: [`curriculum/agenda/tamu-2026-05-02.md`](curriculum/agenda/tamu-2026-05-02.md)
5. Mac setup: [`curriculum/setup-guides/mac.md`](curriculum/setup-guides/mac.md)
6. Windows setup: [`curriculum/setup-guides/windows.md`](curriculum/setup-guides/windows.md)
7. AI-assisted install: [`setup-guides/ai-assisted-openclaw-install.md`](setup-guides/ai-assisted-openclaw-install.md)
8. First success lab: [`labs/first-success.md`](labs/first-success.md)
9. Markdown thinking lab: [`labs/markdown-thinking-layer.md`](labs/markdown-thinking-layer.md)
10. Beaver Badges: [`projects/beaver-badges/README.md`](projects/beaver-badges/README.md)

## InfraGard Houston attendees: start here

For the May 14 InfraGard Houston AI-CSC virtual session, use these files first:

1. Attendee links: [`event-specific/infragard-ai-agent-workshop-2026-05-14/attendee-links.md`](event-specific/infragard-ai-agent-workshop-2026-05-14/attendee-links.md)
2. Agenda: [`event-specific/infragard-ai-agent-workshop-2026-05-14/agenda.md`](event-specific/infragard-ai-agent-workshop-2026-05-14/agenda.md)
3. Optional prep: [`event-specific/infragard-ai-agent-workshop-2026-05-14/attendee-prep.md`](event-specific/infragard-ai-agent-workshop-2026-05-14/attendee-prep.md)
4. Prompt pack: [`event-specific/infragard-ai-agent-workshop-2026-05-14/prompt-pack.md`](event-specific/infragard-ai-agent-workshop-2026-05-14/prompt-pack.md)
5. Scenario cards: [`event-specific/infragard-ai-agent-workshop-2026-05-14/scenario-cards.md`](event-specific/infragard-ai-agent-workshop-2026-05-14/scenario-cards.md)
6. Agent team project: [`projects/infragard-agent-team/README.md`](projects/infragard-agent-team/README.md)

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
- `event-specific/` — event-specific materials plus a reusable event template
- `research/` — source notes and planning context; not attendee instructions
- `scripts/` — lightweight repo maintenance and publication safety checks
- `PUBLICATION-SAFETY.md` — public repo safety guidelines for contributors

## Event-specific content
The Texas A&M / Arnold Castro workshop content lives under:
- `event-specific/tamu-openclaw-2026-05-02/`

## Current refinement priorities
1. Lock the first 30-minute success path: direct OpenClaw install → choose your model provider → OpenClaw gateway → dashboard → first response
2. Use the workshop-provided Chat GPT 5.5 Microsoft Foundry API key for TAMU attendees during OpenClaw onboarding
3. Keep WhatsApp/mobile channels out of live setup; demo them only after dashboard success
4. Build a strict attendee preflight and rescue plan
5. Define scenario cards and lab checkpoints
6. Create break challenges after each major block
7. Add facilitator notes for common failure modes
8. Package a first working loop lab that proves the operator model fast
9. Drive post-event conversion toward OpenClaw adoption and the SSTB community/future workshop path

## Success criteria
A good Dev Days session ends with most attendees having:
- OpenClaw installed and running
- a model provider selected during onboarding
- the TAMU workshop Chat GPT 5.5 Microsoft Foundry key configured when applicable
- the gateway verified
- the dashboard working
- one first response received
- one memory-backed workflow or scenario sketched, tested, or partially live
- a clear next step into OpenClaw adoption and the SSTB/community follow-up path
