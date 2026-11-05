import { useState } from "react";
import { XCircle } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import {
  PartnerCardHeader,
  PartnerDetailsStrip,
  PartnershipPageShell,
  StatusBanner,
} from "@/app/components/partner-information/PartnershipPageShell";
import { FeedbackNotesCard } from "@/app/components/partner-information/FeedbackNotesCard";
import { SentSummary } from "@/app/components/partner-information/InformationRequestForm";
import { StepperHeader } from "@/app/components/eligibility/StepperHeader";
import { mockPartnerApplications } from "@/data/partnerApplications";
import { MOU_APPLICATION_ID, MOU_NOT_ACCEPTED, PREFILLED_INFORMATION } from "@/data/partnerMou";

/**
 * /partnership-applications-mou-notaccepted — the lead applicant did not
 * accept the Information Request (Figma node 17292:22130). This is the end of
 * the road, so the page is a read-only record: a "Not Accepted" status, the
 * decision banner and notes, the stepper stopped at a failed step 3, and the
 * information that was sent. For the editable "approved with changes" path see
 * /partnership-applications-mou-accepted-withchanges.
 */
export function PartnershipMouNotAcceptedPage() {
  const app = mockPartnerApplications.find((a) => a.id === MOU_APPLICATION_ID)!;
  const [expanded, setExpanded] = useState(true);
  const detailsId = `partner-details-${app.id}`;
  const { notAcceptedAt, reviewedBy, message, notes } = MOU_NOT_ACCEPTED;
  const decidedOn = app.decision?.decidedOn;

  const steps = [
    { label: "Partnership\nUnder Condition", caption: decidedOn && `Decided on\n${decidedOn}` },
    { label: "Information\nRequest", caption: decidedOn && `Requested:\n${decidedOn}` },
    { label: "Sent for\nApproval", status: "error" as const, caption: `Not accepted:\n${notAcceptedAt}` },
    { label: "Download &\nSign MOU" },
    { label: "Final\nApproval" },
  ];

  return (
    <PartnershipPageShell>
      <div className="bg-white rounded-lg border border-gray-200">
        <PartnerCardHeader
          app={app}
          expanded={expanded}
          onToggle={() => setExpanded((e) => !e)}
          detailsId={detailsId}
          decisionBadge={
            <Badge className="bg-red-50 text-red-700 border-red-300 hover:bg-red-50">Not Accepted</Badge>
          }
        />

        {expanded && (
          <div id={detailsId} className="p-6 space-y-5">
            <StatusBanner tone="danger" icon={<XCircle className="w-5 h-5" />} title="Partnership not accepted">
              {message}
            </StatusBanner>
            <FeedbackNotesCard
              from={reviewedBy}
              at={notAcceptedAt}
              reason={notes.reason}
              fixes={notes.fixes}
              nextSteps={notes.nextSteps}
            />
            <div className="space-y-6">
              <PartnerDetailsStrip app={app} includeInformationDue={false} />
              <hr className="border-gray-200" />
              <div className="space-y-4">
                <StepperHeader steps={steps} currentStep={3} />
                <SentSummary values={PREFILLED_INFORMATION} />
              </div>
            </div>
          </div>
        )}
      </div>
    </PartnershipPageShell>
  );
}
