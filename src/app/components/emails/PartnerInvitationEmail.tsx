import { Button } from "../ui/button";
import { PartnerEmailShell } from "./PartnerEmailShell";
import { PartnerEmailDetails } from "./PartnerEmailDetails";
import { partnerInvitationEmailMock } from "@/data/partnerEmails";

/**
 * Figma node 15494:25670 — "7.8a Email / Partner invitation (to sub-recipient)".
 *
 * Sent when a prime applicant invites an org directly (rather than that org
 * responding to an open Partner Call, see PublicPartnerCallPage) to join
 * their application as a sub-recipient for a named role.
 */
export function PartnerInvitationEmail() {
  const {
    recipientFirstName,
    inviterName,
    inviterOrgName,
    subRecipientOrgName,
    programName,
    roleName,
    whatYoudDo,
    estimatedSubaward,
    periodOfPerformance,
    applicationDeadline,
    respondBy,
  } = partnerInvitationEmailMock;

  const acceptSteps = [
    `${inviterOrgName} reviews interested partners and selects one for this role.`,
    "If selected, you sign an MOU for the agreed subaward amount.",
    "Your program is included in their application, and you can follow its progress.",
  ];

  return (
    <PartnerEmailShell
      footer={
        <>
          <p>
            You received this because {inviterOrgName} invited this email address through Great
            Grants. Replying to this email reaches {inviterName}.
          </p>
          <p>Manage partner notifications · Unsubscribe from partner invitations · Great Grants, Servant IO</p>
        </>
      }
    >
      <h1
        className="text-[28px] font-normal leading-[34px] text-[#181d27]"
        style={{ fontFamily: "Lustria, serif" }}
      >
        You&rsquo;re invited to partner on a federal grant
      </h1>

      <p className="text-base leading-6 text-[#414651]">Hi {recipientFirstName},</p>
      <p className="text-base leading-6 text-[#414651]">
        {inviterName} at {inviterOrgName} invited {subRecipientOrgName} to join their application
        to the {programName} as a sub-recipient.
      </p>

      <PartnerEmailDetails
        rows={[
          { label: "Your role", value: roleName },
          { label: "What you’d do", value: whatYoudDo },
          { label: "Estimated subaward", value: estimatedSubaward },
          { label: "Period", value: periodOfPerformance },
          { label: "Application deadline", value: applicationDeadline },
          { label: "Respond by", value: respondBy },
        ]}
      />

      <div className="flex flex-wrap items-center gap-4">
        <Button
          asChild
          className="h-auto bg-[#0e9384] px-4 py-2.5 text-base font-semibold text-white shadow-xs hover:bg-[#107569]"
        >
          <a href="#">View invitation</a>
        </Button>
        <a href="#" className="text-sm font-semibold text-[#535862] hover:text-[#414651]">
          Not interested
        </a>
      </div>

      <p className="text-base leading-6 text-[#535862]">
        No account is needed to review or accept. You&rsquo;ll create a free Great Grants account
        only if {inviterOrgName} selects you.
      </p>

      <p className="text-base font-semibold text-[#181d27]">If you accept</p>

      <div className="flex flex-col gap-4">
        {acceptSteps.map((step, i) => (
          <div key={step} className="flex items-start gap-2.5">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-xl bg-[#f0fdfa] text-xs font-medium text-[#107569]">
              {i + 1}
            </span>
            <p className="text-sm leading-5 text-[#414651]">{step}</p>
          </div>
        ))}
      </div>
    </PartnerEmailShell>
  );
}
