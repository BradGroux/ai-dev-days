# Speaker Notes - Flexible 30-Minute Rubber Duck Thursday Deck

These notes support [slides.html](slides.html). The deck is designed for conversation with Andrea Griffiths, so treat the times as anchors rather than a script.

## 0:00-1:30 - Slide 1: AI That Runs the Business

- Open with the real opportunity: the work most companies run on is not software development. It is scheduling, invoice review, follow-up, field coordination, quality review, and exception handling.
- Promise a practical operating pattern, not a list of autonomous-agent claims.
- Say every use case in the packet is fictional and draft-only.

## 1:30-3:00 - Slide 2: Where AI Gets Useful

- Introduce Brad Groux as CEO of Digital Meld and a Microsoft integrations maintainer on OpenClaw.
- Acknowledge Andrea Griffiths and the GitHub builder audience.
- Set up the central question: what has to exist around the model before a business will trust the output?
- Use the [Power Apps build](https://x.com/BradGroux/status/2069419399648288928) as proof: OpenClaw supplied the context layer, Codex supplied the delivery layer, and accumulated workflow context mattered more than a single prompt.

## 3:00-5:00 - Slide 3: It Is Still a People Problem

- The model can summarize a process document. It cannot know whether the document reflects reality.
- A model can draft a dashboard. It cannot repair two years of distrust in the underlying numbers.
- The three adoption constraints are trust, the real workflow, and clear ownership.
- Line to use: "If the system is being done to people instead of built with them, they will work around it. Usually in Excel."

## 5:00-7:30 - Slide 4: The Implementation Signal

- Brad's article uses Microsoft's Frontier Company announcement as the clearest signal that model access is not the product.
- Microsoft committed a reported $2.5 billion and 6,000 people to embedded AI implementation work.
- The broader market includes OpenAI, Anthropic, Amazon, platform vendors, and consulting firms moving toward forward-deployed and implementation-heavy work.
- Do not frame this as a criticism. Frame it as an honest acknowledgment that industry context, change management, protected workflows, and continuous improvement are required.
- Source: [Brad's AI adoption article](https://x.com/BradGroux/status/2074144220068114778)
- Supporting source: [Microsoft Frontier Company](https://blogs.microsoft.com/blog/2026/07/02/microsoft-frontier-company-ai-engineering-that-amplifies-and-protects-your-intelligence/)

## 7:30-9:30 - Slide 5: Build the Harness

- The Kaggle whitepaper point Brad translated into his workflow is that the model is only one part of the agent system.
- The harness includes instructions, tools, guardrails, memory, evaluation, and observability.
- Walk the five fields:
  - Mode: how much rigor and risk is appropriate?
  - Context: what workflow and sources matter?
  - Boundary: use least privilege per task. What may it read, write, send, or reach?
  - Verification: what owns correctness?
  - Handoff: what does the reviewer need?
- Source: [Build the harness](https://x.com/BradGroux/status/2070510393126952992)
- Supporting source: [Decide what Codex can access](https://x.com/BradGroux/status/2072313657883586873)
- Line to use: "The agent should not be the trust boundary. The runtime should."
- Supporting source: [KARS makes agents look like real infrastructure](https://x.com/BradGroux/status/2074872310465474927)

## 9:30-11:30 - Slide 6: Center of Excellence

- A center of excellence should shorten the distance between the people who understand the work and the people who build the system.
- It is not a steering committee that meets once a quarter. It is a durable communication loop.
- Name the required perspectives: sponsor, workflow owner, domain expert, data/IT/security, builder, and change champion.
- The CoE owns vocabulary, sources of truth, reusable standards, risk decisions, and feedback routing.

## 11:30-13:30 - Slide 7: Markdown

- Markdown is a plain-text shared surface for humans and agents.
- Explain only the basics shown on the slide: headings, lists, checkboxes, links, and code blocks.
- The power is not the syntax. It is that the artifact is easy to search, diff, review, cite, reuse, and keep in a repo.
- Repeated workflows need small operational memory: what was tried, chosen, skipped, and still needs proof.
- Source: [Treat repeated work like a product](https://x.com/BradGroux/status/2069785811017437672)

## 13:30-15:30 - Slide 8: SOPs

- Use Brad's rule: if you repeat an instruction more than twice, write it down.
- A skill is often just a well-structured SOP with the right tools and boundaries.
- The most important sections are stop conditions and verification. Steps alone create confident automation without a safety model.
- Repo history makes process changes reviewable and reversible.
- Source: [Put SOPs where the history lives](https://x.com/BradGroux/status/2071586981381832714)

## 15:30-17:30 - Slide 9: PRD Everything

- A PRD is not ceremony. It is the decision contract for the agent and the team.
- `$grill-with-docs` keeps asking questions until the users, owner, source of truth, boundaries, proof, and support path are explicit.
- Emphasize that the grill comes before implementation.
- Point to the public [grill-with-docs prompt](https://github.com/BradGroux/openclaw-dev-days/blob/master/event-specific/personal-ai-agents-live-2026-07-21/prompt-pack.md#2-openclaw-grill-with-docs) if Andrea asks how to reuse the pattern.

## 17:30-19:30 - Slide 10: Feedback Loops

- The COMPILOT paper's transferable lesson is not the compiler speedup. It is the division of labor.
- The model proposes a bounded action. A deterministic tool checks legality or correctness. The result becomes feedback for the next attempt.
- In a business workflow, deterministic checks can be arithmetic, required-field checks, duplicate detection, policy rules, schema validation, or source reconciliation.
- Stop when the loop is not producing new signal or authority is missing.
- Source: [Bounded feedback loops](https://x.com/BradGroux/status/2070134268051763381)

## 19:30-22:30 - Slide 11: Accounts Payable

- Switch to [demo/index.html](demo/index.html) if time allows.
- Show the Accounts Payable source packet and run the draft.
- Explain the three-way-match pattern: invoice, PO, and receipt.
- Highlight the clean invoice, quantity mismatch, and likely duplicate.
- The agent drafts questions. It never reads bank details, approves an invoice, or releases payment.
- Call out the visible safety boundary: fictional data, draft only, and no external actions.

## 22:30-24:00 - Slide 12: Marketing

- Marketing agents should be source-backed production systems, not content slot machines.
- The demo builds a brief, email, social post, page outline, and claim ledger.
- The key behavior is removal of an unsupported performance percentage.
- Marketing and legal still own publication.

## 24:00-26:00 - Slide 13: Field and Lab Operations

- Field Operations: safety, permit, skill, equipment, and access constraints outrank scheduling speed.
- Lab Management: method, QC, duplicate, calculation, and custody evidence must be complete before release.
- The shared pattern is that the agent makes constraints visible before work moves.
- Dispatchers, safety owners, qualified analysts, and lab managers retain authority.

## 26:00-28:00 - Slide 14: Supply Chain Logistics

- The agent runs an exception desk, not the supply chain.
- It ranks the temperature excursion and job-critical delay while suppressing the clean shipment.
- It drafts the next question and bounded options without contacting the carrier or changing a booking.
- Use the closing pattern: source packet, SOP, PRD, draft, verifier, human approval, feedback.

## 28:00-30:00 - Slide 15: Call to Action

- Ask the audience to pick one workflow that hurts enough to fix.
- Find the people who live with it and map the real version.
- Baseline cycle time, touch time, exception volume, and rework before the pilot so improvement is measurable.
- Create the smallest artifact chain: source notes, SOP, PRD, draft, verifier, approval.
- Start with a draft-only workflow. Earn the right to automate more through proof and feedback.
- Point to the OpenClaw Dev Days repository and the SSTB.ai Discord QR code.

## Conversation Prompts for Andrea

- Where does GitHub see the biggest gap between agent demos and sustained team workflows?
- What makes a repo a good shared surface for business and technical context?
- Which review patterns from software development transfer well to business-agent work?
- What should a team refuse to automate first?

## Fallback Lines

If the demo is slow:

> The prepared output is part of the point. A durable workflow should not depend on one perfect live generation.

If the conversation runs long:

> The five use cases all reduce to the same operating system: source context, a standard, a contract, a verifier, and a human owner.

If asked about autonomy:

> I start with agent-assisted decisions, not agent-owned decisions. Autonomy should be earned one verified boundary at a time.
