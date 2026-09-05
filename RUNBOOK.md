# Facilitator Runbook

Use this as the one-page control panel for running an AI Dev Days session.

## Before the event

1. Confirm the event's accountable owner, audience, purpose, expected outcome,
   tool track, approval authority, and post-event review owner.
2. Pick or create the date-first event folder under `event-specific/`.
3. Start from [the event template](event-specific/_template/README.md) if this is a new workshop.
4. Confirm attendee requirements, setup guides, agenda, verification evidence,
   handoffs, and helper lanes are linked from the event folder.
5. Review the [AI Dev Days Charter](CHARTER.md), including the adopted Commons
   release and product-independence boundary. If the event teaches or applies
   the AI-Native Operating Framework, also review the
   [product-local teaching guide](docs/ai-native-operating-framework-alignment.md).
6. Review the
   [research and education method](docs/research-and-education-method.md);
   confirm material claims, the learner outcome, and the reviewable evidence.
7. Walk through a normal participant path, a meaningful exception, and a
   credible failure or recovery path.
8. From the repo root, run the release validation gate:

```bash
./scripts/validate-release.sh
```

9. Review [publication safety](PUBLICATION-SAFETY.md).
10. Review the [AI Literacy Framework alignment](docs/ai-literacy-framework-alignment.md) so you can frame the event as practical workforce AI literacy.
11. For a reused or newly copied event folder, run the [event refresh checklist](event-specific/refresh-checklist.md).

## Room setup

Have these open before attendees arrive:

- event attendee links
- event agenda
- [AI Dev Days Charter and Commons adoption](CHARTER.md)
- [AI-Native Operating Framework teaching guide](docs/ai-native-operating-framework-alignment.md),
  when selected by the event
- [Research and education method](docs/research-and-education-method.md)
- [AI Literacy Framework alignment](docs/ai-literacy-framework-alignment.md)
- [Event refresh checklist](event-specific/refresh-checklist.md)
- [First success lab](labs/first-success.md)
- [Markdown thinking-layer lab](labs/markdown-thinking-layer.md)
- [Helper install triage](helper-runbook/install-triage.md)
- [Fallback plan template](event-specific/_template/fallback-plan.md)

## First success target

Protect the first reviewable operating win:

1. the intended outcome is clear
2. the accountable human and decision boundary are visible
3. the attendee has enough durable context to act
4. the selected tool completes one useful activity
5. the attendee checks a reviewable output or evidence record
6. the next action or handoff is captured

If an attendee is not green after 10 minutes, move them to helper, pairing, or demo mode.

For an OpenClaw track, the tool-specific checkpoint may also require
installation, provider onboarding, gateway, dashboard, and first-response
verification.

## Safety script

Repeat this before GitHub, screenshots, shared files, or projected prompts:

> Do not put secrets, API keys, private data, sensitive personal notes, or anything confidential in a public repository, shared file, screenshot, or projected prompt. Use fictional or approved public-safe inputs. Local files read by a cloud-backed agent may be sent to its provider. Keep confidential values out of exercise notes and agent workspaces.

Use this AI literacy framing during the opening:

> Today is not a prompt-tricks class. We are practicing how to understand AI, use it in context, direct it clearly, evaluate its outputs, and stay accountable for what we keep, share, or ship.

## Helper lanes

- Green: attendee is moving; keep them building.
- Yellow: one or two issues; helper gets one time-boxed attempt.
- Red: managed laptop, account block, no admin rights, or repeated install failure; move to rescue/demo path.

Use [helper-runbook/install-triage.md](helper-runbook/install-triage.md) for command checks.

## Drop if behind

Cut these first:

1. Messaging/mobile setup
2. deep provider troubleshooting
3. extended Git/GitHub instruction
4. full agent-team buildout
5. optional app roadmap discussion

Protect these:

1. clear purpose and accountable ownership
2. one useful tool response or operating action
3. durable context
4. one reviewable artifact or evidence checkpoint
5. one next action or handoff

## Closeout

Before attendees leave, point them to:

- their workshop memory note
- their reviewable result and verification evidence
- any decision, limitation, or unresolved question
- their next action, owner, or handoff
- the community link
- one 30-day build goal

After the event, complete the event packet's `post-event-review.md`. Record
public-safe outcomes, evidence, exceptions, lessons, and approved maintenance
actions. Separate facts, feedback, synthesis, and approved lessons. Give each
material finding a disposition rather than treating attendee data, repeated
practice, or temporary chat history as program authority.

## Participation and recovery

Help and accommodation do not have to be earned through contribution. Learners may decline sharing, pairing, or continued participation. Offer the [offline exercise](labs/offline-practice.md) and plain-text materials. Prior help creates no obligation to publish an artifact or join a service.
