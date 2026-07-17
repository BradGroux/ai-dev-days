# Day-Before Checklist

## Organizer and logistics

- [ ] Final title is approved.
- [ ] Public event link is live.
- [ ] Venue name, address, room, parking, and arrival instructions are confirmed.
- [ ] Networking, workshop, and hard-stop times are confirmed.
- [ ] Expected attendance and seating layout are confirmed.
- [ ] Improving host recognition is present as slide 2.
- [ ] HOUBAs community slide uses the provided logo and decoded QR destinations.
- [ ] HOUBAs feedback slide uses the provided logo and Google Form destination.
- [ ] Organizer timing signals at halfway and 15 minutes remaining are confirmed.

## Deck and links

- [ ] `slides.html` opens locally.
- [ ] `slides.pdf` matches the latest HTML deck.
- [ ] Speaker notes match the 65-minute core.
- [ ] Attendee page is public and readable on a phone.
- [ ] Every QR code resolves from a phone not signed into Brad's accounts.
- [ ] No placeholder, private URL, transcript text, or local path remains.

## Demo

- [ ] Fictional source notes are final.
- [ ] Live Codex prompts are in `prompt-pack.md`.
- [ ] Expected outputs are checked in.
- [ ] `node demo/verify-demo.mjs` passes.
- [ ] Pass, clarify, and stop/escalate cases all work.
- [ ] Demo completes once with Wi-Fi and once offline from prepared outputs.
- [ ] Projected fonts are readable from the back of the room.
- [ ] No unrelated workspace, recent file, notification, or private tab is visible.

## Room kit

- [ ] Laptop and charger are packed.
- [ ] Primary and backup display adapters are packed.
- [ ] Clicker is packed and charged.
- [ ] Projector connection and aspect ratio are confirmed.
- [ ] Whiteboard, markers, and eraser are confirmed.
- [ ] Portable hotspot is charged, if used.
- [ ] Water and a visible timer are ready.

## Verification

- [ ] Run `./scripts/publication-scan.sh`.
- [ ] Run `node scripts/audit-repo.mjs`.
- [ ] Run `node scripts/check-external-links.mjs` and manually re-check any
  event links the repository checker skips.
- [ ] Read [PUBLICATION-SAFETY.md](../../PUBLICATION-SAFETY.md).
- [ ] Rehearse the 65-minute core with the drop-if-behind plan.

## Safety

- [ ] Confirm all demo names, companies, records, and systems are fictional.
- [ ] Confirm no secrets, API keys, tokens, credentials, private data, or sensitive notes appear.
- [ ] Keep real attendee scenarios generic and off the projected Codex workspace.
