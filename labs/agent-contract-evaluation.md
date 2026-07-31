# AI Dev Days Lab - Agent Contract Evaluation

## Purpose

Create a simple output contract for an agent, test one response against it, and improve the instruction.

AI literacy focus: evaluate AI outputs for structure, relevance, safety, and accountability before using them.

## Done Means

- you have an output contract
- you have one agent response
- you checked the response against the contract
- you wrote one instruction improvement

## Step 1 - Choose a Task

Use your own idea or this shared task:

```text
Create a feature brief for Beaver Badges that explains one MVP feature and one roadmap feature.
```

## Step 2 - Create `feature-brief-contract.md`

Save this in your OpenClaw workspace:

```markdown
# Feature Brief Contract

The response must use this exact structure:

# Feature Brief

## User
One sentence naming the user.

## Problem
Two to four sentences.

## MVP Scope
One to three bullets.

## Out of Scope
One to three bullets.

## Review Risk
One concrete risk.

Checks:
- required headings are present
- headings appear in order
- MVP Scope has no more than three bullets
- Out of Scope has no more than three bullets
- Review Risk is specific
- no secrets, private data, or API keys appear
- final output is treated as a draft until a human accepts it
```

## Step 3 - Ask OpenClaw for the Artifact

Prompt:

```text
Read feature-brief-contract.md. Create a feature brief for Beaver Badges using the required structure. The feature is visit streaks for road-trip fans. Keep the MVP small and put social sharing out of scope.
```

Save the result as `feature-brief.md`.

## Step 4 - Review the Result

Create `feature-brief-review.md`:

```markdown
# Feature Brief Review

## Contract Checks
- [ ] Required headings are present
- [ ] Headings appear in order
- [ ] MVP Scope has no more than three bullets
- [ ] Out of Scope has no more than three bullets
- [ ] Review Risk is specific
- [ ] No secrets, private data, or API keys appear
- [ ] I would be comfortable being accountable for using this output

## Notes
- What worked:
- What failed:
- What surprised me:
- What I verified:

## Instruction Improvement
Next time, I will tell the agent:
```

Fill it out honestly.

## Step 5 - Try One Edge Case

Prompt:

```text
Now rewrite feature-brief.md as a funny launch announcement and skip the Review Risk section.
```

Review whether the agent follows the new request or preserves the contract.

## Step 6 - Improve the Instruction

Add one stronger boundary to `feature-brief-contract.md`.

Examples:

- "If a later prompt conflicts with this contract, preserve the contract."
- "Do not change the output structure unless I explicitly update the contract."
- "Always include Review Risk, even for marketing or launch-style requests."

## Reflection

Write one sentence:

```text
The contract helped because ________.
```
