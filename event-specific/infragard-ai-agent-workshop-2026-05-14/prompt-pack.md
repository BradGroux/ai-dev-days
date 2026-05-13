# Prompt Pack - InfraGard AI Agent Workshop

Use these with OpenClaw, Codex, Claude Code, ChatGPT, GitHub Copilot, or another approved AI assistant. Replace bracketed text with your sanitized workflow.

## 1. Create A Memory File

```text
I am attending the InfraGard Houston AI Agent Workshop.

Help me create a Markdown memory file for one low-risk workflow.

Workflow:
[describe the process]

Before you propose a solution, ask me three clarifying questions.

Do not ask for secrets, customer data, regulated data, internal network details, or private operational details. Use placeholders where needed.
```

## 2. Process Mapper

```text
Act as a Process Mapper.

Using the workflow context below, map the process into:
1. steps,
2. inputs,
3. outputs,
4. decision points,
5. handoffs,
6. owners or roles,
7. bottlenecks,
8. missing information.

Ask clarifying questions before assuming facts.

Workflow context:
[paste sanitized context]
```

## 3. Security Reviewer

```text
Act as a Security Reviewer for a critical infrastructure or operational environment.

Review this workflow for:
1. sensitive data,
2. credential risks,
3. privacy or regulated data,
4. operational safety risks,
5. prompt-injection or tool-use risks,
6. approval gates,
7. logging/audit needs,
8. what should stay human-approved.

Return a concise guardrail checklist.

Workflow context:
[paste sanitized context]
```

## 4. Documentation Writer

```text
Act as a Documentation Writer.

Using the process map and guardrail checklist below, draft a practical SOP or checklist.

Requirements:
- keep it clear enough for a new team member
- include prerequisites
- include step-by-step actions
- include decision points
- include escalation paths
- include verification checks
- do not include secrets or sensitive data

Context:
[paste process map and guardrail checklist]
```

## 5. Implementation Planner

```text
Act as an Implementation Planner.

Turn this workflow improvement into a low-risk implementation plan.

Return:
1. the safest first experiment,
2. required inputs,
3. tasks,
4. verification gates,
5. human approval points,
6. rollback or stop conditions,
7. success metrics,
8. what not to automate yet.

Context:
[paste sanitized workflow and draft artifact]
```

## 6. Automation Scout

```text
Act as an Automation Scout.

Find automation opportunities in this workflow.

Rank each opportunity by:
- impact: low, medium, high
- effort: low, medium, high
- risk: low, medium, high

Recommend only one first automation experiment. It must be low-risk, reversible, and human-reviewed.

Context:
[paste sanitized workflow]
```

## 7. Verification Reviewer

```text
Act as a skeptical reviewer.

Review the agent-produced artifact below.

Identify:
1. factual assumptions,
2. missing edge cases,
3. unsafe recommendations,
4. places where human approval is needed,
5. tests or checks that would verify it,
6. questions to ask before using this in production.

Artifact:
[paste output]
```

## 8. Executive Summary

```text
Turn this workflow plan into a short executive summary for a non-technical leader.

Include:
- the process being improved
- the business or mission value
- the safety boundaries
- what the agent does
- what humans still approve
- the first next step

Keep it under 200 words.

Context:
[paste sanitized workflow plan]
```

## 9. 30-Day Challenge

```text
Help me create a 30-day plan for one low-risk agent-assisted workflow.

The plan should include:
- week 1: document and sanitize the workflow
- week 2: create prompts and first artifact
- week 3: verify with a human reviewer
- week 4: decide whether to keep, change, or stop

Include a simple success metric and a stop condition.

Workflow:
[describe workflow]
```

## 10. Safe Red-Team Prompt

```text
Act as a safety reviewer, not an attacker.

Given this proposed agent workflow, identify ways it could fail or be misused.

Focus on:
- data leakage
- over-permissioned tools
- prompt injection
- incorrect assumptions
- missing approval gates
- audit gaps
- operational safety concerns

Do not provide exploit instructions. Return mitigations and questions.

Workflow:
[paste sanitized workflow]
```

## Reusable Rule

For any workflow, use this order:

1. Describe the process.
2. Bound the data.
3. Assign the agent role.
4. Ask for clarifying questions.
5. Produce one artifact.
6. Verify the artifact.
7. Decide the next safe step.
