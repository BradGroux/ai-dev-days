# Agenda - InfraGard AI Agent Workshop

- **Event:** May 2026 Meeting-InfraGard Houston Artificial Intelligence CSC
- **Session title:** AI Agent Teams for Critical Infrastructure: Practical Workflows, Security Guardrails, and Governed Automation
- **Date/time:** Thursday, May 14, 2026, 11:30 AM-1:00 PM Central
- **Duration:** 90 minutes total
- **Presenter:** Brad Groux
- **Facilitator:** Richard Garodnick
- **Event link:** https://www.eventbrite.com/e/may-2026-meeting-infragard-houston-artificial-intelligence-csc-tickets-1987707441465

## Goal

Move attendees from "AI agents are interesting and risky" to "I know how to design one small, safe agent-assisted workflow and verify the result."

## 11:30-11:35 - Welcome And Why This Follow-Up Exists

**Lead:** Richard / Andrew

- Welcome the InfraGard Houston audience.
- State that the March session covered the AI-agent landscape; this one is practical.
- Set the boundary: this is not a live install clinic or a vendor pitch.
- Tell attendees to use sanitized examples and avoid secrets or sensitive operational details.

## 11:35-11:43 - Security And Critical Infrastructure Frame

**Lead:** Richard + Brad

**Purpose:** Create the security bookend before the workflow demo.

Key points:

- Shadow AI and agent tools are already appearing inside organizations.
- Threat actors can use the same pattern: OSINT, phishing, recon, exploit chaining, and persistence work can be accelerated.
- Defenders cannot govern what they do not understand.
- Safe adoption starts with low-risk workflows, bounded data, human approval, and verification.

Transition line:

> The practical answer is not "ban everything" or "trust everything." The practical answer is to learn the workflow, set guardrails, and verify output.

## 11:43-11:57 - Agent Teams And Durable Memory

**Lead:** Brad

Explain the operating model:

- A chatbot answers. An agent follows a goal, uses tools, handles context, and reports back.
- An agent team splits work into roles: process mapper, security reviewer, documentation writer, implementation planner, automation scout.
- Markdown is useful because it is readable by people, usable by agents, renderable by GitHub, and easy to version.
- The human remains the orchestrator and final approver.

Demo anchor:

- Open [`prompt-pack.md`](prompt-pack.md).
- Show the first "create my memory file" prompt.
- Show how role prompts are explicit about scope, data safety, and verification.

## 11:57-12:25 - Practical Workflow Demo

**Lead:** Brad

Use one sanitized scenario from [`scenario-cards.md`](scenario-cards.md). Recommended default:

- field report to customer-ready summary, because it translates across energy, water, logistics, healthcare operations, and security teams without exposing real data.

Demo flow:

1. Define the process in plain English.
2. Create a Markdown memory file.
3. Ask a process mapper to clarify steps, owners, inputs, and outputs.
4. Ask a security reviewer to identify data boundaries and approval points.
5. Ask a documentation writer to produce a draft SOP or checklist.
6. Ask an implementation planner for a low-risk next step.
7. Review the output live and show what you would reject or revise.

Do not chase live setup issues. If OpenClaw, Codex, Claude Code, or another assistant is available, use it. If not, run the demo as a prompt walkthrough in the browser or editor.

## 12:25-12:40 - Critical Infrastructure Use Cases

**Lead:** Brad

Use these as practical patterns, not client-identifying case studies:

### Heavy Haul Logistics

- Manual coordination, spreadsheet/email tracking, and high-value loads.
- Agent workflow: map the dispatch process, identify data handoffs, draft a tracking plan, produce customer-status language, and create verification gates.
- Lesson: small teams can move faster when they convert institutional knowledge into structured workflows.

### Oilfield / Water Testing Field Reporting

- Field notes, lab results, photos, and customer reporting trapped in manual workflows.
- Agent workflow: turn field capture into structured report drafts, flag missing data, and prepare customer-ready summaries for human review.
- Lesson: the biggest leverage is often in boring operational data that already exists.

### SOC / Compliance Evidence

- Repetitive alert triage, control evidence gathering, policy review, and incident timelines.
- Agent workflow: summarize, classify, draft, and cross-check against known controls.
- Lesson: agents are useful for drafting and organizing, but humans certify security conclusions.

### OT/IT Coordination

- Different teams, vocabularies, and risk tolerance.
- Agent workflow: translate operational constraints into IT/security language, draft change plans, and identify approval gates.
- Lesson: agent output can improve communication, but never bypass change control.

## 12:40-12:55 - Governance Path And Q&A

**Lead:** Richard + Brad

Use audience questions, but keep returning to this adoption path:

1. Personal literacy with sanitized examples.
2. One low-risk internal workflow.
3. Explicit data boundaries and approval gates.
4. Logging and review.
5. Enterprise identity/access controls before broad rollout.
6. Continuous verification and incident response planning.

Guardrail checklist:

- What data can the agent see?
- What tools can it use?
- What can it change?
- What must a human approve?
- What gets logged?
- How do we stop it fast?

## 12:55-1:00 - Close And 30-Day Challenge

**Lead:** Richard / Andrew + Brad

Point attendees to:

- [`attendee-links.md`](attendee-links.md)
- [`prompt-pack.md`](prompt-pack.md)
- [`../../projects/infragard-agent-team/memory-template.md`](../../projects/infragard-agent-team/memory-template.md)
- community Discord: https://discord.gg/Gmfkm7QVSF

Closing challenge:

> Pick one low-risk process this week. Write it down in Markdown. Ask an agent to map it, risk-review it, and draft one useful artifact. Verify the result before using it.

## Drop If Behind

Cut these first:

- deep install troubleshooting
- extended tool comparisons
- live channel setup
- long enterprise platform debate
- custom audience-specific consulting

Protect these:

- security boundary
- agent team concept
- Markdown memory
- one practical demo
- verification habits
- 30-day challenge
