# Talking Points

Use these as modular lines. Do not read them as a script.

## One-Liner

OpenClaw is a personal AI assistant you run on your own devices, with a Gateway that gives agents durable context, bounded tools, channels, nodes, sessions, and visible workflows.

## What Makes It Different

- It is local-first and self-hosted.
- The Gateway is the control plane, not the whole product.
- Channels let you reach the assistant from the surfaces you already use.
- Sessions and memory make context durable.
- Tools and nodes let the assistant act in bounded ways.
- Good workflows include verification before risky actions.

## Business Talking Points

- Business work is mostly context routing, not magic generation.
- OpenClaw can help turn messy intake into an artifact: plan, checklist, task map, decision log, draft response, or runbook.
- The useful pattern is context, role, boundary, artifact, verification.
- A safe first deployment is draft-only assistance with human approval.
- Do not sell unsupervised autonomy. Sell visible, bounded work.
- The operator remains responsible for facts, approvals, and external actions.

## Veritas Kanban Talking Points

- Veritas Kanban started as a way to manage OpenClaw-driven work.
- It has grown into a local-first agentic execution platform.
- Use it to explain what happens after an agent produces a plan: tasks, owners, states, review, evidence, and workflow gates.
- Veritas is not required to use OpenClaw.
- For business audiences, Veritas makes the "agent work becomes trackable work" story concrete.

## Developer Talking Points

- OpenClaw gives developers a local assistant surface across CLI, dashboard, channels, and nodes.
- The agent can work against real workspace context instead of isolated prompts.
- The architecture supports multiple entry points without making every integration the center of the system.
- Gateway health, logs, sessions, and config are the first debugging surfaces.
- For repo work, start with read-only triage and draft artifacts before letting the agent write.

## Maintainer Talking Points

- Triage issues into duplicates, likely root causes, labels, and next actions.
- Draft release notes from merged PRs and changelog fragments.
- Review contributor onboarding gaps.
- Prepare PR review checklists and risk notes.
- Keep private issue data and tokens out of public demos.
- Never let the floor demo post comments or change repo state.

## Enterprise And Security Talking Points

- Local-first does not remove the need for governance.
- Treat inbound messages as untrusted input.
- Use allowlists, pairing, sandboxing, and least privilege.
- Require approval before external sends, production changes, deletes, merges, credential changes, or costly actions.
- Keep audit trails and review artifacts.
- Start with human-reviewed drafts before escalating to automation.

## Persona-Specific Openers

### Founder

> What is the business process you keep explaining repeatedly to people or tools?

Route to: business intake demo.

### Engineering Leader

> Where does your team lose context between issue, PR, review, and release?

Route to: maintainer demo or Veritas task map.

### Enterprise Developer

> Which part worries you more: the agent output, the tools it can call, or the data it can see?

Route to: architecture and safety walkthrough.

### Open Source Maintainer

> What is the repo chore you always put off because it is boring but high context?

Route to: maintainer triage demo.

### PM Or Operator

> What recurring intake could become a draft plan and task board if the context was already there?

Route to: business intake and Veritas.

## Objection Handling

### "Is this just another chatbot?"

No. The chat is only one surface. The important part is the Gateway and workflow model: sessions, files, tools, channels, nodes, and persistent context.

### "Can it run my whole business?"

Not safely on day one. Start with draft-only workflows and approval gates. Use it to prepare plans, task maps, runbooks, summaries, and reviews before automating actions.

### "What about Copilot?"

Use Copilot where it is strong. OpenClaw is about the assistant control plane around your own context, channels, tools, nodes, and long-running workflows.

### "Can I connect Teams, Slack, or WhatsApp?"

Yes, OpenClaw supports many channels. For a floor conversation, explain the capability but avoid live channel pairing. Channel setup touches real communications and should be done intentionally.

### "Where does Veritas fit?"

OpenClaw helps the agent understand and act. Veritas Kanban helps turn that work into trackable execution: tasks, owners, status, review, and evidence.

## Do Not Say

- "Fully autonomous business operations."
- "No governance needed."
- "Just paste your company data here."
- "We can connect your messaging account right now."
- "The agent can safely post that for you."
- "This replaces review, PM, security, or leadership judgment."
