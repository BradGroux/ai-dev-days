# Stakeholder Intake and Prioritization Corpus

- Organization: Cedar Grove Community Services (fictional)
- Workflow: quarterly internal improvement-request intake
- Primary learner: business analyst, portfolio analyst, or product owner
- Exercise outcome: an evidence-backed prioritization packet, not a funding
  decision

## Scenario

Cedar Grove Community Services has more internal requests than its delivery
team can accept next quarter. Three requests test evidence quality, mandatory
work, capacity, conflicts of interest, and escalation boundaries.

## Authority order

1. [`source/prioritization-policy.md`](source/prioritization-policy.md)
2. The selected record in
   [`source/intake-requests.json`](source/intake-requests.json)
3. [`source/stakeholder-notes.md`](source/stakeholder-notes.md) as discovery
   evidence, not approved policy
4. The AI-Native Operating Framework as an optional question set, not
   organizational policy

Missing evidence stays missing. An executive title, urgency label, or proposed
score does not override the approved policy or the Portfolio Council.

## Run the exercise

Use [`prompt.md`](prompt.md) with the three files under `source/`. Analyze one
request first, then produce a portfolio view across all three. Do not open
[`facilitator-key.md`](facilitator-key.md) until the analysis is complete.

## Expected artifact

Produce:

- an eligibility and completeness check;
- a traceable score using only supported inputs;
- capacity and dependency impacts;
- conflicts, assumptions, open questions, and named decision owners;
- one normal, one exception, and one prohibited scenario; and
- exactly one result per request: **READY FOR PRIORITIZATION**, **CLARIFY**, or
  **ESCALATE**.

The result informs the Portfolio Council. It does not commit funding, sequence
delivery, displace mandatory work, or notify stakeholders.
