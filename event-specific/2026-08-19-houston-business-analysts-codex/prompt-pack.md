# Prompt Pack

These prompts support the live demonstration and attendee reconstruction. Each
run-ready prompt is checked in separately under [`demo/prompts/`](demo/prompts/)
so Brad can open one file, copy one request, and keep the stage boundary clear.

The fictional Northstar policy determines vendor outcomes. The
[AI-Native Operating Framework guidance](demo/framework-guidance.md) supplies
the business lens: Intent, Responsibility, Work, Control, Assurance, and
Learning, maintained through Understand, Document, Validate, Approve, Use, and
Improve.

The live session demonstrates Understand, Document, and Validate. Approval and
external business action remain human-controlled and out of scope.

## Prepare the live discovery workspace

From the event folder:

```bash
node demo/prepare-live-workspace.mjs
```

Open `demo/.live-workspace/` as the Codex working folder. It contains raw
fictional evidence, the framework guide, the prompts, and an empty `drafts/`
area. It does not contain the completed fallback packet.

The preparation command preserves an existing workspace. After saving any
wanted live drafts, rebuild it explicitly with:

```bash
node demo/prepare-live-workspace.mjs --reset
```

## Core live sequence

| Stage | Prompt | Working folder | Expected result |
|---|---|---|---|
| Understand | [01: audit current state](demo/prompts/01-audit-current-state.md) | generated `.live-workspace/` | facts, gaps, and seven elicitation questions |
| Document | [02: draft process brief](demo/prompts/02-draft-process-brief.md) | generated `.live-workspace/` | source-grounded process brief with unresolved decisions visible |
| Document | [03: build operating packet](demo/prompts/03-build-operating-packet.md) | generated `.live-workspace/` | complete reconstruction path for attendees; prepared fallback used live |
| Validate | [04: challenge operating packet](demo/prompts/04-challenge-operating-packet.md) | generated `.live-workspace/` | severity-ranked gaps without silent edits |
| Validate | [05: review V-002](demo/prompts/05-review-v002.md) | checked-in `demo/workspace/` | **CLARIFY** with two focused Security questions |
| Assurance | [06: verify all cases](demo/prompts/06-verify-prepared-cases.md) | checked-in `demo/workspace/` | PASS / CLARIFY / STOP trace and test evidence |
| Extension | [07: adapt an audience workflow](demo/prompts/07-adapt-audience-workflow.md) | any public-safe workspace | bounded readiness canvas and scenarios |

Run prompts 01 and 05 during the 65-minute core. Use prompt 02 only when the
room is moving quickly. Prompts 03, 04, 06, and 07 support the fallback,
extension, and attendee follow-through.

## Optional populated practice corpora

Prompt 07 can start from a blank audience workflow. Attendees who want
structured evidence can instead use the checked-in
[business analyst practice corpora](demo/corpora/README.md):

- [change-request impact analysis](demo/corpora/change-request-impact-analysis/README.md)
  for scope, dependencies, controls, communications, and release effects; or
- [stakeholder intake and prioritization](demo/corpora/stakeholder-intake-prioritization/README.md)
  for evidence quality, scoring, capacity, conflicts, and decision rights.

Both are fictional and include a separate facilitator key. They are extension
exercises, not additions to the 65-minute core sequence.

## Deterministic commands

These commands do not call an AI service or external system:

```bash
node demo/run-demo.mjs list
node demo/run-demo.mjs framework-map
node demo/run-demo.mjs review V-002
node demo/run-demo.mjs review-all --json
node --test demo/test/vendor-review.test.mjs
node demo/verify-demo.mjs
```

The deterministic reviewer is proof and fallback, not a replacement for the
live Codex reasoning. It shows that the approved fictional rules consistently
produce the three expected outcomes.

## Prompt review checklist

Before running or adapting a prompt, confirm it contains:

- a concrete goal;
- named sources and a clear authority order;
- the framework lens separated from business policy;
- constraints, non-goals, and external-action boundaries;
- a definition of done and expected evidence;
- a request to expose assumptions, conflicts, and missing ownership; and
- no secrets, private records, or sensitive attendee details.
