# Speaker Notes - 45-Minute Workshop

These notes support [slides.html](slides.html). Keep the live workflow ahead of the slides. Use the deck to frame the method, then show the repo artifacts and app.

## 0:00-2:00 - Slide 1: Title

- Set the promise: this is not a prompt trick. It is a workflow from messy discovery to a working app.
- Tell the audience the app is fictional and every external action remains manual.

## 2:00-4:00 - Slide 2: About Brad

- Introduce Brad Groux as CEO of Digital Meld and an OpenClaw maintainer/contributor.
- Point out the follow-up links and say the deck and repo are meant to be reused.

## 4:00-7:00 - Slide 3: Why One-Off Prompts Fail

- Explain that the common failure is not model quality. It is missing context, vague planning, and premature implementation.
- Use a concrete line: "If we cannot inspect the assumptions, we cannot safely reuse the output."

## 7:00-10:00 - Slide 4: OpenClaw And Codex Split

- OpenClaw handles discovery, durable context, grill-with-docs, and PRD generation.
- Codex turns the approved PRD into issue artifacts, /goal prompts, implementation, verification, PRs, and merges.
- Emphasize human review at every handoff.

## 10:00-13:00 - Slide 5: E Corp Scenario

- Frame E Corp as a Mr. Robot-inspired agentic delivery experience: planning, PRD, issues, /goal, implementation, and app delivery.
- Name the product output: E Corp Cyber Escalation Command Center.
- Stress that the app organizes business risk and evidence. It does not connect to live systems or automate response.

## 13:00-16:00 - Slide 6: Corpus And Safety

- Define source corpus as the context packet OpenClaw reads before it asks questions or drafts the PRD.
- Point out briefs, stakeholder notes, escalation themes, evidence snippets, ownership gaps, and boundaries.
- Safety line: draft-only outputs, human review, no private records, no production accounts, no external sends, no operational cyber instructions.

## 16:00-20:00 - Slide 7: Grill-With-Docs Loop

- Show the OpenClaw workflow prompt or its saved output.
- Explain the four questions: users, scope, safety, proof.
- If live generation is slow, switch to the checked-in corpus and say so plainly.

## 20:00-23:00 - Slide 8: PRD Contract

- Open `PRD.md`.
- Point to Product Output, Presentation Output, App Requirements, Safety Requirements, and Acceptance Criteria.
- Explain that the PRD is the contract for later implementation, not a ceremonial document.

## 23:00-26:00 - Slide 9: Issue Artifacts

- Show `demo/issue-artifacts.md` and the app's Fabricated Repo view. If the historical implementation issues are useful, show them read-only and make clear that the workshop does not create or modify live GitHub issues.
- Explain dependencies: escalation data first, command workflow second, local proof and Build Trace last.
- Keep the message practical: good issues make the build reviewable.

## 26:00-29:00 - Slide 10: /goal Starts Implementation

- Open the saved /goal prompt.
- Explain that /goal carries source files, acceptance checks, source corpus context, safety boundaries, and allowed actions into the durable work loop.
- Do not spend time on model theory.

## 29:00-35:00 - Slide 11: App Output

- Open the local app.
- Demo path: filter critical escalations, change owner/status, mark evidence reviewed, export JSON, reset local state.
- State clearly that the repo backlog view and Build Trace are local teaching artifacts.

## 35:00-38:00 - Slide 12: Build Trace Proof

- Show the Build Trace tab.
- Walk the chain: corpus, grill loop, PRD, issues, /goal, implementation plan, app, export.
- Close the proof point: every jump in the chain has a checked-in artifact, a human review point, and a verification step.

## 38:00-40:00 - Slide 13: Recreate It

- Point attendees to the packet README, prompt pack, source corpus, fallback plan, and app spec.
- If someone wants to adapt the workflow, tell them to replace the corpus and keep the same review gates.

## 40:00-43:00 - Slide 14: Call To Action

- Ask attendees to pick one messy workflow and turn it into an artifact chain.
- Use the three verbs: fork the packet, run the grill, ship one artifact.
- Stress that they should not start by automating external actions.

## 43:00-45:00 - Slide 15: Links

- Point to OpenClaw, docs, the OpenClaw Dev Days repo, www.bradgroux.com, and the SSTB.ai Discord.
- Hard stop line: do not automate external actions until context, boundary, review path, and rollback are clear.
- Leave time for one direct question or follow-up.

## Fallback Narration

If live generation is slow:

- "This is why the repo includes a full fallback corpus. The workflow does not depend on a perfect live run."
- Open the checked-in corpus and continue from the PRD.

If the app build is slow:

- "The implementation plan and issue set are still useful artifacts. The finished local app shows the target output."
- Open the completed app and use Build Trace to show the chain.

If connectivity is unreliable:

- Use `slides.html`, `PRD.md`, `demo/issue-artifacts.md`, `demo/goal-prompt.md`, and the local app from disk.
