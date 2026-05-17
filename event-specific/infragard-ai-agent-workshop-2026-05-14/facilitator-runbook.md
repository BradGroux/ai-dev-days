# Facilitator Runbook

This is the day-of control panel for the virtual InfraGard Houston AI Agent Workshop.

## Prime Directive

Protect the practical workflow. The session is not complete if attendees only hear about tools. They need to see how to define a process, give an agent role/context, apply guardrails, and verify output.

## Before The Room Opens

- Confirm the virtual room works.
- Open [`attendee-links.md`](attendee-links.md).
- Open [`agenda.md`](agenda.md).
- Open [`prompt-pack.md`](prompt-pack.md).
- Open [`scenario-cards.md`](scenario-cards.md).
- Open [`speaker-notes-80-minute.md`](speaker-notes-80-minute.md).
- Open [`demo-script.md`](demo-script.md).
- Open [`fallback-plan.md`](fallback-plan.md).
- Have the Discord link ready: https://discord.gg/Gmfkm7QVSF

## Opening Safety Script

Read or paraphrase:

> Use sanitized examples today. Do not paste secrets, API keys, passwords,
> private customer data, regulated data, internal network details, unpatched
> vulnerabilities, or sensitive operational details into public tools or shared
> files. Treat agent output as a draft until verified.

## Timing Control

| Time | Segment | Watch For |
|---|---|---|
| 11:30 | Welcome | Keep intro tight |
| 11:35 | Security frame | Avoid extended threat debate |
| 11:43 | Agent teams/memory | Keep jargon low |
| 11:57 | Demo | No install troubleshooting |
| 12:25 | Use cases | Tie every example to workflow pattern |
| 12:40 | Governance/Q&A | Return to guardrails and verification |
| 12:55 | Close | Give a clear 30-day challenge |

## Live Demo Guardrails

- Use sanitized data.
- Keep the agent scope explicit.
- Ask for clarifying questions before plans.
- Show at least one imperfect output and how to review it.
- Avoid private local paths, hidden browser tabs, or unrelated work.
- Do not copy/paste real credentials or private customer details.

## Moderator Redirects

If someone asks for install help:

> Good follow-up path. For today, watch the workflow pattern. The setup guides are linked from the attendee page.

If someone asks a vendor war question:

> The vendor will change. The pattern is stable: process, memory, role, boundaries, verification.

If someone asks about real sensitive data:

> That is exactly where governance matters. For learning, sanitize it. For enterprise use, use approved tools, identity, access control, audit, and human approval.

If someone asks whether agents can be trusted:

> They can be useful. Trust comes after scope, logs, verification, and human accountability.

## Closing

Point attendees to:

- [`attendee-links.md`](attendee-links.md)
- [`prompt-pack.md`](prompt-pack.md)
- [`../../projects/infragard-agent-team/memory-template.md`](../../projects/infragard-agent-team/memory-template.md)
- Discord: https://discord.gg/Gmfkm7QVSF

Close with:

> This week, choose one low-risk process. Write it down in Markdown. Ask an agent to map it, risk-review it, and draft one useful artifact. Then verify it like you would verify work from a junior analyst.
