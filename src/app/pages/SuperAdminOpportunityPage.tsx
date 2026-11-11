import { useEffect, useRef, useState } from "react";
import { Link, useBlocker, useParams } from "react-router";
import { toast } from "sonner";
import {
  AlertCircle,
  ArrowLeft,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  FileText,
  Home,
  Loader2,
  Lock,
  RotateCcw,
  Trash2,
  Upload,
  Plus,
} from "lucide-react";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { DatePickerField } from "../components/admin/DatePickerField";
import { EditableList, EditableText } from "../components/admin/editable";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Switch } from "../components/ui/switch";
import { TooltipProvider } from "../components/ui/tooltip";
import {
  DEFAULT_OPPORTUNITY_ID,
  getSeedOpportunity,
  type OpportunityContact,
  type OpportunityDetails,
  type PrivateOpportunityDetail,
} from "@/data/privateOpportunities";
import { usePrivateOpportunityEditor, type SaveState } from "@/hooks/usePrivateOpportunityEditor";

/* ─────────────────────────────────────────────────────────────────
   /super-admin-op — Private Opportunity editor (Super Admin)

   Grant Detail layout with every attribute editable in place:
     • edits auto-save (stamp shown), and enable "Publish Changes"
     • Last Published timestamp beside the button
     • leaving with unpublished changes asks for confirmation
     • Open → Closed asks for confirmation and stamps when it closed;
       a closed opportunity can be re-opened
───────────────────────────────────────────────────────────────── */

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "eligible-activities", label: "Eligible Activities" },
  { id: "who-can-apply", label: "Who Can Apply" },
  { id: "assessment-criteria", label: "Assessment Criteria" },
  { id: "restrictions", label: "Restrictions" },
  { id: "grant-details", label: "Grant Details" },
] as const;

const DETAIL_FIELDS: { key: keyof OpportunityDetails; label: string }[] = [
  { key: "opportunityNumber", label: "Opportunity Number" },
  { key: "fundingAgency", label: "Funding Agency" },
  { key: "assistanceListing", label: "Assistance Listing (CFDA)" },
  { key: "awardCeilingFloor", label: "Award Ceiling / Floor" },
  { key: "totalFundingPool", label: "Total Funding Pool" },
  { key: "expectedAwards", label: "Expected Number of Awards" },
  { key: "keyDeadline", label: "Key Deadline" },
  { key: "applicableToChurches", label: "Applicable to Churches?" },
  { key: "fundingInstrument", label: "Funding Instrument" },
  { key: "projectPeriod", label: "Project Period" },
  { key: "phaseAtHand", label: "Phase at Hand" },
  { key: "eligibleApplicants", label: "Eligible Applicants" },
  { key: "matchCostShare", label: "Match / Cost Share" },
  { key: "closingInfo", label: "Closing Info" },
];

const QUICK_STATS: { key: keyof PrivateOpportunityDetail; label: string }[] = [
  { key: "location", label: "Location" },
  { key: "region", label: "Region" },
  { key: "openingDateTime", label: "Opening Date" },
  { key: "closingDateTime", label: "Closing Date" },
  { key: "recipients", label: "Recipients" },
  { key: "totalPool", label: "Total Pool" },
];

function formatStamp(ts: number): string {
  return new Date(ts).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatTime(ts: number): string {
  return new Date(ts).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit" });
}

function formatFileSize(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

function fileTypeLabel(file: File): string {
  const ext = file.name.includes(".") ? file.name.split(".").pop()!.toUpperCase() : "";
  if (ext === "PDF") return "PDF Document";
  return ext ? `${ext} File` : "File";
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "Lustria, serif" }}>
        {children}
      </h2>
      <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white rounded-xl border border-gray-200 p-6">{children}</div>;
}

function statusBadgeClass(status: "Open" | "Closed") {
  return status === "Open"
    ? "bg-green-50 text-green-700 border-green-200"
    : "bg-gray-100 text-gray-600 border-gray-200";
}

/* ── Publish / auto-save cluster ─────────────────────────────── */

function AutoSaveStamp({ saveState, lastSavedAt }: { saveState: SaveState; lastSavedAt: number | null }) {
  if (saveState === "saving") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs text-gray-500" role="status">
        <Loader2 className="w-3 h-3 animate-spin" />
        Saving…
      </span>
    );
  }
  if (saveState === "saved" && lastSavedAt) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs text-gray-500" role="status">
        <Check className="w-3 h-3 text-teal-600" />
        Auto-saved {formatTime(lastSavedAt)}
      </span>
    );
  }
  return null;
}

interface PublishControlsProps {
  dirty: boolean;
  onPublish: () => void;
  lastPublishedAt: number;
  saveState: SaveState;
  lastSavedAt: number | null;
  align?: "end" | "start";
}

function PublishControls({ dirty, onPublish, lastPublishedAt, saveState, lastSavedAt, align = "end" }: PublishControlsProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${align === "end" ? "items-end" : "items-start"}`}>
      <Button
        onClick={onPublish}
        disabled={!dirty}
        className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 disabled:bg-gray-100 disabled:text-gray-400 disabled:opacity-100"
        style={{ fontFamily: "Cabin, sans-serif" }}
      >
        {dirty ? "Publish Changes" : "Publish"}
      </Button>
      <span className="text-xs text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
        Last published {formatStamp(lastPublishedAt)}
      </span>
      <AutoSaveStamp saveState={saveState} lastSavedAt={lastSavedAt} />
    </div>
  );
}

/* ── Editor ───────────────────────────────────────────────────── */

function OpportunityEditor({ seed }: { seed: PrivateOpportunityDetail }) {
  const { draft, dirty, restoredDraft, lastPublishedAt, lastSavedAt, saveState, update, publish, discardDraft, setStatus } =
    usePrivateOpportunityEditor(seed);

  const [activeSection, setActiveSection] = useState<string>("overview");
  const [docsExpanded, setDocsExpanded] = useState(true);
  const [closeDialogOpen, setCloseDialogOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const set = <K extends keyof PrivateOpportunityDetail>(key: K, value: PrivateOpportunityDetail[K]) =>
    update((d) => ({ ...d, [key]: value }));
  const setDetail = (key: keyof OpportunityDetails, value: string) =>
    update((d) => ({ ...d, details: { ...d.details, [key]: value } }));
  const setContact = (key: keyof OpportunityContact, value: string) =>
    update((d) => ({ ...d, contact: { ...d.contact, [key]: value } }));

  const isClosed = draft.status === "Closed";

  // Warn before leaving with unpublished changes — in-app navigation…
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) => dirty && currentLocation.pathname !== nextLocation.pathname,
  );
  // …and hard reload / tab close.
  useEffect(() => {
    if (!dirty) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty]);

  useEffect(() => {
    if (restoredDraft) toast("Restored your auto-saved draft", { description: "These changes are not published yet." });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Slim sticky bar once the page header scrolls out of view.
  useEffect(() => {
    const root = scrollRef.current;
    const header = headerRef.current;
    if (!root || !header) return;
    const observer = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting), { root, threshold: 0 });
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // "On This Page" scroll-spy.
  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { root, rootMargin: "-10% 0px -70% 0px" },
      );
      o.observe(el);
      return o;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    const root = scrollRef.current;
    if (!el || !root) return;
    const top = el.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop - 72;
    root.scrollTo({ top, behavior: "smooth" });
  };

  const handlePublish = () => {
    const at = publish();
    toast.success("Changes published", { description: formatStamp(at) });
  };

  const handleStatusToggle = (open: boolean) => {
    if (open) {
      setStatus("Open");
      toast.success("Opportunity re-opened", { description: "It is accepting applications again." });
    } else {
      setCloseDialogOpen(true);
    }
  };

  const confirmClose = () => {
    setStatus("Closed");
    setCloseDialogOpen(false);
    toast("Opportunity closed", { description: "It is no longer receiving applications." });
  };

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const added = Array.from(files).map((file) => ({
      id: `doc-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: file.name,
      type: fileTypeLabel(file),
      size: formatFileSize(file.size),
    }));
    update((d) => ({ ...d, documents: [...d.documents, ...added] }));
    setDocsExpanded(true);
  };

  const confirmLeave = () => {
    discardDraft();
    blocker.proceed?.();
  };

  return (
    <TooltipProvider>
      <div className="flex h-screen bg-white">
        <AdminSidebar />

        <div className="relative flex-1 min-w-0">
          {/* Sticky action bar — appears once the page header scrolls away */}
          {stuck && (
            <div className="absolute top-0 inset-x-0 z-30 bg-white/95 backdrop-blur border-b border-gray-200 shadow-[0_1px_12px_rgba(0,0,0,0.07)]">
              <div className="px-6 py-2.5 flex items-center justify-between gap-4">
                <div className="min-w-0 flex items-center gap-3">
                  <h2 className="text-sm font-semibold text-gray-900 truncate" style={{ fontFamily: "Cabin, sans-serif" }}>
                    {draft.title || "Untitled opportunity"}
                  </h2>
                  <Badge className={`text-[10px] px-1.5 py-0 h-4 shrink-0 ${statusBadgeClass(draft.status)}`}>
                    {draft.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <AutoSaveStamp saveState={saveState} lastSavedAt={lastSavedAt} />
                  <span className="hidden md:inline text-xs text-gray-500">Last published {formatStamp(lastPublishedAt)}</span>
                  <Button
                    size="sm"
                    onClick={handlePublish}
                    disabled={!dirty}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold h-8 text-xs px-4 disabled:bg-gray-100 disabled:text-gray-400 disabled:opacity-100"
                  >
                    {dirty ? "Publish Changes" : "Publish"}
                  </Button>
                </div>
              </div>
            </div>
          )}

          <main ref={scrollRef} className="h-full overflow-y-auto" style={{ backgroundColor: "#F9FAFB" }}>
            {/* White header */}
            <div className="bg-white" ref={headerRef}>
              <div className="px-6 pt-5 pb-6">
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-5 min-w-0">
                  <Link to="/super-admin-p" className="text-gray-400 hover:text-gray-600 shrink-0" aria-label="Private Opportunities">
                    <Home className="w-4 h-4" />
                  </Link>
                  <span className="text-gray-300">/</span>
                  <span className="text-teal-700 truncate" style={{ fontFamily: "Cabin, sans-serif" }}>
                    {draft.title.length > 50 ? `${draft.title.slice(0, 50)}…` : draft.title || "Untitled opportunity"}
                  </span>
                </nav>

                <div className="flex items-start justify-between gap-8 flex-wrap lg:flex-nowrap">
                  <div className="flex-1 min-w-0">
                    <EditableText
                      value={draft.title}
                      onChange={(v) => set("title", v)}
                      label="Opportunity title"
                      placeholder="Opportunity title"
                      className="text-[2rem] leading-tight text-gray-900"
                      style={{ fontFamily: "Lustria, serif", fontWeight: 600 }}
                    />
                    <div className="mt-3">
                      <EditableText
                        value={draft.agency}
                        onChange={(v) => set("agency", v)}
                        label="Funding agency"
                        placeholder="Funding agency"
                        className="text-sm text-gray-500"
                      />
                    </div>

                    <div className="flex items-center gap-4 flex-wrap mt-3">
                      <Badge className={`text-xs px-2.5 py-1 ${statusBadgeClass(draft.status)}`}>
                        {isClosed ? "Applications Closed" : "Applications Open"}
                      </Badge>
                      <Badge variant="outline" className="text-xs px-2.5 py-1 gap-1.5 text-gray-700 border-gray-200">
                        <Lock className="w-3 h-3" />
                        Private Opportunity
                      </Badge>
                      <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>Closes</span>
                        <DatePickerField
                          value={draft.closeDate}
                          onChange={(v) => set("closeDate", v)}
                          label="Close date"
                          className="font-medium text-gray-800 text-sm"
                        />
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <DollarSign className="w-4 h-4 text-gray-400" />
                        <div className="w-52">
                          <EditableText
                            value={draft.awardRange}
                            onChange={(v) => set("awardRange", v)}
                            label="Award range"
                            placeholder="Award range"
                            className="font-medium text-gray-800 text-sm"
                          />
                        </div>
                        <span>per award</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-4 shrink-0 pt-1">
                    <div className="flex items-center gap-2.5">
                      <label
                        htmlFor="opportunity-status"
                        className="text-sm font-medium text-gray-700"
                        style={{ fontFamily: "Cabin, sans-serif" }}
                      >
                        {isClosed ? "Closed" : "Open"}
                      </label>
                      <Switch
                        id="opportunity-status"
                        checked={!isClosed}
                        onCheckedChange={handleStatusToggle}
                        aria-label="Opportunity status: open or closed"
                      />
                    </div>
                    <PublishControls
                      dirty={dirty}
                      onPublish={handlePublish}
                      lastPublishedAt={lastPublishedAt}
                      saveState={saveState}
                      lastSavedAt={lastSavedAt}
                    />
                  </div>
                </div>

                {isClosed && (
                  <div
                    className="mt-5 flex items-center justify-between gap-4 flex-wrap rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"
                    role="status"
                  >
                    <div className="flex items-center gap-3">
                      <AlertCircle className="w-4 h-4 text-gray-500 shrink-0" />
                      <p className="text-sm text-gray-700" style={{ fontFamily: "Cabin, sans-serif" }}>
                        <span className="font-semibold">Closed {draft.closedAt ? formatStamp(draft.closedAt) : ""}</span>
                        {" · "}This opportunity is no longer receiving applications.
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1.5 border-gray-300" onClick={() => handleStatusToggle(true)}>
                      <RotateCcw className="w-3.5 h-3.5" />
                      Re-open opportunity
                    </Button>
                  </div>
                )}
              </div>
              <div className="border-t border-gray-200" />
            </div>

            {/* Content */}
            <div className="px-6 py-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left rail */}
                <div className="lg:col-span-1">
                  <div className="sticky top-16 space-y-4">
                    <div className="bg-white rounded-xl border border-gray-200 p-5">
                      <h3 className="text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: "Cabin, sans-serif" }}>
                        On This Page
                      </h3>
                      <nav className="space-y-0.5" aria-label="On this page">
                        {SECTIONS.map((section) => (
                          <button
                            key={section.id}
                            type="button"
                            onClick={() => scrollToSection(section.id)}
                            className={`w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-150 group flex items-center gap-2 ${
                              activeSection === section.id
                                ? "text-teal-700 font-medium bg-teal-50"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                            }`}
                            style={{ fontFamily: "Cabin, sans-serif" }}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                                activeSection === section.id ? "bg-teal-500" : "bg-gray-300 group-hover:bg-gray-400"
                              }`}
                            />
                            {section.label}
                          </button>
                        ))}
                      </nav>
                    </div>

                    {/* Documents */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setDocsExpanded((v) => !v)}
                        aria-expanded={docsExpanded}
                        className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-gray-500" />
                          <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                            Documents <span className="font-normal text-gray-500">({draft.documents.length})</span>
                          </span>
                        </div>
                        {docsExpanded ? (
                          <ChevronUp className="w-4 h-4 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                      {docsExpanded && (
                        <div className="border-t border-gray-100 px-3 py-3 space-y-2">
                          {draft.documents.length === 0 && (
                            <p className="text-xs text-gray-500 px-2 py-1">No documents yet.</p>
                          )}
                          {draft.documents.map((doc) => (
                            <div
                              key={doc.id}
                              className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                            >
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#fef2f2" }}>
                                <FileText className="w-5 h-5 text-red-500" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold text-gray-900 truncate" title={doc.name} style={{ fontFamily: "Cabin, sans-serif" }}>
                                  {doc.name}
                                </div>
                                <div className="text-xs text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
                                  {doc.type} · {doc.size}
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => update((d) => ({ ...d, documents: d.documents.filter((x) => x.id !== doc.id) }))}
                                aria-label={`Remove ${doc.name}`}
                                className="p-1.5 rounded text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors shrink-0"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                          <input
                            ref={fileInputRef}
                            type="file"
                            multiple
                            className="sr-only"
                            aria-label="Upload documents"
                            onChange={(e) => {
                              handleFiles(e.target.files);
                              e.target.value = "";
                            }}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="w-full gap-2 border-gray-300"
                            onClick={() => fileInputRef.current?.click()}
                          >
                            <Upload className="w-3.5 h-3.5" />
                            Upload document
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-white rounded-xl border border-gray-200 p-5">
                      <h3 className="text-sm font-semibold text-gray-900 mb-4" style={{ fontFamily: "Cabin, sans-serif" }}>
                        Quick Stats
                      </h3>
                      <div className="space-y-3">
                        {QUICK_STATS.slice(0, 2).map(({ key, label }) => (
                          <QuickStatRow
                            key={key}
                            label={label}
                            value={draft[key] as string}
                            onChange={(v) => set(key, v as never)}
                          />
                        ))}
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>Status</span>
                          <Badge className={`text-xs px-2 py-0.5 ${statusBadgeClass(draft.status)}`}>{draft.status}</Badge>
                        </div>
                        {QUICK_STATS.slice(2).map(({ key, label }) => (
                          <QuickStatRow
                            key={key}
                            label={label}
                            value={draft[key] as string}
                            onChange={(v) => set(key, v as never)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main sections */}
                <div className="lg:col-span-3 space-y-6">
                  <section id="overview" className="scroll-mt-8">
                    <SectionHeading>Overview</SectionHeading>
                    <Card>
                      <EditableText
                        multiline
                        value={draft.overview}
                        onChange={(v) => set("overview", v)}
                        label="Overview"
                        placeholder="Describe this opportunity…"
                        className="text-gray-700 leading-relaxed"
                      />
                    </Card>
                  </section>

                  <section id="eligible-activities" className="scroll-mt-8">
                    <SectionHeading>Eligible Activities</SectionHeading>
                    <Card>
                      <div className="mb-3">
                        <EditableText
                          multiline
                          value={draft.eligibleActivitiesIntro}
                          onChange={(v) => set("eligibleActivitiesIntro", v)}
                          label="Eligible activities introduction"
                          placeholder="Introduction…"
                          className="text-gray-700 leading-relaxed"
                        />
                      </div>
                      <EditableList
                        items={draft.eligibleActivities}
                        onChange={(items) => set("eligibleActivities", items)}
                        label="Eligible activity"
                        addLabel="Add activity"
                      />
                      <div className="mt-4">
                        <EditableText
                          multiline
                          value={draft.eligibleActivitiesFooter}
                          onChange={(v) => set("eligibleActivitiesFooter", v)}
                          label="Eligible activities note"
                          placeholder="Add a note…"
                          className="text-gray-700 leading-relaxed"
                        />
                      </div>
                    </Card>
                  </section>

                  <section id="who-can-apply" className="scroll-mt-8">
                    <SectionHeading>Who Can Apply?</SectionHeading>
                    <Card>
                      <div className="mb-3">
                        <EditableText
                          multiline
                          value={draft.whoCanApplyIntro}
                          onChange={(v) => set("whoCanApplyIntro", v)}
                          label="Who can apply introduction"
                          placeholder="Introduction…"
                          className="text-gray-700 leading-relaxed"
                        />
                      </div>
                      <EditableList
                        items={draft.whoCanApply}
                        onChange={(items) => set("whoCanApply", items)}
                        label="Eligible applicant type"
                        addLabel="Add applicant type"
                      />
                      <div className="mt-4">
                        <EditableText
                          multiline
                          value={draft.whoCanApplyNotes}
                          onChange={(v) => set("whoCanApplyNotes", v)}
                          label="Eligibility notes"
                          placeholder="Add eligibility notes…"
                          className="text-gray-700 leading-relaxed"
                        />
                      </div>
                    </Card>
                  </section>

                  <section id="assessment-criteria" className="scroll-mt-8">
                    <SectionHeading>Main Assessment Criteria</SectionHeading>
                    <Card>
                      <div className="mb-5">
                        <EditableText
                          multiline
                          value={draft.criteriaIntro}
                          onChange={(v) => set("criteriaIntro", v)}
                          label="Assessment criteria introduction"
                          placeholder="Introduction…"
                          className="text-gray-700 leading-relaxed"
                        />
                      </div>
                      <ol className="space-y-3 mb-3">
                        {draft.criteria.map((c, i) => (
                          <li key={i} className="group flex items-start gap-4 p-4 rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-semibold text-teal-700"
                              style={{ backgroundColor: "#cbfbf1" }}
                              aria-hidden
                            >
                              {i + 1}
                            </div>
                            <div className="flex-1 min-w-0 space-y-1">
                              <EditableText
                                value={c.title}
                                onChange={(v) =>
                                  update((d) => ({ ...d, criteria: d.criteria.map((x, j) => (j === i ? { ...x, title: v } : x)) }))
                                }
                                label={`Criterion ${i + 1} title`}
                                placeholder="Criterion title"
                                className="font-semibold text-gray-900"
                              />
                              <EditableText
                                multiline
                                value={c.description}
                                onChange={(v) =>
                                  update((d) => ({
                                    ...d,
                                    criteria: d.criteria.map((x, j) => (j === i ? { ...x, description: v } : x)),
                                  }))
                                }
                                label={`Criterion ${i + 1} description`}
                                placeholder="Describe this criterion…"
                                className="text-gray-700"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => update((d) => ({ ...d, criteria: d.criteria.filter((_, j) => j !== i) }))}
                              aria-label={`Remove criterion ${i + 1}`}
                              className="p-1.5 rounded text-gray-300 hover:text-red-600 hover:bg-red-50 focus:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </li>
                        ))}
                      </ol>
                      <button
                        type="button"
                        onClick={() => update((d) => ({ ...d, criteria: [...d.criteria, { title: "", description: "" }] }))}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:text-teal-800"
                        style={{ fontFamily: "Cabin, sans-serif" }}
                      >
                        <Plus className="w-3.5 h-3.5" />
                        Add criterion
                      </button>
                      <div className="mt-5 border-t border-gray-100 pt-4">
                        <EditableText
                          multiline
                          value={draft.criteriaFooter}
                          onChange={(v) => set("criteriaFooter", v)}
                          label="Assessment criteria note"
                          placeholder="Add a note…"
                          className="text-sm text-gray-500 italic"
                        />
                      </div>
                    </Card>
                  </section>

                  <section id="restrictions" className="scroll-mt-8">
                    <SectionHeading>Restrictions</SectionHeading>
                    <Card>
                      <div className="mb-3">
                        <EditableText
                          multiline
                          value={draft.restrictionsIntro}
                          onChange={(v) => set("restrictionsIntro", v)}
                          label="Restrictions introduction"
                          placeholder="Introduction…"
                          className="text-gray-700 leading-relaxed"
                        />
                      </div>
                      <EditableList
                        items={draft.restrictions}
                        onChange={(items) => set("restrictions", items)}
                        label="Restriction"
                        addLabel="Add restriction"
                      />
                    </Card>
                  </section>

                  <section id="grant-details" className="scroll-mt-8">
                    <SectionHeading>Grant Details</SectionHeading>
                    <Card>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                        {DETAIL_FIELDS.map(({ key, label }) => (
                          <div key={key}>
                            <div className="text-xs text-gray-400 mb-1" style={{ fontFamily: "Cabin, sans-serif" }}>
                              {label}
                            </div>
                            <EditableText
                              multiline
                              value={draft.details[key]}
                              onChange={(v) => setDetail(key, v)}
                              label={label}
                              placeholder="Add…"
                              className="text-sm text-gray-800 leading-relaxed"
                            />
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: "Cabin, sans-serif" }}>
                          Contact
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                          <ContactField label="Program Admin" value={draft.contact.programAdmin} onChange={(v) => setContact("programAdmin", v)} />
                          <ContactField label="Email" value={draft.contact.email} onChange={(v) => setContact("email", v)} />
                          <ContactField label="Website" value={draft.contact.website} onChange={(v) => setContact("website", v)} link />
                        </div>
                      </div>
                    </Card>
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Close confirmation */}
        <Dialog open={closeDialogOpen} onOpenChange={setCloseDialogOpen}>
          <DialogContent className="sm:max-w-[462px]">
            <DialogHeader>
              <DialogTitle style={{ fontFamily: "Lustria, serif" }}>Close this opportunity?</DialogTitle>
              <DialogDescription className="text-gray-600 leading-relaxed">
                Are you sure you want to close this private grant opportunity? You will no longer be receiving applications.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="gap-2">
              <Button variant="outline" onClick={() => setCloseDialogOpen(false)} className="border-gray-300">
                Cancel
              </Button>
              <Button onClick={confirmClose} className="bg-red-600 hover:bg-red-700 text-white">
                Close Opportunity
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Unpublished-changes confirmation */}
        <Dialog open={blocker.state === "blocked"} onOpenChange={(open) => !open && blocker.reset?.()}>
          <DialogContent className="sm:max-w-[462px]">
            <DialogHeader>
              <DialogTitle style={{ fontFamily: "Lustria, serif" }}>Are you sure you want to exit?</DialogTitle>
              <DialogDescription className="text-gray-600 leading-relaxed">
                You have unpublished changes. If you leave this page, they will not be saved.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="gap-2">
              <Button variant="outline" onClick={() => blocker.reset?.()} className="border-gray-300">
                Keep editing
              </Button>
              <Button onClick={confirmLeave} className="bg-red-600 hover:bg-red-700 text-white">
                Exit without publishing
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  );
}

function QuickStatRow({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <span className="text-sm text-gray-500 pt-0.5 shrink-0" style={{ fontFamily: "Cabin, sans-serif" }}>
        {label}
      </span>
      <div className="w-[58%]">
        <EditableText
          value={value}
          onChange={onChange}
          label={label}
          placeholder="—"
          className="text-sm font-medium text-gray-900 text-right"
        />
      </div>
    </div>
  );
}

function ContactField({
  label,
  value,
  onChange,
  link = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  link?: boolean;
}) {
  return (
    <div>
      <div className="text-xs text-gray-400 mb-1" style={{ fontFamily: "Cabin, sans-serif" }}>
        {label}
      </div>
      <EditableText value={value} onChange={onChange} label={label} placeholder="Add…" className={`text-sm ${link ? "text-teal-600" : "text-gray-800"}`} />
    </div>
  );
}

export function SuperAdminOpportunityPage() {
  const { id = DEFAULT_OPPORTUNITY_ID } = useParams();
  const seed = getSeedOpportunity(id);

  if (!seed) {
    return (
      <div className="flex h-screen bg-white">
        <AdminSidebar />
        <main className="flex-1 flex items-center justify-center p-6" style={{ backgroundColor: "#F9FAFB" }}>
          <div className="text-center">
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h1 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "Lustria, serif" }}>
              Opportunity not found
            </h1>
            <p className="text-gray-600 mb-6">That private opportunity doesn't exist.</p>
            <Button asChild>
              <Link to="/super-admin-p">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Private Opportunities
              </Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  // key resets editor state when switching between opportunities
  return <OpportunityEditor key={seed.id} seed={seed} />;
}
