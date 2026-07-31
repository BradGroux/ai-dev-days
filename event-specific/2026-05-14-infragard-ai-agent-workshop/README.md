# InfraGard AI Agent Workshop - 2026-05-14

- **Event title:** AI Agent Teams for Critical Infrastructure: Practical Workflows, Security Guardrails, and Governed Automation
- **Eventbrite listing:** [May 2026 Meeting-InfraGard Houston Artificial Intelligence CSC](https://www.eventbrite.com/e/may-2026-meeting-infragard-houston-artificial-intelligence-csc-tickets-1987707441465)
- **Time:** Thursday, May 14, 2026, 11:30 AM-1:00 PM Central
- **Format:** Virtual, 90 minutes total. Brad should plan for about 80 minutes of content plus audience questions.
- **Presenter:** Brad Groux
- **Facilitator:** Richard Garodnick
- **Organizer:** InfraGard Houston Artificial Intelligence CSC
- **Audience:** InfraGard Houston members across cybersecurity, IT, OT, critical infrastructure, energy, maritime, healthcare, legal, logistics, operations, and adjacent sectors.
- **Info contact from listing:** ArtificialIntelligence-CSC@infragardhouston.org

## Start Here

- Attendees: [`attendee-links.md`](attendee-links.md)
- Requirements: [`requirements.md`](requirements.md)
- Slide deck: [`slides.html`](slides.html) / [`slides.pdf`](slides.pdf)
- Optional prep: [`attendee-prep.md`](attendee-prep.md)
- Session agenda: [`agenda.md`](agenda.md)
- Practical prompt pack: [`prompt-pack.md`](prompt-pack.md)
- Scenario cards: [`scenario-cards.md`](scenario-cards.md)
- Agent team project: [`../../projects/infragard-agent-team/`](../../projects/infragard-agent-team/)

## Presenter Packet

- Facilitator runbook: [`facilitator-runbook.md`](facilitator-runbook.md)
- Speaker notes: [`speaker-notes-80-minute.md`](speaker-notes-80-minute.md)
- Demo script: [`demo-script.md`](demo-script.md)
- Fallback plan: [`fallback-plan.md`](fallback-plan.md)
- Day-before checklist: [`day-before-checklist.md`](day-before-checklist.md)
- Reference links: [`reference-links.md`](reference-links.md)

## Purpose

This session is the practical follow-up to Brad's March 2026 InfraGard AI agents
overview. The prior talk covered what agents are, why enterprise guardrails
matter, and why critical infrastructure teams should care. This session moves
from awareness to practice.

The session should answer four questions:

1. What is an AI agent team in plain English?
2. How do you give agents useful memory, roles, and boundaries?
3. How do you verify agent work before trusting it?
4. How can critical infrastructure teams experiment safely without handing sensitive operations to ungoverned tools?

OpenClaw is the example environment, not the headline. The durable lesson is agent-based work design: process mapping, memory, verification, guardrails, and human approval loops.

## Core Message

The technology will change. The operating model matters more.

Attendees should leave understanding how to:

- turn a fuzzy process into a clear workflow
- assign specialized agent roles instead of relying on one generic chatbot
- preserve context in plain Markdown
- separate low-risk experimentation from enterprise rollout
- verify output before using it
- keep humans in approval loops for sensitive, operational, or externally visible work

## Prior Session Carry-Forward

The March session established the landscape:

- agents are not just chatbots; they can use tools, follow plans, keep context, and execute multi-step work
- enterprise adoption requires policy, identity/access, observability, and human intervention points
- shadow AI is already a security issue
- prompt injection, data exposure, tool/plugin risk, agent impersonation, and agent-to-agent lateral movement are real threat surfaces
- critical infrastructure teams have useful agent opportunities in SOC triage, threat intelligence, compliance evidence, incident response, SOPs, field reporting, and operational coordination

This session turns that into a practical workflow attendees can repeat.

## Recommended Run Of Show

| Segment | Time | Lead | Purpose |
|---|---:|---|---|
| Welcome and why this follow-up exists | 5 min | Richard / Andrew | Set expectations, remind attendees this is practical literacy |
| Security and critical infrastructure frame | 8 min | Richard + Brad | Threat actors, shadow AI, and why hands-on literacy matters |
| Agent teams and durable memory | 14 min | Brad | Agents, roles, Markdown memory, boundaries, and verification |
| Practical workflow demo | 28 min | Brad | Use a sanitized process, create memory, assign roles, review output |
| Real-world use cases | 15 min | Brad | Heavy haul logistics, field reporting, SOC/compliance, OT/IT coordination |
| Governance path and Q&A | 15 min | Richard + Brad | Identity, access, audit, approval loops, rollout path, audience questions |
| Close and 30-day challenge | 5 min | Richard / Andrew + Brad | Point to repo, prompt pack, Discord, and next action |

If Q&A starts early, let it happen. The room is likely mixed between senior
leaders and hands-on practitioners. Keep answers tied to the same pattern:
define the process, bound the data, give the agent a role, verify the output,
then decide whether automation is safe.

## Attendee Outcome

The minimum useful outcome is not installing every tool. It is leaving with:

- one low-risk workflow to improve
- one Markdown memory file
- one agent team design
- one security/guardrail checklist
- one verified artifact to improve after the session
- one 30-day next step

## Safety Boundary

Use sanitized examples. Do not put secrets, API keys, private data, customer
records, internal network details, regulated data, unpatched vulnerability
details, or sensitive operational details into public tools, shared files,
screenshots, or GitHub.

For high-risk work, agents draft. Humans approve.
