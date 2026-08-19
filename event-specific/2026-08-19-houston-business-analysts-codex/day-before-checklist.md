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
- [ ] Start Small, Think Big logo, `sstb.ai` QR, `HOUBAS` coupon, and September 30, 2026 expiration are correct.
- [ ] Organizer timing signals at halfway and 15 minutes remaining are confirmed.

## Deck and links

- [ ] `slides.html` opens locally.
- [ ] The HTML deck is content-final before PDF generation.
- [ ] `slides.pdf` opens locally and matches the final HTML deck.
- [ ] The PDF has 27 pages rendered from 1920x1080 dark-theme screenshots.
- [ ] Speaker notes match the 65-minute core.
- [ ] Attendee page is public and readable on a phone.
- [ ] Every QR code resolves from a phone not signed into Brad's accounts.
- [ ] No placeholder, private URL, transcript text, or local path remains.

## Demo

- [ ] Fictional source notes are final.
- [ ] Run-ready Codex prompts under `demo/prompts/` match `prompt-pack.md`.
- [ ] `node demo/prepare-live-workspace.mjs --reset` creates a clean discovery workspace.
- [ ] Expected outputs are checked in.
- [ ] `node demo/run-demo.mjs review V-002` returns `CLARIFY`.
- [ ] `node --test demo/test/vendor-review.test.mjs` passes.
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

- [ ] Confirm the
      [AI-Native Operating Framework](https://github.com/BradGroux/ai-native-operating-framework)
      supporting-resource link resolves.
- [ ] Confirm `demo/framework-guidance.md` points to the reviewed framework
      baseline and does not treat the framework as Northstar policy.
- [ ] Confirm intent, ownership, controls, verification evidence, handoff, and
      post-event review ownership are explicit.
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
