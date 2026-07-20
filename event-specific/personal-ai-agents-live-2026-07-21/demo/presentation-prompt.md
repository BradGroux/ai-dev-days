# Presentation Prompt

Use this after the PRD, app-output spec, and issue artifacts are stable.

```text
Create presentation artifacts for the Personal AI Agents LIVE OpenClaw workshop.

Read:
- event-specific/personal-ai-agents-live-2026-07-21/PRD.md
- event-specific/personal-ai-agents-live-2026-07-21/README.md
- event-specific/personal-ai-agents-live-2026-07-21/demo/openclaw-prd-workflow.md
- event-specific/personal-ai-agents-live-2026-07-21/demo/app-output-spec.md
- event-specific/personal-ai-agents-live-2026-07-21/demo/issue-artifacts.md
- event-specific/personal-ai-agents-live-2026-07-21/demo/goal-prompt.md

Also inspect prior event presentation patterns:
- event-specific/github-open-source-zone-build-2026-06-02-03/slides.html
- event-specific/github-open-source-zone-build-2026-06-02-03/slides.pdf
- event-specific/github-open-source-zone-build-2026-06-02-03/speaker-notes-floor.md
- event-specific/github-build-creators-2026-06-01/slides.html
- event-specific/github-build-creators-2026-06-01/slides.pdf
- event-specific/github-build-creators-2026-06-01/speaker-notes-15-minute.md

Create:
- event-specific/personal-ai-agents-live-2026-07-21/slides.html
- event-specific/personal-ai-agents-live-2026-07-21/slides.pdf
- event-specific/personal-ai-agents-live-2026-07-21/speaker-notes-45-minute.md

Deck guidance:
- 10 to 14 slides.
- Dark, local, offline-friendly HTML deck.
- HTML is the edit target.
- PDF export must be regenerated from one dark-theme 1920x1080 screenshot per `#slideN`, assembled in slide order.
- Do not use browser print-to-PDF; preserve the screen-rendered colors and add the external HTTPS link annotations to the screenshot-based PDF.
- No external assets unless already checked into the event folder.
- Use dense, professional workshop slides, not a marketing hero deck.
- Preserve accessibility basics and readable print layout.
- Include explicit public-safety wording.
- Show the workflow proof: corpus -> OpenClaw grill -> PRD -> Codex issues -> /goal -> app -> Build Trace.

Recommended slide sequence:
1. Title and workshop promise.
2. Why one-off prompts fail.
3. The OpenClaw/Codex responsibility split.
4. E Corp fictional command-center scenario.
5. Source corpus and safety boundary.
6. `$grill-with-docs` planning loop.
7. PRD as the contract.
8. Codex issue artifacts.
9. `/goal` starts implementation.
10. Static app output.
11. Build Trace proof.
12. Recreate it yourself.
13. Links and follow-up.

Speaker notes guidance:
- 45-minute pacing.
- Keep the live workflow ahead of the slides.
- Include fallback narration if live generation or app build is slow.
- Keep exact schedule/title details as updateable event facts.

Verification:
- Open `slides.html` locally.
- Capture every slide at exactly 1920x1080 and regenerate `slides.pdf` from those screenshots.
- Confirm the PDF has one 16:9 page per slide and preserves all expected HTTPS link annotations.
- Confirm `speaker-notes-45-minute.md` references the slide sequence.
- Run `./scripts/publication-scan.sh`.
- Run `node scripts/audit-repo.mjs`.
```
