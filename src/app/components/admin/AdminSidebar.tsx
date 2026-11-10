import { Link, useLocation } from "react-router";
import { Globe, Building2, UserCircle2, BookOpen, ChevronsUpDown } from "lucide-react";
import { Logo } from "../Logo";

/**
 * Super Admin left nav (Figma "ADMIN" sidebar) — shared by the Private
 * Opportunities list (/super-admin-p) and the opportunity editor
 * (/super-admin-op). Organizations and Users aren't live routes yet, so they
 * render inert rather than as dead links.
 */
const NAV_ITEMS = [
  { label: "Global Grant Search", icon: Globe, path: "/super-admin/search", match: ["/super-admin/search"] },
  { label: "All Organizations", icon: Building2, path: null, match: [] },
  { label: "All Users", icon: UserCircle2, path: null, match: [] },
  {
    label: "Private Opportunities",
    icon: BookOpen,
    path: "/super-admin-p",
    match: ["/super-admin-p", "/super-admin-op"],
  },
] as const;

export function AdminSidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 bg-white flex flex-col h-full">
      <div className="px-4 py-3 border-b border-gray-200">
        <Logo />
      </div>

      <nav className="flex-1 min-h-0 overflow-y-auto p-3" aria-label="Admin">
        <p className="px-3 text-[10px] font-bold text-gray-400 leading-6 uppercase">Admin</p>
        <ul className="flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = (item.match as readonly string[]).some((m) => pathname === m || pathname.startsWith(`${m}/`));
            const base = "flex items-center gap-2 px-3 py-2 rounded-md text-sm";
            if (!item.path) {
              return (
                <li key={item.label}>
                  <div className={`${base} text-gray-700 cursor-default`} title="Coming soon">
                    <Icon className="size-4 shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </div>
                </li>
              );
            }
            return (
              <li key={item.label}>
                <Link
                  to={item.path}
                  aria-current={active ? "page" : undefined}
                  className={`${base} transition-colors ${
                    active ? "bg-[#f5f5f5] text-gray-900" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="size-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-gray-200 px-3 pt-3 pb-4">
        <div className="flex items-center gap-2.5 p-2 rounded-lg">
          <div className="size-8 rounded-full bg-[#e9eaeb] flex items-center justify-center text-xs font-semibold text-[#181d27] shrink-0">
            OR
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 leading-5 truncate">Olivia Rhye</p>
            <p className="text-xs font-medium text-gray-500 leading-4 truncate">Super Admin</p>
          </div>
          <ChevronsUpDown className="size-4 text-gray-400 shrink-0" />
        </div>
      </div>
    </aside>
  );
}
