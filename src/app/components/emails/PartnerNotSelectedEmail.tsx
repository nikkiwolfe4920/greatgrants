import { Button } from "../ui/button";
import { PartnerEmailShell } from "./PartnerEmailShell";
import { PartnerEmailDetails } from "./PartnerEmailDetails";
import { partnerNotSelectedEmailMock } from "@/data/partnerEmails";

/**
 * Figma node 15494:25766 — "7.8c Email / Not selected".
 *
 * Sent to the other orgs that responded to the prime's open Partner Call
 * (see PublicPartnerCallPage) once the role has been filled by someone else.
 */
export function PartnerNotSelectedEmail() {
  const {
    recipientFirstName,
    inviterOrgName,
    subRecipientOrgName,
    roleName,
    openPartnerCallCount,
    openGrantCount,
  } = partnerNotSelectedEmailMock;

  return (
    <PartnerEmailShell
      footer={
        <>
          <p>You received this because you responded to a Partner Call on Great Grants.</p>
          <p>Manage partner notifications · Great Grants, Servant IO</p>
        </>
      }
    >
      <h1
        className="text-[28px] font-normal leading-[34px] text-[#181d27]"
        style={{ fontFamily: "Lustria, serif" }}
      >
        An update on your partnership response
      </h1>

      <p className="text-base leading-6 text-[#414651]">Hi {recipientFirstName},</p>
      <p className="text-base leading-6 text-[#414651]">
        Thank you for responding to {inviterOrgName}&rsquo;s Partner Call. They&rsquo;ve filled the{" "}
        {roleName} role and won&rsquo;t be moving forward with {subRecipientOrgName} for this
        application.
      </p>
      <p className="text-base leading-6 text-[#414651]">
        Your organization is still a strong match for other funding. Here&rsquo;s where to look
        next:
      </p>

      <PartnerEmailDetails
        rows={[
          { label: "Open Partner Calls", value: `${openPartnerCallCount} calls match your focus areas` },
          { label: "Grants you can lead", value: `${openGrantCount} open opportunities` },
        ]}
      />

      <div className="flex w-full items-center">
        <Button
          asChild
          className="h-auto bg-[#0e9384] px-4 py-2.5 text-base font-semibold text-white shadow-xs hover:bg-[#107569]"
        >
          <a href="#">See partnership opportunities</a>
        </Button>
      </div>

      <p className="text-base leading-6 text-[#535862]">
        Tip: mark yourself available on a NOFO and primes applying for it can invite you directly.
      </p>
    </PartnerEmailShell>
  );
}
