# Release Process

## Purpose

This process keeps repository integration, release approval, tagging, and
GitHub publication distinct.

The founding steward or future delegated release authority must explicitly
approve an official release after reviewing the final candidate and audit.

## Prepare

1. Confirm the intended version, adopted Commons tag and commit, and any
   product-specific teaching compatibility baseline.
2. Update [`CHANGELOG.md`](../CHANGELOG.md).
3. Prepare the release notes under [`docs/releases/`](releases/).
4. Confirm charter, governance, Commons adoption, decisions, research,
   curriculum, events, tool tracks, citation metadata, and migration guidance
   are consistent.
5. Confirm known limitations and unavailable reviews are visible.

## Validate

From a clean checkout of the candidate commit:

```bash
./scripts/validate-release.sh
```

Also inspect:

- GitHub Actions on the candidate pull request and default branch;
- repository name, description, topics, default branch, and redirect behavior;
- generated PDFs, including rendered pages and embedded links;
- the exact candidate commit and diff from the previous release;
- open security, publication, migration, or release-blocking issues; and
- the proposed tag and release notes.

Record any unavailable check and its consequence.

## Approval Gate

Present the final audit, exact candidate commit, release notes, known
limitations, and proposed actions to the release authority.

Do not create the official tag or GitHub release until the authority explicitly
approves it.

## Publish

After approval:

1. confirm the default branch still points to the audited commit;
2. create an annotated `v<version>` tag from that commit;
3. push only the approved tag;
4. create the GitHub release from the approved notes;
5. verify the tag, release URL, assets, source archives, and default-branch
   relationship; and
6. record the release date and final status in citation and release metadata.

## Recover

If the candidate changes after approval, the prior approval is no longer
sufficient. Re-run affected checks and obtain approval for the new commit.

If a published release contains a material safety, rights, or accuracy problem,
follow [`SECURITY.md`](../SECURITY.md), contain the affected material, preserve
the evidence and decision, and publish a corrected version or withdrawal notice
under accountable authority.
