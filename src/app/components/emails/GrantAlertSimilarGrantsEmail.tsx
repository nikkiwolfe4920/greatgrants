import { EmailShell } from "./EmailShell";
import { GrantMatchCard } from "./GrantMatchCard";
import { similarGrantsEmailMock } from "@/data/emailAlerts";

/**
 * Figma node 13002:22993 — "Grant Alert / Email / Similar Grants".
 *
 * Sent when a user's saved alert on ONE grant (see useGrantAlerts) or saved
 * search (see the "Save as Alert" flow on /search) turns up new similar
 * opportunities. This is the single-alert, single-trigger email — the
 * combined weekly rollup of every alert type lives in
 * WeeklyAlertDigestEmail.
 */
export function GrantAlertSimilarGrantsEmail() {
  const { username, alertName, searchQuery, matchCount, matches } = similarGrantsEmailMock;

  return (
    <EmailShell
      preheader={`${matchCount} new grants matching your "${alertName}" alert, including similar programs to review.`}
      receivedBecause={
        <>
          <p>
            You&rsquo;re receiving this because you created an alert for:
            <br />
            &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="mt-4">
            Thank you,
            <br />
            Great Grants Team
          </p>
        </>
      }
    >
      <h1 className="text-base font-semibold text-gray-900">
        {matchCount} new grants matching your alert
      </h1>

      <p className="mt-3 text-sm leading-5 text-gray-600">Hi {username},</p>
      <p className="mt-3 text-sm leading-5 text-gray-600">
        Here are the latest grant opportunities based on your alert:{" "}
        <span className="font-bold text-gray-900">{alertName}.</span>
      </p>

      <h2 className="mt-8 text-base font-semibold text-gray-900">Similar Grants to {alertName}</h2>

      <div className="mt-4 flex flex-col gap-4">
        {matches.map((match) => (
          <GrantMatchCard key={match.id} match={match} />
        ))}
      </div>
    </EmailShell>
  );
}
