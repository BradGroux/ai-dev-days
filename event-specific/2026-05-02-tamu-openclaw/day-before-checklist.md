# TAMU Day-Before Checklist

Use this checklist the night before and morning of the workshop.

## Repo and links

- [ ] Open the workshop repo: https://github.com/BradGroux/ai-dev-days
- [ ] Open attendee links: `event-specific/2026-05-02-tamu-openclaw/attendee-links.md`
- [ ] Open agenda: `curriculum/agenda/tamu-2026-05-02.md`
- [ ] Open facilitator runbook: `event-specific/2026-05-02-tamu-openclaw/facilitator-runbook.md`
- [ ] Open first success lab: `labs/first-success.md`
- [ ] Open Markdown thinking lab: `labs/markdown-thinking-layer.md`
- [ ] Open Beaver Badges README: `projects/beaver-badges/README.md`

## Room setup

- [ ] Arrive early enough to test the room before attendees arrive.
- [ ] Confirm Wi-Fi works on the presenter machine.
- [ ] Confirm projector/display works.
- [ ] Confirm audio works if any video clips are used.
- [ ] Increase terminal/editor/browser font sizes for projection.
- [ ] Put the attendee links page on screen first.
- [ ] Have the SSTB Discord invite ready: https://discord.gg/Gmfkm7QVSF
- [ ] Confirm Discord install/join instructions are easy to find.
- [ ] Have sstb.ai ready for follow-up/training signup.

## Presenter machine

- [ ] Browser open to GitHub repo.
- [ ] Terminal ready.
- [ ] VS Code or editor ready.
- [ ] Obsidian installed and ready.
- [ ] OpenClaw direct install path checked.
- [ ] OpenClaw onboarding path checked.
- [ ] Demo workspace folder ready.
- [ ] Beaver Badges app dependencies installed or ready to install.

## Provider/API readiness

- [ ] Workshop-provided Microsoft Foundry key is available to share at the right time.
- [ ] Endpoint and exact deployment name are available.
- [ ] Safety reminder ready before anyone copies keys.
- [ ] Fallback plan ready if Microsoft Foundry setup gets slow.

## Demo app check

From the repo root:

```bash
cd projects/beaver-badges/app
npm ci
npm run build
npm run dev
```

- [ ] App builds.
- [ ] App runs locally.
- [ ] Project README is ready for the README-improvement exercise.

## Helper lanes

- [ ] Green lane: attendees who are moving should keep building.
- [ ] Yellow lane: short blockers get quick triage.
- [ ] Red lane: long blockers move to rescue/demo path.
- [ ] Decide who helps each lane if helpers are available.

## Public safety checkpoint

Say this before GitHub or public sharing:

> Do not put secrets, API keys, private data, sensitive personal notes, or anything confidential in a public repository, shared file, screenshot, or projected prompt. When in doubt, keep it local.

## Protect these outcomes

- [ ] First OpenClaw response.
- [ ] Markdown context file created.
- [ ] Agent instruction created.
- [ ] Task list created.
- [ ] Beaver Badges concept understood.
- [ ] Community/follow-up path shared.
