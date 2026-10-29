import { CalendarCheck, FileCheck2 } from "lucide-react";
import { StepperHeader } from "@/app/components/eligibility/StepperHeader";
import { Card, ContactSupportButton } from "./InformationRequestForm";
import { LinkedDocumentRow } from "./LinkedDocumentRow";
import { FINAL_APPROVAL, MOU_ACCEPTED } from "@/data/partnerMou";
import type { PartnerApplication } from "@/data/partnerApplications";

/**
 * Step 5 — Final Approval, complete. Every step in the bar is checked, with
 * the date each one happened, and the content shifts from "do this" to "here's
 * what's done and what to expect": no action needed, what happens next, and
 * the signed MOU on file.
 */
export function FinalApprovalStep({ app }: { app: PartnerApplication }) {
  const org = app.primeApplicant;
  const steps = [
    { label: "Partnership\nApproved", caption: app.decision && `Decided on\n${app.decision.decidedOn}` },
    { label: "Information\nRequest", caption: app.decision && `Requested:\n${app.decision.decidedOn}` },
    { label: "Sent for\nApproval", caption: `Accepted:\n${MOU_ACCEPTED.acceptedAt}` },
    { label: "Sign\nMOU", caption: `Requested\n${MOU_ACCEPTED.mouRequestedOn}` },
    { label: "Final\nApproval", caption: `Decided on\n${FINAL_APPROVAL.decidedOn}` },
  ];

  return (
    <div className="space-y-4">
      {/* currentStep past the last step renders every step as completed. */}
      <StepperHeader steps={steps} currentStep={steps.length + 1} />

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <h3 className="font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
          Next steps
        </h3>
        <span className="rounded-full bg-green-50 border border-green-200 px-2 py-0.5 text-xs font-semibold text-green-700">
          No action needed from you
        </span>
        <ContactSupportButton app={app} />
      </div>
      <p className="text-sm text-gray-600 -mt-2">
        Everything {org} needed from you is in. Here&apos;s what to expect from here.
      </p>

      <Card
        icon={<CalendarCheck className="size-5" />}
        title="What happens next"
        description="Your partnership is final. Funding is agreed and managed directly with the lead applicant, outside Great Grants."
      >
        <ol className="list-decimal space-y-2 pl-5 text-sm text-gray-700">
          <li>
            {org} includes your organization as a {app.roleBadge.toLowerCase()} in the {app.programName} application.
          </li>
          <li>They submit the application by the NOFO deadline, {app.nofoDeadline}.</li>
          <li>
            You&apos;ll get a notification with the award decision. Questions in the meantime? Contact {org} using the
            button above.
          </li>
        </ol>
      </Card>

      <Card
        icon={<FileCheck2 className="size-5" />}
        title="Signed MOU"
        description={`The copy ${org} approved on ${FINAL_APPROVAL.approvedAt}. Keep it for your records.`}
      >
        <LinkedDocumentRow {...FINAL_APPROVAL.signedMou} />
      </Card>
    </div>
  );
}
