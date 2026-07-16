# Business Agent Demo Script

## Primary Demo: Accounts Payable

1. Open [demo/index.html](demo/index.html).
2. Select **Accounts Payable**.
3. Point out that the source records are fictional and contain no bank details.
4. Show the three-way-match SOP: invoice, purchase order, and receipt.
5. Select **Run draft**.
6. Walk through the exception queue:
   - one price variance
   - one likely duplicate
   - one clean invoice ready for human approval
7. Show the deterministic checks and the explicit approval gate.
8. Close with: "The agent assembled the evidence. It did not approve or pay anything."

## Alternate Demo: Field Operations

1. Select **Field Operations**.
2. Show the morning source packet: work orders, crew status, equipment, and safety constraints.
3. Run the draft and inspect the dispatch brief.
4. Point out that crew assignment remains draft-only until the dispatcher approves it.

## Alternate Demo: Supply Chain Logistics

1. Select **Supply Chain Logistics**.
2. Run the draft exception desk.
3. Compare the late shipment, temperature-risk load, and clean shipment.
4. Point out that the agent drafts a carrier question but does not send it.

## Fallback

If the local app is unavailable, open the corresponding `expected-output.md` file and narrate the same artifact chain.
