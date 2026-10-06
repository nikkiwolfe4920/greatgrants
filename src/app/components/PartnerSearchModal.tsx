import { useMemo, useState } from "react";
import { Check, ChevronDown, Plus, Search, SlidersHorizontal, X } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/app/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Button } from "@/app/components/ui/button";
import {
  partnerNeeds,
  partnerOrganizations,
  type PartnerInviteStatus,
  type PartnerOrganization,
} from "@/data/partnerSearch";

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;

interface PartnerSearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Need preselected in the "Inviting to" select. */
  defaultNeedId?: string;
}

interface Filters {
  membersOnly: boolean;
  inServiceAreaOnly: boolean;
  hideUnavailable: boolean;
}

const NO_FILTERS: Filters = { membersOnly: false, inServiceAreaOnly: false, hideUnavailable: false };

type StatusMap = Record<string, { status: PartnerInviteStatus; note?: string }>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

const todayLabel = () => new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" });

/** "Add a partner" — search Great Grants organizations and invite them to a need on an application. */
export function PartnerSearchModal({ open, onOpenChange, defaultNeedId = partnerNeeds[0].id }: PartnerSearchModalProps) {
  const [needId, setNeedId] = useState(defaultNeedId);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Filters>(NO_FILTERS);
  // Invite state is tracked per need so switching "Inviting to" never leaks status across needs.
  const [statusByNeed, setStatusByNeed] = useState<Record<string, StatusMap>>({});
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const need = partnerNeeds.find((n) => n.id === needId) ?? partnerNeeds[0];

  const statusFor = (org: PartnerOrganization) =>
    statusByNeed[needId]?.[org.id] ?? org.initialStatus[needId] ?? { status: "available" as PartnerInviteStatus };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return partnerOrganizations
      .filter((org) => {
        if (q && ![org.name, org.city, ...org.focusAreas].some((f) => f.toLowerCase().includes(q))) return false;
        if (filters.membersOnly && !org.member) return false;
        if (filters.inServiceAreaOnly && !org.inServiceArea) return false;
        if (filters.hideUnavailable) {
          const s = statusByNeed[needId]?.[org.id] ?? org.initialStatus[needId];
          if (s && (s.status === "invited" || s.status === "selected")) return false;
        }
        return true;
      })
      .sort((a, b) => b.match[needId] - a.match[needId]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, filters, needId, statusByNeed]);

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  const invite = (org: PartnerOrganization) => {
    setStatusByNeed((prev) => ({
      ...prev,
      [needId]: { ...prev[needId], [org.id]: { status: "invited", note: `Invited ${todayLabel()}` } },
    }));
    toast.success(`Invited ${org.name}`, { description: `They'll see your request for "${need.label}".` });
  };

  const emailInvalid = email.trim() !== "" && !EMAIL_RE.test(email.trim());
  const canSendEmail = orgName.trim() !== "" && EMAIL_RE.test(email.trim());

  const sendEmailInvite = () => {
    setEmailTouched(true);
    if (!canSendInvite()) return;
    toast.success(`Invite sent to ${orgName.trim()}`, { description: `We emailed ${email.trim()} a link for "${need.label}".` });
    setOrgName("");
    setEmail("");
    setEmailTouched(false);
  };
  const canSendInvite = () => canSendEmail;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[calc(100%-2rem)] sm:max-w-[760px] max-h-[calc(100vh-2rem)] flex flex-col gap-5 p-6 rounded-xl shadow-[0px_20px_24px_-4px_rgba(15,23,41,0.18)] [&>button:last-child]:hidden"
        style={CABIN}
      >
        {/* Header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-4">
            <DialogTitle className="text-lg font-semibold text-[#181d27]" style={CABIN}>
              Add a partner
            </DialogTitle>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              aria-label="Close"
              className="-m-1.5 rounded-md p-1.5 text-[#717680] transition-colors hover:bg-gray-100 hover:text-[#414651] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384]"
            >
              <X className="size-5" />
            </button>
          </div>
          <DialogDescription className="text-sm text-[#535862]" style={CABIN}>
            Search organizations already on Great Grants and invite them to a need on this application.
          </DialogDescription>
        </div>

        {/* Scrollable body so the header and Done stay visible on short viewports */}
        <div className="flex flex-col gap-5 overflow-y-auto -mx-1 px-1">
          {/* Need + search */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-end">
            <div className="flex flex-col gap-1.5 sm:w-[240px] shrink-0">
              <label htmlFor="partner-need" className="text-sm font-medium text-[#414651]">
                Inviting to
              </label>
              <Select value={needId} onValueChange={setNeedId}>
                <SelectTrigger id="partner-need" className="h-[46px] w-full rounded-lg border-[#d5d7da] bg-white text-base text-[#181d27]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {partnerNeeds.map((n) => (
                    <SelectItem key={n.id} value={n.id}>
                      {n.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-1 flex-col gap-1.5 min-w-0">
              <label htmlFor="partner-search" className="text-sm font-medium text-[#414651]">
                Search
              </label>
              <div className="flex h-[46px] items-center gap-2 rounded-lg border border-[#d5d7da] bg-white px-3 focus-within:border-[#0e9384] focus-within:ring-[3px] focus-within:ring-[#0e9384]/20">
                <Search className="size-4 shrink-0 text-[#717680]" aria-hidden />
                <input
                  id="partner-search"
                  type="search"
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, location or focus area"
                  className="min-w-0 flex-1 bg-transparent text-base text-[#181d27] outline-none placeholder:text-[#717680] [&::-webkit-search-cancel-button]:hidden"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="rounded p-0.5 text-[#717680] hover:text-[#414651]"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="h-9 gap-2 rounded-md border-[#d1d5dc] bg-white px-[13px] font-semibold text-[#364153]"
                >
                  <Plus className="size-4" />
                  Add Filters
                  {activeFilterCount > 0 && (
                    <span className="rounded-full bg-[#0e9384] px-1.5 text-xs font-medium text-white">{activeFilterCount}</span>
                  )}
                  <ChevronDown className="size-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-[280px] p-3">
                <fieldset className="flex flex-col gap-3">
                  <legend className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#181d27]">
                    <SlidersHorizontal className="size-4 text-[#717680]" /> Filter organizations
                  </legend>
                  {(
                    [
                      ["membersOnly", "Great Grants members only"],
                      ["inServiceAreaOnly", "In my service area"],
                      ["hideUnavailable", "Hide invited & selected"],
                    ] as const
                  ).map(([key, label]) => (
                    <label key={key} className="flex cursor-pointer items-center gap-2 text-sm text-[#414651]">
                      <Checkbox
                        checked={filters[key]}
                        onCheckedChange={(v) => setFilters((f) => ({ ...f, [key]: v === true }))}
                      />
                      {label}
                    </label>
                  ))}
                </fieldset>
                {activeFilterCount > 0 && (
                  <button
                    type="button"
                    onClick={() => setFilters(NO_FILTERS)}
                    className="mt-3 text-sm font-semibold text-[#107569] hover:underline"
                  >
                    Clear filters
                  </button>
                )}
              </PopoverContent>
            </Popover>
          </div>

          {/* Results */}
          <section aria-label="Search results" className="flex flex-col gap-2">
            <p className="text-sm font-medium text-[#535862]" role="status" aria-live="polite">
              {results.length} {results.length === 1 ? "organization" : "organizations"} · sorted by fit to this need
            </p>

            {results.length === 0 ? (
              <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-[#d5d7da] px-4 py-8 text-center">
                <p className="text-sm font-semibold text-[#181d27]">No organizations match your search</p>
                <p className="text-sm text-[#535862]">Try a different keyword or clear your filters, or invite them by email below.</p>
                {(query || activeFilterCount > 0) && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setFilters(NO_FILTERS);
                    }}
                    className="text-sm font-semibold text-[#107569] hover:underline"
                  >
                    Reset search and filters
                  </button>
                )}
              </div>
            ) : (
              <ul className="flex flex-col gap-2">
                {results.map((org) => (
                  <PartnerRow key={org.id} org={org} needId={needId} state={statusFor(org)} onInvite={() => invite(org)} />
                ))}
              </ul>
            )}
          </section>

          {/* Invite by email */}
          <section className="flex flex-col gap-2.5 rounded-lg bg-[#f9fafb] px-4 py-3.5" aria-labelledby="partner-email-heading">
            <h3 id="partner-email-heading" className="text-sm font-semibold text-[#181d27]">
              Not on Great Grants yet?
            </h3>
            <form
              className="flex flex-col gap-2 sm:flex-row sm:items-start"
              onSubmit={(e) => {
                e.preventDefault();
                sendEmailInvite();
              }}
              noValidate
            >
              <input
                aria-label="Organization name"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="Organization name"
                className="h-10 min-w-0 rounded-lg border border-[#d5d7da] bg-white px-3 text-sm text-[#181d27] outline-none placeholder:text-[#717680] focus:border-[#0e9384] focus:ring-[3px] focus:ring-[#0e9384]/20 sm:flex-1"
              />
              <div className="flex flex-col gap-1 sm:flex-1">
                <input
                  type="email"
                  aria-label="Contact email"
                  aria-invalid={emailInvalid || undefined}
                  aria-describedby={emailInvalid ? "partner-email-error" : undefined}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  placeholder="Contact email"
                  className="h-10 min-w-0 rounded-lg border border-[#d5d7da] bg-white px-3 text-sm text-[#181d27] outline-none placeholder:text-[#717680] focus:border-[#0e9384] focus:ring-[3px] focus:ring-[#0e9384]/20 aria-[invalid]:border-red-500"
                />
                {emailTouched && emailInvalid && (
                  <p id="partner-email-error" className="text-xs text-red-600">
                    Enter a valid email address.
                  </p>
                )}
              </div>
              <Button type="submit" variant="outline" disabled={!canSendEmail} className="h-10 rounded-lg border-[#d5d7da] px-3 font-semibold text-[#414651]">
                Send invite
              </Button>
            </form>
            <p className="text-xs text-[#535862]">
              They get an email and a landing page for this need. Accepting creates their account and a Partnership in Interested.
            </p>
          </section>
        </div>

        <div className="flex justify-end">
          <Button
            type="button"
            onClick={() => onOpenChange(false)}
            className="h-10 rounded-lg bg-[#0e9384] px-3.5 font-semibold text-white hover:bg-[#107569]"
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function PartnerRow({
  org,
  needId,
  state,
  onInvite,
}: {
  org: PartnerOrganization;
  needId: string;
  state: { status: PartnerInviteStatus; note?: string };
  onInvite: () => void;
}) {
  const match = org.match[needId];
  const meta = [
    org.city,
    `${org.staff} staff`,
    org.focusAreas.join(", "),
    org.verified && "501(c)(3) verified",
    state.note ?? org.note,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <li className="flex min-h-16 flex-wrap items-center gap-3 rounded-lg border border-[#e9eaeb] bg-white px-4 py-3">
      <div
        className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e9eaeb] text-xs font-medium text-[#535862]"
        aria-hidden
      >
        {initials(org.name)}
      </div>
      <div className="min-w-0 flex-1 basis-[200px]">
        <p className="truncate text-sm font-semibold text-[#181d27]">{org.name}</p>
        <p className="line-clamp-2 text-xs text-[#535862]" title={meta}>
          {meta}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <span
          className={
            "rounded-full border px-2 py-0.5 text-xs font-medium whitespace-nowrap " +
            (org.member
              ? "border-[#99f6e0] bg-[#f0fdf9] text-[#107569]"
              : "border-[#e9eaeb] bg-[#fafafa] text-[#414651]")
          }
        >
          {org.member ? "Member" : "Non-member"}
        </span>
        <span
          className={
            "rounded-full border px-2 py-0.5 text-xs font-medium whitespace-nowrap " +
            (match >= 85
              ? "border-[#99f6e0] bg-[#f0fdf9] text-[#107569]"
              : "border-[#e9eaeb] bg-[#fafafa] text-[#414651]")
          }
          title="Fit to this need"
        >
          {match}% match
        </span>
        <RowAction status={state.status} orgName={org.name} onInvite={onInvite} />
      </div>
    </li>
  );
}

function RowAction({ status, orgName, onInvite }: { status: PartnerInviteStatus; orgName: string; onInvite: () => void }) {
  const base = "h-9 min-w-[96px] rounded-lg px-3 font-semibold";
  if (status === "invited" || status === "selected") {
    return (
      <Button type="button" variant="outline" disabled className={base}>
        {status === "selected" ? "Selected" : (
          <>
            <Check className="size-4" /> Invited
          </>
        )}
      </Button>
    );
  }
  if (status === "responded") {
    return (
      <Button
        type="button"
        variant="outline"
        className={`${base} border-[#d5d7da] text-[#414651]`}
        onClick={() => toast.info(`${orgName} responded to your Partner Call`)}
      >
        View response
      </Button>
    );
  }
  return (
    <Button
      type="button"
      variant="outline"
      aria-label={`Invite ${orgName}`}
      className={`${base} border-[#d5d7da] text-[#414651] shadow-xs`}
      onClick={onInvite}
    >
      Invite
    </Button>
  );
}
