# ADR-003: Refresh the Open Framework Commons v1.0.0 Commit Pin

- **Status:** accepted
- **Date:** 2026-08-03
- **Owner:** Brad Groux

## Question

Which exact Open Framework Commons commit should AI Dev Days adopt after the
Commons owner republished the existing `v1.0.0` tag while retaining that
version number?

## Context and Evidence

ADR-002 originally adopted Commons v1.0.0 at
`27870fb1d57d951b9ef5a3a86f33ef068ee557da`.

On 2026-08-03, the live Commons `v1.0.0` tag was verified as an annotated tag
that peels to `a0f0d384e9010a65d1a21a324b4c912433d5e031`. Commons `main` resolved to
the same commit.

The change from the original commit updates Commons documentation only. It:

- strengthens the shared-versus-product-local boundary and adoption flow;
- records Relationship Operating Framework as active;
- adds three visual guides and their review record; and
- links the four products' separate adoption records.

No Commons shared principle was removed, and the revised boundary continues to
state that AI Dev Days is an independent learning community that owns its own
charter, program, and decisions. AI Dev Days' existing program map and local
ownership statements remain consistent with that guidance.

The Commons visualization review still names the original commit because it
records the state reviewed before the later release decision. It is historical
review evidence, not the current tag target.

## Alternatives Considered

### Keep the original commit pin

This would preserve the original immutable reference, but AI Dev Days would no
longer identify the commit currently published as Commons v1.0.0. That would be
an explicit local deviation from the release named in public navigation.

### Wait for a new Commons version

No new Commons version was published. The Commons owner explicitly designated
the replacement commit as v1.0.0 and directed AI Dev Days to keep version
1.0.0.

### Refresh the exact pin and preserve the transition record

This keeps the named Commons release and exact commit aligned while retaining
the original commit in the decision and release history.

## Recommendation

Refresh the exact Commons v1.0.0 commit pin, preserve the original commit as
explicit history, retain AI Dev Days version 1.0.0, and refresh the existing AI
Dev Days release only after the reviewed documentation update is merged and the
merged tree is verified.

## Decision

AI Dev Days retains version 1.0.0 and adopts Open Framework Commons v1.0.0 at
[`a0f0d384e9010a65d1a21a324b4c912433d5e031`](https://github.com/BradGroux/open-framework-commons/commit/a0f0d384e9010a65d1a21a324b4c912433d5e031).

Current charter, governance, method, navigation, and release records must use
the replacement commit. Historical records may retain
`27870fb1d57d951b9ef5a3a86f33ef068ee557da` when they identify it explicitly as
the original pin.

The Commons documentation changes do not alter AI Dev Days' independent
purpose, authority, research and education method, curriculum, events,
community practices, examples, roadmap, or releases.

Because the corrected pin changes the version 1.0.0 documentation tree, the AI
Dev Days `v1.0.0` tag and GitHub release are refreshed after the reviewed merge
instead of creating a new version.

## Consequences

- Public entry points resolve the Commons version and commit consistently.
- The original and replacement Commons commits remain visible in public
  history.
- No Commons prose, software, schema, runtime, conformance mechanism, or
  repository structure is copied into AI Dev Days.
- No curriculum, event, community, or tool-track material changes.

## Dissent and Uncertainty

Republishing a tag weakens immutable-reference expectations for anyone who
already fetched it. Consumers with the original tag may need to force-refresh
their tag reference. Exact commit pins and this transition record preserve the
two states, but AI Dev Days cannot repair upstream tag history.

No substantive deviation from the replacement Commons v1.0.0 principles or
boundaries is recorded.

## Affected Artifacts

- `README.md`
- `CHARTER.md`
- `GOVERNANCE.md`
- `CHANGELOG.md`
- `docs/releases/v1.0.0.md`
- `docs/research-and-education-method.md`
- `decisions/README.md`
- `decisions/0002-adopt-open-framework-commons-v1.0.0.md`
- `scripts/audit-repo.mjs`

## Sources

- [Open Framework Commons repository](https://github.com/BradGroux/open-framework-commons)
- [Open Framework Commons v1.0.0](https://github.com/BradGroux/open-framework-commons/releases/tag/v1.0.0)
- [Replacement Commons commit](https://github.com/BradGroux/open-framework-commons/commit/a0f0d384e9010a65d1a21a324b4c912433d5e031)
- [Original Commons commit](https://github.com/BradGroux/open-framework-commons/commit/27870fb1d57d951b9ef5a3a86f33ef068ee557da)
- [Replacement Commons shared boundaries](https://github.com/BradGroux/open-framework-commons/blob/a0f0d384e9010a65d1a21a324b4c912433d5e031/BOUNDARIES.md)
- [Replacement Commons governance](https://github.com/BradGroux/open-framework-commons/blob/a0f0d384e9010a65d1a21a324b4c912433d5e031/GOVERNANCE.md)
