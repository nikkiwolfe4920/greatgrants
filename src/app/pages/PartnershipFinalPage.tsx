import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import {
  PartnerCardHeader,
  PartnerDetailsStrip,
  PartnershipPageShell,
  StatusBanner,
} from "@/app/components/partner-information/PartnershipPageShell";
import { FinalApprovalStep } from "@/app/components/partner-information/FinalApprovalStep";
import { mockPartnerApplications } from "@/data/partnerApplications";
import { FINAL_APPROVAL, MOU_APPLICATION_ID } from "@/data/partnerMou";

/**
 * /partnership-applications-final — the end of the /partnership-applications
 * flow: the lead applicant gave final approval after reviewing the signed MOU.
 * All five steps are checked and the page switches from tasks to confirmation.
 */
export function PartnershipFinalPage() {
  const app = mockPartnerApplications.find((a) => a.id === MOU_APPLICATION_ID)!;
  const [expanded, setExpanded] = useState(true);
  const detailsId = `partner-details-${app.id}`;

  return (
    <PartnershipPageShell>
      <div className="bg-white rounded-lg border border-gray-200">
        <PartnerCardHeader
          app={app}
          expanded={expanded}
          onToggle={() => setExpanded((e) => !e)}
          detailsId={detailsId}
          badges={
            <Badge className="bg-green-100 text-green-800 border-green-300 font-semibold hover:bg-green-100">
              <CheckCircle2 aria-hidden="true" />
              Final Approved
            </Badge>
          }
        />

        {expanded && (
          <div id={detailsId} className="p-6 space-y-5">
            <StatusBanner tone="success" icon={<CheckCircle2 className="w-5 h-5" />} title="Final approval granted">
              {app.primeApplicant} approved your signed MOU on {FINAL_APPROVAL.approvedAt}. Your partnership on the{" "}
              {app.programName} is confirmed.
            </StatusBanner>
            <div className="space-y-6">
              <PartnerDetailsStrip app={app} includeInformationDue={false} />
              <hr className="border-gray-200" />
              <FinalApprovalStep app={app} />
            </div>
          </div>
        )}
      </div>
    </PartnershipPageShell>
  );
}
