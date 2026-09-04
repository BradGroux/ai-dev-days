# Curriculum

## Learning outcomes

By the end, attendees should be able to:

1. Distinguish a model, a runtime, a harness, and a team coordination surface.
2. Explain an agent as a system that uses a model and tools in a feedback loop toward a bounded goal.
3. State what memory, a PRD, and an SOP each contribute to a project.
4. Compare an AI result against explicit criteria, including an exception and a handoff.
5. Describe the six concerns of the AI-Native Operating Framework without confusing them with tool features or mandatory steps.
6. Assemble a small reusable operating packet for one workflow.

## 90-minute teaching plan

| Elapsed | Minutes | Segment | Audience evidence |
|---|---:|---|---|
| 00–06 | 6 | Brad, Digital Meld, three years of research and delivery | Recognize the practitioner problem: explaining the same work repeatedly. |
| 06–14 | 8 | Agents, models, harnesses | Classify one component and explain what happens after a tool returns a result. |
| 14–24 | 10 | ChatGPT/Codex introduction and baseline Codex/Buzz run | See the assignment, raw sources, output, and unresolved questions. |
| 24–42 | 18 | Remaining tool tour | Identify what changes when choosing a different tool or model. |
| 42–50 | 8 | Memory, PRDs, SOPs | Match each artifact to a business question. |
| 50–58 | 8 | AI-Native Operating Framework | Connect the six concerns to the founder's actual work. |
| 58–74 | 16 | Framework-backed Codex/Buzz run and continuation | Inspect output, exceptions, checks, and a durable handoff. |
| 74–82 | 8 | Compare results and build your own packet | Score both runs and name one improvement to retain. |
| 82–86 | 4 | A year of SSTB.ai | Understand the verified redemption path and terms. |
| 86–90 | 4 | Call to action | Choose one workflow, one owner, one acceptance check. |
| 90–120 | 30 | Q&A, extra demo depth, recovery | Resolve audience scenarios without sacrificing the central comparison. |

The baseline includes Buzz early so attendees have something concrete to revisit later. The
subsequent tour returns to Buzz's collaboration surface. Allow questions at transitions. If the
actual slot is shorter, agree a revised plan; seven live surfaces plus two comparison runs will not
fit comfortably into a conventional 45-minute talk.

## Opening: six minutes

Suggested speaker opening:

> I'm Brad Groux, co-founder of Digital Meld. We've spent the last three years researching AI and
> putting it to work in products and business processes. The tools have changed repeatedly. The work
> still needs a purpose, an owner, and a way to tell whether the result is right.
>
> Today we'll give AI one job twice. You'll see the source material, the output, and the checks. Then we'll change how the work is defined and see what changes in the result.

The three-year statement comes from Brad's session brief. Select two or three public examples before
finalizing the deck: Veritas Kanban, OpenClaw contributions, and a Digital Meld delivery or research
artifact. Avoid unsupported counts, savings, client results, or implying Brad created every tool
demonstrated. Ask: “Who has had to explain the same project to AI more than once?”

## Foundations: eight minutes

**Model:** the trained computational system used to generate outputs from supplied context. Model
choice affects capability; project knowledge does not automatically become durable memory simply
because it appeared in a conversation.

**Runtime:** software that executes or serves a model. Ollama is useful here: selecting a local
model is a separate decision from choosing the app or agent that uses it. Ollama also has cloud
options; explicitly show which mode is running.

**Harness:** the surrounding software that supplies context, exposes tools, manages execution and permissions, and handles results. Capabilities vary by product and configuration.

**Agent:** a system pursuing a goal through model-directed actions and feedback. Show: goal → model
chooses an action → permitted tool executes → result returns → check, continue, or stop. A chat
response alone need not exercise an agent loop.

**Operating model:** how people and AI carry out work, make decisions, verify results, and retain lessons. It belongs to the organization and can survive a change of tools.

Comprehension check: “If I switch the model but keep the procedures and approval rules, what should
stay the same?” Expected answer: the business requirements and authority boundaries, even if output
quality or tool capabilities differ.

## Tool tour: eighteen minutes after the baseline

These are the requested tools and surfaces, not a popularity ranking.

| Surface | Time | Explain or show | Visible checkpoint |
|---|---:|---|---|
| Claude Code | 2 min | Coding-agent harness; reads files and performs permitted development work. No demo. | Audience distinguishes Claude Code from a Claude model. |
| Ollama | 3 min | Show selected runtime/model and ask one question from the founder brief. | Output appears; local/cloud choice is explicit. |
| Grok Build | 3 min | In a prepared workspace, inspect the source brief and propose a bounded next step. | Source-linked result or a real limitation is visible. |
| OpenClaw | 3 min | Ask for the event's missing prerequisites using the fictional brief. | An identified gap and next action, with no external messages. |
| Buzz | 3 min | Revisit the baseline collaboration handoff; show people, agent, artifact, and continuation context. | Audience can locate the work and its owner. |
| DeepSeek Harness preview | 2 min | Show the prepared preview executing one bounded task against the fictional source. | Identify the harness separately from its configured model; label preview limitations. |
| Veritas Kanban | 2 min | Show a prepared local board item with owner, acceptance criteria, and evidence. | Work state is separate from a model's claim of completion. |

ChatGPT/Codex receive their demo in the preceding ten-minute baseline block. Briefly show the
ChatGPT conversational surface, then use Codex for workspace artifacts. Do not spend tour time
installing software or comparing benchmark scores. Each segment answers: “What role does this play,
and what operating knowledge must we still supply?”

## Memory, PRDs, SOPs: eight minutes

- **Memory:** what must survive this conversation? Sources, accepted decisions, current state, exceptions, and the next owner. A saved statement may still be wrong or stale.
- **Project Requirements Document (PRD):** what are we building or changing, for whom, with what boundaries and acceptance criteria?
- **Standard Operating Procedure (SOP):** how is the work performed, checked, handed off, and recovered when something goes wrong?

The app is **Aggie Launchpad**, a founder dashboard for fictional Campus Cycle, a student bicycle-repair pickup idea. It connects assumptions, evidence, an experiment, and decisions. All data is fictional; use light/dark mode and maroon/cream accents.

Read one sentence from each operating document. Memory holds the current reservation count and source. Requirements define how the app shows interest versus commitment. The procedure explains what to do when cancellations put the experiment below its target.

## Framework: eight minutes

Use the six concerns as questions about this project, not as six mandatory phases:

| Concern | Plain question | Venture example |
|---|---|---|
| Intent | What outcome matters? | An evidence-based next decision for the pickup pilot. |
| Responsibility | Who owns the result and decisions? | Jordan owns the venture decision; Riley maintains research. |
| Work | What inputs, actions, and handoffs are needed? | Source records → experiment state → review → next action. |
| Control | What limits and exceptions apply? | No real outreach or launch; free reservations are not paid demand. |
| Assurance | What proves this is usable? | Source checks, unique reservation counts, cancellation case, and founder review. |
| Learning | What should improve next time? | Retain the decision and owner so another session can continue. |

The framework defines business operating concerns and standards; these Markdown files are this
event's teaching implementation. The framework does not require Codex, Buzz, a particular folder
layout, or a PRD for every process.

## Comparison and participant exercise

Ask “What changed that you can point to?” before explaining the results. Score operational
usefulness rather than visual polish. Treat an accurate baseline as a valid result. If both runs
succeed initially, the continuation and exception tests can still show differences in effort and
traceability.

Give attendees four minutes with the workbook, two minutes to compare with a neighbor, and two minutes for examples. No subscription is needed to complete the exercise.

## Close

> Pick one workflow you repeat. Write down what good looks like, who decides, and what the next
> person needs to know. Run it with the tool you have. Check the result. Keep what you learned so
> the next project starts further ahead.

Show the attendee gift and the packet/framework links, then Brad's LinkedIn and Digital Meld. Keep the action to one workflow; give the resource links separate visual space.
