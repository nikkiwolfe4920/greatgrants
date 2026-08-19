import { useEffect, useRef, useState } from "react";
import { StepperHeader } from "@/app/components/eligibility/StepperHeader";
import { AssessmentUsageMeter } from "@/app/components/eligibility/AssessmentUsageMeter";
import { ProgramAssociationStep } from "@/app/components/eligibility/steps/ProgramAssociationStep";
import { OrganizationDetailsStep } from "@/app/components/eligibility/steps/OrganizationDetailsStep";
import { FinancialInfoStep } from "@/app/components/eligibility/steps/FinancialInfoStep";
import { PolicyInfoStep } from "@/app/components/eligibility/steps/PolicyInfoStep";
import { EligibilityLoader } from "@/app/components/eligibility/EligibilityLoader";
import { EligibilityReport } from "@/app/components/eligibility/EligibilityReport";
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
} from "@/data/eligibilityAssessmentData";

const STEP_LABELS = [
  { label: "Program\nAssociation" },
  { label: "Organization\nDetails" },
  { label: "Financial\nInfo" },
  { label: "Policy\nInfo" },
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
}

/**
 * Orchestrates the 4-step eligibility workflow: Program Association →
 * Organization Details → Financial Info → Policy Info → (loader) → report.
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
}: EligibilityWorkflowPanelProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [programId, setProgramId] = useState("");
  const [orgFields, setOrgFields] = useState<OrgDetailField[]>(orgDetailFields);
  const [financialInfo, setFinancialInfo] = useState<FinancialInfoState>(defaultFinancialInfo);
  const [policyInfo, setPolicyInfo] = useState<PolicyInfoState>(defaultPolicyInfo);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [actionItems, setActionItems] = useState<ActionItem[]>(eligibilityActionItems);
  const submitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { usedCount, limit, recordCompletion } = useAssessmentUsage();

  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) clearTimeout(submitTimeoutRef.current);
    };
  }, []);

  const canContinueStep1 = programId !== "";

  useEffect(() => {
    onProgramLinked?.(canContinueStep1);
  }, [canContinueStep1, onProgramLinked]);

  useEffect(() => {
    if (showReport) {
      onReportGenerated?.(Date.now());
      // One full run through the workflow = one used assessment, marked the
      // moment the report is generated so "completed" and "used" line up.
      recordCompletion(grantId, grantTitle);
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

  const handleToggleActionItem = (id: string) => {
    setActionItems((prev) => prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)));
  };

  if (isSubmitting) {
    return <EligibilityLoader />;
  }

  if (showReport) {
    return (
      <EligibilityReport
        actionItems={actionItems}
        passItems={eligibilityPassItems}
        onToggleActionItem={handleToggleActionItem}
        onStartApplication={() => onStartApplication?.()}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p className="text-xs text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
          Completing this assessment will use 1 of your plan's included assessments.
        </p>
        <AssessmentUsageMeter usedCount={usedCount} limit={limit} compact />
      </div>

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
        />
      )}

      {currentStep === 4 && (
        <PolicyInfoStep
          value={policyInfo}
          onChange={setPolicyInfo}
          onBack={() => setCurrentStep(3)}
          onCheckEligibility={handleCheckEligibility}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
}
