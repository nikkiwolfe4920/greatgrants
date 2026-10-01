import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowRight, ChevronDown, ChevronUp, Download, FileText, Printer } from "lucide-react";
import { toast } from "sonner";
import { Logo } from "../components/Logo";
import { Button } from "../components/ui/button";
import { PARTNER_CALL } from "../../data/publicPartnerCall";
import type { PartnerCallDocument } from "../../data/publicPartnerCall";

/**
 * 7.4 Public Partner Call Page — the logged-out page a prime applicant shares
 * so a prospective sub-recipient can read a partnership call and express
 * interest without creating an account.
 *
 * Figma: AJQoDJAJZL2ItawgAfLYh3
 *   - Page shell, hero, body cards, Express interest card ... node 15494:25240
 *   - Documents download list .......................... node 15004:44253
 *   - Express interest card (open state) ............... node 15494:25287
 *   - Closed state right rail ........................... node 15494:25307
 *
 * Two routes share this one component because everything except the status
 * badge, the hero copy and the right rail is identical between them:
 *   /publicpartner-open   -> <PublicPartnerOpenPage />
 *   /publicpartner-closed -> <PublicPartnerClosedPage />
 */

/* ── Shared bits ───────────────────────────────────────────────────────── */

function PartnerCallBadge() {
  return (
    <span
      className="inline-flex shrink-0 items-center rounded-full border border-[#99f6e0] bg-[#f0fdf9] px-2.5 py-0.5 text-sm font-medium text-[#107569]"
      style={{ fontFamily: "Cabin, sans-serif" }}
    >
      Partner Call
    </span>
  );
}

function StatusBadge({ open }: { open: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-sm font-medium ${
        open
          ? "border-[#abefc6] bg-[#ecfdf3] text-[#067647]"
          : "border-[#e9eaeb] bg-[#fafafa] text-[#414651]"
      }`}
      style={{ fontFamily: "Cabin, sans-serif" }}
    >
      {open ? `Open · responses close ${PARTNER_CALL.closesOn}` : `Responses closed ${PARTNER_CALL.closesOn}`}
    </span>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="w-full rounded-xl border border-[#e9eaeb] bg-white p-6">
      <h2
        className="text-lg font-semibold leading-7 text-[#181d27]"
        style={{ fontFamily: "Cabin, sans-serif" }}
      >
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="flex items-start justify-between gap-3 border-t border-[#f2f4f7] py-2.5 text-sm first:border-t-0 first:pt-0"
      style={{ fontFamily: "Cabin, sans-serif" }}
    >
      <span className="text-[#535862]">{label}</span>
      <span className="text-right font-semibold text-[#181d27]">{value}</span>
    </div>
  );
}

/** The downloads section — node 15004:44253, adapted to a static card instead
 * of a popover menu so it reads naturally inline with the other content
 * cards on this page. */
function DocumentsCard({ documents }: { documents: PartnerCallDocument[] }) {
  const [expanded, setExpanded] = useState(true);

  const handleDownload = (doc: PartnerCallDocument) => {
    toast(`${doc.name}`, {
      description: "This is sample data — no file is attached in this preview.",
    });
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#e9eaeb] bg-white">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-6 py-4 text-left transition-colors hover:bg-[#fafafa]"
        aria-expanded={expanded}
      >
        <span className="flex items-center gap-3">
          <FileText className="size-[18px] text-[#535862]" strokeWidth={1.75} />
          <span
            className="text-sm font-semibold text-[#181d27]"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            Documents <span className="font-normal text-[#535862]">({documents.length})</span>
          </span>
        </span>
        {expanded ? (
          <ChevronUp className="size-[18px] shrink-0 text-[#717680]" />
        ) : (
          <ChevronDown className="size-[18px] shrink-0 text-[#717680]" />
        )}
      </button>

      {expanded && (
        <div className="space-y-2 border-t border-[#e9eaeb] px-3 pb-3 pt-3">
          {documents.map((doc) => (
            <button
              key={doc.name}
              type="button"
              onClick={() => handleDownload(doc)}
              className="flex w-full items-center gap-3 rounded-lg border border-[#e9eaeb] p-3 text-left transition-colors hover:border-[#d0d5dd] hover:bg-[#fafafa]"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#fef3f2]">
                <FileText className="size-6 text-[#f04438]" strokeWidth={1.75} />
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className="block truncate text-sm font-semibold text-[#181d27]"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  {doc.name}
                </span>
                <span
                  className="block text-xs text-[#717680]"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  {doc.type} · {doc.size}
                </span>
              </span>
              <Download className="size-6 shrink-0 text-[#98a2b3]" strokeWidth={1.75} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Express interest (open state) ────────────────────────────────────── */

const WHAT_HAPPENS_NEXT = [
  `${PARTNER_CALL.orgName} reviews responses after ${PARTNER_CALL.closesOn.replace(/, \d{4}$/, "")}.`,
  "If selected, you create a free Great Grants account and sign an MOU.",
  "Your program is included in their application, and you can follow its progress.",
];

function ExpressInterestCard({ onExpressInterest }: { onExpressInterest: () => void }) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl border border-[#e9eaeb] bg-white p-6">
      <h2
        className="text-lg font-semibold leading-7 text-[#181d27]"
        style={{ fontFamily: "Cabin, sans-serif" }}
      >
        Interested in this role?
      </h2>
      <p className="text-sm leading-5 text-[#535862]" style={{ fontFamily: "Cabin, sans-serif" }}>
        Tell {PARTNER_CALL.orgName} about your organization and what you would deliver. No account
        needed; it takes about 10 minutes.
      </p>

      <Button
        onClick={onExpressInterest}
        className="h-11 w-full bg-[#0e9384] font-semibold text-white shadow-xs hover:bg-[#107569]"
        style={{ fontFamily: "Cabin, sans-serif" }}
      >
        Express interest
      </Button>

      <div className="h-px w-full bg-[#e9eaeb]" />

      <p
        className="text-sm font-semibold text-[#181d27]"
        style={{ fontFamily: "Cabin, sans-serif" }}
      >
        What happens next
      </p>
      <div className="flex flex-col gap-4">
        {WHAT_HAPPENS_NEXT.map((step, i) => (
          <div key={step} className="flex items-start gap-2.5">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-xl bg-[#f0fdfa] text-xs font-medium text-[#107569]">
              {i + 1}
            </span>
            <p className="text-sm leading-5 text-[#414651]" style={{ fontFamily: "Cabin, sans-serif" }}>
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Closed state right rail — node 15494:25307 ───────────────────────── */

function ClosedStateCard() {
  return (
    <div className="flex w-full flex-col gap-3 rounded-xl border border-[#e9eaeb] bg-white p-6">
      <span
        className="inline-flex w-fit items-center rounded-full border border-[#e9eaeb] bg-[#fafafa] px-2.5 py-0.5 text-sm font-medium text-[#414651]"
        style={{ fontFamily: "Cabin, sans-serif" }}
      >
        {`Responses closed ${PARTNER_CALL.closesOn}`}
      </span>
      <p
        className="text-lg font-semibold leading-7 text-[#181d27]"
        style={{ fontFamily: "Cabin, sans-serif" }}
      >
        This Partner Call is no longer accepting responses.
      </p>
      <p className="text-sm leading-5 text-[#535862]" style={{ fontFamily: "Cabin, sans-serif" }}>
        You can still find other partnership opportunities and funding that fits your organization
        on Great Grants.
      </p>
      <Button
        asChild
        variant="outline"
        className="h-11 w-full border-[#d5d7da] font-semibold text-[#414651] shadow-xs hover:bg-[#fafafa]"
        style={{ fontFamily: "Cabin, sans-serif" }}
      >
        <Link to="/marketing">
          Explore Great Grants
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    </div>
  );
}

/* ── Page shell ────────────────────────────────────────────────────────── */

function PublicPartnerCallPage({ open }: { open: boolean }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Cabin, sans-serif" }}>
      {/* Top bar */}
      <header className="border-b border-[#e9eaeb] bg-white">
        <div className="mx-auto flex h-[75px] max-w-[1440px] items-center gap-4 px-6 sm:px-10 lg:px-[120px]">
          <Link to="/marketing" aria-label="Great Grants home" className="shrink-0">
            <Logo />
          </Link>
          <div className="flex-1" />
          <button
            type="button"
            onClick={() => window.print()}
            className="hidden items-center gap-2 rounded-md border border-[#d5d7da] bg-white px-3.5 py-2 text-sm font-semibold text-[#414651] shadow-xs transition-colors hover:bg-[#fafafa] sm:inline-flex print:hidden"
          >
            <Printer className="size-4" />
            Export PDF
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 pb-10 pt-12 sm:px-10 lg:px-[120px]">
          <div className="flex flex-wrap items-center gap-2">
            <PartnerCallBadge />
            <StatusBadge open={open} />
          </div>
          <h1
            className="max-w-[900px] text-[28px] leading-[36px] text-[#181d27] sm:text-[40px] sm:leading-[50px]"
            style={{ fontFamily: "Lustria, serif" }}
          >
            {PARTNER_CALL.title}
          </h1>
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-2xl bg-[#ccfbef] text-xs font-medium text-[#107569]">
              {PARTNER_CALL.orgInitials}
            </span>
            <p className="text-base leading-6 text-[#414651]">
              Posted by {PARTNER_CALL.orgName} · {PARTNER_CALL.orgLocation} · {PARTNER_CALL.orgRole}
            </p>
          </div>
          {/* Mobile export action — the header button is hidden below sm. */}
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex w-fit items-center gap-2 rounded-md border border-[#d5d7da] bg-white px-3.5 py-2 text-sm font-semibold text-[#414651] shadow-xs sm:hidden print:hidden"
          >
            <Printer className="size-4" />
            Export PDF
          </button>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 pb-16 pt-6 sm:px-10 lg:flex-row lg:items-start lg:px-[120px] lg:pt-10">
          {/* Content */}
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <InfoCard title="About this partnership">
              <p className="text-base leading-6 text-[#414651]">{PARTNER_CALL.aboutPartnership}</p>
            </InfoCard>

            <InfoCard title="What the partner will do">
              <p className="text-base leading-6 text-[#414651]">{PARTNER_CALL.whatPartnerWillDo}</p>
              <div className="mt-3">
                <StatRow label="Partners needed" value={PARTNER_CALL.partnersNeeded} />
                <StatRow label="Estimated subaward" value={PARTNER_CALL.estimatedSubaward} />
                <StatRow label="Period of performance" value={PARTNER_CALL.periodOfPerformance} />
              </div>
            </InfoCard>

            <InfoCard title="Funding opportunity">
              <div>
                <StatRow label="Funder" value={PARTNER_CALL.funder} />
                <StatRow label="Program" value={PARTNER_CALL.program} />
                <StatRow label="Application deadline" value={PARTNER_CALL.applicationDeadline} />
                <StatRow label="Award range" value={PARTNER_CALL.awardRange} />
              </div>
            </InfoCard>

            <DocumentsCard documents={PARTNER_CALL.documents} />
          </div>

          {/* Right rail */}
          <div className="w-full shrink-0 lg:sticky lg:top-6 lg:w-[380px] print:hidden">
            {open ? (
              <ExpressInterestCard onExpressInterest={() => navigate("/publicpartner-open-guest")} />
            ) : (
              <ClosedStateCard />
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#f2f4f7]">
        <div className="mx-auto max-w-[1440px] px-6 py-5 sm:px-10 lg:px-[120px]">
          <p className="text-xs leading-[18px] text-[#717680]">
            Shared through Great Grants · Report this page
          </p>
        </div>
      </footer>
    </div>
  );
}

export function PublicPartnerOpenPage() {
  return <PublicPartnerCallPage open />;
}

export function PublicPartnerClosedPage() {
  return <PublicPartnerCallPage open={false} />;
}
