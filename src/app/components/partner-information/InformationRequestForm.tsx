import { forwardRef, useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react";
import { toast } from "sonner";
import {
  Briefcase,
  CheckCircle2,
  DollarSign,
  Download,
  File as FileIcon,
  Eye,
  Loader2,
  Mail,
  Trash2,
  UserSquare,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/components/ui/alert-dialog";
import { StepperHeader } from "@/app/components/eligibility/StepperHeader";
import { FileDropzone, fileExtension, formatFileSize, type UploadedFile } from "./FileDropzone";
import type { PartnerApplication } from "@/data/partnerApplications";

/* ------------------------------------------------------------------ */
/* State                                                               */
/* ------------------------------------------------------------------ */

export type ContactKey = "main" | "lead" | "approver";

export interface ContactValue {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface InformationRequestValues {
  contacts: Record<ContactKey, ContactValue>;
  /** Digits only; formatted for display. */
  minFunding: string;
  maxFunding: string;
  budgetFiles: UploadedFile[];
  roleDocs: UploadedFile[];
  notes: string;
}

export interface InformationRequestState {
  values: InformationRequestValues;
  /** "2:14 PM" — set by the autosave; undefined until the first edit. */
  savedAt?: string;
  /** Set once sent to the Support Organization; the form is read-only after. */
  sentOn?: string;
}

const EMPTY_CONTACT: ContactValue = { firstName: "", lastName: "", email: "", phone: "" };

export const EMPTY_INFORMATION_REQUEST: InformationRequestState = {
  values: {
    contacts: { main: EMPTY_CONTACT, lead: EMPTY_CONTACT, approver: EMPTY_CONTACT },
    minFunding: "",
    maxFunding: "",
    budgetFiles: [],
    roleDocs: [],
    notes: "",
  },
};

const NOTES_LIMIT = 1000;
const AUTOSAVE_MS = 700;

const CONTACTS: { key: ContactKey; heading: string }[] = [
  { key: "main", heading: "Main point of contact" },
  { key: "lead", heading: "Project lead (subject matter expert)" },
  { key: "approver", heading: "Final approver" },
];

/** Captions appear only once a step has a date; Sign MOU / Final Approval don't yet. */
const stepsFor = (decidedOn: string | undefined, sentOn: string | undefined) => [
  { label: "Partnership\nApproved", caption: decidedOn && `Decided on ${decidedOn}` },
  { label: "Information\nRequest", caption: decidedOn && `Requested: ${decidedOn}` },
  { label: "Sent for\nApproval", caption: sentOn && `Sent: ${sentOn}` },
  { label: "Sign\nMOU" },
  { label: "Final\nApproval" },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const formatMoney = (digits: string) => (digits ? `$${Number(digits).toLocaleString("en-US")}` : "");
const toDigits = (raw: string) => raw.replace(/\D/g, "").replace(/^0+(?=\d)/, "").slice(0, 12);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const nowTime = () => new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
/** "Oct 29, 2:14 PM" — the send timestamp shown in the step bar and confirmation. */
const nowStamp = () =>
  `${new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })}, ${nowTime()}`;

function validate(v: InformationRequestValues) {
  const errors: Record<string, string> = {};
  CONTACTS.forEach(({ key }) => {
    const c = v.contacts[key];
    if (!c.firstName.trim()) errors[`${key}-firstName`] = "Enter a first name.";
    if (!c.lastName.trim()) errors[`${key}-lastName`] = "Enter a last name.";
    if (!c.email.trim()) errors[`${key}-email`] = "Enter an email address.";
    else if (!EMAIL_RE.test(c.email.trim())) errors[`${key}-email`] = "Enter a valid email, like name@organization.org.";
    if (c.phone.trim() && c.phone.replace(/\D/g, "").length < 10) errors[`${key}-phone`] = "Enter a 10-digit phone number.";
  });
  if (!v.minFunding || Number(v.minFunding) <= 0) errors["minFunding"] = "Enter the minimum funding you need.";
  if (!v.maxFunding || Number(v.maxFunding) <= 0) errors["maxFunding"] = "Enter the maximum funding you can manage.";
  else if (v.minFunding && Number(v.maxFunding) < Number(v.minFunding))
    errors["maxFunding"] = "Must be at least the minimum.";
  if (v.roleDocs.length === 0) errors["roleDocs"] = "Upload at least one document about your role.";
  return errors;
}

/** Required inputs still empty — drives the "N required items remaining" pill. */
function requiredRemaining(v: InformationRequestValues) {
  let n = 0;
  CONTACTS.forEach(({ key }) => {
    const c = v.contacts[key];
    if (!c.firstName.trim()) n++;
    if (!c.lastName.trim()) n++;
    if (!c.email.trim()) n++;
  });
  if (!v.minFunding) n++;
  if (!v.maxFunding) n++;
  if (v.roleDocs.length === 0) n++;
  return n;
}

/* ------------------------------------------------------------------ */
/* Building blocks                                                     */
/* ------------------------------------------------------------------ */

function Card({ icon, title, description, children }: { icon: ReactNode; title: string; description: string; children: ReactNode }) {
  return (
    <section className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
      <header className="flex items-start gap-3">
        <span className="mt-0.5 text-teal-700 shrink-0" aria-hidden="true">
          {icon}
        </span>
        <div>
          <h4 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
            {title}
          </h4>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </header>
      {children}
    </section>
  );
}

function FieldLabel({ htmlFor, required, children }: { htmlFor: string; required?: boolean; children: ReactNode }) {
  return (
    <Label htmlFor={htmlFor} className="text-gray-700 gap-0.5 leading-5">
      {children}
      {required && (
        <span aria-hidden="true" className="text-teal-600">
          *
        </span>
      )}
      {required && <span className="sr-only"> (required)</span>}
    </Label>
  );
}

function FieldMessage({ id, error, hint }: { id: string; error?: string; hint?: string }) {
  if (error)
    return (
      <p id={id} role="alert" className="text-sm text-red-600">
        {error}
      </p>
    );
  return hint ? (
    <p id={id} className="text-sm text-gray-600">
      {hint}
    </p>
  ) : null;
}

interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  type?: string;
  inputMode?: "text" | "numeric" | "tel" | "email";
  autoComplete?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
}

function TextField({ id, label, value, onChange, required, placeholder, type = "text", inputMode, autoComplete, hint, error, disabled }: TextFieldProps) {
  const msgId = `${id}-msg`;
  return (
    <div className="flex flex-col gap-1.5 min-w-0 flex-1">
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <Input
        id={id}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete ?? "off"}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || hint ? msgId : undefined}
        onChange={(e) => onChange(e.target.value)}
      />
      <FieldMessage id={msgId} error={error} hint={hint} />
    </div>
  );
}

function DocumentRow({ doc, onRemove, disabled }: { doc: UploadedFile; onRemove: () => void; disabled?: boolean }) {
  const open = (download: boolean) => {
    if (!doc.file) return toast("This file was uploaded in an earlier session and can't be previewed here.");
    const url = URL.createObjectURL(doc.file);
    const a = document.createElement("a");
    a.href = url;
    if (download) a.download = doc.name;
    else {
      a.target = "_blank";
      a.rel = "noopener";
    }
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 60_000);
  };
  const actionClass = "size-7 p-0 bg-white text-gray-600 border-gray-300 shadow-xs";
  return (
    <li className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 px-4 py-3">
      <div className="flex items-center gap-3 min-w-0">
        <FileIcon className="size-10 text-gray-300 shrink-0" strokeWidth={1} aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate">{doc.name}</p>
          <p className="text-xs text-gray-500">
            {fileExtension(doc.name)} • {formatFileSize(doc.size)} • Uploaded {doc.uploadedOn}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1 shrink-0">
        <Button type="button" variant="outline" size="icon" className={actionClass} aria-label={`Preview ${doc.name}`} onClick={() => open(false)}>
          <Eye className="size-4" />
        </Button>
        <Button type="button" variant="outline" size="icon" className={actionClass} aria-label={`Download ${doc.name}`} onClick={() => open(true)}>
          <Download className="size-4" />
        </Button>
        {!disabled && (
          <Button type="button" variant="outline" size="icon" className={actionClass} aria-label={`Delete ${doc.name}`} onClick={onRemove}>
            <Trash2 className="size-4" />
          </Button>
        )}
      </div>
    </li>
  );
}

function ContactSupportButton({ app }: { app: PartnerApplication }) {
  if (!app.contact) return null;
  return (
    <Button variant="outline" size="sm" className="bg-white" asChild>
      <a href={`mailto:${app.contact.email}?subject=${encodeURIComponent(`Question about ${app.programName}`)}`}>
        <Mail className="size-4" aria-hidden="true" />
        Contact Support Organization
      </a>
    </Button>
  );
}

/**
 * Shown in place of the "Next steps" header once the information is sent.
 * Confirms success with the timestamp, sets expectations for what happens
 * next, and keeps a way back (withdraw to edit) so the state isn't a dead end.
 */
const SentConfirmation = forwardRef<
  HTMLElement,
  { app: PartnerApplication; sentOn?: string; onWithdraw: () => void }
>(function SentConfirmation({ app, sentOn, onWithdraw }, ref) {
  const org = app.primeApplicant;
  return (
    <section
      ref={ref}
      tabIndex={-1}
      role="status"
      aria-labelledby="information-sent-title"
      className="rounded-xl border border-green-200 bg-green-50 p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
    >
      <div className="flex gap-3">
        <CheckCircle2 className="size-5 mt-0.5 shrink-0 text-green-700" aria-hidden="true" />
        <div className="space-y-4 min-w-0">
          <div>
            <h3 id="information-sent-title" className="font-semibold text-green-800">
              Information sent to {org}
            </h3>
            <p className="text-xs text-gray-600">Sent {sentOn}</p>
            <p className="mt-2 text-sm text-gray-700">
              Your information was successfully sent. {org} will now review your request.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">What happens next</p>
            <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm text-gray-700">
              <li>{org} reviews your request.</li>
              <li>If approved, you&apos;ll get a notification to sign the MOU document.</li>
              <li>Once the MOU is signed, you move into final partnership approval.</li>
            </ol>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <ContactSupportButton app={app} />
            <Button variant="ghost" size="sm" className="text-gray-700" onClick={onWithdraw}>
              Withdraw to edit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

/* ------------------------------------------------------------------ */
/* Form                                                                */
/* ------------------------------------------------------------------ */

interface InformationRequestFormProps {
  app: PartnerApplication;
  state: InformationRequestState;
  onChange: (patch: (s: InformationRequestState) => InformationRequestState) => void;
}

/**
 * Post-acceptance "Information Request" step (Figma node 16986:35061). Every
 * input starts blank; copy and field order match the node. The 5-step
 * StepperHeader from the eligibility flow tracks the partnership through
 * Partnership Approved → Information Request → Sent for Approval → Sign MOU →
 * Final Approval.
 */
export function InformationRequestForm({ app, state, onChange }: InformationRequestFormProps) {
  const uid = useId();
  const fid = (key: string) => `${uid}-${key}`;
  const { values, sentOn } = state;
  const sent = !!sentOn;

  const [attempted, setAttempted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const firstRender = useRef(true);
  const confirmationRef = useRef<HTMLElement>(null);

  const errors = useMemo(() => validate(values), [values]);
  const errorKeys = Object.keys(errors);
  const remaining = requiredRemaining(values);
  const show = (key: string) => (attempted ? errors[key] : undefined);

  // Simulated autosave: any edit flips to "Saving…", then stamps the time.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setSaving(true);
    const t = setTimeout(() => {
      onChange((s) => ({ ...s, savedAt: nowTime() }));
      setSaving(false);
    }, AUTOSAVE_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const setValues = (patch: (v: InformationRequestValues) => InformationRequestValues) =>
    onChange((s) => ({ ...s, values: patch(s.values) }));

  const setContact = (key: ContactKey, field: keyof ContactValue, value: string) =>
    setValues((v) => ({ ...v, contacts: { ...v.contacts, [key]: { ...v.contacts[key], [field]: value } } }));

  const removeDoc = (field: "budgetFiles" | "roleDocs", doc: UploadedFile) => {
    setValues((v) => ({ ...v, [field]: v[field].filter((d) => d.id !== doc.id) }));
    toast(`${doc.name} removed`, {
      action: { label: "Undo", onClick: () => setValues((v) => ({ ...v, [field]: [...v[field], doc] })) },
    });
  };

  const trySend = () => {
    setAttempted(true);
    if (errorKeys.length > 0) {
      const target = document.getElementById(fid(errorKeys[0]));
      target?.scrollIntoView({ block: "center", behavior: "smooth" });
      target?.focus({ preventScroll: true });
      return;
    }
    setConfirmOpen(true);
  };

  const send = () => {
    setConfirmOpen(false);
    onChange((s) => ({ ...s, sentOn: nowStamp(), savedAt: nowTime() }));
    toast.success(`Information sent to ${app.primeApplicant}`, {
      action: { label: "Undo", onClick: () => onChange((s) => ({ ...s, sentOn: undefined })) },
    });
    // Move focus to the confirmation so screen readers announce it and sighted users see it.
    setTimeout(() => {
      confirmationRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
      confirmationRef.current?.focus({ preventScroll: true });
    }, 50);
  };

  const withdraw = () => {
    onChange((s) => ({ ...s, sentOn: undefined }));
    toast(`Request withdrawn. Edit your information, then send it again.`);
  };

  const rangeHint = app.subawardRange
    ? `The Support Organization's range for this partner request is ${app.subawardRange}.`
    : undefined;

  return (
    <div className="space-y-4">
      <StepperHeader steps={stepsFor(app.decision?.decidedOn, sentOn)} currentStep={sent ? 3 : 2} />

      {sent ? (
        <SentConfirmation ref={confirmationRef} app={app} sentOn={sentOn} onWithdraw={withdraw} />
      ) : (
        <>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <h3 className="font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
              Next steps
            </h3>
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600" aria-live="polite">
              {remaining === 0 ? "All required items complete" : `${remaining} required items remaining`}
            </span>
            <ContactSupportButton app={app} />
          </div>
          <p className="text-sm text-gray-600 -mt-2">Changes save automatically as you type. Send when everything is in.</p>
        </>
      )}

      {sent && (
        <h3 className="pt-2 font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
          Information you sent
        </h3>
      )}

      {/* Once sent, inputs are disabled and dropzones hidden; document preview/download stay available. */}
      <fieldset className="space-y-4 min-w-0 border-0 p-0 m-0">
        <legend className="sr-only">Information request for {app.programName}</legend>

        <Card
          icon={<UserSquare className="size-5" />}
          title="Contacts"
          description="Who the Support Organization should contact, and who approves your part of the application."
        >
          <div className="space-y-6">
            {CONTACTS.map(({ key, heading }) => {
              const c = values.contacts[key];
              return (
                <div key={key} role="group" aria-labelledby={fid(`${key}-heading`)} className="space-y-3">
                  <p id={fid(`${key}-heading`)} className="text-sm font-medium text-gray-700">
                    {heading}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <TextField id={fid(`${key}-firstName`)} label="First Name" required value={c.firstName} placeholder="Enter First Name" autoComplete="off" onChange={(x) => setContact(key, "firstName", x)} error={show(`${key}-firstName`)} disabled={sent} />
                    <TextField id={fid(`${key}-lastName`)} label="Last Name" required value={c.lastName} placeholder="Enter Last Name" onChange={(x) => setContact(key, "lastName", x)} error={show(`${key}-lastName`)} disabled={sent} />
                    <TextField id={fid(`${key}-email`)} label="Email Address" required type="email" inputMode="email" value={c.email} placeholder="e.g., email@email.com" onChange={(x) => setContact(key, "email", x)} error={show(`${key}-email`)} disabled={sent} />
                  </div>
                  <TextField id={fid(`${key}-phone`)} label="Phone Number" type="tel" inputMode="tel" value={c.phone} placeholder="e.g., (+1) 123 456 8901" onChange={(x) => setContact(key, "phone", x)} error={show(`${key}-phone`)} disabled={sent} />
                </div>
              );
            })}
          </div>
        </Card>

        <Card icon={<DollarSign className="size-5" />} title="Funding" description="Your minimum and maximum funding for this partner request.">
          <TextField
            id={fid("minFunding")}
            label="Minimum funding needed to carry out your role"
            required
            inputMode="numeric"
            value={formatMoney(values.minFunding)}
            placeholder="$0"
            onChange={(x) => setValues((v) => ({ ...v, minFunding: toDigits(x) }))}
            hint={rangeHint}
            error={show("minFunding")}
            disabled={sent}
          />
          <TextField
            id={fid("maxFunding")}
            label="Maximum funding you can manage"
            required
            inputMode="numeric"
            value={formatMoney(values.maxFunding)}
            placeholder="$0"
            onChange={(x) => setValues((v) => ({ ...v, maxFunding: toDigits(x) }))}
            hint="Must be at least the minimum."
            error={show("maxFunding")}
            disabled={sent}
          />
          {(!sent || values.budgetFiles.length > 0) && (
          <div className="space-y-1.5">
            <p id={fid("budget-label")} className="text-sm font-medium text-gray-700">
              Line-item budget (optional)
            </p>
            {!sent && (
              <>
                <FileDropzone
                  id={fid("budgetFiles")}
                  label="Line-item budget"
                  describedBy={fid("budget-hint")}
                  onFiles={(f) => setValues((v) => ({ ...v, budgetFiles: [...v.budgetFiles, ...f] }))}
                />
                <p id={fid("budget-hint")} className="text-xs text-gray-500">
                  Only the costs for your role. Skip it if you don&apos;t have one yet.
                </p>
              </>
            )}
            {values.budgetFiles.length > 0 && (
              <ul aria-labelledby={fid("budget-label")} className="space-y-2 pt-2">
                {values.budgetFiles.map((d) => (
                  <DocumentRow key={d.id} doc={d} disabled={sent} onRemove={() => removeDoc("budgetFiles", d)} />
                ))}
              </ul>
            )}
          </div>
          )}
        </Card>

        <Card
          icon={<Briefcase className="size-5" />}
          title="Role information"
          description="Documents that show the work your organization would do on this project."
        >
          <div className="space-y-1.5">
            <p id={fid("roleDocs-label")} className="text-sm font-medium text-gray-700">
              Documents about your role<span aria-hidden="true" className="text-teal-600">*</span>
              <span className="sr-only"> (required)</span>
            </p>
            {!sent && (
              <>
                <FileDropzone
                  id={fid("roleDocs")}
                  label="Documents about your role"
                  invalid={!!show("roleDocs")}
                  describedBy={fid("roleDocs-hint")}
                  onFiles={(f) => setValues((v) => ({ ...v, roleDocs: [...v.roleDocs, ...f] }))}
                />
                <FieldMessage id={fid("roleDocs-hint")} error={show("roleDocs")} hint={undefined} />
                <p className="text-xs text-gray-500">
                  Current documents, plans, and past proposals. PDF, DOC, DOCX, XLS, or XLSX, up to 50 MB each.
                </p>
              </>
            )}
          </div>
          {values.roleDocs.length > 0 && (
            <ul aria-labelledby={fid("roleDocs-label")} className="space-y-2">
              {values.roleDocs.map((d) => (
                <DocumentRow key={d.id} doc={d} disabled={sent} onRemove={() => removeDoc("roleDocs", d)} />
              ))}
            </ul>
          )}
        </Card>

        <section className="bg-gray-50 rounded-xl p-6">
          <div className="flex flex-col gap-1.5">
            <FieldLabel htmlFor={fid("notes")}>Anything else (optional)</FieldLabel>
            <Textarea
              id={fid("notes")}
              rows={6}
              maxLength={NOTES_LIMIT}
              placeholder="Enter details"
              value={values.notes}
              aria-describedby={fid("notes-count")}
              disabled={sent}
              className="min-h-[132px]"
              onChange={(e) => setValues((v) => ({ ...v, notes: e.target.value }))}
            />
            <p id={fid("notes-count")} className="text-sm text-gray-600">
              {values.notes.length > 0
                ? `${values.notes.length.toLocaleString("en-US")} / ${NOTES_LIMIT.toLocaleString("en-US")} characters`
                : "1,000 characters maximum."}
            </p>
          </div>
        </section>
      </fieldset>

      {!sent && (
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
          <p className="flex items-center gap-1.5 text-xs text-gray-600" role="status" aria-live="polite">
            {saving ? (
              <>
                <Loader2 className="size-4 animate-spin text-gray-400" aria-hidden="true" /> Saving…
              </>
            ) : state.savedAt ? (
              <>
                <CheckCircle2 className="size-4 text-teal-600" aria-hidden="true" /> All changes saved · {state.savedAt}
              </>
            ) : (
              <>Changes save automatically</>
            )}
          </p>
          <div className="flex items-center gap-3">
            {attempted && errorKeys.length > 0 && (
              <p role="alert" className="text-sm text-red-600">
                {errorKeys.length} {errorKeys.length === 1 ? "item needs" : "items need"} attention before you can send.
              </p>
            )}
              <Button className="bg-teal-600 hover:bg-teal-700 text-white" onClick={trySend}>
                Send to {app.primeApplicant}
              </Button>
          </div>
        </div>
      )}

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Send information to {app.primeApplicant}?</AlertDialogTitle>
            <AlertDialogDescription>
              They&apos;ll use your contacts, funding range, and role documents to draft the application with you. The
              request moves to Sent for Approval; you can undo right after sending.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep editing</AlertDialogCancel>
            <AlertDialogAction onClick={send} className="bg-teal-600 hover:bg-teal-700 text-white">
              Send information
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
