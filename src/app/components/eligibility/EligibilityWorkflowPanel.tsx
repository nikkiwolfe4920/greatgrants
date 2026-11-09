import { useEffect, useRef, useState } from "react";
import { ArrowRight, ShieldCheck, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { StepperHeader } from "@/app/components/eligibility/StepperHeader";
import { ProgramAssociationStep } from "@/app/components/eligibility/steps/ProgramAssociationStep";
import { OrganizationDetailsStep } from "@/app/components/eligibility/steps/OrganizationDetailsStep";
import { GrantRequirementsStep } from "@/app/components/eligibility/steps/GrantRequirementsStep";
import { FinancialInfoStep } from "@/app/components/eligibility/steps/FinancialInfoStep";
import { PolicyInfoStep } from "@/app/components/eligibility/steps/PolicyInfoStep";
import { EligibilityLoader } from "@/app/components/eligibility/EligibilityLoader";
import { EligibilityReport, type EligibilityDecision } from "@/app/components/eligibility/EligibilityReport";
import type { FitCategory, GoStatus } from "@/app/components/OverallNofoFitScorecard";
import { useAssessmentUsage } from "@/hooks/useAssessmentUsage";
import {
  orgDetailFields,
  defaultFinancialInfo,
  defaultPolicyInfo,
  eligibilityActionItems,
  eligibilityPassItems,
  type OrgDetailField,
  type FinancialInfoState,
  type PolicyInfoState,
  type ActionItem,
  type RequirementAnswer,
  grantRequirements,
} from "@/data/eligibilityAssessmentData";

const STEP_LABELS = [
  { label: "Program\nAssociation" },
  { label: "Organization\nDetails" },
  { label: "Financial\nInfo" },
  { label: "Policy\nInfo" },
  { label: "Grant\nRequirements" },
  { label: "Eligibility\nAssessment" },
];

interface EligibilityWorkflowPanelProps {
  /** Grant this run of the workflow is for — recorded against the subscription's assessment usage on completion. */
  grantId: string;
  grantTitle: string;
  onExit: () => void;
  /** Fires as soon as a program is selected/named in step 1 (and clears if deselected). */
  onProgramLinked?: (linked: boolean) => void;
  /** Fires once the eligibility report has been generated, with a timestamp (or null when retaking). */
  onReportGenerated?: (generatedAt: number | null) => void;
  onStartApplication?: () => void;
  /** Fires on every Continue / Check My Eligibility / step-1-Back so the page can scroll back up and anchor on the "Eligibility Assessment" heading. */
  onAnchorScroll?: () => void;
  /**
   * Disables every control in this workflow that would navigate away from
   * the locked demo — currently just the two "Start Application" buttons
   * inside the completed report. Used by the locked /eligibility-demo
   * walkthrough (see EligibilityAssessmentPage).
   */
  demoLocked?: boolean;
  /**
   * Hides every "X of N assessments used" display in this workflow — the
   * usage line/pill up top, Policy Info's "this will use assessment N of
   * M" line, and the completed report's "Assessment complete" banner.
   * Used by EligibilityDemoPage so the demo isn't capped at N runs.
   */
  hideAssessmentUsage?: boolean;
  /**
   * Mounts straight into the completed report instead of Step 1 of the
   * form, and skips marking an assessment as used for that initial report
   * (it wasn't actually run) — used by EligibilityAssessmentSubPage to show
   * a fixed below-70% outcome without spending the viewer's quota. A
   * report reached normally afterwards (e.g. Retake) still records usage.
   */
  startWithReport?: boolean;
  /** Category breakdown passed straight through to EligibilityReport. */
  reportCategories?: FitCategory[];
  /** Risks list passed straight through to EligibilityReport. */
  reportRisks?: string[];
  /** Shows the scorecard's numeric overall score + GO/Caution/No-Go badge. */
  showOverallScore?: boolean;
  overallScore?: number;
  reportStatus?: GoStatus;
  /** Swaps both "Start Application" CTAs in the report for SubRecipientCallout. See EligibilityReport. */
  onRequestToJoin?: () => void;
  /**
   * Fires whenever the viewer has (or no longer has) work in progress — a
   * program picked, a later step reached, or a finished report. Drives the
   * page's "Start" → "Continue Eligibility Assessment" CTA labels.
   */
  onStartedChange?: (started: boolean) => void;
  /**
   * Renders inside the Eligibility Assessment modal: adds a sticky header
   * (always in the viewport while the modal body scrolls) with the step's
   * Continue / Check My Eligibility button in the top right, and removes
   * that button from each step's footer.
   */
  modal?: boolean;
}

/**
 * Orchestrates the 6-step eligibility workflow: Program Association →
 * Organization Details → Financial Info → Policy Info → Grant Requirements → (loader) → report.
 * Owns all step state so the individual step components stay presentational.
 */
export function EligibilityWorkflowPanel({
  grantId,
  grantTitle,
  onExit,
  onProgramLinked,
  onReportGenerated,
  onStartApplication,
  onAnchorScroll,
  demoLocked = false,
  hideAssessmentUsage = false,
  startWithReport = false,
  reportCategories,
  reportRisks,
  showOverallScore,
  overallScore,
  reportStatus,
  onRequestToJoin,
  onStartedChange,
  modal = false,
}: EligibilityWorkflowPanelProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [programId, setProgramId] = useState("");
  const [orgFields, setOrgFields] = useState<OrgDetailField[]>(orgDetailFields);
  const [requirementAnswers, setRequirementAnswers] = useState<Record<string, RequirementAnswer | undefined>>({});
  const [financialInfo, setFinancialInfo] = useState<FinancialInfoState>(defaultFinancialInfo);
  const [policyInfo, setPolicyInfo] = useState<PolicyInfoState>(defaultPolicyInfo);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReport, setShowReport] = useState(startWithReport);
  const [actionItems, setActionItems] = useState<ActionItem[]>(eligibilityActionItems);
  const submitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { recordCompletion } = useAssessmentUsage();
  // Only the initial `startWithReport` mount should skip recordCompletion —
  // any report reached afterwards (retaking the assessment) is real usage.
  const skipNextUsageRecordRef = useRef(startWithReport);

  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) clearTimeout(submitTimeoutRef.current);
    };
  }, []);

  const canContinueStep1 = programId !== "";

  const started = canContinueStep1 || currentStep > 1 || showReport;
  useEffect(() => {
    onStartedChange?.(started);
  }, [started, onStartedChange]);

  useEffect(() => {
    onProgramLinked?.(canContinueStep1);
  }, [canContinueStep1, onProgramLinked]);

  useEffect(() => {
    if (showReport) {
      onReportGenerated?.(Date.now());
      if (skipNextUsageRecordRef.current) {
        skipNextUsageRecordRef.current = false;
      } else {
        // One full run through the workflow = one used assessment, marked
        // the moment the report is generated so "completed" and "used"
        // line up.
        recordCompletion(grantId, grantTitle);
      }
    }
  }, [showReport, onReportGenerated, recordCompletion, grantId, grantTitle]);

  // onAnchorScroll is a fresh closure on every parent render (it captures
  // the page's scroll-container ref), so it can't go in a dependency array
  // without re-firing on unrelated re-renders — keep the latest one in a
  // ref instead and read it from effects below.
  const onAnchorScrollRef = useRef(onAnchorScroll);
  useEffect(() => {
    onAnchorScrollRef.current = onAnchorScroll;
  }, [onAnchorScroll]);

  // Anchor on the "Eligibility Assessment" heading right as the loading
  // spinner mounts, and again once the report replaces it. Driving this
  // from effects (rather than calling onAnchorScroll inline inside the
  // click handler, before React has actually rendered the spinner) means
  // the scroll always runs against the DOM the user is about to see, not
  // the Step 4 form that's on its way out.
  useEffect(() => {
    if (isSubmitting) onAnchorScrollRef.current?.();
  }, [isSubmitting]);

  useEffect(() => {
    if (showReport) onAnchorScrollRef.current?.();
  }, [showReport]);

  const handleUpdateOrgField = (key: string, value: string) => {
    setOrgFields((prev) => prev.map((f) => (f.key === key ? { ...f, value, filled: value.trim() !== "" } : f)));
  };

  const handleCheckEligibility = () => {
    setIsSubmitting(true);
    submitTimeoutRef.current = setTimeout(() => {
      setIsSubmitting(false);
      setShowReport(true);
    }, 4000);
  };

  // Back to Step 1 with a fresh report next time; answers are kept so the
  // viewer can tweak them rather than start from scratch.
  const handleRetake = () => {
    if (submitTimeoutRef.current) clearTimeout(submitTimeoutRef.current);
    setIsSubmitting(false);
    setShowReport(false);
    setActionItems(eligibilityActionItems);
    setCurrentStep(1);
    onReportGenerated?.(null);
    onAnchorScrollRef.current?.();
  };

  // Same "answered" rules the step footers use (Yes / No / Unsure all count).
  const financialComplete =
    financialInfo.orgRegistrationType !== "" &&
    financialInfo.cfr200Compliant !== "" &&
    financialInfo.financialSystemTracking !== "" &&
    financialInfo.timeEffortReporting !== "" &&
    financialInfo.indirectCostAgreement.trim() !== "" &&
    financialInfo.costShareLiquidity !== "";
  const policyComplete = [
    policyInfo.complianceTrackingSoftware,
    policyInfo.federalDataTracking,
    policyInfo.demographicDataCollection,
    policyInfo.internalControlsDocs,
    policyInfo.procurementPolicies,
    policyInfo.timeEffortPolicies,
    policyInfo.conflictOfInterestPolicies,
  ].every((v) => v !== "");

  const advance = (to: number) => {
    onAnchorScroll?.();
    setCurrentStep(to);
  };
  const headerAction =
    currentStep === 1
      ? { label: "Continue", enabled: canContinueStep1, onClick: () => advance(2) }
      : currentStep === 2
        ? { label: "Continue", enabled: true, onClick: () => advance(3) }
        : currentStep === 3
          ? { label: "Continue", enabled: financialComplete, onClick: () => advance(4) }
          : currentStep === 4
            ? { label: "Continue", enabled: policyComplete, onClick: () => advance(5) }
            : { label: "Check My Eligibility", enabled: true, onClick: handleCheckEligibility };

  // GO only when every Yes / No / Not sure answer in the workflow is Yes and
  // every grant requirement is Met. Anything else is NO GO.
  const yesNoAnswers = [
    financialInfo.cfr200Compliant,
    financialInfo.financialSystemTracking,
    financialInfo.timeEffortReporting,
    financialInfo.costShareLiquidity,
    policyInfo.complianceTrackingSoftware,
    policyInfo.federalDataTracking,
    policyInfo.demographicDataCollection,
    policyInfo.internalControlsDocs,
    policyInfo.procurementPolicies,
    policyInfo.timeEffortPolicies,
    policyInfo.conflictOfInterestPolicies,
  ];
  const requirementAnswerList = grantRequirements.map((r) => requirementAnswers[r.id]);
  const noAnswers = yesNoAnswers.filter((a) => a === "no").length;
  const unmetRequirements = requirementAnswerList.filter((a) => a === "no").length;
  const notSure =
    yesNoAnswers.filter((a) => a !== "yes" && a !== "no").length +
    requirementAnswerList.filter((a) => a !== "yes" && a !== "no").length;
  const decision: EligibilityDecision = {
    isGo: noAnswers + unmetRequirements + notSure === 0,
    noAnswers,
    unmetRequirements,
    notSure,
  };

  const modalHeader = modal ? (
    <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-gray-200 bg-white px-6 py-3">
      <div className="min-w-0">
        <h2 id="eligibility-modal-title" className="truncate text-base font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
          Eligibility Assessment
        </h2>
        <p className="truncate text-xs text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
          {grantTitle}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {!isSubmitting && !showReport && (
          <Button
            onClick={headerAction.onClick}
            disabled={!headerAction.enabled}
            className={
              headerAction.enabled
                ? "bg-teal-600 hover:bg-teal-700 text-white gap-1.5"
                : "bg-gray-100 text-gray-400 gap-1.5 cursor-not-allowed"
            }
          >
            {currentStep === 5 ? <ShieldCheck className="size-4" /> : null}
            {headerAction.label}
            {currentStep === 5 ? null : <ArrowRight className="size-4" />}
          </Button>
        )}
        {showReport && !isSubmitting && !onRequestToJoin && (
          <Button
            onClick={() => {
              if (!demoLocked) onStartApplication?.();
            }}
            aria-disabled={demoLocked || undefined}
            title={demoLocked ? "This is a locked demo — applications can't be started here" : undefined}
            className={`bg-teal-600 text-white ${demoLocked ? "cursor-not-allowed" : "hover:bg-teal-700"}`}
          >
            Start AI Draft
          </Button>
        )}
        <button
          type="button"
          onClick={onExit}
          aria-label="Close"
          className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <X className="size-5" />
        </button>
      </div>
    </div>
  ) : null;

  const wrap = (content: React.ReactNode) =>
    modal ? (
      <>
        {modalHeader}
        <div className="p-6">{content}</div>
      </>
    ) : (
      content
    );

  if (isSubmitting) {
    return wrap(<EligibilityLoader />);
  }

  if (showReport) {
    return wrap(
      <div className="space-y-6">
      <StepperHeader steps={STEP_LABELS.map((s) => ({ label: s.label }))} currentStep={STEP_LABELS.length} />
      <EligibilityReport
        actionItems={actionItems}
        passItems={eligibilityPassItems}
        onStartApplication={() => onStartApplication?.()}
        demoLocked={demoLocked}
        hideAssessmentUsage={hideAssessmentUsage}
        categories={reportCategories}
        risks={reportRisks}
        showScore={showOverallScore}
        overallScore={overallScore}
        status={reportStatus}
        onRequestToJoin={onRequestToJoin}
        onRetake={handleRetake}
        decision={startWithReport ? undefined : decision}
      />
      </div>
    );
  }

  return wrap(
    <div className="space-y-6">
      <StepperHeader steps={STEP_LABELS.map((s) => ({ label: s.label }))} currentStep={currentStep} />

      {currentStep === 1 && (
        <ProgramAssociationStep
          selectedProgramId={programId}
          onSelectProgram={setProgramId}
          onBack={() => {
            onAnchorScroll?.();
            onExit();
          }}
          onContinue={() => {
            onAnchorScroll?.();
            setCurrentStep(2);
          }}
          canContinue={canContinueStep1}
          demoLocked={demoLocked}
          hideContinue={modal}
        />
      )}

      {currentStep === 2 && (
        <OrganizationDetailsStep
          fields={orgFields}
          onUpdateField={handleUpdateOrgField}
          onBack={() => setCurrentStep(1)}
          onContinue={() => {
            onAnchorScroll?.();
            setCurrentStep(3);
          }}
          demoLocked={demoLocked}
          hideContinue={modal}
        />
      )}

      {currentStep === 3 && (
        <FinancialInfoStep
          value={financialInfo}
          onChange={setFinancialInfo}
          onBack={() => setCurrentStep(2)}
          onContinue={() => {
            onAnchorScroll?.();
            setCurrentStep(4);
          }}
          hideContinue={modal}
        />
      )}

      {currentStep === 4 && (
        <PolicyInfoStep
          value={policyInfo}
          onChange={setPolicyInfo}
          onBack={() => setCurrentStep(3)}
          onContinue={() => {
            onAnchorScroll?.();
            setCurrentStep(5);
          }}
          hideContinue={modal}
        />
      )}

      {currentStep === 5 && (
        <GrantRequirementsStep
          requirements={grantRequirements}
          answers={requirementAnswers}
          onAnswer={(id, answer) => setRequirementAnswers((prev) => ({ ...prev, [id]: answer }))}
          onBack={() => setCurrentStep(4)}
          onCheckEligibility={handleCheckEligibility}
          isSubmitting={isSubmitting}
          hideAssessmentUsage={hideAssessmentUsage}
          hideContinue={modal}
        />
      )}
    </div>
  );
}
