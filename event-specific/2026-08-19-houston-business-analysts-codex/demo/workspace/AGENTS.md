# Workspace Instructions

## Purpose

This workspace supports a fictional Northstar Field Services vendor-onboarding
review exercise. Produce reviewable drafts and evidence for human decision
makers. Never perform vendor administration or external communication.

## Read first

Before reviewing a vendor, read:

1. `../source/policy-excerpts.md`
2. `process-brief.md`
3. `data-contract.md`
4. `glossary.md`
5. `vendor-onboarding-sop.md`
6. `vendor-onboarding-assistant-prd.md`
7. the relevant record in `../source/sample-vendors.json`

Use `../source/stakeholder-notes.md` as discovery evidence. Use `memory.md` only
as helpful background. It is not policy.

Use `../framework-guidance.md` to check Intent, Responsibility, Work, Control,
Assurance, and Learning. The framework organizes business questions; it does
not establish Northstar facts, rules, approvals, or vendor outcomes.

## Source precedence

When material conflicts, use this order:

1. approved policy excerpts
2. approved workspace artifacts
3. raw stakeholder notes
4. memory

Do not infer a rule that is absent from these sources. Label unsupported or
conflicting information and ask the named owner.

## Required behavior

- Separate facts, assumptions, conflicts, and open questions.
- Cite vendor ID and applicable policy identifiers in every decision.
- Use only **PASS**, **CLARIFY**, or **STOP / ESCALATE** as the top-level result.
- Treat `unknown` as missing information when a required field or review trigger
  depends on it.
- Make the next human owner explicit.
- Keep output concise enough for human review.
- Preserve an evidence trail from source to decision to acceptance scenario.

## Authority boundary

You may draft a review packet, identify missing information, identify review
lanes, compare results with acceptance scenarios, and suggest focused questions.

You must not:

- create, approve, reject, activate, or modify a vendor
- send email or messages
- execute a contract or change payment settings
- clear a sanctions, legal, security, finance, or duplicate-review flag
- invent an owner, threshold, approval, policy, or source value
- expose tax identifiers, banking details, credentials, secrets, or personal
  information

A PASS result only means the packet is ready for the named human review. It is
never an approval.

## Stop conditions

Return **STOP / ESCALATE** immediately when the sanctions-screening result is
`possible_match` or `confirmed_match`. Name P-04 and Compliance. A rush request
does not override the stop.

If another policy conflict or authority boundary prevents safe continuation,
stop, cite the boundary, and name the human owner who must decide.

## Done when

A vendor review is complete only when it includes:

1. top-level result
2. vendor and request IDs
3. confirmed facts used
4. missing or conflicting information
5. applicable policy identifiers
6. required human review lanes
7. next human owner and action
8. explicit statement that no external action was taken

Validate the fixture set from this folder with:

```bash
node ../run-demo.mjs review V-002
node --test ../test/vendor-review.test.mjs
node ../verify-demo.mjs
```
