# ADR-001: Framework Companion for Research and Education

- **Status:** superseded by
  [ADR-002](0002-adopt-open-framework-commons-v1.0.0.md) on 2026-08-03;
  retained as historical context
- **Date:** 2026-07-30
- **Owner:** Brad Groux

## Question

What should define AI Dev Days now that the repository has grown beyond an
OpenClaw-specific workshop?

## Context and Evidence

The repository contains reusable curriculum, research, labs, event packets,
sample projects, facilitator guidance, and several tool contexts. OpenClaw
remains its most developed tool track, but the program now addresses broader
AI literacy and business use.

The
[AI-Native Operating Framework 1.0.0](https://github.com/BradGroux/ai-native-operating-framework/releases/tag/v1.0.0)
defines a vendor-neutral business operating framework and method for work
performed by people and AI. Its charter identifies AI Dev Days as a related
research and education initiative and prevents education, examples,
implementation, or commercial work from redefining the framework implicitly.

Public Digital Meld research also supports starting with the people who know
the work, choosing one meaningful workflow, making permissions and authority
explicit, creating reviewable artifacts, and improving from evidence. The
source comparison and limits are recorded in
[`research/digital-meld-operating-research.md`](../research/digital-meld-operating-research.md).

## Alternatives Considered

### Remain OpenClaw Dev Days

This preserves the original identity but misrepresents the broader curriculum
and makes one tool appear to define the program.

### Become a General AI Tool Workshop

This permits many tools but lacks a durable operating foundation and would
encourage feature coverage over accountable learning.

### Become the Framework's Training Repository

This creates a clear relationship but risks allowing educational choices and
event feedback to redefine the framework or imply certification.

### Operate as a Framework Companion

AI Dev Days can research, teach, apply, and learn from the framework while
preserving separate authority, decisions, versions, and contribution paths.

## Recommendation

Rename the program and repository to AI Dev Days and establish it as the public
research and education companion to the AI-Native Operating Framework.

Preserve OpenClaw, Codex, and future technologies as tool-specific tracks.
Adopt the framework's six concerns and standards maintenance method
proportionately for program and event work.

## Decision

The version 1.0.0 release candidate adopts the companion model.

- The framework is canonical for framework meaning.
- AI Dev Days owns educational research, curriculum, events, and tool tracks.
- Research notes have no automatic program authority.
- Event packets have no automatic reusable curriculum authority.
- Program decisions cannot amend the framework.
- Framework proposals discovered through education are submitted through the
  framework repository's contribution process.
- Program-level learning remains vendor-neutral.

## Consequences

- The repository is renamed to `BradGroux/ai-dev-days`.
- Root charter, governance, contribution, decision, research, security,
  citation, and release material are required.
- Event folders use date-first names and retain point-in-time event context.
- Curriculum and event templates must state purpose, ownership, controls,
  evidence, and learning.
- Framework claims link to canonical framework documents.
- Tool instructions need current source and practical verification.
- Version 1.0.0 will identify framework 1.0.0 as its compatibility baseline.

## Dissent and Uncertainty

No material dissent is recorded in the release candidate.

The method has not yet been exercised across a complete new-event lifecycle.
Historical event packets vary in domain, accessibility, and learner-outcome
review. Those limitations must remain visible in the release.

## Affected Artifacts

- `CHARTER.md`
- `GOVERNANCE.md`
- `CONTRIBUTING.md`
- `README.md`
- `docs/`
- `research/`
- `curriculum/`
- `event-specific/`
- repository metadata and release material

## Sources

- [AI-Native Operating Framework 1.0.0](https://github.com/BradGroux/ai-native-operating-framework/releases/tag/v1.0.0)
- [Framework charter](https://github.com/BradGroux/ai-native-operating-framework/blob/v1.0.0/framework/charter.md)
- [Operating framework](https://github.com/BradGroux/ai-native-operating-framework/blob/v1.0.0/framework/operating-framework.md)
- [Standards maintenance method](https://github.com/BradGroux/ai-native-operating-framework/blob/v1.0.0/framework/standards-maintenance-method.md)
- [Digital Meld operating research synthesis](../research/digital-meld-operating-research.md)
