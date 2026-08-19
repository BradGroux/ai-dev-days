# Fictional Vendor-Onboarding Demo

This demo models a business analyst's workbench for a fictional company,
Northstar Field Services. It turns intentionally messy stakeholder notes into
a reviewable process packet and validates three prepared vendor cases.

## Folder map

```text
demo/
├── source/                  # raw evidence and fictional records
├── corpora/                 # two optional BA practice cases
├── prompts/                 # run-ready Codex prompts by demo stage
├── starter/                 # inputs for a clean generated live workspace
├── lib/                     # deterministic vendor-review rules and renderer
├── test/                    # focused behavior tests
├── framework-guidance.md    # event application of the operating framework
├── prepare-live-workspace.mjs
├── run-demo.mjs             # local review and framework-map CLI
├── workspace/               # completed, reviewable fallback packet
│   ├── AGENTS.md            # standing rules Codex loads automatically
│   ├── memory.md            # example recall layer, not policy
│   └── .agents/skills/      # repository-scoped reusable workflow
└── verify-demo.mjs           # integrated packet checks
```

## Run it

Prepare a clean live workspace from the event folder:

```bash
node demo/prepare-live-workspace.mjs
```

Then open `demo/.live-workspace/` in Codex and start with
[`prompts/01-audit-current-state.md`](prompts/01-audit-current-state.md).
The generated workspace excludes the completed fallback artifacts so the live
current-state analysis cannot borrow the answer.

Run the deterministic reviewer and checks:

```bash
node demo/run-demo.mjs framework-map
node demo/run-demo.mjs review V-002
node --test demo/test/vendor-review.test.mjs
node demo/verify-demo.mjs
```

For demo two, open the completed [`workspace/`](workspace/) as the Codex working
folder and use the event [prompt pack](../prompt-pack.md). The local reviewer is
the deterministic proof and offline fallback; the repository-scoped skill is
the live Codex workflow.

## Framework boundary

The [AI-Native Operating Framework](https://github.com/BradGroux/ai-native-operating-framework)
guides which business questions the packet makes explicit. It does not supply
Northstar policy or determine a vendor result. See the pinned, event-specific
[framework guidance](framework-guidance.md).

## Expected outcomes

| Vendor | Expected decision | Reason |
|---|---|---|
| V-001 | PASS | Required data is complete and no review trigger is present. |
| V-002 | CLARIFY | Software and data-access questions require security information that is missing. |
| V-003 | STOP / ESCALATE | A possible sanctions match triggers an immediate stop regardless of the rush request. |

PASS means ready for the next named human review. It never means the fictional
assistant approved or activated a vendor.

## Additional business analyst practice

The optional [practice corpora](corpora/README.md) apply the same
source-to-decision pattern to two other common BA responsibilities:

- [change-request impact analysis](corpora/change-request-impact-analysis/README.md);
  and
- [stakeholder intake and prioritization](corpora/stakeholder-intake-prioritization/README.md).

Each contains raw notes, approved constraints, three structured cases, a
run-ready prompt, and a facilitator key. They extend the attendee follow-through
without changing the live vendor-onboarding demo or the 65-minute core timing.

## Public-safety boundary

Every company, person, email address, system, policy, and vendor record here is
fictional. The `.example` domain is used for sample email addresses. Do not
replace the fixtures with real business data during a projected session.
