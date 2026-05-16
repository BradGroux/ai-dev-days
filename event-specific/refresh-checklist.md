# Event Refresh Checklist

Use this before publishing a new event packet or reusing an older one.

## Event Assumptions

- [ ] Event name, date, audience, facilitators, registration link, and community link are current.
- [ ] `event-specific/events.json` includes the event slug, entrypoint, agenda, setup path, facilitator runbook, and required files.
- [ ] `README.md` and `START-HERE.md` point to the correct attendee path if the event should be visible from the repo root.
- [ ] Past-event language is clearly historical, not written as if the event is still upcoming.

## Setup And Provider Details

- [ ] Evergreen setup docs use generic OpenClaw install guidance.
- [ ] Event-specific provider, model, API-key, or account assumptions live only in the event folder or clearly event-specific docs.
- [ ] Mac and Windows setup paths have been checked against the current OpenClaw installer behavior.
- [ ] Fallback path is clear for attendees without admin rights, accounts, or working local installs.

## Room Materials

- [ ] Attendee links, requirements, facilitator runbook, fallback plan, day-before checklist, and agenda/pacing doc exist.
- [ ] Safety wording is present in attendee and facilitator materials.
- [ ] Helper lane, demo mode, and drop-if-behind guidance are current.
- [ ] Any slides, prompt packs, scenario cards, or sample projects are linked from the event entrypoint.

## Final Verification

```bash
./scripts/publication-scan.sh
node scripts/audit-repo.mjs
```
