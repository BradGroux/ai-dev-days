# Contributing

This repo is a workshop kit, not only a code project. Changes should keep the
materials easy to run, safe to publish, and current for the next event.

## Before You Change Content

- Read [`PUBLICATION-SAFETY.md`](PUBLICATION-SAFETY.md).
- Keep attendee-facing paths short and direct.
- Put event-specific assumptions under `event-specific/`.
- Keep evergreen setup and curriculum material reusable across events.
- Do not include secrets, private data, customer records, internal screenshots,
  credential values, or sensitive operational details.

## Verification

Run the repo-level checks before publishing public-facing changes:

```bash
./scripts/publication-scan.sh
node scripts/audit-repo.mjs
node scripts/check-external-links.mjs
```

Run the Beaver Badges app checks when touching the sample app or its data:

```bash
cd projects/beaver-badges/app
npm run check
npm run smoke:visual
```

## Review Checklist

- Navigation links still point to real local files.
- Event packet files match `event-specific/events.json`.
- Public safety wording is present for event packets.
- Install commands and model-provider instructions are current.
- External links are live or intentionally skipped by the checker.
- Beaver Badges data stays valid and roadmap-only badges are marked clearly.
- Changelog entries describe user-visible or maintainer-facing changes.

## Pull Requests

Keep PRs focused. Include what changed, what was verified, and any event or
publication risk. Do not mix unrelated workshop content, app changes, and repo
maintenance unless they are part of one coordinated release.
