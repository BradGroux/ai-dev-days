# Fictional Vendor-Onboarding Demo

This demo models a business analyst's workbench for a fictional company,
Northstar Field Services. It turns intentionally messy stakeholder notes into
a reviewable process packet and validates three prepared vendor cases.

## Folder map

```text
demo/
├── source/                 # raw evidence and fictional records
├── workspace/              # completed, reviewable operating packet
│   ├── AGENTS.md            # standing rules Codex loads automatically
│   ├── memory.md            # example recall layer, not policy
│   └── .agents/skills/      # repository-scoped reusable workflow
└── verify-demo.mjs          # deterministic fixture checks
```

## Run it

From the event folder:

```bash
node demo/verify-demo.mjs
```

For the live exercise, open [`workspace/`](workspace/) as the Codex working
folder and use the event [prompt pack](../prompt-pack.md).

## Expected outcomes

| Vendor | Expected decision | Reason |
|---|---|---|
| V-001 | PASS | Required data is complete and no review trigger is present. |
| V-002 | CLARIFY | Software and data-access questions require security information that is missing. |
| V-003 | STOP / ESCALATE | A possible sanctions match triggers an immediate stop regardless of the rush request. |

PASS means ready for the next named human review. It never means the fictional
assistant approved or activated a vendor.

## Public-safety boundary

Every company, person, email address, system, policy, and vendor record here is
fictional. The `.example` domain is used for sample email addresses. Do not
replace the fixtures with real business data during a projected session.
