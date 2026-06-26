# PRD: H.U.G. Summer Summit 2026 AI Panel and Workshop Packet

## Problem

The H.U.G. Summer Summit audience is mixed: educators, students, nonprofit
leaders, community partners, and workforce-readiness supporters. They need a
plain-language AI foundation, a practical view of agentic AI, and a safe first
workflow that does not require private student or organizational data.

The event also has two presenters with different roles: Brad frames agentic AI
and OpenClaw, while Arnold Castro leads the interactive workshop.

## Goal

Create a reusable event packet that supports:

- a short AI and agentic AI presentation,
- panel answers about education, careers, responsibility, and community impact,
- OpenClaw installation and model-provider handoff,
- a simple reading-support research-agent demo,
- channel examples for Discord, Teams, WhatsApp, Telegram, and Signal,
- public-safe follow-up through the SSTB Discord.

## Non-Goals

- Replace Arnold's workshop plan.
- Run a full install clinic during Brad's panel time.
- Use private student, donor, staff, or organization records.
- Connect live work accounts, send messages, publish content, or automate external actions.
- Claim OpenClaw is a complete enterprise governance platform.

## Audience Segments

| Segment | Their Question | Best Angle |
|---|---|---|
| Educator | "How can AI help without replacing judgment?" | Draft support, public research summaries, activity ideas, review gates. |
| Student | "What should I learn for future work?" | Context-setting, source checking, responsible use, AI workflow literacy. |
| Nonprofit leader | "Can this save staff time safely?" | Low-risk research, checklists, briefs, volunteer materials, human approval. |
| Community partner | "How does this affect workforce readiness?" | AI as a work practice: context, tools, verification, communication. |
| Technical attendee | "What is OpenClaw?" | Local-first agent workflow control plane with memory, tools, and visible loops. |

## Messaging Hierarchy

### One-Liner

AI becomes useful when people put a harness around it: context, instructions,
memory, tools, review, and human judgment.

The process matters more than the model or harness: source material,
boundaries, review, and the decision about what happens next.

### OpenClaw Line

OpenClaw is a local-first control plane for agent workflows: model providers,
memory, instructions, tools, sessions, channels, and automations.

### H.U.G. Use Case

Start with a reading-support research agent that works only with public or
sanitized sources and produces draft briefs for human review.

## Experience Requirements

The event folder should include:

- README
- PRD
- agenda
- attendee links
- attendee prep
- requirements
- facilitator runbook
- fallback plan
- day-before checklist
- slide source and PDF
- speaker notes
- talking points
- demo script
- prompt pack
- scenario cards
- reference links

## Demo Requirements

The primary demo must:

- use only public, fictional, or sanitized data,
- show memory and `AGENTS.md`,
- configure or describe a model provider,
- produce a draft reading-support brief,
- include a skeptical review prompt,
- end with a human approval point.

## Safety Requirements

- Do not use private student data, donor data, staff records, private meeting links, credentials, tokens, or confidential notes.
- Do not connect live accounts during the demo unless Arnold explicitly chooses that path.
- Do not send, publish, post, or automate external actions.
- Treat all AI output as draft-only until reviewed.

## Acceptance Criteria

- Arnold Castro appears as co-presenter and Texas A&M Professor of Practice.
- The deck uses visual icons for slide concepts.
- The deck separates memory, `AGENTS.md`, and channels into distinct slides.
- The deck explains that process is more important than model or harness.
- The deck includes an SSTB Discord call-to-action slide.
- Root navigation and event metadata include the expanded event packet.
- `slides.pdf` matches `slides.html`.
- Publication scan, repo audit, external link check, and PDF validation pass.
