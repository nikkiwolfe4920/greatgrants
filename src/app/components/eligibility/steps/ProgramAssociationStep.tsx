import { useState } from "react";
import { useNavigate } from "react-router";
import { FolderOpen, FolderPlus, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { eligibilityPrograms } from "@/data/eligibilityAssessmentData";
import { ProgramSelectedNotice } from "@/app/components/eligibility/ProgramSelectedNotice";
import { CreateProgramDialog } from "@/app/components/eligibility/CreateProgramDialog";

interface ProgramAssociationStepProps {
  selectedProgramId: string;
  onSelectProgram: (id: string) => void;
  onBack: () => void;
  onContinue: () => void;
  canContinue: boolean;
}

/**
 * Step 1 of the eligibility workflow — Figma nodes 12683:23302 (empty
 * state) and 12683:23953 (selected state). The selected-program
 * confirmation banner is Figma node 12827:24450, and the "create new
 * program" confirmation modal is Figma node 12827:29300.
 */
export function ProgramAssociationStep({
  selectedProgramId,
  onSelectProgram,
  onBack,
  onContinue,
  canContinue,
}: ProgramAssociationStepProps) {
  const navigate = useNavigate();
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const selectedProgram = eligibilityPrograms.find((program) => program.id === selectedProgramId);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-[33px]">
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
          <FolderOpen className="size-5 text-teal-600" />
        </div>
        <div>
          <p className="text-xs font-normal text-gray-500 uppercase tracking-[0.3px]" style={{ fontFamily: "Cabin, sans-serif" }}>
            Step 1 of 5
          </p>
          <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
            Program Association
          </h3>
        </div>
      </div>

      <div className="pt-6">
        <p className="text-sm text-gray-600" style={{ fontFamily: "Cabin, sans-serif" }}>
          Select the program you want to associate with this grant application.
        </p>

        <div className="pt-4 space-y-3">
          {eligibilityPrograms.map((program) => {
            const isSelected = selectedProgramId === program.id;
            return (
              <button
                key={program.id}
                type="button"
                onClick={() => onSelectProgram(program.id)}
                className={`w-full text-left rounded-lg border-2 p-[18px] flex items-start gap-3 transition-colors ${
                  isSelected ? "border-teal-600 bg-teal-50" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`mt-0.5 size-5 rounded-full border-2 shrink-0 flex items-center justify-center ${
                    isSelected ? "border-teal-600 bg-teal-600" : "border-gray-300"
                  }`}
                >
                  {isSelected && <div className="size-2 rounded-full bg-white" />}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                    {program.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: "Cabin, sans-serif" }}>
                    {program.description}
                  </p>
                </div>
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setShowCreateDialog(true)}
            className="w-full text-left rounded-lg border-2 border-dashed border-gray-200 hover:border-gray-300 p-[18px] flex items-center gap-3 transition-colors"
          >
            <FolderPlus className="size-4 text-gray-500 shrink-0" />
            <span className="text-sm text-gray-600" style={{ fontFamily: "Cabin, sans-serif" }}>
              I would like to create a new program
            </span>
          </button>

          {selectedProgram && (
            <ProgramSelectedNotice
              name={selectedProgram.name}
              description={selectedProgram.description}
              improvementItems={selectedProgram.improvementItems}
            />
          )}
        </div>
      </div>

      <div className="pt-8">
        <div className="border-t border-gray-100 pt-[25px] flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="gap-1.5 text-gray-500">
            <ArrowLeft className="size-4" />
            Back
          </Button>
          <Button
            onClick={onContinue}
            disabled={!canContinue}
            className={canContinue ? "bg-teal-600 hover:bg-teal-700 text-white gap-1.5" : "bg-gray-100 text-gray-400 gap-1.5 cursor-not-allowed"}
          >
            Continue
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>

      <CreateProgramDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
        onContinue={() => navigate("/project-details")}
      />
    </div>
  );
}
