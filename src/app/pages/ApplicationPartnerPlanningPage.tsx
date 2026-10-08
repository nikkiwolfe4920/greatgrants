import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, Circle, Megaphone, PauseCircle, Plus, Search, Sparkles } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { PartnerSearchModal } from "@/app/components/PartnerSearchModal";
import { PartnerNeedCard, type CandidateAction } from "@/app/components/partner-planning/PartnerNeedCard";
import { PublishCallDialog, type PublishCallValues } from "@/app/components/partner-planning/PublishCallDialog";
import { NeedDialog, type NeedValues } from "@/app/components/partner-planning/NeedDialog";
import {
  committedOf,
  formatDate,
  money,
  needStatus,
  sumAmount,
  todayShort,
} from "@/app/components/partner-planning/utils";
import {
  initialPartnerNeeds,
  planningApplication as app,
  type PartnerCandidate,
  type PartnerNeedRecord,
} from "@/data/partnerPlanning";

/** Partner-need ids in this page's mock data → the ids PartnerSearchModal knows about. */
const SEARCH_NEED_BY_ID: Record<string, string> = { nutrition: "nutrition", evaluator: "evaluation" };

const BUDGET_SECTION_PATH = "/application/1/s/s5";

/**
 * /application-partner-planning — the prime applicant's "Partners" step for one
 * application, while it is still in Planning. For each partner need it shows who
 * is committed, who is being considered, and who Great Grants recommends — and
 * makes publishing a Partner Call the clear next step whenever a need is open
 * and has no call yet. Drafting stays locked until every need is filled or
 * deferred, and the readiness card says exactly what stands in the way.
 */
export function ApplicationPartnerPlanningPage() {
  const navigate = useNavigate();
  const [needs, setNeeds] = useState<PartnerNeedRecord[]>(initialPartnerNeeds);
  const [publishNeedId, setPublishNeedId] = useState<string | null>(null);
  const [needDialog, setNeedDialog] = useState<{ open: boolean; needId: string | null }>({ open: false, needId: null });
  const [search, setSearch] = useState<{ open: boolean; needId: string; key: number }>({
    open: false,
    needId: "nutrition",
    key: 0,
  });
  const [detail, setDetail] = useState<{ needId: string; candidateId: string; mode: "details" | "review" } | null>(null);

  const publishNeed = needs.find((n) => n.id === publishNeedId) ?? null;
  const editingNeed = needs.find((n) => n.id === needDialog.needId) ?? null;
  const detailNeed = needs.find((n) => n.id === detail?.needId);
  const detailCandidate = detailNeed?.candidates.find((c) => c.id === detail?.candidateId);

  const updateNeed = (id: string, patch: (n: PartnerNeedRecord) => PartnerNeedRecord) =>
    setNeeds((all) => all.map((n) => (n.id === id ? patch(n) : n)));

  const updateCandidate = (needId: string, candidateId: string, patch: (c: PartnerCandidate) => PartnerCandidate) =>
    updateNeed(needId, (n) => ({ ...n, candidates: n.candidates.map((c) => (c.id === candidateId ? patch(c) : c)) }));

  /** Applies a change and offers one-step undo via the toast. */
  const withUndo = (message: string, apply: () => void, snapshot = needs) => {
    apply();
    toast.success(message, { action: { label: "Undo", onClick: () => setNeeds(snapshot) } });
  };

  // --- Derived state -------------------------------------------------------
  const summary = useMemo(() => {
    const open = needs.filter((n) => needStatus(n) === "open");
    const committed = sumAmount(needs.flatMap((n) => committedOf(n)));
    const unsigned = sumAmount(needs.flatMap((n) => n.candidates.filter((c) => c.status === "selected")));
    const deferred = needs.filter((n) => n.deferred).reduce((t, n) => t + (n.deferredEstimate ?? 0), 0);
    const total = committed + unsigned + deferred;
    const largest = Math.max(
      0,
      ...needs.flatMap((n) => [
        ...n.candidates.filter((c) => c.status === "committed" || c.status === "selected").map((c) => c.amount),
        n.deferred ? (n.deferredEstimate ?? 0) : 0,
      ]),
    );
    return { open, resolved: needs.length - open.length, committed, unsigned, deferred, total, largest };
  }, [needs]);

  const ready = summary.open.length === 0;
  const pct = (n: number) => `${Math.min(100, (n / app.projectBudget) * 100)}%`;

  // --- Next best step ------------------------------------------------------
  const nextStep = useMemo(() => {
    // Work the open needs in order; within a need, the nearest unblocked action wins.
    for (const need of summary.open) {
      const unsigned = need.candidates.find((c) => c.status === "selected");
      if (unsigned) {
        return {
          label: `Mark ${unsigned.name}'s MOU signed`,
          hint: "Committing a selected partner fills the need.",
          cta: "Review",
          run: () => scrollToNeed(need.id),
        };
      }
      if (!need.call) {
        return {
          label: `Publish a Partner Call for ${need.title.toLowerCase()}`,
          hint: "It's the fastest way to hear from qualified organizations.",
          cta: "Publish call",
          run: () => setPublishNeedId(need.id),
        };
      }
    }
    const first = summary.open[0];
    if (!first) return null;
    return {
      label: `Review responses for ${first.title.toLowerCase()}`,
      hint: "Select a candidate to move toward an MOU.",
      cta: "Review",
      run: () => scrollToNeed(first.id),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needs, summary.open]);

  function scrollToNeed(id: string) {
    document.getElementById(`need-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // --- Handlers ------------------------------------------------------------
  const publishCall = (need: PartnerNeedRecord, values: PublishCallValues) => {
    const wasEditing = !!need.call;
    const snapshot = needs;
    updateNeed(need.id, (n) => ({
      ...n,
      call: { closesOn: values.closesOn, responses: n.call?.responses ?? 0, url: `greatgrants.ai/call/acl-${n.id}-partner` },
      candidates: values.notifyRecommended
        ? n.candidates.map((c) => (c.status === "suggested" ? { ...c, status: "invited" as const } : c))
        : n.candidates,
    }));
    setPublishNeedId(null);
    if (wasEditing) {
      toast.success("Partner Call updated", { description: `Now closes ${formatDate(values.closesOn)}.` });
      return;
    }
    toast.success("Partner Call published", {
      description: `${need.title} · closes ${formatDate(values.closesOn)}.`,
      action: { label: "Undo", onClick: () => setNeeds(snapshot) },
    });
  };

  const copyCallLink = async (need: PartnerNeedRecord) => {
    if (!need.call) return;
    try {
      await navigator.clipboard.writeText(`https://${need.call.url}`);
      toast.success("Link copied");
    } catch {
      toast.error("Couldn't copy the link", { description: need.call.url });
    }
  };

  const toggleDeferred = (need: PartnerNeedRecord) => {
    const snapshot = needs;
    withUndo(
      need.deferred ? `${need.title} reopened` : `${need.title} deferred to post-award`,
      () =>
        updateNeed(need.id, (n) => ({
          ...n,
          deferred: !n.deferred,
          deferredEstimate: n.deferred ? n.deferredEstimate : Math.round((n.minAmount + n.maxAmount) / 2),
        })),
      snapshot,
    );
  };

  const candidateAction = (need: PartnerNeedRecord, candidate: PartnerCandidate, action: CandidateAction) => {
    const snapshot = needs;
    switch (action) {
      case "invite":
        withUndo(
          `Invitation sent to ${candidate.name}`,
          () => updateCandidate(need.id, candidate.id, (c) => ({ ...c, status: "invited" })),
          snapshot,
        );
        break;
      case "select":
        withUndo(
          `${candidate.name} selected`,
          () =>
            updateCandidate(need.id, candidate.id, (c) => ({
              ...c,
              status: "selected",
              meta: [`Selected ${todayShort()}`, "MOU not marked signed"],
            })),
          snapshot,
        );
        break;
      case "mark-mou":
        withUndo(
          `${candidate.name} committed`,
          () =>
            updateCandidate(need.id, candidate.id, (c) => ({
              ...c,
              status: "committed",
              meta: [...c.meta.filter((m) => !m.startsWith("MOU")), `MOU signed ${todayShort()}`],
            })),
          snapshot,
        );
        break;
      case "review":
      case "details":
        setDetail({ needId: need.id, candidateId: candidate.id, mode: action });
        break;
    }
  };

  const saveNeed = (values: NeedValues) => {
    if (editingNeed) {
      updateNeed(editingNeed.id, (n) => ({ ...n, ...values }));
      toast.success("Partner need updated");
    } else {
      const id = `need-${Date.now()}`;
      setNeeds((all) => [...all, { id, ...values, candidates: [] }]);
      toast.success("Partner need added", {
        action: { label: "View", onClick: () => requestAnimationFrame(() => scrollToNeed(id)) },
      });
    }
    setNeedDialog({ open: false, needId: null });
  };

  const openSearch = (need: PartnerNeedRecord) =>
    setSearch((s) => ({ open: true, needId: SEARCH_NEED_BY_ID[need.id] ?? "nutrition", key: s.key + 1 }));

  const generateDraft = () => toast.success("Generating your draft…", { description: "Partner details will be woven into the narrative." });

  const hasLargeSubaward = summary.largest > app.indirectThreshold;

  return (
    <div className="mx-auto max-w-[1100px] p-6 sm:p-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/applications">Applications</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{app.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Page header */}
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1 basis-96">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl text-gray-900" style={{ fontFamily: "Lustria, serif", fontWeight: 600 }}>
              {app.title}
            </h1>
            <Badge className="border-purple-200 bg-purple-50 text-purple-700">Planning</Badge>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            {app.funder} · Closes {formatDate(app.closesOn)} · Program: {app.programName}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-white" onClick={() => setSearch((s) => ({ ...s, open: true, key: s.key + 1 }))}>
            <Plus aria-hidden="true" />
            Add a partner
          </Button>
          <Button
            className="bg-teal-600 text-white hover:bg-teal-700"
            disabled={!ready}
            aria-describedby="draft-readiness"
            onClick={generateDraft}
          >
            Generate Draft
          </Button>
        </div>
      </header>

      {/* Readiness — one place that says what's left and what to do next. */}
      <section
        aria-labelledby="draft-readiness-title"
        className={`mt-6 rounded-lg border p-5 ${ready ? "border-green-200 bg-green-50" : "border-amber-200 bg-amber-50"}`}
      >
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
          <div className="min-w-0 flex-1 basis-72">
            <h2 id="draft-readiness-title" className="font-semibold text-gray-900">
              {ready ? "Ready to generate your draft" : "Drafting unlocks when every partner need is filled or deferred"}
            </h2>
            <p id="draft-readiness" className="mt-0.5 text-sm text-gray-700">
              {summary.resolved} of {needs.length} needs resolved
              {!ready && (
                <>
                  . Still open:{" "}
                  {summary.open
                    .map((n) => `${n.title} (${committedOf(n).length} of ${n.needed} committed)`)
                    .join(", ")}
                  .
                </>
              )}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Partner needs">
              {needs.map((n) => {
                const s = needStatus(n);
                const Icon = s === "filled" ? CheckCircle2 : s === "deferred" ? PauseCircle : Circle;
                return (
                  <li key={n.id}>
                    <button
                      type="button"
                      onClick={() => scrollToNeed(n.id)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-800 outline-none hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-teal-500"
                    >
                      <Icon
                        className={`size-3.5 ${s === "filled" ? "text-green-600" : s === "deferred" ? "text-gray-400" : "text-amber-600"}`}
                        aria-hidden="true"
                      />
                      {n.title}
                      <span className="font-normal text-gray-500">
                        · {s === "filled" ? "Filled" : s === "deferred" ? "Deferred" : `${committedOf(n).length}/${n.needed}`}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {nextStep && (
            <div className="flex basis-72 items-center gap-3 rounded-md bg-white/80 p-3 ring-1 ring-amber-200">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">Next step</p>
                <p className="text-sm font-medium text-gray-900">{nextStep.label}</p>
                <p className="text-xs text-gray-600">{nextStep.hint}</p>
              </div>
              <Button size="sm" className="bg-teal-600 text-white hover:bg-teal-700" onClick={nextStep.run}>
                {nextStep.cta === "Publish call" ? <Megaphone aria-hidden="true" /> : null}
                {nextStep.cta}
                {nextStep.cta !== "Publish call" ? <ArrowRight aria-hidden="true" /> : null}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Subaward allocation */}
      <section aria-labelledby="allocation-title" className="mt-6 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 id="allocation-title" className="font-semibold text-gray-900">
              Subaward allocation
            </h2>
            <p className="text-sm text-gray-600">
              {money(summary.total)} of {money(app.projectBudget)} project budget (
              {Math.round((summary.total / app.projectBudget) * 100)}%) goes to partners
            </p>
          </div>
          <Button variant="outline" size="sm" className="bg-white" onClick={() => navigate(BUDGET_SECTION_PATH)}>
            Open Budget
          </Button>
        </div>
        <div
          role="img"
          aria-label={`Committed ${money(summary.committed)}, MOU not signed ${money(summary.unsigned)}, deferred estimate ${money(summary.deferred)}, of ${money(app.projectBudget)} budget`}
          className="mt-4 flex h-2 overflow-hidden rounded-full bg-gray-200"
        >
          <span className="bg-green-600" style={{ width: pct(summary.committed) }} />
          <span className="bg-amber-400" style={{ width: pct(summary.unsigned) }} />
          <span className="bg-gray-400" style={{ width: pct(summary.deferred) }} />
        </div>
        <dl className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm">
          {[
            ["Committed", summary.committed, "bg-green-600"],
            ["MOU not signed", summary.unsigned, "bg-amber-400"],
            ["Deferred (estimate)", summary.deferred, "bg-gray-400"],
          ].map(([label, value, dot]) => (
            <div key={label as string} className="flex items-center gap-2">
              <span className={`size-2 rounded-full ${dot}`} aria-hidden="true" />
              <dt className="text-gray-600">{label}</dt>
              <dd className="font-medium text-gray-900">{money(value as number)}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-xs text-gray-500">
          {hasLargeSubaward
            ? `Indirect costs apply to the first ${money(app.indirectThreshold)} of each subaward. `
            : `No subaward exceeds ${money(app.indirectThreshold)}, so indirect costs apply to each full amount. `}
          Amounts come from subaward lines in Budget.
        </p>
      </section>

      {/* Partner needs */}
      <div className="mt-10">
        <h2 className="text-2xl text-gray-900" style={{ fontFamily: "Lustria, serif", fontWeight: 600 }}>
          Partners
        </h2>
        <div className="mt-1 h-0.5 w-10 bg-teal-700" aria-hidden="true" />
        <p className="mt-3 text-sm text-gray-600">
          Partner needs start from your program, {app.programName}. Changes here apply to this application only.
        </p>
      </div>

      <div className="mt-5 space-y-5">
        {needs.map((need) => (
          <PartnerNeedCard
            key={need.id}
            need={need}
            projectBudget={app.projectBudget}
            onFindPartners={openSearch}
            onPublishCall={(n) => setPublishNeedId(n.id)}
            onCopyCallLink={copyCallLink}
            onEditNeed={(n) => setNeedDialog({ open: true, needId: n.id })}
            onToggleDeferred={toggleDeferred}
            onCandidateAction={candidateAction}
          />
        ))}
      </div>

      <Button
        variant="outline"
        className="mt-5 bg-white"
        onClick={() => setNeedDialog({ open: true, needId: null })}
      >
        <Plus aria-hidden="true" />
        Add a partner need
      </Button>

      {/* Dialogs */}
      <PublishCallDialog
        need={publishNeed}
        nofoClosesOn={app.closesOn}
        recommendedCount={publishNeed?.candidates.filter((c) => c.status === "suggested").length ?? 0}
        onOpenChange={(open) => !open && setPublishNeedId(null)}
        onSubmit={publishCall}
      />

      <NeedDialog
        open={needDialog.open}
        need={editingNeed}
        onOpenChange={(open) => !open && setNeedDialog({ open: false, needId: null })}
        onSubmit={saveNeed}
      />

      <PartnerSearchModal
        key={search.key}
        open={search.open}
        onOpenChange={(open) => setSearch((s) => ({ ...s, open }))}
        defaultNeedId={search.needId}
      />

      <Dialog open={!!detail && !!detailCandidate} onOpenChange={(open) => !open && setDetail(null)}>
        <DialogContent className="sm:max-w-md">
          {detailNeed && detailCandidate && (
            <>
              <DialogHeader>
                <DialogTitle className="flex flex-wrap items-center gap-2">
                  {detailCandidate.name}
                  {detailCandidate.recommended && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-teal-200 bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-700">
                      <Sparkles className="size-3" aria-hidden="true" />
                      Recommended partner
                    </span>
                  )}
                </DialogTitle>
                <DialogDescription>
                  {detailNeed.title} · {detailCandidate.city}
                </DialogDescription>
              </DialogHeader>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-xs text-gray-500">Proposed subaward</dt>
                  <dd className="font-semibold text-gray-900">{money(detailCandidate.amount)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-gray-500">Where they stand</dt>
                  <dd className="text-gray-900">{detailCandidate.meta.join(" · ")}</dd>
                </div>
                {detailCandidate.recommendedReason && (
                  <div>
                    <dt className="text-xs text-gray-500">Why Great Grants recommends them</dt>
                    <dd className="text-gray-900">{detailCandidate.recommendedReason}</dd>
                  </div>
                )}
              </dl>
              <DialogFooter className="gap-2 sm:gap-2">
                <Button variant="outline" onClick={() => setDetail(null)}>
                  Close
                </Button>
                {detail?.mode === "review" && (
                  <Button
                    className="bg-teal-600 text-white hover:bg-teal-700"
                    onClick={() => {
                      const snapshot = needs;
                      updateCandidate(detailNeed.id, detailCandidate.id, (c) => ({ ...c, status: "shortlisted" }));
                      setDetail(null);
                      toast.success(`${detailCandidate.name} shortlisted`, {
                        action: { label: "Undo", onClick: () => setNeeds(snapshot) },
                      });
                    }}
                  >
                    <Search aria-hidden="true" />
                    Shortlist
                  </Button>
                )}
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
