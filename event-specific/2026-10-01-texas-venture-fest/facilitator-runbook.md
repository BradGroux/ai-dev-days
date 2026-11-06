# Facilitator Runbook

Use this file for event-specific room operations. Use the root [RUNBOOK.md](../../RUNBOOK.md) for the reusable facilitator flow.

## Before the room opens

- Confirm the accountable owner, approved packet, purpose, expected outcome,
  decision boundaries, and escalation owner.
- Confirm projector, audio, and Wi-Fi.
- Open the repo and attendee links page.
- Confirm setup guides are easy to reach.
- Prepare a rescue/demo machine.
- Walk through the normal path, one meaningful exception, and one credible
  failure or recovery path.
- From the repo root, run the release validation gate:

```bash
./scripts/validate-release.sh
```

## Opening links to show

- Attendee links: `event-specific/<event-folder>/attendee-links.md`
- First success lab: `labs/first-success.md`
- Markdown thinking lab: `labs/markdown-thinking-layer.md`

## First success metric

By the end of the setup block, most attendees should have:

- understood the event purpose and expected outcome
- confirmed the selected tool works
- created durable context for the activity
- completed one useful action
- reviewed an output or evidence record
- captured the next action or handoff

Add tool-specific checks required by this event. OpenClaw installation,
provider, gateway, dashboard, and first-response checks belong here only when
OpenClaw is the selected track.

## Helper lanes

- Green: keep building
- Yellow: quick triage
- Red: rescue/demo path

## Public safety checkpoint

> Do not put secrets, API keys, private data, sensitive personal notes, or anything confidential in a public repository, shared file, screenshot, or projected prompt. When in doubt, keep it local.

## Closeout and handoff

- Identify the event's authoritative outputs and retained evidence.
- Record exceptions, limitations, unresolved questions, and owners.
- Separate observed facts, learner feedback, facilitator synthesis, and
  approved lessons.
- Tell attendees what to retain, what not to publish, and what to do next.
- Assign completion of [the post-event review](post-event-review.md).
