# Speaker Notes - 45-Minute Workshop

These notes support [slides.html](slides.html). Keep the live workflow ahead of the slides. Use the deck to frame the method, then show the repo artifacts and app.

## 0:00-3:00 - Slide 1: Title

- Introduce Brad Groux, Digital Meld, and OpenClaw maintainer context.
- Set the promise: this is not a prompt trick. It is a workflow from messy discovery to a working local app.
- Tell the audience the app is fictional and local-only.

## 3:00-6:00 - Slide 2: Why One-Off Prompts Fail

- Explain that the common failure is not model quality. It is missing context, vague planning, and premature implementation.
- Use a concrete line: "If we cannot inspect the assumptions, we cannot safely reuse the output."

## 6:00-9:00 - Slide 3: OpenClaw And Codex Split

- OpenClaw handles discovery, durable context, grill-with-docs, and PRD generation.
- Codex turns the approved PRD into issue artifacts, /goal prompts, implementation, verification, PRs, and merges.
- Emphasize human review at every handoff.

## 9:00-12:00 - Slide 4: E Corp Scenario

- Frame E Corp as fictional training context inspired by Mr. Robot.
- Name the product output: E Corp Cyber Escalation Command Center.
- Stress that the app organizes business risk and evidence. It does not connect to live systems or automate response.

## 12:00-15:00 - Slide 5: Corpus And Safety

- Show the source corpus folder.
- Point out briefs, transcript, emails, memos, chats, people, systems, and signals.
- Safety line: no private records, no credentials, no production accounts, no external sends, no operational cyber instructions.

## 15:00-20:00 - Slide 6: Grill-With-Docs Loop

- Show the OpenClaw workflow prompt or its saved output.
- Explain the four questions: users, scope, safety, proof.
- If live generation is slow, switch to the checked-in corpus and say so plainly.

## 20:00-24:00 - Slide 7: PRD Contract

- Open `PRD.md`.
- Point to Product Output, Presentation Output, App Requirements, Safety Requirements, and Acceptance Criteria.
- Explain that the PRD is the contract for later implementation, not a ceremonial document.

## 24:00-28:00 - Slide 8: Issue Artifacts

- Show the issue artifacts and live GitHub issue set.
- Explain dependencies: data first, shell second, workflow views next, presentation after app direction is stable, final smoke checks last.
- Keep the message practical: good issues make the build reviewable.

## 28:00-31:00 - Slide 9: /goal Starts Implementation

- Open the saved /goal prompt.
- Explain that /goal carries source files, acceptance checks, safety boundaries, and allowed actions into the durable work loop.
- Do not spend time on model theory.

## 31:00-37:00 - Slide 10: App Output

- Open the local app.
- Demo path: filter critical escalations, change owner/status, mark evidence reviewed, export JSON, reset local state.
- State clearly that the fabricated repo view and Build Trace are local teaching artifacts.

## 37:00-40:00 - Slide 11: Build Trace Proof

- Show the Build Trace tab.
- Walk the chain: corpus, grill loop, PRD, issues, /goal, implementation plan, app, export.
- Close the proof point: the artifact trail is what makes the workflow teachable and reusable.

## 40:00-43:00 - Slide 12: Recreate It

- Point attendees to the packet README, prompt pack, source corpus, fallback plan, and app spec.
- If someone wants to adapt the workflow, tell them to replace the corpus and keep the same review gates.

## 43:00-45:00 - Slide 13: Links And Close

- Point to OpenClaw, docs, and the OpenClaw Dev Days repo.
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
