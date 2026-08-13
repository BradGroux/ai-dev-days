#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { formatReviewPacket, reviewVendor } from "./lib/vendor-review.mjs";

const demoDir = dirname(fileURLToPath(import.meta.url));
const fixtures = JSON.parse(
  await readFile(join(demoDir, "source/sample-vendors.json"), "utf8")
);
const [command = "help", subject, ...flags] = process.argv.slice(2);
const json = flags.includes("--json") || subject === "--json";

function usage() {
  return `HOUBAs fictional vendor-onboarding demo

Usage:
  node demo/run-demo.mjs list
  node demo/run-demo.mjs review V-002 [--json]
  node demo/run-demo.mjs review-all [--json]
  node demo/run-demo.mjs framework-map

The commands read only checked-in fictional fixtures and never take external action.`;
}

function getRecord(vendorId) {
  const record = fixtures.records.find((candidate) => candidate.vendorId === vendorId);
  if (!record) {
    throw new Error(`Unknown vendor ID: ${vendorId}. Use the list command to see prepared records.`);
  }
  return record;
}

if (command === "help" || command === "--help" || command === "-h") {
  console.log(usage());
} else if (command === "list") {
  for (const record of fixtures.records) {
    console.log(`${record.vendorId}\t${record.requestId}\t${record.legalName}`);
  }
} else if (command === "review") {
  if (!subject || subject.startsWith("--")) throw new Error("The review command requires a vendor ID.");
  const review = reviewVendor(getRecord(subject));
  console.log(json ? JSON.stringify(review, null, 2) : formatReviewPacket(review));
} else if (command === "review-all") {
  const reviews = fixtures.records.map(reviewVendor);
  console.log(
    json
      ? JSON.stringify(reviews, null, 2)
      : reviews.map(formatReviewPacket).join("\n---\n\n")
  );
} else if (command === "framework-map") {
  console.log(`# AI-Native Operating Framework demo map

| Framework concern | Demo evidence |
|---|---|
| Intent | Process brief and assistant PRD |
| Responsibility | Named owners, review lanes, and authority boundaries |
| Work | Current-state flow, SOP, data contract, and reusable skill |
| Control | Policy precedence, approvals, exceptions, and stop conditions |
| Assurance | Acceptance scenarios, source citations, and verification report |
| Learning | Memory warning, post-event review, and governed improvement path |

The framework organizes the questions. Approved Northstar policy determines vendor outcomes.`);
} else {
  throw new Error(`Unknown command: ${command}\n\n${usage()}`);
}
