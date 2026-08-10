import { useEffect, useRef, useState } from "react";
import { StepperHeader } from "@/app/components/eligibility/StepperHeader";
import { ProgramAssociationStep, NEW_PROGRAM_OPTION } from "@/app/components/eligibility/steps/ProgramAssociationStep";
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
}

/**
 * Orchestrates the 4-step eligibility workflow: Program Association →
 * Organization Details → Financial Info → Policy Info → (loader) → report.
 * Owns all step state so the individual step components stay presentational.
 */
export function EligibilityWorkflowPanel({ onExit }: EligibilityWorkflowPanelProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [programId, setProgramId] = useState("");
  const [newProgramName, setNewProgramName] = useState("");
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

  const canContinueStep1 =
    programId !== "" && (programId !== NEW_PROGRAM_OPTION || newProgramName.trim() !== "");

  const handleUpdateOrgField = (key: string, value: string) => {
    setOrgFields((prev) => prev.map((f) => (f.key === key ? { ...f, value, filled: value.trim() !== "" } : f)));
  };

  const handleCheckEligibility = () => {
    setIsSubmitting(true);
    submitTimeoutRef.current = setTimeout(() => {
      setIsSubmitting(false);
      setShowReport(true);
    }, 1600);
  };

  const handleToggleActionItem = (id: string) => {
    setActionItems((prev) => prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)));
  };

  const handleRetake = () => {
    setShowReport(false);
    setCurrentStep(1);
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
        onRetake={handleRetake}
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
          newProgramName={newProgramName}
          onChangeNewProgramName={setNewProgramName}
          onBack={onExit}
          onContinue={() => setCurrentStep(2)}
          canContinue={canContinueStep1}
        />
      )}

      {currentStep === 2 && (
        <OrganizationDetailsStep
          fields={orgFields}
          onUpdateField={handleUpdateOrgField}
          onBack={() => setCurrentStep(1)}
          onContinue={() => setCurrentStep(3)}
        />
      )}

      {currentStep === 3 && (
        <FinancialInfoStep
          value={financialInfo}
          onChange={setFinancialInfo}
          onBack={() => setCurrentStep(2)}
          onContinue={() => setCurrentStep(4)}
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
