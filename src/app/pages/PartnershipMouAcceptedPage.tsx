import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import {
  PartnerCardHeader,
  PartnerDetailsStrip,
  PartnershipPageShell,
  StatusBanner,
} from "@/app/components/partner-information/PartnershipPageShell";
import { SignMouStep, EMPTY_SIGN_MOU, type SignMouState } from "@/app/components/partner-information/SignMouStep";
import { mockPartnerApplications } from "@/data/partnerApplications";
import { MOU_APPLICATION_ID } from "@/data/partnerMou";

/**
 * /partnership-applications-mou-accepted — same page and card pattern as
 * /partnership-applications, in the state after the lead applicant accepted
 * the Information Request. Step 3 shows as accepted and Sign MOU is the active
 * step: download the MOU, sign it, upload the signed copy, send it for final
 * approval.
 */
export function PartnershipMouAcceptedPage() {
  const app = mockPartnerApplications.find((a) => a.id === MOU_APPLICATION_ID)!;
  const [expanded, setExpanded] = useState(true);
  const [mou, setMou] = useState<SignMouState>(EMPTY_SIGN_MOU);
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
            mou.sentOn ? (
              <Badge className="bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-50">Sent for final approval</Badge>
            ) : (
              <Badge className="bg-amber-100 text-amber-800 border-amber-300 font-semibold hover:bg-amber-100">
                <AlertCircle aria-hidden="true" />
                Signature Needed
              </Badge>
            )
          }
        />

        {expanded && (
          <div id={detailsId} className="p-6 space-y-5">
            <StatusBanner tone="success" icon={<CheckCircle2 className="w-5 h-5" />} title="Information accepted">
              {app.primeApplicant} accepted your information. Next, download the MOU, sign it, and upload the signed copy
              so they can give final approval. MOUs are signed directly between partners, outside Great Grants.
            </StatusBanner>
            <div className="space-y-6">
              <PartnerDetailsStrip app={app} includeInformationDue={false} />
              <hr className="border-gray-200" />
              <SignMouStep app={app} state={mou} onChange={(patch) => setMou(patch)} />
            </div>
          </div>
        )}
      </div>
    </PartnershipPageShell>
  );
}
