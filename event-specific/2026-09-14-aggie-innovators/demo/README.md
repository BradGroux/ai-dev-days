# Aggie Launchpad demo kit

- [Presenter console](index.html): shared prompts, timer, blank scoring, evidence export.
- [Reference app](reference-app/index.html): hand-built illustrative fallback, not an actual agent result.
- [Raw brief](source/venture-brief.md): identical factual input for both conditions.
- [Operating packet](context/README.md): requirements, procedure, memory.
- [Exact prompts](prompts.json): shared build, review, update, and continuation prompts.

Prepare a NEW destination outside this repo:

```sh
python3 authoring/prepare-demo.py /tmp/aggie-launchpad-rehearsal-01
```

The script refuses existing destinations. Both conditions receive the same venture brief; only the second receives the curated operating packet. Check inherited account memory, parent instructions, and tool access. Preserve existing rehearsals.

Run the same prompts and checks in both conditions. Keep actual outputs separate in private demo-only Buzz rooms. Record model/tool versions, settings, timestamps, corrections, evidence, and any inherited context. No measured outputs or scores exist yet.

The reference starts with 20 interviews, 12 interested, and six unique free-pilot reservations. Canceling P05 and P06 leaves four against the unchanged target of five. Repeated updates do not double count. Jordan's review remains pending; paid demand remains untested. Local state and history persist; the app exports a Markdown handoff. Reset affects only this fictional demo state.
