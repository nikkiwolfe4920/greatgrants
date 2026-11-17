import { useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Check,
  Eye,
  FileText,
  Info,
  Lock,
  Pencil,
  Upload,
  X,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { TooltipProvider } from "../ui/tooltip";
import { FocusAreasField } from "../focus-areas/FocusAreasField";
import { GrantResultCard } from "../GrantResultCard";
import { DatePickerField } from "./DatePickerField";
import {
  CURRENCY,
  FUNDING_SOURCE,
  deriveStatus,
  toCardGrant,
  validate,
  type RequiredKey,
  type SopOpportunity,
} from "@/data/sopOpportunities";

/* ─────────────────────────────────────────────────────────────────
   New / edit opportunity form for /super-admin-sop.

   Flow: (optional) upload → complete every required field → required
   preview → publish. Prefilled values must be confirmed, never trusted
   blind. Edits to a published record are held until "Publish Changes".
───────────────────────────────────────────────────────────────── */

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

type PrefillKey = "title";

function formatMoney(value: string): string {
  const n = Number(value.replace(/[^0-9]/g, ""));
  return n ? `$${n.toLocaleString()}` : "";
}

function Field({
  label,
  required,
  hint,
  error,
  prefilled,
  onConfirm,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  prefilled?: boolean;
  onConfirm?: () => void;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor={htmlFor} className="text-sm font-medium text-gray-700">
          {label} {required ? <span className="text-red-500">*</span> : <span className="text-gray-400 font-normal">(optional)</span>}
        </Label>
        {prefilled && (
          <button
            type="button"
            onClick={onConfirm}
            className="inline-flex items-center gap-1 rounded-md border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 hover:bg-amber-100"
          >
            <Check className="size-3" />
            Prefilled — confirm
          </button>
        )}
      </div>
      {children}
      {hint && !error && <p className="text-xs text-gray-500">{hint}</p>}
      {error && (
        <p role="alert" className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function SectionCard({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
        {title}
      </h3>
      {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
      <div className="mt-4 flex flex-col gap-5">{children}</div>
    </section>
  );
}

function PreviewSection({ title, value }: { title: string; value: string }) {
  if (!value.trim()) return null;
  return (
    <div>
      <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-700 mt-1 whitespace-pre-wrap leading-relaxed">{value}</p>
    </div>
  );
}

interface Props {
  mode: "new" | "edit";
  initial: SopOpportunity;
  onCancel: () => void;
  onPublish: (record: SopOpportunity) => void;
  /** Edit mode only. Called after the confirmation step. */
  onCloseEarly?: (id: string) => void;
}

export function SopOpportunityForm({ mode, initial, onCancel, onPublish, onCloseEarly }: Props) {
  const [draft, setDraft] = useState<SopOpportunity>(initial);
  const [step, setStep] = useState<"form" | "preview">("form");
  const [showErrors, setShowErrors] = useState(false);
  const [unconfirmed, setUnconfirmed] = useState<Set<PrefillKey>>(new Set());
  const [reuploadNote, setReuploadNote] = useState<string | null>(null);
  const [confirmClose, setConfirmClose] = useState(false);
  const [stateDraft, setStateDraft] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const errors = useMemo(() => validate(draft), [draft]);
  const errorCount = Object.keys(errors).length;
  const dirty = useMemo(() => JSON.stringify(draft) !== JSON.stringify(initial), [draft, initial]);
  const isEdit = mode === "edit";
  const err = (k: RequiredKey) => (showErrors ? errors[k] : undefined);

  function set<K extends keyof SopOpportunity>(key: K, value: SopOpportunity[K]) {
    setDraft((d) => ({ ...d, [key]: value }));
    // Editing a prefilled value counts as reviewing it.
    if (key === "title" && unconfirmed.has("title")) {
      setUnconfirmed((s) => {
        const next = new Set(s);
        next.delete("title");
        return next;
      });
    }
  }

  /**
   * Best-effort stand-in for AI extraction: prefills what it can from the
   * file name only. Real extraction plugs in here; every prefilled field
   * must still be confirmed.
   */
  function handleFile(file: File | undefined) {
    if (!file) return;
    const replacing = draft.announcement;
    const guessedTitle = file.name.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").trim();
    // Only overwrite a title that is empty or was itself prefilled — never one the admin typed.
    const titleIsManual = draft.title.trim() !== "" && !unconfirmed.has("title");
    setDraft((d) => ({
      ...d,
      announcement: { name: file.name, size: file.size, uploadedAt: new Date().toISOString() },
      title: titleIsManual ? d.title : guessedTitle,
    }));
    if (!titleIsManual) setUnconfirmed((s) => new Set(s).add("title"));
    setReuploadNote(
      replacing
        ? `Replaced "${replacing.name}" with "${file.name}". Only the new version is kept on this record — re-check every prefilled value against the amended announcement before publishing.`
        : null,
    );
    if (fileRef.current) fileRef.current.value = "";
  }

  function removeAnnouncement() {
    setDraft((d) => ({ ...d, announcement: undefined }));
    setReuploadNote(null);
  }

  function addState(name: string) {
    if (!name || draft.states.includes(name)) return;
    set("states", [...draft.states, name]);
    setStateDraft("");
  }

  function goPreview() {
    setShowErrors(true);
    if (errorCount > 0) {
      document.querySelector('[role="alert"]')?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setStep("preview");
    window.scrollTo?.({ top: 0 });
  }

  const publishLabel = isEdit ? "Publish Changes" : "Publish";
  const canPublish = errorCount === 0 && unconfirmed.size === 0 && (!isEdit || dirty);

  /* ── Preview step ─────────────────────────────────────────────── */
  if (step === "preview") {
    const status = deriveStatus(draft);
    return (
      <TooltipProvider>
        <div className="w-full max-w-4xl">
          <button
            type="button"
            onClick={() => setStep("form")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="size-4" /> Back to edit
          </button>
          <h1 className="text-2xl text-gray-900 leading-8" style={{ fontFamily: "Lustria, serif" }}>
            Preview
          </h1>
          <p className="text-sm text-gray-600 mt-1 mb-6">
            This is how nonprofits will see the card and the detail page. Review it, then {publishLabel.toLowerCase()}.
          </p>

          {unconfirmed.size > 0 && (
            <div className="mb-4 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
              <Info className="size-4 mt-0.5 shrink-0" />
              Some values were prefilled from the announcement and still need your confirmation. Go back to edit and confirm them.
            </div>
          )}

          <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400 mb-2">Card</p>
          <GrantResultCard
            grant={toCardGrant(draft)}
            onOpen={() => {}}
            tagsExtra={
              <Badge variant="outline" className="text-xs bg-gray-50 text-gray-700 border-gray-200">
                <BookOpen className="size-3" /> Private Opportunity
              </Badge>
            }
          />

          <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400 mt-8 mb-2">Detail page</p>
          <article className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  className={
                    status === "Open"
                      ? "bg-green-50 text-green-700 border-green-200"
                      : status === "Pending"
                      ? "bg-blue-50 text-blue-700 border-blue-200"
                      : "bg-gray-100 text-gray-600 border-gray-200"
                  }
                >
                  {status}
                </Badge>
              </div>
              <h2 className="text-2xl text-gray-900 leading-8" style={{ fontFamily: "Lustria, serif" }}>
                {draft.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{draft.funderName}</p>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm border-y border-gray-200 py-4">
              {[
                ["Funder", draft.funderName],
                ["Funding source", FUNDING_SOURCE],
                [
                  "Award range",
                  `${formatMoney(draft.awardMin) ? `${formatMoney(draft.awardMin)} – ` : "Up to "}${formatMoney(draft.awardMax)} ${CURRENCY}`,
                ],
                ["Location and region", draft.nationwide ? "Nationwide" : draft.states.join(", ")],
                ["Open date", draft.openDate || "—"],
                ["Deadline", draft.deadlineType === "rolling" ? "Rolling" : draft.deadline],
                ["Match / cost share", draft.matchCostShare || "—"],
                ["Contact", draft.contact],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-medium text-gray-500">{k}</dt>
                  <dd className="text-gray-900 mt-0.5">{v}</dd>
                </div>
              ))}
            </dl>

            <div>
              <h4 className="text-sm font-semibold text-gray-900">Focus areas</h4>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {draft.focusAreas.map((f) => (
                  <Badge key={f} variant="outline" className="bg-teal-50 text-teal-900 border-teal-200">
                    {f}
                  </Badge>
                ))}
              </div>
            </div>
            <PreviewSection title="Overview" value={draft.description} />
            <PreviewSection title="Who Can Apply" value={draft.whoCanApply} />
            <PreviewSection title="Eligible Activities" value={draft.eligibleActivities} />
            <PreviewSection title="Main Assessment Criteria" value={draft.selectionCriteria} />
            <PreviewSection title="Restrictions" value={draft.restrictions} />
            <PreviewSection title="Grant Details — later stages" value={draft.laterStages} />
          </article>

          <div className="mt-6 flex items-center justify-end gap-3">
            <Button variant="outline" onClick={() => setStep("form")} className="gap-2">
              <Pencil className="size-4" /> Back to edit
            </Button>
            <Button
              disabled={!canPublish}
              onClick={() => onPublish({ ...draft, id: draft.id })}
              className="bg-teal-600 text-white hover:bg-teal-700"
            >
              {publishLabel}
            </Button>
          </div>
        </div>
      </TooltipProvider>
    );
  }

  /* ── Form step ────────────────────────────────────────────────── */
  return (
    <div className="w-full max-w-4xl">
      <button
        type="button"
        onClick={onCancel}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 mb-4"
      >
        <ArrowLeft className="size-4" /> Private Opportunities
      </button>
      <h1 className="text-2xl text-gray-900 leading-8" style={{ fontFamily: "Lustria, serif" }}>
        {isEdit ? "Edit Opportunity" : "New Opportunity"}
      </h1>
      <p className="text-sm text-gray-600 mt-1 mb-6">
        {isEdit
          ? "Changes are held as unpublished until you select Publish Changes. Nonprofits keep seeing the last published version."
          : "Complete every required field, preview the result, then publish. Nothing is shown to nonprofits until you publish."}
      </p>

      <div className="flex flex-col gap-5">
        {/* Announcement upload */}
        <SectionCard
          title="Announcement"
          description="Optional. Upload the foundation's announcement (RFP PDF) and we'll prefill what we can. Extraction is best-effort — you confirm every value."
        >
          {draft.announcement ? (
            <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
              <FileText className="size-5 text-teal-600 shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 truncate">{draft.announcement.name}</p>
                <p className="text-xs text-gray-500">
                  {(draft.announcement.size / 1024).toFixed(0)} KB · uploaded {new Date(draft.announcement.uploadedAt).toLocaleDateString()}
                </p>
              </div>
              <Button variant="outline" size="sm" className="gap-1.5" onClick={() => fileRef.current?.click()}>
                <Upload className="size-3.5" /> Replace
              </Button>
              <button
                type="button"
                onClick={removeAnnouncement}
                aria-label="Remove announcement"
                className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100"
              >
                <X className="size-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="flex flex-col items-center gap-1.5 rounded-lg border border-dashed border-gray-300 py-8 text-sm text-gray-600 hover:border-teal-600 hover:bg-teal-50/40 transition-colors"
            >
              <Upload className="size-5 text-gray-400" />
              <span className="font-medium text-gray-900">Upload announcement</span>
              <span className="text-xs text-gray-500">PDF</span>
            </button>
          )}
          <input
            ref={fileRef}
            type="file"
            accept="application/pdf,.pdf"
            className="sr-only"
            aria-label="Upload announcement"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
          {reuploadNote && (
            <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
              <Info className="size-4 mt-0.5 shrink-0" />
              {reuploadNote}
            </div>
          )}
        </SectionCard>

        <SectionCard title="Basics">
          <Field
            label="Opportunity title"
            required
            htmlFor="sop-title"
            error={err("title")}
            prefilled={unconfirmed.has("title")}
            onConfirm={() => setUnconfirmed(new Set())}
            hint="Shown as the card and page title."
          >
            <Input id="sop-title" value={draft.title} onChange={(e) => set("title", e.target.value)} />
          </Field>
          <Field label="Funder name" required htmlFor="sop-funder" error={err("funderName")} hint="Shown as the hero subtitle and the Funder row.">
            <Input id="sop-funder" value={draft.funderName} onChange={(e) => set("funderName", e.target.value)} />
          </Field>
          <Field label="Short summary" required htmlFor="sop-summary" error={err("shortSummary")} hint="The card blurb — one or two sentences.">
            <Textarea id="sop-summary" rows={3} value={draft.shortSummary} onChange={(e) => set("shortSummary", e.target.value)} />
          </Field>
        </SectionCard>

        <SectionCard title="Details">
          <Field label="Description" required htmlFor="sop-desc" error={err("description")} hint="Overview section: background, aims, objectives.">
            <Textarea id="sop-desc" rows={5} value={draft.description} onChange={(e) => set("description", e.target.value)} />
          </Field>
          <Field label="Who can apply" required htmlFor="sop-who" error={err("whoCanApply")}>
            <Textarea id="sop-who" rows={3} value={draft.whoCanApply} onChange={(e) => set("whoCanApply", e.target.value)} />
          </Field>
          <Field label="Eligible activities" htmlFor="sop-activities">
            <Textarea id="sop-activities" rows={3} value={draft.eligibleActivities} onChange={(e) => set("eligibleActivities", e.target.value)} />
          </Field>
          <Field label="Selection criteria" htmlFor="sop-criteria" hint="Shown as Main Assessment Criteria.">
            <Textarea id="sop-criteria" rows={3} value={draft.selectionCriteria} onChange={(e) => set("selectionCriteria", e.target.value)} />
          </Field>
          <Field label="Restrictions" htmlFor="sop-restrictions">
            <Textarea id="sop-restrictions" rows={2} value={draft.restrictions} onChange={(e) => set("restrictions", e.target.value)} />
          </Field>
        </SectionCard>

        <SectionCard title="Matching" description="Used to match this opportunity to nonprofits.">
          <div className="grid grid-cols-2 gap-4">
            <FocusAreasField value={draft.focusAreas} onChange={(next) => set("focusAreas", next)} />
          </div>
          <Field label="Geography" required error={err("geography")} hint="Shown as Location and Region, and used for matching.">
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <Checkbox
                  checked={draft.nationwide}
                  onCheckedChange={(c) => setDraft((d) => ({ ...d, nationwide: c === true, states: c === true ? [] : d.states }))}
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
          </Field>
        </SectionCard>

        <SectionCard title="Award & timing">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Award maximum" required htmlFor="sop-max" error={err("awardMax")} hint="Shown as the card amount.">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">$</span>
                <Input
                  id="sop-max"
                  inputMode="numeric"
                  className="pl-7"
                  value={draft.awardMax ? Number(draft.awardMax.replace(/[^0-9]/g, "")).toLocaleString() : ""}
                  onChange={(e) => set("awardMax", e.target.value.replace(/[^0-9]/g, ""))}
                />
              </div>
            </Field>
            <Field label="Award minimum" htmlFor="sop-min">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">$</span>
                <Input
                  id="sop-min"
                  inputMode="numeric"
                  className="pl-7"
                  value={draft.awardMin ? Number(draft.awardMin.replace(/[^0-9]/g, "")).toLocaleString() : ""}
                  onChange={(e) => set("awardMin", e.target.value.replace(/[^0-9]/g, ""))}
                />
              </div>
            </Field>
            <Field label="Open date" hint="Leave blank if it isn't in the announcement.">
              <DatePickerField value={draft.openDate} onChange={(v) => set("openDate", v)} label="Open date" className="w-full !border-gray-300 !mr-0 !px-3 h-9 bg-white justify-between shadow-xs" />
            </Field>
            <Field label="Deadline" required error={err("deadline")}>
              <div className="flex gap-2">
                <Select value={draft.deadlineType} onValueChange={(v) => set("deadlineType", v as "rolling" | "date")}>
                  <SelectTrigger className="border border-gray-300 w-40" aria-label="Deadline type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rolling">Rolling</SelectItem>
                    <SelectItem value="date">Specific date</SelectItem>
                  </SelectContent>
                </Select>
                {draft.deadlineType === "date" && (
                  <DatePickerField value={draft.deadline} onChange={(v) => set("deadline", v)} label="Deadline" className="flex-1 !border-gray-300 !mr-0 !px-3 h-9 bg-white justify-between shadow-xs" />
                )}
              </div>
            </Field>
          </div>
          <Field label="Later stages" htmlFor="sop-later" hint="Free text, shown in Grant Details.">
            <Textarea id="sop-later" rows={2} value={draft.laterStages} onChange={(e) => set("laterStages", e.target.value)} />
          </Field>
          <Field label="Match or cost share" htmlFor="sop-match">
            <Textarea id="sop-match" rows={2} value={draft.matchCostShare} onChange={(e) => set("matchCostShare", e.target.value)} />
          </Field>
        </SectionCard>

        <SectionCard title="Contact">
          <Field label="Contact email or webpage" required htmlFor="sop-contact" error={err("contact")} hint="One is enough.">
            <Input id="sop-contact" value={draft.contact} onChange={(e) => set("contact", e.target.value)} />
          </Field>
        </SectionCard>

        <div className="flex items-start gap-2 rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-600">
          <Lock className="size-4 mt-0.5 shrink-0 text-gray-400" />
          <p>
            Set automatically, not on this form: Funding Source ({FUNDING_SOURCE}), currency ({CURRENCY}), record ID, and status
            (derived from the dates).
          </p>
        </div>

        {showErrors && errorCount > 0 && (
          <p role="alert" className="text-sm text-red-600">
            {errorCount} required {errorCount === 1 ? "field needs" : "fields need"} attention before you can preview.
          </p>
        )}

        <div className="flex items-center justify-between gap-3">
          <div>
            {isEdit && deriveStatus(draft) !== "Closed" && onCloseEarly && (
              <Button variant="outline" className="gap-2 text-red-700 border-red-200 hover:bg-red-50" onClick={() => setConfirmClose(true)}>
                Close opportunity
              </Button>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button
              onClick={goPreview}
              disabled={isEdit && !dirty}
              className="gap-2 bg-teal-600 text-white hover:bg-teal-700"
            >
              <Eye className="size-4" />
              Preview
            </Button>
          </div>
        </div>
      </div>

      <AlertDialog open={confirmClose} onOpenChange={setConfirmClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Close this opportunity?</AlertDialogTitle>
            <AlertDialogDescription>
              {draft.deadlineType === "rolling"
                ? "Rolling opportunities only close when a Super Admin closes them."
                : "This closes the opportunity before its deadline."}{" "}
              Nonprofits will see it as Closed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep open</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 text-white hover:bg-red-700"
              onClick={() => onCloseEarly?.(draft.id)}
            >
              Close opportunity
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
