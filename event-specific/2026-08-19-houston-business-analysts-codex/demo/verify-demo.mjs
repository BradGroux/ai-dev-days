import { execFile } from "node:child_process";
import { access, mkdtemp, readFile, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import { REQUIRED_FIELDS, reviewVendor } from "./lib/vendor-review.mjs";

const demoDir = dirname(fileURLToPath(import.meta.url));
const eventDir = dirname(demoDir);
const execFileAsync = promisify(execFile);
const htmlReviewOnly = process.argv.includes("--html-review");

const requiredFiles = [
  "source/stakeholder-notes.md",
  "source/policy-excerpts.md",
  "source/sample-vendors.json",
  "corpora/README.md",
  "corpora/change-request-impact-analysis/README.md",
  "corpora/change-request-impact-analysis/prompt.md",
  "corpora/change-request-impact-analysis/facilitator-key.md",
  "corpora/change-request-impact-analysis/source/stakeholder-notes.md",
  "corpora/change-request-impact-analysis/source/policy-excerpts.md",
  "corpora/change-request-impact-analysis/source/change-requests.json",
  "corpora/stakeholder-intake-prioritization/README.md",
  "corpora/stakeholder-intake-prioritization/prompt.md",
  "corpora/stakeholder-intake-prioritization/facilitator-key.md",
  "corpora/stakeholder-intake-prioritization/source/stakeholder-notes.md",
  "corpora/stakeholder-intake-prioritization/source/prioritization-policy.md",
  "corpora/stakeholder-intake-prioritization/source/intake-requests.json",
  ".gitignore",
  "framework-guidance.md",
  "prepare-live-workspace.mjs",
  "run-demo.mjs",
  "lib/vendor-review.mjs",
  "test/vendor-review.test.mjs",
  "starter/AGENTS.md",
  "starter/README.md",
  "starter/audience-decisions.md",
  "prompts/README.md",
  "prompts/01-audit-current-state.md",
  "prompts/02-draft-process-brief.md",
  "prompts/03-build-operating-packet.md",
  "prompts/04-challenge-operating-packet.md",
  "prompts/05-review-v002.md",
  "prompts/06-verify-prepared-cases.md",
  "prompts/07-adapt-audience-workflow.md",
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

const allowedTriState = new Set(["yes", "no", "unknown"]);
const expectedResults = new Map([
  ["V-001", "PASS"],
  ["V-002", "CLARIFY"],
  ["V-003", "STOP / ESCALATE"]
]);

const seenVendors = new Set();
const seenRequests = new Set();

for (const record of fixtures.records) {
  for (const field of REQUIRED_FIELDS) {
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
  const actual = reviewVendor(record).outcome;
  if (!expected || actual !== expected) {
    throw new Error(`${record.vendorId}: expected ${expected}, received ${actual}.`);
  }
}

const practiceCorpora = [
  {
    directory: "change-request-impact-analysis",
    recordsFile: "source/change-requests.json",
    policyFile: "source/policy-excerpts.md",
    idField: "changeId",
    expectedResults: new Map([
      ["CR-101", "READY FOR IMPACT REVIEW"],
      ["CR-102", "CLARIFY"],
      ["CR-103", "STOP / ESCALATE"]
    ])
  },
  {
    directory: "stakeholder-intake-prioritization",
    recordsFile: "source/intake-requests.json",
    policyFile: "source/prioritization-policy.md",
    idField: "requestId",
    expectedResults: new Map([
      ["RQ-201", "READY FOR PRIORITIZATION"],
      ["RQ-202", "CLARIFY"],
      ["RQ-203", "ESCALATE"]
    ])
  }
];

for (const corpus of practiceCorpora) {
  const corpusDir = join(demoDir, "corpora", corpus.directory);
  const records = JSON.parse(
    await readFile(join(corpusDir, corpus.recordsFile), "utf8")
  );
  if (records.fictional !== true || !Array.isArray(records.records)) {
    throw new Error(`${corpus.directory} must contain an explicitly fictional records array.`);
  }
  if (records.records.length !== corpus.expectedResults.size) {
    throw new Error(`${corpus.directory} has an unexpected prepared-record count.`);
  }

  const ids = records.records.map((record) => record[corpus.idField]);
  if (ids.some((id) => !id) || new Set(ids).size !== ids.length) {
    throw new Error(`${corpus.directory} must use unique, non-empty record identifiers.`);
  }

  const [readme, policy, prompt, key] = await Promise.all([
    readFile(join(corpusDir, "README.md"), "utf8"),
    readFile(join(corpusDir, corpus.policyFile), "utf8"),
    readFile(join(corpusDir, "prompt.md"), "utf8"),
    readFile(join(corpusDir, "facilitator-key.md"), "utf8")
  ]);

  for (const text of [readme, policy, key]) {
    if (!text.toLowerCase().includes("fictional")) {
      throw new Error(`${corpus.directory} is missing an explicit fictional-data marker.`);
    }
  }
  for (const signal of ["Goal:", "Constraints:", "Done when:"]) {
    if (!prompt.includes(signal)) {
      throw new Error(`${corpus.directory}/prompt.md is missing ${signal}`);
    }
  }
  for (const signal of [
    "AI-Native Operating Framework",
    "does not determine",
    "Do not invent"
  ]) {
    if (!prompt.includes(signal)) {
      throw new Error(`${corpus.directory}/prompt.md is missing boundary: ${signal}`);
    }
  }
  for (const [recordId, result] of corpus.expectedResults) {
    const expectedTablePrefix = `| ${recordId} | ${result} |`;
    if (
      !ids.includes(recordId) ||
      !key.includes(expectedTablePrefix) ||
      !key.includes(`${recordId} acceptance starters`)
    ) {
      throw new Error(`${corpus.directory} does not trace ${recordId} to ${result}.`);
    }
  }
}

const frameworkGuidance = await readFile(
  join(demoDir, "framework-guidance.md"),
  "utf8"
);
for (const signal of [
  "AI-Native Operating Framework",
  "Intent",
  "Responsibility",
  "Work",
  "Control",
  "Assurance",
  "Learning",
  "Understand → Document → Validate → Approve → Use →",
  "not Northstar policy",
  "b458ef2a6d0643a7ae96d52ceababbf2ef265f1c"
]) {
  if (!frameworkGuidance.includes(signal)) {
    throw new Error(`Framework guidance is missing required signal: ${signal}`);
  }
}

const promptFiles = [
  "01-audit-current-state.md",
  "02-draft-process-brief.md",
  "03-build-operating-packet.md",
  "04-challenge-operating-packet.md",
  "05-review-v002.md",
  "06-verify-prepared-cases.md",
  "07-adapt-audience-workflow.md"
];
const maintenanceSignals = new Map([
  ["01-audit-current-state.md", "This is Understand"],
  ["02-draft-process-brief.md", "This is Document"],
  ["03-build-operating-packet.md", "This is Document"],
  ["04-challenge-operating-packet.md", "This is Validate"],
  ["05-review-v002.md", "This is Validate"],
  ["06-verify-prepared-cases.md", "This is Validate"],
  ["07-adapt-audience-workflow.md", "Start with Understand"]
]);

for (const promptFile of promptFiles) {
  const prompt = await readFile(join(demoDir, "prompts", promptFile), "utf8");
  for (const signal of ["Goal:", "Constraints:", "Done when:"]) {
    if (!prompt.includes(signal)) {
      throw new Error(`${promptFile} is missing prompt contract signal: ${signal}`);
    }
  }
  if (!prompt.toLowerCase().includes("framework")) {
    throw new Error(`${promptFile} must state the framework boundary.`);
  }
  if (!prompt.includes(maintenanceSignals.get(promptFile))) {
    throw new Error(`${promptFile} must identify its framework maintenance stage.`);
  }
}

const starterInstructions = await readFile(join(demoDir, "starter/AGENTS.md"), "utf8");
for (const signal of [
  "stakeholder notes are discovery evidence, not approved policy",
  "framework-guidance.md",
  "must not create, approve, reject, activate, or modify a vendor"
]) {
  if (!starterInstructions.includes(signal)) {
    throw new Error(`Live workspace instructions are missing required boundary: ${signal}`);
  }
}

const verificationRoot = await mkdtemp(join(tmpdir(), "houbas-live-workspace-"));
const generatedWorkspace = join(verificationRoot, "workspace");
try {
  await execFileAsync(process.execPath, [
    join(demoDir, "prepare-live-workspace.mjs"),
    "--output",
    generatedWorkspace
  ]);

  for (const relativePath of [
    ".houbas-generated-workspace",
    "AGENTS.md",
    "README.md",
    "drafts/audience-decisions.md",
    "framework-guidance.md",
    "source/stakeholder-notes.md",
    "source/policy-excerpts.md",
    "source/sample-vendors.json",
    ...promptFiles.map((name) => `prompts/${name}`)
  ]) {
    await access(join(generatedWorkspace, relativePath));
  }

  for (const forbiddenPath of [
    "workspace",
    "verification-report.md",
    "process-brief.md",
    "vendor-onboarding-sop.md"
  ]) {
    try {
      await access(join(generatedWorkspace, forbiddenPath));
      throw new Error(`Generated live workspace leaked completed artifact: ${forbiddenPath}`);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
} finally {
  await rm(verificationRoot, { recursive: true, force: true });
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
  return /\.(ppt|pptx|key)$/i.test(name) ||
    (/\.pdf$/i.test(name) && relativePath !== "slides.pdf");
});
if (forbiddenPresentationArtifacts.length > 0) {
  throw new Error(
    `Only the published slides.pdf presentation binary is allowed, but found: ${forbiddenPresentationArtifacts.join(", ")}`
  );
}

const requiredEventFiles = [
  "slides.html",
  "slides.pdf",
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
if (!htmlReviewOnly) {
  const pdfBuffer = await readFile(join(eventDir, "slides.pdf"));
  const pdf = pdfBuffer.toString("latin1");
  if (!pdf.startsWith("%PDF-")) {
    throw new Error("slides.pdf must be a valid PDF file.");
  }

  const countPdfSignal = (pattern) => [...pdf.matchAll(pattern)].length;
  const pdfPageCount = countPdfSignal(/\/Type\s*\/Page\b/g);
  const pdfImageCount = countPdfSignal(/\/Subtype\s*\/Image\b/g);
  const pdfWidthCount = countPdfSignal(/\/Width\s+1920\b/g);
  const pdfHeightCount = countPdfSignal(/\/Height\s+1080\b/g);
  const pdfMediaBoxCount = countPdfSignal(/\/MediaBox\s*\[\s*0\s+0\s+960\s+540\s*\]/g);
  const pdfLinks = [...pdf.matchAll(/\/URI\s*\(([^)]*)\)/g)].map(
    (match) => match[1]
  );

  if (
    pdfPageCount !== 27 ||
    pdfImageCount !== 27 ||
    pdfWidthCount !== 27 ||
    pdfHeightCount !== 27 ||
    pdfMediaBoxCount !== 27
  ) {
    throw new Error(
      `PDF export mismatch: expected the approved 27-slide export; pages=${pdfPageCount}, images=${pdfImageCount}, widths=${pdfWidthCount}, heights=${pdfHeightCount}, mediaBoxes=${pdfMediaBoxCount}. Use --html-review only when reviewing HTML changes before a new PDF export.`
    );
  }

  if (pdfLinks.some((link) => !link.startsWith("https://"))) {
    throw new Error("PDF export must preserve only safe HTTPS link annotations.");
  }

  const normalizeLink = (link) => link.replace(/\/$/, "");
  const htmlLinks = [...slides.matchAll(/<a\b[^>]*\bhref="(https:\/\/[^"#]+)"/g)].map(
    (match) => match[1]
  );
  if (
    JSON.stringify(pdfLinks.map(normalizeLink)) !==
    JSON.stringify(htmlLinks.map(normalizeLink))
  ) {
    throw new Error("PDF link annotations do not match the visible HTML slide links.");
  }
}

const slideIds = [...slides.matchAll(/id="slide(\d+)"/g)].map((match) =>
  Number(match[1])
);
const expectedSlideIds = Array.from({ length: 27 }, (_, index) => index + 1);

if (JSON.stringify(slideIds) !== JSON.stringify(expectedSlideIds)) {
  throw new Error("Expected exactly 27 sequential slide IDs.");
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

const marketSlide = slideMarkup(9);
if (
  !marketSlide.includes("≈729%") ||
  !marketSlide.includes("FDE posting index") ||
  !marketSlide.includes("not a raw count") ||
  !marketSlide.includes("https://www.businessinsider.com/forward-deployed-engineer-jobs-in-demand-2026-5") ||
  !marketSlide.includes("https://openai.com/careers/forward-deployed-engineer-%28fde%29-seattle-seattle/")
) {
  throw new Error("Slide 9 must preserve the corrected FDE market signal and sources.");
}

const capabilitySlide = slideMarkup(10);
if (
  !capabilitySlide.includes("FDE work builds on capabilities business analysts already use.") ||
  !capabilitySlide.includes("Shared foundation. Different delivery depth.") ||
  !capabilitySlide.includes("expected to code, integrate, deploy, and own production outcomes") ||
  !capabilitySlide.includes("https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/") ||
  !capabilitySlide.includes("https://openai.com/careers/forward-deployed-engineer-%28fde%29-seattle-seattle/")
) {
  throw new Error("Slide 10 must preserve the sourced BA and FDE capability distinction.");
}

const feedbackSlide = slideMarkup(27);
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
  throw new Error("HOUBAs feedback and SSTB call to action must remain on final slide 27.");
}

if (slides.includes('id="helpButton"') || slides.includes('class="help"')) {
  throw new Error("The deck must not include the retired help control or help panel.");
}

const presenterSlide = slideMarkup(4);
if (
  !presenterSlide.includes("Brad Groux") ||
  !presenterSlide.includes("assets/brad-groux-headshot.png") ||
  !presenterSlide.includes("Advocate for evidence-backed delivery.") ||
  !presenterSlide.includes("Own your operating model. Rent your tools.") ||
  !presenterSlide.includes('class="link-pair"')
) {
  throw new Error("Brad's presenter introduction and two-column link layout must remain on slide 4.");
}

const socialLinks = [
  "https://twitter.com/BradGroux",
  "https://www.linkedin.com/in/bradgroux/",
  "https://youtube.com/BradGroux"
];
for (const markup of [presenterSlide, slideMarkup(25)]) {
  const positions = socialLinks.map((link) => markup.indexOf(link));
  if (
    positions.some((position) => position < 0) ||
    positions.some(
      (position, index) => index > 0 && position <= positions[index - 1]
    )
  ) {
    throw new Error("Twitter, LinkedIn, and YouTube links must appear in that order on slides 4 and 25.");
  }
}

const resourceSlide = slideMarkup(25);
if (
  !resourceSlide.includes('class="link-hub"') ||
  !resourceSlide.includes('class="resource-directory"') ||
  !resourceSlide.includes("AI Dev Days") ||
  !resourceSlide.includes("AI-Native Operating Framework")
) {
  throw new Error("Slide 25 must separate contact destinations from named event resources.");
}

for (const link of [
  "https://www.bradgroux.com",
  "https://digitalmeld.io",
  "https://sstb.ai",
  "https://github.com/BradGroux/ai-dev-days",
  "https://github.com/BradGroux/ai-native-operating-framework"
]) {
  if (!resourceSlide.includes(link)) {
    throw new Error(`Slide 25 is missing required link: ${link}`);
  }
}

if (!slideMarkup(14).includes("flex:0 0 auto")) {
  throw new Error("Slide 14 content must remain vertically centered rather than top-weighted.");
}

const verificationSlide = slideMarkup(21);
if (
  !verificationSlide.includes("V means verification") ||
  !verificationSlide.includes("Complete → PASS") ||
  !verificationSlide.includes("Incomplete → CLARIFY") ||
  !verificationSlide.includes("Restricted → STOP")
) {
  throw new Error(
    "Slide 21 must define the verification IDs and expected responses in plain language."
  );
}

console.log(htmlReviewOnly
  ? "PASS: fictional demo fixtures, executable reviewer, prompts, staged workspace, traces, and 27-slide HTML deck verified; PDF parity intentionally skipped."
  : "PASS: fictional demo fixtures, executable reviewer, prompts, staged workspace, traces, 27-slide HTML deck, and high-resolution PDF verified."
);
