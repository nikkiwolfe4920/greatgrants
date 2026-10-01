import { Button } from "../ui/button";
import { PartnerEmailShell } from "./PartnerEmailShell";
import { PartnerEmailDetails } from "./PartnerEmailDetails";
import { partnerSelectedEmailMock } from "@/data/partnerEmails";

/**
 * Figma node 15494:25731 — "7.8b Email / You were selected".
 *
 * Sent when the prime applicant chooses this org as the sub-recipient for a
 * role after the invitation in PartnerInvitationEmail.
 */
export function PartnerSelectedEmail() {
  const {
    recipientFirstName,
    inviterName,
    inviterOrgName,
    subRecipientOrgName,
    roleName,
    programName,
    mouAmount,
    applicationDeadline,
  } = partnerSelectedEmailMock;

  return (
    <PartnerEmailShell
      footer={
        <>
          <p>
            Questions about the MOU? Reply to reach {inviterName} at {inviterOrgName}.
          </p>
          <p>Manage partner notifications · Great Grants, Servant IO</p>
        </>
      }
    >
      <h1
        className="text-[28px] font-normal leading-[34px] text-[#181d27]"
        style={{ fontFamily: "Lustria, serif" }}
      >
        You&rsquo;ve been selected as a partner
      </h1>

      <p className="text-base leading-6 text-[#414651]">Hi {recipientFirstName},</p>
      <p className="text-base leading-6 text-[#414651]">
        {inviterOrgName} selected {subRecipientOrgName} as their {roleName} for the {programName}{" "}
        application.
      </p>

      <PartnerEmailDetails
        rows={[
          { label: "MOU amount", value: `${mouAmount} (set by ${inviterOrgName})` },
          { label: "Next step", value: `${inviterOrgName} will send your MOU directly` },
          { label: "Application deadline", value: applicationDeadline },
        ]}
      />

      <div className="flex w-full items-center">
        <Button
          asChild
          className="h-auto bg-[#0e9384] px-4 py-2.5 text-base font-semibold text-white shadow-xs hover:bg-[#107569]"
        >
          <a href="#">View your partnership</a>
        </Button>
      </div>

      <p className="text-base leading-6 text-[#535862]">
        Not on Great Grants yet? The button above creates your free account first, with the
        details you already shared.
      </p>
    </PartnerEmailShell>
  );
}
