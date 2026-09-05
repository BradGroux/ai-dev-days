# AI Dev Days Migration

On July 30, 2026, `BradGroux/openclaw-dev-days` was renamed to
`BradGroux/ai-dev-days`.

The repository evolved beyond one tool while retaining OpenClaw as a
tool-specific track. The original migration described AI Dev Days as a
companion to the AI-Native Operating Framework. That relationship was
superseded by
[ADR-002](decisions/0002-adopt-open-framework-commons-v1.0.0.md), which adopts
Open Framework Commons v1.0.0 and preserves AI Dev Days as an independent
learning community.

## Repository URL

GitHub redirects the former repository URL to the new repository. The old name
must not be reused because doing so would disable GitHub's native redirects.

Existing clones continue to work through the redirect, but should update their
remote:

```bash
git remote set-url origin https://github.com/BradGroux/ai-dev-days.git
git remote -v
```

New clones should use:

```bash
git clone https://github.com/BradGroux/ai-dev-days.git
cd ai-dev-days
```

## Event Folder Convention

Event folders now begin with their date so they sort chronologically:

| Former folder | Current folder |
| --- | --- |
| `github-build-creators-2026-06-01` | `2026-06-01-github-build-creators` |
| `github-open-source-zone-build-2026-06-02-03` | `2026-06-02-github-open-source-zone-build` |
| `hug-summer-summit-ai-panel-workshop-2026-06-26` | `2026-06-26-hug-summer-summit-ai-panel-workshop` |
| `rubber-duck-thursday-2026-07-16` | `2026-07-16-rubber-duck-thursday` |
| `personal-ai-agents-live-2026-07-21` | `2026-07-21-personal-ai-agents-live` |
| `houston-business-analysts-codex-2026-08-19` | `2026-08-19-houston-business-analysts-codex` |
| `infragard-ai-agent-workshop-2026-05-14` | `2026-05-14-infragard-ai-agent-workshop` |
| `tamu-openclaw-2026-05-02` | `2026-05-02-tamu-openclaw` |

The multi-day Microsoft Build event uses its start date as the sortable folder
prefix. Its June 2–3 duration remains documented in the event packet.

Unlike the repository rename, GitHub does not provide a repository-level
redirect for changed paths within the repository. Update saved event links
using the table above.

## Naming Boundary

Historical event names remain unchanged where they describe an event that was
actually presented under the OpenClaw Dev Days name. Current program,
repository, and navigation references use AI Dev Days.

The current relationship is:

- Open Framework Commons v2026.09.05 supplies shared principles and boundaries;
- AI Dev Days owns its learning community, methods, curriculum, events,
  governance, and releases;
- AI Dev Days may teach or apply the AI-Native Operating Framework without
  inheriting its method or becoming its training module; and
- OpenClaw, Codex, and other tools provide implementation contexts.

## Calendar editions from 2026.09.05

New program editions use `YYYY.MM.DD`, with annotated tags `vYYYY.MM.DD`, using
the UTC publication date. A further publication on that date uses `.1`, then
`.2`, compared numerically. If publication slips across UTC midnight, update
active metadata before tagging. The date identifies the reviewed content;
release notes separately explain changed choices and compatibility.

No historical version, citation, tag, release, decision or date-first event
folder is renamed. Beaver Badges package `0.0.1`, its npm lockfile format and
storage key `beaver-badges.progress.v1` remain independent. Calendar strings
with zero-padded components are not inserted into npm semantic-version fields.

Commons adoption is now v2026.09.05; optional AI-Native teaching compatibility
remains v1.0.0. See [Decision 0004](decisions/0004-calendar-editions-and-commons-2026-09-05.md)
for exact identities, authority, rationale and changed reader decisions.
Historical video transcripts are replaced with source dispositions in the
current edition; this does not establish rights for previously distributed copies.
