## Summary

- Describe the change.
- Contribution class: research, curriculum, event, tool track, material
  program, example/app, or editorial.
- Link the issue, source note, or decision record when applicable.

## Verification

- [ ] `./scripts/validate-release.sh`
- [ ] `npm run check` in `projects/beaver-badges/app` if app code or data changed
- [ ] `npm run smoke:visual` in `projects/beaver-badges/app` if app UI changed

## Publication Safety

- [ ] No secrets, credentials, private data, customer records, internal screenshots,
      or sensitive operational details were added.
- [ ] Event-specific assumptions live under `event-specific/`.
- [ ] Changelog updated when public material or maintainer workflow changed.

## Commons And Product Boundaries

- [ ] Shared-principle claims link to the adopted Open Framework Commons
      release rather than duplicating its canonical prose.
- [ ] Claims about a selected framework link to that product's canonical
      repository.
- [ ] Tool and selected-framework guidance is presented as learning context,
      not an AI Dev Days program requirement.
- [ ] Event changes make intent, responsibility, work, control, assurance, and
      learning clear in proportion to the event.
- [ ] Event folders and metadata slugs use `YYYY-MM-DD-<event-slug>`.
- [ ] Sources, decisions, evidence, handoffs, and lessons have appropriate
      public-safe durable locations.

## Research And Education

- [ ] Material claims are traceable to primary or authoritative sources.
- [ ] Source facts, analysis, assumptions, decisions, and limitations are
      distinguishable.
- [ ] Learning changes state the learner, prerequisite, outcome, exercise, and
      reviewable evidence.
- [ ] Event findings have an accountable disposition path and do not become
      reusable curriculum automatically.
- [ ] Accessibility, mixed-skill participation, and required domain review were
      considered proportionately.

## Notes

- Include risks, migration notes, or follow-ups.
