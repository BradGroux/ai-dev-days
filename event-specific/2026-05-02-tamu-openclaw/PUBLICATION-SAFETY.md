# Publication Safety Guidelines

This repository is public-facing. Treat every file as something attendees, organizers, contributors, and the broader community may read.

## Do not publish

Do not commit or publish:

- secrets or API keys
- tokens, credentials, or private URLs
- private notes
- sensitive personal data
- client names or client-identifying details unless explicitly approved for public use
- internal workflow details that are not meant for the public workshop audience
- private local paths or machine-specific operational notes
- screenshots containing private data, hidden browser tabs, credentials, messages, or unrelated work

## Use public-safe examples

When examples are needed, use:

- fictional projects
- sample data
- public documentation
- generic company/person names
- workshop-specific demo content

## Raw research is allowed

Raw research notes are allowed when they help show how the workshop was built.

Before publishing raw research, remove:

- private source paths
- client-identifying information
- internal workflow commentary
- secrets or credentials
- confidential planning notes

## Safety checkpoint wording

Use this wording before GitHub or public sharing:

> Do not put secrets, API keys, private data, sensitive personal notes, or anything confidential in a public repository, shared file, screenshot, or projected prompt. When in doubt, keep it local.

## Review checklist before commit

Run the lightweight scan:

```bash
./scripts/publication-scan.sh
```

Before committing public-facing content, check:

- [ ] Does this mention a real client or private organization?
- [ ] Does this expose internal workflow details?
- [ ] Does this include local machine paths or private repo paths?
- [ ] Does this include secrets, tokens, API keys, or screenshots with sensitive data?
- [ ] Would this still be appropriate if an attendee shared it publicly?

If the answer is uncertain, rewrite it or keep it out of the public repo.
