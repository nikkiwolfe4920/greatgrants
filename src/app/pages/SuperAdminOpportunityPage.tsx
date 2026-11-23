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
  X,
} from "lucide-react";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { DatePickerField } from "../components/admin/DatePickerField";
import { EditableText } from "../components/admin/editable";
import { FocusAreasField } from "../components/focus-areas/FocusAreasField";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import { TooltipProvider } from "../components/ui/tooltip";
import {
  DEFAULT_OPPORTUNITY_ID,
  getSeedOpportunity,
  type PrivateOpportunityDetail,
} from "@/data/privateOpportunities";
import { validate, type RequiredKey } from "@/data/sopOpportunities";
import { usePrivateOpportunityEditor, type SaveState } from "@/hooks/usePrivateOpportunityEditor";

/* ─────────────────────────────────────────────────────────────────
   /super-admin-op — Private Opportunity editor (Super Admin)

   Grant Detail layout with every attribute editable in place:
     • edits auto-save (stamp shown), and enable "Publish Changes"
     • required fields must be filled before publishing
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
  { id: "matching", label: "Matching" },
  { id: "grant-details", label: "Grant Details" },
] as const;

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
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

function digitsOnly(v: string): string {
  return v.replace(/[^0-9]/g, "");
}

function formatDigits(v: string): string {
  return v ? Number(digitsOnly(v)).toLocaleString("en-US") : "";
}

function SectionHeading({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "Lustria, serif" }}>
        {children}
        {required && (
          <span className="text-red-500 text-base align-top ml-1" title="Required to publish" aria-label="required">
            *
          </span>
        )}
      </h2>
      <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white rounded-xl border border-gray-200 p-6">{children}</div>;
}

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <div className="text-xs text-gray-400 mb-1" style={{ fontFamily: "Cabin, sans-serif" }}>
      {children} {required && <span className="text-red-500">*</span>}
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="text-xs text-red-600 mt-1">
      {message}
    </p>
  );
}

function statusBadgeClass(status: "Open" | "Closed") {
  return status === "Open"
    ? "bg-green-50 text-green-700 border-green-200"
    : "bg-gray-100 text-gray-600 border-gray-200";
}

/* ── Documents (left rail) ───────────────────────────────────── */

type OpDocument = { id: string; name: string; type: string; size: string; url?: string };

const SEED_DOCUMENTS: OpDocument[] = [
  { id: "seed-1", name: "Document 1", type: "PDF Document", size: "2.4 MB" },
  { id: "seed-2", name: "Document 2", type: ".DOC Document", size: "1.1 MB" },
];

function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function docTypeLabel(name: string): string {
  const ext = name.includes(".") ? name.split(".").pop()!.toUpperCase() : "";
  return ext === "PDF" ? "PDF Document" : ext ? `.${ext} Document` : "Document";
}

function DocumentsCard() {
  const [open, setOpen] = useState(true);
  const [docs, setDocs] = useState<OpDocument[]>(SEED_DOCUMENTS);
  const fileInput = useRef<HTMLInputElement>(null);
  const urlsRef = useRef<string[]>([]);

  useEffect(() => () => urlsRef.current.forEach((u) => URL.revokeObjectURL(u)), []);

  const onFiles = (files: FileList | null) => {
    if (!files?.length) return;
    const added = Array.from(files).map((f) => {
      const url = URL.createObjectURL(f);
      urlsRef.current.push(url);
      return {
        id: `${Date.now()}-${f.name}-${Math.random().toString(36).slice(2, 7)}`,
        name: f.name,
        type: docTypeLabel(f.name),
        size: formatBytes(f.size),
        url,
      };
    });
    setDocs((d) => [...d, ...added]);
    toast.success(added.length === 1 ? "Document uploaded" : `${added.length} documents uploaded`);
    if (fileInput.current) fileInput.current.value = "";
  };

  const remove = (doc: OpDocument) => {
    if (doc.url) {
      URL.revokeObjectURL(doc.url);
      urlsRef.current = urlsRef.current.filter((u) => u !== doc.url);
    }
    setDocs((d) => d.filter((x) => x.id !== doc.id));
    toast(`Removed ${doc.name}`);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden" style={{ fontFamily: "Cabin, sans-serif" }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="documents-panel"
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-gray-500" />
          <span className="text-sm font-semibold text-gray-900">
            Documents <span className="font-normal text-gray-500">({docs.length})</span>
          </span>
        </span>
        {open ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
      </button>

      {open && (
        <div id="documents-panel" className="border-t border-gray-100 p-3 space-y-2">
          {docs.map((doc) => {
            const isPdf = doc.type.startsWith("PDF");
            const card = (
              <>
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    isPdf ? "bg-red-50 text-red-500" : "bg-sky-50 text-sky-600"
                  }`}
                >
                  <FileText className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-gray-900 truncate">{doc.name}</div>
                  <div className="text-xs text-gray-500">
                    {doc.type} · {doc.size}
                  </div>
                </div>
              </>
            );
            return (
              <div key={doc.id} className="flex items-center gap-1 border border-gray-200 rounded-lg p-3">
                {doc.url ? (
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 min-w-0 flex-1"
                  >
                    {card}
                  </a>
                ) : (
                  <div className="flex items-center gap-3 min-w-0 flex-1">{card}</div>
                )}
                <button
                  type="button"
                  onClick={() => remove(doc)}
                  aria-label={`Remove ${doc.name}`}
                  className="p-1.5 rounded text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            );
          })}

          <input
            ref={fileInput}
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.xls,.xlsx,.txt"
            className="hidden"
            onChange={(e) => onFiles(e.target.files)}
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-full gap-2"
            onClick={() => fileInput.current?.click()}
          >
            <Upload className="w-4 h-4" />
            Upload document
          </Button>
        </div>
      )}
    </div>
  );
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
  missing: number;
  onPublish: () => void;
  lastPublishedAt: number;
  saveState: SaveState;
  lastSavedAt: number | null;
}

function PublishControls({ dirty, missing, onPublish, lastPublishedAt, saveState, lastSavedAt }: PublishControlsProps) {
  return (
    <div className="flex flex-col gap-1.5 items-end">
      <Button
        onClick={onPublish}
        disabled={!dirty || missing > 0}
        className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 disabled:bg-gray-100 disabled:text-gray-400 disabled:opacity-100"
        style={{ fontFamily: "Cabin, sans-serif" }}
      >
        {dirty ? "Publish Changes" : "Publish"}
      </Button>
      {missing > 0 && (
        <span className="text-xs text-red-600" role="status">
          {missing} required {missing === 1 ? "field" : "fields"} to complete
        </span>
      )}
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
  const [closeDialogOpen, setCloseDialogOpen] = useState(false);
  const [stateDraft, setStateDraft] = useState("");
  const [stuck, setStuck] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof PrivateOpportunityDetail>(key: K, value: PrivateOpportunityDetail[K]) =>
    update((d) => ({ ...d, [key]: value }));

  const isClosed = draft.status === "Closed";
  const errors: Partial<Record<RequiredKey, string>> = validate(draft);
  const missing = Object.keys(errors).length;

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
    if (missing > 0) return;
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

  const confirmLeave = () => {
    discardDraft();
    blocker.proceed?.();
  };

  const addState = (name: string) => {
    if (!name || draft.states.includes(name)) return;
    set("states", [...draft.states, name]);
    setStateDraft("");
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
                  {missing > 0 && <span className="text-xs text-red-600">{missing} required to complete</span>}
                  <span className="hidden md:inline text-xs text-gray-500">Last published {formatStamp(lastPublishedAt)}</span>
                  <Button
                    size="sm"
                    onClick={handlePublish}
                    disabled={!dirty || missing > 0}
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
                      placeholder="Opportunity title (required)"
                      className="text-[2rem] leading-tight text-gray-900"
                      style={{ fontFamily: "Lustria, serif", fontWeight: 600 }}
                    />
                    <FieldError message={errors.title} />
                    <div className="mt-3">
                      <EditableText
                        value={draft.funderName}
                        onChange={(v) => set("funderName", v)}
                        label="Funder name"
                        placeholder="Funder name (required)"
                        className="text-sm text-gray-500"
                      />
                      <FieldError message={errors.funderName} />
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
                        <span>Deadline</span>
                        <Select
                          value={draft.deadlineType}
                          onValueChange={(v) => set("deadlineType", v as "rolling" | "date")}
                        >
                          <SelectTrigger className="h-8 w-36 border border-gray-300 text-sm" aria-label="Deadline type">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rolling">Rolling</SelectItem>
                            <SelectItem value="date">Specific date</SelectItem>
                          </SelectContent>
                        </Select>
                        {draft.deadlineType === "date" && (
                          <DatePickerField
                            value={draft.deadline}
                            onChange={(v) => set("deadline", v)}
                            label="Deadline"
                            className="font-medium text-gray-800 text-sm"
                          />
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <DollarSign className="w-4 h-4 text-gray-400" />
                        <span>Max</span>
                        <div className="w-28">
                          <EditableText
                            value={formatDigits(draft.awardMax)}
                            onChange={(v) => set("awardMax", digitsOnly(v))}
                            label="Award maximum"
                            placeholder="Required"
                            className="font-medium text-gray-800 text-sm"
                          />
                        </div>
                        <span>Min</span>
                        <div className="w-24">
                          <EditableText
                            value={formatDigits(draft.awardMin)}
                            onChange={(v) => set("awardMin", digitsOnly(v))}
                            label="Award minimum"
                            placeholder="Optional"
                            className="font-medium text-gray-800 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <FieldError message={errors.deadline ?? errors.awardMax} />
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
                      missing={missing}
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
                    <DocumentsCard />
                  </div>
                </div>

                {/* Main sections */}
                <div className="lg:col-span-3 space-y-6">
                  <section id="overview" className="scroll-mt-8">
                    <SectionHeading required>Overview</SectionHeading>
                    <Card>
                      <div className="mb-5">
                        <FieldLabel required>Short summary (card blurb)</FieldLabel>
                        <EditableText
                          multiline
                          value={draft.shortSummary}
                          onChange={(v) => set("shortSummary", v)}
                          label="Short summary"
                          placeholder="One or two sentences shown on the opportunity card…"
                          className="text-gray-700 leading-relaxed"
                        />
                        <FieldError message={errors.shortSummary} />
                      </div>
                      <div>
                        <FieldLabel required>Description</FieldLabel>
                        <EditableText
                          multiline
                          value={draft.description}
                          onChange={(v) => set("description", v)}
                          label="Description"
                          placeholder="Describe this opportunity…"
                          className="text-gray-700 leading-relaxed"
                        />
                        <FieldError message={errors.description} />
                      </div>
                    </Card>
                  </section>

                  <section id="eligible-activities" className="scroll-mt-8">
                    <SectionHeading>Eligible Activities</SectionHeading>
                    <Card>
                      <EditableText
                        multiline
                        value={draft.eligibleActivities}
                        onChange={(v) => set("eligibleActivities", v)}
                        label="Eligible activities"
                        placeholder="Add eligible activities (optional)…"
                        className="text-gray-700 leading-relaxed"
                      />
                    </Card>
                  </section>

                  <section id="who-can-apply" className="scroll-mt-8">
                    <SectionHeading required>Who Can Apply?</SectionHeading>
                    <Card>
                      <EditableText
                        multiline
                        value={draft.whoCanApply}
                        onChange={(v) => set("whoCanApply", v)}
                        label="Who can apply"
                        placeholder="Who can apply…"
                        className="text-gray-700 leading-relaxed"
                      />
                      <FieldError message={errors.whoCanApply} />
                    </Card>
                  </section>

                  <section id="assessment-criteria" className="scroll-mt-8">
                    <SectionHeading>Main Assessment Criteria</SectionHeading>
                    <Card>
                      <EditableText
                        multiline
                        value={draft.selectionCriteria}
                        onChange={(v) => set("selectionCriteria", v)}
                        label="Selection criteria"
                        placeholder="Add selection criteria (optional)…"
                        className="text-gray-700 leading-relaxed"
                      />
                    </Card>
                  </section>

                  <section id="restrictions" className="scroll-mt-8">
                    <SectionHeading>Restrictions</SectionHeading>
                    <Card>
                      <EditableText
                        multiline
                        value={draft.restrictions}
                        onChange={(v) => set("restrictions", v)}
                        label="Restrictions"
                        placeholder="Add restrictions (optional)…"
                        className="text-gray-700 leading-relaxed"
                      />
                    </Card>
                  </section>

                  <section id="matching" className="scroll-mt-8">
                    <SectionHeading required>Matching</SectionHeading>
                    <Card>
                      <div className="grid grid-cols-2 gap-4">
                        <FocusAreasField value={draft.focusAreas} onChange={(next) => set("focusAreas", next)} />
                      </div>
                      <FieldError message={errors.focusAreas} />

                      <div className="mt-6">
                        <FieldLabel required>Geography (shown as Location and Region)</FieldLabel>
                        <div className="flex flex-col gap-3">
                          <label className="flex items-center gap-2 text-sm text-gray-700">
                            <Checkbox
                              checked={draft.nationwide}
                              onCheckedChange={(c) =>
                                update((d) => ({ ...d, nationwide: c === true, states: c === true ? [] : d.states }))
                              }
                            />
                            Nationwide
                          </label>
                          {!draft.nationwide && (
                            <>
                              <Select value={stateDraft} onValueChange={addState}>
                                <SelectTrigger className="border border-gray-300 max-w-xs" aria-label="Add a state">
                                  <SelectValue placeholder="Add a state" />
                                </SelectTrigger>
                                <SelectContent className="max-h-64">
                                  {US_STATES.filter((s) => !draft.states.includes(s)).map((s) => (
                                    <SelectItem key={s} value={s}>
                                      {s}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              {draft.states.length > 0 && (
                                <ul className="flex flex-wrap gap-2">
                                  {draft.states.map((s) => (
                                    <li
                                      key={s}
                                      className="flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full border border-teal-200 bg-teal-50 text-sm text-teal-900"
                                    >
                                      {s}
                                      <button
                                        type="button"
                                        aria-label={`Remove ${s}`}
                                        className="p-0.5 rounded-full hover:bg-teal-100"
                                        onClick={() => set("states", draft.states.filter((x) => x !== s))}
                                      >
                                        <X className="size-3.5" />
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          )}
                        </div>
                        <FieldError message={errors.geography} />
                      </div>
                    </Card>
                  </section>

                  <section id="grant-details" className="scroll-mt-8">
                    <SectionHeading required>Grant Details</SectionHeading>
                    <Card>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                        <div>
                          <FieldLabel>Open date (optional)</FieldLabel>
                          <DatePickerField
                            value={draft.openDate}
                            onChange={(v) => set("openDate", v)}
                            label="Open date"
                            placeholder="Not in the announcement — leave blank"
                            className="text-sm text-gray-800"
                          />
                        </div>
                        <div>
                          <FieldLabel>Match / cost share (optional)</FieldLabel>
                          <EditableText
                            multiline
                            value={draft.matchCostShare}
                            onChange={(v) => set("matchCostShare", v)}
                            label="Match or cost share"
                            placeholder="Add…"
                            className="text-sm text-gray-800 leading-relaxed"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <FieldLabel>Later stages (optional)</FieldLabel>
                          <EditableText
                            multiline
                            value={draft.laterStages}
                            onChange={(v) => set("laterStages", v)}
                            label="Later stages"
                            placeholder="Add…"
                            className="text-sm text-gray-800 leading-relaxed"
                          />
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: "Cabin, sans-serif" }}>
                          Contact
                        </div>
                        <FieldLabel required>Contact email or webpage (one is enough)</FieldLabel>
                        <EditableText
                          value={draft.contact}
                          onChange={(v) => set("contact", v)}
                          label="Contact email or webpage"
                          placeholder="Add…"
                          className="text-sm text-teal-600"
                        />
                        <FieldError message={errors.contact} />
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
