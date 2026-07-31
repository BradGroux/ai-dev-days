# Day-Before Checklist

Use this on Monday, June 1, 2026 after the creator pre-day event.

## Logistics

- [ ] Confirm Open Source Zone booth/table location.
- [ ] Confirm final booth hours for Tuesday, June 2 and Wednesday, June 3.
- [ ] Confirm maintainer staffing blocks.
- [ ] Confirm whether there is a shared display, table signage, or QR surface.
- [ ] Confirm OpenClaw After Hours time and registration link.
- [ ] Charge laptop, backup battery, and hotspot.
- [ ] Pack power adapter and USB-C/HDMI adapters.

## Local Files

- [ ] Open [slides.html](slides.html) locally.
- [ ] Confirm [slides.pdf](slides.pdf) opens locally.
- [ ] Open [PRD.md](PRD.md).
- [ ] Open [talking-points.md](talking-points.md).
- [ ] Open [demo-script.md](demo-script.md).
- [ ] Open [prompt-pack.md](prompt-pack.md).
- [ ] Open [demo/expected-output.md](demo/expected-output.md).
- [ ] Open [fallback-plan.md](fallback-plan.md).

## Demo Environment

- [ ] Use a clean demo workspace with no private files.
- [ ] Confirm OpenClaw dashboard starts.
- [ ] Confirm model provider works.
- [ ] Confirm demo files in [demo/](demo/) are visible.
- [ ] If showing Veritas Kanban live, confirm the local board starts with synthetic data only.
- [ ] Close email, private chat, private browser tabs, and private repos.
- [ ] Enable Do Not Disturb.

## Safety

- [ ] Do not paste secrets, API keys, tokens, credentials, private DMs, customer data, sponsor terms, or unreleased announcements.
- [ ] Do not connect live messaging accounts.
- [ ] Do not send, publish, merge, delete, or trigger external actions.
- [ ] Keep all generated outputs draft-only.
- [ ] Store only sanitized conversation notes.

## Verification

From the repo root:

```bash
./scripts/publication-scan.sh
node scripts/audit-repo.mjs
```
