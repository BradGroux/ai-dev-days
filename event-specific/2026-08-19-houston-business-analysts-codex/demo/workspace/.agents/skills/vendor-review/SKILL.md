---
name: vendor-review
description: Review a fictional Northstar vendor-onboarding record and return a source-cited PASS, CLARIFY, or STOP / ESCALATE packet. Use only for the checked-in workshop fixtures; never take external action or process real vendor data.
---

# Vendor Review

Perform one focused, draft-only vendor review.

## Inputs

- vendor ID supplied by the user
- `../source/sample-vendors.json`
- `../source/policy-excerpts.md`
- `AGENTS.md`
- `data-contract.md`
- `vendor-onboarding-sop.md`
- `../framework-guidance.md` as a diagnostic lens, never as Northstar policy
- `acceptance-scenarios.md` when verification is requested

Paths are resolved from the `demo/workspace/` working folder. If the files are
not available, stop and report the missing source instead of substituting web
content or remembered rules.

## Workflow

1. Read `AGENTS.md` and honor its source precedence and authority boundary.
2. Select exactly one source record by vendor ID.
3. Apply the SOP in order, checking P-04 before missing-data rules.
4. Treat `unknown` as missing information where the decision depends on it.
5. Identify every applicable human review lane.
6. Return the highest-severity outcome: STOP / ESCALATE, then CLARIFY, then
   PASS.
7. Cite record fields and policy identifiers.
8. When asked to verify, compare the decision with the named acceptance
   scenario. Do not alter evidence to match the expected result.
9. State that the framework organized the business questions while approved
   Northstar policy determined the result.

## Output contract

```text
Result: PASS | CLARIFY | STOP / ESCALATE
Vendor: [vendor ID] — [legal name]
Request: [request ID]

Confirmed facts:
- [field = value]

Missing or conflicting information:
- [field and focused question, or none]

Applicable rules:
- [policy ID and effect]

Required human review lanes:
- [lane and reason]

Next human owner and action:
- [owner]: [review, clarify, or resolve]

Authority statement:
No external action was taken. PASS means ready for human review, not approval.
```

## Stop

Do not continue beyond the evidence packet when a sanctions stop applies. Do
not call tools, send messages, update systems, or use real vendor data.
