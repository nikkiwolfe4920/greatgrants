// Mock data backing the /eligibility-assessment-sub preview — the same
// "Advancing Global Health" NOFO report as /eligibility-assessment, but
// showing a below-70% overall fit so the "Request to Join" sub-recipient
// path (see SubRecipientCallout) has a realistic scorecard to sit next to.
import type { FitCategory } from "@/app/components/OverallNofoFitScorecard";

export const subRecipientOverallScore = 58;

export const subRecipientCategories: FitCategory[] = [
  { label: "Eligibility", score: 60 },
  { label: "Mission Fit", score: 78 },
  { label: "Program Alignment", score: 55 },
  { label: "Capacity", score: 38 },
  { label: "Compliance", score: 45 },
  { label: "Competitiveness", score: 30 },
];

export const subRecipientRisks: string[] = [
  "Organizational capacity falls below what's typically expected of a prime applicant on awards this size.",
  "No prior experience as a direct recipient on a U.S. federal cooperative agreement.",
  "Financial systems are not yet fully CFR 200 compliant.",
  "This addendum draws a competitive field — the current profile is unlikely to stand out as a prime applicant.",
];
