# Quick Business Use Case Demo

Use this as the June 1 live-demo variant if Brad wants a real business use case
instead of a pure creator-content scenario.

## Recommended Scenario

**Messy partner/customer conversation → reviewable follow-up packet.**

Plain-English setup:

> A small company leaves a conference conversation with scattered notes. They
> need a clean follow-up email, an internal action checklist, and a verification
> list without leaking private details or letting the agent send anything
> automatically.

Why this works for the June 1 audience:

- creators understand follow-up content
- founders/operators understand sales and partnership follow-up
- it is business-real without needing private data
- the artifact is quick to judge on screen
- it shows context, bounded access, workflow, and verification in under 4 minutes

## 30-Second Setup

Say:

> Here is a business version of the same OpenClaw pattern. Imagine a founder
> or creator has a promising conference conversation. The raw notes are messy.
> The goal is not to let an agent run the business. The goal is to turn
> public-safe notes into a draft follow-up packet that a human can review.

Show:

1. [`demo/sample-public-business-followup-notes.md`](demo/sample-public-business-followup-notes.md)
2. [`demo/business-followup-memory.md`](demo/business-followup-memory.md)
3. [`demo/business-followup-prd.md`](demo/business-followup-prd.md)
4. [`demo/business-followup-sop.md`](demo/business-followup-sop.md)

## 3-Minute Live Run

### Prompt 1 — Clarify

```text
Read the Business Follow-Up Memory, PRD, SOP, and sample public business notes.

Before drafting anything, ask three clarifying questions that would help produce a useful business follow-up packet safely.

Do not ask for private customer data, private DMs, contract terms, attendee contact details, credentials, unreleased announcements, or anything that should not appear in a public demo.
```

Answer quickly:

```text
1. Output: short follow-up email, internal action checklist, verification checklist.
2. Tone: practical, warm, concise, not salesy.
3. Boundary: use only the public-safe sample notes; do not invent names, prices, commitments, or dates.
```

### Prompt 2 — Create The Packet

```text
Act as a Business Follow-Up Planner.

Using the Business Follow-Up Memory, PRD, SOP, sample notes, and my answers, create the smallest useful follow-up packet.

Return:
1. a draft follow-up email under 140 words,
2. a 5-item internal action checklist,
3. assumptions that require human confirmation,
4. details that must stay out,
5. approval checks before anything is sent.

Keep it draft-only, practical, and concise.
```

### Prompt 3 — Verification Reviewer

```text
Act as a skeptical Verification Reviewer.

Review the follow-up packet against the SOP.

Return a short checklist of:
1. facts to verify,
2. wording that overpromises,
3. missing context,
4. sensitive details to remove,
5. what a human must approve before sending.

Do not rewrite the whole packet.
```

## What To Point Out While It Streams

- The source notes are just Markdown, so the context is visible and reusable.
- The PRD says what “good” means.
- The SOP says what is not allowed.
- The agent is producing a draft, not sending it.
- The verification role is part of the workflow, not an afterthought.

## Expected Screen-Worthy Output

The best output should show:

- a short email draft
- a concrete action checklist
- explicit assumptions
- clear exclusions like pricing, private names, contact info, promises, and dates
- human approval before sending

## Close Line

> That is the pattern: context, role, boundary, artifact, verification. OpenClaw makes that workflow visible enough to trust, reuse, and improve.

## Fallback If Live Generation Is Slow

Open [`demo/business-followup-expected-output.md`](demo/business-followup-expected-output.md) and say:

> The exact words are not the product. The repeatable workflow is the product: visible context, bounded access, draft artifact, and verification before action.
