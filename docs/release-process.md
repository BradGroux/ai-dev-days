# Release process

Program content, integration and publication are separate decisions. The
founding steward or delegated release authority authorizes publication. An
explicit task may authorize the complete audit/remediation/release sequence
conditional on review and passing gates; a new permission prompt is unnecessary
within that scope. Without that authority, present the exact reviewed candidate,
notes and limits for approval before tagging. A green check grants no authority.

## Clean validation setup

From the repository root, use Git, Bash, Node 24, npm, Ruby and Gitleaks 8.30.1.
Install those host tools explicitly if missing. CI pins its scanner archive
checksum and action revisions. No new runtime dependencies are required.

```sh
npm ci --prefix projects/beaver-badges/app
(cd projects/beaver-badges/app && npx playwright install chromium)
./scripts/validate-release.sh
```

The gate does not install packages implicitly. Linux may need Playwright's
system dependencies (`npx playwright install --with-deps chromium`). Review
package/action/scanner updates and rerun the same gates; preserve the lockfile.
Stage intended new public files before validation: the link and publication
inventory is Git-tracked content, not ignored or unrelated local files.

The gate checks edition/citation metadata, local links, event inventory,
publication policy and redacted secrets, external availability, vendor adverse
cases, deck/PDF parity, storage failure regressions, YAML, npm audit, typecheck,
build and browser smoke. Scanner errors fail. External timeouts/rate limits are
reported gaps, not proof of source correctness. The local link parser covers
inline Markdown and HTML targets; it does not fully validate Markdown reference
links or heading fragments. Review changed links and claims directly.

Before publishing, also scan history with redacted output:

```sh
gitleaks git . --log-opts="--all" --no-banner --redact --log-level error
```

## Content and edition preparation

1. Read the previous release, live issues/PR discussions, canonical guidance,
   and exact adopted/selected product revisions. Verify source currency for
   changed claims and tool guidance; do not overwrite event history.
2. Walk normal, exception, adverse and offline learner paths. Inspect changed
   visual meaning/layout and runnable surfaces. Record field, practitioner,
   accessibility, rights and unavailable-service limits honestly.
3. Select the actual UTC publication date (`date -u +%Y.%m.%d`). Further releases
   that day append `.1`, `.2`, etc. Never overwrite a tag, retitle historical
   identities or create dated aliases. If publication crosses UTC midnight,
   update the candidate metadata and repeat affected checks before tagging.
4. Update VERSION, charter/governance/contribution/method status, citation,
   changelog, release notes/navigation, migration, adoption and decision records.
   Quote the CFF edition; date-released uses YYYY-MM-DD. Independent package,
   schema, lockfile and teaching baseline identities are not calendar editions.
5. Describe changed reader choices separately from the date. Record exact
   Commons provenance, local authority, rationale, deviations or deferrals.
6. Resolve issue acceptance criteria, obtain independent content and standards
   review, and preserve externally blocked requirements with owners/triggers.
7. Open a scoped PR, require a successful Quality `repo-and-app` check and
   resolve executed failures. Inspect live branch/tag protections; preserve
   signing requirements. Do not use an administrative failure bypass.
8. Merge and validate the clean merged default-branch commit with the same
   gate. Compare local HEAD and GitHub's default branch. Inspect any concurrent
   change before publication.

## Publish and read back

The following assumes the reviewed notes, clean merged target and authority
above. Confirm `master` is still the actual default branch through the API.
No separate binary assets are needed: event PDFs/PNGs remain in the source tree.
Respect configured tag signing; use `git tag -s` when required by local policy.

```bash
(
set -euo pipefail
gh auth status --hostname github.com
test "$(gh api user --jq .login)" = BradGroux
test "$(gh api repos/BradGroux/ai-dev-days --jq .default_branch)" = master
test -z "$(git status --porcelain)"
test "$(git rev-parse HEAD)" = "$(gh api repos/BradGroux/ai-dev-days/commits/master --jq .sha)"
edition="$(cat VERSION)"
release_tag="v$edition"
test "${edition:0:10}" = "$(date -u +%Y.%m.%d)"
git tag -a "$release_tag" -m "AI Dev Days $release_tag"
git push origin "refs/tags/$release_tag"
gh release create "$release_tag" --repo BradGroux/ai-dev-days --verify-tag --target "$(git rev-parse HEAD)" --title "AI Dev Days $release_tag" --notes-file "docs/releases/$release_tag.md"
node scripts/verify-published-release.mjs "$release_tag"
)
```

The verifier explicitly addresses this repository, compares annotated local,
remote Git and API tag objects/peeled commits, author, final flags, body against
committed notes, UTC publication date and expected assets. It reports GitHub's
immutability state rather than treating documentation as enforcement. Compare
source archive trees and retain final verification in the issue tracker.

## Historical verification and correction

`node scripts/verify-published-release.mjs v1.1.0` reads its original notes and
tag without imposing calendar metadata on that release. Its historical note's
August 22 date differs from GitHub's August 23 UTC publication; do not rewrite it.

The baseline clone's v1.0.0 is a known legacy mismatch:

| Identity | Tag object | Peeled commit |
| --- | --- | --- |
| Local historical object | `338171325f888998aef444e1459ea47012e5d754` | `35e69b678c22bb8f6610fe9458aad89cccc8eb23` |
| Remote observed 2026-09-05 | `39718a77acca01bb8ccbc1e425710538205a453f` | `2177840cf978acc1ece0baaf6142e854feb2d188` |

The verifier correctly fails local/remote equality for that clone. Existing
historical republication decisions explain the limit; they do not authorize new
retagging. Inspect remote identities with authenticated `gh api` and
`git ls-remote`, or fetch into a separate namespace/clone, without force-fetching
over the retained local tag. No task in this edition rewrites either identity.

If publication fails, inspect the remote tag and release before retrying. Reuse
only the same audited object. Correct published defects through a new dated
edition (or next same-day suffix), with the prior identity and correction reason.
Sensitive problems use SECURITY.md and private disclosure; do not expose
credentials in logs, issues or release notes.

## Enforced release integrity

GitHub release immutability is enabled for future publications. Active tag
ruleset 22320307 prevents updates/deletion of version tags without bypass actors.
Both settings were read back during this audit. Existing branch protection was
absent; this task still requires the successful Quality check before merge.
Historical tags/releases were not replaced or retroactively marked immutable.
