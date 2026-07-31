# AI Dev Days Course Map

## Purpose

AI Dev Days teaches people how to move from AI activity to useful, reviewable,
and improvable work with explicit human accountability.

The subject is not "prompting tricks." The subject is operator skill:

- define the purpose, owner, outcome, and boundaries
- define the work
- give agents durable context
- limit tools and scope
- test outputs
- repair failures
- preserve evidence, handoffs, and useful operating memory
- improve the work from outcomes and lessons
- decide what ships

The
[AI-Native Operating Framework](../docs/ai-native-operating-framework-alignment.md)
is the operating foundation. OpenClaw is the current reference tool track, not
a framework requirement.

The
[research and education method](../docs/research-and-education-method.md)
governs source use, curriculum validation, event evidence, and improvement.

The course is aligned to the U.S. Department of Labor's AI Literacy Framework. See [AI Literacy Framework alignment](../docs/ai-literacy-framework-alignment.md) for the source citation and mapping.

## Audience

This curriculum works for mixed rooms:

- curious beginners who need a clear first win
- operators who want personal command-center workflows
- developers who want agent-assisted coding patterns
- facilitators who need a reusable workshop kit
- teams exploring safe agent adoption

For technical rooms, lean harder into evaluation, orchestration, error correction, and deployment handoff. For beginner rooms, protect setup, Markdown memory, agent roles, and the featured project.

## Learning Outcomes

By the end, attendees should be able to:

- distinguish source material, AI output, inference, and an authoritative result
- state the purpose, accountable owner, expected outcome, and boundaries for a
  people-and-AI activity
- explain core AI concepts, capabilities, limits, and why model output needs review
- identify practical AI uses for their own work or project context
- create a Markdown memory note that improves future agent work
- write a focused agent role with boundaries and expected output
- direct AI with clear context, constraints, prompt structure, and iteration
- turn a project idea into an agent task list
- evaluate agent output against a simple contract
- use a runner or reviewer loop to catch failures
- apply public-safe, accountable, least-privilege AI use habits
- preserve sources, decisions, evidence, work state, handoffs, and lessons
- distinguish live workshop scope from roadmap scope
- leave with one 30-day build goal

OpenClaw track outcomes additionally include installing and verifying
OpenClaw, explaining its gateway, dashboard, workspace, and operator loop, and
completing one verified response.

## DOL AI Literacy Mapping

| DOL area | Curriculum proof point |
| --- | --- |
| Understand AI Principles | Orientation, first success, model/context/memory explanation |
| Explore AI Uses Directly | Attendee project prompts, Beaver Badges, role-based product work |
| Direct AI Effectively | Markdown memory, agent instructions, task lists, prompt boundaries |
| Evaluate AI Outputs | Contracts, deterministic checks, reviewer rubrics, repair loops |
| Use AI Responsibly | Publication safety, credential handling, least-privilege roles, human acceptance |

## Curriculum Ladder

### 1. First Success

The first useful, reviewable win is non-negotiable. In the OpenClaw track it
includes:

- OpenClaw installed
- provider configured
- gateway running
- dashboard open
- first response received

Primary lab: [First success](../labs/first-success.md)

Install paths:

- [Mac OpenClaw setup](../setup-guides/openclaw-mac.md)
- [Windows OpenClaw setup](../setup-guides/openclaw-windows.md)
- [AI-assisted OpenClaw install](../setup-guides/ai-assisted-openclaw-install.md)
- [Microsoft Foundry key setup](../setup-guides/microsoft-foundry.md)

### 2. Markdown Memory

Attendees learn that agents need visible context, not vague intent.

Teach:

- Markdown source versus rendered view
- OpenClaw workspace notes
- task lists as agent plans
- public safety before sharing
- clear context and iteration as AI direction skills

Primary modules and labs:

- [Markdown thinking layer](modules/markdown-thinking-layer.md)
- [Markdown memory loop](../labs/memory-loop.md)

### 3. Agent Roles

The workshop shifts from one assistant to a small agent team.

Core roles:

- Market Researcher
- Idea Validator
- Project Manager
- Coder
- Outreach Assistant

Primary section: [Agent roles](agent-roles/README.md)

### 4. Contracts and Evaluations

Attendees learn that useful agents need output contracts and tests.

Teach:

- expected structure
- deterministic checks
- reviewer rubrics
- edge cases
- pass/fail summaries
- human accountability for accepted outputs

Primary module and lab:

- [Agent contracts and evaluations](modules/agent-contracts-and-evals.md)
- [Agent contract evaluation](../labs/agent-contract-evaluation.md)

### 5. Orchestration and Repair

Attendees learn how multiple specialized agents can collaborate without giving every agent every capability.

Teach:

- human orchestration
- least-privilege roles
- runner/reviewer separation
- failure reports
- diagnosis notes
- next-iteration patch plans
- least-privilege tool and context boundaries

Primary module and lab:

- [Orchestration and repair loops](modules/orchestration-and-repair-loops.md)
- [Orchestrated repair loop](../labs/orchestrated-repair-loop.md)

### 6. Product Build

The featured project makes the workflow concrete.

Primary project:

- [Beaver Badges](../projects/beaver-badges/README.md)

The goal is not to build a giant app. The goal is to show how agent roles produce better product decisions, cleaner documentation, and a smaller path to a working demo.

### 7. Handoff

Close with a practical continuation plan:

- what memory files to keep
- which agent role to improve first
- what contract or test to add next
- what to avoid publishing
- what to ship in 30 days
- what AI skill to strengthen next

## Recommended Paths

### Half-Day Beginner Path

1. First success
2. Markdown thinking layer
3. Markdown memory loop
4. Agent roles
5. Beaver Badges README improvement
6. 30-day build goal

### One-Day Standard Path

1. First success
2. Markdown memory
3. Agent roles
4. Agent contract evaluation
5. Beaver Badges build
6. Orchestrated repair loop
7. Showcase and handoff

### Advanced Engineering Path

1. First success
2. Agent contracts and evaluations
3. Orchestration and repair loops
4. Context and cost review
5. Tool boundaries and safety
6. Deployment handoff discussion

## Facilitator Rule

When the room is behind, cut depth before cutting the first working loop.

Protect:

- first response
- Markdown memory file
- one useful agent instruction
- one evaluation or review checkpoint
- one next step
