import { Zap } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { EmailShell } from "./EmailShell";
import { GrantMatchCard } from "./GrantMatchCard";
import { AlertUpdateList } from "./AlertUpdateList";
import { weeklyDigestEmailMock, type AlertDigestSection } from "@/data/emailAlerts";

const ALERT_KIND_LABEL: Record<AlertDigestSection["kind"], string> = {
  grant: "Grant alert",
  "saved-search": "Saved search alert",
  program: "Program alert",
};

/**
 * Figma node 13014:42002 — "Grant Alert / Duration Email".
 *
 * The Figma frame only shows one alert's generic "Top Matches for You" list.
 * Per the product goal, ONE weekly email must roll up every alert type a
 * user has active — grant alerts, saved-search alerts, and program alerts
 * alike (see AlertDigestSection in @/data/emailAlerts for what distinguishes
 * them) — each with its own top matches, instead of a separate email per
 * alert. This component keeps the Figma frame's visual language (card list +
 * teal "want better results" CTA) but repeats it once per saved alert via
 * `AlertDigestSection`. Only "grant" sections get a "what's changed" feed
 * above their matches — a saved-search or program alert isn't tied to one
 * grant, so there's no single grant's date/amendment/status/sponsor/NOFO
 * history to report; they only ever surface new matches.
 */
export function WeeklyAlertDigestEmail() {
  const { username, weekOf, sections } = weeklyDigestEmailMock;
  const totalUpdates = sections.reduce((sum, s) => sum + s.updates.length, 0);

  return (
    <EmailShell
      preheader={`${totalUpdates} updates and new top matches across your ${sections.length} saved alerts this week.`}
      receivedBecause={
        <p>
          You&rsquo;re receiving this weekly digest because you have {sections.length} active alerts on
          Great Grants.
          <br />
          Thank you,
          <br />
          Great Grants Team
        </p>
      }
    >
      <h1 className="text-base font-semibold text-gray-900">Your weekly grant alert summary</h1>

      <p className="mt-3 text-sm leading-5 text-gray-600">Hi {username},</p>
      <p className="mt-3 text-sm leading-5 text-gray-600">
        Here&rsquo;s what changed and what&rsquo;s new across your saved alerts for the week of{" "}
        <span className="font-bold text-gray-900">{weekOf}.</span>
      </p>

      <div className="mt-8 flex flex-col gap-10">
        {sections.map((section, index) => (
          <AlertSection key={section.alertId} section={section} isLast={index === sections.length - 1} />
        ))}
      </div>
    </EmailShell>
  );
}

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
          Turn off this alert
        </a>
      </div>

      {section.kind === "grant" && section.updates.length > 0 && (
        <div className="mt-4 rounded-xl bg-gray-50 p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
            What&rsquo;s changed
          </p>
          <AlertUpdateList updates={section.updates} />
        </div>
      )}

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
