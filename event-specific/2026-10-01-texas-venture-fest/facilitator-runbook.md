# Panel Runbook

Operational sequence for Brad Groux's **AI Developer Ecosystems** segment.

## Before the room opens

1. Connect the presenter laptop to power and the venue display.
2. Confirm the display uses a 16:9 resolution and does not crop the stage.
3. Open the local [HTML deck](slides.html) at `#slide1`.
4. Check the Digital Meld logo and slide footer in dark and light themes.
5. Test the clicker, arrow keys, Home, End, theme control, and fullscreen.
6. Open the [speaker notes](speaker-notes-20-minute.md) on a private screen or
   second device.
7. Keep the event folder available on the laptop and USB backup.
8. Confirm the [fallback plan](fallback-plan.md) with the moderator or room
   operator.

Run the local release gate before using a new revision:

```bash
./scripts/validate-release.sh
```

## Opening state

- Leave Slide 1 visible before the panel begins.
- Keep browser chrome and unrelated tabs off the projected display.
- Confirm the moderator knows Brad's segment is paced for 20 minutes and Q&A
  follows outside that block.

## During the segment

- Follow the slide timing in the speaker notes.
- Use the deck as the public surface; do not project research notes, messages,
  account pages, or private DevDay material.
- External links open in a separate tab. Return focus to the deck before
  advancing.
- If the moderator shortens the block, use the compressed path in the fallback
  plan.

## Close

- Leave Slide 9 visible for the Follow and Visit links.
- Direct attendees to [attendee-links.md](attendee-links.md) for public sources
  and follow-up.
- Record public-safe observations and material deviations in the
  [post-event review](post-event-review.md).

## Stop conditions

Stop projecting immediately if a private notification, credential, attendee
identity, or other sensitive information appears. Move to the offline backup
or continue without slides until the public-safe surface is restored.
