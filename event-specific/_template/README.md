# Event Template

Copy this folder when creating a new workshop event.

```bash
cp -R event-specific/_template event-specific/YYYY-MM-DD-<event-slug>
```

Then update every placeholder with event-specific details.

Also add the new event to [`../events.json`](../events.json) so the repo audit can validate event entry points and required workshop files.

## Event basics

- Event name: `<EVENT_NAME>`
- Date: `<EVENT_DATE>`
- Audience: `<AUDIENCE>`
- Purpose and expected outcome: `<PURPOSE_AND_OUTCOME>`
- Accountable owner: `<ACCOUNTABLE_OWNER>`
- Facilitator(s): `<FACILITATORS>`
- Approval authority: `<APPROVER>`
- Tool track(s): `<TOOL_TRACKS_OR_NONE>`
- Source and research owner: `<RESEARCH_OWNER>`
- Learning evidence: `<REVIEWABLE_ARTIFACT_OR_MEASURE>`
- Post-event review owner: `<REVIEW_OWNER>`
- Community/follow-up link: `<COMMUNITY_LINK>`

Tool choices belong to the event's operating context. They do not change the
AI-Native Operating Framework or define AI Dev Days as a whole.

## Event files

1. [Attendee links](attendee-links.md)
2. [Requirements](requirements.md)
3. [Facilitator runbook](facilitator-runbook.md)
4. [Fallback plan](fallback-plan.md)
5. [Day-before checklist](day-before-checklist.md)
6. [Post-event review](post-event-review.md)

## Canonical repo resources

- [Root start page](../../START-HERE.md)
- [Root facilitator runbook](../../RUNBOOK.md)
- [AI-Native Operating Framework alignment](../../docs/ai-native-operating-framework-alignment.md)
- [Research and education method](../../docs/research-and-education-method.md)
- [Research source note template](../../research/source-note-template.md)
- [First success lab](../../labs/first-success.md)
- [Markdown thinking-layer lab](../../labs/markdown-thinking-layer.md)
- [Helper install triage](../../helper-runbook/install-triage.md)
- [Publication safety](../../PUBLICATION-SAFETY.md)
- [Event refresh checklist](../refresh-checklist.md)

## Framework readiness

Before approval, confirm the packet makes the following business meaning clear
without forcing a particular document layout:

- intent: purpose, audience, scope, outcome, and requirements;
- responsibility: owner, participants, authority, approval, and escalation;
- work: prerequisites, agenda, activities, decisions, outputs, and handoffs;
- control: safety, permissions, exceptions, stop conditions, and recovery;
- assurance: completion, checks, evidence, reviewers, and authoritative result;
- learning: maintenance owner, feedback, lessons, and review triggers.

## Research and learning readiness

- Material claims link to primary or authoritative sources.
- Facts, interpretation, event assumptions, and decisions are distinguishable.
- The intended learner, prerequisite, outcome, exercise, and reviewable
  evidence are explicit.
- Learners can distinguish source material, AI output, inference, and the
  authoritative result.
- Event feedback has a post-event disposition path and does not become reusable
  curriculum automatically.
