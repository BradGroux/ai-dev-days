# Prompt Pack

Use these prompts with the demo files under [demo/](demo/). Keep all examples synthetic or public-safe.

## Demo Files

- [demo/sample-public-business-notes.md](demo/sample-public-business-notes.md)
- [demo/business-ops-memory.md](demo/business-ops-memory.md)
- [demo/business-ops-prd.md](demo/business-ops-prd.md)
- [demo/business-ops-sop.md](demo/business-ops-sop.md)

## 1. Clarify The Business Workflow

```text
Read the Business Ops Memory, PRD, SOP, and sample public business notes.

Before drafting anything, ask three clarifying questions that would help you produce a useful operating packet safely.

Do not ask for secrets, API keys, tokens, credentials, private customer data, private employee data, private DMs, sponsor terms, contracts, unreleased announcements, or anything that should not be shown in a public demo.
```

## 2. Business Workflow Architect

```text
Act as a Business Workflow Architect.

Using the Business Ops Memory, PRD, SOP, sample public notes, and my answers, create the smallest useful operating packet.

Return:
1. objective,
2. audience,
3. assumptions,
4. decisions needed,
5. workflow stages,
6. risks,
7. approval gates,
8. draft-only next steps.

Keep it concise. Use only public-safe or synthetic details. If information is missing, use placeholders and name what a human must verify.
```

## 3. Veritas Task Mapper

```text
Act as a Veritas Kanban task mapper.

Convert the approved operating packet into Veritas-ready task cards.

Return 5 to 7 cards with:
1. title,
2. type,
3. priority,
4. owner placeholder,
5. status,
6. acceptance criteria,
7. evidence needed,
8. blocked-by or depends-on notes.

Do not invent real owner names, customer names, dates, private systems, or credentials. Keep every task draft-only.
```

## 4. Safety And Approval Reviewer

```text
Act as a skeptical Safety and Approval Reviewer.

Review the operating packet and Veritas-ready task map against the SOP.

Return:
1. data that must stay out,
2. actions that require human approval,
3. claims that need verification,
4. likely prompt-injection or context-poisoning risks,
5. what should remain draft-only,
6. the safest first live test.

If any part assumes private data or external action, reject that part and suggest a safer substitute.
```

## 5. Maintainer Triage Planner

```text
Act as an open source maintainer triage assistant.

Using only the synthetic issue summaries below, create a maintainer triage queue.

Synthetic issue summaries:
- Issue A: Windows install succeeds but dashboard does not open. User mentions Node 20.
- Issue B: Discord channel replies in a group when not mentioned. User is unsure about allowlist settings.
- Issue C: Docs page shows old onboarding command. Contributor offers a patch.
- Issue D: Feature request for automatic posting to Slack after every agent response.
- Issue E: Bug report says "OpenClaw is broken" with no logs or reproduction steps.

Return:
1. likely category,
2. severity,
3. missing information,
4. suggested label,
5. next maintainer action,
6. what should not be posted or automated without human review.

Do not write public comments. Do not claim a fix exists. Keep the output draft-only.
```

## 6. Two-Minute Attendee Recap

```text
Act as a practical technical explainer.

Summarize OpenClaw for a Microsoft Build attendee in under 140 words.

Required ideas:
- personal AI assistant,
- local-first Gateway/control plane,
- durable context,
- bounded tools/channels/nodes,
- visible workflow,
- human approval before risky actions.

Avoid hype. Do not claim enterprise governance is solved by default.
```

## 7. Follow-Up Email Draft

```text
Act as a careful follow-up drafter.

Draft a short follow-up note to an attendee who asked about OpenClaw business use cases.

Constraints:
- under 160 words,
- no private details,
- include OpenClaw docs and Dev Days repo links,
- mention that the safest first step is a draft-only workflow with synthetic or sanitized data,
- do not imply any agreement, partnership, or commitment.

Return draft-only text.
```
