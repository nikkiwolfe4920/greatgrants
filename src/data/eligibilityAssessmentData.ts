// Mock data backing the /eligibility-assessment workflow.
// Modeled on the "Advancing Global Health — Child Development, Care, and
// Protection Addendum" NOFO (U.S. Dept. of State, Bureau of Global Health
// Security and Diplomacy).

export interface EligibilityProgram {
  id: string;
  name: string;
  description: string;
}

export const eligibilityPrograms: EligibilityProgram[] = [
  {
    id: "child-protection-systems",
    name: "Child Protection Systems Initiative",
    description:
      "Strengthening national child protection frameworks and workforce in Sub-Saharan Africa.",
  },
  {
    id: "family-based-care-reform",
    name: "Family-Based Care Reform Project",
    description:
      "Expanding kinship and foster care alternatives to residential institutions in Southeast Asia.",
  },
];

export type OrgFieldType = "text" | "date" | "textarea";

export interface OrgDetailField {
  key: string;
  label: string;
  value: string;
  filled: boolean;
  type?: OrgFieldType;
  group: "identity" | "address" | "financial" | "narrative";
  required?: boolean;
  helper?: string; // e.g. word counter suffix
}

// 22 fields total across the 4 groups the user specified; 6 start out
// "missing" so the workflow has something real to demo inline-editing on.
export const orgDetailFields: OrgDetailField[] = [
  // Organization Identity
  { key: "legalName", label: "Legal Organization Name", value: "Global Child Futures Initiative", filled: true, group: "identity", required: true },
  { key: "dbaName", label: "DBA Name", value: "", filled: false, group: "identity" },
  { key: "ein", label: "EIN (Employer Identification Number)", value: "84-3021997", filled: true, group: "identity" },
  { key: "uei", label: "Unique Entity Identifier (UEI)", value: "", filled: false, group: "identity" },
  { key: "website", label: "Organization Website", value: "https://globalchildfutures.org", filled: true, group: "identity" },
  // Address
  { key: "street", label: "Street Address", value: "1420 K Street NW, Suite 700", filled: true, group: "address", required: true },
  { key: "city", label: "City", value: "Washington", filled: true, group: "address", required: true },
  { key: "state", label: "State", value: "District of Columbia", filled: true, group: "address", required: true },
  { key: "zip", label: "ZIP Code", value: "20005", filled: true, group: "address", required: true },
  { key: "country", label: "Country", value: "United States", filled: true, group: "address", required: true },
  // Organizational / Financial Details
  { key: "yearFounded", label: "Year Founded", value: "2011", filled: true, group: "financial" },
  { key: "annualBudget", label: "Annual Budget", value: "$4.2M", filled: true, group: "financial" },
  { key: "totalRevenue", label: "Total Revenue", value: "", filled: false, group: "financial" },
  { key: "totalExpenses", label: "Total Expenses", value: "", filled: false, group: "financial" },
  { key: "netAssets", label: "Net Assets", value: "", filled: false, group: "financial" },
  { key: "volunteerHours", label: "Annual Volunteer Hours", value: "3,400", filled: true, group: "financial" },
  { key: "numVolunteers", label: "Number of Volunteers", value: "62", filled: true, group: "financial" },
  { key: "fiscalYearEnd", label: "Fiscal Year End", value: "", filled: false, group: "financial", type: "date" },
  { key: "lastAuditDate", label: "Last Audit Date", value: "June 30, 2025", filled: true, group: "financial", type: "date" },
  { key: "religiousDenomination", label: "Religious Denomination (if applicable)", value: "N/A", filled: true, group: "financial" },
  // Narrative Fields
  { key: "missionStatement", label: "Mission Statement", value: "Global Child Futures Initiative strengthens national child protection systems and expands family-based care alternatives so every child grows up safe, cared for, and connected to family.", filled: true, group: "narrative", type: "textarea" },
  { key: "visionStatement", label: "Vision Statement", value: "A world where no child is raised in an institution when a safe, permanent family is possible.", filled: true, group: "narrative", type: "textarea" },
];

export type YesNoUnsure = "yes" | "no" | "unsure" | "";

export interface FinancialInfoState {
  orgRegistrationType: "501c3-church" | "501c3-nonprofit" | "other-nonprofit" | "for-profit" | "";
  cfr200Compliant: YesNoUnsure;
  financialSystemTracking: YesNoUnsure;
  timeEffortReporting: YesNoUnsure;
  indirectCostAgreement: string;
  costShareLiquidity: YesNoUnsure;
}

export const defaultFinancialInfo: FinancialInfoState = {
  orgRegistrationType: "",
  cfr200Compliant: "",
  financialSystemTracking: "",
  timeEffortReporting: "",
  indirectCostAgreement: "",
  costShareLiquidity: "",
};

export interface PolicyInfoState {
  complianceTrackingSoftware: YesNoUnsure;
  federalDataTracking: YesNoUnsure;
  demographicDataCollection: YesNoUnsure;
  internalControlsDocs: YesNoUnsure;
  procurementPolicies: YesNoUnsure;
  timeEffortPolicies: YesNoUnsure;
  conflictOfInterestPolicies: YesNoUnsure;
}

export const defaultPolicyInfo: PolicyInfoState = {
  complianceTrackingSoftware: "",
  federalDataTracking: "",
  demographicDataCollection: "",
  internalControlsDocs: "",
  procurementPolicies: "",
  timeEffortPolicies: "",
  conflictOfInterestPolicies: "",
};

export type ActionItemPriority = "high" | "medium" | "optional";

export interface ActionItem {
  id: string;
  title: string;
  description: string;
  priority: ActionItemPriority;
  /** Pre-resolved from answers collected earlier in the workflow. */
  completed: boolean;
}

export const eligibilityActionItems: ActionItem[] = [
  {
    id: "financial-capacity",
    title: "Strengthen Back-Office Financial Capacity",
    description:
      "Hire or contract a federal grants finance specialist. Document your cost accounting policies before submitting.",
    priority: "high",
    completed: false,
  },
  {
    id: "geographic-focus",
    title: "Define Your Geographic Focus",
    description:
      "Research GHSD priority countries and select target geographies. Your SOI must name specific countries.",
    priority: "high",
    completed: false,
  },
  {
    id: "ghsd-strategy",
    title: "Frame Work Within GHSD Strategy",
    description:
      "Review the America First Global Health Strategy and explicitly connect your concept to its pillars: self-reliance, health systems strengthening, efficiency, and American safety.",
    priority: "medium",
    completed: false,
  },
  {
    id: "government-engagement",
    title: "Document Government Engagement",
    description:
      "Identify any past collaboration with ministries, social welfare departments, or local governments and describe these in your organizational capacity narrative.",
    priority: "medium",
    completed: true,
  },
  {
    id: "sam-gov-status",
    title: "Register or Verify SAM.gov Status",
    description:
      "Confirm your SAM.gov registration is active and UEI is current. Must be in place before Phase 2. Allow 2–4 weeks for new registrations.",
    priority: "medium",
    completed: true,
  },
  {
    id: "mel-framework",
    title: "Develop a MEL Framework",
    description:
      "Designate a MEL lead and create a draft monitoring and evaluation plan with measurable indicators and data collection methods.",
    priority: "medium",
    completed: false,
  },
  {
    id: "federal-compliance",
    title: "Build Federal Compliance Readiness",
    description:
      "Document past grant management processes and consider hiring a federal grants manager. First-time federal awardees benefit from pre-award technical assistance.",
    priority: "medium",
    completed: false,
  },
  {
    id: "federal-reporting",
    title: "Assess Federal Reporting Capacity",
    description:
      "Evaluate your team's ability to manage quarterly financial and performance reports. Consider tools or staff additions if capacity is limited.",
    priority: "optional",
    completed: false,
  },
  {
    id: "soi-prep",
    title: "Prepare Your 5-Page Statement of Interest",
    description:
      "Focus on: (1) concept overview, (2) organizational capacity, (3) target countries, (4) expected outcomes, and (5) GHSD alignment. Due May 31, 11:59 pm EST.",
    priority: "optional",
    completed: false,
  },
];

export interface PassItem {
  id: string;
  title: string;
  description: string;
}

export const eligibilityPassItems: PassItem[] = [
  {
    id: "program-linked",
    title: "Program association linked",
    description: "A program is associated with this grant application.",
  },
  {
    id: "org-registered",
    title: "Organization registered",
    description: "Your organization profile is active and complete.",
  },
  {
    id: "nonprofit-confirmed",
    title: "Nonprofit status confirmed",
    description: "501(c)(3) is not required but your status is noted.",
  },
  {
    id: "intl-experience",
    title: "International program experience",
    description: "Your organization has international program delivery experience.",
  },
  {
    id: "child-protection-expertise",
    title: "Child protection expertise",
    description: "Direct child protection experience is a strong fit factor.",
  },
];
