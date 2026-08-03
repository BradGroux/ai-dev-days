# PRD - InfraGard Agent Team Workshop Project

## Problem

Critical infrastructure professionals are being asked to understand AI agents,
but most introductory content is either too abstract (high-level strategy) or
too tool-specific (how to use OpenClaw). Attendees need a **practical, reusable
template** for designing a small AI agent team around a real but low-risk process
in their own work.

The workshop is one event. The project is the lasting takeaway—something attendees can do again and again with any process.

## Objective

Give attendees a reusable, hands-on project template for designing and iterating on a small AI agent team. The project is:

- **Practical:** applies to real work processes (SOPs, monitoring, incident response, field data, operational coordination)
- **Safe:** uses low-risk examples; enforces data hygiene
- **Scalable:** once you've done one process, you can apply the same template to many others
- **Durable:** uses Markdown files so it's portable, versionable, and easy to refine over time

## Target Users

- **Cybersecurity practitioners** — use agents for log analysis, vulnerability assessment, incident response, security planning
- **Infrastructure engineers** — use agents for SOP writing, runbook improvement, system documentation, troubleshooting
- **OT/IT leaders** — use agents for cross-domain documentation, asset inventory, operational planning
- **Operations managers** — use agents for workflow automation, data collection, reporting, process improvement
- **Senior leaders** evaluating AI adoption — understand what agent teams can do before deciding on organizational rollout
- **Cross-sector InfraGard members** (energy, maritime, healthcare, legal, etc.) — apply the same template to domain-specific processes

## User Goals

By the end of the project, a user should be able to:

- **Explain their agent team** in plain English (what roles? what do they do?)
- **Show where memory and context are stored** (files, structure, links)
- **Identify what data must not be shared casually** (credentials, regulated data, sensitive operational details)
- **Produce one useful artifact** from the workflow (SOP, checklist, plan, analysis, or implementation roadmap)
- **Describe how they would verify the output** before using it in production
- **Repeat the process** with another workflow if needed

## Non-Goals

- Enterprise-wide deployment during the workshop
- Autonomous production changes (humans remain in approval loops)
- Replacing security review or governance
- Handling sensitive real data during the workshop
- Teaching every model/provider path in exhaustive depth

## Agent Roles

### Process Mapper

**Goal:** Turn a messy workflow into clear, structured steps.

**Input:** A description of the process (what, who, how long, what's broken)

**Output:** 
- Flowchart or step-by-step breakdown
- Identified inputs, outputs, decisions
- List of people/roles involved
- Known pain points and inefficiencies

**Example prompts:**
- "Help me map out how we currently handle [process]. What are the steps, inputs, outputs, and decision points?"
- "What are the pain points in this workflow? Where do bottlenecks happen?"

### Security Reviewer

**Goal:** Identify risks so the workflow can be built safely.

**Input:** The process, constraints, and sensitive data involved

**Output:**
- Risk/guardrail checklist
- Data classification (what's public, internal, confidential, regulated?)
- Access control needs (who should be able to do this?)
- Audit trail needs (what should we log?)
- Compliance considerations (HIPAA, SOC2, CIS, etc.)

**Example prompts:**
- "What are the security and compliance risks in this workflow?"
- "What sensitive data or credentials are involved? How should we protect them?"
- "What audit or approval steps should we have?"

### Documentation Writer

**Goal:** Create artifacts that guide the workflow and help others understand it.

**Input:** The process steps, constraints, and outputs from the other roles

**Output:**
- SOP or runbook
- Checklist or step-by-step guide
- Troubleshooting or decision tree
- Training notes for new users
- Executive summary

**Example prompts:**
- "Write a detailed SOP for this workflow. Include steps, dependencies, edge cases, and rollback procedures."
- "Create a checklist that someone could follow to [do this task]."
- "What would a new team member need to know to handle this process?"

### Implementation Planner

**Goal:** Turn recommendations into actionable next steps.

**Input:** The process, risks, and proposed improvements

**Output:**
- Task breakdown (what needs to happen first, second, third?)
- Timeline or milestones
- Verification gates (how do we know it's working?)
- Rollout plan (phased, staged, etc.)
- Follow-up actions and success metrics

**Example prompts:**
- "Break this down into specific tasks and milestones. What's the critical path?"
- "How would you roll this out safely? What verification gates should we have?"
- "What metrics should we track to know if this is working?"

### Automation Scout (Optional)

**Goal:** Suggest smart, low-risk places where tools could take on work humans are doing.

**Input:** The workflow, constraints, and current manual effort

**Output:**
- List of automation opportunities (from easy to complex)
- Effort/impact estimates
- Tools or scripts that could help
- Integration points
- Risk assessment for each opportunity

**Example prompts:**
- "Where in this workflow could we use automation or AI to reduce manual work?"
- "What integrations would be most valuable?"
- "What should we automate first? Why?"

## Inputs

Attendees bring:

- A short description of one real process
- Known constraints and sensitive data boundaries
- Intended audience for the output
- Desired first artifact

## Outputs

**Minimum viable output:**

- `memory.md` with process context, constraints, and agent role definitions
- Risk/guardrail checklist
- Draft SOP, checklist, runbook, or project plan
- One verified next action

**Stretch output:**

- Backlog of improvements
- Automation opportunity list (with effort/impact scores)
- Executive summary for stakeholders
- Implementation roadmap with timeline

## Acceptance Criteria

The project is successful if:

- ✅ Attendee can explain their agent team (roles and responsibilities)
- ✅ Memory and context are stored in version-able files (Markdown)
- ✅ The attendee identified what data must be protected and how
- ✅ They produced one useful, verified artifact
- ✅ They can describe their verification process
- ✅ They could repeat this with another workflow if asked

## Security Requirements

- Use sanitized or mock examples wherever possible
- **Never** include real secrets, credentials, API keys, or tokens
- **Avoid** private customer records, health data, or regulated information (unless you're experienced with data handling)
- **Enforce** human approval steps before operational changes
- **Document** assumptions and verification practices
- **Consider** cross-model validation for security-sensitive recommendations

## Timeline

- **During workshop (90 min):** Attendees learn the concept and start sketching their agent team.
- **Days 1-3 after workshop:** Attendees refine their `memory.md`, test with their coding assistant, and iterate.
- **Week 1-2:** Share results in community Discord, get feedback, refine further.
- **Ongoing:** Use the template for future processes.

## Success Metrics

- Attendance at workshop
- Post-workshop survey feedback
- GitHub repo activity (memory files committed, PRs, discussions)
- Community Discord engagement (questions, shared examples)
- Reported "agent team" projects in follow-up community events

## Related

- Workshop event: [`event-specific/2026-05-14-infragard-ai-agent-workshop/`](../../event-specific/2026-05-14-infragard-ai-agent-workshop/)
- Main repo: https://github.com/BradGroux/ai-dev-days
