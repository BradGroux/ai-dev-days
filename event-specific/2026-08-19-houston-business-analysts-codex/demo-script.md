# Demo Script

## Demo promise

Show how a business analyst turns incomplete process knowledge into a small,
reviewable operating packet, then proves the packet handles a pass case, a
clarification case, and a stop case.

The demo uses fictional vendor onboarding for Northstar Field Services. It does
not connect to a vendor system, approve a vendor, send a message, or use private
data.

## Preflight

From the event folder:

```bash
node demo/verify-demo.mjs
```

Then open:

1. [`demo/source/stakeholder-notes.md`](demo/source/stakeholder-notes.md)
2. [`demo/source/policy-excerpts.md`](demo/source/policy-excerpts.md)
3. [`demo/workspace/AGENTS.md`](demo/workspace/AGENTS.md)
4. [`demo/workspace/process-brief.md`](demo/workspace/process-brief.md)
5. [`demo/workspace/vendor-onboarding-sop.md`](demo/workspace/vendor-onboarding-sop.md)
6. [`demo/workspace/.agents/skills/vendor-review/SKILL.md`](demo/workspace/.agents/skills/vendor-review/SKILL.md)
7. [`demo/workspace/verification-report.md`](demo/workspace/verification-report.md)

Launch Codex with `demo/workspace/` as the working folder. Keep the prepared
files open in a second window for the offline path.

## Demo one: messy notes to current-state clarity (15 minutes)

### 0:00-0:02 — frame the source

Say:

> These notes are recognizable because they are incomplete in ordinary ways.
> The business analyst's first job is not to make the agent sound confident. It
> is to make missing decisions visible.

Show the stakeholder notes and ask the room to spot one ambiguous term and one
missing owner.

### 0:02-0:08 — run prompt 1

Use [prompt 1](prompt-pack.md#prompt-1-audit-the-raw-notes). Watch for:

- facts separated from assumptions
- actors and handoffs
- undefined risk and rush rules
- missing ownership
- focused elicitation questions instead of invented policy

If the response invents a rule, stop and ask: “Which source supports that?”
Use the failure to reinforce the need for provenance.

### 0:08-0:13 — compare with the process brief

Open [`process-brief.md`](demo/workspace/process-brief.md). Show the difference
between evidence, reviewed interpretation, and unresolved questions. Point out
that a clean Markdown file is useful because people can review, diff, approve,
and version it.

### 0:13-0:15 — decision checkpoint

Ask the audience:

1. What decision is too important to leave implied?
2. What data field would cause the most downstream rework if misunderstood?

Capture two answers on the whiteboard parking lot.

## Demo two: operating packet to verified decisions (14 minutes)

### 0:00-0:03 — distinguish guidance from memory

Show:

- `AGENTS.md`: standing workspace rules
- `memory.md`: useful recall, explicitly not policy

Repeat that a required rule belongs in reviewed guidance, policy, an SOP, or
code, not only in memory.

### 0:03-0:06 — show the operating packet

Walk the filenames, not every paragraph:

- `vendor-onboarding-sop.md`: repeatable procedure and stop conditions
- `vendor-onboarding-assistant-prd.md`: problem, scope, and acceptance contract
- `.agents/skills/vendor-review/SKILL.md`: reusable review workflow

### 0:06-0:09 — preview the acceptance scenarios

Open:

- `acceptance-scenarios.md`: expected behavior before execution

Ask which outcome may create the most value: PASS, CLARIFY, or STOP / ESCALATE.

### 0:09-0:13 — run vendor V-002

Use [prompt 4](prompt-pack.md#prompt-4-run-the-reusable-review-skill). The
expected outcome is **CLARIFY** because security-relevant fields are unresolved.

Ask: “Would a helpful-sounding approval be a success or a control failure?”

### 0:13-0:14 — reveal the proof loop

Open [`verification-report.md`](demo/workspace/verification-report.md):

- V-001: PASS for human review
- V-002: CLARIFY
- V-003: STOP / ESCALATE

Point to the exact policy source for the possible sanctions match in V-003.

Show the prepared verifier PASS output. Explain that the script proves internal
fixture consistency; human review still determines whether the business rules
themselves are correct.

## Live-demo stop conditions

Switch to the prepared output when:

- generation exceeds 90 seconds
- a tool or network problem persists for two minutes
- output ignores the draft-only or source-citation boundary
- the response begins rationalizing a result that conflicts with an acceptance
  scenario
- projected content risks showing a private file, notification, or account

## Prepared fallback route (8 minutes)

1. Show the ambiguity in `stakeholder-notes.md`.
2. Show the fact/assumption split in `process-brief.md`.
3. Show one rule in `AGENTS.md` and one decision in the SOP.
4. Show the review skill's output contract.
5. Reveal the three rows in `verification-report.md`.
6. Ask the room which artifact must change if the business changes the rule.

## Success evidence

The demo succeeded if the audience can explain:

- why the agent asked instead of guessed
- which artifact stores a standing rule
- why memory cannot be the only copy of policy
- how a skill differs from an SOP
- why an acceptance scenario is written before external automation
