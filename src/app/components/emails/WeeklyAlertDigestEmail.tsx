import { Zap } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { EmailShell } from "./EmailShell";
import { GrantMatchCard } from "./GrantMatchCard";
import { WatchedGrantCard } from "./WatchedGrantCard";
import { weeklyDigestEmailMock, type AlertDigestSection } from "@/data/emailAlerts";

const ALERT_KIND_LABEL: Record<AlertDigestSection["kind"], string> = {
  grant: "Grant alert",
  "saved-search": "Saved search alert",
  program: "Program alert",
};

/**
 * Figma node 13310:9565 — "Weekly Alert Digest".
 *
 * The Figma frame reframes the email around a "grant watch list": one card
 * per watched grant that changed this week (photo/summary/amount/deadline
 * from its top match, a "what's changed" feed, View Details / Stop
 * watching), plus a single rollup card for every watched grant with no
 * changes ("N More Grants with No Changes" + a "View Watch List" CTA)
 * instead of a per-grant card. That rollup only makes sense for "grant"
 * kind alerts, since only those track ONE specific grant's own
 * date/amendment/status/sponsor/NOFO history (see AlertDigestSection in
 * @/data/emailAlerts) — a saved-search or program alert isn't tied to a
 * single grant and never has "no changes" to report, only new matches. So
 * "saved-search"/"program" sections keep the prior card-list layout
 * (heading + badge + top matches) below the grant cards, unchanged.
 */
export function WeeklyAlertDigestEmail() {
  const { username, weekOf, sections } = weeklyDigestEmailMock;
  const totalUpdates = sections.reduce((sum, s) => sum + s.updates.length, 0);

  const grantSections = sections.filter((s) => s.kind === "grant");
  const otherSections = sections.filter((s) => s.kind !== "grant");
  const changedGrantSections = grantSections.filter((s) => s.updates.length > 0);
  const unchangedGrantSections = grantSections.filter((s) => s.updates.length === 0);

  return (
    <EmailShell
      preheader={`${totalUpdates} updates and new top matches across your ${sections.length} saved alerts this week.`}
      receivedBecause={
        <p>
          You&rsquo;re receiving this weekly digest because you have {sections.length} grants you&rsquo;ve
          added to your watch list on Great Grants.
          <br />
          Thank you,
          <br />
          Great Grants Team
        </p>
      }
    >
      <h1 className="text-base font-semibold text-gray-900">Your weekly grant watch summary</h1>

      <p className="mt-3 text-sm leading-5 text-gray-600">Hi {username},</p>
      <p className="mt-3 text-sm leading-5 text-gray-600">
        Here&rsquo;s what changed and what&rsquo;s new across your watched grants for the week of{" "}
        <span className="font-bold text-gray-900">{weekOf}.</span>
      </p>

      <div className="mt-8 flex flex-col gap-10">
        {changedGrantSections.map((section) => (
          <WatchedGrantCard key={section.alertId} section={section} />
        ))}

        {unchangedGrantSections.length > 0 && <NoChangesCard count={unchangedGrantSections.length} />}

        {otherSections.map((section, index) => (
          <AlertSection
            key={section.alertId}
            section={section}
            isLast={index === otherSections.length - 1}
          />
        ))}
      </div>
    </EmailShell>
  );
}

/** The rollup card for watched grants with nothing to report this week. */
function NoChangesCard({ count }: { count: number }) {
  return (
    <div className="flex w-full flex-col gap-2 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-semibold text-gray-900">
        {count} More {count === 1 ? "Grant" : "Grants"} with No Changes
      </h3>
      <p className="text-sm leading-5 text-gray-600">
        If changes occur with any grants on your watch list, you will be notified once a week.
      </p>
      <Button className="mt-1 self-start bg-teal-600 text-white hover:bg-teal-700" size="sm" asChild>
        <a href="#">View Watch List</a>
      </Button>
    </div>
  );
}

/** Prior card-list layout, kept for "saved-search"/"program" alerts (see file header comment). */
function AlertSection({ section, isLast }: { section: AlertDigestSection; isLast: boolean }) {
  const extraMatches = section.totalMatchCount - section.matches.length;

  return (
    <div className={isLast ? "" : "border-b border-gray-100 pb-10"}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-base font-semibold text-gray-900">{section.alertName}</h2>
          <Badge variant="outline" className="border-gray-200 text-gray-500">
            {ALERT_KIND_LABEL[section.kind]}
          </Badge>
        </div>
        <a href="#" className="text-xs font-medium text-teal-700 underline hover:text-teal-800">
          Stop watching
        </a>
      </div>

      <h3 className="mt-6 text-sm font-semibold text-gray-900">
        {section.kind === "program"
          ? `Top Grants that Match ${section.alertName}`
          : `Top matches similar to ${section.alertName}`}
      </h3>
      <div className="mt-3 flex flex-col gap-4">
        {section.matches.map((match) => (
          <GrantMatchCard key={match.id} match={match} />
        ))}
      </div>

      {extraMatches > 0 && (
        <div
          className="mt-4 rounded-xl border border-teal-200 p-4"
          style={{ backgroundImage: "linear-gradient(135deg, #f0fdfa 0%, #eff6ff 100%)" }}
        >
          <div className="flex items-center gap-2">
            <Zap className="size-5 text-teal-700" />
            <p className="text-sm font-semibold text-gray-900">Want better results?</p>
          </div>
          <p className="mt-1.5 text-sm leading-5 text-gray-600">
            Refine your alert to get more targeted opportunities.
          </p>
          <Button className="mt-3 bg-teal-600 text-white hover:bg-teal-700" size="sm" asChild>
            <a href="#">View all {section.totalMatchCount} matches</a>
          </Button>
        </div>
      )}
    </div>
  );
}
