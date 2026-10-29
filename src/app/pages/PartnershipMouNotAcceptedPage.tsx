import { useState } from "react";
import { AlertCircle, XCircle } from "lucide-react";
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
import { MOU_APPLICATION_ID, MOU_NOT_ACCEPTED, PREFILLED_INFORMATION } from "@/data/partnerMou";

/**
 * /partnership-applications-mou-notaccepted — same page and card pattern as
 * /partnership-applications, in the state after the lead applicant did not
 * accept the Information Request. Step 3 shows as not accepted, the lead
 * applicant's notes sit at the top, and the previously sent information is
 * prefilled and editable so it can be resubmitted for review.
 */
export function PartnershipMouNotAcceptedPage() {
  const app = mockPartnerApplications.find((a) => a.id === MOU_APPLICATION_ID)!;
  const [expanded, setExpanded] = useState(true);
  const [info, setInfo] = useState<InformationRequestState>({ values: PREFILLED_INFORMATION });
  const detailsId = `partner-details-${app.id}`;
  const { notAcceptedAt, reviewedBy, notes } = MOU_NOT_ACCEPTED;
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
                <StatusBanner tone="danger" icon={<XCircle className="w-5 h-5" />} title="Information not accepted">
                  {reviewedBy} reviewed your information and needs changes before the partnership can move forward.
                </StatusBanner>
                <FeedbackNotesCard
                  from={reviewedBy}
                  at={notAcceptedAt}
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
                resubmission={{ notAcceptedAt }}
              />
            </div>
          </div>
        )}
      </div>
    </PartnershipPageShell>
  );
}
