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
const forbiddenPresentationArtifacts = eventFiles.filter((relativePath) => {
  const name = relativePath.split("/").at(-1);
  return /\.(pdf|ppt|pptx|key)$/i.test(name);
});
if (forbiddenPresentationArtifacts.length > 0) {
  throw new Error(
    `Presentation binaries are deferred, but found: ${forbiddenPresentationArtifacts.join(", ")}`
  );
}

const requiredEventFiles = [
  "slides.html",
  "speaker-notes-65-minute.md",
  "curriculum-map.md",
  "assets/digital-meld-logo.png",
  "assets/brad-groux-headshot.png",
  "assets/improving-logo.png",
  "assets/houbas-logo.png",
  "assets/houbas-group-qr.png",
  "assets/houbas-page-qr.png",
  "assets/houbas-feedback-qr.png",
  "assets/event-resources-qr.png",
  "assets/sstb-logo.png",
  "assets/sstb-qr.png"
];

for (const relativePath of requiredEventFiles) {
  await access(join(eventDir, relativePath));
}

const slides = await readFile(join(eventDir, "slides.html"), "utf8");
const slideIds = [...slides.matchAll(/id="slide(\d+)"/g)].map((match) =>
  Number(match[1])
);
const expectedSlideIds = Array.from({ length: 25 }, (_, index) => index + 1);

if (JSON.stringify(slideIds) !== JSON.stringify(expectedSlideIds)) {
  throw new Error("Expected exactly 25 sequential slide IDs.");
}

const requiredDeckSignals = [
  "https://www.linkedin.com/groups/17116055/",
  "https://www.linkedin.com/company/houston-business-analysts/",
  "houbas-slide-theme",
  '||"dark"',
  "#slide"
];

for (const signal of requiredDeckSignals) {
  if (!slides.includes(signal)) {
    throw new Error(`HTML deck is missing required signal: ${signal}`);
  }
}

function slideMarkup(number) {
  const match = slides.match(
    new RegExp(
      `<section class="slide(?: active)?" id="slide${number}"[\\s\\S]*?<\\/section>`
    )
  );
  if (!match) {
    throw new Error(`Unable to find slide ${number}.`);
  }
  return match[0];
}

const improvingSlide = slideMarkup(2);
if (
  !improvingSlide.includes("Thanks to our hosts, Improving!") ||
  !improvingSlide.includes("assets/improving-logo.png")
) {
  throw new Error("Improving recognition must remain on slide 2.");
}

const feedbackSlide = slideMarkup(25);
if (
  !feedbackSlide.includes("How’d we do?") ||
  !feedbackSlide.includes("https://forms.gle/cjb44RPJdCzuygEQ8") ||
  !feedbackSlide.includes("assets/houbas-feedback-qr.png") ||
  !feedbackSlide.includes("https://sstb.ai") ||
  !feedbackSlide.includes("assets/sstb-logo.png") ||
  !feedbackSlide.includes("assets/sstb-qr.png") ||
  !feedbackSlide.includes("HOUBAS") ||
  !feedbackSlide.includes("September 30, 2026")
) {
  throw new Error("HOUBAs feedback and SSTB call to action must remain on final slide 25.");
}

if (slides.includes('id="helpButton"') || slides.includes('class="help"')) {
  throw new Error("The deck must not include the retired help control or help panel.");
}

const presenterSlide = slideMarkup(4);
if (
  !presenterSlide.includes("Brad Groux") ||
  !presenterSlide.includes("assets/brad-groux-headshot.png")
) {
  throw new Error("Brad's presenter introduction must remain on slide 4.");
}

const verificationSlide = slideMarkup(19);
if (
  !verificationSlide.includes("V means verification") ||
  !verificationSlide.includes("Complete → PASS") ||
  !verificationSlide.includes("Incomplete → CLARIFY") ||
  !verificationSlide.includes("Restricted → STOP")
) {
  throw new Error("Slide 19 must define the verification IDs and expected responses in plain language.");
}

console.log(
  "PASS: fictional demo fixtures, outcomes, traces, HTML deck, and PDF-deferred boundary verified."
);
