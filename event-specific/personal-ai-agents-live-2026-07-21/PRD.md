# PRD: E Corp Cyber Escalation Command Center Workshop

## Problem

Developers and technical leaders often see AI agent demos that skip the hard part:
turning messy stakeholder context into a scoped product, a build plan, and a working app.
Personal AI Agents LIVE needs a reproducible workshop that shows the full chain.

This workshop uses a fictional E Corp cybersecurity escalation scenario to show how OpenClaw and Codex divide the work.
OpenClaw owns the stakeholder discovery, planning, `$grill-with-docs` session, and PRD creation.
Codex owns the issue-artifact prompt, `/goal` prompt, implementation plan, and static app build.

## Source Context

- Personal AI Agents LIVE is a July 21, 2026 live online ODSC AI event about personal AI systems, assistants, agent workflows, context, trust, and work interfaces.
- The confirmed workshop format is a 45-minute hands-on OpenClaw session for a developer and builder audience.
- The working title is "Using Personal AI in 2026: OpenClaw and the New Developer Workflow."
- The public schedule still needs to reflect Brad's exact slot and session details.
- The demo universe is E Corp from Mr. Robot, using canonical people and divisions as fictional training context.
- The canonical reference describes E Corp as a large conglomerate with technology, finance, healthcare, shipping, and consumer divisions.
- The workshop uses post-5/9 recovery pressure as the scenario backdrop, with realistic but non-operational cyber risk content.

Source links:

- Event page: https://summit.ai/#schedule
- E Corp reference: https://mrrobot.fandom.com/wiki/E_Corp
- OpenClaw Dev Days: https://github.com/BradGroux/openclaw-dev-days
- OpenClaw: https://github.com/openclaw/openclaw
- OpenClaw docs: https://docs.openclaw.ai

## Goal

Teach attendees a repeatable OpenClaw-to-Codex workflow by producing a visible local app:

1. generate or load fictional business context, stakeholder brief, transcript, emails, memos, chats, and structured signals
2. use OpenClaw to run a `$grill-with-docs` PRD planning session
3. use OpenClaw to generate the PRD
4. move the PRD to Codex
5. use Codex to generate full-context issue artifacts
6. use Codex to generate a `/goal` prompt in Markdown
7. use Codex to build a local interactive static app from that goal

## Product Output

The final app is the **E Corp Cyber Escalation Command Center**.
It is a static, local-only web app that helps users triage cybersecurity risks, issues, and threats.

The app includes:

- command-center queue
- evidence feed
- executive brief
- fabricated repo/issues page
- optional simulated commits and pull requests
- build trace showing transcript -> grill notes -> PRD -> issue artifacts -> `/goal` prompt -> implementation plan -> app

## Presentation Output

The workshop packet must also produce a presentation set after the PRD and app direction are stable.
Prior OpenClaw Dev Days events use the HTML deck as the edit target and a PDF as the paired delivery artifact.

Presentation deliverables:

- `slides.html`: local, dark, offline-friendly HTML deck
- `slides.pdf`: regenerated PDF export from the HTML deck
- `speaker-notes-45-minute.md`: presenter notes for the live 45-minute workshop
- fallback talk track in `fallback-plan.md`

The deck should not be a generic product pitch.
It should teach the workflow:

1. why messy discovery needs durable context
2. OpenClaw planning and `$grill-with-docs`
3. PRD as the contract
4. Codex issue artifacts
5. `/goal` as implementation start
6. static app output
7. Build Trace as proof

The deck should be concise enough for the live event: 10 to 14 slides, with code and prompt excerpts only where they help attendees recreate the method.

## Non-Goals

- Do not run a full OpenClaw install clinic.
- Do not connect live E Corp, email, chat, GitHub, SIEM, ticketing, or cloud accounts.
- Do not generate operational attack instructions, payloads, exploit steps, or credential patterns.
- Do not create live GitHub issues during the workshop.
- Do not require React, Vite, a database, auth, or a backend for the app output.
- Do not claim OpenClaw or Codex replaces security, legal, or executive judgment.

## Audience Segments

| Segment | Their Question | Best Angle |
|---|---|---|
| Developer | "How do I turn stakeholder context into shipped software?" | Transcript to PRD to issues to `/goal` to app. |
| Technical builder | "Can I recreate this after the session?" | Checked-in prompts, corpus, fallback outputs, and static app spec. |
| Security practitioner | "Can this handle risk context safely?" | Realistic triage categories without operational attack details. |
| Engineering leader | "How does this help teams coordinate?" | Owners, severity, evidence, blockers, decisions, and review gates. |
| Executive/product leader | "What does the app output look like?" | Executive brief and business-impact view over the escalation queue. |

## Messaging Hierarchy

### 30-Second Hook

This is not a prompt trick.
It is a workflow: messy discovery transcript to PRD, PRD to issues, issues to `/goal`, `/goal` to a working local app.

### 2-Minute Overview

OpenClaw is where the product thinking happens.
It brings in the business context, stakeholder brief, and fictional communications, then grills the plan before writing the PRD.
Codex takes the approved PRD and turns it into implementation artifacts and code.
The handoff is visible, reviewable, and documented in the repo.

### Core Thesis

The durable method matters more than the model.
If you can preserve context, force clarification, document decisions, create scoped work, and verify the result, you can rebuild the workflow with future tools.

## Workshop Flow

### 1. Live Corpus Slice

Generate a small live slice in OpenClaw:

- company context
- stakeholder brief
- short discovery transcript
- 8-10 communications
- 3-5 structured risk signals

Timebox: 5 minutes.

### 2. Fallback Full Corpus

If live generation is slow, use the checked-in source corpus.
The full packet contains several dozen fabricated emails, memos, chats, and structured signals.

### 3. OpenClaw `$grill-with-docs`

Use OpenClaw to interrogate the scenario:

- who the users are
- what they need to triage
- what belongs in the command center
- what must stay draft-only or local-only
- what the app must prove by the end

OpenClaw then generates the PRD.

### 4. Codex Issue Artifacts

Move the PRD to Codex.
Codex generates issue artifacts for a fabricated repo page, including labels, milestones, acceptance criteria, evidence, and implementation notes.

### 5. Codex `/goal` Prompt

Codex creates a Markdown `/goal` prompt that starts the build.
The prompt must include the PRD, issue artifacts, app spec, local data files, and acceptance checks.

### 6. Static App Build

Codex builds a local-only static app with HTML, CSS, JavaScript, Markdown, JSON, and YAML.
The app is interactive without a framework.

### 7. Proof And Handoff

Open the app locally.
Use the Build Trace tab to show every artifact in order.
Export the app state as JSON to prove the workflow produced a reviewable result.

## App Requirements

### Screens

1. **Command Center**: risk/threat queue with filters for division, severity, status, owner, and SLA risk.
2. **Evidence Feed**: emails, memos, chats, and signals linked to each escalation.
3. **Executive Brief**: board-ready summary, heatmap, top risks, unresolved decisions, and business impact.
4. **Fabricated Repo**: local issue board with issue details, labels, milestones, and optional simulated commits/PRs.
5. **Build Trace**: artifact chain from source corpus through final app.

### Interactions

- filter by division, severity, status, owner, and evidence type
- assign or change local owner
- update local status
- mark evidence reviewed
- add local notes
- toggle simulated commit/PR view
- export local state as JSON
- reset local state

### Data Model

Use local files only:

- Markdown for briefs, transcript, emails, memos, chats, workflow docs, issue drafts, and prompts
- YAML for people and systems
- JSON for structured risk signals, issue artifacts, app seed data, and export state

## Safety Requirements

- Use fictional or public-reference context only.
- Keep real-world sensitive records, access material, personal contact details, and customer data out of the demo.
- Use credible cyber risk categories without exploit steps, payloads, or attack instructions.
- Do not connect live accounts or services.
- Do not create live GitHub issues, commits, pull requests, messages, tickets, or alerts.
- Mark generated outputs as demo artifacts until reviewed.
- Keep the simulated repo clearly local and fictional.

## Success Metrics

### Quantitative

- Live corpus slice completes in 5 minutes or falls back cleanly.
- OpenClaw produces a PRD from the grilled scenario.
- Codex produces issue artifacts and a `/goal` prompt from the PRD.
- Codex builds the static app locally.
- The app opens without installing a framework.
- The Build Trace tab shows every artifact in order.

### Qualitative

- Attendees understand why planning belongs before code.
- Developers can explain how OpenClaw and Codex divide responsibilities.
- The app feels like a real command center, not a static report.
- Security content is realistic but non-operational.
- The repo lets attendees recreate the workflow later.

## Risks And Mitigations

| Risk | Mitigation |
|---|---|
| Live corpus generation takes too long | Generate only a small slice, then use the full checked-in corpus. |
| Audience fixates on Mr. Robot canon | Keep canon as flavor; keep product decisions grounded in workshop goals. |
| Security content becomes too operational | Use risk and governance language, not attack instructions. |
| Codex build exceeds session time | Use the app-output spec and fallback implementation plan as the teaching artifact. |
| Presentation work drifts into marketing | Keep slides focused on workflow proof, not product hype. |
| Static app feels too small | Include interactive local workflow controls and export state. |
| Simulated repo confuses attendees | Label it clearly as local/fabricated and avoid live GitHub actions. |
| Public schedule mismatch remains | Keep exact slot and public listing as organizer follow-up. |

## Acceptance Criteria

- The event folder includes the PRD, README, prompt pack, required event files, workflow docs, source corpus, issue prompt, `/goal` prompt, implementation plan, and app-output spec.
- The packet documents both live generation and fallback corpus paths.
- The source corpus contains fabricated E Corp context, stakeholder brief, discovery transcript, several dozen communications, people YAML, systems YAML, and risk signals JSON.
- The PRD names OpenClaw as the PRD-planning environment and Codex as the issue/goal/app-build environment.
- The app spec is local-only, static, interactive, and framework-free.
- The implementation issue set includes presentation creation: `slides.html`, `slides.pdf`, and `speaker-notes-45-minute.md`.
- The presentation follows prior event guidance: HTML source first, PDF export second, dark local deck, explicit safety slide, and separate speaker notes.
- The repo audit and publication scan pass or any remaining failures are documented.

## Open Questions

- Confirm final public schedule slot and title.
- Confirm whether the static app should be built before the event packet is published or generated live only.
- Confirm whether slides should be created before the first app build or after the app output exists.
- Confirm whether simulated commits/PRs should be on by default or hidden behind a toggle.
- Confirm whether root README and START-HERE should list this packet after the schedule is public.
