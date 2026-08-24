import {
  FileText,
  ClipboardCheck,
  MessageSquare,
  Clock,
  Sparkles,
  Crown,
  Infinity as InfinityIcon,
  CheckCircle2,
  Circle,
  ArrowUpRight,
  Check,
} from "lucide-react";

/**
 * Sidebar Tier Usage Module — design concepts
 * ---------------------------------------------------------------------------
 * Three alternative layouts for the left-nav "usage" module (currently the
 * single-metric "3 Applications Generated / 0 remaining credits" card in
 * SharedSidebar.tsx). Each concept renders the same underlying data —
 * Applications, Eligibility Assessments, Coaching Passes — for both the
 * Free tier (capped, with an upgrade path) and the Unlimited tier
 * (uncapped). See CopyPage.tsx for the side-by-side comparison harness.
 *
 * Shared copy rules (per product spec):
 *  - Applications:   "You have {limit} Free Application(s) — {remaining} left"
 *  - Eligibility:    "You have {limit} Free Eligibility Assessments — {remaining} left"
 *  - Coaching:       "You have {limit} Free Coaching Passes — {remaining} left"
 *  - On exhaustion, each resource switches to a "Ready for the next one?"
 *    nudge rather than a dead-end "0 left" — that's the upgrade moment.
 */

export type ApplicationStatus = "not_started" | "in_progress" | "used";

export interface ApplicationUsage {
  status: ApplicationStatus;
  used: number;
  limit: number;
  grantName?: string;
  sectionsCount?: number;
}

export interface ResourceUsage {
  used: number;
  limit: number;
}

export interface TierModuleProps {
  tier: "free" | "unlimited";
  application: ApplicationUsage;
  eligibility: ResourceUsage;
  coaching: ResourceUsage;
  resetDate: string;
  onUpgrade?: () => void;
  onManagePlan?: () => void;
}

// ---------------------------------------------------------------------------
// Copy helpers — centralized so the exact wording only lives in one place.
// ---------------------------------------------------------------------------

function plural(n: number, word: string) {
  return `${word}${n === 1 ? "" : "s"}`;
}

function applicationLine(app: ApplicationUsage, isUnlimited = false): string {
  if (app.status === "used" && app.grantName) {
    return `Your application for ${app.grantName} is complete — ${app.sectionsCount ?? 14} sections, written from your organization's profile and this funder's requirements. Ready for the next one?`;
  }
  if (isUnlimited) {
    return "You have unlimited applications — start a new one anytime.";
  }
  const remaining = Math.max(app.limit - app.used, 0);
  return `You have ${app.limit} Free ${plural(app.limit, "Application")} — ${remaining} left`;
}

function eligibilityLine(e: ResourceUsage, isUnlimited = false): string {
  if (isUnlimited) {
    return "You have unlimited eligibility assessments — check any grant, anytime.";
  }
  const remaining = Math.max(e.limit - e.used, 0);
  if (remaining === 0) {
    return `Your ${e.limit} Free Eligibility Assessments have been used. Ready for the next one?`;
  }
  return `You have ${e.limit} Free Eligibility Assessments — ${remaining} left`;
}

function coachingLine(c: ResourceUsage, isUnlimited = false): string {
  if (isUnlimited) {
    return "You have unlimited coaching passes — get guidance whenever you need it.";
  }
  const remaining = Math.max(c.limit - c.used, 0);
  const passWord = c.limit === 1 ? "Pass" : "Passes";
  if (remaining === 0) {
    return `Your ${c.limit} Free Coaching ${passWord} have been used. Ready for the next one?`;
  }
  return `You have ${c.limit} Free Coaching ${passWord} — ${remaining} left`;
}

function applicationStatusLabel(app: ApplicationUsage): string {
  if (app.status === "not_started") return "Not started";
  if (app.status === "in_progress") return "In progress";
  return "Used";
}

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;

// ---------------------------------------------------------------------------
// Concept A — "Resource Rows"
// Closest sibling to the current sidebar widget: same footprint, same cream
// card, but the single metric becomes three compact rows. Free tier ends in
// a solid CTA button; Unlimited tier keeps the quiet text-link footer.
// ---------------------------------------------------------------------------

export function TierModuleConceptRows({
  tier,
  application,
  eligibility,
  coaching,
  resetDate,
  onUpgrade,
  onManagePlan,
}: TierModuleProps) {
  const isUnlimited = tier === "unlimited";

  const Row = ({
    icon: Icon,
    label,
    used,
    limit,
    caption,
  }: {
    icon: typeof FileText;
    label: string;
    used: number;
    limit: number;
    caption: string;
  }) => {
    const pct = isUnlimited ? 100 : Math.min((used / Math.max(limit, 1)) * 100, 100);
    return (
      <div className="mb-2.5 last:mb-0">
        <div className="flex items-center gap-1.5 mb-1">
          <Icon className="w-3.5 h-3.5 text-[#101828] shrink-0" />
          <span className="text-[12px] font-semibold text-[#101828] leading-4 flex-1 truncate" style={CABIN}>
            {label}
          </span>
          {isUnlimited ? (
            <InfinityIcon className="w-3.5 h-3.5 text-[#00786f] shrink-0" aria-label="Unlimited" />
          ) : (
            <span className="text-[11px] font-semibold text-[#4a5565] shrink-0" style={CABIN}>
              {used}/{limit}
            </span>
          )}
        </div>
        {!isUnlimited && (
          <div className="w-full h-1.5 rounded-full bg-[#fef7c3] mb-1">
            <div className="h-1.5 rounded-full bg-[#ca8504] transition-all" style={{ width: `${pct}%` }} />
          </div>
        )}
        <p className="text-[11.5px] text-[#4a5565] leading-[15px]" style={CABIN}>
          {caption}
        </p>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="bg-[#fffefa] rounded-lg p-3 w-full border border-[#feee95]/60">
        <div className="flex items-center justify-between mb-2.5">
          <span
            className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${
              isUnlimited ? "bg-[#e6f7f5] text-[#00786f]" : "bg-gray-100 text-gray-600"
            }`}
            style={CABIN}
          >
            {isUnlimited && <Crown className="w-2.5 h-2.5" />}
            {isUnlimited ? "Unlimited Plan" : "Free Plan"}
          </span>
        </div>

        <Row
          icon={FileText}
          label="Applications"
          used={application.used}
          limit={application.limit}
          caption={applicationLine(application, isUnlimited)}
        />
        <div className="border-t border-[#feee95] my-2.5" />
        <Row
          icon={ClipboardCheck}
          label="Eligibility Assessments"
          used={eligibility.used}
          limit={eligibility.limit}
          caption={eligibilityLine(eligibility, isUnlimited)}
        />
        <div className="border-t border-[#feee95] my-2.5" />
        <Row
          icon={MessageSquare}
          label="Coaching Passes"
          used={coaching.used}
          limit={coaching.limit}
          caption={coachingLine(coaching, isUnlimited)}
        />

        <div className="border-t border-[#feee95] mt-2.5 pt-2.5">
          {isUnlimited ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#4a5565] shrink-0" />
                <span className="text-[12px] text-[#4a5565] leading-4" style={CABIN}>
                  Renews {resetDate}
                </span>
              </div>
              <button
                onClick={onManagePlan}
                className="text-[12px] font-semibold text-[#00786f] leading-4 hover:underline shrink-0"
                style={CABIN}
              >
                Manage Plan
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={onUpgrade}
                className="w-full flex items-center justify-center gap-1.5 bg-[#00786f] hover:bg-[#00655e] text-white text-[13px] font-semibold rounded-md py-2 transition-colors"
                style={CABIN}
              >
                Upgrade to Unlimited
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-center justify-center gap-1 mt-2">
                <Clock className="w-3 h-3 text-[#4a5565] shrink-0" />
                <span className="text-[11px] text-[#4a5565] leading-4" style={CABIN}>
                  Resets {resetDate}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Concept B — "Hero Metric"
// Applications (the highest-value, hardest-won resource) gets a large
// headline treatment; Eligibility + Coaching become secondary status chips.
// The upgrade path is a persistent gradient banner rather than a plain
// button, so the value prop stays visible even before the free cap is hit.
// ---------------------------------------------------------------------------

export function TierModuleConceptHero({
  tier,
  application,
  eligibility,
  coaching,
  resetDate,
  onUpgrade,
  onManagePlan,
}: TierModuleProps) {
  const isUnlimited = tier === "unlimited";
  const appRemaining = Math.max(application.limit - application.used, 0);
  const eligRemaining = Math.max(eligibility.limit - eligibility.used, 0);
  const coachRemaining = Math.max(coaching.limit - coaching.used, 0);

  const Chip = ({
    icon: Icon,
    label,
    remaining,
  }: {
    icon: typeof ClipboardCheck;
    label: string;
    remaining: number;
  }) => (
    <div className="flex-1 bg-white/70 rounded-md px-2 py-1.5 flex items-center gap-1.5 min-w-0">
      <Icon className="w-3.5 h-3.5 text-[#4a5565] shrink-0" />
      <div className="min-w-0">
        <p className="text-[10.5px] text-[#4a5565] leading-[13px] truncate" style={CABIN}>
          {label}
        </p>
        <p className="text-[12px] font-bold text-[#101828] leading-4" style={CABIN}>
          {isUnlimited ? <InfinityIcon className="w-3 h-3 inline" /> : `${remaining} left`}
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <div className="bg-[#fffefa] rounded-lg overflow-hidden w-full border border-[#feee95]/60">
        <div className="p-3 pb-2.5">
          <div className="flex items-center justify-between mb-2">
            <span
              className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${
                isUnlimited ? "bg-[#e6f7f5] text-[#00786f]" : "bg-gray-100 text-gray-600"
              }`}
              style={CABIN}
            >
              {isUnlimited && <Crown className="w-2.5 h-2.5" />}
              {isUnlimited ? "Unlimited Plan" : "Free Plan"}
            </span>
            {application.status === "used" ? (
              <CheckCircle2 className="w-4 h-4 text-[#00786f]" />
            ) : (
              <Circle className="w-4 h-4 text-gray-300" />
            )}
          </div>

          {/* Hero metric — Applications */}
          <div className="flex items-baseline gap-1.5 mb-0.5">
            {isUnlimited ? (
              <InfinityIcon className="w-6 h-6 text-[#101828]" />
            ) : (
              <span className="text-[26px] font-extrabold text-[#101828] leading-none" style={CABIN}>
                {appRemaining}
              </span>
            )}
            <span className="text-[12px] font-semibold text-[#4a5565] leading-4" style={CABIN}>
              {isUnlimited ? "Unlimited Applications" : `of ${application.limit} Applications left`}
            </span>
          </div>
          <p className="text-[11.5px] text-[#4a5565] leading-[15px] mb-2.5" style={CABIN}>
            {applicationLine(application, isUnlimited)}
          </p>

          <div className="flex items-center gap-2">
            <Chip icon={ClipboardCheck} label="Eligibility" remaining={eligRemaining} />
            <Chip icon={MessageSquare} label="Coaching" remaining={coachRemaining} />
          </div>
          {!isUnlimited && (eligRemaining === 0 || coachRemaining === 0) && (
            <p className="text-[11px] text-[#4a5565] leading-4 mt-1.5" style={CABIN}>
              {eligRemaining === 0 ? eligibilityLine(eligibility) : coachingLine(coaching)}
            </p>
          )}
        </div>

        {isUnlimited ? (
          <div className="px-3 py-2 bg-[#e6f7f5] border-t border-[#c7ede9] flex items-center justify-between">
            <span className="text-[11.5px] font-medium text-[#00786f]" style={CABIN}>
              Renews {resetDate}
            </span>
            <button onClick={onManagePlan} className="text-[12px] font-semibold text-[#00786f] hover:underline" style={CABIN}>
              Manage Plan
            </button>
          </div>
        ) : (
          <button
            onClick={onUpgrade}
            className="w-full flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#00786f] to-[#00a396] text-white text-[13px] font-semibold py-2.5 transition-opacity hover:opacity-95"
            style={CABIN}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Unlock unlimited access
          </button>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Concept C — "Usage + Upsell Blocks"
// Two visually distinct cards: a neutral usage summary (label-left,
// bar-right rows) and — only while on the Free tier — a separate teal
// upsell card with a benefits checklist. On Unlimited, the second block is
// replaced by a quiet confirmation strip instead of disappearing outright,
// so the module doesn't visually "shrink" after upgrading.
// ---------------------------------------------------------------------------

export function TierModuleConceptBlocks({
  tier,
  application,
  eligibility,
  coaching,
  resetDate,
  onUpgrade,
  onManagePlan,
}: TierModuleProps) {
  const isUnlimited = tier === "unlimited";

  const UsageRow = ({
    icon: Icon,
    label,
    used,
    limit,
  }: {
    icon: typeof FileText;
    label: string;
    used: number;
    limit: number;
  }) => {
    const pct = isUnlimited ? 100 : Math.min((used / Math.max(limit, 1)) * 100, 100);
    return (
      <div className="flex items-center gap-2 py-1.5">
        <Icon className="w-3.5 h-3.5 text-[#4a5565] shrink-0" />
        <span className="text-[11.5px] font-medium text-[#101828] leading-4 w-[92px] shrink-0 truncate" style={CABIN}>
          {label}
        </span>
        {isUnlimited ? (
          <span className="flex-1 flex items-center gap-1 text-[11px] font-semibold text-[#00786f]" style={CABIN}>
            <InfinityIcon className="w-3 h-3" /> Unlimited
          </span>
        ) : (
          <>
            <div className="flex-1 h-1.5 rounded-full bg-gray-200">
              <div className="h-1.5 rounded-full bg-[#00786f]" style={{ width: `${pct}%` }} />
            </div>
            <span className="text-[11px] font-semibold text-[#4a5565] w-9 text-right shrink-0" style={CABIN}>
              {Math.max(limit - used, 0)} left
            </span>
          </>
        )}
      </div>
    );
  };

  const messages = [
    application.status === "used" && Math.max(application.limit - application.used, 0) === 0
      ? applicationLine(application)
      : null,
    Math.max(eligibility.limit - eligibility.used, 0) === 0 ? eligibilityLine(eligibility) : null,
    Math.max(coaching.limit - coaching.used, 0) === 0 ? coachingLine(coaching) : null,
  ].filter(Boolean) as string[];

  return (
    <div className="w-full space-y-2">
      <div className="bg-white rounded-lg p-3 w-full border border-gray-200">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500" style={CABIN}>
            {isUnlimited ? "Unlimited Plan" : "Free Plan usage"}
          </span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-gray-400 shrink-0" />
            <span className="text-[10.5px] text-gray-400" style={CABIN}>
              {isUnlimited ? `Renews ${resetDate}` : `Resets ${resetDate}`}
            </span>
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          <UsageRow icon={FileText} label="Applications" used={application.used} limit={application.limit} />
          <UsageRow icon={ClipboardCheck} label="Eligibility" used={eligibility.used} limit={eligibility.limit} />
          <UsageRow icon={MessageSquare} label="Coaching" used={coaching.used} limit={coaching.limit} />
        </div>
        {!isUnlimited && messages.length > 0 && (
          <div className="mt-2 pt-2 border-t border-gray-100 space-y-1">
            {messages.map((m, i) => (
              <p key={i} className="text-[11px] text-gray-600 leading-[15px]" style={CABIN}>
                {m}
              </p>
            ))}
          </div>
        )}
        {!isUnlimited && (
          <button
            onClick={onManagePlan}
            className="mt-2 text-[11px] font-semibold text-[#00786f] hover:underline"
            style={CABIN}
          >
            Manage Plan
          </button>
        )}
      </div>

      {isUnlimited ? (
        <div className="flex items-center gap-1.5 bg-[#e6f7f5] border border-[#c7ede9] rounded-lg px-3 py-2">
          <Crown className="w-3.5 h-3.5 text-[#00786f] shrink-0" />
          <span className="text-[11.5px] font-medium text-[#00786f]" style={CABIN}>
            You're on Unlimited — enjoy the full toolkit.
          </span>
          <button onClick={onManagePlan} className="ml-auto text-[11px] font-semibold text-[#00786f] hover:underline shrink-0" style={CABIN}>
            Manage
          </button>
        </div>
      ) : (
        <div className="rounded-lg p-3 w-full bg-gradient-to-br from-[#00786f] to-[#00554e] text-white">
          <p className="text-[12.5px] font-bold mb-1.5" style={CABIN}>
            Go Unlimited
          </p>
          <ul className="space-y-1 mb-2.5">
            {["Unlimited applications", "Unlimited eligibility assessments", "Unlimited coaching passes"].map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-[11.5px] text-teal-50" style={CABIN}>
                <Check className="w-3 h-3 text-white shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={onUpgrade}
            className="w-full bg-white text-[#00786f] text-[12.5px] font-bold rounded-md py-2 hover:bg-teal-50 transition-colors"
            style={CABIN}
          >
            Upgrade Now
          </button>
        </div>
      )}
    </div>
  );
}

export { applicationLine, eligibilityLine, coachingLine, applicationStatusLabel };
