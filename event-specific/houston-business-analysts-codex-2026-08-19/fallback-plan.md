# Fallback Plan

## Rule

Protect the audience exercise, the artifact map, and the closing action plan. The live generation is evidence for the method, not the only way to teach it.

## If Wi-Fi is unreliable

- keep the future local deck and the checked-in demo workspace open
- use [`demo/source/`](demo/source/) and the completed
  [`demo/workspace/`](demo/workspace/)
- do not troubleshoot network access in front of the room for more than two minutes
- continue with local file walkthroughs and the whiteboard exercise

## If Codex is unavailable

- compare the raw
  [`stakeholder-notes.md`](demo/source/stakeholder-notes.md) with the prepared
  [`process-brief.md`](demo/workspace/process-brief.md)
- walk through the elicitation questions Codex should have asked
- have the audience identify one missing owner, exception, data rule, and acceptance check
- use the prepared
  [`verification-report.md`](demo/workspace/verification-report.md) as the final
  proof artifact

## If the demo output drifts

- stop the run instead of rationalizing an unsupported result
- identify which source, rule, or acceptance criterion was missed
- switch to the prepared output
- use the failure as a short example of why review and verification belong in the workflow

## If the audience is quiet

Offer one of these generic workflows:

- vendor onboarding
- employee access request
- customer refund exception
- internal project intake

Ask the room to supply only the next field in the five-column canvas, not an entire scenario.

## If the audience is highly active

- capture deep scenarios in the extension parking lot
- answer concept-level questions during the core
- use the drop-if-behind order in [session-plan.md](session-plan.md)
- preserve the five-minute audience scenario and Monday close

## If time is cut to 60 minutes total

- 5 minutes: host, hook, and thesis
- 10 minutes: artifact stack
- 15 minutes: prepared demo walkthrough
- 10 minutes: audience scenario
- 5 minutes: Monday close and resources
- 15 minutes: Q&A

## Minimum viable outcome

Even if every live tool fails, attendees should leave able to:

- explain the business analyst's role as context architect
- distinguish an SOP, PRD, memory, workspace rule, skill, and acceptance check
- apply the people-process-data-guardrails-proof canvas
- identify one low-risk workflow to document before automating
- find the public templates after the session

## Offline verification

From the event folder, run:

```bash
node demo/verify-demo.mjs
```

The check requires no network access. The expected output is:

```text
PASS: fictional demo fixtures, outcomes, traces, and no-slide boundary verified.
```

## Safety

Do not paste private notes, customer records, credentials, internal process data, or attendee information into a projected prompt. Use the fictional fallback files only.
