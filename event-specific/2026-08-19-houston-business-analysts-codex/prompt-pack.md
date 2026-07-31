# Prompt Pack

These prompts support the live demonstration and the attendee workbook. Run
them from [`demo/workspace/`](demo/workspace/) so Codex loads the local
`AGENTS.md` and discovers the repository skill.

The source corpus is fictional. The prompts intentionally ask for drafts and
review evidence, never an approval or external action.

## Prompt 1: audit the raw notes

```text
Goal:
Turn the vendor-onboarding source material in ../source into a current-state
analysis without inventing missing rules.

Context:
Read AGENTS.md and every file in ../source. Identify the trigger, actors,
inputs, outputs, systems, handoffs, decision points, exceptions, and data.

Constraints:
Separate confirmed facts, assumptions, conflicts, and open questions. Cite the
source file and section for every confirmed rule. Do not resolve ambiguity with
your own judgment.

Done when:
Return a concise current-state outline and the seven highest-value elicitation
questions, ranked by execution risk.
```

## Prompt 2: challenge the operating packet

```text
Review process-brief.md, data-contract.md, glossary.md, and
vendor-onboarding-sop.md against ../source.

Find:
1. unsupported statements,
2. missing owners,
3. undefined terms,
4. exception paths without an outcome,
5. data fields without a source or validation rule, and
6. steps that exceed the draft-only boundary in AGENTS.md.

Return findings in priority order with exact file references. Do not edit the
files yet.
```

## Prompt 3: trace requirements into verification

```text
Build a traceability table connecting each in-scope requirement in
vendor-onboarding-assistant-prd.md to:
- the SOP step or decision rule that implements it,
- the data fields it depends on,
- the acceptance scenario that tests it, and
- the evidence that proves the result.

Flag any requirement with no test and any test with no requirement.
```

## Prompt 4: run the reusable review skill

```text
$vendor-review

Review vendor V-002 from ../source/sample-vendors.json. Apply the checked-in
policy and SOP. Return PASS, CLARIFY, or STOP / ESCALATE, followed by the facts,
missing information, applicable rules, next human owner, and evidence trail.
Do not change files or take external action.
```

## Prompt 5: verify all prepared cases

```text
Use the vendor-review skill to assess V-001, V-002, and V-003. Compare each
result with acceptance-scenarios.md and verification-report.md.

If your result differs from the expected outcome, stop and explain whether the
source, workspace artifact, skill, or expected result is inconsistent. Do not
rewrite the evidence to make the test pass.
```

## Prompt 6: adapt the pattern to an audience workflow

```text
Goal:
Prepare an AI-readiness canvas for this generic workflow: [WORKFLOW].

Known context:
[PASTE ONLY PUBLIC-SAFE OR FICTIONAL DETAILS.]

Produce:
- confirmed facts, assumptions, and open questions,
- people, process, data, guardrails, and proof,
- the smallest useful SOP and PRD outline,
- one pass, one clarify, and one stop scenario, and
- the three decisions a human owner must make before implementation.

Do not assume missing business rules or recommend connecting external systems.
```

## Prompt review checklist

Before running a prompt, confirm it contains:

- a concrete goal
- the files or facts that provide context
- constraints and non-goals
- a definition of done
- explicit authority boundaries
- a verification request
- no secrets, private records, or sensitive attendee details
