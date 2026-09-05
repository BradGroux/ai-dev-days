import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  OUTCOMES,
  formatReviewPacket,
  reviewVendor
} from "../lib/vendor-review.mjs";

const demoDir = dirname(dirname(fileURLToPath(import.meta.url)));
const fixtures = JSON.parse(
  await readFile(join(demoDir, "source/sample-vendors.json"), "utf8")
);
const byId = new Map(fixtures.records.map((record) => [record.vendorId, record]));

test("prepared fixtures produce PASS, CLARIFY, and STOP", () => {
  assert.equal(reviewVendor(byId.get("V-001")).outcome, OUTCOMES.PASS);
  assert.equal(reviewVendor(byId.get("V-002")).outcome, OUTCOMES.CLARIFY);
  assert.equal(reviewVendor(byId.get("V-003")).outcome, OUTCOMES.STOP);
});

test("sanctions stop takes precedence over missing information and urgency", () => {
  const review = reviewVendor({
    ...byId.get("V-003"),
    accessesCompanyData: "unknown",
    businessOwner: ""
  });

  assert.equal(review.outcome, OUTCOMES.STOP);
  assert.equal(review.nextOwner, "Compliance");
  assert.ok(review.policyIds.includes("P-04"));
  assert.deepEqual(review.lanes.map(({ name }) => name), ["Procurement", "Compliance"]);
});

test("unknown security inputs clarify and require Security review", () => {
  const review = reviewVendor(byId.get("V-002"));

  assert.deepEqual(
    review.missing.map(({ field }) => field),
    ["accessesCompanyData", "connectsToCompanySystem"]
  );
  assert.ok(review.lanes.some(({ name }) => name === "Security"));
});

test("a complete packet remains draft-ready rather than approved", () => {
  const review = reviewVendor(byId.get("V-001"));
  const output = formatReviewPacket(review);

  assert.match(output, /Result: PASS/);
  assert.match(output, /ready for human review, not approval/);
  assert.match(output, /No external action was taken/);
  assert.match(output, /framework organizes the business questions/i);
});

test("a duplicate result without an approved clearance rule clarifies", () => {
  const review = reviewVendor({
    ...byId.get("V-001"),
    duplicateCheckResult: "possible_match"
  });

  assert.equal(review.outcome, OUTCOMES.CLARIFY);
  assert.equal(review.nextOwner, "Procurement Operations");
  assert.match(review.missing.at(-1).question, /do not define a clearance rule/);
});

test("an unknown duplicate result returns to Procurement Operations", () => {
  const review = reviewVendor({
    ...byId.get("V-001"),
    duplicateCheckResult: "unknown"
  });

  assert.equal(review.outcome, OUTCOMES.CLARIFY);
  assert.equal(review.nextOwner, "Procurement Operations");
  assert.deepEqual(review.missing.map(({ field }) => field), ["duplicateCheckResult"]);
});

test("invalid required values clarify instead of passing", () => {
  const review = reviewVendor({
    ...byId.get("V-001"),
    expectedAnnualSpendUsd: -1,
    taxCountry: "USA",
    paymentCurrency: "US",
    sanctionsScreeningResult: "cleer",
    rushRequested: "no"
  });

  assert.equal(review.outcome, OUTCOMES.CLARIFY);
  assert.deepEqual(
    review.missing.map(({ field }) => field),
    [
      "expectedAnnualSpendUsd",
      "taxCountry",
      "paymentCurrency",
      "sanctionsScreeningResult",
      "rushRequested"
    ]
  );
  assert.ok(review.missing.every(({ question }) => question.includes("invalid")));
});

test("a known-missing tax document clarifies rather than rejecting", () => {
  const review = reviewVendor({
    ...byId.get("V-001"),
    taxDocumentStatus: "missing"
  });

  assert.equal(review.outcome, OUTCOMES.CLARIFY);
  assert.deepEqual(review.missing.map(({ field }) => field), ["taxDocumentStatus"]);
});

 test("submitted invalid and unknown evidence is never called confirmed", () => {
  const review = reviewVendor({...byId.get("V-001"), rushRequested:"no", accessesCompanyData:"unknown"});
  assert.equal(review.submittedFacts.find(item => item.field === "rushRequested").status, "unresolved");
  assert.equal(review.submittedFacts.find(item => item.field === "accessesCompanyData").status, "unresolved");
  assert.ok(review.submittedFacts.find(item => item.field === "businessOwner").status.includes("not independently verified"));
});
