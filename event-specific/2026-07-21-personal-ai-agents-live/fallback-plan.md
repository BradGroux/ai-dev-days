# Fallback Plan

Use this if OpenClaw, Codex, network access, or model latency threatens the live workshop.

## Fallback Levels

### Level 1: Live Slice Only

Generate a small corpus slice live, then switch to the checked-in full corpus.

### Level 2: PRD Fallback

Use the checked-in PRD and explain the `$grill-with-docs` questions that shaped it.

### Level 3: Codex Fallback

Use checked-in issue artifacts, goal prompt, and implementation plan.

### Level 4: App Fallback

If the live app build is slow, open the completed [demo/app/index.html](demo/app/index.html) and demonstrate the checked-in static app.
Use [demo/app-output-spec.md](demo/app-output-spec.md) and [demo/implementation-plan.md](demo/implementation-plan.md) to explain the build decisions or narrate the behavior if browser presentation fails.

### Level 5: Presentation Fallback

Use [slides.html](slides.html) as the primary deck and [slides.pdf](slides.pdf) if the HTML presentation cannot run.
If neither deck surface is available, use [speaker-notes-45-minute.md](speaker-notes-45-minute.md), [PRD.md](PRD.md),
[demo/openclaw-prd-workflow.md](demo/openclaw-prd-workflow.md), and [demo/app-output-spec.md](demo/app-output-spec.md) as the offline talk track.

## Preserve

- the OpenClaw-to-Codex responsibility split
- the PRD as the planning contract
- issue artifacts as the work breakdown
- `/goal` as the implementation start
- Build Trace as the proof path

## Safety Boundary

Do not paste secrets, API keys, tokens, credentials, real personal data, real customer records, live incident details, or non-public work material into the demo.
Keep everything fictional, local, and draft-only.
