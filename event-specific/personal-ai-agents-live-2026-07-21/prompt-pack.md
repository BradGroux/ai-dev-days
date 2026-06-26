# Prompt Pack

Use these prompts during the workshop.

## 1. OpenClaw Live Corpus Slice

```text
You are helping prepare a fictional training corpus for a workshop.

Use the E Corp universe from Mr. Robot as public-reference flavor, but create original demo artifacts.
The timeline is post-5/9 recovery and before later large-scale escalation.

Generate a compact live slice:
1. company context,
2. stakeholder brief,
3. short discovery transcript,
4. 8 to 10 emails, memos, or chat excerpts,
5. 3 to 5 structured risk signals.

Focus on a cybersecurity risk, issue, and threat escalation command center.
Use realistic but non-operational security content.
Do not include exploit steps, payloads, credentials, or instructions for causing harm.
```

## 2. OpenClaw Grill With Docs

```text
Use $grill-with-docs.

Read the source corpus:
- demo/source-corpus/company-brief.md
- demo/source-corpus/stakeholder-brief.md
- demo/source-corpus/discovery-transcript.md
- demo/source-corpus/emails.md
- demo/source-corpus/memos.md
- demo/source-corpus/chats.md
- demo/source-corpus/people.yaml
- demo/source-corpus/systems.yaml
- demo/source-corpus/signals.json

Do not draft the PRD yet.
First, grill the product direction one question at a time.
If a question is answered by the corpus, answer it from the corpus instead of asking.

Resolve:
1. primary users,
2. app output,
3. triage workflow,
4. evidence model,
5. executive summary needs,
6. local-only safety boundary,
7. what belongs in the first app build,
8. what should be deferred.

When the plan is clear, generate the PRD.
```

## 3. Codex Issue Artifacts

```text
Read PRD.md and demo/codex-issue-prompt.md.

Generate issue artifacts for a fabricated local repo page.
Do not create live GitHub issues.
Do not use GitHub API.

Return issue drafts with labels, milestone, acceptance criteria, evidence needed, and implementation notes.
```

## 4. Codex Goal Prompt

```text
Read PRD.md, demo/app-output-spec.md, demo/issue-artifacts.md, and demo/implementation-plan.md.

Create a Markdown /goal prompt for building the static E Corp Cyber Escalation Command Center app.

The goal prompt must:
1. start with /goal,
2. include the local-only safety boundary,
3. point to the corpus and issue artifacts,
4. require a static app with no framework,
5. require the Build Trace tab,
6. require verification by opening the app locally.
```

## 5. Codex App Build

```text
Execute demo/goal-prompt.md.

Build the app exactly as specified.
Keep it static and local-only.
Use JSON, YAML, Markdown, HTML, CSS, and JavaScript.
Run the smallest useful verification and report the result.
```

## 6. Codex Presentation Build

```text
Read PRD.md, demo/app-output-spec.md, demo/openclaw-prd-workflow.md, demo/goal-prompt.md, and demo/presentation-prompt.md.

Create the workshop presentation artifacts:
1. slides.html,
2. slides.pdf,
3. speaker-notes-45-minute.md.

Follow prior OpenClaw Dev Days event guidance:
- HTML deck is the edit target,
- PDF export must match the HTML deck,
- dark local/offline-friendly visual style,
- safety boundary slide,
- workflow proof over marketing,
- speaker notes separate from slide text.

Do not include private planning details or local machine paths.
```

## 7. Safety Review

```text
Review the generated app and source artifacts.

Check for:
1. real personal data,
2. credentials or access material,
3. operational cyber instructions,
4. live external actions,
5. unclear fictional/fabricated labeling,
6. missing Build Trace evidence.

Return blockers first, then safe-to-demo notes.
```
