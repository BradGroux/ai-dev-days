export const OUTCOMES = Object.freeze({
  PASS: "PASS",
  CLARIFY: "CLARIFY",
  STOP: "STOP / ESCALATE"
});

export const REQUIRED_FIELDS = Object.freeze([
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
]);

const SECURITY_FIELDS = Object.freeze([
  "providesSoftware",
  "accessesCompanyData",
  "connectsToCompanySystem",
  "receivesCredentials"
]);

const FIELD_QUESTIONS = Object.freeze({
  requestId: "What is the intake request ID?",
  vendorId: "What is the stable vendor ID for this review?",
  legalName: "What is the vendor's confirmed legal name?",
  businessOwner: "Who is accountable for the business need?",
  serviceDescription: "What goods or services will the vendor provide?",
  expectedAnnualSpendUsd: "What is the requester's expected annual spend in USD?",
  vendorCategory: "What intake category should Procurement assign?",
  taxCountry: "What is the vendor's tax-registration country?",
  paymentCurrency: "What payment currency is requested?",
  taxDocumentStatus: "Has Finance received the required tax document?",
  duplicateCheckResult: "What is the result of the ProcureFlow duplicate search?",
  sanctionsScreeningResult: "What is the current Compliance screening result?",
  providesSoftware: "Will the vendor provide software or a hosted application?",
  accessesCompanyData: "Will the vendor receive, store, or process company data, including user names or email addresses?",
  connectsToCompanySystem: "Will the vendor connect to a company system?",
  receivesCredentials: "Will the vendor receive user or service credentials?",
  contractDeviation: "Do the proposed terms deviate from the standard contract?",
  rushRequested: "Has the requester asked for expedited handling?"
});

const TRI_STATE_VALUES = Object.freeze(["yes", "no", "unknown"]);
const FIELD_VALIDATORS = Object.freeze({
  requestId: (value) => typeof value === "string" && /^REQ-\d{4}$/.test(value),
  vendorId: (value) => typeof value === "string" && /^V-\d{3}$/.test(value),
  legalName: (value) => typeof value === "string" && value.trim().length > 0,
  businessOwner: (value) => typeof value === "string" && value.trim().length > 0,
  serviceDescription: (value) =>
    typeof value === "string" && value.trim().length > 0,
  expectedAnnualSpendUsd: (value) =>
    typeof value === "number" && Number.isFinite(value) && value >= 0,
  vendorCategory: (value) =>
    typeof value === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value),
  taxCountry: (value) => typeof value === "string" && /^[A-Z]{2}$/.test(value),
  paymentCurrency: (value) =>
    typeof value === "string" && /^[A-Z]{3}$/.test(value),
  taxDocumentStatus: (value) =>
    ["received", "missing", "unknown"].includes(value),
  duplicateCheckResult: (value) =>
    ["no_match", "possible_match", "confirmed_duplicate", "unknown"].includes(value),
  sanctionsScreeningResult: (value) =>
    ["clear", "possible_match", "confirmed_match", "unknown"].includes(value),
  providesSoftware: (value) => TRI_STATE_VALUES.includes(value),
  accessesCompanyData: (value) => TRI_STATE_VALUES.includes(value),
  connectsToCompanySystem: (value) => TRI_STATE_VALUES.includes(value),
  receivesCredentials: (value) => TRI_STATE_VALUES.includes(value),
  contractDeviation: (value) => TRI_STATE_VALUES.includes(value),
  rushRequested: (value) => typeof value === "boolean"
});

function isMissing(value) {
  return value === undefined || value === null || value === "" || value === "unknown";
}

function fieldIssue(field, value) {
  if (isMissing(value)) {
    return { field, question: FIELD_QUESTIONS[field] };
  }

  if (!FIELD_VALIDATORS[field](value)) {
    return {
      field,
      question: `The supplied value \`${String(value)}\` is invalid. ${FIELD_QUESTIONS[field]}`
    };
  }

  if (field === "taxDocumentStatus" && value === "missing") {
    return { field, question: FIELD_QUESTIONS[field] };
  }

  return null;
}

function addLane(lanes, name, reason) {
  if (!lanes.some((lane) => lane.name === name)) {
    lanes.push({ name, reason });
  }
}

function reviewLanes(record, outcome) {
  const lanes = [];
  addLane(lanes, "Procurement", "coordinates the review packet and duplicate check");

  if (outcome === OUTCOMES.STOP) {
    addLane(lanes, "Compliance", "must resolve the sanctions stop under P-04");
    return lanes;
  }

  addLane(lanes, "Finance", "reviews every request under P-03");

  if (SECURITY_FIELDS.some((field) => ["yes", "unknown"].includes(record[field]))) {
    addLane(lanes, "Security", "software, data, system, or credential access is yes or unknown under P-03");
  }

  if (record.contractDeviation === "yes") {
    addLane(lanes, "Legal", "contract deviation is yes under P-03");
  }

  if (record.sanctionsScreeningResult !== "clear") {
    addLane(lanes, "Compliance", "sanctions screening is not clear under P-03");
  }

  return lanes;
}

function policyIds(outcome) {
  const ids = ["P-01", "P-02", "P-03"];
  if (outcome === OUTCOMES.STOP) ids.push("P-04");
  ids.push("P-05", "P-06");
  return ids;
}

function confirmedFacts(record) {
  const fields = [
    "businessOwner",
    "serviceDescription",
    "taxDocumentStatus",
    "duplicateCheckResult",
    "sanctionsScreeningResult",
    ...SECURITY_FIELDS,
    "contractDeviation",
    "rushRequested"
  ];

  return fields
    .filter((field) => field in record)
    .map((field) => ({ field, value: record[field] }));
}

export function reviewVendor(record) {
  if (!record || typeof record !== "object" || Array.isArray(record)) {
    throw new TypeError("A vendor record object is required.");
  }

  const missing = REQUIRED_FIELDS.map((field) => fieldIssue(field, record[field])).filter(
    Boolean
  );
  const sanctionsStop = ["possible_match", "confirmed_match"].includes(
    record.sanctionsScreeningResult
  );
  const unresolvedDuplicate = ["possible_match", "confirmed_duplicate"].includes(
    record.duplicateCheckResult
  );
  const duplicateNeedsResolution = record.duplicateCheckResult !== "no_match";

  if (unresolvedDuplicate) {
    missing.push({
      field: "duplicateCheckResult",
      question: "Procurement Operations must resolve the duplicate result; the approved excerpts do not define a clearance rule."
    });
  }

  const outcome = sanctionsStop
    ? OUTCOMES.STOP
    : missing.length > 0
      ? OUTCOMES.CLARIFY
      : OUTCOMES.PASS;
  const lanes = reviewLanes(record, outcome);

  let nextOwner;
  let nextAction;
  if (outcome === OUTCOMES.STOP) {
    nextOwner = "Compliance";
    nextAction = "Resolve the sanctions-screening match before any further onboarding work.";
  } else if (outcome === OUTCOMES.CLARIFY) {
    nextOwner = duplicateNeedsResolution ? "Procurement Operations" : "Business owner";
    nextAction = duplicateNeedsResolution
      ? "Resolve the duplicate result and coordinate any additional missing information."
      : "Answer the focused questions; Procurement then re-runs the review packet.";
  } else {
    nextOwner = "Procurement";
    nextAction = "Route the complete draft packet to the named human review lanes.";
  }

  return {
    outcome,
    vendorId: record.vendorId ?? "UNKNOWN",
    requestId: record.requestId ?? "UNKNOWN",
    legalName: record.legalName ?? "Unknown vendor",
    confirmedFacts: confirmedFacts(record),
    missing,
    policyIds: policyIds(outcome),
    lanes,
    nextOwner,
    nextAction,
    authorityStatement:
      "No external action was taken. PASS means ready for human review, not approval.",
    frameworkStatement:
      "The AI-Native Operating Framework organizes the business questions; approved Northstar policy determines this result."
  };
}

function scalar(value) {
  return typeof value === "boolean" ? String(value) : value;
}

export function formatReviewPacket(review) {
  const lines = [
    `# Vendor Review: ${review.vendorId}`,
    "",
    `**Result: ${review.outcome}**`,
    "",
    `- Vendor: ${review.vendorId} — ${review.legalName}`,
    `- Request: ${review.requestId}`,
    "",
    "## Confirmed facts",
    "",
    ...review.confirmedFacts.map(({ field, value }) => `- \`${field}\` = \`${scalar(value)}\``),
    "",
    "## Missing or conflicting information",
    "",
    ...(review.missing.length
      ? review.missing.map(({ field, question }) => `- \`${field}\`: ${question}`)
      : ["- None."]),
    "",
    "## Applicable rules",
    "",
    `- ${review.policyIds.join(", ")}`,
    "",
    "## Required human review lanes",
    "",
    ...review.lanes.map(({ name, reason }) => `- ${name}: ${reason}.`),
    "",
    "## Next human owner and action",
    "",
    `- ${review.nextOwner}: ${review.nextAction}`,
    "",
    "## Authority and framework boundary",
    "",
    `- ${review.authorityStatement}`,
    `- ${review.frameworkStatement}`
  ];

  return `${lines.join("\n")}\n`;
}
