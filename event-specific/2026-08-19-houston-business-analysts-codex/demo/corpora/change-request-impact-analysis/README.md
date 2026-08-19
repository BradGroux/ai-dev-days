# Change-Request Impact Analysis Corpus

- Company: Pine Harbor Utilities (fictional)
- Workflow: customer service case-management changes
- Primary learner: business analyst or product operations analyst
- Exercise outcome: a source-cited impact packet, not implementation approval

## Scenario

Pine Harbor Utilities is considering three changes to its customer service
case system. The requests vary in completeness and policy risk. Analyze each
request without inventing missing rules, technical dependencies, or approval.

## Authority order

1. [`source/policy-excerpts.md`](source/policy-excerpts.md)
2. The selected record in
   [`source/change-requests.json`](source/change-requests.json)
3. [`source/stakeholder-notes.md`](source/stakeholder-notes.md) as discovery
   evidence, not approved policy
4. The AI-Native Operating Framework as an optional question set, not company
   policy

If sources conflict, preserve the conflict and route it to the owner named in
the policy. Silence is an open question, not permission.

## Run the exercise

Use [`prompt.md`](prompt.md) with all three files under `source/`. Analyze one
record first, then compare patterns across the set. Do not open
[`facilitator-key.md`](facilitator-key.md) until the analysis is complete.

## Expected artifact

Produce one impact packet per request containing:

- requested outcome and explicit non-goals;
- affected people, process steps, data, interfaces, controls, reports,
  communications, training, and release work;
- confirmed facts, assumptions, conflicts, and open questions;
- accountable owners and required decisions;
- proposed acceptance scenarios and evidence; and
- exactly one readiness result: **READY FOR IMPACT REVIEW**, **CLARIFY**, or
  **STOP / ESCALATE**.

The result describes analysis readiness. It does not authorize development,
release, customer communication, or a policy exception.
