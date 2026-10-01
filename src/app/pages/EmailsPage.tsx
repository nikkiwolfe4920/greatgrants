import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Monitor, Smartphone } from "lucide-react";
import { Button } from "../components/ui/button";
import { GrantAlertSimilarGrantsEmail } from "../components/emails/GrantAlertSimilarGrantsEmail";
import { WeeklyAlertDigestEmail } from "../components/emails/WeeklyAlertDigestEmail";
import { PartnerInvitationEmail } from "../components/emails/PartnerInvitationEmail";
import { PartnerSelectedEmail } from "../components/emails/PartnerSelectedEmail";
import { PartnerNotSelectedEmail } from "../components/emails/PartnerNotSelectedEmail";

type Viewport = "desktop" | "mobile";

const VIEWPORT_WIDTH: Record<Viewport, string> = {
  desktop: "640px",
  mobile: "375px",
};

/**
 * /emails — preview gallery for Great Grants transactional/digest email
 * templates, in the same "implemented Figma design as a live page" spirit
 * as /copy and /design-system.
 *
 * Every template renders with normal document flow (not the fixed-width
 * absolute-position canvas Figma exports), so the viewport toggle below
 * proves each one reflows correctly rather than just resembling the frame
 * at one fixed size.
 */
export function EmailsPage() {
  const [viewport, setViewport] = useState<Viewport>("desktop");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-1 text-2xl font-semibold text-gray-900">Emails</h1>
        <p className="mb-6 text-sm text-gray-500">
          Grant alert email templates, built responsive for any inbox width.
        </p>

        <div className="mb-10 inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white p-1">
          <ViewportButton
            active={viewport === "desktop"}
            onClick={() => setViewport("desktop")}
            icon={<Monitor className="size-4" />}
            label="Desktop"
          />
          <ViewportButton
            active={viewport === "mobile"}
            onClick={() => setViewport("mobile")}
            icon={<Smartphone className="size-4" />}
            label="Mobile"
          />
        </div>

        <EmailPreviewSection
          viewport={viewport}
          title="New Similar Grants Alert"
          description={
            <>
              Figma node 13002:22993 &mdash; sent the moment a saved alert (per-grant or saved-search,
              see <code className="rounded bg-gray-100 px-1 py-0.5 text-xs">useGrantAlerts</code>) turns up
              similar grants. Surfaces the top 3 matches for that one alert.
            </>
          }
        >
          <GrantAlertSimilarGrantsEmail />
        </EmailPreviewSection>

        <EmailPreviewSection
          viewport={viewport}
          title="Weekly Alert Digest"
          description={
            <>
              Figma node 13310:9565, extended into the combined weekly send: one email rolls up{" "}
              <em>every</em> grant alert a user has active. Watched grants that changed this week
              (e.g. &ldquo;Church-Based Small Business Development Fund&rdquo;) each get their own
              card with a date/amendment/status/sponsor/NOFO change feed; grants with nothing to
              report fold into a single &ldquo;N More Grants with No Changes&rdquo; card instead of
              a separate email per alert.
            </>
          }
        >
          <WeeklyAlertDigestEmail />
        </EmailPreviewSection>

        <h2 className="mb-1 mt-16 text-xl font-semibold text-gray-900">Partner invitations</h2>
        <p className="mb-6 max-w-2xl text-sm leading-5 text-gray-500">
          Sent as part of the partner-call flow on{" "}
          <Link to="/publicpartner-open" className="font-medium text-teal-600 hover:underline">
            /publicpartner-open
          </Link>
          : an org is invited directly to a role, then told whether it was selected.
        </p>

        <EmailPreviewSection
          viewport={viewport}
          title="Partner invitation (to sub-recipient)"
          description={
            <>
              Figma node 15494:25670 &mdash; sent when a prime applicant invites an org directly to
              join their application as a sub-recipient for a named role, with no account required
              to review or accept.
            </>
          }
        >
          <PartnerInvitationEmail />
        </EmailPreviewSection>

        <EmailPreviewSection
          viewport={viewport}
          title="You were selected"
          description={
            <>
              Figma node 15494:25731 &mdash; sent when the prime applicant chooses this org as the
              sub-recipient for the role after the invitation above.
            </>
          }
        >
          <PartnerSelectedEmail />
        </EmailPreviewSection>

        <EmailPreviewSection
          viewport={viewport}
          title="Not selected"
          description={
            <>
              Figma node 15494:25766 &mdash; sent to the other orgs that responded to the prime&rsquo;s
              open Partner Call once the role has been filled by someone else.
            </>
          }
        >
          <PartnerNotSelectedEmail />
        </EmailPreviewSection>

        <div className="mt-4 flex items-center gap-1 text-sm text-gray-500">
          <span>Alerts are managed on</span>
          <Link to="/search" className="inline-flex items-center gap-1 font-medium text-teal-600 hover:underline">
            /search
            <ArrowRight className="size-3.5" />
          </Link>
          <span>and on each grant&rsquo;s detail page.</span>
        </div>
      </div>
    </div>
  );
}

function ViewportButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
        active ? "bg-teal-600 text-white" : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function EmailPreviewSection({
  viewport,
  title,
  description,
  children,
}: {
  viewport: Viewport;
  title: string;
  description: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-1 text-lg font-semibold text-gray-900">{title}</h2>
      <p className="mb-5 max-w-2xl text-sm leading-5 text-gray-500">{description}</p>
      <div className="flex justify-center rounded-2xl bg-gray-100 p-6">
        <div
          className="max-w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm transition-[width] duration-200"
          style={{ width: VIEWPORT_WIDTH[viewport] }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
