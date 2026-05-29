# Start Here

Use this page to choose the shortest useful path through the repo.

## I am preparing for the GitHub Build creator demo

Start with the June 1, 2026 GitHub Build creator demo packet:

1. [Presenter packet](event-specific/github-build-creators-2026-06-01/README.md)
2. [Slide deck](event-specific/github-build-creators-2026-06-01/slides.html)
3. [Speaker notes](event-specific/github-build-creators-2026-06-01/speaker-notes-15-minute.md)
4. [Demo script](event-specific/github-build-creators-2026-06-01/demo-script.md)
5. [Prompt pack](event-specific/github-build-creators-2026-06-01/prompt-pack.md)

## I am attending the TAMU workshop

Start with the TAMU event links:

1. [Requirements](event-specific/tamu-openclaw-2026-05-02/requirements.md)
2. [Attendee links](event-specific/tamu-openclaw-2026-05-02/attendee-links.md)
3. [Mac setup](curriculum/setup-guides/mac.md)
4. [Windows setup](curriculum/setup-guides/windows.md)
5. [First success lab](labs/first-success.md)

## I am attending the InfraGard Houston AI-CSC session

Start with the InfraGard event packet:

1. [Attendee links](event-specific/infragard-ai-agent-workshop-2026-05-14/attendee-links.md)
2. [Agenda](event-specific/infragard-ai-agent-workshop-2026-05-14/agenda.md)
3. [Optional prep](event-specific/infragard-ai-agent-workshop-2026-05-14/attendee-prep.md)
4. [Prompt pack](event-specific/infragard-ai-agent-workshop-2026-05-14/prompt-pack.md)
5. [Scenario cards](event-specific/infragard-ai-agent-workshop-2026-05-14/scenario-cards.md)
6. [Agent team project](projects/infragard-agent-team/README.md)

## I am attending another workshop

Use the evergreen setup docs first:

1. [Mac OpenClaw setup](setup-guides/openclaw-mac.md)
2. [Windows OpenClaw setup](setup-guides/openclaw-windows.md)
3. [AI-assisted install](setup-guides/ai-assisted-openclaw-install.md)
4. [First success lab](labs/first-success.md)
5. [Markdown thinking-layer lab](labs/markdown-thinking-layer.md)

## I am facilitating a workshop

Run the room from:

1. [Facilitator runbook](RUNBOOK.md)
2. [Curriculum overview](curriculum/README.md)
3. [Course map](curriculum/course-map.md)
4. [One-day agenda](curriculum/agenda/openclaw-dev-days-one-day.md)
5. [AI Literacy Framework alignment](docs/ai-literacy-framework-alignment.md)
6. [Helper install triage](helper-runbook/install-triage.md)
7. [Publication safety guidelines](PUBLICATION-SAFETY.md)
8. [Contributor workflow](CONTRIBUTING.md)
9. [Event template](event-specific/_template/README.md)
10. [Event refresh checklist](event-specific/refresh-checklist.md)

## I just want to install OpenClaw

Use the direct installer for your platform:

- [Mac setup](setup-guides/openclaw-mac.md)
- [Windows setup](setup-guides/openclaw-windows.md)
- [Microsoft Foundry key setup](setup-guides/microsoft-foundry.md)
- [Install command refresh checklist](setup-guides/openclaw-install-refresh-checklist.md)

## I want to understand the OpenClaw architecture

Use the reusable architecture docs:

- [OpenClaw architecture explainer](docs/openclaw-architecture.md)
- [OpenClaw architecture showcase HTML](docs/openclaw-architecture-showcase.html)

## I want the sample project

Use Beaver Badges:

- [Beaver Badges README](projects/beaver-badges/README.md)
- [Beaver Badges PRD](projects/beaver-badges/PRD.md)

## I am adapting this repo for a new event

Copy the event template folder, rename it with your event slug and date, then update the audience-specific assumptions:

```bash
cp -R event-specific/_template event-specific/<event-slug>-YYYY-MM-DD
```

Before committing public-facing material, run:

```bash
./scripts/publication-scan.sh
node scripts/audit-repo.mjs
node scripts/check-external-links.mjs
```
