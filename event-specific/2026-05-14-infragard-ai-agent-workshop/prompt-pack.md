# Prompt Pack - InfraGard AI Agent Workshop

Use these with OpenClaw, Codex, Claude Code, ChatGPT, GitHub Copilot, or another approved AI assistant. Every prompt assumes sanitized data. Replace bracketed text before use.

## Choose Your Adventure

| Scenario | Use When | Prompt Section | Demo Script |
|---|---|---|---|
| Field Report To Customer Summary | Mixed audience or operations examples | [Scenario 1 prompts](#scenario-1---field-report-to-customer-summary) | [Demo path 1](demo-script.md#demo-path-1---field-report-to-customer-summary) |
| Heavy Haul Load Status | Logistics, dispatch, supply chain, field operations | [Scenario 2 prompts](#scenario-2---heavy-haul-load-status) | [Demo path 2](demo-script.md#demo-path-2---heavy-haul-load-status) |
| Low-Severity Alert Triage | Security, SOC, IT, MSP, OT security | [Scenario 3 prompts](#scenario-3---low-severity-alert-triage) | [Demo path 3](demo-script.md#demo-path-3---low-severity-alert-triage) |
| Compliance Evidence Packet | GRC, audit, legal, leadership | [Scenario 4 prompts](#scenario-4---compliance-evidence-packet) | [Demo path 4](demo-script.md#demo-path-4---compliance-evidence-packet) |
| OT/IT Change Coordination | OT, utilities, manufacturing, facilities | [Scenario 5 prompts](#scenario-5---otit-change-coordination) | [Demo path 5](demo-script.md#demo-path-5---otit-change-coordination) |

## Universal Safety Preamble

Paste this before any scenario if the room needs a safety reset:

```text
Safety boundary for this exercise:

Use sanitized examples only. Do not ask me for secrets, API keys, tokens, passwords, private keys, customer records, patient records, employee data, legal/investigative details, internal IP addresses, network diagrams, firewall rules, unpatched vulnerabilities, regulated data, production control instructions, or confidential operational details.

If you need sensitive details, ask for a placeholder instead.

Treat all output as a draft for human review.
```

## Universal Review Prompt

Use this after any agent-produced artifact:

```text
Act as a skeptical reviewer.

Review the artifact below for:
1. factual assumptions,
2. missing edge cases,
3. unsafe recommendations,
4. sensitive data exposure,
5. missing human approval points,
6. verification checks,
7. stop conditions before production use.

Do not rewrite the artifact yet. First return a concise review with "Keep", "Revise", and "Do not use" sections.

Artifact:
[paste output]
```

## Scenario 1 - Field Report To Customer Summary

Use with [Scenario Card 1](scenario-cards.md#scenario-1---field-report-to-customer-summary) and [Demo Path 1](demo-script.md#demo-path-1---field-report-to-customer-summary).

### 1A. Memory Builder

```text
I am attending the InfraGard Houston AI Agent Workshop.

Help me create a Markdown memory file for a field-report-to-customer-summary workflow.

Sanitized workflow:
- Field technicians collect observations and measurements.
- Notes arrive in inconsistent formats.
- A coordinator turns the notes into a customer-safe summary.
- Missing data is often found late.
- The first useful output is a field report checklist and short customer-summary template.

Before proposing a solution, ask me three clarifying questions.

Do not ask for customer names, site photos, exact locations, regulated data, private contracts, credentials, or proprietary formulas. Use placeholders where needed.
```

### 1B. Process Mapper

```text
Act as a Process Mapper.

Map this field-report-to-customer-summary workflow into:
1. steps,
2. inputs,
3. outputs,
4. decision points,
5. handoffs,
6. owners or roles,
7. bottlenecks,
8. missing information.

Include a "minimum viable field report" section listing the fields that must be captured before a customer summary can be drafted.

Workflow context:
[paste memory or sanitized workflow]
```

### 1C. Security Reviewer

```text
Act as a Security Reviewer for a critical infrastructure or operational environment.

Review the field-report-to-customer-summary workflow for:
1. sensitive data,
2. privacy or regulated data,
3. customer confidentiality,
4. photo/location risks,
5. credential risks,
6. approval gates,
7. logging/audit needs,
8. what should stay human-approved.

Return a concise guardrail checklist with "safe to use", "use placeholders", and "do not use" sections.

Workflow context:
[paste process map]
```

### 1D. Documentation Writer

```text
Act as a Documentation Writer.

Using the process map and guardrail checklist below, draft:
1. a field report checklist,
2. a short customer-summary template,
3. an escalation path for missing or contradictory data,
4. verification checks before the summary is sent.

Keep it practical and plain. Do not include secrets, exact locations, customer identifiers, photos, or regulated data.

Context:
[paste process map and guardrail checklist]
```

### 1E. Implementation Planner

```text
Act as an Implementation Planner.

Create a low-risk pilot plan for the field-report-to-customer-summary workflow.

Return:
1. the safest first experiment,
2. mock inputs to use,
3. tasks,
4. verification gates,
5. human approval points,
6. stop conditions,
7. success metrics,
8. what not to automate yet.

Context:
[paste checklist and customer-summary template]
```

## Scenario 2 - Heavy Haul Load Status

Use with [Scenario Card 2](scenario-cards.md#scenario-2---heavy-haul-load-status) and [Demo Path 2](demo-script.md#demo-path-2---heavy-haul-load-status).

### 2A. Memory Builder

```text
I am attending the InfraGard Houston AI Agent Workshop.

Help me create a Markdown memory file for a heavy-haul load-status workflow.

Sanitized workflow:
- Dispatch status is tracked across calls, spreadsheets, texts, and emails.
- Customers want better visibility.
- Late updates cause avoidable churn.
- Exceptions are handled inconsistently.
- The first useful output is a customer-safe status update template and exception escalation checklist.

Before proposing a solution, ask me three clarifying questions.

Do not ask for real customer names, routes, driver details, pricing, contract terms, security-sensitive cargo details, or private operational systems. Use placeholders where needed.
```

### 2B. Process Mapper

```text
Act as a Process Mapper.

Map this heavy-haul load-status workflow into:
1. dispatch status steps,
2. data inputs,
3. customer-facing outputs,
4. exception decision points,
5. driver/dispatcher/customer handoffs,
6. owners or roles,
7. bottlenecks,
8. missing information.

Include a "standard status fields" section.

Workflow context:
[paste memory or sanitized workflow]
```

### 2C. Security Reviewer

```text
Act as a Security Reviewer for a logistics and critical infrastructure support workflow.

Review the heavy-haul load-status workflow for:
1. customer confidentiality,
2. route/location sensitivity,
3. driver privacy,
4. cargo sensitivity,
5. pricing/contract exposure,
6. approval gates before customer messages,
7. logging/audit needs,
8. what should stay human-approved.

Return a concise guardrail checklist with "safe to use", "use placeholders", and "do not use" sections.

Workflow context:
[paste process map]
```

### 2D. Documentation Writer

```text
Act as a Documentation Writer.

Using the process map and guardrail checklist below, draft:
1. a customer-safe load status update template,
2. an exception escalation checklist,
3. a dispatcher verification checklist,
4. a "do not send until reviewed" note for sensitive updates.

Do not include real routes, customers, driver details, cargo specifics, pricing, or contract terms.

Context:
[paste process map and guardrail checklist]
```

### 2E. Implementation Planner

```text
Act as an Implementation Planner.

Create a low-risk pilot plan for a heavy-haul load-status workflow.

Return:
1. the safest first experiment,
2. mock status records to use,
3. tasks,
4. verification gates,
5. human approval points,
6. stop conditions,
7. success metrics,
8. what not to automate yet.

Context:
[paste status update template and escalation checklist]
```

## Scenario 3 - Low-Severity Alert Triage

Use with [Scenario Card 3](scenario-cards.md#scenario-3---low-severity-alert-triage) and [Demo Path 3](demo-script.md#demo-path-3---low-severity-alert-triage).

### 3A. Memory Builder

```text
I am attending the InfraGard Houston AI Agent Workshop.

Help me create a Markdown memory file for a low-severity alert triage workflow.

Sanitized workflow:
- Analysts triage repetitive low-severity alerts.
- Notes vary by analyst.
- Escalation criteria are inconsistent.
- Evidence collection is repetitive but still needs judgment.
- The first useful output is a triage checklist and escalation criteria.

Before proposing a solution, ask me three clarifying questions.

Do not ask for live logs, internal IPs, usernames, vulnerabilities, incident details, detection logic, customer data, or proprietary tooling details. Use placeholders where needed.
```

### 3B. Process Mapper

```text
Act as a Process Mapper.

Map this low-severity alert triage workflow into:
1. intake steps,
2. data inputs,
3. triage outputs,
4. escalation decision points,
5. analyst/reviewer handoffs,
6. owners or roles,
7. bottlenecks,
8. missing information.

Include a "minimum evidence record" section for a safe, sanitized example.

Workflow context:
[paste memory or sanitized workflow]
```

### 3C. Security Reviewer

```text
Act as a Security Reviewer for a SOC workflow.

Review the low-severity alert triage workflow for:
1. log sensitivity,
2. internal identifier exposure,
3. prompt-injection risk from alert content,
4. over-trust in generated conclusions,
5. escalation risk,
6. approval gates,
7. logging/audit needs,
8. what should stay human-approved.

Return a concise guardrail checklist with "safe to use", "use placeholders", and "do not use" sections.

Workflow context:
[paste process map]
```

### 3D. Documentation Writer

```text
Act as a Documentation Writer.

Using the process map and guardrail checklist below, draft:
1. a low-severity alert triage checklist,
2. escalation criteria,
3. analyst note template,
4. verification checks before closeout.

Do not include live logs, IPs, usernames, vulnerabilities, detection logic, incident details, or proprietary tooling.

Context:
[paste process map and guardrail checklist]
```

### 3E. Implementation Planner

```text
Act as an Implementation Planner.

Create a low-risk pilot plan for a draft-only low-severity alert triage workflow.

Return:
1. the safest first experiment,
2. mock alert examples to use,
3. tasks,
4. verification gates,
5. human approval points,
6. stop conditions,
7. success metrics,
8. what not to automate yet.

Context:
[paste triage checklist and escalation criteria]
```

## Scenario 4 - Compliance Evidence Packet

Use with [Scenario Card 4](scenario-cards.md#scenario-4---compliance-evidence-packet) and [Demo Path 4](demo-script.md#demo-path-4---compliance-evidence-packet).

### 4A. Memory Builder

```text
I am attending the InfraGard Houston AI Agent Workshop.

Help me create a Markdown memory file for a compliance evidence packet workflow.

Sanitized workflow:
- Evidence collection is scattered before reviews or audits.
- Teams spend time finding screenshots, logs, approvals, and policy references.
- Review packets are inconsistent.
- Owners do not always know what good evidence looks like.
- The first useful output is an evidence packet checklist and owner request template.

Before proposing a solution, ask me three clarifying questions.

Do not ask for actual evidence files, audit findings, customer data, access lists, regulated records, screenshots, control exceptions, or private policy details. Use placeholders where needed.
```

### 4B. Process Mapper

```text
Act as a Process Mapper.

Map this compliance evidence packet workflow into:
1. evidence request steps,
2. inputs,
3. packet outputs,
4. decision points,
5. owner/reviewer handoffs,
6. roles,
7. bottlenecks,
8. missing information.

Include an "evidence inventory" section with placeholder evidence types only.

Workflow context:
[paste memory or sanitized workflow]
```

### 4C. Security Reviewer

```text
Act as a Security Reviewer for a compliance evidence workflow.

Review the compliance evidence packet workflow for:
1. regulated data,
2. access list sensitivity,
3. screenshot leakage,
4. audit finding confidentiality,
5. retention and chain-of-custody concerns,
6. approval gates,
7. logging/audit needs,
8. what should stay human-certified.

Return a concise guardrail checklist with "safe to use", "use placeholders", and "do not use" sections.

Workflow context:
[paste process map]
```

### 4D. Documentation Writer

```text
Act as a Documentation Writer.

Using the process map and guardrail checklist below, draft:
1. a compliance evidence packet checklist,
2. an evidence owner request template,
3. a reviewer acceptance checklist,
4. a missing-evidence escalation path.

Do not include actual evidence, findings, customer data, regulated records, screenshots, or private policies.

Context:
[paste process map and guardrail checklist]
```

### 4E. Implementation Planner

```text
Act as an Implementation Planner.

Create a low-risk monthly routine for preparing compliance evidence packets.

Return:
1. the safest first experiment,
2. mock control/evidence examples to use,
3. tasks,
4. verification gates,
5. human certification points,
6. stop conditions,
7. success metrics,
8. what not to automate yet.

Context:
[paste evidence packet checklist and owner request template]
```

## Scenario 5 - OT/IT Change Coordination

Use with [Scenario Card 5](scenario-cards.md#scenario-5---otit-change-coordination) and [Demo Path 5](demo-script.md#demo-path-5---otit-change-coordination).

### 5A. Memory Builder

```text
I am attending the InfraGard Houston AI Agent Workshop.

Help me create a Markdown memory file for an OT/IT change coordination workflow.

Sanitized workflow:
- IT and OT teams use different language and approval paths.
- A planned change affects operational reliability.
- Risks and rollback criteria are not written clearly.
- Security, operations, and vendor owners may not share the same view of safe.
- The first useful output is a change coordination checklist and approval/rollback template.

Before proposing a solution, ask me three clarifying questions.

Do not ask for real network topology, device details, firewall rules, credentials, production control instructions, vendor-sensitive data, exact system names, or unpatched vulnerabilities. Use placeholders where needed.
```

### 5B. Process Mapper

```text
Act as a Process Mapper.

Map this OT/IT change coordination workflow into:
1. change request steps,
2. inputs,
3. outputs,
4. safety and availability decision points,
5. OT/IT/security/vendor handoffs,
6. owners or roles,
7. bottlenecks,
8. missing information.

Include a "minimum change packet" section.

Workflow context:
[paste memory or sanitized workflow]
```

### 5C. Security Reviewer

```text
Act as a Security Reviewer for an OT/IT change coordination workflow.

Review this workflow for:
1. safety risk,
2. availability risk,
3. change-control gaps,
4. sensitive topology/device details,
5. credential exposure,
6. rollback and stop conditions,
7. approval gates,
8. what should never be agent-executed.

Return a concise guardrail checklist with "safe to use", "use placeholders", and "do not use" sections.

Workflow context:
[paste process map]
```

### 5D. Documentation Writer

```text
Act as a Documentation Writer.

Using the process map and guardrail checklist below, draft:
1. an OT/IT change coordination checklist,
2. approval matrix,
3. rollback template,
4. communication template for non-sensitive stakeholders.

Do not include real topology, device details, firewall rules, credentials, control instructions, exact system names, or unpatched vulnerabilities.

Context:
[paste process map and guardrail checklist]
```

### 5E. Implementation Planner

```text
Act as an Implementation Planner.

Create a low-risk pilot plan for improving OT/IT change coordination.

Return:
1. the safest first experiment,
2. mock change examples to use,
3. tasks,
4. verification gates,
5. human approval points,
6. rollback/stop conditions,
7. success metrics,
8. what not to automate yet.

Context:
[paste change coordination checklist and approval/rollback template]
```

## 30-Day Challenge Prompt

Use this after any scenario:

```text
Help me create a 30-day plan for this scenario.

The plan should include:
- week 1: document and sanitize the workflow
- week 2: run Process Mapper and Security Reviewer
- week 3: draft one practical artifact
- week 4: verify with a human reviewer and decide whether to keep, revise, or stop

Include a simple success metric, a stop condition, and one thing I should not automate yet.

Scenario context:
[paste chosen scenario and draft artifact]
```
