# ADR-002: Adopt Open Framework Commons v1.0.0 and Preserve Product Independence

- **Status:** accepted; exact commit pin refreshed by ADR-003
- **Date:** 2026-08-03
- **Owner:** Brad Groux

> This record preserves the original adoption decision at
> `27870fb1d57d951b9ef5a3a86f33ef068ee557da`. The current Commons v1.0.0 pin
> is `a0f0d384e9010a65d1a21a324b4c912433d5e031`; see
> [ADR-003](0003-refresh-open-framework-commons-v1.0.0-pin.md).

## Question

How should AI Dev Days participate in the Open Framework Ecosystem without
becoming another operating framework or inheriting another product's method,
structure, governance, or release process?

## Context and Evidence

AI Dev Days already has its own learning-community purpose, curriculum, event
operations, research and education method, examples, publication controls,
governance, and prepared release process.

Open Framework Commons v1.0.0 defines shared principles and boundaries for the
ecosystem while stating that AI Dev Days is an independent learning community.
Its annotated `v1.0.0` tag resolves to release commit
`27870fb1d57d951b9ef5a3a86f33ef068ee557da`.

ADR-001 described AI Dev Days as the companion to, and operationally grounded
in, the AI-Native Operating Framework. That hierarchy conflicts with the
Commons product-independence boundary.

## Alternatives Considered

### Keep the framework-companion hierarchy

This preserves existing wording but makes another product appear to govern AI
Dev Days and risks treating that product's method as inherited program policy.

### Copy Commons principles into AI Dev Days

This would create duplicated shared prose that could drift from the adopted
Commons release.

### Adopt Commons by reference and keep AI Dev Days product-local

This provides a stable shared foundation while preserving AI Dev Days'
independent purpose, authority, content, and evolution.

## Decision

AI Dev Days adopts
[Open Framework Commons v1.0.0](https://github.com/BradGroux/open-framework-commons/releases/tag/v1.0.0)
at release commit
[`27870fb1d57d951b9ef5a3a86f33ef068ee557da`](https://github.com/BradGroux/open-framework-commons/commit/27870fb1d57d951b9ef5a3a86f33ef068ee557da).

- Commons shared principles and boundaries are adopted by reference.
- AI Dev Days remains an independent learning community and event repository.
- AI Dev Days owns its curriculum, events, community practices, examples,
  research, governance, roadmap, and releases.
- AI Dev Days may teach or explore another ecosystem product without becoming
  its training module or inheriting its method.
- No Commons software, schema, runtime, conformance, CI, validator, or shared
  repository structure is introduced.
- ADR-001 is superseded.

## Consequences

Public entry points pin the adopted Commons repository, tag, and commit.
Product-local documents retain their distinct reader jobs. Existing
AI-Native Operating Framework material remains available as a teaching guide
for events or lessons that explicitly select it.

The existing charter, governance, Code of Conduct, security policy, and license
remain AI Dev Days-owned. No duplicate foundation document is added.

## Dissent and Uncertainty

No deviation from the Commons v1.0.0 shared principles is recorded.

The founding steward authorized publishing AI Dev Days `v1.0.0` on 2026-08-03
after the migration is merged and the merged tree is verified. The tag must be
new and immutable; no published tag may be moved.

ADR-003 records the later owner-approved exception that retained version 1.0.0
after Commons republished its own tag and required the exact adoption pin to be
refreshed.

## Affected Artifacts

- `README.md`
- `START-HERE.md`
- `CHARTER.md`
- `GOVERNANCE.md`
- `CONTRIBUTING.md`
- `CHANGELOG.md`
- product-local curriculum, event, research, and release entry points that
  described another product as AI Dev Days' operating foundation

## Sources

- [Open Framework Commons repository](https://github.com/BradGroux/open-framework-commons)
- [Open Framework Commons v1.0.0](https://github.com/BradGroux/open-framework-commons/releases/tag/v1.0.0)
- [Open Framework Commons v1.0.0 boundaries](https://github.com/BradGroux/open-framework-commons/blob/v1.0.0/BOUNDARIES.md)
- [Open Framework Commons v1.0.0 governance](https://github.com/BradGroux/open-framework-commons/blob/v1.0.0/GOVERNANCE.md)
