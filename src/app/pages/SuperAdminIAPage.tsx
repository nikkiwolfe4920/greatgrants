import { useState } from "react";
import { Badge } from "@/app/components/ui/badge";
import { Separator } from "@/app/components/ui/separator";
import {
  Search,
  Building2,
  UserCircle2,
  ShieldCheck,
  Eye,
  KeyRound,
  RotateCcw,
  UserPlus,
  UserX,
  GitMerge,
  Trash2,
  FileClock,
  ChevronDown,
  ArrowRight,
  Lock,
  HelpCircle,
  ListChecks,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────
   Status badge — new / reused / modified, matches IA Changes table
───────────────────────────────────────────────────────────────── */
type ChangeStatus = "new" | "reused" | "modified";

function StatusBadge({ status }: { status: ChangeStatus }) {
  const styles: Record<ChangeStatus, string> = {
    new: "bg-[--brand-50,#f0fdf9] bg-teal-50 text-teal-800 border-teal-200",
    reused: "bg-gray-50 text-gray-600 border-gray-200",
    modified: "bg-amber-50 text-amber-800 border-amber-200",
  };
  const label: Record<ChangeStatus, string> = {
    new: "New",
    reused: "Reused",
    modified: "Modified",
  };
  return (
    <Badge variant="outline" className={`${styles[status]} font-semibold`}>
      {label[status]}
    </Badge>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Role badge — who can reach this screen / trigger this action
───────────────────────────────────────────────────────────────── */
type Role = "super" | "support" | "both";

function RoleBadge({ role }: { role: Role }) {
  if (role === "both") {
    return (
      <div className="flex gap-1.5 flex-wrap">
        <Badge className="bg-teal-600 hover:bg-teal-600 text-white gap-1">
          <ShieldCheck className="size-3" /> Super Admin
        </Badge>
        <Badge variant="outline" className="text-gray-600 border-gray-300 gap-1">
          <Eye className="size-3" /> Support Admin
        </Badge>
      </div>
    );
  }
  if (role === "super") {
    return (
      <Badge className="bg-teal-600 hover:bg-teal-600 text-white gap-1">
        <ShieldCheck className="size-3" /> Super Admin only
      </Badge>
    );
  }
  return (
    <Badge variant="outline" className="text-gray-600 border-gray-300 gap-1">
      <Eye className="size-3" /> Support Admin (read-only)
    </Badge>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Generic node card for the flow
───────────────────────────────────────────────────────────────── */
function FlowCard({
  icon: Icon,
  title,
  description,
  status,
  role,
  warning,
  accent = false,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  status: ChangeStatus;
  role: Role;
  warning?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 flex flex-col gap-2.5 h-full ${
        accent ? "border-teal-300 bg-teal-50/40 shadow-sm" : "border-gray-200 bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-teal-600/10 text-teal-700 p-1.5 shrink-0">
            <Icon className="size-4" />
          </div>
          <h3 className="text-[13.5px] font-bold text-gray-900 leading-tight">{title}</h3>
        </div>
        <StatusBadge status={status} />
      </div>
      <p className="text-[12.5px] text-gray-600 leading-snug">{description}</p>
      <div className="mt-auto pt-1">
        <RoleBadge role={role} />
      </div>
      {warning && (
        <div className="flex items-start gap-1.5 rounded-md bg-amber-50 border border-amber-200 px-2 py-1.5 text-[11.5px] text-amber-800">
          <HelpCircle className="size-3.5 shrink-0 mt-0.5" />
          <span>{warning}</span>
        </div>
      )}
    </div>
  );
}

function StageLabel({ n, title, sub }: { n: number; sub: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex items-center justify-center size-7 rounded-full bg-gray-900 text-white text-xs font-bold shrink-0">
        {n}
      </div>
      <div>
        <p className="text-[15px] font-bold text-gray-900 leading-tight">{title}</p>
        <p className="text-[12px] text-gray-500 leading-tight">{sub}</p>
      </div>
    </div>
  );
}

function DownConnector({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center py-2 text-gray-300">
      <div className="w-px h-5 bg-gray-300" />
      <ChevronDown className="size-4 -my-1" />
      {label && (
        <span className="text-[11px] font-medium text-gray-400 mt-0.5 bg-white px-1">
          {label}
        </span>
      )}
      <div className="w-px h-5 bg-gray-300" />
    </div>
  );
}

const CONTENTS = [
  { id: "overview", label: "Overview" },
  { id: "flow", label: "IA Flow" },
  { id: "cross-cutting", label: "Cross-Cutting Rules" },
  { id: "open-questions", label: "Open Questions" },
  { id: "backlog", label: "Wireframe Backlog" },
];

export function SuperAdminIAPage() {
  const [active, setActive] = useState("overview");

  function scrollTo(id: string) {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="flex min-h-screen bg-white" style={{ fontFamily: "Cabin, sans-serif" }}>
      {/* ── Sticky page nav ── */}
      <aside className="w-56 shrink-0 sticky top-0 self-start h-screen overflow-y-auto border-r border-gray-200 py-8 px-4 hidden lg:block">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">
          Contents
        </p>
        <nav className="flex flex-col gap-0.5">
          {CONTENTS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-left text-[13px] rounded-md px-2 py-1.5 transition-colors ${
                active === item.id
                  ? "bg-teal-50 text-teal-800 font-semibold"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <Separator className="my-5" />

        <div className="px-2 space-y-2 text-[11.5px] text-gray-500 leading-snug">
          <p>
            <span className="font-semibold text-gray-700">Epic</span> TP-1176
          </p>
          <p>
            <span className="font-semibold text-gray-700">Status</span> Draft
          </p>
          <p>
            <span className="font-semibold text-gray-700">Owner</span> Nick McEvily
          </p>
        </div>
      </aside>

      {/* ── Main content ── */}
      <main className="flex-1 max-w-5xl mx-auto px-6 lg:px-10 py-10">
        {/* Header */}
        <header id="overview" className="scroll-mt-8 mb-10">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="text-gray-500 border-gray-300">
              TP-1176
            </Badge>
            <Badge variant="outline" className="text-amber-700 border-amber-300 bg-amber-50">
              Draft — Pending Open Questions
            </Badge>
          </div>
          <h1 className="text-[28px] font-bold text-gray-900 tracking-tight mb-2">
            Super Admin Portal — Information Architecture
          </h1>
          <p className="text-[14.5px] text-gray-600 leading-relaxed max-w-3xl">
            A best-practice IA flow for the internal Admin Portal that lets Customer Success
            search, view, and act on organization and user accounts without an engineering
            ticket. This map exists to identify every screen and state that needs a wireframe
            before this FRD can move to Dev-Ready — it is not a final UI spec.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 text-[12.5px]">
            <div className="flex items-center gap-1.5">
              <Badge className="bg-teal-600 hover:bg-teal-600 text-white gap-1">
                <ShieldCheck className="size-3" /> Super Admin
              </Badge>
              <span className="text-gray-500">full access, incl. destructive actions</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Badge variant="outline" className="text-gray-600 border-gray-300 gap-1">
                <Eye className="size-3" /> Support Admin
              </Badge>
              <span className="text-gray-500">read-only, escalates to Super Admin</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 text-[12.5px] text-gray-500">
            <span className="flex items-center gap-1.5">
              <StatusBadge status="new" /> net-new surface
            </span>
            <span className="flex items-center gap-1.5">
              <StatusBadge status="reused" /> existing flow, new trigger
            </span>
            <span className="flex items-center gap-1.5">
              <StatusBadge status="modified" /> existing surface, new capability
            </span>
          </div>
        </header>

        {/* ── FLOW ── */}
        <section id="flow" className="scroll-mt-8 mb-14">
          <h2 className="text-[20px] font-bold text-gray-900 mb-1">Portal IA Flow</h2>
          <p className="text-[13px] text-gray-500 mb-8 max-w-2xl">
            Top to bottom: how a Support/Super Admin enters the portal, finds an account, and
            (if permitted) acts on it. Every destructive action writes to the immutable audit
            log regardless of role.
          </p>

          {/* Stage 0 — Access */}
          <StageLabel n={0} title="Access & Role Gate" sub="RBAC / auth/permissions.ts" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FlowCard
              icon={Lock}
              title="Auth Gate — Admin Portal Sign-in"
              description="Reuses better-auth session; resolves the signed-in staff member's global role before rendering anything else."
              status="reused"
              role="both"
            />
            <FlowCard
              icon={ShieldCheck}
              title="Permission Layer (server-side)"
              description="Two new global roles (Super Admin, Support Admin) added alongside existing org / member / consultant / newUser roles. Enforced server-side, not just hidden in UI."
              status="new"
              role="both"
            />
          </div>

          <DownConnector />

          {/* Stage 1 — Home / Search */}
          <StageLabel n={1} title="Portal Home" sub="Single entry point for both roles" />
          <div className="max-w-xl mx-auto">
            <FlowCard
              icon={Search}
              title="Global Search"
              description="Search by organization name or user email. Both entry points resolve to the same account drill-down view."
              status="new"
              role="both"
              accent
            />
          </div>

          <DownConnector label="results resolve to" />

          {/* Stage 2 — Drilldowns */}
          <StageLabel n={2} title="Account Drill-down Views" sub="Reachable from either search path, cross-linked to each other" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            <FlowCard
              icon={Building2}
              title="Organization Drill-down"
              description="Account name, user count, last login, and completion status for Program, Org Profile, and Application. Contains the Usage Report and the org's member list."
              status="new"
              role="both"
              accent
            />
            <FlowCard
              icon={UserCircle2}
              title="User Drill-down"
              description="A user's org membership(s), reachable from either the org's member list or a direct email search."
              status="new"
              role="both"
              accent
            />
          </div>
          <p className="text-center text-[11.5px] text-gray-400 mt-2 flex items-center justify-center gap-1">
            <ArrowRight className="size-3" /> cross-linked: org members list ⇄ user's org memberships
          </p>

          <DownConnector />

          {/* Stage 3 — sub-views within each drilldown */}
          <StageLabel n={3} title="Drill-down Sub-Views" sub="Tabs / sections within each drill-down screen" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-dashed border-gray-300 p-4">
              <p className="text-[12px] font-bold text-gray-700 mb-3 flex items-center gap-1.5">
                <Building2 className="size-3.5" /> Within Organization Drill-down
              </p>
              <ul className="space-y-2 text-[12.5px] text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 size-1 rounded-full bg-gray-400 shrink-0" />
                  Overview — name, user count, last login, Program / Profile / Application completion
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 size-1 rounded-full bg-gray-400 shrink-0" />
                  Usage Report — profile %, ≥1 Program exists, # grant searches, # drafted apps, # exports, # un-exported drafts
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 size-1 rounded-full bg-gray-400 shrink-0" />
                  Members — org's users, links out to User Drill-down
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 size-1 rounded-full bg-gray-400 shrink-0" />
                  Activity / Audit Log — every action taken on this org
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-dashed border-gray-300 p-4">
              <p className="text-[12px] font-bold text-gray-700 mb-3 flex items-center gap-1.5">
                <UserCircle2 className="size-3.5" /> Within User Drill-down
              </p>
              <ul className="space-y-2 text-[12.5px] text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 size-1 rounded-full bg-gray-400 shrink-0" />
                  Profile — name, email, org membership(s) and role per org
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 size-1 rounded-full bg-gray-400 shrink-0" />
                  Activity / Audit Log — every action taken on this user
                </li>
              </ul>
            </div>
          </div>

          <DownConnector label="Super Admin actions" />

          {/* Stage 4 — Actions */}
          <StageLabel n={4} title="Actions" sub="Triggered from drill-down screens — gated to Super Admin, blocked server-side for Support Admin" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FlowCard
              icon={KeyRound}
              title="Reset Password"
              description="Produces the same reset flow/experience a user gets by self-initiating it."
              status="reused"
              role="super"
            />
            <FlowCard
              icon={RotateCcw}
              title="Reset Free-tier Search Count"
              description="Immediately restores the org's search allotment; reflected in that org's live search counter."
              status="modified"
              role="super"
            />
            <FlowCard
              icon={UserPlus}
              title="Add User to Org"
              description="Adds a user as Admin or Consultant, producing the same membership state as a direct Org Admin invite."
              status="new"
              role="super"
            />
            <FlowCard
              icon={UserX}
              title="Disable User"
              description="Revokes an org's access for the user while preserving their historical activity (applications, searches) intact."
              status="new"
              role="super"
              warning="Data model open question: new membership status field, or permission-level revoke?"
            />
            <FlowCard
              icon={GitMerge}
              title="Combine Organizations"
              description="Merges two org records so a duplicate signup doesn't fragment grant and application history."
              status="new"
              role="super"
              warning="Mechanics pending Spike — merge behavior for Stripe billing & conflicts is undefined."
            />
            <FlowCard
              icon={Trash2}
              title="Delete Organization"
              description="Permanently removes the org's data from primary stores; produces a permanent, non-editable deletion record (hash + timestamp + acting admin)."
              status="new"
              role="super"
            />
          </div>

          <DownConnector />

          {/* Stage 5 — outcomes */}
          <StageLabel n={5} title="System Outcomes" sub="What every action above resolves to" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FlowCard
              icon={ListChecks}
              title="Confirmation / Result State"
              description="Success confirmation for non-destructive actions; typed / high-friction confirmation for destructive ones (Delete, Combine, Disable)."
              status="new"
              role="super"
            />
            <FlowCard
              icon={FileClock}
              title="Audit Log Entry (system-generated)"
              description="Immutable record of actor, action, and timestamp — feeds the Activity tab on both drill-down views."
              status="new"
              role="both"
            />
            <FlowCard
              icon={Lock}
              title="Permission-denied State"
              description="Support Admin attempting a restricted action is blocked server-side. Whether the control is hidden entirely or shown-but-disabled is a wireframe decision."
              status="new"
              role="support"
            />
          </div>

          {/* ghost node: open question about customer-facing notification */}
          <div className="flex flex-col items-center py-2 text-gray-300">
            <div className="w-px h-5 bg-gray-300 border-l border-dashed" />
            <span className="text-[11px] font-medium text-amber-600 my-1 bg-white px-1">
              open question ↓
            </span>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="rounded-xl border border-dashed border-amber-300 bg-amber-50/50 p-4 flex items-start gap-3">
              <HelpCircle className="size-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-[13px] font-bold text-amber-900">
                  Customer-facing notification (existing app) — undecided
                </p>
                <p className="text-[12px] text-amber-800 mt-0.5 leading-snug">
                  Should Org Admins be notified in the main Great Grants app when a Super Admin
                  resets a password, disables a user, or deletes the org — or does this stay
                  internal-only with just the audit log?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Cross-cutting rules ── */}
        <section id="cross-cutting" className="scroll-mt-8 mb-14">
          <h2 className="text-[20px] font-bold text-gray-900 mb-1">Cross-Cutting Rules</h2>
          <p className="text-[13px] text-gray-500 mb-6 max-w-2xl">
            Rules that apply across every screen above, not to any single one.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-[13px] font-bold text-gray-900 mb-1">
                Server-side permission enforcement
              </p>
              <p className="text-[12.5px] text-gray-600 leading-snug">
                Support Admin cannot execute Password Reset, Search Count Reset, Combine/Delete
                Organization, Add User, or Disable User. Attempts are blocked at the permission
                layer, not just hidden in the UI — the wireframes must show what a blocked
                attempt looks like.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-[13px] font-bold text-gray-900 mb-1">Full attribution</p>
              <p className="text-[12.5px] text-gray-600 leading-snug">
                Every destructive action is attributable in the audit log to the specific
                internal user who performed it — the Activity tab is a first-class surface, not
                an afterthought.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-[13px] font-bold text-gray-900 mb-1">
                Single drill-down, two entry points
              </p>
              <p className="text-[12.5px] text-gray-600 leading-snug">
                Org-name search and user-email search must land on the same underlying
                drill-down views — no duplicate or diverging screens per entry point.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-[13px] font-bold text-gray-900 mb-1">Reuse over rebuild</p>
              <p className="text-[12.5px] text-gray-600 leading-snug">
                Password Reset reuses the existing better-auth flow; only the trigger point is
                new. Don't design a parallel reset experience.
              </p>
            </div>
          </div>
        </section>

        {/* ── Open questions ── */}
        <section id="open-questions" className="scroll-mt-8 mb-14">
          <h2 className="text-[20px] font-bold text-gray-900 mb-1">
            Open Questions Blocking Dev-Ready
          </h2>
          <p className="text-[13px] text-gray-500 mb-6 max-w-2xl">
            These affect the IA above directly — wireframes for the flagged screens should be
            treated as provisional until resolved.
          </p>
          <div className="space-y-3">
            <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-4 flex items-start gap-3">
              <GitMerge className="size-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="text-[13px] font-bold text-gray-900">Combine Organizations mechanics</p>
                <p className="text-[12.5px] text-gray-600 leading-snug">
                  What happens to applications, programs, users, and Stripe billing history when
                  two orgs merge? How are conflicts resolved? — Owner: Nick + Matthew (Eng),
                  needs a Spike.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-4 flex items-start gap-3">
              <FileClock className="size-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="text-[13px] font-bold text-gray-900">Customer notification of admin actions</p>
                <p className="text-[12.5px] text-gray-600 leading-snug">
                  Should Org Admins/Members be notified of a password reset, user disable, or
                  org deletion — or does this stay internal-only? — Owner: Nick, security/trust
                  decision.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-4 flex items-start gap-3">
              <UserX className="size-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="text-[13px] font-bold text-gray-900">"Disable user" implementation</p>
                <p className="text-[12.5px] text-gray-600 leading-snug">
                  New account-status field on the membership record, or a permission-level
                  revoke that keeps the member row intact? — Owner: Matthew (Eng), resolvable
                  via Spike.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Wireframe backlog ── */}
        <section id="backlog" className="scroll-mt-8 mb-20">
          <h2 className="text-[20px] font-bold text-gray-900 mb-1">Wireframe Backlog</h2>
          <p className="text-[13px] text-gray-500 mb-6 max-w-2xl">
            Concrete screens and states to design in Figma, grouped by priority. The FRD scopes
            the first Figma Make pass to Global Search, Organization Drill-down, and User
            Drill-down — everything else here is the states within and around those three.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-[12px] font-bold text-teal-700 uppercase tracking-wide mb-3">
                P0 — needed to reach Dev-Ready
              </p>
              <ul className="space-y-2">
                {[
                  "Global Search (empty, results, no-results states)",
                  "Organization Drill-down — Overview tab",
                  "Organization Drill-down — Usage Report tab",
                  "Organization Drill-down — Members list",
                  "User Drill-down — Profile & memberships",
                  "Activity / Audit Log (org + user variants)",
                  "Reset Password — trigger + confirmation",
                  "Reset Search Count — trigger + confirmation",
                  "Add User to Org — modal (role picker: Admin / Consultant)",
                  "Permission-denied state for Support Admin",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12.5px] text-gray-700">
                    <span className="mt-1 size-3.5 rounded border border-gray-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-bold text-amber-700 uppercase tracking-wide mb-3">
                P1 — blocked on open questions
              </p>
              <ul className="space-y-2">
                {[
                  "Disable User — trigger + confirmation (pending data-model decision)",
                  "Combine Organizations — full merge flow (pending Spike)",
                  "Delete Organization — typed confirmation + deletion-record receipt",
                  "Customer-facing notification banner (pending decision to build at all)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12.5px] text-gray-700">
                    <span className="mt-1 size-3.5 rounded border border-gray-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
