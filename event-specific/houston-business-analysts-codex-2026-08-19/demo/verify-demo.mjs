import { access, readFile, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const demoDir = dirname(fileURLToPath(import.meta.url));
const eventDir = dirname(demoDir);

const requiredFiles = [
  "source/stakeholder-notes.md",
  "source/policy-excerpts.md",
  "source/sample-vendors.json",
  "workspace/README.md",
  "workspace/AGENTS.md",
  "workspace/process-brief.md",
  "workspace/data-contract.md",
  "workspace/glossary.md",
  "workspace/memory.md",
  "workspace/vendor-onboarding-sop.md",
  "workspace/vendor-onboarding-assistant-prd.md",
  "workspace/.agents/skills/vendor-review/SKILL.md",
  "workspace/acceptance-scenarios.md",
  "workspace/verification-report.md"
];

for (const relativePath of requiredFiles) {
  await access(join(demoDir, relativePath));
}

const fixtures = JSON.parse(
  await readFile(join(demoDir, "source/sample-vendors.json"), "utf8")
);

if (fixtures.fictional !== true) {
  throw new Error("Fixture corpus must be explicitly marked fictional.");
}

if (!Array.isArray(fixtures.records) || fixtures.records.length !== 3) {
  throw new Error("Expected exactly three prepared vendor records.");
}

const requiredFields = [
  "requestId",
  "vendorId",
  "legalName",
  "businessOwner",
  "serviceDescription",
  "expectedAnnualSpendUsd",
  "vendorCategory",
  "taxCountry",
  "paymentCurrency",
  "taxDocumentStatus",
  "duplicateCheckResult",
  "sanctionsScreeningResult",
  "providesSoftware",
  "accessesCompanyData",
  "connectsToCompanySystem",
  "receivesCredentials",
  "contractDeviation",
  "rushRequested"
];

const allowedTriState = new Set(["yes", "no", "unknown"]);
const expectedResults = new Map([
  ["V-001", "PASS"],
  ["V-002", "CLARIFY"],
  ["V-003", "STOP / ESCALATE"]
]);

function classify(record) {
  if (["possible_match", "confirmed_match"].includes(record.sanctionsScreeningResult)) {
    return "STOP / ESCALATE";
  }

  const missing = requiredFields.some((field) => {
    const value = record[field];
    return value === undefined || value === null || value === "" || value === "unknown";
  });

  return missing ? "CLARIFY" : "PASS";
}

const seenVendors = new Set();
const seenRequests = new Set();

for (const record of fixtures.records) {
  for (const field of requiredFields) {
    if (!(field in record)) {
      throw new Error(`${record.vendorId ?? "Unknown vendor"} is missing ${field}.`);
    }
  }

  if (seenVendors.has(record.vendorId) || seenRequests.has(record.requestId)) {
    throw new Error("Vendor and request identifiers must be unique.");
  }
  seenVendors.add(record.vendorId);
  seenRequests.add(record.requestId);

  for (const field of [
    "providesSoftware",
    "accessesCompanyData",
    "connectsToCompanySystem",
    "receivesCredentials",
    "contractDeviation"
  ]) {
    if (!allowedTriState.has(record[field])) {
      throw new Error(`${record.vendorId} has invalid ${field}: ${record[field]}`);
    }
  }

  const expected = expectedResults.get(record.vendorId);
  const actual = classify(record);
  if (!expected || actual !== expected) {
    throw new Error(`${record.vendorId}: expected ${expected}, received ${actual}.`);
  }
}

const scenarios = await readFile(
  join(demoDir, "workspace/acceptance-scenarios.md"),
  "utf8"
);
const report = await readFile(
  join(demoDir, "workspace/verification-report.md"),
  "utf8"
);

for (const [vendorId, outcome] of expectedResults) {
  if (!scenarios.includes(vendorId) || !scenarios.includes(outcome)) {
    throw new Error(`Acceptance scenarios do not trace ${vendorId} to ${outcome}.`);
  }
  if (!report.includes(vendorId) || !report.includes(outcome)) {
    throw new Error(`Verification report does not trace ${vendorId} to ${outcome}.`);
  }
}

async function listFilesRecursively(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFilesRecursively(absolutePath)));
    } else {
      files.push(absolutePath.slice(eventDir.length + 1));
    }
  }

  return files;
}

const eventFiles = await listFilesRecursively(eventDir);
const slideArtifacts = eventFiles.filter((relativePath) => {
  const name = relativePath.split("/").at(-1);
  return (
    /\.(pdf|ppt|pptx|key)$/i.test(name) ||
    /^(slides?|deck|presentation)([-_.].*)?\.(html|md)$/i.test(name) ||
    /^speaker-notes([-_.].*)?\.md$/i.test(name)
  );
});
if (slideArtifacts.length > 0) {
  throw new Error(`Slide work is deferred, but found: ${slideArtifacts.join(", ")}`);
}

console.log("PASS: fictional demo fixtures, outcomes, traces, and no-slide boundary verified.");
