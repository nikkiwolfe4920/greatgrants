import { Link } from "react-router";
import {
  BookOpen,
  Code2,
  ExternalLink,
  FileText,
  GitPullRequest,
  Layers,
  Palette,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ChangeItem, DocKind, DocLink, ReleaseItemType, ShippedItem } from "@/data/featureFactory/types";

const docIcons: Record<DocKind, LucideIcon> = {
  figma: Palette,
  spec: FileText,
  storybook: Layers,
  prd: BookOpen,
  "pull-request": GitPullRequest,
  api: Code2,
  runbook: Wrench,
  other: FileText,
};

const typeStyles: Record<ReleaseItemType, { label: string; className: string }> = {
  new: { label: "New", className: "bg-teal-50 text-teal-700 border-teal-200" },
  improved: { label: "Improved", className: "bg-blue-50 text-blue-700 border-blue-200" },
  fixed: { label: "Fixed", className: "bg-gray-100 text-gray-600 border-gray-200" },
};

const isInternal = (href: string) => href.startsWith("/");
// "#" is the placeholder href in template content — render it as plain text, not a dead link.
const isPlaceholder = (href: string) => href === "#" || href === "";

function EmptyTab({ children }: { children: string }) {
  return <p className="text-sm text-gray-500 py-2">{children}</p>;
}

export function ShippedList({ items }: { items: ShippedItem[] }) {
  if (items.length === 0) return <EmptyTab>Nothing shipped this cycle.</EmptyTab>;
  return (
    <ul className="divide-y divide-gray-100">
      {items.map((item) => {
        const type = typeStyles[item.type];
        return (
          <li key={item.title} className="py-4 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${type.className}`}>
                {type.label}
              </span>
              <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
              {item.area && <span className="text-xs text-gray-500">· {item.area}</span>}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            {item.href && !isPlaceholder(item.href) && (
              <ItemLink href={item.href}>See it live</ItemLink>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function ItemLink({ href, children }: { href: string; children: string }) {
  const className =
    "inline-flex items-center gap-1.5 mt-2 text-sm font-semibold text-teal-700 hover:text-teal-800";
  return isInternal(href) ? (
    <Link to={href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <ExternalLink className="w-3.5 h-3.5" aria-hidden />
    </a>
  );
}

export function ChangesList({ items }: { items: ChangeItem[] }) {
  if (items.length === 0) return <EmptyTab>No behaviour changes this cycle.</EmptyTab>;
  return (
    <ul className="space-y-5">
      {items.map((item) => (
        <li key={item.title}>
          <h4 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Before</p>
              <p className="text-sm text-gray-700 leading-relaxed">{item.before}</p>
            </div>
            <div className="rounded-lg border border-teal-200 bg-teal-50 p-4">
              <p className="text-xs font-semibold text-teal-700 uppercase tracking-wide mb-1">Now</p>
              <p className="text-sm text-teal-900 leading-relaxed">{item.after}</p>
            </div>
          </div>
          {item.rationale && (
            <p className="text-sm text-gray-600 mt-2">
              <span className="font-semibold text-gray-700">Why: </span>
              {item.rationale}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

export function DocList({ docs, emptyText }: { docs: DocLink[]; emptyText: string }) {
  if (docs.length === 0) return <EmptyTab>{emptyText}</EmptyTab>;
  return (
    <ul className="grid sm:grid-cols-2 gap-3">
      {docs.map((doc) => {
        const Icon = docIcons[doc.kind];
        const body = (
          <>
            <span className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-gray-500" aria-hidden />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-gray-900">{doc.title}</span>
              {doc.description && (
                <span className="block text-xs text-gray-500 mt-0.5 leading-relaxed">{doc.description}</span>
              )}
            </span>
          </>
        );
        const base = "flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4";

        return (
          <li key={doc.title}>
            {isPlaceholder(doc.href) ? (
              <div className={base}>{body}</div>
            ) : isInternal(doc.href) ? (
              <Link to={doc.href} className={`${base} hover:shadow-md transition-all`}>
                {body}
              </Link>
            ) : (
              <a
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${base} hover:shadow-md transition-all`}
              >
                {body}
                <ExternalLink className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" aria-hidden />
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
