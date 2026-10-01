import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Logo } from "../components/Logo";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Field } from "../components/ExpressInterestField";
import { ExpressInterestSuccess } from "../components/ExpressInterestSuccess";
import { PARTNER_CALL } from "../../data/publicPartnerCall";
import {
  formatAsCurrency,
  validateContactEmail,
  validateContactName,
  validateEstimatedBudget,
  validatePeopleServed,
  validateProgramDescription,
} from "../../lib/expressInterestValidation";

/**
 * 7.5 Guest Interest flow — the logged-out, 2-step "Express interest" form
 * reached from the Express interest card on /publicpartner-open. No account
 * needed; nothing here is pre-filled, every field carries a directional
 * placeholder, and required fields validate inline as the guest fills them
 * in.
 *
 * Figma: AJQoDJAJZL2ItawgAfLYh3
 *   - 7.5a Organization & proposal (step 1) ....... node 15494:25312
 *   - 7.5b Data-sharing choice (step 2) ............ node 15494:25644
 *   - 7.5c Submitted (success) ..................... node 15494:25655
 */

type Step = "proposal" | "data-sharing" | "success";

interface ProposalFormData {
  organizationName: string;
  einOrUei: string;
  contactName: string;
  contactEmail: string;
  programDescription: string;
  estimatedBudget: string;
  peopleServed: string;
  relevantExperience: string;
}

type FieldName = keyof ProposalFormData;

const EMPTY_FORM: ProposalFormData = {
  organizationName: "",
  einOrUei: "",
  contactName: "",
  contactEmail: "",
  programDescription: "",
  estimatedBudget: "",
  peopleServed: "",
  relevantExperience: "",
};

const REQUIRED_FIELDS: FieldName[] = [
  "organizationName",
  "einOrUei",
  "contactName",
  "contactEmail",
  "programDescription",
  "estimatedBudget",
];

const EIN_PATTERN = /^\d{2}-\d{7}$/;
const UEI_PATTERN = /^[A-Za-z0-9]{12}$/;

/** Field-level validation — keeps the rules next to the data shape instead
 * of scattered across each input's onBlur handler. The fields this flow
 * shares with the signed-in member flow (program description, budget,
 * people served, contact name/email) call the same validators from
 * src/lib/expressInterestValidation so the rules can't drift between them. */
function validateField(name: FieldName, value: string): string | undefined {
  const trimmed = value.trim();
  switch (name) {
    case "organizationName":
      return trimmed ? undefined : "Enter your organization's name.";
    case "einOrUei":
      if (!trimmed) return "Enter an EIN or UEI.";
      if (!EIN_PATTERN.test(trimmed) && !UEI_PATTERN.test(trimmed)) {
        return "Enter a valid EIN (XX-XXXXXXX) or 12-character UEI.";
      }
      return undefined;
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
    case "relevantExperience":
      return undefined;
    default:
      return undefined;
  }
}

function computeErrors(data: ProposalFormData): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};
  (Object.keys(data) as FieldName[]).forEach((key) => {
    const message = validateField(key, data[key]);
    if (message) errors[key] = message;
  });
  return errors;
}

/* ── Shared bits ───────────────────────────────────────────────────────── */

function GuestInterestHeader({ step, onBackToStep1 }: { step: Step; onBackToStep1: () => void }) {
  return (
    <header className="flex w-full flex-col bg-white">
      {step === "proposal" && (
        <div className="flex w-full justify-end border-b border-[#f2f4f7] bg-[#fafafa] px-6 py-2 sm:px-10">
          <p className="text-xs text-[#535862]" style={{ fontFamily: "Cabin, sans-serif" }}>
            Already have a Great Grants account?{" "}
            <Link
              to="/signin"
              className="font-semibold text-[#0e9384] hover:text-[#107569] hover:underline"
            >
              Sign in
            </Link>{" "}
            to make this faster.
          </p>
        </div>
      )}
      <div className="flex w-full items-center gap-4 border-b border-[#e9eaeb] px-6 py-4 sm:px-10">
        <Link to="/publicpartner-open" aria-label="Great Grants home" className="shrink-0">
          <Logo />
        </Link>
        <div className="flex-1" />
        {step === "data-sharing" && (
          <button
            type="button"
            onClick={onBackToStep1}
            className="text-sm font-semibold text-[#535862] transition-colors hover:text-[#181d27]"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            ← Back
          </button>
        )}
        {step !== "success" && (
          <p
            className="text-sm font-medium text-[#535862]"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            {step === "proposal" ? "Step 1 of 2" : "Step 2 of 2"}
          </p>
        )}
      </div>
      {step !== "success" && (
        <div className="h-1 w-full bg-[#f2f4f7]" aria-hidden>
          <div
            className="h-1 bg-[#0e9384] transition-all duration-300 ease-out"
            style={{ width: step === "proposal" ? "50%" : "100%" }}
          />
        </div>
      )}
    </header>
  );
}

/* ── Step 1 — node 15494:25312 ────────────────────────────────────────── */

function OrganizationProposalStep({
  formData,
  errors,
  touched,
  onChange,
  onBlur,
  onContinue,
}: {
  formData: ProposalFormData;
  errors: Partial<Record<FieldName, string>>;
  touched: Partial<Record<FieldName, boolean>>;
  onChange: (name: FieldName, value: string) => void;
  onBlur: (name: FieldName) => void;
  onContinue: () => void;
}) {
  const fieldError = (name: FieldName) => (touched[name] ? errors[name] : undefined);
  const isInvalid = (name: FieldName) => Boolean(touched[name] && errors[name]);

  return (
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

      <h2
        className="text-base font-semibold text-[#181d27]"
        style={{ fontFamily: "Cabin, sans-serif" }}
      >
        Your organization
      </h2>

      <Field
        id="organizationName"
        label="Organization name"
        required
        error={fieldError("organizationName")}
      >
        <Input
          id="organizationName"
          className="h-11"
          value={formData.organizationName}
          onChange={(e) => onChange("organizationName", e.target.value)}
          onBlur={() => onBlur("organizationName")}
          aria-invalid={isInvalid("organizationName")}
          aria-describedby={isInvalid("organizationName") ? "organizationName-error" : undefined}
          placeholder="e.g. Green Line Community Trust"
        />
      </Field>

      <Field
        id="einOrUei"
        label="EIN or UEI"
        required
        helperText="Used to match you to an existing Great Grants profile, if you have one."
        error={fieldError("einOrUei")}
      >
        <Input
          id="einOrUei"
          className="h-11"
          value={formData.einOrUei}
          onChange={(e) => onChange("einOrUei", e.target.value)}
          onBlur={() => onBlur("einOrUei")}
          aria-invalid={isInvalid("einOrUei")}
          aria-describedby={isInvalid("einOrUei") ? "einOrUei-error" : "einOrUei-helper"}
          placeholder="e.g. 93-1234567"
        />
      </Field>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="contactName" label="Contact name" required error={fieldError("contactName")}>
          <Input
            id="contactName"
            className="h-11"
            value={formData.contactName}
            onChange={(e) => onChange("contactName", e.target.value)}
            onBlur={() => onBlur("contactName")}
            aria-invalid={isInvalid("contactName")}
            aria-describedby={isInvalid("contactName") ? "contactName-error" : undefined}
            placeholder="e.g. Dana Okafor"
          />
        </Field>
        <Field id="contactEmail" label="Contact email" required error={fieldError("contactEmail")}>
          <Input
            id="contactEmail"
            type="email"
            className="h-11"
            value={formData.contactEmail}
            onChange={(e) => onChange("contactEmail", e.target.value)}
            onBlur={() => onBlur("contactEmail")}
            aria-invalid={isInvalid("contactEmail")}
            aria-describedby={isInvalid("contactEmail") ? "contactEmail-error" : undefined}
            placeholder="e.g. dana@yourorganization.org"
          />
        </Field>
      </div>

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
        helperText="This becomes your component program in the application if you are selected."
        error={fieldError("programDescription")}
      >
        <Textarea
          id="programDescription"
          className="min-h-[110px]"
          value={formData.programDescription}
          onChange={(e) => onChange("programDescription", e.target.value)}
          onBlur={() => onBlur("programDescription")}
          aria-invalid={isInvalid("programDescription")}
          aria-describedby={
            isInvalid("programDescription") ? "programDescription-error" : "programDescription-helper"
          }
          placeholder="e.g. Monthly cooking demonstrations and 6-week nutrition courses at 4 distribution sites, taught by two certified community health workers, with attendance and pre/post knowledge surveys."
        />
      </Field>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        <Field
          id="estimatedBudget"
          label="Estimated budget"
          required
          error={fieldError("estimatedBudget")}
        >
          <Input
            id="estimatedBudget"
            inputMode="decimal"
            className="h-11"
            value={formData.estimatedBudget}
            onChange={(e) => onChange("estimatedBudget", e.target.value)}
            onBlur={() => onBlur("estimatedBudget")}
            aria-invalid={isInvalid("estimatedBudget")}
            aria-describedby={isInvalid("estimatedBudget") ? "estimatedBudget-error" : undefined}
            placeholder="e.g. $26,000"
          />
        </Field>
        <Field id="peopleServed" label="People served per year" error={fieldError("peopleServed")}>
          <Input
            id="peopleServed"
            inputMode="numeric"
            className="h-11"
            value={formData.peopleServed}
            onChange={(e) => onChange("peopleServed", e.target.value)}
            onBlur={() => onBlur("peopleServed")}
            aria-invalid={isInvalid("peopleServed")}
            aria-describedby={isInvalid("peopleServed") ? "peopleServed-error" : undefined}
            placeholder="e.g. 400"
          />
        </Field>
      </div>

      <Field id="relevantExperience" label="Relevant experience (optional)">
        <Textarea
          id="relevantExperience"
          className="min-h-[64px]"
          value={formData.relevantExperience}
          onChange={(e) => onChange("relevantExperience", e.target.value)}
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
          onClick={onContinue}
          className="h-11 bg-[#0e9384] font-semibold text-white shadow-xs hover:bg-[#107569]"
          style={{ fontFamily: "Cabin, sans-serif" }}
        >
          Continue
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}

/* ── Step 2 — node 15494:25644 ────────────────────────────────────────── */

function DataSharingStep({
  submitting,
  onChoice,
}: {
  submitting: boolean;
  onChoice: (optedIn: boolean) => void;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-6 rounded-xl border border-[#e9eaeb] bg-white px-7 py-12 text-center">
      <h1
        className="max-w-[520px] text-[28px] leading-9 text-[#181d27]"
        style={{ fontFamily: "Lustria, serif" }}
      >
        Do you want to hear about unique funding opportunities?
      </h1>
      <Button
        onClick={() => onChoice(true)}
        disabled={submitting}
        className="h-12 w-full max-w-[320px] bg-[#0e9384] text-base font-semibold text-white shadow-xs hover:bg-[#107569]"
        style={{ fontFamily: "Cabin, sans-serif" }}
      >
        {submitting ? "Sending…" : "Yes, Opt Me In!"}
      </Button>
      <Button
        onClick={() => onChoice(false)}
        disabled={submitting}
        variant="outline"
        className="h-12 w-full max-w-[320px] border-[#d5d7da] text-base font-semibold text-[#414651] shadow-xs hover:bg-[#fafafa]"
        style={{ fontFamily: "Cabin, sans-serif" }}
      >
        No, Thanks
      </Button>
      <p className="max-w-[420px] text-sm text-[#535862]" style={{ fontFamily: "Cabin, sans-serif" }}>
        Either choice sends your response to {PARTNER_CALL.orgName}.
      </p>
    </div>
  );
}

/* ── Page shell ────────────────────────────────────────────────────────── */

export function PublicPartnerGuestInterestPage() {
  const [step, setStep] = useState<Step>("proposal");
  const [formData, setFormData] = useState<ProposalFormData>(EMPTY_FORM);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);

  const errors = computeErrors(formData);

  const handleChange = (name: FieldName, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (name: FieldName) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (name === "estimatedBudget" && !validateField("estimatedBudget", formData.estimatedBudget)) {
      setFormData((prev) => ({ ...prev, estimatedBudget: formatAsCurrency(prev.estimatedBudget) }));
    }
  };

  const handleContinue = () => {
    setTouched((prev) => ({
      ...prev,
      ...Object.fromEntries(REQUIRED_FIELDS.map((field) => [field, true])),
    }));
    const hasErrors = REQUIRED_FIELDS.some((field) => errors[field]);
    if (hasErrors) {
      toast.error("Check the highlighted fields before continuing.");
      return;
    }
    setStep("data-sharing");
  };

  const handleDataSharingChoice = () => {
    setSubmitting(true);
    // No backend behind this public preview — simulate the round trip so the
    // flow reads the way it will once it's wired to a real endpoint.
    window.setTimeout(() => {
      setSubmitting(false);
      setStep("success");
      toast.success("Your interest was sent to " + PARTNER_CALL.orgName);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]" style={{ fontFamily: "Cabin, sans-serif" }}>
      <GuestInterestHeader step={step} onBackToStep1={() => setStep("proposal")} />
      <main className="flex w-full flex-col items-center px-6 py-8 sm:px-10 sm:py-10">
        <div className="w-full max-w-[680px]">
          {step === "proposal" && (
            <OrganizationProposalStep
              formData={formData}
              errors={errors}
              touched={touched}
              onChange={handleChange}
              onBlur={handleBlur}
              onContinue={handleContinue}
            />
          )}
          {step === "data-sharing" && (
            <DataSharingStep submitting={submitting} onChoice={handleDataSharingChoice} />
          )}
          {step === "success" && (
            <ExpressInterestSuccess
              bodyText={
                <>
                  They review responses after {PARTNER_CALL.closesOn}. If you’re selected, we’ll email{" "}
                  {formData.contactEmail} with a link to create your free account and sign an MOU.
                </>
              }
              summaryLine={`${PARTNER_CALL.roleName} · Estimated budget ${formatAsCurrency(formData.estimatedBudget)}`}
              cta={{ label: "Explore Great Grants", to: "/marketing" }}
              upsell={{
                heading: "Don't stop at one opportunity",
                body: `A free Great Grants account keeps you ahead of the next ${PARTNER_CALL.roleName.toLowerCase()} role — not just this one.`,
                benefits: [
                  `Get matched automatically to grants like ${PARTNER_CALL.orgName}'s, scored against your org's own focus areas`,
                  "Track every response and deadline for every partner call in one dashboard",
                  "Build your organization profile once and reuse it on every application",
                  `Get notified the moment funders like the ${PARTNER_CALL.funder} publish new opportunities`,
                ],
                primaryCta: { label: "Create your free account", to: "/subscribe-entry" },
              }}
            />
          )}
        </div>
      </main>
    </div>
  );
}
