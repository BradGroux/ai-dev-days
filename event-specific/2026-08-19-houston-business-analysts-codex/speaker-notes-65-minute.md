# Speaker Notes: 65-Minute Core + 25-Minute Extension

## Delivery contract

- Core session: 65 minutes
- Extension: 25 minutes
- Slides: [slides.html](slides.html)
- Demo workspace: [demo/workspace/](demo/workspace/)
- Exact prompts: [prompt-pack.md](prompt-pack.md)
- Prepared result: [demo/workspace/verification-report.md](demo/workspace/verification-report.md)
- Interaction: welcome relevant questions throughout; park deep implementation
  questions for slide 24
- Safety: use only the fictional source packet and generic audience scenarios

The core is intentionally a 55-minute teaching spine with 10 minutes of
audience participation. The extension is a scenario clinic and Q&A, not extra
lecture.

## Before taking the stage

1. Open [slides.html](slides.html) at `#slide1` in a local browser.
2. Confirm dark mode, 1920 x 1080 projection, keyboard navigation, and QR scans.
3. Open Codex at [demo/workspace/](demo/workspace/) with
   [prompt-pack.md](prompt-pack.md) beside it.
4. Keep [verification-report.md](demo/workspace/verification-report.md) open as
   the no-network fallback.
5. Confirm the organizer's halfway and 15-minutes-remaining signals.
6. Put the five-column whiteboard headings up before the room fills:
   `People | Process | Data | Guardrails | Proof`.

## 0:00-0:05 - Welcome, host, community, and presenter

### Slide 1 - From Requirements to Reliable AI

Time: 1 minute

Open with:

> This is not a session about replacing business analysts. It is about why AI
> makes good business analysis more valuable.

Set expectations:

- questions and relevant interruptions are welcome
- the Codex demo uses fictional data and takes no external action
- technical implementation is available in the packet, but the main discussion
  is about business context and repeatable outcomes

### Slide 2 - Thanks to Improving

Time: 1 minute

Thank Improving using the organizer-provided wording. Do not improvise service
claims beyond the slide.

### Slide 3 - Welcome to HOUBAs

Time: 1 minute

- Recognize Terrence and the Houston Business Analysts organizers.
- Mention the third-Wednesday schedule.
- Give attendees 20 seconds to scan the local group or public-page QR.
- Transition: "This room already has the methods AI projects usually discover
  they needed too late."

### Slide 4 - About Brad

Time: 2 minutes

- Keep the introduction concise; the left side establishes experience and the
  right side states the point of view: evidence-backed delivery and ownership
  of the operating model.
- Do not turn this into a biography. Establish why the room should trust the
  practitioner perspective, then move into their experience.
- Mention that the social profiles use the same `@bradgroux` handle. The slide
  separates places to follow from websites to visit so the audience can scan
  both quickly.

[Sources]

- Brad Groux profiles and sites: <https://twitter.com/BradGroux>,
  <https://www.linkedin.com/in/bradgroux/>, <https://youtube.com/BradGroux>,
  <https://www.bradgroux.com>, <https://digitalmeld.io>, and <https://sstb.ai>.

## 0:05-0:09 - Establish the room

### Slide 5 - Opening poll

Time: 4 minutes

Ask all three questions as show-of-hands prompts. Take one short example after
question three.

Listen for:

- changing answers
- missing business context
- an automated happy path that ignored exceptions
- unclear ownership
- an output that could not be verified

Reflect the example back in BA language. Do not solve it yet.

Transition:

> Keep that example in mind. We are going to build a small operating model for
> it before we talk about connecting anything.

## 0:09-0:14 - Define the problem

### Slide 6 - Know the destination

Time: 2 minutes

The quote is a common English rendering of Seneca's *Moral Letters to
Lucilius*, 71.3.

Say:

> A faster wind does not help if the business has not agreed on the port. In
> our work, the port is the outcome, the decision boundary, and the evidence
> that proves the outcome.

### Slide 7 - The context problem

Time: 3 minutes

Define context with four questions:

1. What is true?
2. What is allowed?
3. What happens next?
4. What evidence means done?

Make the distinction explicit:

- a model may be capable
- the workflow may still be unreliable
- reliability depends on the surrounding operating context and verification

## 0:14-0:19 - Reframe the BA role

### Slide 8 - The context architect

Time: 3 minutes

Walk left to right:

`People -> Process -> Data -> Context -> Agent -> Evidence`

Say:

> The business analyst helps define every boundary to the left of the agent and
> every proof point to its right.

Ask:

> Which part of this chain usually arrives last in your projects?

Take two quick answers.

### Slide 9 - Markdown

Time: 2 minutes

Avoid selling Markdown as a technical preference. Frame it as a shared work
surface:

- readable by operators, reviewers, and agents
- reviewable in small changes
- portable beyond one chat or product

Point to the stop conditions before the goal. That is the first visible signal
that the artifact is an operating contract, not a clever prompt.

## 0:19-0:26 - Teach the artifact stack

### Slide 10 - Evidence and definition

Time: 2 minutes

Teach the business question before the filename:

- What do we know? Source notes.
- What actually happens? Process brief.
- What does the data mean? Data contract.
- Do we mean the same thing? Glossary.

### Slide 11 - Guidance and execution

Time: 3 minutes

- What rules always apply here? `AGENTS.md`.
- What prior context may help? Memory.
- How is the work performed? SOP.
- Why are we changing it, and what is success? PRD.

Define the acronyms before using the shorthand:

- SOP: Standard Operating Procedure.
- PRD: Product Requirements Document.

Repeat:

> Memory is helpful recall, not policy.

### Slide 12 - Reuse and proof

Time: 2 minutes

- A skill is a versioned, reusable method.
- Acceptance checks are traceability, UAT, controls, and evidence.

Do not teach skill folder anatomy here. Offer that for technical questions in
the extension.

Checkpoint question:

> Which artifact in your organization is most often missing or overloaded?

## 0:26-0:34 - Demo one: expose ambiguity

### Slide 13 - Vendor onboarding

Time: 2 minutes

Introduce the fictional scenario:

- common across industries
- enough policy and data risk to require boundaries
- no real vendor, company, or system
- the agent prepares a review packet; it never approves a vendor

Frame the guiding principle in one sentence:

> The AI-Native Operating Framework gives us six questions about the business;
> Northstar policy gives us the rules for this fictional decision.

Use the concerns conversationally—Intent, Responsibility, Work, Control,
Assurance, and Learning. Do not stop to teach a second framework curriculum.

### Slide 14 - Messy source notes

Time: 6 minutes

Give the room 45 seconds to inspect the statements. Ask for:

1. one exception
2. one undefined term
3. one decision owner

Write answers on the whiteboard.

If the room stalls, use:

- exception: rush vendors start by email
- undefined term: low risk
- owner: who can approve threshold and screening rules

Then switch to the generated discovery workspace in Codex and run
[Prompt 01](demo/prompts/01-audit-current-state.md).
Keep the visible request structure:

- Goal
- Context
- Constraints
- Done when

If generation exceeds 90 seconds, show the prepared process brief and continue.

## 0:34-0:41 - Make ambiguity reviewable

### Slide 15 - The useful output

Time: 4 minutes

Return to the deck and compare the output:

- confirmed facts cite sources
- conflicts remain unresolved
- focused questions are ranked by execution risk
- every unresolved decision has an owner to find

Say:

> The first reliable output is often not an answer. It is a smaller, better
> decision set.

### Slide 16 - Data contract

Time: 3 minutes

Walk one row only: `screening_result`.

- meaning is an approved disposition, not arbitrary free text
- the source and owner are named
- validation is constrained
- missing behavior is STOP

Ask:

> What would break if this field were stale, missing, or defined differently by
> two teams?

## 0:41-0:50 - Turn context into operation

### Slide 17 - Guidance versus memory

Time: 3 minutes

Contrast authority:

- reviewed standing rules belong in guidance, policy, SOP, or code
- memory helps orientation and recall
- a required rule must survive a forgotten or unavailable memory

### Slide 18 - Operating packet

Time: 3 minutes

Use one business rule to show separation:

- SOP: the step and stop condition
- PRD: the desired outcome and acceptance criterion
- skill: the repeatable review method

Do not collapse them into a giant prompt. Separation gives each artifact an
owner and a change history.

### Slide 19 - Acceptance scenarios

Time: 3 minutes

Define the labels before discussing the outcomes:

> V means verification. The number is simply a test-case ID, like a requirement
> or UAT scenario number. It lets everyone refer to the same input and expected
> response without retelling the entire case.

Read only the outcome words first:

- PASS
- CLARIFY
- STOP / ESCALATE

Ask the room which outcome demonstrates the most maturity. The intended answer
is not necessarily PASS: a correct stop can be the most valuable result.

## 0:50-0:55 - Demo two: run a bounded case

### Slide 20 - Live Codex run

Time: 5 minutes

Switch to the checked-in completed workspace in Codex and run
[Prompt 05](demo/prompts/05-review-v002.md):

> `$vendor-review` - Review vendor V-002.

Before submitting, point out:

- reviewed workspace context is already present
- the request forbids inference and external action
- the output shape requires facts, rules, owner, and evidence
- expected result is CLARIFY

After the result, compare it with
[acceptance-scenarios.md](demo/workspace/acceptance-scenarios.md).

If it differs:

> We do not rewrite the evidence to make the demo pass. We inspect whether the
> source, context, skill, or expected result is inconsistent.

If the live run fails, open
[verification-report.md](demo/workspace/verification-report.md) and explain the
same evidence chain. You can also run the local deterministic fallback:

```bash
node demo/run-demo.mjs review V-002
```

Say explicitly that the framework organized the questions while approved
Northstar policy determined the outcome.

Use the two on-slide examples if the room needs help generalizing the pattern:

- requirements intake without a decision owner or acceptance criteria should
  clarify
- a policy-exception request without approval authority should stop and route
  to the policy owner

## 0:55-1:02 - Audience scenario canvas

### Slide 21 - Make one workflow AI-ready

Time: 7 minutes

Ask the room for a generic workflow. Remove company names and sensitive detail.
Good candidates:

- intake triage
- recurring report preparation
- contract completeness review
- access-request review
- meeting follow-up preparation

If the room is quiet, start with either on-slide seed: change-request impact
analysis or stakeholder intake prioritization.

Fill one item in each whiteboard column:

| Column | Required question |
|---|---|
| People | Who owns the process and the decision? |
| Process | What is one meaningful exception? |
| Data | What is authoritative, and what happens when it is missing? |
| Guardrails | What may the agent never decide or do? |
| Proof | What example or check would prove a correct outcome? |

Finish with:

> What is the smallest reviewable win, not the largest possible automation?

If interaction runs long, preserve the decision owner, stop condition, and
proof. Drop extra process detail.

## 1:02-1:05 - Core close

### Slide 22 - Five moves for Monday

Time: 2 minutes

Move quickly. Emphasize:

- one owned, low-risk workflow
- one exception currently carried in people's heads
- one pass, one clarify, and one stop case before external connections

### Slide 23 - Resources and call to action

Time: 1 minute

Give the room time to scan the event packet QR.

Point out the three clear paths: follow Brad, visit the websites, or continue
with the two named resources. Every resource URL is written in full for
attendees who prefer not to scan.

Point to the AI-Native Operating Framework as the guiding business resource
behind the demo's completeness questions and maintenance boundary. It remains
technology-independent and does not replace an organization's policies,
lifecycle, or accountable owners. Do not introduce additional named
frameworks.

Close the core with:

> Your first goal is not an autonomous business. It is one painful workflow,
> one visible decision boundary, and one result your team can review.

[Sources]

- AI Dev Days: <https://github.com/BradGroux/ai-dev-days>.
- AI-Native Operating Framework: <https://github.com/BradGroux/ai-native-operating-framework>.

## 1:05-1:28 - Scenario clinic and Q&A

### Slide 24 - Bring a workflow, concern, or boundary

Time: 23 minutes

Start with any parked question. Otherwise ask for a second generic workflow.

Group questions visibly under:

- adoption
- governance
- data
- team workflow
- implementation

For scenario questions, keep returning to:

1. Who owns that decision?
2. What happens when the data is missing or wrong?
3. What would prove the outcome?

Useful thought exercises if questions are light:

### Thought exercise A - The correct refusal

Ask:

> When would CLARIFY or STOP create more business value than a completed draft?

### Thought exercise B - Artifact ownership

Ask:

> Who should approve changes to the SOP, data contract, standing guidance, and
> acceptance scenarios? Is it the same person?

### Thought exercise C - Change control

Ask:

> A policy threshold changes tomorrow. Which artifacts and tests must change
> before the workflow is reliable again?

Timebox individual stories to three minutes. Offer deeper follow-up through the
public packet rather than using real organizational data in the room.

## 1:28-1:30 - Feedback and release

### Slide 25 - HOUBAs feedback and SSTB community

Time: 2 minutes

- Thank the attendees, Terrence, HOUBAs, and Improving.
- Ask attendees to scan the feedback QR before leaving.
- Invite them to join Start Small, Think Big at `sstb.ai` if they want to keep
  practicing with the community.
- Mention the 90% discount code `HOUBAS` and its September 30, 2026 expiration.
- Leave this slide displayed during informal follow-up.

[Sources]

- Start Small, Think Big logo: user-provided `sstb-logo.png`.
- Community destination: <https://sstb.ai>.

## Drop-if-behind rules

If 5 minutes behind:

- show the prepared output for Prompt 01 instead of waiting for generation
- teach only `screening_result` on slide 16

If 10 minutes behind:

- combine slides 17 and 18 into a two-minute authority explanation
- show the deterministic V-002 result rather than running Prompt 05 live

If 15 minutes behind:

- move the whiteboard exercise into the extension
- protect slides 19, 22, and 23
- still finish the core at 65 minutes

Never drop:

- the context-problem thesis
- the BA-as-context-architect role
- memory-is-not-policy boundary
- pass / clarify / stop verification model
- the Monday-morning action
