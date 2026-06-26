# PRD: OpenClaw Open Source Zone Conference Floor Experience

## Problem

Most Microsoft Build attendees will pass the Open Source Zone with limited time and uneven awareness of OpenClaw.
Some will think OpenClaw is another chatbot. Some will understand agents but not the local-first control plane model.
Many business-oriented attendees will not immediately see how a personal AI assistant maps to real operating work.

The floor experience needs to explain OpenClaw quickly, show useful demos, route different personas to the right conversation, and create a credible follow-up path without exposing private data or overpromising production autonomy.

## Source Context

- Microsoft Build 2026 is a June 2-3, 2026 event in San Francisco and online, positioned for AI developers, technical leaders, and enterprise developers.
- Microsoft describes the Open Source Zone as an always-on space to discover real projects and talk directly with maintainers and contributors.
- Microsoft Community Hub lists OpenClaw as one of the Open Source Zone projects alongside AutoGPT, Open WebUI, and prompts.chat.
- GitHub's Microsoft Build page positions GitHub at Build around real code, real systems, real workflows, and hands-on AI development.
- OpenClaw: After Hours at GitHub follows the floor day on Wednesday, June 3, 2026.

Source links:

- Microsoft Build home: https://build.microsoft.com
- GitHub at Microsoft Build: https://github.com/resources/events/github-microsoft-build26
- Microsoft Community Hub Open Source Zone post:
  https://techcommunity.microsoft.com/blog/linuxandopensourceblog/four-open-source-projects-to-explore-at-microsoft-build/4523744

## Goal

Create a two-day maintainer-ready floor kit that helps OpenClaw maintainers:

- explain OpenClaw in 30 seconds, 2 minutes, and 10 minutes
- show practical business and maintainer demos
- connect OpenClaw to real business workflows
- position Veritas Kanban as a concrete OpenClaw-adjacent execution example
- provide safe attendee follow-up links and prompts
- avoid risky live setup, private data exposure, or uncontrolled external actions

## Non-Goals

- Run a full install clinic on the conference floor.
- Ask attendees to paste private company data into a live demo.
- Connect live messaging accounts during walk-up demos.
- Send emails, messages, posts, PR comments, or external actions from the demo.
- Claim OpenClaw is an enterprise governance platform by itself.
- Turn Veritas Kanban into required OpenClaw setup.

## Audience Segments

| Segment | Their Question | Best Angle |
|---|---|---|
| AI developer | "How is this different from a chat app or Copilot?" | Local Gateway, durable sessions, tools, channels, nodes, and visible workflows. |
| Founder/operator | "Can this help my business this quarter?" | Turn messy intake into plans, tasks, follow-ups, and reviewable decisions. |
| Enterprise developer | "How do I keep this safe?" | Local-first, sandboxing, pairing, allowlists, approval gates, and audit habits. |
| OSS maintainer | "Can this help with repo work?" | Issue triage, release notes, PR review prep, docs refresh, contributor onboarding. |
| PM/product leader | "Can agents work against product context?" | PRDs, SOPs, memory, acceptance criteria, and Veritas Kanban task flow. |
| Creator/advocate | "Can this help me explain technical work?" | Public-safe notes to recap, outline, and verification checklist. |

## Messaging Hierarchy

### 30-Second Hook

OpenClaw is a personal AI assistant you run on your own devices. The important part is the Gateway: it gives agents a local control plane for durable context, tools, channels, nodes, and visible workflow instead of one-off chat prompts.

### 2-Minute Overview

OpenClaw is useful because real work is not one prompt.
Real work needs files, memory, tool calls, session history, channels, devices, and review.
OpenClaw brings those pieces into a self-hosted assistant so an operator can keep control while the agent does useful work.

### Business Framing

Business teams should care because OpenClaw turns AI from "generate some text" into "run a bounded workflow against my actual context, then show me what happened before anything risky leaves the workspace."

### Veritas Kanban Framing

Veritas Kanban started as a way to manage OpenClaw-driven work and has grown into a local-first agentic execution platform:
tasks as durable artifacts, optional OpenClaw integration, agent orchestration, workflow gates, and reviewable delivery.
Use it as the "what happens after the agent makes a plan" example.

## Experience Requirements

### Floor Materials

- A maintainer packet with one page of routing guidance.
- A dark, local HTML slide deck that can run offline.
- A short PRD that explains goals, audience, demos, and success criteria.
- A demo script with 30-second, 2-minute, 5-minute, and 10-minute variants.
- Persona-specific talking points.
- A prompt pack that can run against sanitized demo files.
- A fallback path if network, display, model access, or OpenClaw itself fails.

### Demo Requirements

The primary demo must:

- use only synthetic or public-safe notes
- show context before generation
- ask clarifying questions before drafting
- produce a business operating packet and Veritas-ready task map
- include a safety reviewer pass
- mark outputs as draft-only

The maintainer demo must:

- avoid private repo tokens or private issue data
- use public-safe issue summaries or synthetic examples
- show triage, risk, labels, and next actions
- never post comments or make external changes from the floor demo

### Safety Requirements

- Do not paste secrets, API keys, tokens, credentials, private attendee information, private DMs, sponsor terms, customer records, unreleased announcements, or internal company data into the demo.
- Do not connect or display private messaging accounts.
- Do not send, publish, merge, delete, rotate credentials, or trigger irreversible actions.
- Use draft-only artifacts and human approval language.
- Keep every demo workspace clean and separate from Brad's private workspaces.

## Demo Portfolio

### Demo 1: Business Intake To Execution Plan

Purpose: show that OpenClaw can turn messy business context into a reviewable operating packet.

Flow:

1. Load sanitized notes.
2. Load PRD and SOP.
3. Ask the agent to clarify before planning.
4. Generate an operating packet: objective, risks, decisions, task map, review checklist.
5. Map the output into Veritas-ready task cards.
6. Run a safety reviewer pass.

Best for: founders, operators, PMs, enterprise developers, consultants.

### Demo 2: Maintainer Triage

Purpose: show OpenClaw as an OSS maintainer partner.

Flow:

1. Load synthetic issue list.
2. Ask for duplicate detection, impact, likely owner, and next step.
3. Generate a maintainer queue.
4. Identify what needs human review before comment, label, or close.

Best for: GitHub users, OSS maintainers, developer advocates.

### Demo 3: Architecture Walkthrough

Purpose: help technical attendees understand the Gateway mental model.

Flow:

1. Show the slide architecture.
2. Explain clients/channels, Gateway, runtime, tools, memory, and nodes.
3. Map the attendee's use case into those components.

Best for: engineers evaluating integration or deployment.

## Success Metrics

### Quantitative

- 40 or more meaningful booth conversations across both days.
- 15 or more attendees scan or save follow-up links.
- 10 or more serious follow-up conversations for install, integration, or business workflows.
- 5 or more attendees explicitly ask about Veritas Kanban or task/workflow execution.
- 3 or more qualified conversations continue into OpenClaw After Hours or post-event follow-up.

### Qualitative

- Attendees can repeat the Gateway/control-plane model in their own words.
- Business attendees can name one safe workflow they would try first.
- Technical attendees understand the difference between channel setup, tools, nodes, and model providers.
- Maintainers avoid risky live troubleshooting and keep demos clean.
- Follow-up questions become concrete: install, docs, demo files, Veritas, safety, or integration.

## Risks And Mitigations

| Risk | Mitigation |
|---|---|
| Attendee wants to paste private company data | Redirect to synthetic demo and explain how to sanitize first. |
| Network or model provider fails | Use local slides and expected output fallback. |
| Conversation turns into broad enterprise governance claims | Say OpenClaw is a local-first assistant/control plane; production enterprise rollout needs identity, policy, approvals, audit, and environment design. |
| Floor time is too short | Use the 30-second hook and hand off attendee links. |
| Veritas distracts from OpenClaw | Position Veritas as an example execution layer, not a requirement. |
| Maintainer machine exposes private data | Use clean workspace, Do Not Disturb, no private browser tabs, no private repos on screen. |

## Acceptance Criteria

- The event folder includes README, PRD, requirements, facilitator runbook, day-before checklist, fallback plan, attendee links, talking points, demo script, prompt pack, speaker notes, demo files, slides source, and slide PDF.
- The root README and START-HERE navigation link to the event entrypoint.
- `event-specific/events.json` includes the new event and required files.
- The slide deck opens locally without external assets.
- The repo publication scan and audit pass.
- The event materials include explicit public-safety wording.

## Open Questions For Brad And Maintainers

- Confirm exact booth hours for June 2 and June 3.
- Confirm which maintainers will staff each block.
- Confirm whether Veritas Kanban should be shown live, as screenshots, or as a talking-point-only adjacent example.
- Confirm if any official OpenClaw QR, GitHub repo QR, or After Hours registration QR should replace the SSTB Discord QR.
