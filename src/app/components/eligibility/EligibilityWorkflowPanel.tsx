import { useEffect, useRef, useState } from "react";
import { StepperHeader } from "@/app/components/eligibility/StepperHeader";
import { ProgramAssociationStep } from "@/app/components/eligibility/steps/ProgramAssociationStep";
import { OrganizationDetailsStep } from "@/app/components/eligibility/steps/OrganizationDetailsStep";
import { FinancialInfoStep } from "@/app/components/eligibility/steps/FinancialInfoStep";
import { PolicyInfoStep } from "@/app/components/eligibility/steps/PolicyInfoStep";
import { EligibilityLoader } from "@/app/components/eligibility/EligibilityLoader";
import { EligibilityReport } from "@/app/components/eligibility/EligibilityReport";
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
    if (showReport) onReportGenerated?.(Date.now());
  }, [showReport, onReportGenerated]);

  const handleUpdateOrgField = (key: string, value: string) => {
    setOrgFields((prev) => prev.map((f) => (f.key === key ? { ...f, value, filled: value.trim() !== "" } : f)));
  };

  const handleCheckEligibility = () => {
    onAnchorScroll?.();
    setIsSubmitting(true);
    submitTimeoutRef.current = setTimeout(() => {
      setIsSubmitting(false);
      setShowReport(true);
      // Re-anchor once the NOFO Analysis / Overall NOFO Fit report actually
      // mounts — the loader can run long enough for the user to scroll away,
      // so the click-time scroll above isn't enough to guarantee the report
      // opens at the top, anchored on the "Eligibility Assessment" heading.
      onAnchorScroll?.();
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
