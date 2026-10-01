import { useState } from "react";
import { Link } from "react-router";
import { Check, ChevronDown, Pencil, Plus } from "lucide-react";
import { toast } from "sonner";
import { Logo } from "../components/Logo";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Field, ProgramBadge } from "../components/ExpressInterestField";
import { ExpressInterestSuccess } from "../components/ExpressInterestSuccess";
import { PARTNER_CALL } from "../../data/publicPartnerCall";
import { MEMBER_PROFILE, MEMBER_PROGRAMS, type MemberProgram } from "../../data/memberPrograms";
import {
  formatAsCurrency,
  validateContactEmail,
  validateContactName,
  validateEstimatedBudget,
  validatePeopleServed,
  validateProgramDescription,
} from "../../lib/expressInterestValidation";

/**
 * 7.5d Express interest — signed-in sub-recipient flow, reached once a
 * member is logged in and would otherwise land on the guest flow. One step:
 * the member's org, UEI and contact are already on file, so the form goes
 * straight to the proposal and submits, instead of the guest flow's
 * 2-step wizard (there's no data-sharing opt-in here either — that choice
 * is already captured in the member's account notification settings).
 *
 * Figma: AJQoDJAJZL2ItawgAfLYh3
 *   - 7.5d Signed in as sub-recipient (prefilled) ... node 15494:25378
 *   - 7.5e Program dropdown (open) .................. node 15494:25452
 *   - 7.5c Submitted (success, shared with guest flow) node 15494:25655
 */

type ProgramFieldName = "programDescription" | "peopleServed" | "serviceArea" | "relevantExperience";

interface MemberFormData {
  contactName: string;
  contactEmail: string;
  programDescription: string;
  estimatedBudget: string;
  peopleServed: string;
  serviceArea: string;
  relevantExperience: string;
}

const BEST_MATCH_PROGRAM = MEMBER_PROGRAMS.find((program) => program.isBestMatch) ?? MEMBER_PROGRAMS[0];

function deriveProgramFields(program: MemberProgram | null): Pick<MemberFormData, ProgramFieldName> {
  if (!program) {
    return { programDescription: "", peopleServed: "", serviceArea: "", relevantExperience: "" };
  }
  return {
    programDescription: program.description,
    peopleServed: program.peopleServed ? program.peopleServed.toLocaleString() : "",
    serviceArea: program.serviceArea,
    relevantExperience: program.relevantExperience,
  };
}

/** Which of the program-derived fields actually got a non-empty value from
 * that program — used to decide which fields show the "From your program"
 * badge. Stays fixed once applied; it doesn't disappear as the member edits
 * the text, only when they pick a different program (or none). */
function fieldsFromProgram(program: MemberProgram | null): Set<ProgramFieldName> {
  if (!program) return new Set();
  const derived = deriveProgramFields(program);
  return new Set(
    (Object.keys(derived) as ProgramFieldName[]).filter((key) => derived[key].trim().length > 0),
  );
}

type ValidatedFieldName =
  | "contactName"
  | "contactEmail"
  | "programDescription"
  | "estimatedBudget"
  | "peopleServed";

const REQUIRED_FIELDS: ValidatedFieldName[] = [
  "contactName",
  "contactEmail",
  "programDescription",
  "estimatedBudget",
];

function validateField(name: ValidatedFieldName, value: string): string | undefined {
  switch (name) {
    case "contactName":
      return validateContactName(value);
    case "contactEmail":
      return validateContactEmail(value);
    case "programDescription":
      return validateProgramDescription(value);
    case "estimatedBudget":
      return validateEstimatedBudget(value);
    case "peopleServed":
      return validatePeopleServed(value);
    default:
      return undefined;
  }
}

/* ── Header — signed-in identity instead of a step indicator ────────────── */

function MemberInterestHeader() {
  return (
    <header className="flex w-full items-center gap-3 border-b border-[#e9eaeb] bg-white px-6 py-4 sm:px-10">
      <Link to="/publicpartner-open" aria-label="Great Grants home" className="shrink-0">
        <Logo />
      </Link>
      <div className="flex-1" />
      <div className="flex size-8 shrink-0 items-center justify-center rounded-2xl bg-[#f2f4f7] text-xs font-medium text-[#475467]">
        {MEMBER_PROFILE.initials}
      </div>
      <div className="flex flex-col" style={{ fontFamily: "Cabin, sans-serif" }}>
        <p className="text-sm font-semibold leading-5 text-[#181d27]">{MEMBER_PROFILE.name}</p>
        <p className="text-xs leading-[18px] text-[#535862]">{MEMBER_PROFILE.orgName}</p>
      </div>
    </header>
  );
}

/* ── "Responding as" band, with an inline contact editor ─────────────────── */

function RespondingAsBand({
  contactName,
  contactEmail,
  onSave,
}: {
  contactName: string;
  contactEmail: string;
  onSave: (next: { contactName: string; contactEmail: string }) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draftName, setDraftName] = useState(contactName);
  const [draftEmail, setDraftEmail] = useState(contactEmail);
  const [errors, setErrors] = useState<{ contactName?: string; contactEmail?: string }>({});

  const startEditing = () => {
    setDraftName(contactName);
    setDraftEmail(contactEmail);
    setErrors({});
    setEditing(true);
  };

  const handleSave = () => {
    const nameError = validateContactName(draftName);
    const emailError = validateContactEmail(draftEmail);
    if (nameError || emailError) {
      setErrors({ contactName: nameError, contactEmail: emailError });
      return;
    }
    onSave({ contactName: draftName, contactEmail: draftEmail });
    setEditing(false);
    toast.success("Contact updated for this response.");
  };

  if (editing) {
    return (
      <div className="flex w-full flex-col gap-3 rounded-lg bg-[#f9fafb] p-4">
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          <Field id="editContactName" label="Contact name" required error={errors.contactName}>
            <Input
              id="editContactName"
              className="h-10 bg-white"
              value={draftName}
              onChange={(e) => setDraftName(e.target.value)}
              aria-invalid={!!errors.contactName}
            />
          </Field>
          <Field id="editContactEmail" label="Contact email" required error={errors.contactEmail}>
            <Input
              id="editContactEmail"
              type="email"
              className="h-10 bg-white"
              value={draftEmail}
              onChange={(e) => setDraftEmail(e.target.value)}
              aria-invalid={!!errors.contactEmail}
            />
          </Field>
        </div>
        <div className="flex items-center justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-8 border-[#d5d7da] font-semibold text-[#414651] hover:bg-white"
            style={{ fontFamily: "Cabin, sans-serif" }}
            onClick={() => setEditing(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            size="sm"
            className="h-8 bg-[#0e9384] font-semibold text-white hover:bg-[#107569]"
            style={{ fontFamily: "Cabin, sans-serif" }}
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-2 rounded-lg bg-[#f9fafb] px-4 py-3 sm:flex-row sm:items-center sm:gap-3">
      <div className="flex min-w-0 flex-1 flex-col gap-0.5" style={{ fontFamily: "Cabin, sans-serif" }}>
        <p className="truncate text-sm font-semibold text-[#181d27]">
          Responding as {MEMBER_PROFILE.orgName}
        </p>
        <p className="text-xs text-[#535862]">
          {MEMBER_PROFILE.ueiOnFile ? "UEI on file" : "No UEI on file"} · Contact: {contactName}, {contactEmail}
        </p>
      </div>
      <button
        type="button"
        onClick={startEditing}
        className="flex shrink-0 items-center gap-1 self-start text-sm font-semibold text-[#535862] transition-colors hover:text-[#181d27] sm:self-auto"
        style={{ fontFamily: "Cabin, sans-serif" }}
      >
        <Pencil className="size-3.5" />
        Change contact
      </button>
    </div>
  );
}

/* ── Program select — node 15494:25452 for the open dropdown ─────────────── */

function ProgramMetaLine({ program }: { program: MemberProgram }) {
  return (
    <p className="truncate text-xs text-[#535862]" style={{ fontFamily: "Cabin, sans-serif" }}>
      {program.focusAreas} · {formatAsCurrency(String(program.budget))} · {program.peopleServed.toLocaleString()} served
    </p>
  );
}

function BestMatchBadge() {
  return (
    <span className="inline-flex shrink-0 items-center rounded-full border border-[#abefc6] bg-[#ecfdf3] px-2 py-0.5 text-xs font-medium text-[#067647]">
      Best match
    </span>
  );
}

function ProgramSelect({
  selectedProgram,
  respondingWithoutProgram,
  onSelectProgram,
  onRespondWithoutProgram,
}: {
  selectedProgram: MemberProgram | null;
  respondingWithoutProgram: boolean;
  onSelectProgram: (program: MemberProgram) => void;
  onRespondWithoutProgram: () => void;
}) {
  const isBestMatchSelected = selectedProgram?.isBestMatch && !respondingWithoutProgram;

  return (
    <div className="flex w-full flex-col gap-1.5">
      <p className="text-sm font-medium text-[#414651]" style={{ fontFamily: "Cabin, sans-serif" }}>
        Program to propose
      </p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={`flex h-11 w-full items-center gap-2.5 rounded-lg border bg-white px-3 py-2.5 text-left transition-colors ${
              isBestMatchSelected ? "border-[#00786f]" : "border-[#d5d7da] hover:border-[#98a2b3]"
            }`}
          >
            <span
              className="truncate text-base text-[#181d27]"
              style={{ fontFamily: "Cabin, sans-serif" }}
            >
              {respondingWithoutProgram ? "Respond without a program" : selectedProgram?.name}
            </span>
            {isBestMatchSelected && <BestMatchBadge />}
            <div className="flex-1" />
            <ChevronDown className="size-4 shrink-0 text-[#717680]" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-[--radix-dropdown-menu-trigger-width] min-w-[320px] rounded-[10px] p-1.5 shadow-lg"
        >
          {MEMBER_PROGRAMS.map((program) => {
            const selected = !respondingWithoutProgram && selectedProgram?.id === program.id;
            return (
              <DropdownMenuItem
                key={program.id}
                onSelect={() => onSelectProgram(program)}
                className={`flex cursor-pointer flex-col items-stretch gap-0.5 rounded-md px-3 py-2.5 ${
                  selected ? "bg-[#f0fdfa]" : ""
                }`}
              >
                <div className="flex w-full items-center gap-2">
                  <span
                    className="truncate text-sm font-semibold text-[#181d27]"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    {program.name}
                  </span>
                  {program.isBestMatch && <BestMatchBadge />}
                  <div className="flex-1" />
                  {selected && <Check className="size-[18px] shrink-0 text-[#0e9384]" />}
                </div>
                <ProgramMetaLine program={program} />
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() =>
              toast("Program creation isn't available in this preview.", {
                description: "This would normally open your organization's program builder.",
              })
            }
            className="cursor-pointer gap-1.5 rounded-md px-3 py-2.5 font-semibold text-[#00786f]"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            <Plus className="size-4" />
            Create a new program
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={onRespondWithoutProgram}
            className="cursor-pointer rounded-md px-3 py-2.5 font-semibold text-[#475467]"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            Respond without a program
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <p className="text-xs text-[#535862]" style={{ fontFamily: "Cabin, sans-serif" }}>
        {respondingWithoutProgram
          ? "No program selected — describe what you'd deliver below."
          : "Fields below are filled from this program. Changes here apply to this response only; your program record isn't changed."}
      </p>
    </div>
  );
}

/* ── Page shell ────────────────────────────────────────────────────────── */

export function PublicPartnerMemberInterestPage() {
  const [selectedProgram, setSelectedProgram] = useState<MemberProgram | null>(BEST_MATCH_PROGRAM);
  const [respondingWithoutProgram, setRespondingWithoutProgram] = useState(false);
  const [programFieldSource, setProgramFieldSource] = useState<Set<ProgramFieldName>>(
    fieldsFromProgram(BEST_MATCH_PROGRAM),
  );
  const [formData, setFormData] = useState<MemberFormData>({
    contactName: MEMBER_PROFILE.contactName,
    contactEmail: MEMBER_PROFILE.contactEmail,
    estimatedBudget: "",
    ...deriveProgramFields(BEST_MATCH_PROGRAM),
  });
  const [touched, setTouched] = useState<Partial<Record<ValidatedFieldName, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errors: Partial<Record<ValidatedFieldName, string>> = {
    contactName: validateField("contactName", formData.contactName),
    contactEmail: validateField("contactEmail", formData.contactEmail),
    programDescription: validateField("programDescription", formData.programDescription),
    estimatedBudget: validateField("estimatedBudget", formData.estimatedBudget),
    peopleServed: validateField("peopleServed", formData.peopleServed),
  };

  const fieldError = (name: ValidatedFieldName) => (touched[name] ? errors[name] : undefined);
  const isInvalid = (name: ValidatedFieldName) => Boolean(touched[name] && errors[name]);

  const handleChange = (name: keyof MemberFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (name: ValidatedFieldName) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (name === "estimatedBudget" && !validateField("estimatedBudget", formData.estimatedBudget)) {
      setFormData((prev) => ({ ...prev, estimatedBudget: formatAsCurrency(prev.estimatedBudget) }));
    }
  };

  const handleSelectProgram = (program: MemberProgram) => {
    setSelectedProgram(program);
    setRespondingWithoutProgram(false);
    setProgramFieldSource(fieldsFromProgram(program));
    setFormData((prev) => ({ ...prev, ...deriveProgramFields(program) }));
  };

  const handleRespondWithoutProgram = () => {
    setSelectedProgram(null);
    setRespondingWithoutProgram(true);
    setProgramFieldSource(new Set());
    setFormData((prev) => ({ ...prev, ...deriveProgramFields(null) }));
  };

  const handleContactSave = (next: { contactName: string; contactEmail: string }) => {
    setFormData((prev) => ({ ...prev, ...next }));
  };

  const handleSendInterest = () => {
    setTouched((prev) => ({
      ...prev,
      ...Object.fromEntries(REQUIRED_FIELDS.map((field) => [field, true])),
    }));
    const hasErrors = REQUIRED_FIELDS.some((field) => errors[field]);
    if (hasErrors) {
      toast.error("Check the highlighted fields before sending.");
      return;
    }
    setSubmitting(true);
    // No backend behind this preview — simulate the round trip so the flow
    // reads the way it will once it's wired to a real endpoint.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Your interest was sent to " + PARTNER_CALL.orgName);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]" style={{ fontFamily: "Cabin, sans-serif" }}>
      <MemberInterestHeader />
      <main className="flex w-full flex-col items-center px-6 py-8 sm:px-10 sm:py-10">
        <div className="w-full max-w-[680px]">
          {submitted ? (
            <ExpressInterestSuccess
              bodyText={
                <>
                  They review responses after {PARTNER_CALL.closesOn}. If you’re selected, we’ll email{" "}
                  {formData.contactEmail} with next steps for signing the MOU.
                </>
              }
              summaryLine={
                selectedProgram
                  ? `${PARTNER_CALL.roleName} · via ${selectedProgram.name} · Estimated budget ${formatAsCurrency(formData.estimatedBudget)}`
                  : `${PARTNER_CALL.roleName} · Estimated budget ${formatAsCurrency(formData.estimatedBudget)}`
              }
              cta={{ label: "Go to Dashboard", to: "/" }}
            />
          ) : (
            <div className="flex w-full flex-col gap-5 rounded-xl border border-[#e9eaeb] bg-white p-7">
              <div className="flex flex-col gap-1.5">
                <h1
                  className="text-2xl leading-[30px] text-[#181d27]"
                  style={{ fontFamily: "Lustria, serif" }}
                >
                  Express interest: {PARTNER_CALL.roleName}
                </h1>
                <p className="text-sm text-[#535862]" style={{ fontFamily: "Cabin, sans-serif" }}>
                  For {PARTNER_CALL.orgName}’s ACL application · Responses close {PARTNER_CALL.closesOn}
                </p>
              </div>

              <RespondingAsBand
                contactName={formData.contactName}
                contactEmail={formData.contactEmail}
                onSave={handleContactSave}
              />

              <ProgramSelect
                selectedProgram={selectedProgram}
                respondingWithoutProgram={respondingWithoutProgram}
                onSelectProgram={handleSelectProgram}
                onRespondWithoutProgram={handleRespondWithoutProgram}
              />

              <h2
                className="text-base font-semibold text-[#181d27]"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                What you would deliver
              </h2>

              <Field
                id="programDescription"
                label="Describe your program for this role"
                required
                badge={programFieldSource.has("programDescription") ? <ProgramBadge>From your program</ProgramBadge> : undefined}
                helperText="Becomes your component program in the application if you are selected."
                error={fieldError("programDescription")}
              >
                <Textarea
                  id="programDescription"
                  className="min-h-[110px]"
                  value={formData.programDescription}
                  onChange={(e) => handleChange("programDescription", e.target.value)}
                  onBlur={() => handleBlur("programDescription")}
                  aria-invalid={isInvalid("programDescription")}
                  placeholder="e.g. Monthly cooking demonstrations and 6-week nutrition courses at 4 distribution sites, taught by two certified community health workers, with attendance and pre/post knowledge surveys."
                />
              </Field>

              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  id="estimatedBudget"
                  label="Estimated budget for this role"
                  required
                  helperText={
                    selectedProgram
                      ? `Your program budget is ${formatAsCurrency(String(selectedProgram.budget))}; enter the share for this role.`
                      : undefined
                  }
                  error={fieldError("estimatedBudget")}
                >
                  <Input
                    id="estimatedBudget"
                    inputMode="decimal"
                    className="h-11"
                    value={formData.estimatedBudget}
                    onChange={(e) => handleChange("estimatedBudget", e.target.value)}
                    onBlur={() => handleBlur("estimatedBudget")}
                    aria-invalid={isInvalid("estimatedBudget")}
                    placeholder="$ Enter amount"
                  />
                </Field>
                <Field
                  id="peopleServed"
                  label="People served per year"
                  badge={programFieldSource.has("peopleServed") ? <ProgramBadge>From your program</ProgramBadge> : undefined}
                  error={fieldError("peopleServed")}
                >
                  <Input
                    id="peopleServed"
                    inputMode="numeric"
                    className="h-11"
                    value={formData.peopleServed}
                    onChange={(e) => handleChange("peopleServed", e.target.value)}
                    onBlur={() => handleBlur("peopleServed")}
                    aria-invalid={isInvalid("peopleServed")}
                    placeholder="e.g. 400"
                  />
                </Field>
              </div>

              <Field
                id="serviceArea"
                label="Service area"
                badge={programFieldSource.has("serviceArea") ? <ProgramBadge>From your program</ProgramBadge> : undefined}
              >
                <Input
                  id="serviceArea"
                  className="h-11"
                  value={formData.serviceArea}
                  onChange={(e) => handleChange("serviceArea", e.target.value)}
                  placeholder="e.g. Gresham, Fairview and Troutdale, OR"
                />
              </Field>

              <Field
                id="relevantExperience"
                label="Relevant experience (optional)"
                badge={
                  programFieldSource.has("relevantExperience") ? <ProgramBadge>From your program</ProgramBadge> : undefined
                }
              >
                <Textarea
                  id="relevantExperience"
                  className="min-h-[64px]"
                  value={formData.relevantExperience}
                  onChange={(e) => handleChange("relevantExperience", e.target.value)}
                  placeholder="e.g. SNAP-Ed subgrantee 2022–2025 through Oregon State University Extension."
                />
              </Field>

              <div className="flex flex-col-reverse items-stretch justify-end gap-3 pt-1 sm:flex-row sm:items-center">
                <Button
                  asChild
                  variant="outline"
                  className="h-11 border-[#d5d7da] font-semibold text-[#414651] shadow-xs hover:bg-[#fafafa]"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  <Link to="/publicpartner-open">Back to Partner Call</Link>
                </Button>
                <Button
                  onClick={handleSendInterest}
                  disabled={submitting}
                  className="h-11 bg-[#0e9384] font-semibold text-white shadow-xs hover:bg-[#107569]"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  {submitting ? "Sending…" : "Send interest"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
