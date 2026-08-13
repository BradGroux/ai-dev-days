# Prompt 06: Verify the Prepared Cases

Run this prompt from the checked-in `demo/workspace/` folder.

```text
Goal:
Verify that the reusable review workflow, deterministic code, acceptance
scenarios, and prepared report agree for all three fictional vendors.

Context:
Read AGENTS.md, acceptance-scenarios.md, verification-report.md, the
vendor-review skill, and the checked-in sources. Run:

node ../run-demo.mjs review-all --json
node --test ../test/vendor-review.test.mjs
node ../verify-demo.mjs

Framework stage:
This is Validate and Assurance evidence. A human remains responsible for any
Approve, Use, or Improve decision.

Constraints:
The AI-Native Operating Framework organizes Intent, Responsibility, Work,
Control, Assurance, and Learning; it does not determine a vendor outcome.
Northstar policy does. Do not edit evidence merely to reconcile a difference.

Done when:
Return one traceability row per vendor with source condition, policy rule,
expected outcome, actual outcome, next human owner, and verification evidence.
If anything differs, stop and identify whether the inconsistency is in the
source, operating packet, deterministic reviewer, acceptance scenario, or
prepared report.
```
