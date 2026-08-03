# Event Refresh Checklist

Use this before publishing a new event packet or reusing an older one.

## Event Assumptions

- [ ] Event name, date, audience, facilitators, registration link, and community link are current.
- [ ] The event folder and metadata slug use `YYYY-MM-DD-<event-slug>`.
- [ ] Purpose, scope, expected outcome, accountable owner, approval authority,
      tool track, and post-event review owner are explicit.
- [ ] `event-specific/events.json` includes the event slug, entrypoint, agenda, setup path, facilitator runbook, and required files.
- [ ] `README.md` and `START-HERE.md` point to the correct attendee path if the event should be visible from the repo root.
- [ ] Past-event language is clearly historical, not written as if the event is still upcoming.

## Program And Selected-Framework Application

- [ ] The
      [AI Dev Days Charter and Commons adoption](../CHARTER.md) was reviewed.
- [ ] If the event selects the AI-Native Operating Framework, its
      [teaching alignment](../docs/ai-native-operating-framework-alignment.md)
      was reviewed.
- [ ] Intent, responsibility, work, control, assurance, and learning are clear
      in the packet without forcing a particular layout.
- [ ] The tool track and any selected framework follow the event need and are
      not presented as requirements for AI Dev Days as a whole.
- [ ] Normal, meaningful exception, and credible failure/recovery scenarios
      were walked through.
- [ ] Sources, decisions, current state, evidence, handoffs, and approved
      lessons have durable, public-safe locations.

## Research And Learning Method

- [ ] The
      [research and education method](../docs/research-and-education-method.md)
      was reviewed.
- [ ] Material claims link to primary or authoritative sources with visible
      freshness and scope.
- [ ] Source facts, analysis, event assumptions, and decisions are
      distinguishable.
- [ ] The learner, prerequisite, learning outcome, exercise, and reviewable
      evidence are explicit.
- [ ] Learners can distinguish source material, AI output, inference, and the
      authoritative result.
- [ ] Event findings have a disposition path and will not become reusable
      curriculum automatically.
- [ ] Accessibility and mixed-skill participation were reviewed
      proportionately.

## Setup And Provider Details

- [ ] Tool-specific setup docs are current and clearly scoped to the selected track.
- [ ] Event-specific provider, model, API-key, or account assumptions live only in the event folder or clearly event-specific docs.
- [ ] Relevant platform setup paths have been checked against current tool behavior.
- [ ] Fallback path is clear for attendees without admin rights, accounts, or working local installs.

## Room Materials

- [ ] Attendee links, requirements, facilitator runbook, fallback plan, day-before checklist, and agenda/pacing doc exist.
- [ ] A post-event review exists and has an owner.
- [ ] Safety wording is present in attendee and facilitator materials.
- [ ] Helper lane, demo mode, and drop-if-behind guidance are current.
- [ ] Any slides, prompt packs, scenario cards, or sample projects are linked from the event entrypoint.

## Final Verification

```bash
./scripts/validate-release.sh
```
