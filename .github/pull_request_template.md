## Summary

- Describe the change.

## Verification

- [ ] `./scripts/publication-scan.sh`
- [ ] `node scripts/audit-repo.mjs`
- [ ] `node scripts/check-external-links.mjs`
- [ ] `npm run check` in `projects/beaver-badges/app` if app code or data changed
- [ ] `npm run smoke:visual` in `projects/beaver-badges/app` if app UI changed

## Publication Safety

- [ ] No secrets, credentials, private data, customer records, internal screenshots,
      or sensitive operational details were added.
- [ ] Event-specific assumptions live under `event-specific/`.
- [ ] Changelog updated when public material or maintainer workflow changed.

## Notes

- Include risks, migration notes, or follow-ups.
