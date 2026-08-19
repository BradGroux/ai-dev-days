# Prompt: Analyze Change-Request Impact

```text
Goal:
Produce a source-cited impact packet for [CHANGE_ID] and classify its analysis
readiness as READY FOR IMPACT REVIEW, CLARIFY, or STOP / ESCALATE.

Sources and authority:
Read README.md, source/policy-excerpts.md, the selected record in
source/change-requests.json, and source/stakeholder-notes.md. Approved policy
excerpts take precedence over the request and discovery notes. Preserve
conflicts and unknowns instead of resolving them by inference.

Framework lens:
Use the AI-Native Operating Framework concerns—Intent, Responsibility, Work,
Control, Assurance, and Learning—only to test whether the impact analysis is
complete. It is not Pine Harbor policy and does not determine the result.

Produce:
- the requested outcome, boundaries, assumptions, conflicts, and open questions;
- an impact matrix covering people, process, data, interfaces, controls,
  reports, customer communications, accessibility, training, release, and
  evidence;
- the affected owners and the exact decisions each must make;
- one normal, one exception, and one prohibited acceptance scenario;
- the policy citations supporting every material conclusion;
- exactly one readiness result with a short rationale; and
- the smallest responsible next step.

Constraints:
Do not invent dependencies, approve implementation or release, waive policy,
contact anyone, or modify a business system. Use only fictional source data.

Done when:
A reviewer can trace each claimed impact and result to a source, see what is
unknown, identify the accountable decision owners, and understand what
evidence would make the request ready for the next human review.
```
