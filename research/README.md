# Research Notes

This folder contains source-grounded research that may inform AI Dev Days
curriculum, events, facilitator guidance, tool tracks, and program decisions.

Research follows the
[AI Dev Days research and education method](../docs/research-and-education-method.md).
It preserves the question, sources, facts, analysis, limitations, and
recommended disposition so contributors do not have to rediscover the same
context.

## Authority

Research notes are evidence and planning records. They are not attendee
instructions, approved curriculum, program decisions, professional advice,
Commons principles, or requirements of another ecosystem product.

Apply this order:

1. [`CHARTER.md`](../CHARTER.md), accepted
   [decisions](../decisions/README.md), and
   [`GOVERNANCE.md`](../GOVERNANCE.md) govern AI Dev Days.
2. The adopted
   [Open Framework Commons v1.0.0](https://github.com/BradGroux/open-framework-commons/releases/tag/v1.0.0)
   governs shared ecosystem principles and boundaries.
3. A selected framework's canonical repository governs representations of its
   own meaning.
4. Approved curriculum, setup guides, and event packets govern current use.
5. Research supplies bounded evidence and proposals.

When a note conflicts with a higher-authority or newer source, mark it
superseded or record the conflict. Do not silently rewrite history.

## Required Note Content

Use [`source-note-template.md`](source-note-template.md). A substantive note
records:

- date, researcher, status, and question;
- primary sources inspected and capture dates;
- freshness and drift risk;
- source facts separated from analysis;
- relevance to Commons, a named ecosystem product, or AI Dev Days;
- what should and should not be reused;
- rights, attribution, consent, and publication limits;
- uncertainty, conflicts, remaining gaps, and required review; and
- an accountable or proposed disposition.

## Source Standard

Prefer the source that owns the claim:

- the adopted Commons release for shared principles and boundaries;
- canonical framework documents for claims about a named framework;
- official documentation and source code for tools;
- original laws, regulations, standards, government publications, or research;
- accountable practitioner records for operating experience; and
- recorded event evidence for what occurred at an AI Dev Days event.

Secondary sources may identify questions or explain context. They should not
replace an available primary source.

Keep direct quotations short. Prefer accurate paraphrase with a nearby link.

## Research Dispositions

A reviewed note receives one of these dispositions:

- **Accepted as evidence:** usable for the stated question and limits.
- **Advance to proposal:** warrants a specific curriculum, program, event, or
  framework contribution.
- **Defer:** a named source, review, event, or decision is missing.
- **Supersede:** a newer or higher-authority note replaces it.
- **Reject:** evidence, rights, relevance, or safety does not support reuse.

Publication or repeated citation is not a disposition.

## Current Source-Backed Notes

- [Digital Meld operating practice and AI Dev Days](digital-meld-operating-research.md)
- [U.S. Department of Labor AI Literacy Framework](dol-ai-literacy-framework.md)

## Tool and Curriculum Research

Historical notes may contain point-in-time product assumptions, transcripts,
discarded paths, or proposed curriculum. Check current official sources and
current approved material before reuse.

- [Curriculum improvement brief](curriculum-improvement-brief.md)
- [GitHub Markdown video ingest](github-markdown-video-ingest.md)
- [OpenClaw beginner guide ingest](metics-ultimate-beginners-guide-openclaw-ingest.md)

## Public Safety and Verification

Use public, licensed, approved, anonymized, or fictional sources. Do not publish
secrets, private paths, client or attendee records, confidential material,
credentials, or sensitive operational details.

Before submitting research:

```bash
./scripts/validate-release.sh
```

If a check cannot run, record the missing check, reason, and consequence.
