# Facilitator Notes - InfraGard AI Agent Workshop

Use these notes for Brad, Richard, Andrew, and any InfraGard host/moderator.

## Session Intent

This is the practical follow-up to the March 2026 "AI Agents Unplugged" session.
The March talk established the agent landscape: agents are multi-step workers,
enterprise platforms are moving toward agent identity and governance, and
critical infrastructure teams face both opportunity and new attack surfaces.

The May session should move macro to micro to macro:

1. why critical infrastructure professionals should care
2. how a practical agent-assisted workflow is built
3. how to adopt safely with governance, verification, and human approval

## Opening Frame

Use this near the start:

> The goal today is practical literacy. OpenClaw is the example environment, but
> the durable skill is understanding how agent teams work, how memory and context
> are managed, how to verify output, and how to think about security before using
> these tools in critical infrastructure environments.

Set expectations:

- This is not a live install clinic.
- Attendees do not need to become developers during the session.
- Sanitized examples only.
- Do not paste secrets, customer data, network details, regulated data, or unpatched vulnerability details into public tools.
- Model and tool behavior will vary; that is part of the lesson.

## Security Bookend Questions

Use 2-4. Keep it crisp so Brad has time for the workflow demo.

### For Richard

1. What should critical infrastructure professionals understand about threat actors using agentic AI?
2. Where do you see the biggest near-term risks: credential exposure, data leakage, over-trust, prompt injection, agent impersonation, or something else?
3. How should leaders separate personal experimentation from enterprise rollout?
4. Why does hands-on literacy matter even for leaders who will never personally deploy OpenClaw?

### For Brad

1. What does "agent team" mean in plain English?
2. Why use OpenClaw as the example environment instead of keeping this abstract?
3. Why does Markdown matter as memory/context for agents?
4. What should attendees verify after an agent produces an output or changes something?
5. What is a safe first workflow for someone in security, operations, or infrastructure?

### Joint Discussion

- What should never be a first workflow?
- Where should human approval remain mandatory?
- How do you tell the difference between useful automation and unsafe autonomy?

## Prior Deck Themes To Reuse

Carry these forward from the March session, but keep them practical:

- Agents are not chatbots. They can plan, use tools, remember context, and report back.
- If you can write an SOP for it, an agent can often help execute, check, or improve it.
- Enterprise guardrails need four layers: policy, access, observability, and human intervention.
- Agents need identity and least privilege, not shared human credentials.
- If you cannot reconstruct what an agent did, you cannot investigate or govern it.
- Prompt injection, data exfiltration, malicious tools/plugins, agent impersonation, and agent-to-agent lateral movement are real threat surfaces.
- Critical infrastructure has high-value use cases, but production control actions require stricter approval and audit.

Avoid relying on unverified launch/version claims during the live session. If naming specific vendor platforms, frame them as examples of a broader enterprise trend: agent identity, access control, observability, and governed orchestration.

## Demo Anchors

Brad's demo should stay conceptual and workflow-focused:

1. Start with a sanitized workflow, not tool setup.
2. Show a Markdown memory file.
3. Assign specialized agent roles.
4. Ask for clarifying questions before plans.
5. Ask for a risk/guardrail checklist.
6. Ask for a useful artifact: SOP, checklist, summary, rollout plan, or backlog.
7. Review the output and show what needs verification.

Good line:

> Agents produce. Humans judge.

## Real-World Example Talking Points

### Heavy Haul Logistics

- A long-running logistics business faces new tracking demands from large infrastructure/data-center work.
- Manual baseline: spreadsheets, email, phone calls, and status ambiguity.
- Agent workflow: map dispatch, identify data handoffs, draft customer status updates, create a tracking implementation plan, and define verification gates.
- Lesson: smaller operational teams can move faster when they convert institutional knowledge into structured workflows.

### Field Testing / Reporting

- Field and lab data often exists, but is scattered across photos, spreadsheets, email, and informal messaging.
- Agent workflow: structure field notes, detect missing data, draft customer-safe reports, and prepare portal or workflow requirements.
- Lesson: the value is not magic AI. The value is turning messy operational data into repeatable process.

### SOC / Compliance

- Agents can draft incident timelines, collect evidence lists, summarize low-risk alerts, and prepare review packets.
- Humans certify findings, approve escalation, and own regulated decisions.
- Lesson: use agents to reduce repetitive coordination, not to bypass accountability.

## Governance Closing

Close with pragmatic guidance:

- dog-food with sanitized personal or internal workflows first
- start with read-only or draft-only tasks
- define data boundaries before tool use
- use identity, access control, audit logs, and revocation before enterprise rollout
- keep secrets in vaults or approved secret stores, not prompts
- require human approval for external messages, production changes, security-impacting work, and regulated decisions
- keep a circuit breaker: if you cannot stop it fast, you cannot contain it fast

Useful one-liner:

> You cannot govern or defend what you do not understand, but understanding it does not mean turning it loose on production.

## Moderator Watchouts

- If install questions start consuming time, point to the repo and move on.
- If vendor comparisons take over, redirect to the workflow pattern.
- If someone asks about sensitive real data, reinforce sanitized examples and workplace policy.
- If discussion gets too abstract, ask: "What is the process, what data is involved, and what would you verify?"

## Follow-Up Links

- Event start page: [`attendee-links.md`](attendee-links.md)
- Prompt pack: [`prompt-pack.md`](prompt-pack.md)
- Scenario cards: [`scenario-cards.md`](scenario-cards.md)
- Agent team project: [`../../projects/infragard-agent-team/`](../../projects/infragard-agent-team/)
- Community Discord: https://discord.gg/Gmfkm7QVSF
