import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  Search,
  Settings,
  LogOut,
  Building2,
  UserCircle2,
  FileClock,
  ChevronRight,
  X,
} from "lucide-react";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Logo } from "../components/Logo";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

/* ─────────────────────────────────────────────────────────────────
   Left nav — only Global Search is a live route today; the rest of
   the Admin Portal IA (Organizations, Users, Activity Log) is still
   on the backlog, so those items render inert rather than dead links.
───────────────────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: "Global Search", icon: Search, path: "/super-admin/search" },
  { label: "Organizations", icon: Building2, path: null },
  { label: "Users", icon: UserCircle2, path: null },
  { label: "Activity Log", icon: FileClock, path: null },
] as const;

type ResultType = "org" | "user";

interface SearchResult {
  id: string;
  type: ResultType;
  name: string;
  sub: string;
}

const MOCK_RESULTS: SearchResult[] = [
  { id: "org-1", type: "org", name: "Acme Nonprofit", sub: "14 members · last login 2h ago" },
  { id: "org-2", type: "org", name: "Acme Housing Coalition", sub: "6 members · last login 3d ago" },
  { id: "user-1", type: "user", name: "Jordan Casey", sub: "jordan@acmenonprofit.org · Admin @ Acme Nonprofit" },
  { id: "org-3", type: "org", name: "Acme Youth Services", sub: "2 members · last login 41d ago" },
  { id: "user-2", type: "user", name: "Alex Rivera", sub: "alex@acmehousing.org · Consultant @ Acme Housing Coalition" },
];

const RECENT_SEARCHES = ["Acme Nonprofit", "jordan@acmenonprofit.org"];

export function SuperAdminSearchPage() {
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | ResultType>("all");

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return MOCK_RESULTS.filter(
      (r) => r.name.toLowerCase().includes(q) || r.sub.toLowerCase().includes(q),
    );
  }, [query]);

  const filtered = useMemo(
    () => (typeFilter === "all" ? matches : matches.filter((r) => r.type === typeFilter)),
    [matches, typeFilter],
  );

  const orgCount = matches.filter((r) => r.type === "org").length;
  const userCount = matches.filter((r) => r.type === "user").length;

  function clearSearch() {
    setQuery("");
    setTypeFilter("all");
  }

  return (
    <div className="flex h-screen bg-white">
      {/* Left nav — mirrors SharedSidebar's shell: logo up top, neutral
          active-state treatment, user/sign-out anchored at the bottom */}
      <aside className="flex flex-col w-60 shrink-0 border-r border-gray-200 h-full">
        <div className="flex items-center px-4 py-3 border-b border-gray-200 shrink-0">
          <Logo />
        </div>

        <nav className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-0.5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = item.path === location.pathname;
              if (!item.path) {
                return (
                  <li key={item.label}>
                    <div
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-400 cursor-default"
                      style={{ fontFamily: "Cabin, sans-serif", fontSize: "14px" }}
                      title="Coming soon"
                    >
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
                    className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                      active
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    style={{ fontFamily: "Cabin, sans-serif", fontWeight: active ? 600 : 400, fontSize: "14px" }}
                  >
                    <Icon className="size-4 shrink-0" />
                    <span className="flex-1 truncate">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="px-3 pb-4 pt-3 border-t border-gray-200 shrink-0">
          <div className="flex items-center gap-2.5 px-2 py-2">
            <div className="size-8 rounded-full bg-[#E9EAEB] flex items-center justify-center shrink-0">
              <span className="text-[#181D27] text-xs font-semibold">SA</span>
            </div>
            <div className="flex-1 min-w-0 text-left">
              <div className="text-sm font-medium text-gray-900 truncate">Super Admin</div>
              <div className="text-xs text-gray-500 truncate">Admin Portal</div>
            </div>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
              aria-label="Settings"
            >
              <Settings className="size-4" />
            </button>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 px-2 py-2 w-full text-left rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            style={{ fontFamily: "Cabin, sans-serif", fontSize: "14px" }}
          >
            <LogOut className="size-4 shrink-0" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 overflow-y-auto px-6 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/super-admin">Admin Portal</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Global Search</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-xl mx-auto pt-8">
            <h1 className="sr-only">Global Search</h1>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by org name or email…"
                className="pl-9 pr-9"
                aria-label="Search by org name or email"
              />
              {query && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            {query.trim() === "" ? (
              <>
                <p className="text-sm text-gray-500 leading-relaxed pt-3">
                  Start typing to search organizations or users. Results update as you type.
                </p>
                <div className="pt-6">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                    Recent searches
                  </p>
                  <div className="flex flex-col">
                    {RECENT_SEARCHES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setQuery(s)}
                        className="flex items-center gap-2 py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors text-left"
                      >
                        <Search className="size-3.5 text-gray-300 shrink-0" />
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : filtered.length === 0 ? (
              <div className="flex flex-col items-center text-center gap-2 py-16">
                <Search className="size-6 text-gray-300" />
                <p className="text-sm font-semibold text-gray-600">No matches for "{query}"</p>
                <p className="text-xs text-gray-400 max-w-[260px] leading-relaxed">
                  Check the spelling, or search by the account owner's email instead.
                </p>
                <Button variant="outline" size="sm" onClick={clearSearch} className="mt-1">
                  Clear search
                </Button>
              </div>
            ) : (
              <>
                <div className="flex gap-2 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setTypeFilter("all")}
                    className={
                      typeFilter === "all"
                        ? "bg-teal-600 hover:bg-teal-700 text-white border-teal-600"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }
                  >
                    All ({matches.length})
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setTypeFilter("org")}
                    className={
                      typeFilter === "org"
                        ? "bg-teal-600 hover:bg-teal-700 text-white border-teal-600"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }
                  >
                    <Building2 className="size-3.5" />
                    Organizations ({orgCount})
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setTypeFilter("user")}
                    className={
                      typeFilter === "user"
                        ? "bg-teal-600 hover:bg-teal-700 text-white border-teal-600"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }
                  >
                    <UserCircle2 className="size-3.5" />
                    Users ({userCount})
                  </Button>
                </div>

                <div className="divide-y divide-gray-100 border-y border-gray-100 mt-3">
                  {filtered.map((r) => {
                    const Icon = r.type === "org" ? Building2 : UserCircle2;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        className="flex items-center gap-3 py-3 w-full text-left hover:bg-gray-50 transition-colors -mx-2 px-2 rounded-md"
                      >
                        <Icon className="size-4 text-gray-300 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-800 truncate">{r.name}</p>
                          <p className="text-xs text-gray-400 truncate">{r.sub}</p>
                        </div>
                        <Badge variant="outline" className="shrink-0 text-gray-500 border-gray-200">
                          {r.type === "org" ? "Org" : "User"}
                        </Badge>
                        <ChevronRight className="size-4 text-gray-300 shrink-0" />
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </main>
    </div>
  );
}
