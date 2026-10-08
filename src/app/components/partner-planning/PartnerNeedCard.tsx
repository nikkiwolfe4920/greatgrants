import { Check, Copy, Link2, Megaphone, MoreHorizontal, Pencil, RotateCcw, Search, Sparkles, Users } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/app/components/ui/tooltip";
import type { CandidateStatus, PartnerCandidate, PartnerNeedRecord } from "@/data/partnerPlanning";
import {
  type CandidateGroup,
  committedOf,
  formatDate,
  groupOf,
  initialsOf,
  kRange,
  money,
  needStatus,
  sortCandidates,
  sumAmount,
} from "./utils";

export type CandidateAction = "invite" | "select" | "mark-mou" | "review" | "details";

interface PartnerNeedCardProps {
  need: PartnerNeedRecord;
  projectBudget: number;
  onFindPartners: (need: PartnerNeedRecord) => void;
  onPublishCall: (need: PartnerNeedRecord) => void;
  onCopyCallLink: (need: PartnerNeedRecord) => void;
  onEditNeed: (need: PartnerNeedRecord) => void;
  onToggleDeferred: (need: PartnerNeedRecord) => void;
  onCandidateAction: (need: PartnerNeedRecord, candidate: PartnerCandidate, action: CandidateAction) => void;
}

const NEED_BADGE: Record<ReturnType<typeof needStatus>, { label: string; className: string }> = {
  filled: { label: "Filled", className: "border-green-200 bg-green-50 text-green-700" },
  open: { label: "Open", className: "border-amber-200 bg-amber-50 text-amber-700" },
  deferred: { label: "Deferred", className: "border-gray-200 bg-gray-100 text-gray-600" },
};

const CANDIDATE_BADGE: Partial<Record<CandidateStatus, { label: string; className: string }>> = {
  committed: { label: "Committed", className: "border-green-200 bg-green-50 text-green-700" },
  selected: { label: "Selected", className: "border-blue-200 bg-blue-50 text-blue-700" },
  shortlisted: { label: "Shortlisted", className: "border-amber-200 bg-amber-50 text-amber-700" },
  interested: { label: "Interested", className: "border-sky-200 bg-sky-50 text-sky-700" },
  requested: { label: "Requested", className: "border-purple-200 bg-purple-50 text-purple-700" },
  invited: { label: "Invited", className: "border-gray-200 bg-gray-100 text-gray-700" },
};

const GROUP_LABEL: Record<CandidateGroup, string> = {
  partners: "Partners",
  candidates: "Candidates",
  recommended: "Recommended by Great Grants",
};

const GROUP_ORDER: CandidateGroup[] = ["partners", "candidates", "recommended"];

export function PartnerNeedCard({
  need,
  projectBudget,
  onFindPartners,
  onPublishCall,
  onCopyCallLink,
  onEditNeed,
  onToggleDeferred,
  onCandidateAction,
}: PartnerNeedCardProps) {
  const status = needStatus(need);
  const badge = NEED_BADGE[status];
  const committed = committedOf(need);
  const pending = sumAmount(need.candidates.filter((c) => c.status === "selected"));
  const headingId = `need-${need.id}-title`;
  const suggested = need.candidates.filter((c) => c.status === "suggested");

  const groups = GROUP_ORDER.map((id) => ({
    id,
    items: sortCandidates(need.candidates.filter((c) => groupOf(c) === id)),
  })).filter((g) => g.items.length > 0);
  const hasPendingCandidates = need.candidates.some((c) => groupOf(c) === "candidates");

  return (
    <section
      id={`need-${need.id}`}
      aria-labelledby={headingId}
      className="scroll-mt-6 rounded-lg border border-gray-200 bg-white p-5 sm:p-6"
    >
      {/* Header: what the need is, where it stands, and the one way to act on it. */}
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
        <div className="min-w-0 flex-1 basis-80">
          <div className="flex flex-wrap items-center gap-2">
            <h3 id={headingId} className="text-lg font-semibold text-gray-900">
              {need.title}
            </h3>
            <Badge className={badge.className}>{badge.label}</Badge>
          </div>
          <p className="mt-1 text-sm text-gray-600">
            {need.description} · {need.needed} needed · {kRange(need.minAmount, need.maxAmount)} each
          </p>
        </div>

        <div className="flex items-center gap-2">
          {status !== "deferred" && (
            <Button variant="outline" size="sm" onClick={() => onFindPartners(need)} className="bg-white">
              <Search aria-hidden="true" />
              Find partners
            </Button>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8" aria-label={`More actions for ${need.title}`}>
                <MoreHorizontal aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuItem onClick={() => onEditNeed(need)} className="gap-2.5 py-2">
                <Pencil className="size-4" aria-hidden="true" />
                Edit need
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onToggleDeferred(need)} className="gap-2.5 py-2">
                {need.deferred ? (
                  <>
                    <RotateCcw className="size-4" aria-hidden="true" />
                    Reopen need
                  </>
                ) : (
                  <>
                    <Users className="size-4" aria-hidden="true" />
                    Defer to post-award
                  </>
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Progress */}
      {status === "deferred" ? (
        <p className="mt-3 text-sm font-medium text-gray-700">
          Post-award · est. {money(need.deferredEstimate ?? 0)}
        </p>
      ) : (
        <div className="mt-4">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm">
            <p className="font-medium text-gray-900">
              {committed.length} of {need.needed} committed
            </p>
            <p className="text-gray-600">
              {money(sumAmount(committed))} of {kRange(need.minAmount * need.needed, need.maxAmount * need.needed)}
              {pending > 0 && <span> · {money(pending)} pending</span>}
            </p>
          </div>
          <div
            role="img"
            aria-label={`${committed.length} of ${need.needed} partners committed`}
            className="mt-2 flex gap-1"
          >
            {Array.from({ length: need.needed }, (_, i) => (
              <span
                key={i}
                className={`h-1.5 flex-1 rounded-full ${i < committed.length ? "bg-green-500" : "bg-gray-200"}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Partner Call — the primary route to fill an open need. */}
      {status === "open" && (
        <div className="mt-4">
          {need.call ? (
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-teal-200 bg-teal-50 px-4 py-3">
              <div className="min-w-0 flex-1 basis-72">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="border-teal-200 bg-white text-teal-700 hover:bg-white">
                    <Check aria-hidden="true" />
                    Partner Call published
                  </Badge>
                  <span className="text-sm text-gray-900">
                    {need.call.responses} {need.call.responses === 1 ? "response" : "responses"} · closes{" "}
                    {formatDate(need.call.closesOn)}
                  </span>
                </div>
                <p className="mt-1 flex items-center gap-1.5 truncate text-xs text-gray-600">
                  <Link2 className="size-3.5 shrink-0" aria-hidden="true" />
                  <span className="truncate">{need.call.url}</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="bg-white" onClick={() => onCopyCallLink(need)}>
                  <Copy aria-hidden="true" />
                  Copy link
                </Button>
                <Button variant="outline" size="sm" className="bg-white" onClick={() => onPublishCall(need)}>
                  Edit call
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-dashed border-teal-300 bg-teal-50/60 px-4 py-4">
              <div className="flex min-w-0 flex-1 basis-80 items-start gap-3">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-teal-700 ring-1 ring-teal-200">
                  <Megaphone className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900">
                    {committed.length > 0
                      ? `Find your ${ordinal(committed.length + 1)} ${need.title.toLowerCase()}`
                      : `Find your ${need.title.toLowerCase()}`}
                  </p>
                  <p className="text-sm text-gray-600">
                    Publish a Partner Call so qualified organizations can respond with their interest.
                    {suggested.length > 0 &&
                      ` ${suggested.length} recommended ${suggested.length === 1 ? "partner" : "partners"} can be notified directly.`}
                  </p>
                </div>
              </div>
              <Button className="bg-teal-600 text-white hover:bg-teal-700" onClick={() => onPublishCall(need)}>
                <Megaphone aria-hidden="true" />
                Publish Partner Call
              </Button>
            </div>
          )}
        </div>
      )}

      {status === "deferred" && need.deferredNote && (
        <p className="mt-2 text-sm text-gray-600">{need.deferredNote}</p>
      )}

      {/* Partners, grouped by how far along they are. */}
      {groups.length > 0 && (
        <div className="mt-5 space-y-5">
          {groups.map((group) => (
            <div key={group.id}>
              {(groups.length > 1 || group.id === "recommended") && (
                <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {group.id === "recommended" && <Sparkles className="size-3.5 text-teal-600" aria-hidden="true" />}
                  {GROUP_LABEL[group.id]}
                  <span className="font-normal normal-case tracking-normal text-gray-400">· {group.items.length}</span>
                </h4>
              )}
              <ul className="space-y-2">
                {group.items.map((candidate) => (
                  <CandidateRow
                    key={candidate.id}
                    candidate={candidate}
                    projectBudget={projectBudget}
                    onAction={(action) => onCandidateAction(need, candidate, action)}
                  />
                ))}
              </ul>
            </div>
          ))}
          {hasPendingCandidates && status === "open" && (
            <p className="text-xs text-gray-500">
              Declining the remaining candidates is offered in bulk once this need is filled.
            </p>
          )}
        </div>
      )}
    </section>
  );
}

const ordinal = (n: number) => {
  const names = ["", "1st", "2nd", "3rd"];
  return names[n] ?? `${n}th`;
};

function RecommendedBadge({ reason }: { reason?: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          tabIndex={0}
          className="inline-flex items-center gap-1 rounded-full border border-teal-200 bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-700 outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
        >
          <Sparkles className="size-3" aria-hidden="true" />
          Recommended partner
          {reason && <span className="sr-only">. {reason}</span>}
        </span>
      </TooltipTrigger>
      {reason && <TooltipContent className="max-w-64">{reason}</TooltipContent>}
    </Tooltip>
  );
}

const ACTION_BY_STATUS: Partial<Record<CandidateStatus, { action: CandidateAction; label: string }>> = {
  committed: { action: "details", label: "Details" },
  selected: { action: "mark-mou", label: "Mark MOU signed" },
  shortlisted: { action: "select", label: "Select" },
  interested: { action: "review", label: "Review" },
  requested: { action: "review", label: "Review" },
  suggested: { action: "invite", label: "Invite" },
};

function CandidateRow({
  candidate,
  projectBudget,
  onAction,
}: {
  candidate: PartnerCandidate;
  projectBudget: number;
  onAction: (action: CandidateAction) => void;
}) {
  const badge = CANDIDATE_BADGE[candidate.status];
  const cta = ACTION_BY_STATUS[candidate.status];
  const pct = ((candidate.amount / projectBudget) * 100).toFixed(1);
  const amountCaption =
    candidate.status === "committed"
      ? `${pct}% of budget`
      : candidate.status === "selected"
        ? `MOU not signed · ${pct}%`
        : candidate.status === "suggested"
          ? "Estimated"
          : "Proposed";

  return (
    <li className="flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg border border-gray-200 px-4 py-3">
      <span
        aria-hidden="true"
        className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-600"
      >
        {initialsOf(candidate.name)}
      </span>

      <div className="min-w-0 flex-1 basis-60">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <p className="font-medium text-gray-900">{candidate.name}</p>
          {candidate.recommended && <RecommendedBadge reason={candidate.recommendedReason} />}
        </div>
        <p className="text-xs text-gray-600">{[candidate.city, ...candidate.meta].join(" · ")}</p>
        {candidate.status === "suggested" && candidate.recommendedReason && (
          <p className="mt-0.5 text-xs text-teal-800">{candidate.recommendedReason}</p>
        )}
      </div>

      <div className="ml-auto flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-900">{money(candidate.amount)}</p>
          <p className="text-xs text-gray-500">{amountCaption}</p>
        </div>
        <div className="w-24">
          {badge && <Badge className={`${badge.className} rounded-full`}>{badge.label}</Badge>}
        </div>
        <div className="flex w-36 justify-end">
          {cta ? (
            <Button
              variant="outline"
              size="sm"
              className="bg-white"
              onClick={() => onAction(cta.action)}
              aria-label={`${cta.label} — ${candidate.name}`}
            >
              {cta.label}
            </Button>
          ) : null}
        </div>
      </div>
    </li>
  );
}
