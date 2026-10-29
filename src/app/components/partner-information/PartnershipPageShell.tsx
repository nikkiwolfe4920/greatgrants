import type { ReactNode } from "react";
import { Link } from "react-router";
import { Calendar, ChevronDown, ChevronUp, Users } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbHome,
} from "@/app/components/ui/breadcrumb";
import type { PartnerApplication } from "@/data/partnerApplications";

/** Page chrome shared by every /partnership-applications* page: breadcrumb, title, subtitle. */
export function PartnershipPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1400px] mx-auto p-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">
                <BreadcrumbHome />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Partnership Applications</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-8">
        <div className="mb-2">
          <div className="mb-3">
            <Users className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <h1 className="text-2xl text-gray-900" style={{ fontFamily: "Lustria, serif", fontWeight: 600 }}>
            Partnership Applications
          </h1>
        </div>
        <p className="text-gray-600 text-sm">Manage the applications you're partnering on.</p>
      </div>

      <section aria-label="Partnership applications" className="space-y-4">
        {children}
      </section>
    </div>
  );
}

interface PartnerCardHeaderProps {
  app: PartnerApplication;
  /** Status badges after the standard Sub-recipient + Accepted pair. */
  badges?: ReactNode;
  expanded: boolean;
  onToggle: () => void;
  detailsId: string;
}

/** Accordion header: program name, status badges, lead applicant and decision date. */
export function PartnerCardHeader({ app, badges, expanded, onToggle, detailsId }: PartnerCardHeaderProps) {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-lg font-semibold text-gray-900">{app.programName}</h3>
            <Badge className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-50">{app.roleBadge}</Badge>
            <Badge className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50">Accepted</Badge>
            {badges}
          </div>
        </div>
        <button
          onClick={onToggle}
          className="p-1 rounded hover:bg-gray-100"
          aria-expanded={expanded}
          aria-controls={detailsId}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${app.programName}`}
        >
          {expanded ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-gray-600">
        <div>Lead applicant: {app.primeApplicant}</div>
        {app.decision && (
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Decided on {app.decision.decidedOn}</span>
          </div>
        )}
      </div>
    </div>
  );
}

/** Horizontal facts row (partner request, subaward, period, deadlines). */
export function PartnerDetailsStrip({ app, includeInformationDue = true }: { app: PartnerApplication; includeInformationDue?: boolean }) {
  const details: [string, string | undefined][] = [
    ["Partner request", app.need],
    ["Estimated subaward", app.subawardRange ? `${app.subawardRange} (estimate)` : app.mouAmount],
    ["Period of performance", app.period],
    ["NOFO deadline", app.nofoDeadline],
    ...(includeInformationDue ? ([["Information due", app.informationDue]] as [string, string | undefined][]) : []),
  ];
  return (
    <dl className="flex flex-wrap gap-x-8 gap-y-3">
      {details
        .filter(([, value]) => value)
        .map(([label, value]) => (
          <div key={label} className="flex flex-col gap-0.5">
            <dt className="text-xs text-gray-500">{label}</dt>
            <dd className="text-sm font-semibold text-gray-900">{value}</dd>
          </div>
        ))}
    </dl>
  );
}

const BANNER_TONES = {
  success: { box: "bg-green-50 border-green-200", icon: "text-green-700", title: "text-green-800" },
  danger: { box: "bg-red-50 border-red-200", icon: "text-red-700", title: "text-red-800" },
} as const;

/** Full-width status banner (Figma "Banner: partnership accepted" pattern) in success or danger tone. */
export function StatusBanner({
  tone,
  icon,
  title,
  children,
}: {
  tone: keyof typeof BANNER_TONES;
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  const t = BANNER_TONES[tone];
  return (
    <div role="status" className={`rounded-xl border p-5 flex gap-3 ${t.box}`}>
      <span className={`mt-0.5 shrink-0 ${t.icon}`} aria-hidden="true">
        {icon}
      </span>
      <div>
        <h4 className={`font-semibold mb-1.5 ${t.title}`}>{title}</h4>
        <p className="text-sm text-gray-700">{children}</p>
      </div>
    </div>
  );
}
