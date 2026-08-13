# Facilitator Runbook

## Session objective

Help business analysis practitioners see how their existing people, process, data, requirements, and verification work becomes the durable context an AI agent needs.

## Before the room opens

- confirm the AI-Native Operating Framework is the named guiding business
  lens, not Northstar policy or a second curriculum
- confirm the final title and organizer inserts are in the deck
- confirm the projector, aspect ratio, display adapter, and power
- confirm the whiteboard has working markers and an eraser
- confirm with the HOUBAs organizer how the halfway and 15-minutes-remaining signals will be given
- open the HTML deck, speaker notes, and this runbook; the PDF remains deferred
  until the deck is finalized
- run `node demo/prepare-live-workspace.mjs --reset` and open the generated
  `demo/.live-workspace/` in the primary Codex window
- open [`demo/workspace/`](demo/workspace/) in a second Codex window for demo
  two and the prepared fallback
- open [`demo/framework-guidance.md`](demo/framework-guidance.md) and
  [`demo/workspace/verification-report.md`](demo/workspace/verification-report.md)
  beside the live workspace
- disable unrelated notifications and close private windows or tabs
- verify every QR code from a phone
- run the publication scan and repository audit
- run `node demo/run-demo.mjs review V-002`
- run `node --test demo/test/vendor-review.test.mjs`
- run `node demo/verify-demo.mjs`
- confirm the authoritative demo output, evidence, and closeout handoff
- disconnect from Wi-Fi once to confirm the offline path works

## Room opening

1. Leave the title or HOUBAs welcome slide on screen.
2. Let the organizer handle venue recognition if preferred.
3. Tell the audience that questions and relevant interruptions are welcome.
4. Ask people to describe scenarios generically and exclude company or customer details.
5. State that every source in the demo is fictional and every output remains reviewable.

## Core checkpoints

### At 14 minutes

The room should understand the thesis: AI amplifies unclear process and data definitions; business analysis reduces that ambiguity.

### At 25 minutes

The artifact stack should be complete. Do not let terminology questions consume the demo; capture deep implementation questions for the extension.

### At 40 minutes

Demo one should have produced gaps and elicitation questions. If not, switch to the prepared output.

### At 52 minutes

Demo two should have shown the operating packet. If not, show the prepared file diff and move to the whiteboard exercise.

### At 62 minutes

End the audience scenario and preserve three minutes for the Monday-morning close.

## Audience management

- Repeat or paraphrase audience questions before answering.
- Timebox a personal scenario to three minutes during the core.
- Put deeper scenarios in a visible parking-lot list for the extension.
- Ask “What would prove that?” when a scenario jumps directly to automation.
- Ask “Who owns that decision?” when the process has an implied approval.
- Ask “What happens when the data is missing or wrong?” when the room describes only the happy path.

## Whiteboard layout

Prepare five columns before the audience exercise:

```text
People | Process | Data | Guardrails | Proof
```

Keep the board visible during Q&A so new questions can attach to the same model.

## Public safety checkpoint

> Do not put secrets, API keys, private data, sensitive personal notes, or anything confidential in a public repository, shared file, screenshot, or projected prompt. When in doubt, keep it local.

## Demo controls

- Use [demo-script.md](demo-script.md) for the timed walkthrough.
- Use [prompt-pack.md](prompt-pack.md) to choose the stage and the standalone
  files under `demo/prompts/` for the exact live requests.
- Use the generated workspace for demo one and the checked-in completed
  workspace for demo two.
- Treat the checked-in workspace as the expected offline output.
- Use `node demo/run-demo.mjs review V-002` as the deterministic fallback.
- Switch to the prepared report after 90 seconds of generation delay or two
  minutes of tool troubleshooting.
- Do not fix a drifting result in front of the room by changing the evidence.

## Close

- show the attendee resource QR
- show the HOUBAs feedback QR
- remind attendees that the artifacts are templates, not universal policies
- invite them to point Codex at the examples and adapt them to their own approved context
- do not collect or enter private process data during the post-session discussion
- assign completion of the
  [post-event review](post-event-review.md) while evidence and decisions are
  still fresh
