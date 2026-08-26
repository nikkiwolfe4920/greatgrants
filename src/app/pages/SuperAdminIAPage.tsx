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
  X,
  Check,
  AlertTriangle,
  Circle,
  CircleDot,
  Bell,
  Filter,
  ChevronRight,
  ChevronLeft,
  MoreHorizontal,
  Download,
  Calendar,
  Info,
  ExternalLink,
  Mail,
  MessageSquareWarning,
  Layers,
  ArrowUpDown,
  Settings,
  LogOut,
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

/* ─────────────────────────────────────────────────────────────────
   Low-fi wireframe sketch primitives — grayscale boxes/lines/chips
   standing in for real UI, used only in the Wireframes section
───────────────────────────────────────────────────────────────── */
function WFBar({ w = "100%" }: { w?: string }) {
  return <div className="h-2 rounded-full bg-gray-200" style={{ width: w }} />;
}

function WFAvatar({ size = "size-6" }: { size?: string }) {
  return <div className={`${size} rounded-full bg-gray-200 border border-gray-300 shrink-0`} />;
}

function WFButtonSketch({
  label,
  tone = "default",
}: {
  label: string;
  tone?: "default" | "primary" | "danger";
}) {
  const tones: Record<string, string> = {
    default: "border-gray-300 text-gray-500",
    primary: "border-teal-400 text-teal-700 bg-teal-50",
    danger: "border-red-300 text-red-600 bg-red-50",
  };
  return (
    <span
      className={`inline-flex items-center justify-center rounded-md border px-2.5 py-1 text-[10px] font-semibold whitespace-nowrap ${tones[tone]}`}
    >
      {label}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────────
   WFTag — Focus Area chip, matches Figma node 13513:31375 (Grant
   Search / Geo Focus / Added) minus its remove (×) control, since
   search results and read-only summaries never let you remove a tag
   from here — only the org's own Profile settings can edit Focus Areas.
───────────────────────────────────────────────────────────────── */
function WFTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-teal-300 bg-white px-1.5 py-0.5 text-[9.5px] font-semibold text-teal-700 whitespace-nowrap">
      {label}
    </span>
  );
}

function WFInputSketch({
  placeholder,
  icon: Icon,
}: {
  placeholder: string;
  icon?: React.ElementType;
}) {
  return (
    <div className="flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-[10.5px] text-gray-400">
      {Icon && <Icon className="size-3 text-gray-400 shrink-0" />}
      {placeholder}
    </div>
  );
}

function WFRow({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-2 border-b border-gray-100 py-1.5 last:border-b-0">{children}</div>;
}

function WFFrame({
  title,
  chip,
  dashed = false,
  children,
}: {
  title: string;
  chip?: string;
  dashed?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-lg bg-white overflow-hidden border ${
        dashed ? "border-dashed border-gray-300" : "border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between gap-2 border-b border-gray-200 bg-gray-50 px-3 py-1.5">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="size-1.5 rounded-full bg-gray-300 shrink-0" />
          <span className="size-1.5 rounded-full bg-gray-300 shrink-0" />
          <span className="size-1.5 rounded-full bg-gray-300 shrink-0" />
          <span className="text-[10.5px] font-semibold text-gray-500 ml-1 truncate">{title}</span>
        </div>
        {chip && (
          <span className="text-[9px] font-bold uppercase tracking-wide text-gray-400 border border-gray-300 rounded px-1.5 py-0.5 shrink-0">
            {chip}
          </span>
        )}
      </div>
      <div className="p-3 space-y-2">{children}</div>
    </div>
  );
}

function WFPagination({ page = 1, total = 3 }: { page?: number; total?: number }) {
  return (
    <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-1">
      <span className="text-[10px] text-gray-400">Page {page} of {total}</span>
      <div className="flex items-center gap-1">
        <span className="flex items-center justify-center size-5 rounded border border-gray-200 text-gray-300">
          <ChevronLeft className="size-3" />
        </span>
        {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
          <span
            key={n}
            className={`flex items-center justify-center size-5 rounded text-[10px] font-semibold ${
              n === page ? "bg-teal-600 text-white" : "border border-gray-200 text-gray-400"
            }`}
          >
            {n}
          </span>
        ))}
        <span className="flex items-center justify-center size-5 rounded border border-gray-200 text-gray-300">
          <ChevronRight className="size-3" />
        </span>
      </div>
    </div>
  );
}

function WFCompletionRing({ pct, label }: { pct: number; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="relative size-9 rounded-full shrink-0"
        style={{
          background: `conic-gradient(#0d9488 ${pct * 3.6}deg, #e5e7eb 0deg)`,
        }}
      >
        <div className="absolute inset-[3px] rounded-full bg-white flex items-center justify-center text-[8.5px] font-bold text-gray-700">
          {pct}%
        </div>
      </div>
      <div className="min-w-0">
        <p className="text-[10.5px] font-semibold text-gray-700 leading-tight truncate">{label}</p>
        <p className="text-[9.5px] text-gray-400 leading-tight">complete</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   WFFieldCheck — one field-level completion row for the Org Profile /
   Program Info summaries, so "every field and if it's completed"
   reads as a checklist rather than just a rolled-up percentage.
───────────────────────────────────────────────────────────────── */
function WFFieldCheck({ label, complete }: { label: string; complete: boolean }) {
  return (
    <div className="flex items-center justify-between gap-2 py-1.5 border-b border-gray-50 last:border-b-0">
      <span className="text-[10.5px] text-gray-600">{label}</span>
      {complete ? (
        <span className="flex items-center gap-1 text-[9.5px] font-semibold text-teal-700 shrink-0">
          <Check className="size-3" /> Complete
        </span>
      ) : (
        <span className="flex items-center gap-1 text-[9.5px] font-semibold text-gray-400 shrink-0">
          <Circle className="size-2.5" /> Incomplete
        </span>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   WFMeterRow / WFMeterSection — scannable list of named items each
   with its own % complete + detail link (Programs, Applications).
   Fill color carries severity so the list scans at a glance.
───────────────────────────────────────────────────────────────── */
function WFMeterRow({ name, pct }: { name: string; pct: number }) {
  const tone = pct >= 80 ? "good" : pct >= 50 ? "warn" : "risk";
  const styles: Record<string, { fill: string; track: string; text: string }> = {
    good: { fill: "bg-teal-600", track: "bg-teal-100", text: "text-teal-700" },
    warn: { fill: "bg-amber-500", track: "bg-amber-100", text: "text-amber-700" },
    risk: { fill: "bg-red-500", track: "bg-red-100", text: "text-red-700" },
  };
  const s = styles[tone];

  return (
    <div className="flex items-center gap-2 py-1.5">
      <div className="flex-1 min-w-0">
        <p className="text-[10.5px] font-semibold text-gray-700 truncate mb-1">{name}</p>
        <div className={`h-1.5 rounded-full overflow-hidden ${s.track}`}>
          <div className={`h-full rounded-full ${s.fill}`} style={{ width: `${pct}%` }} />
        </div>
      </div>
      <span className={`text-[10.5px] font-bold tabular-nums w-9 text-right shrink-0 ${s.text}`}>
        {pct}%
      </span>
      <ChevronRight className="size-3.5 text-gray-300 shrink-0" />
    </div>
  );
}

function WFMeterSection({
  title,
  items,
}: {
  title: string;
  items: { name: string; pct: number }[];
}) {
  return (
    <div className="rounded-lg border border-gray-100 p-2.5">
      <p className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wide">
        {title} ({items.length})
      </p>
      <div className="divide-y divide-gray-50">
        {items.map((item) => (
          <WFMeterRow key={item.name} name={item.name} pct={item.pct} />
        ))}
      </div>
    </div>
  );
}

function WFToast({
  tone = "success",
  text,
}: {
  tone?: "success" | "error";
  text: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border px-3 py-2 shadow-sm text-[11px] font-medium ${
        tone === "success"
          ? "border-teal-200 bg-teal-50 text-teal-800"
          : "border-red-200 bg-red-50 text-red-700"
      }`}
    >
      {tone === "success" ? (
        <Check className="size-3.5 shrink-0" />
      ) : (
        <AlertTriangle className="size-3.5 shrink-0" />
      )}
      <span>{text}</span>
    </div>
  );
}

function WFCallout({
  children,
  tone = "info",
}: {
  children: React.ReactNode;
  tone?: "info" | "warning";
}) {
  return (
    <div
      className={`flex items-start gap-1.5 rounded-md border px-2 py-1.5 text-[10.5px] leading-snug ${
        tone === "info"
          ? "border-gray-200 bg-gray-50 text-gray-500"
          : "border-amber-200 bg-amber-50 text-amber-800"
      }`}
    >
      {tone === "info" ? (
        <Info className="size-3 shrink-0 mt-0.5" />
      ) : (
        <HelpCircle className="size-3 shrink-0 mt-0.5" />
      )}
      <span>{children}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   WFScreen — full app-shell chrome (top bar + side nav + breadcrumb)
   so each wireframe reads as a real page in context, not an island
───────────────────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { id: "search", label: "Global Search", icon: Search },
  { id: "orgs", label: "Organizations", icon: Building2 },
  { id: "users", label: "Users", icon: UserCircle2 },
  { id: "activity", label: "Activity Log", icon: FileClock },
] as const;

function WFScreen({
  activeNav,
  breadcrumb,
  role = "super",
  children,
}: {
  activeNav: (typeof NAV_ITEMS)[number]["id"];
  breadcrumb: string[];
  role?: "super" | "support";
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
      {/* window chrome */}
      <div className="flex items-center justify-between gap-2 border-b border-gray-200 bg-gray-50 px-3 py-1.5">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-gray-300 shrink-0" />
          <span className="size-1.5 rounded-full bg-gray-300 shrink-0" />
          <span className="size-1.5 rounded-full bg-gray-300 shrink-0" />
        </div>
        <span
          className={`text-[9px] font-bold uppercase tracking-wide rounded px-1.5 py-0.5 border ${
            role === "super"
              ? "text-teal-700 border-teal-300 bg-teal-50"
              : "text-gray-500 border-gray-300 bg-white"
          }`}
        >
          {role === "super" ? "Signed in as Super Admin" : "Signed in as Support Admin"}
        </span>
      </div>

      {/* top bar */}
      <div className="flex items-center justify-between gap-3 border-b border-gray-200 px-3 py-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="size-5 rounded bg-teal-600 shrink-0" />
          <span className="text-[11px] font-bold text-gray-800 truncate">Great Grants Admin Portal</span>
        </div>
        <div className="flex-1 max-w-[180px]">
          <WFInputSketch icon={Search} placeholder="Search orgs or users…" />
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Settings className="size-3.5 text-gray-300" />
          <WFAvatar />
        </div>
      </div>

      <div className="flex">
        {/* side nav */}
        <nav className="w-32 shrink-0 border-r border-gray-100 py-2 hidden sm:flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = item.id === activeNav;
            return (
              <div
                key={item.id}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-[10.5px] font-medium ${
                  active
                    ? "bg-teal-50 text-teal-800 border-r-2 border-teal-600 font-semibold"
                    : "text-gray-400"
                }`}
              >
                <Icon className="size-3 shrink-0" />
                <span className="truncate">{item.label}</span>
              </div>
            );
          })}
          <div className="mt-auto pt-3 px-3 flex items-center gap-1.5 text-[10px] text-gray-300">
            <LogOut className="size-3 shrink-0" />
            Sign out
          </div>
        </nav>

        {/* main content */}
        <div className="flex-1 min-w-0 p-3.5 space-y-3">
          <div className="flex items-center gap-1 text-[10px] text-gray-400 flex-wrap">
            {breadcrumb.map((crumb, i) => (
              <span key={crumb} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="size-2.5" />}
                <span className={i === breadcrumb.length - 1 ? "text-gray-600 font-semibold" : ""}>
                  {crumb}
                </span>
              </span>
            ))}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

function WFActionButton({
  icon: Icon,
  label,
  tone = "default",
  disabled = false,
}: {
  icon: React.ElementType;
  label: string;
  tone?: "default" | "primary" | "danger";
  disabled?: boolean;
}) {
  const tones: Record<string, string> = {
    default: "border-gray-300 text-gray-500",
    primary: "border-teal-400 text-teal-700 bg-teal-50",
    danger: "border-red-300 text-red-600 bg-red-50",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[10px] font-semibold whitespace-nowrap ${
        disabled ? "border-gray-200 text-gray-300 bg-gray-50" : tones[tone]
      }`}
    >
      <Icon className="size-3" />
      {label}
    </span>
  );
}

function WFTooltipBubble({ text }: { text: string }) {
  return (
    <div className="relative inline-block">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-gray-800 text-white text-[9.5px] px-2 py-1 whitespace-nowrap shadow-sm">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
      </div>
    </div>
  );
}

function WFVariantLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">
      {children}
    </p>
  );
}

function WireframeItem({
  title,
  priority,
  note,
  layout = "grid",
  description,
  children,
}: {
  title: string;
  priority: "P0" | "P1";
  note?: string;
  layout?: "grid" | "stack";
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-200 p-4">
      <div className="flex items-start justify-between gap-3 mb-1">
        <div className="flex items-center gap-2 min-w-0">
          <Badge
            variant="outline"
            className={
              priority === "P0"
                ? "text-teal-700 border-teal-300 bg-teal-50 shrink-0"
                : "text-amber-700 border-amber-300 bg-amber-50 shrink-0"
            }
          >
            {priority}
          </Badge>
          <h3 className="text-[13px] font-bold text-gray-900 leading-tight">{title}</h3>
        </div>
      </div>
      {description && (
        <p className="text-[12px] text-gray-500 leading-snug mb-3 max-w-2xl">{description}</p>
      )}
      {!description && <div className="mb-3" />}
      <div
        className={
          layout === "stack"
            ? "flex flex-col gap-4"
            : "grid grid-cols-1 sm:grid-cols-2 gap-3"
        }
      >
        {children}
      </div>
      {note && (
        <div className="flex items-start gap-1.5 rounded-md bg-amber-50 border border-amber-200 px-2 py-1.5 text-[11.5px] text-amber-800 mt-3">
          <HelpCircle className="size-3.5 shrink-0 mt-0.5" />
          <span>{note}</span>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Newest Updates — Aug 26 round: Global Organization Search results
   (Figma node 11994:11265) plus the Organization record drill-down it
   opens into. Search rows gain Focus Area tags (styled per the tag
   reference at Figma node 13513:31375, minus its remove control — see
   WFTag above) and an exact last-login timestamp in place of the
   relative "2h ago" used on the original P0 wireframe further up this
   page. The drill-down itself is genuinely tabbed (useState, not a
   static sketch) since there are seven distinct sections to page
   through: All Users, Search Count, Org Profile, Program Info,
   Applications, Focus Areas, Activity.
───────────────────────────────────────────────────────────────── */
const NEWEST_SEARCH_RESULTS = [
  {
    name: "Acme Nonprofit",
    members: 14,
    lastLogin: "Aug 24, 2026, 3:12pm",
    focusAreas: ["Early Childhood Education", "K-12 Education", "Public Health"],
  },
  {
    name: "Acme Housing Coalition",
    members: 6,
    lastLogin: "Aug 23, 2026, 9:05am",
    focusAreas: ["Homeless Services", "Rental Assistance"],
  },
  {
    name: "Acme Youth Services",
    members: 2,
    lastLogin: "Jul 16, 2026, 8:47am",
    focusAreas: ["After-School Programs", "Youth Intervention"],
  },
];

function NewestUpdatesAllUsersTab() {
  const members = [
    { name: "Jordan Casey", email: "jordan@acmenonprofit.org", role: "Admin", login: "2h ago" },
    { name: "Sam Patel", email: "sam@acmenonprofit.org", role: "Admin", login: "1d ago" },
    { name: "Alex Rivera", email: "alex@acmenonprofit.org", role: "Consultant", login: "41d ago" },
  ];
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wide">
        All users ({members.length + 11})
      </p>
      <div className="rounded-lg border border-gray-100 overflow-hidden">
        <div className="flex items-center gap-2 bg-gray-50 px-2.5 py-1.5 text-[9.5px] font-bold text-gray-400 uppercase tracking-wide">
          <span className="flex-1">Member</span>
          <span className="w-20 shrink-0">Role</span>
          <span className="w-16 shrink-0">Last login</span>
          <span className="w-20 shrink-0 text-right">Action</span>
        </div>
        {members.map((m) => (
          <div key={m.email} className="flex items-center gap-2 px-2.5 py-2 border-t border-gray-100">
            <WFAvatar />
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-gray-700 truncate">{m.name}</p>
              <p className="text-[10px] text-gray-400 truncate">{m.email}</p>
            </div>
            <span className="w-20 shrink-0 text-[9.5px] font-semibold uppercase text-gray-400 border border-gray-300 rounded px-1.5 py-0.5 text-center">
              {m.role}
            </span>
            <span className="w-16 shrink-0 text-[10px] text-gray-400">{m.login}</span>
            <span className="w-20 shrink-0 text-[10px] text-teal-700 font-semibold text-right">
              Change role
            </span>
          </div>
        ))}
      </div>
      <div>
        <WFVariantLabel>Change role — confirmation modal</WFVariantLabel>
        <WFFrame title="Change Jordan Casey's role" dashed>
          <p className="text-[10.5px] text-gray-600 leading-snug">
            Change <strong>Jordan Casey</strong>'s role in Acme Nonprofit from <strong>Admin</strong> to{" "}
            <strong>Consultant</strong>? This changes what they can see and do in the org immediately.
          </p>
          <div className="flex gap-2 pt-1">
            <div className="flex-1 rounded-md border border-gray-300 p-2 flex items-center gap-1.5">
              <Circle className="size-3.5 text-gray-400 shrink-0" />
              <span className="text-[10.5px] font-semibold text-gray-500">Admin</span>
            </div>
            <div className="flex-1 rounded-md border border-teal-400 bg-teal-50 p-2 flex items-center gap-1.5">
              <CircleDot className="size-3.5 text-teal-600 shrink-0" />
              <span className="text-[10.5px] font-semibold text-teal-700">Consultant</span>
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <WFButtonSketch label="Cancel" />
            <WFButtonSketch label="Confirm role change" tone="primary" />
          </div>
        </WFFrame>
      </div>
    </div>
  );
}

function NewestUpdatesSearchCountTab() {
  return (
    <div className="flex flex-col gap-3">
      <WFFrame title="Grant search allotment">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px] text-gray-500">
            <span>Grant searches this cycle</span>
            <span className="font-semibold">18 / 25</span>
          </div>
          <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full bg-teal-500" style={{ width: "72%" }} />
          </div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <p className="text-[10px] text-gray-400 max-w-[220px] leading-snug">
            Last reset Jul 16, 2026, 10:42am · by Nikki W.
          </p>
          <WFButtonSketch label="Reset count" tone="primary" />
        </div>
      </WFFrame>
      <WFFrame title="Reset history">
        {[
          ["Jul 16, 2026, 10:42am", "Nikki W."],
          ["May 2, 2026, 9:03am", "Nikki W."],
        ].map(([ts, actor]) => (
          <WFRow key={ts}>
            <div className="w-32 shrink-0 text-[10px] text-gray-400">{ts}</div>
            <div className="flex-1 text-[10.5px] text-gray-600">Reset search count</div>
            <div className="text-[10px] text-gray-400">by {actor}</div>
          </WFRow>
        ))}
      </WFFrame>
    </div>
  );
}

const ORG_PROFILE_FIELDS = [
  { label: "Organization Name", complete: true },
  { label: "Organization Address", complete: true },
  { label: "EIN Number", complete: true },
  { label: "UEI Number", complete: false },
  { label: "Organization Website", complete: true },
  { label: "Annual Budget", complete: true },
  { label: "Mission Statement", complete: true },
  { label: "Vision Statement", complete: false },
  { label: "Add 2 or More Focus Areas", complete: true },
  { label: "Financial Readiness Questions", complete: true },
  { label: "Policies & Compliance Questions", complete: false },
];

function NewestUpdatesOrgProfileTab() {
  const done = ORG_PROFILE_FIELDS.filter((f) => f.complete).length;
  const pct = Math.round((done / ORG_PROFILE_FIELDS.length) * 100);
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wide">
        Organization Profile — Summary
      </p>
      <div className="rounded-lg border border-gray-100 p-2.5 flex items-center justify-between gap-2">
        <WFCompletionRing pct={pct} label="Organization Profile" />
        <span className="text-[10px] text-gray-400">
          {done} of {ORG_PROFILE_FIELDS.length} fields complete
        </span>
      </div>
      <div className="rounded-lg border border-gray-100 px-2.5">
        {ORG_PROFILE_FIELDS.map((f) => (
          <WFFieldCheck key={f.label} label={f.label} complete={f.complete} />
        ))}
      </div>
    </div>
  );
}

const PROGRAM_FIELDS = [
  { label: "Program Title", complete: true },
  { label: "Program Description", complete: true },
  { label: "Geographic Focus", complete: true },
  { label: "People Served", complete: true },
  { label: "Program Duration", complete: false },
  { label: "Estimated Total Budget", complete: false },
  { label: "Partnerships", complete: true },
  { label: "Primary Point of Contact", complete: false },
];

function NewestUpdatesProgramInfoTab() {
  const done = PROGRAM_FIELDS.filter((f) => f.complete).length;
  const pct = Math.round((done / PROGRAM_FIELDS.length) * 100);
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wide">
        Program Info (3)
      </p>
      <div className="rounded-lg border border-gray-100 p-2.5">
        <div className="flex items-center justify-between gap-2 mb-1">
          <WFCompletionRing pct={pct} label="Youth Mentorship Initiative" />
          <span className="text-[10px] text-gray-400">
            {done} of {PROGRAM_FIELDS.length} fields complete
          </span>
        </div>
        <div className="px-0.5">
          {PROGRAM_FIELDS.map((f) => (
            <WFFieldCheck key={f.label} label={f.label} complete={f.complete} />
          ))}
        </div>
      </div>
      <WFMeterSection
        title="Other programs"
        items={[
          { name: "Community Health Outreach", pct: 65 },
          { name: "Housing Stability Fund", pct: 30 },
        ]}
      />
    </div>
  );
}

const NEWEST_APPLICATIONS = [
  {
    grant: "City Community Development Grant",
    status: "In Review",
    pct: 90,
    started: "Jun 2, 2026",
    updated: "Aug 20, 2026 · Jordan Casey",
    deadline: "Sep 5, 2026",
  },
  {
    grant: "Kresge Foundation FY25 Renewal",
    status: "Draft",
    pct: 45,
    started: "Jul 11, 2026",
    updated: "Aug 18, 2026 · Sam Patel",
    deadline: "Oct 1, 2026",
  },
];

function NewestUpdatesApplicationsTab() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wide">
        Applications ({NEWEST_APPLICATIONS.length})
      </p>
      <div className="rounded-lg border border-gray-100 overflow-hidden">
        <div className="flex items-center gap-2 bg-gray-50 px-2.5 py-1.5 text-[9.5px] font-bold text-gray-400 uppercase tracking-wide">
          <span className="flex-1">Grant</span>
          <span className="w-16 shrink-0">Status</span>
          <span className="w-8 shrink-0 text-right">%</span>
          <span className="w-16 shrink-0">Started</span>
          <span className="w-40 shrink-0">Last updated · person</span>
          <span className="w-16 shrink-0">Deadline</span>
        </div>
        {NEWEST_APPLICATIONS.map((a) => (
          <div key={a.grant} className="flex items-center gap-2 px-2.5 py-2 border-t border-gray-100">
            <span className="flex-1 text-[10.5px] font-semibold text-gray-700 truncate">{a.grant}</span>
            <span className="w-16 shrink-0 text-[9px] font-semibold uppercase text-teal-700 bg-teal-50 border border-teal-200 rounded px-1.5 py-0.5 text-center">
              {a.status}
            </span>
            <span className="w-8 shrink-0 text-[10px] font-bold text-gray-600 text-right">{a.pct}%</span>
            <span className="w-16 shrink-0 text-[10px] text-gray-400">{a.started}</span>
            <span className="w-40 shrink-0 text-[10px] text-gray-400 truncate">{a.updated}</span>
            <span className="w-16 shrink-0 text-[10px] text-gray-400">{a.deadline}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const ORG_FOCUS_AREAS: Record<string, string[]> = {
  Education: ["Early Childhood Education", "K-12 Education", "After-School Programs"],
  "Health & Human Services": ["Public Health"],
  "Public Safety & Justice": ["Youth Intervention"],
};

function NewestUpdatesFocusAreasTab() {
  const total = Object.values(ORG_FOCUS_AREAS).flat().length;
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wide">
        Focus areas ({total} of 10 selected)
      </p>
      <div className="flex flex-col gap-2">
        {Object.entries(ORG_FOCUS_AREAS).map(([parent, leaves]) => (
          <div key={parent} className="flex flex-wrap items-start gap-1.5">
            <span className="text-[10px] font-medium text-gray-500 mt-0.5 shrink-0">{parent}:</span>
            <div className="flex flex-wrap gap-1.5">
              {leaves.map((leaf) => (
                <WFTag key={leaf} label={leaf} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <WFCallout>
        Read-only here — Focus Areas are edited by the org itself from their Profile settings, not
        from the Admin Portal.
      </WFCallout>
    </div>
  );
}

function NewestUpdatesActivityTab() {
  const entries = [
    { ts: "Aug 24, 2026, 3:12pm", action: "Changed Jordan Casey's role", detail: "Admin → Consultant", actor: "Nikki W." },
    { ts: "Jul 16, 2026, 10:42am", action: "Reset search count", detail: "0 / 25", actor: "Nikki W." },
    { ts: "Jul 13, 2026, 3:05pm", action: "Added user", detail: "jordan@acmenonprofit.org", actor: "Nikki W." },
  ];
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wide">Activity</p>
      <div className="rounded-lg border border-gray-100 overflow-hidden">
        {entries.map((r, i) => (
          <div key={i} className="flex items-center gap-2 px-2.5 py-2 border-t border-gray-100 first:border-t-0">
            <span className="w-28 shrink-0 text-[9.5px] text-gray-400">{r.ts}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[10.5px] font-semibold text-gray-700 truncate">
                {r.action} <span className="font-normal text-gray-400">— {r.detail}</span>
              </p>
              <p className="text-[9.5px] text-gray-400">by {r.actor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const NEWEST_ORG_DETAIL_TABS = [
  "All Users",
  "Search Count",
  "Org Profile",
  "Program Info",
  "Applications",
  "Focus Areas",
  "Activity",
] as const;

/**
 * The record view a search result opens into. Genuinely tabbed (not a
 * static sketch) — with seven sections to cover, a scrolling single page
 * would bury Program Info and Activity below the fold.
 */
function NewestUpdatesOrgDetailWF() {
  const [tab, setTab] = useState<(typeof NEWEST_ORG_DETAIL_TABS)[number]>("All Users");
  return (
    <WFScreen activeNav="orgs" breadcrumb={["Admin Portal", "Organizations", "Acme Nonprofit"]}>
      <div className="flex items-center gap-2.5">
        <WFAvatar size="size-10" />
        <div>
          <p className="text-[13px] font-bold text-gray-800">Acme Nonprofit</p>
          <p className="text-[10px] text-gray-400">14 members · last login Aug 24, 2026, 3:12pm</p>
        </div>
      </div>
      <div className="flex gap-3 text-[10.5px] font-semibold border-b border-gray-100 pt-2 flex-wrap">
        {NEWEST_ORG_DETAIL_TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`pb-1.5 whitespace-nowrap transition-colors ${
              tab === t ? "text-teal-700 border-b-2 border-teal-600" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="pt-3 w-full">
        {tab === "All Users" && <NewestUpdatesAllUsersTab />}
        {tab === "Search Count" && <NewestUpdatesSearchCountTab />}
        {tab === "Org Profile" && <NewestUpdatesOrgProfileTab />}
        {tab === "Program Info" && <NewestUpdatesProgramInfoTab />}
        {tab === "Applications" && <NewestUpdatesApplicationsTab />}
        {tab === "Focus Areas" && <NewestUpdatesFocusAreasTab />}
        {tab === "Activity" && <NewestUpdatesActivityTab />}
      </div>
    </WFScreen>
  );
}

const CONTENTS = [
  { id: "overview", label: "Overview" },
  { id: "flow", label: "IA Flow" },
  { id: "cross-cutting", label: "Cross-Cutting Rules" },
  { id: "open-questions", label: "Open Questions" },
  { id: "backlog", label: "Wireframe Backlog" },
  { id: "wireframes", label: "Wireframes" },
  { id: "newest-updates", label: "Newest Updates" },
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

        {/* ── Wireframes ── */}
        <section id="wireframes" className="scroll-mt-8 mb-20">
          <h2 className="text-[20px] font-bold text-gray-900 mb-1">Wireframes</h2>
          <p className="text-[13px] text-gray-500 mb-6 max-w-2xl">
            Full-screen, state-by-state sketches for every item in the backlog above, shown in the
            context of the portal's actual chrome (top bar, left nav, breadcrumb) so layout,
            hierarchy, and edge cases read the way they will in the real product. Structure and
            content only, not a final visual design.
          </p>

          <p className="text-[12px] font-bold text-teal-700 uppercase tracking-wide mb-3">
            P0 — needed to reach Dev-Ready
          </p>
          <div className="flex flex-col gap-6 mb-12">
            <WireframeItem
              title="Global Search — empty, results, no-results"
              priority="P0"
              layout="stack"
              description="Single search entry point for both roles. Typing resolves against organizations and users at once; a type filter narrows results without a separate search mode."
            >
              <div>
                <WFVariantLabel>Empty state</WFVariantLabel>
                <WFScreen activeNav="search" breadcrumb={["Admin Portal", "Global Search"]}>
                  <div className="max-w-sm mx-auto py-4 space-y-3">
                    <WFInputSketch icon={Search} placeholder="Search by org name or email…" />
                    <p className="text-[10.5px] text-gray-400 leading-snug">
                      Start typing to search organizations or users. Results update as you type.
                    </p>
                    <div>
                      <p className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">
                        Recent searches
                      </p>
                      {["Acme Nonprofit", "jordan@acmenonprofit.org"].map((s) => (
                        <div key={s} className="flex items-center gap-1.5 py-1 text-[10.5px] text-gray-500">
                          <Search className="size-3 text-gray-300 shrink-0" />
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </WFScreen>
              </div>

              <div>
                <WFVariantLabel>Results — mixed orgs &amp; users, filterable</WFVariantLabel>
                <WFScreen activeNav="search" breadcrumb={["Admin Portal", "Global Search"]}>
                  <WFInputSketch icon={Search} placeholder="acme" />
                  <div className="flex gap-1.5 pt-1">
                    <WFActionButton icon={Filter} label="All (5)" tone="primary" />
                    <WFActionButton icon={Building2} label="Organizations (3)" />
                    <WFActionButton icon={UserCircle2} label="Users (2)" />
                  </div>
                  <div className="divide-y divide-gray-100 border-y border-gray-100">
                    {[
                      { icon: Building2, name: "Acme Nonprofit", sub: "14 members · last login 2h ago", tag: "Org" },
                      { icon: Building2, name: "Acme Housing Coalition", sub: "6 members · last login 3d ago", tag: "Org" },
                      { icon: UserCircle2, name: "Jordan Casey — jordan@acmenonprofit.org", sub: "Admin @ Acme Nonprofit", tag: "User" },
                      { icon: Building2, name: "Acme Youth Services", sub: "2 members · last login 41d ago", tag: "Org" },
                      { icon: UserCircle2, name: "Alex Rivera — alex@acmehousing.org", sub: "Consultant @ Acme Housing Coalition", tag: "User" },
                    ].map((r) => (
                      <div key={r.name} className="flex items-center gap-2 py-2">
                        <r.icon className="size-3.5 text-gray-300 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-semibold text-gray-700 truncate">{r.name}</p>
                          <p className="text-[10px] text-gray-400 truncate">{r.sub}</p>
                        </div>
                        <span className="text-[9px] font-bold uppercase text-gray-400 border border-gray-200 rounded px-1.5 py-0.5 shrink-0">
                          {r.tag}
                        </span>
                        <ChevronRight className="size-3.5 text-gray-300 shrink-0" />
                      </div>
                    ))}
                  </div>
                  <WFPagination page={1} total={2} />
                </WFScreen>
              </div>

              <div>
                <WFVariantLabel>No results</WFVariantLabel>
                <WFScreen activeNav="search" breadcrumb={["Admin Portal", "Global Search"]}>
                  <WFInputSketch icon={Search} placeholder="zzzcorp" />
                  <div className="flex flex-col items-center text-center gap-2 py-6">
                    <Search className="size-5 text-gray-300" />
                    <p className="text-[11px] font-semibold text-gray-500">No matches for "zzzcorp"</p>
                    <p className="text-[10px] text-gray-400 max-w-[220px]">
                      Check the spelling, or search by the account owner's email instead.
                    </p>
                    <WFButtonSketch label="Clear search" />
                  </div>
                </WFScreen>
              </div>
            </WireframeItem>

            <WireframeItem
              title="Organization Drill-down — Overview tab"
              priority="P0"
              layout="stack"
              description="Landing tab when an org is opened from either search path. Surfaces identity, completion signals, and the actions Support Success needs most, with Super-Admin-only actions visibly separated in a Danger Zone."
            >
              <WFScreen activeNav="orgs" breadcrumb={["Admin Portal", "Organizations", "Acme Nonprofit"]}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <WFAvatar size="size-10" />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-[13px] font-bold text-gray-800">Acme Nonprofit</p>
                        <span className="text-[9px] font-bold uppercase text-teal-700 bg-teal-50 border border-teal-200 rounded px-1.5 py-0.5">
                          Active
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-400">
                        14 members · created Feb 2024 · last login 2h ago
                      </p>
                    </div>
                  </div>
                  <MoreHorizontal className="size-4 text-gray-300 shrink-0" />
                </div>

                <div className="flex gap-1.5 pt-2">
                  <WFActionButton icon={KeyRound} label="Reset password" />
                  <WFActionButton icon={RotateCcw} label="Reset search count" />
                  <WFActionButton icon={UserPlus} label="Add user" tone="primary" />
                </div>

                <div className="flex gap-3 text-[10.5px] font-semibold border-b border-gray-100 pt-2">
                  <span className="text-teal-700 border-b-2 border-teal-600 pb-1.5">Overview</span>
                  <span className="text-gray-400 pb-1.5">Usage Report</span>
                  <span className="text-gray-400 pb-1.5">Members (14)</span>
                  <span className="text-gray-400 pb-1.5">Activity</span>
                </div>

                <div className="rounded-lg border border-gray-100 p-2.5 flex items-center justify-between gap-2 mt-1">
                  <WFCompletionRing pct={80} label="Org Profile" />
                  <span className="text-[10px] text-teal-700 font-semibold flex items-center gap-0.5 shrink-0">
                    View profile <ChevronRight className="size-3" />
                  </span>
                </div>

                <WFMeterSection
                  title="Programs"
                  items={[
                    { name: "Youth Mentorship Initiative", pct: 100 },
                    { name: "Community Health Outreach", pct: 65 },
                    { name: "Housing Stability Fund", pct: 30 },
                  ]}
                />

                <WFMeterSection
                  title="Applications"
                  items={[
                    { name: "City Community Development Grant", pct: 90 },
                    { name: "Kresge Foundation FY25 Renewal", pct: 45 },
                  ]}
                />

                <div className="rounded-lg border border-gray-100 p-2.5">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wide">
                      Recent activity
                    </p>
                    <span className="text-[10px] text-teal-700 font-semibold flex items-center gap-0.5">
                      View all <ChevronRight className="size-3" />
                    </span>
                  </div>
                  {["Reset search count · by Nikki W. · 2h ago", "Added user jordan@acmenonprofit.org · by Nikki W. · 3d ago"].map((r) => (
                    <div key={r} className="flex items-center gap-1.5 py-1 text-[10px] text-gray-500">
                      <span className="size-1 rounded-full bg-gray-300 shrink-0" />
                      {r}
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-red-200 bg-red-50/40 p-2.5">
                  <p className="text-[9.5px] font-bold text-red-700 uppercase tracking-wide mb-1.5">
                    Danger zone — Super Admin only
                  </p>
                  <div className="flex gap-1.5">
                    <WFActionButton icon={Layers} label="Combine organizations" tone="danger" />
                    <WFActionButton icon={Trash2} label="Delete organization" tone="danger" />
                  </div>
                </div>
              </WFScreen>
            </WireframeItem>

            <WireframeItem
              title="Organization Drill-down — Usage Report tab"
              priority="P0"
              layout="stack"
              description="The engagement signals Customer Success uses to spot orgs that are stuck or at risk of churn, with an export for QBRs."
            >
              <WFScreen activeNav="orgs" breadcrumb={["Admin Portal", "Organizations", "Acme Nonprofit"]}>
                <div className="flex gap-3 text-[10.5px] font-semibold border-b border-gray-100">
                  <span className="text-gray-400 pb-1.5">Overview</span>
                  <span className="text-teal-700 border-b-2 border-teal-600 pb-1.5">Usage Report</span>
                  <span className="text-gray-400 pb-1.5">Members (14)</span>
                  <span className="text-gray-400 pb-1.5">Activity</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <WFActionButton icon={Calendar} label="Last 90 days" />
                  <WFActionButton icon={Download} label="Export CSV" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { label: "Profile completion", value: "80%" },
                    { label: "≥1 Program exists", value: "Yes" },
                    { label: "Grant searches", value: "37" },
                    { label: "Drafted applications", value: "6" },
                    { label: "Exports", value: "4" },
                    { label: "Un-exported drafts", value: "2", flag: true },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className={`rounded-lg border p-2.5 space-y-1 ${
                        m.flag ? "border-amber-300 bg-amber-50/50" : "border-gray-200"
                      }`}
                    >
                      <p className="text-[9.5px] text-gray-400 leading-tight">{m.label}</p>
                      <p className={`text-[15px] font-bold leading-tight ${m.flag ? "text-amber-700" : "text-gray-800"}`}>
                        {m.value}
                      </p>
                      <div className="flex items-end gap-0.5 h-4">
                        {[3, 5, 4, 6, 5, 7, 6].map((h, i) => (
                          <div key={i} className="w-1 bg-gray-200 rounded-sm" style={{ height: `${h * 2}px` }} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <WFCallout>
                  2 un-exported drafts is flagged because it may indicate the org is stuck before
                  submission — a candidate signal for proactive outreach.
                </WFCallout>
              </WFScreen>
            </WireframeItem>

            <WireframeItem
              title="Organization Drill-down — Members list"
              priority="P0"
              layout="stack"
              description="The org's roster, and the entry point into Add User and (via row action) Disable User. Cross-links out to each member's User Drill-down."
            >
              <WFScreen activeNav="orgs" breadcrumb={["Admin Portal", "Organizations", "Acme Nonprofit"]}>
                <div className="flex gap-3 text-[10.5px] font-semibold border-b border-gray-100">
                  <span className="text-gray-400 pb-1.5">Overview</span>
                  <span className="text-gray-400 pb-1.5">Usage Report</span>
                  <span className="text-teal-700 border-b-2 border-teal-600 pb-1.5">Members (14)</span>
                  <span className="text-gray-400 pb-1.5">Activity</span>
                </div>
                <div className="flex items-center justify-between gap-2 pt-1">
                  <div className="flex-1 max-w-[160px]">
                    <WFInputSketch icon={Search} placeholder="Filter members…" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <WFActionButton icon={Filter} label="All roles" />
                    <WFActionButton icon={UserPlus} label="Add user" tone="primary" />
                  </div>
                </div>
                <div className="rounded-lg border border-gray-100 overflow-hidden">
                  <div className="flex items-center gap-2 bg-gray-50 px-2.5 py-1.5 text-[9.5px] font-bold text-gray-400 uppercase tracking-wide">
                    <span className="flex-1">Member</span>
                    <span className="w-20 shrink-0">Role</span>
                    <span className="w-14 shrink-0">Status</span>
                    <span className="w-16 shrink-0">Last login</span>
                    <span className="w-4 shrink-0" />
                  </div>
                  {[
                    { name: "Jordan Casey", email: "jordan@acmenonprofit.org", role: "Admin", status: "Active", login: "2h ago" },
                    { name: "Sam Patel", email: "sam@acmenonprofit.org", role: "Admin", status: "Active", login: "1d ago" },
                    { name: "Alex Rivera", email: "alex@acmenonprofit.org", role: "Consultant", status: "Disabled", login: "41d ago" },
                  ].map((m) => (
                    <div key={m.email} className="flex items-center gap-2 px-2.5 py-2 border-t border-gray-100">
                      <WFAvatar />
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold text-gray-700 truncate">{m.name}</p>
                        <p className="text-[10px] text-gray-400 truncate">{m.email}</p>
                      </div>
                      <span className="w-20 shrink-0 text-[9.5px] font-semibold uppercase text-gray-400 border border-gray-300 rounded px-1.5 py-0.5 text-center">
                        {m.role}
                      </span>
                      <span
                        className={`w-14 shrink-0 text-[9.5px] font-semibold uppercase rounded px-1.5 py-0.5 text-center ${
                          m.status === "Active"
                            ? "text-teal-700 bg-teal-50 border border-teal-200"
                            : "text-gray-400 bg-gray-50 border border-gray-200"
                        }`}
                      >
                        {m.status}
                      </span>
                      <span className="w-16 shrink-0 text-[10px] text-gray-400">{m.login}</span>
                      <MoreHorizontal className="size-3.5 text-gray-300 shrink-0" />
                    </div>
                  ))}
                </div>
                <WFPagination page={1} total={5} />
              </WFScreen>

              <div>
                <WFVariantLabel>Empty state — no members yet</WFVariantLabel>
                <WFScreen activeNav="orgs" breadcrumb={["Admin Portal", "Organizations", "New Org Inc."]}>
                  <div className="flex gap-3 text-[10.5px] font-semibold border-b border-gray-100">
                    <span className="text-gray-400 pb-1.5">Overview</span>
                    <span className="text-gray-400 pb-1.5">Usage Report</span>
                    <span className="text-teal-700 border-b-2 border-teal-600 pb-1.5">Members (0)</span>
                    <span className="text-gray-400 pb-1.5">Activity</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2 py-6">
                    <UserCircle2 className="size-5 text-gray-300" />
                    <p className="text-[11px] font-semibold text-gray-500">No members on this org yet</p>
                    <WFButtonSketch label="+ Add user" tone="primary" />
                  </div>
                </WFScreen>
              </div>
            </WireframeItem>

            <WireframeItem
              title="User Drill-down — Profile & memberships"
              priority="P0"
              layout="stack"
              description="Reachable from a member row or a direct email search. One user can belong to multiple orgs with a different role in each."
            >
              <WFScreen activeNav="users" breadcrumb={["Admin Portal", "Users", "Jordan Casey"]}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <WFAvatar size="size-10" />
                    <div>
                      <p className="text-[13px] font-bold text-gray-800">Jordan Casey</p>
                      <p className="text-[10px] text-gray-400">
                        jordan@acmenonprofit.org · member since Feb 2024 · last login 2h ago
                      </p>
                    </div>
                  </div>
                  <WFActionButton icon={KeyRound} label="Reset password" />
                </div>

                <div className="flex gap-3 text-[10.5px] font-semibold border-b border-gray-100 pt-2">
                  <span className="text-teal-700 border-b-2 border-teal-600 pb-1.5">Profile</span>
                  <span className="text-gray-400 pb-1.5">Activity</span>
                </div>

                <p className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wide pt-1">
                  Org memberships (2)
                </p>
                <div className="rounded-lg border border-gray-100 overflow-hidden">
                  {[
                    { org: "Acme Nonprofit", role: "Admin", joined: "Feb 2024" },
                    { org: "Bright Futures Fund", role: "Consultant", joined: "May 2025" },
                  ].map((m) => (
                    <div key={m.org} className="flex items-center gap-2 px-2.5 py-2 border-t border-gray-100 first:border-t-0">
                      <Building2 className="size-3.5 text-gray-300 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold text-gray-700 truncate">{m.org}</p>
                        <p className="text-[10px] text-gray-400">joined {m.joined}</p>
                      </div>
                      <span className="text-[9.5px] font-semibold uppercase text-gray-400 border border-gray-300 rounded px-1.5 py-0.5 shrink-0">
                        {m.role}
                      </span>
                      <span className="text-[10px] text-teal-700 font-semibold shrink-0 flex items-center gap-0.5">
                        View <ChevronRight className="size-3" />
                      </span>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-red-200 bg-red-50/40 p-2.5">
                  <p className="text-[9.5px] font-bold text-red-700 uppercase tracking-wide mb-1.5">
                    Danger zone — Super Admin only
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[10px] text-gray-500 max-w-[240px]">
                      Disables this user within Acme Nonprofit only — their Bright Futures Fund
                      membership is unaffected.
                    </p>
                    <WFActionButton icon={UserX} label="Disable in Acme Nonprofit" tone="danger" />
                  </div>
                </div>
              </WFScreen>
            </WireframeItem>

            <WireframeItem
              title="Activity / Audit Log — org and user variants"
              priority="P0"
              layout="stack"
              description="Immutable, filterable record of every action taken against an org or user, regardless of who performed it — the primary surface for the full-attribution rule."
            >
              <div>
                <WFVariantLabel>Org Activity Log</WFVariantLabel>
                <WFScreen activeNav="orgs" breadcrumb={["Admin Portal", "Organizations", "Acme Nonprofit"]}>
                  <div className="flex gap-3 text-[10.5px] font-semibold border-b border-gray-100">
                    <span className="text-gray-400 pb-1.5">Overview</span>
                    <span className="text-gray-400 pb-1.5">Usage Report</span>
                    <span className="text-gray-400 pb-1.5">Members (14)</span>
                    <span className="text-teal-700 border-b-2 border-teal-600 pb-1.5">Activity</span>
                  </div>
                  <div className="flex gap-1.5 pt-1">
                    <WFActionButton icon={Filter} label="All actions" />
                    <WFActionButton icon={Calendar} label="All time" />
                  </div>
                  <div className="rounded-lg border border-gray-100 overflow-hidden">
                    {[
                      { ts: "Jul 16, 10:42am", actor: "Nikki W.", action: "Reset search count", target: "Acme Nonprofit" },
                      { ts: "Jul 13, 3:05pm", actor: "Nikki W.", action: "Added user", target: "jordan@acmenonprofit.org" },
                      { ts: "Jun 30, 9:18am", actor: "Matthew D.", action: "Attempted: Delete organization", target: "Acme Nonprofit", blocked: true },
                    ].map((r, i) => (
                      <div key={i} className="flex items-center gap-2 px-2.5 py-2 border-t border-gray-100 first:border-t-0">
                        <span className="w-20 shrink-0 text-[9.5px] text-gray-400">{r.ts}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10.5px] font-semibold text-gray-700 truncate">
                            {r.action} <span className="font-normal text-gray-400">— {r.target}</span>
                          </p>
                          <p className="text-[9.5px] text-gray-400">by {r.actor}</p>
                        </div>
                        {r.blocked && (
                          <span className="text-[8.5px] font-bold uppercase text-red-600 bg-red-50 border border-red-200 rounded px-1.5 py-0.5 shrink-0">
                            Blocked
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  <WFPagination page={1} total={4} />
                </WFScreen>
              </div>
              <div>
                <WFVariantLabel>User Activity Log</WFVariantLabel>
                <WFScreen activeNav="users" breadcrumb={["Admin Portal", "Users", "Jordan Casey"]}>
                  <div className="flex gap-3 text-[10.5px] font-semibold border-b border-gray-100">
                    <span className="text-gray-400 pb-1.5">Profile</span>
                    <span className="text-teal-700 border-b-2 border-teal-600 pb-1.5">Activity</span>
                  </div>
                  <div className="rounded-lg border border-gray-100 overflow-hidden">
                    {[
                      { ts: "Jul 16, 10:42am", action: "Password reset triggered", by: "by Nikki W." },
                      { ts: "Feb 12, 2024", action: "Added to Acme Nonprofit as Admin", by: "by Nikki W." },
                    ].map((r, i) => (
                      <div key={i} className="flex items-center gap-2 px-2.5 py-2 border-t border-gray-100 first:border-t-0">
                        <span className="w-20 shrink-0 text-[9.5px] text-gray-400">{r.ts}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10.5px] font-semibold text-gray-700 truncate">{r.action}</p>
                          <p className="text-[9.5px] text-gray-400">{r.by}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </WFScreen>
              </div>
            </WireframeItem>

            <WireframeItem
              title="Reset Password — trigger, confirmation, edge case"
              priority="P0"
              layout="stack"
              description="Reuses the existing better-auth reset flow end to end — this only wireframes the new trigger point and its outcomes."
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <WFFrame title="Trigger — from Org Overview quick actions">
                  <WFRow>
                    <div className="flex-1 space-y-1">
                      <WFBar w="50%" />
                      <span className="text-[10px] text-gray-400">Acme Nonprofit</span>
                    </div>
                    <WFButtonSketch label="Reset password" tone="primary" />
                  </WFRow>
                </WFFrame>
                <WFFrame title="Trigger — from User Profile">
                  <WFRow>
                    <WFAvatar />
                    <div className="flex-1 space-y-1">
                      <WFBar w="50%" />
                      <span className="text-[10px] text-gray-400">jordan@acmenonprofit.org</span>
                    </div>
                    <WFButtonSketch label="Reset password" tone="primary" />
                  </WFRow>
                </WFFrame>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <WFFrame title="Confirm dialog" dashed>
                  <p className="text-[10.5px] text-gray-600 leading-snug">
                    Send a password reset email to <strong>jordan@acmenonprofit.org</strong>? This
                    is the same flow the user would trigger themselves from the sign-in page.
                  </p>
                  <div className="flex justify-end gap-2 pt-1">
                    <WFButtonSketch label="Cancel" />
                    <WFButtonSketch label="Send reset email" tone="primary" />
                  </div>
                </WFFrame>
                <div className="space-y-2">
                  <WFToast tone="success" text="Password reset email sent to jordan@acmenonprofit.org" />
                  <WFToast tone="error" text="No verified email on file — ask the user to verify first" />
                </div>
              </div>
            </WireframeItem>

            <WireframeItem
              title="Reset Search Count — trigger, confirmation, history"
              priority="P0"
              description="Immediately restores the org's free-tier allotment; every reset is attributed in the org's Activity Log."
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <WFFrame title="Trigger (from Org Overview)">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] text-gray-500">
                      <span>Grant searches this cycle</span>
                      <span className="font-semibold">12 / 25</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full bg-teal-500" style={{ width: "48%" }} />
                    </div>
                  </div>
                  <div className="flex justify-end pt-1">
                    <WFButtonSketch label="Reset count" tone="primary" />
                  </div>
                </WFFrame>
                <WFFrame title="Confirmation" dashed>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-teal-600" />
                    <span className="text-[10.5px] text-gray-600">Search count reset to 0 / 25</span>
                  </div>
                  <WFCallout>Logged to Activity as "Reset search count — by Nikki W."</WFCallout>
                </WFFrame>
              </div>
              <WFFrame title="Reset history (within org Activity tab)">
                {[
                  ["Jul 16, 10:42am", "Nikki W."],
                  ["May 2, 9:03am", "Nikki W."],
                ].map(([ts, actor]) => (
                  <WFRow key={ts}>
                    <div className="w-24 shrink-0 text-[10px] text-gray-400">{ts}</div>
                    <div className="flex-1 text-[10.5px] text-gray-600">Reset search count</div>
                    <div className="text-[10px] text-gray-400">by {actor}</div>
                  </WFRow>
                ))}
              </WFFrame>
            </WireframeItem>

            <WireframeItem
              title="Add User to Org — modal, role picker, existing vs. new user"
              priority="P0"
              layout="stack"
              description="Produces the same membership state as a direct Org Admin invite. Distinguishes an email that already has an account from one that will receive a fresh invite."
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <WFFrame title="Add user to org" dashed>
                  <div className="flex items-center justify-between">
                    <WFBar w="35%" />
                    <X className="size-3.5 text-gray-400" />
                  </div>
                  <WFInputSketch icon={Mail} placeholder="jordan@acmenonprofit.org" />
                  <div className="flex items-center gap-1.5 text-[10px] text-teal-700 bg-teal-50 border border-teal-200 rounded-md px-2 py-1">
                    <Info className="size-3 shrink-0" />
                    Matches an existing account — Jordan Casey
                  </div>
                  <div className="flex gap-2 pt-1">
                    <div className="flex-1 rounded-md border border-teal-400 bg-teal-50 p-2 flex items-center gap-1.5">
                      <CircleDot className="size-3.5 text-teal-600 shrink-0" />
                      <span className="text-[10.5px] font-semibold text-teal-700">Admin</span>
                    </div>
                    <div className="flex-1 rounded-md border border-gray-300 p-2 flex items-center gap-1.5">
                      <Circle className="size-3.5 text-gray-400 shrink-0" />
                      <span className="text-[10.5px] font-semibold text-gray-500">Consultant</span>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 pt-1">
                    <WFButtonSketch label="Cancel" />
                    <WFButtonSketch label="Add user" tone="primary" />
                  </div>
                </WFFrame>
                <div className="space-y-3">
                  <WFFrame title="New email — will be invited" dashed>
                    <WFInputSketch icon={Mail} placeholder="new.person@acmenonprofit.org" />
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-500 bg-gray-50 border border-gray-200 rounded-md px-2 py-1">
                      <Info className="size-3 shrink-0" />
                      No account yet — an invite email will be sent
                    </div>
                  </WFFrame>
                  <WFFrame title="Already a member — error" dashed>
                    <WFInputSketch icon={Mail} placeholder="sam@acmenonprofit.org" />
                    <div className="flex items-center gap-1.5 text-[10px] text-red-600 bg-red-50 border border-red-200 rounded-md px-2 py-1">
                      <AlertTriangle className="size-3 shrink-0" />
                      Sam Patel is already a member of Acme Nonprofit
                    </div>
                  </WFFrame>
                </div>
              </div>
            </WireframeItem>

            <WireframeItem
              title="Permission-denied state for Support Admin"
              priority="P0"
              layout="stack"
              description="Server-side enforcement is decided; the UI treatment is still open (see Open Questions). Both candidate treatments are wireframed here so the decision can be made against real layouts."
              note="Open question: hide restricted controls entirely for Support Admin, or show them disabled with an explanatory tooltip? Pick one before Dev-Ready — mixing both across screens would be inconsistent."
            >
              <div>
                <WFVariantLabel>Option A — hidden entirely</WFVariantLabel>
                <WFScreen activeNav="orgs" role="support" breadcrumb={["Admin Portal", "Organizations", "Acme Nonprofit"]}>
                  <div className="flex items-center gap-2.5">
                    <WFAvatar size="size-10" />
                    <div>
                      <p className="text-[13px] font-bold text-gray-800">Acme Nonprofit</p>
                      <p className="text-[10px] text-gray-400">14 members · last login 2h ago</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 pt-2">
                    <WFActionButton icon={Eye} label="View only — no actions available" disabled />
                  </div>
                  <WFCallout>
                    Reset password, Reset search count, Add user, Combine, and Delete are not
                    rendered at all for this role.
                  </WFCallout>
                </WFScreen>
              </div>
              <div>
                <WFVariantLabel>Option B — visible but disabled, with tooltip</WFVariantLabel>
                <WFScreen activeNav="orgs" role="support" breadcrumb={["Admin Portal", "Organizations", "Acme Nonprofit"]}>
                  <div className="flex items-center gap-2.5">
                    <WFAvatar size="size-10" />
                    <div>
                      <p className="text-[13px] font-bold text-gray-800">Acme Nonprofit</p>
                      <p className="text-[10px] text-gray-400">14 members · last login 2h ago</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 pt-2 relative w-fit">
                    <WFTooltipBubble text="Requires Super Admin" />
                    <WFActionButton icon={KeyRound} label="Reset password" disabled />
                    <WFActionButton icon={RotateCcw} label="Reset search count" disabled />
                    <WFActionButton icon={UserPlus} label="Add user" disabled />
                  </div>
                </WFScreen>
              </div>
              <div>
                <WFVariantLabel>Direct-link deep-link attempt (either option)</WFVariantLabel>
                <WFFrame title="Blocked action — full page" dashed>
                  <div className="flex flex-col items-center text-center gap-2 py-4">
                    <Lock className="size-5 text-gray-400" />
                    <p className="text-[11px] font-semibold text-gray-600">Access restricted</p>
                    <p className="text-[10.5px] text-gray-500 max-w-[260px]">
                      You don't have permission to perform this action. It has been logged and a
                      Super Admin has been notified. Contact a Super Admin if you believe this is
                      a mistake.
                    </p>
                  </div>
                </WFFrame>
              </div>
            </WireframeItem>
          </div>

          <p className="text-[12px] font-bold text-amber-700 uppercase tracking-wide mb-3">
            P1 — blocked on open questions
          </p>
          <div className="flex flex-col gap-6">
            <WireframeItem
              title="Disable User — trigger, confirmation, downstream effect"
              priority="P1"
              layout="stack"
              note="Pending data-model decision — new membership status field vs. permission-level revoke. Wireframed assuming a status field, since that's what the Members list and badges below depend on."
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <WFFrame title="Trigger (from User Drill-down danger zone)">
                  <p className="text-[10.5px] text-gray-500 pb-1.5">
                    Disables Jordan Casey within Acme Nonprofit only.
                  </p>
                  <div className="flex justify-end">
                    <WFButtonSketch label="Disable user" tone="danger" />
                  </div>
                </WFFrame>
                <WFFrame title="Confirmation" dashed>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="size-4 text-red-500 shrink-0" />
                    <span className="text-[10.5px] text-gray-600">
                      This revokes their access to Acme Nonprofit. Applications, searches, and
                      history are preserved and can be restored later.
                    </span>
                  </div>
                  <div className="flex justify-end gap-2 pt-1">
                    <WFButtonSketch label="Cancel" />
                    <WFButtonSketch label="Disable" tone="danger" />
                  </div>
                </WFFrame>
              </div>
              <div>
                <WFVariantLabel>Effect on the Members list</WFVariantLabel>
                <WFFrame title="Org Drill-down / Members">
                  <div className="flex items-center gap-2 px-1 py-1.5 opacity-60">
                    <WFAvatar />
                    <div className="flex-1">
                      <WFBar w="50%" />
                    </div>
                    <span className="text-[9.5px] font-semibold uppercase text-gray-400 bg-gray-50 border border-gray-200 rounded px-1.5 py-0.5">
                      Disabled
                    </span>
                    <span className="text-[10px] text-teal-700 font-semibold">Re-enable</span>
                  </div>
                </WFFrame>
              </div>
            </WireframeItem>

            <WireframeItem
              title="Combine Organizations — full merge wizard"
              priority="P1"
              layout="stack"
              note="Mechanics pending Spike — merge behavior for Stripe billing, duplicate applications, and programs is undefined. Steps 2–3 below are provisional until that's resolved."
            >
              <WFFrame title="Step 1 of 3 — select the org to merge into this one" dashed>
                <WFInputSketch icon={Search} placeholder="Search organizations…" />
                <div className="flex items-center gap-2 rounded-md border border-teal-300 bg-teal-50 px-2 py-1.5">
                  <Building2 className="size-3.5 text-teal-700 shrink-0" />
                  <span className="text-[10.5px] font-semibold text-teal-800">Acme Housing Coalition</span>
                  <X className="size-3 text-teal-700 ml-auto shrink-0" />
                </div>
                <div className="flex justify-end gap-2 pt-1">
                  <WFButtonSketch label="Cancel" />
                  <WFButtonSketch label="Next: review conflicts" tone="primary" />
                </div>
              </WFFrame>
              <WFFrame title="Step 2 of 3 — review conflicts" dashed>
                <div className="rounded-md border border-gray-200 overflow-hidden">
                  <div className="flex items-center gap-2 bg-gray-50 px-2 py-1 text-[9px] font-bold text-gray-400 uppercase">
                    <span className="flex-1">Field</span>
                    <span className="w-20 shrink-0">Acme Nonprofit</span>
                    <span className="w-20 shrink-0">Acme Housing</span>
                    <span className="w-16 shrink-0">Keep</span>
                  </div>
                  {[
                    ["Org profile", "80% complete", "35% complete"],
                    ["Stripe billing", "Active plan", "No plan"],
                    ["Programs", "3 programs", "1 program"],
                  ].map(([field, a, b]) => (
                    <div key={field} className="flex items-center gap-2 px-2 py-1.5 border-t border-gray-100 text-[10px]">
                      <span className="flex-1 font-semibold text-gray-600">{field}</span>
                      <span className="w-20 shrink-0 text-gray-500">{a}</span>
                      <span className="w-20 shrink-0 text-gray-500">{b}</span>
                      <span className="w-16 shrink-0 text-teal-700 font-semibold">Acme N.</span>
                    </div>
                  ))}
                </div>
                <WFCallout tone="warning">
                  Stripe billing conflict resolution is still undefined pending the Eng spike.
                </WFCallout>
                <div className="flex justify-end gap-2 pt-1">
                  <WFButtonSketch label="Back" />
                  <WFButtonSketch label="Next: confirm" tone="primary" />
                </div>
              </WFFrame>
              <WFFrame title="Step 3 of 3 — typed confirmation" dashed>
                <p className="text-[10.5px] text-gray-600">
                  Type <strong>Acme Housing Coalition</strong> to permanently merge it into Acme
                  Nonprofit. This cannot be undone.
                </p>
                <WFInputSketch placeholder="Type org name to confirm" />
                <div className="flex justify-end gap-2 pt-1">
                  <WFButtonSketch label="Back" />
                  <WFButtonSketch label="Merge organizations" tone="danger" />
                </div>
              </WFFrame>
            </WireframeItem>

            <WireframeItem
              title="Delete Organization — typed confirmation + deletion receipt"
              priority="P1"
            >
              <WFFrame title="Delete organization" dashed>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="size-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-[10.5px] text-gray-600">
                    This permanently deletes Acme Nonprofit's programs, applications, members, and
                    billing history. This cannot be undone.
                  </span>
                </div>
                <WFInputSketch placeholder="Type DELETE to confirm" />
                <div className="flex justify-end gap-2 pt-1">
                  <WFButtonSketch label="Cancel" />
                  <WFButtonSketch label="Delete organization" tone="danger" />
                </div>
              </WFFrame>
              <WFFrame title="Deletion record (receipt)">
                <div className="space-y-1 text-[10px] text-gray-500">
                  <p>
                    <span className="font-semibold text-gray-700">Org:</span> Acme Nonprofit
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Deleted by:</span> Nikki W.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Timestamp:</span> Jul 16, 2026, 11:03am
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Hash:</span> a3f9…21bc
                  </p>
                </div>
                <p className="text-[9.5px] text-gray-400 italic pt-1">
                  Immutable — retained in the system audit log even though the org record is gone.
                </p>
              </WFFrame>
            </WireframeItem>

            <WireframeItem
              title="Customer-facing notification of admin actions"
              priority="P1"
              layout="stack"
              note="Pending decision on whether to build this at all. Two placement options wireframed for if it's approved, plus the off state if it's not."
            >
              <div>
                <WFVariantLabel>Option A — persistent in-app banner</WFVariantLabel>
                <WFFrame title="Main app (Org Admin view)" dashed>
                  <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-2.5 py-2">
                    <Bell className="size-3.5 text-gray-400 shrink-0" />
                    <span className="flex-1 text-[10.5px] text-gray-500">
                      A Support team member reset your organization's search count on Jul 16.
                    </span>
                    <ExternalLink className="size-3 text-gray-400 shrink-0" />
                    <X className="size-3.5 text-gray-400 shrink-0" />
                  </div>
                </WFFrame>
              </div>
              <div>
                <WFVariantLabel>Option B — one-time email + toast</WFVariantLabel>
                <div className="flex flex-col gap-2">
                  <WFToast text="Sent: 'A member of our support team assisted with your account.'" />
                  <WFFrame title="Email (Org Admin inbox)" dashed>
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                      <MessageSquareWarning className="size-3.5 text-gray-400 shrink-0" />
                      Subject: An admin action was taken on your Great Grants account
                    </div>
                  </WFFrame>
                </div>
              </div>
              <div>
                <WFVariantLabel>Off — internal-only (current default)</WFVariantLabel>
                <WFCallout>
                  No customer-facing signal at all — only the internal Activity Log records the
                  action. This stays the default until Nikki decides otherwise.
                </WFCallout>
              </div>
            </WireframeItem>
          </div>
        </section>

        {/* ── Newest Updates ── */}
        <section id="newest-updates" className="scroll-mt-8 mb-20">
          <div className="flex items-center gap-2 mb-1">
            <Badge className="bg-teal-600 hover:bg-teal-600 text-white">Aug 26, 2026</Badge>
            <Badge variant="outline" className="text-gray-500 border-gray-300">
              Figma node 11994:11265
            </Badge>
          </div>
          <h2 className="text-[20px] font-bold text-gray-900 mb-1">Newest Updates</h2>
          <p className="text-[13px] text-gray-500 mb-6 max-w-2xl">
            The latest Figma round for Global Organization Search — "Great Grants / Organization
            Search / Results" (node 11994:11265) — implemented below with two changes from the
            source file: each result row also shows Focus Areas and an exact last-login timestamp
            instead of Figma's relative time, and clicking into a result opens a fuller record view
            than the Overview tab wireframed earlier on this page. The Focus Area tag styling
            follows the reference at node 13513:31375 ("Grant Search / Geo Focus / Added"), minus
            its × remove control — these are read-only summaries, not an editable field.
          </p>

          <div className="flex flex-col gap-6">
            <WireframeItem
              title="Global Organization Search — Results"
              priority="P0"
              layout="stack"
              description="Landing screen for the Organizations nav item. Each row now surfaces Focus Areas alongside org name, member count, and last login — the full timestamp, not a relative time — so Support can gauge fit and recency without opening the record."
            >
              <WFScreen activeNav="orgs" breadcrumb={["Admin Portal", "Organizations"]}>
                <div>
                  <p className="text-[13px] font-bold text-gray-800">Global Organization Search</p>
                  <p className="text-[10px] text-gray-400">
                    Search and manage organizations across the Great Grants platform.
                  </p>
                </div>
                <WFInputSketch icon={Search} placeholder="Search organizations…" />
                <div className="flex items-center gap-2 pt-1">
                  <WFActionButton icon={Filter} label="Add Filters" />
                  <span className="text-[10px] text-gray-300 underline">Clear all filters</span>
                </div>
                <p className="text-[11px] font-semibold text-gray-700 pt-1">
                  {NEWEST_SEARCH_RESULTS.length} organizations
                </p>
                <div className="border-t border-gray-100 w-full">
                  {NEWEST_SEARCH_RESULTS.map((r) => (
                    <div
                      key={r.name}
                      className="flex items-start gap-2 py-2.5 border-b border-gray-100 last:border-b-0"
                    >
                      <Building2 className="size-3.5 text-gray-300 shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold text-gray-700 truncate">{r.name}</p>
                        <p className="text-[10px] text-gray-400 truncate">
                          {r.members} members · last login {r.lastLogin}
                        </p>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {r.focusAreas.map((f) => (
                            <WFTag key={f} label={f} />
                          ))}
                        </div>
                      </div>
                      <ChevronRight className="size-3.5 text-gray-300 shrink-0 mt-0.5" />
                    </div>
                  ))}
                </div>
              </WFScreen>
            </WireframeItem>

            <WireframeItem
              title="Organization Record — full drill-down"
              priority="P0"
              layout="stack"
              description="Opened from any search result. Seven sections, tabbed: All Users (with per-member role changes behind a confirmation modal), Search Count (with reset + last-reset attribution), Organization Profile and Program Info (each field listed with its own completion state, not just a rolled-up percentage), Applications (status, % complete, dates, and who last touched it), Focus Areas, and Activity. Click a tab below to switch sections."
            >
              <NewestUpdatesOrgDetailWF />
            </WireframeItem>
          </div>
        </section>
      </main>
    </div>
  );
}
