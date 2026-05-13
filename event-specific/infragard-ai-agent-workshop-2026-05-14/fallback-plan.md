# Fallback Plan

Use this if tooling, network, Q&A, or virtual-meeting constraints start consuming the session.

## Rule

Protect the learning outcome. The session succeeds if attendees understand the workflow pattern and leave with a safe next step.

## If The Preferred AI Tool Fails

- Use the prompt pack as a read-through.
- Show a saved example output.
- Ask attendees what they would change or reject.
- Emphasize verification and review instead of live generation.

## If Network Or Virtual Meeting Tools Are Unreliable

- Keep the screen on [`attendee-links.md`](attendee-links.md) and [`prompt-pack.md`](prompt-pack.md) if possible.
- Talk through the workflow from the repo files.
- Have attendees write their own Markdown memory note locally.
- Use the demo script as a narrative walkthrough.

## If Install Questions Take Over

Say:

> Installation is a follow-up path, not the session objective. The objective today is understanding how to structure agent work safely.

Then point attendees to:

- [`requirements.md`](requirements.md)
- [`../../setup-guides/openclaw-mac.md`](../../setup-guides/openclaw-mac.md)
- [`../../setup-guides/openclaw-windows.md`](../../setup-guides/openclaw-windows.md)
- [`../../setup-guides/ai-assisted-openclaw-install.md`](../../setup-guides/ai-assisted-openclaw-install.md)

## If Q&A Gets Too Broad

Use the filter:

1. What is the process?
2. What data is involved?
3. What should the agent be allowed to do?
4. What must a human approve?
5. How would you verify the result?

If the question does not fit that frame, park it for follow-up.

## If Security Concerns Dominate

Do not dismiss the concerns. Convert them into guardrails:

- read-only first
- sanitized examples
- least privilege
- no secrets in prompts
- identity and audit before enterprise rollout
- human approval for external or operational actions
- circuit breaker for anything automated

## Minimum Viable Session

If everything breaks, run this 30-minute version:

1. Explain agents versus chatbots.
2. Show the Markdown memory template.
3. Walk through one scenario card.
4. Use the prompt pack verbally.
5. Build a guardrail checklist.
6. End with the 30-day challenge.

Minimum outcome:

- one process idea
- one memory note
- one role-based prompt
- one risk checklist
- one next action
