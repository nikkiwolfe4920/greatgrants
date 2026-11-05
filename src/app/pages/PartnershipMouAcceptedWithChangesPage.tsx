import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import {
  PartnerCardHeader,
  PartnerDetailsStrip,
  PartnershipPageShell,
  StatusBanner,
} from "@/app/components/partner-information/PartnershipPageShell";
import { FeedbackNotesCard } from "@/app/components/partner-information/FeedbackNotesCard";
import {
  InformationRequestForm,
  type InformationRequestState,
} from "@/app/components/partner-information/InformationRequestForm";
import { mockPartnerApplications } from "@/data/partnerApplications";
import { MOU_APPLICATION_ID, MOU_WITH_CHANGES, PREFILLED_INFORMATION } from "@/data/partnerMou";

/**
 * /partnership-applications-mou-accepted-withchanges — the lead applicant
 * approved the Information Request with changes (Figma node 17100:48294). The
 * notes sit at the top and the previously sent information is prefilled and
 * editable. "Resubmit" opens a confirmation modal (17116:51551); confirming
 * moves to the resubmitted state (17116:51602): step 3 is current again, the
 * notes go away and the information is shown read-only.
 */
export function PartnershipMouAcceptedWithChangesPage() {
  const app = mockPartnerApplications.find((a) => a.id === MOU_APPLICATION_ID)!;
  const [expanded, setExpanded] = useState(true);
  const [info, setInfo] = useState<InformationRequestState>({ values: PREFILLED_INFORMATION });
  const detailsId = `partner-details-${app.id}`;
  const { reviewedAt, reviewedBy, notes } = MOU_WITH_CHANGES;
  const resubmitted = !!info.sentOn;

  return (
    <PartnershipPageShell>
      <div className="bg-white rounded-lg border border-gray-200">
        <PartnerCardHeader
          app={app}
          expanded={expanded}
          onToggle={() => setExpanded((e) => !e)}
          detailsId={detailsId}
          badges={
            resubmitted ? (
              <Badge className="bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-50">Sent for approval</Badge>
            ) : (
              <Badge className="bg-red-50 text-red-700 border-red-300 font-semibold hover:bg-red-50">
                <AlertCircle aria-hidden="true" />
                Changes Requested
              </Badge>
            )
          }
        />

        {expanded && (
          <div id={detailsId} className="p-6 space-y-5">
            {!resubmitted && (
              <>
                <StatusBanner tone="success" icon={<CheckCircle2 className="w-5 h-5" />} title="Information approved with changes">
                  {reviewedBy} reviewed your information and needs changes before the partnership can move forward.
                </StatusBanner>
                <FeedbackNotesCard
                  from={reviewedBy}
                  at={reviewedAt}
                  reason={notes.reason}
                  fixes={notes.fixes}
                  nextSteps={notes.nextSteps}
                />
              </>
            )}
            <div className="space-y-6">
              <PartnerDetailsStrip app={app} includeInformationDue={false} />
              <hr className="border-gray-200" />
              <InformationRequestForm
                app={app}
                state={info}
                onChange={(patch) => setInfo(patch)}
                resubmission={{ reviewedAt }}
              />
            </div>
          </div>
        )}
      </div>
    </PartnershipPageShell>
  );
}
