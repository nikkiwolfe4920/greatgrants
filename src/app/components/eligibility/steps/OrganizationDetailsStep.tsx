import { Users, AlertTriangle, Info, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/app/components/ui/button";
import { EmptyFieldRow, FilledFieldRow, MissingFieldRow } from "@/app/components/eligibility/EditableField";
import type { OrgDetailField } from "@/data/eligibilityAssessmentData";

interface OrganizationDetailsStepProps {
  fields: OrgDetailField[];
  onUpdateField: (key: string, value: string) => void;
  onBack: () => void;
  onContinue: () => void;
  /** Disables the "Account Settings → Organization Profile" link with a not-allowed cursor — it would otherwise navigate off the locked demo. See EligibilityAssessmentPage. */
  demoLocked?: boolean;
  /** Hides the footer Continue button — the modal header renders it instead (sticky, top right). */
  hideContinue?: boolean;
  /** Footer Continue is disabled until the required UEI is saved. Defaults to true. */
  canContinue?: boolean;
}

const GROUP_LABELS: Record<OrgDetailField["group"], string> = {
  identity: "Organization Identity",
  address: "Address",
  financial: "Organizational & Financial Details",
  narrative: "Narrative Fields",
};

const GROUP_ORDER: OrgDetailField["group"][] = ["identity", "address", "financial", "narrative"];

/**
 * Step 2 — Organization Details. Styled on Figma node 12683:25174, but with
 * the "Missing Details" module promoted above the filled fields and its
 * inputs entered inline (no separate modal), per request.
 */
export function OrganizationDetailsStep({
  fields,
  onUpdateField,
  onBack,
  onContinue,
  demoLocked = false,
  hideContinue = false,
  canContinue = true,
}: OrganizationDetailsStepProps) {
  // Only the UEI is a headline "Missing Details" item (yellow, open input).
  // Every other empty field sits in its own group as a compact "Missing
  // details" row with an edit icon.
  const missingFields = fields.filter((f) => !f.filled && f.key === "uei");
  const groups = GROUP_ORDER.map((group) => ({
    group,
    fields: fields.filter((f) => f.group === group && (f.filled || f.key !== "uei")),
  })).filter((g) => g.fields.length > 0);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-[33px]">
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
          <Users className="size-5 text-teal-600" />
        </div>
        <div>
          <p className="text-xs font-normal text-gray-500 uppercase tracking-[0.3px]" style={{ fontFamily: "Cabin, sans-serif" }}>
            Step 2 of 6
          </p>
          <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
            Organization Details
          </h3>
        </div>
      </div>

      <div className="pt-6">
        <p className="text-sm text-gray-600" style={{ fontFamily: "Cabin, sans-serif" }}>
          {"We've automatically pulled the following from your organization profile. Fill in what's missing below, or hover over any field to edit it."}
        </p>

        <div className="pt-2 space-y-6">
          {missingFields.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 pb-2">
                <AlertTriangle className="size-3.5 text-amber-700" />
                <p className="text-xs font-semibold text-amber-700 uppercase tracking-[0.3px]" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Missing Details
                </p>
              </div>
              <div className="space-y-2">
                {missingFields.map((field) => (
                  <MissingFieldRow
                    key={field.key}
                    label={field.label}
                    required
                    onSave={(value) => onUpdateField(field.key, value)}
                  />
                ))}
              </div>
            </div>
          )}

          {groups.map(({ group, fields: groupFields }) => (
            <div key={group}>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.3px] pb-2" style={{ fontFamily: "Cabin, sans-serif" }}>
                {GROUP_LABELS[group]}
              </p>
              <div className="space-y-2">
                {groupFields.map((field) =>
                  !field.filled ? (
                    <EmptyFieldRow
                      key={field.key}
                      label={field.label}
                      multiline={field.type === "textarea"}
                      onSave={(value) => onUpdateField(field.key, value)}
                    />
                  ) : (
                  <FilledFieldRow
                    key={field.key}
                    label={field.label}
                    value={field.value}
                    multiline={field.type === "textarea"}
                    onSave={(value) => onUpdateField(field.key, value)}
                  />
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg p-[13px] flex items-center gap-2">
          <Info className="size-4 text-blue-700 shrink-0" />
          <p className="text-xs text-blue-700" style={{ fontFamily: "Cabin, sans-serif" }}>
            Need to update more details? Go to{" "}
            {demoLocked ? (
              <span
                aria-disabled="true"
                title="This is a locked demo — this link can't navigate away"
                className="font-semibold cursor-not-allowed"
              >
                Account Settings → Organization Profile
              </span>
            ) : (
              <Link to="/organization" className="font-semibold hover:underline">
                Account Settings → Organization Profile
              </Link>
            )}
            .
          </p>
        </div>
      </div>

      <div className="pt-8">
        <div className="border-t border-gray-100 pt-[25px] flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="gap-1.5 text-gray-500">
            <ArrowLeft className="size-4" />
            Back
          </Button>
          {!hideContinue && (
            <Button
              onClick={onContinue}
              disabled={!canContinue}
              className={canContinue ? "bg-teal-600 hover:bg-teal-700 text-white gap-1.5" : "bg-gray-100 text-gray-400 gap-1.5 cursor-not-allowed"}
            >
              Continue
              <ArrowRight className="size-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
