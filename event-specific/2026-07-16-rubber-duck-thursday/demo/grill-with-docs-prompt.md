# Grill-With-Docs Prompt for Business Workflows

```text
$grill-with-docs

Read the source notes, current SOP, and any existing PRD for this workflow.
Do not build or automate the workflow yet.

Interview me until the following are explicit:

1. User and owner
   - Who does the work today?
   - Who owns the final decision?
   - Who supports the workflow after launch?

2. Trigger and outcome
   - What starts the workflow?
   - What exact artifact should the agent produce?
   - What would make the workflow useful, not merely faster?

3. Source of truth
   - Which systems and files are authoritative?
   - Which fields are untrusted, incomplete, or routinely overridden?
   - How should conflicts be surfaced?

4. Boundary and risk
   - What may the agent read, draft, or classify?
   - What must it never send, approve, pay, release, schedule, or change?
   - Where is human approval mandatory?

5. Verification
   - Which deterministic checks can prove the draft is internally consistent?
   - What evidence must the reviewer see?
   - What is the stop condition when information is missing?

When the interview is complete, update the PRD with decisions, open questions,
acceptance criteria, and the smallest safe demo slice. Keep every assumption
visible. Do not invent missing business facts.
```
