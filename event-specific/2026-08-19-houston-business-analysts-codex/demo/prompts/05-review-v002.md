# Prompt 05: Review V-002

Run this prompt from the checked-in `demo/workspace/` folder.

```text
Goal:
Use the repository-scoped vendor-review skill to prepare the review packet for
V-002.

Context:
Read AGENTS.md and follow its source precedence. The AI-Native Operating
Framework is a guiding business lens only; the checked-in Northstar policy and
SOP determine the result.

Framework stage:
This is Validate against one prepared scenario. It is not vendor Approve or
operational Use.

Request:
$vendor-review

Review V-002 from ../source/sample-vendors.json. Return exactly one top-level
result: PASS, CLARIFY, or STOP / ESCALATE. Include confirmed facts, missing or
conflicting information, applicable policy IDs, human review lanes, the next
human owner and action, and the evidence trail.

Constraints:
Treat unknown as missing when a decision depends on it. Do not change files,
clear a flag, approve a vendor, send a message, or take external action.

Done when:
Compare the result with Scenario B in acceptance-scenarios.md and explain any
difference without rewriting the evidence to make the scenario pass.
```
