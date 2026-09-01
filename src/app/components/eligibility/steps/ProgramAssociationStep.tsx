import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { FolderOpen, FolderPlus, ArrowLeft, ArrowRight, Check, AlertCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { eligibilityPrograms } from "@/data/eligibilityAssessmentData";
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
 * state) and 12683:23953 (selected state). Selecting a program drawers
 * open its own row to reveal a health-check "Improve your program" alert
 * when the program's profile is incomplete — Figma node 12827:24434 — the
 * "create new program" confirmation modal is Figma node 12827:29300.
 *
 * The alert's "Improve your program" CTA routes to /project-details (the
 * "My Programs" section of the app) so the user can fill in the missing
 * Program Description, Documents, and Partnerships fields it lists.
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

  const handleImproveProgram = () => navigate("/project-details");

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
            const hasImprovementAlert = isSelected && !!program.improvementItems?.length;
            return (
              <div
                key={program.id}
                className={`w-full rounded-lg border-2 transition-colors ${
                  isSelected ? "border-teal-600 bg-teal-50" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => onSelectProgram(program.id)}
                  className="w-full text-left p-[18px] flex items-start gap-3"
                >
                  <div
                    className={`mt-0.5 size-5 rounded-full border-2 shrink-0 flex items-center justify-center ${
                      isSelected ? "border-teal-600 bg-teal-600" : "border-gray-300"
                    }`}
                  >
                    {isSelected && <Check className="size-3 text-white" strokeWidth={3} />}
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

                <AnimatePresence>
                  {hasImprovementAlert && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-[18px] pb-[18px]">
                        <div className="rounded-lg border border-amber-200 bg-amber-50 p-[13px]">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="size-5 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-red-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                                Improve your program
                              </p>
                              <ul
                                className="list-disc pl-[18px] pt-2 space-y-0 text-xs text-amber-900"
                                style={{ fontFamily: "Cabin, sans-serif" }}
                              >
                                {program.improvementItems!.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                              <Button
                                type="button"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate("/project-details");
                                }}
                                className="mt-3 bg-amber-600 hover:bg-amber-700 text-white gap-1.5"
                              >
                                Improve your program
                                <ArrowRight className="size-3.5" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Button
                          onClick={handleImproveProgram}
                          size="sm"
                          className="mt-3 bg-teal-600 hover:bg-teal-700 text-white gap-1.5"
                        >
                          Improve Program
                          <ArrowRight className="size-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
