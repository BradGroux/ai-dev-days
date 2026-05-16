# Event Template

Copy this folder when creating a new workshop event.

```bash
cp -R event-specific/_template event-specific/<event-slug>-YYYY-MM-DD
```

Then update every placeholder with event-specific details.

Also add the new event to [`../events.json`](../events.json) so the repo audit can validate event entry points and required workshop files.

## Event basics

- Event name: `<EVENT_NAME>`
- Date: `<EVENT_DATE>`
- Audience: `<AUDIENCE>`
- Facilitator(s): `<FACILITATORS>`
- Community/follow-up link: `<COMMUNITY_LINK>`

## Event files

1. [Attendee links](attendee-links.md)
2. [Requirements](requirements.md)
3. [Facilitator runbook](facilitator-runbook.md)
4. [Fallback plan](fallback-plan.md)
5. [Day-before checklist](day-before-checklist.md)

## Canonical repo resources

- [Root start page](../../START-HERE.md)
- [Root facilitator runbook](../../RUNBOOK.md)
- [First success lab](../../labs/first-success.md)
- [Markdown thinking-layer lab](../../labs/markdown-thinking-layer.md)
- [Helper install triage](../../helper-runbook/install-triage.md)
- [Publication safety](../../PUBLICATION-SAFETY.md)
- [Event refresh checklist](../refresh-checklist.md)
