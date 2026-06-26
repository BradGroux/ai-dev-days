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

If live app build is slow, use [demo/app-output-spec.md](demo/app-output-spec.md) and walk through the expected static app behavior.

### Level 5: Presentation Fallback

If slides are not ready, use [PRD.md](PRD.md), [demo/openclaw-prd-workflow.md](demo/openclaw-prd-workflow.md), and [demo/app-output-spec.md](demo/app-output-spec.md) as the talk track.
Prior events use `slides.html` and `slides.pdf`, but the workflow docs can carry the session if deck generation is behind.

## Preserve

- the OpenClaw-to-Codex responsibility split
- the PRD as the planning contract
- issue artifacts as the work breakdown
- `/goal` as the implementation start
- Build Trace as the proof path

## Safety Boundary

Do not paste secrets, API keys, tokens, credentials, real personal data, real customer records, live incident details, or non-public work material into the demo.
Keep everything fictional, local, and draft-only.
