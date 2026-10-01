# Event Template

Copy this folder when creating a new workshop event.

```bash
cp -R event-specific/_template event-specific/YYYY-MM-DD-<event-slug>
```

Then update every placeholder with event-specific details.

Also add the new event to [`../events.json`](../events.json) so the repo audit can validate event entry points and required workshop files.

## Event basics

- Event name: `Texas Venture Fest Houston 2026 — The AI Edition`
- Date: `Thursday, October 1, 2026 — “AI Developer Ecosystems” panel, 1:40 PM CT · The Innovation Hub, 801 Travis, Houston TX`
- Audience: `Houston founders, investors, developers, and AI builders attending Texas Venture Fest; panel format with moderator and fellow panelists`
- Purpose and expected outcome: `Deliver Brad’s segment on the “AI Developer Ecosystems” panel: a practical, DevDay-fresh map of today’s agent ecosystems (OpenAI/Codex, OpenClaw, Buzz, Muse, GitHub) grounded in his GitHub Secure Open Source Fund cohort experience. Audience leaves able to evaluate and pick an ecosystem without marrying a vendor.`
- Accountable owner: `Brad Groux`
- Facilitator(s): `Brad Groux (panelist); moderator and fellow panelists assigned by the organizer`
- Approval authority: `Brad Groux`
- Tool track(s): `none — panel talk, no attendee tooling`
- Source and research owner: `Brad Groux`
- Learning evidence: `approved slides.html in this folder: 9 slides, 20-minute pacing, rendered and reviewed per presentation-sop.md`
- Post-event review owner: `Brad Groux`
- Community/follow-up link: `https://sstb.ai`

Tool and framework choices belong to the event's learning context. They do not
change Commons, another ecosystem product, or AI Dev Days as a whole.

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
- [AI Dev Days Charter and Commons adoption](../../CHARTER.md)
- [AI-Native Operating Framework teaching alignment](../../docs/ai-native-operating-framework-alignment.md),
  when selected by the event
- [Research and education method](../../docs/research-and-education-method.md)
- [Research source note template](../../research/source-note-template.md)
- [First success lab](../../labs/first-success.md)
- [Markdown thinking-layer lab](../../labs/markdown-thinking-layer.md)
- [Helper install triage](../../helper-runbook/install-triage.md)
- [Publication safety](../../PUBLICATION-SAFETY.md)
- [Event refresh checklist](../refresh-checklist.md)

## Event readiness

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
