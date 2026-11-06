# Aggie Launchpad: presenter walkthrough

Final slide revision approved for PDF export on September 14, 2026. Actual agent
runs and results must be captured during rehearsal; the reference app is hand-built.

## 1. Prepare the two starting points

From the repository root, prepare a NEW rehearsal directory outside the repository:

```sh
python3 event-specific/2026-09-14-aggie-innovators/authoring/prepare-demo.py /tmp/aggie-launchpad-final-rehearsal-01
```

If that destination exists, choose a new name; do not overwrite a previous run.
The output contains raw-brief/ and operating-packet/. Both have the identical
venture-brief.md. Only the second has context/ and context-loading instructions.
Keep the parent manifest and scorecard outside the agent-readable workspaces.

Open the [demo console](demo/index.html). Confirm the selected model, tool versions,
permissions, inherited account memory, and parent instructions. Use the same model,
settings, build time allowance, and prompts for both conditions. Use fresh sessions
with no access to the other condition. Record any isolation limitations.

## 2. Introduce the problem: slides 8–10

Jordan wants to test bicycle-repair pickup for students. Say the three numbers:
20 interviews, 12 expressions of interest, six reservations for a free pilot.
Reservations are a subset of the 12, not six additional customers. Nobody has paid.
Five active reservations is Jordan's chosen threshold for reviewing the pilot.
Meeting it does not automatically approve a launch.

Explain the audience's question: can another teammate or tool continue this work
without Jordan explaining everything again? Do not predict that the first run fails.

## 3. First build: the raw brief

Briefly orient the room to ChatGPT and the Codex workspace. Open raw-brief/ in a
fresh Codex session. Show venture-brief.md, then use this exact shared build prompt:

> Build Aggie Launchpad for the fictional Campus Cycle founder using the files in this workspace. Create a self-contained local index.html dashboard connecting the venture hypothesis, customer evidence, experiment, decision status, and next owner. Include an editable reservation record and save a Markdown handoff another teammate can continue. Use maroon and cream accents, accessible controls, and light/dark mode. Work without a build step or network. Check your work and preserve uncertainty. Do not contact anyone, schedule real repairs, collect payments, publish, or connect to live accounts.

Start the console timer. Use the same build allowance in the second condition.
Save the actual index.html and Markdown handoff. Open the generated app and check
what it says about interest, reservations, payment evidence, target, and authority.
Record substantive corrections and elapsed time. Keep this output intact.

In a separate private demo-only Buzz context, provide only this condition's source
and outputs. Use the review prompt from the console. Save the review for comparison.
The first review is separate from the fresh-session continuation later.

## 4. Tool tour and framework: slides 11–22

For each tool, perform one bounded task from the same scenario. Keep source facts
available through that tool's supported context mechanism; do not imply file access
where none is configured. Use a labeled recording if a live surface is unavailable.
Claude Code is explanation only.

At slides 19–22, open context/PRD.md, SOP.md, and MEMORY.md. Show one sentence each:
requirements define the visible result; the procedure handles changed evidence;
memory preserves state and reasoning. Both conditions already have the same source
facts and rules. The second organizes them for reuse; it adds no customer evidence.

## 5. Second build: the operating packet

Open operating-packet/ in a fresh Codex session. Show the same venture brief plus
the context-loading instructions and three operating documents. Run the identical
build prompt, model/settings, permissions, and build allowance. Save the actual app
and handoff separately. Review it in its own private Buzz context with the same
review prompt. Record results, corrections, and elapsed time.

## 6. Apply the same changed evidence: slides 23–24

Use this update in each originating build session:

> Update U-01: reservations P05 and P06 have been canceled. Nothing else has changed. Update the experiment, preserve original evidence and history, and show the current status and next decision owner. Do not change the agreed target or invent a founder decision.

Check each actual output: four active reservations, two canceled, unchanged target
of five, and Jordan's review pending. Reapply the same update once; the count must
remain four. Check that the original six and the change source U-01 survive.
Keep the original and updated artifacts so the history can be inspected.

## 7. The main payoff: a fresh Buzz handoff, slides 25–26

For EACH condition, start a NEW private Buzz context with no prior conversation.
Provide the saved source and updated artifacts from that condition only. The second
also carries its saved operating packet. Keep the continuation prompt identical:

> I am taking over research for Campus Cycle. What have we observed, what remains an assumption, what changed, and what decision does Jordan need to make next? Continue from the saved work, cite its sources, and do not invent an approval.

Do not explain the project verbally to help the agent. Inspect whether the response
finds the original/current counts, changed evidence, unchanged target, untested paid
demand, and Jordan's next decision. Record any explanation or correction you had to
supply. This demonstrates whether operating knowledge travels between tools.

Slide 26 is the intended app behavior, not a measured build. Show actual outputs
alongside it. Keep source provenance and the fictional-data disclosure in the brief.

## 8. Compare honestly: slides 27–28

Show both apps at equal scale and both fresh-context responses. Complete the same
eight-criterion console rubric using actual evidence, then export the scorecard
before closing it. Compare behavior, source tracking, retained reasoning, handoff,
manual corrections, and re-explanation. An accurate baseline is a valid result.

If both succeed, discuss the effort needed to get there. If neither produces a
visible difference, show that and explain the reuse mechanism without claiming a
measured improvement. A tool outage is not evidence of framework performance.

## 9. Close: slides 29–31

Confirm approved attendee addresses and ordinary new-member redemption before
promising gift access. The gift is 365 days, no payment card, new members only,
redeem by September 16 at 8 PM Central. Current entitlement must be verified.

Ask attendees to choose one repeated task, define one acceptance check, name its
owner, and keep what the next person needs. Leave the closing resource QR and social
links visible. Capture audience questions and review lessons after the event.

## Timing and recovery

Use the [90-minute curriculum](curriculum.md): baseline at minutes 14–24, tool tour
24–42, operating documents/framework 42–58, second run/change/handoff 58–74,
comparison and exercise 74–82, gift and closing 82–90. Match actual build allowances
within these blocks. If builds need longer, use labeled rehearsed outputs for part
of the demonstration rather than borrowing the comparison and handoff time.

After one short failed retry, switch to labeled rehearsal evidence. Do not expose
unrelated browser tabs or data. No real outreach, booking, payments, or publication
are part of the demo. The framework is an operating approach, not a guarantee that
every model will perform better on every task.
