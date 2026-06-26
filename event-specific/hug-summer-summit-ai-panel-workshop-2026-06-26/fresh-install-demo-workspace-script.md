# H.U.G. Summer Summit 2026 — Fresh OpenClaw Demo Workspace Script

## For future VERITAS
Use this as Brad's live step-by-step script for the H.U.G. Summer Summit 2026 AI panel/workshop on 2026-06-26. It is designed to demonstrate a fresh OpenClaw install and first agent workflow **without touching Brad/VERITAS' normal OpenClaw workspace**. It uses an isolated OpenClaw profile, a separate workspace folder, and a separate gateway port.

- **Event:** H.U.G. Summer Summit 2026 AI Panel Discussion & Interactive Workshop
- **Date/time:** Friday, June 26, 2026, 12:00–2:00 PM CT / 1:00–3:00 PM ET
- **Zoom:** <https://us02web.zoom.us/j/6764013003>
- **Meeting ID:** `676 401 3003`
- **Brad's role:** AI leadership panelist + OpenClaw/OpenClaw Dev Days demo support
- **Audience:** educators, students, nonprofit leaders, community partners, workforce-readiness supporters
- **Source materials:** local event packet in this folder + H.U.G. emails from Naomi Calizar dated 2026-06-25 and 2026-06-26
- **Confidence:** `high` for event logistics from emails and local event packet; `high` for current OpenClaw CLI commands as inspected locally on 2026-06-26.

---

## Fast presenter version

If time is tight, do only these beats:

1. Explain the harness: **context + instructions + tools + memory + review + human judgment**.
2. Create a clean demo workspace.
3. Install/verify OpenClaw.
4. Onboard with a separate profile/workspace.
5. Add `AGENTS.md` and a memory note.
6. Open the dashboard.
7. Ask the agent to create a reading-support brief from safe/public information.
8. Run the skeptical review prompt.
9. Close with: **AI is not the strategy. The workflow is the strategy.**

---

## Safety rules for the live demo

Say this out loud before typing anything serious:

> For today, we are only using public, fictional, or sanitized information. We are not putting student data, donor records, staff records, passwords, API keys, or confidential notes into prompts, screenshots, or shared files.

Do **not** project real API keys. If provider setup is already done, skip past it. If setup asks for secrets while sharing screen, pause screen share or use a prepared token/private path.

---

## Demo architecture

This script intentionally avoids Brad's normal workspace by using:

- **OpenClaw profile:** `hug-demo`
- **Gateway port:** `19026`
- **Demo workspace:** `~/OpenClaw-Demos/hug-summer-summit-2026`

That means the demo state lives separately from the main VERITAS/OpenClaw workspace.

---

## 0. Presenter preflight

Run this before the panel/workshop if possible.

```bash
openclaw --version
openclaw --profile hug-demo status || true
```

If OpenClaw is already installed, do **not** uninstall it just to make the install look fresh. The clean demo comes from the separate profile and workspace.

If you want a clean-looking terminal:

```bash
clear
```

Speaker line:

> I am going to use a separate demo workspace so I do not touch my actual AI assistant setup. That is a good habit: demos and experiments should have boundaries.

---

## 1. Create a fresh demo workspace

```bash
DEMO_ROOT="$HOME/OpenClaw-Demos/hug-summer-summit-2026"
mkdir -p "$DEMO_ROOT"
cd "$DEMO_ROOT"
pwd
```

Optional reset if you want to start this specific demo folder over:

```bash
rm -rf memory sources output AGENTS.md
mkdir -p memory sources output
```

Safer non-destructive version:

```bash
mkdir -p memory sources output
```

Speaker line:

> The folder matters. A workspace is where an agent can find instructions, memory, source material, and outputs. Without that, it is just a chat box.

---

## 2. Install OpenClaw if needed

### Mac / Linux

```bash
if ! command -v openclaw >/dev/null 2>&1; then
  curl -fsSL https://openclaw.ai/install.sh | bash
fi
openclaw --version
```

### Windows PowerShell

```powershell
if (-not (Get-Command openclaw -ErrorAction SilentlyContinue)) {
  iwr -useb https://openclaw.ai/install.ps1 | iex
}
openclaw --version
```

Speaker line:

> OpenClaw is the local control plane. The model is the engine; OpenClaw is the harness around it.


---

## 2A. Re-install / reset path for a live install walkthrough

Use this section when OpenClaw is already installed on the presenter machine but you want to take people through the install/onboarding process again without touching your real OpenClaw setup.

### What to say first

> My machine already has OpenClaw, so I am not going to uninstall my real assistant. Instead, I am going to reset only the isolated demo profile and workspace. That gives us the same first-run experience with much less risk.

### Safe reset: demo profile and demo workspace only

This does **not** touch the default OpenClaw profile.

```bash
DEMO_ROOT="$HOME/OpenClaw-Demos/hug-summer-summit-2026"

# Stop/clear only this demo profile if it exists.
openclaw --profile hug-demo reset --scope config+creds+sessions --yes --non-interactive || true

# Recreate only the demo workspace folder.
rm -rf "$DEMO_ROOT"
mkdir -p "$DEMO_ROOT"
cd "$DEMO_ROOT"
```

If non-interactive reset is not available in an older installed CLI, use the interactive reset and choose the safest profile/config reset option for `hug-demo` only:

```bash
openclaw --profile hug-demo reset
```

Do **not** run these commands without `--profile hug-demo` during a live event:

```bash
# Do not run for this demo unless you intend to affect your real OpenClaw state.
# openclaw reset
# openclaw uninstall
```

### Re-run install command visibly

The installer is safe to show as the canonical install entry point. If OpenClaw is already installed, it should either confirm/update the CLI or leave it usable.

Mac / Linux:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
openclaw --version
```

Windows PowerShell:

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
openclaw --version
```

### Re-run onboarding for the clean demo profile

```bash
openclaw --profile hug-demo onboard \
  --install-daemon \
  --workspace "$DEMO_ROOT" \
  --gateway-port 19026
```

If you do not want to install a daemon during the live walkthrough:

```bash
openclaw --profile hug-demo onboard \
  --no-install-daemon \
  --workspace "$DEMO_ROOT" \
  --gateway-port 19026
```

Then start the gateway manually:

```bash
openclaw --profile hug-demo gateway run --force
```

### Verify the re-install/onboarding worked

```bash
openclaw --profile hug-demo doctor
openclaw --profile hug-demo gateway status
openclaw --profile hug-demo dashboard --yes
```

Speaker line:

> This is the difference between installing a tool and building a safe workflow. We are not just proving the CLI runs. We are creating a bounded workspace where the agent can work safely.

---

## 3. Onboard into the isolated H.U.G. profile

Use this on Brad's Mac or any demo machine where you want separate state:

```bash
openclaw --profile hug-demo onboard \
  --install-daemon \
  --workspace "$DEMO_ROOT" \
  --gateway-port 19026
```

When prompted:

- choose the model provider available for the workshop/demo
- use a private setup flow for API keys
- skip messaging channels unless the workshop specifically needs them
- keep the workspace set to `~/OpenClaw-Demos/hug-summer-summit-2026`

If you only want local setup and do not want to install a service during the live demo:

```bash
openclaw --profile hug-demo onboard \
  --no-install-daemon \
  --workspace "$DEMO_ROOT" \
  --gateway-port 19026
```

Then start the gateway manually when needed:

```bash
openclaw --profile hug-demo gateway run --force
```

Speaker line:

> This profile is separate from my normal assistant. Same tool, clean sandbox. That is how you avoid breaking your real workspace during a live demo.

---

## 4. Verify the isolated setup

```bash
openclaw --profile hug-demo doctor
openclaw --profile hug-demo gateway status
openclaw --profile hug-demo models status
```

If the gateway is not running:

```bash
openclaw --profile hug-demo gateway run --force
```

If `models status` shows no usable provider, either:

1. configure the workshop provider, or
2. switch to the no-live-model fallback later in this script.

---

## 5. Add a memory file

Create a tiny memory file for the demo agent:

```bash
cat > memory/hug-reading-research.md <<'MD'
# H.U.G. Reading Research Agent Memory

## Purpose

Help educators, students, nonprofit leaders, and community partners turn public reading-support information into plain-English briefs, checklists, and workshop ideas.

## Audience

H.U.G. Summer Summit participants: educators, students, nonprofit leaders, workforce-readiness supporters, and community partners.

## Data Boundary

Use public, fictional, or sanitized information only. Do not use private student data, donor records, staff records, credentials, or confidential notes.

## Preferred Output

- short executive summary
- evidence table
- practical classroom or volunteer-support ideas
- risks and review notes
- next questions for a human expert
MD
```

Speaker line:

> Memory is not magic. It is durable context. We write down the things the agent should keep in mind.

---

## 6. Add `AGENTS.md`

```bash
cat > AGENTS.md <<'MD'
# H.U.G. Reading Research Agent

You help educators, students, nonprofit leaders, and community partners review public reading-support materials and turn them into useful drafts.

## Rules

- Use only public, fictional, sanitized, or user-provided source material approved for this demo.
- Never ask for private student data, donor data, staff records, credentials, or confidential notes.
- Separate facts from recommendations.
- Call out assumptions and missing evidence.
- Treat all output as a draft for human review.
- Before finalizing, run a skeptical self-review.

## Output Format

Return:

1. Summary
2. Evidence
3. Practical Ideas
4. Risks And Limits
5. Human Review Checklist
MD
```

Speaker line:

> `AGENTS.md` is the job description and safety policy. A good agent needs both.

---

## 7. Add safe source notes

```bash
cat > sources/public-reading-support-notes.md <<'MD'
# Public / Sanitized Reading Support Notes

These notes are fictionalized for a live AI demo.

## Program context

A nonprofit reading-support team helps elementary students build confidence, vocabulary, fluency, and comprehension. Volunteers need practical preparation material before tutoring sessions.

## Common volunteer needs

- understand the weekly reading goal
- prepare age-appropriate vocabulary prompts
- create simple comprehension questions
- adapt activities for different reading levels
- know when to escalate concerns to a teacher or program lead

## Safe AI use cases

- summarize public reading strategies
- draft volunteer prep checklists
- create fictional practice passages
- suggest comprehension questions
- translate public instructions into plain language
- prepare meeting summaries from sanitized notes

## Boundaries

- no private student records
- no grades, diagnoses, or sensitive family information
- no automated decisions about student placement
- human educator or program lead reviews before use
MD
```

Speaker line:

> Notice this source file is safe. The best first AI workflows use low-risk information and still require review.

---

## 8. Open the OpenClaw dashboard

```bash
openclaw --profile hug-demo dashboard --yes
```

If you want to print the URL instead of opening a browser automatically:

```bash
openclaw --profile hug-demo dashboard --yes --no-open
```

Speaker line:

> This is where the agent work becomes visible. We can see sessions, prompts, tools, and outputs instead of treating AI like a black box.

---

## 9. First prompt: create the brief

Paste this into the dashboard or terminal UI:

```text
Read AGENTS.md, memory/hug-reading-research.md, and sources/public-reading-support-notes.md.

Act as the H.U.G. Reading Research Agent.

Create a short brief for a nonprofit reading-support team explaining how AI could help volunteers prepare tutoring materials, summarize public research, and draft reading-support activities.

Use only the source notes in this workspace. Do not invent private student examples.

Return the required output format from AGENTS.md.
```

What you want to show:

- it follows the workspace instructions
- it references the safe source notes
- it separates ideas from risks
- it includes human review

Speaker line:

> The point is not that AI wrote a perfect brief. The point is that the workflow gave it context, boundaries, and a review gate.

---

## 10. Review prompt: make the agent critique itself

Paste this after the first answer:

```text
Now run a skeptical review of your own brief.

Check for:
- any claim not supported by the source notes
- any accidental request for private or sensitive data
- any recommendation that should require educator or program-lead approval
- any missing caveat about human review
- any wording that makes AI sound like it replaces teachers, volunteers, or judgment

Return:
1. Pass/fail verdict
2. Issues found
3. Safer revised wording
4. Final human approval checklist
```

Speaker line:

> This is the habit that matters: do not stop at generation. Add verification and human judgment.

---

## 11. Optional second prompt: make a volunteer checklist

```text
Using the same workspace rules and source notes, create a one-page volunteer prep checklist for a reading-support session.

Constraints:
- no private student data
- no claims beyond the source notes
- plain language
- useful for a first-time volunteer
- include a section called “Ask a program lead before...”
```

---

## 12. Optional panel/workshop bridge prompt

Use this if Arnold wants to connect the demo to the broader workshop:

```text
Turn this workflow into a 5-step recipe that a teacher, student, nonprofit leader, or small business owner could reuse safely.

Keep it practical:
1. choose a safe task
2. collect approved sources
3. write instructions
4. generate a draft
5. review before acting

Include one example for education, one for nonprofit operations, and one for workforce readiness.
```

---

## 13. If live provider setup fails

Do not burn the session debugging. Say:

> This is exactly why we separate concepts from tooling. If the provider login is blocked, the workflow still matters: context, boundaries, source material, review, and human approval.

Then show the prepared files:

```bash
ls -la
find . -maxdepth 2 -type f | sort
cat AGENTS.md
cat memory/hug-reading-research.md
cat sources/public-reading-support-notes.md
```

Use this no-live-model explanation:

> If the model were connected, this workspace gives it the job description, memory, source notes, and safety boundary. The model is replaceable. The harness is the durable part.

---

## 14. If dashboard fails

Try terminal UI:

```bash
openclaw --profile hug-demo tui
```

Or run a direct local agent turn if available in the configured profile:

```bash
openclaw --profile hug-demo agent --message "Read AGENTS.md and summarize your role in two sentences."
```

If neither works, use the fallback in section 13.

---

## 15. Cleanup after the demo

This removes only the H.U.G. demo workspace files, not Brad's real workspace:

```bash
# Optional only. Do not run during the live session unless you mean it.
# rm -rf "$HOME/OpenClaw-Demos/hug-summer-summit-2026"
```

If you installed a profile-specific daemon and want to inspect it later:

```bash
openclaw --profile hug-demo status
openclaw --profile hug-demo gateway status
```

Do not run `openclaw reset` or `openclaw uninstall` on a live machine unless you explicitly intend to change global/local OpenClaw state.

---

## Closing line

> The safest way to get value from AI is not to ask for magic. It is to build a small harness around useful work: safe sources, clear instructions, visible tools, memory, review, and a human decision.

