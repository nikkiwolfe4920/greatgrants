import { useState } from "react";
import { useNavigate } from "react-router";
import { Logo } from "@/app/components/Logo";
import {
  Search,
  Star,
  Building2,
  FileText,
  LayoutGrid,
  Sparkles,
  ChevronRight,
  Globe,
  Calendar,
  Banknote,
  TrendingUp,
  Bookmark,
  ArrowUpRight,
} from "lucide-react";

const SEARCH_LIMIT = 5;

interface Grant {
  id: string;
  title: string;
  description: string;
  status: "Open" | "Pending" | "Closed";
  maxAmount: number;
  location: string;
  difficulty: "D.I.Y." | "Might Need Help" | "Expert Assistance";
  relevance: number;
  closeDate?: string;
  image?: string;
}

const mockGrants: Grant[] = [
  {
    id: "1",
    title: "Faith-Based Community Development Grants",
    description:
      "This program supports faith-based organizations in providing community services, including food banks, homeless shelters, youth mentorship programs, and community health initiatives.",
    status: "Open",
    maxAmount: 500000,
    location: "US: National",
    difficulty: "Might Need Help",
    relevance: 95.1,
    closeDate: "Jun 30, 2026",
    image:
      "https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    id: "2",
    title: "Religious Organizations Mission Trip Support Program",
    description:
      "Funding for religious organizations conducting international mission trips focused on humanitarian aid, education, healthcare services, and community building.",
    status: "Open",
    maxAmount: 75000,
    location: "US: National",
    difficulty: "D.I.Y.",
    relevance: 92.5,
    closeDate: "Apr 15, 2026",
    image:
      "https://images.unsplash.com/photo-1753185234794-e3b41b94a352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    id: "3",
    title: "Church-Based Small Business Development Fund",
    description:
      "Supporting churches and faith-based organizations in developing sustainable business ventures, including thrift stores, bookstores, coffee shops, and other revenue-generating activities.",
    status: "Pending",
    maxAmount: 150000,
    location: "US: National",
    difficulty: "Might Need Help",
    relevance: 89.75,
    closeDate: "May 31, 2026",
    image:
      "https://images.unsplash.com/photo-1611956565880-10e29a417648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    id: "4",
    title: "Faith-Based Youth Ministry and Education Programs",
    description:
      "Grants for faith-based organizations providing youth programs including after-school tutoring, summer camps, sports leagues, character education, and college prep assistance.",
    status: "Open",
    maxAmount: 200000,
    location: "US: National",
    difficulty: "D.I.Y.",
    relevance: 94.2,
    closeDate: "Jul 15, 2026",
    image:
      "https://images.unsplash.com/photo-1765109384317-592bf3852007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    id: "5",
    title: "Religious Nonprofit Community Outreach Grants",
    description:
      "Supporting religious nonprofits in expanding community outreach including addiction recovery programs, job training, financial literacy workshops, and family counseling.",
    status: "Open",
    maxAmount: 300000,
    location: "US: National",
    difficulty: "Might Need Help",
    relevance: 91.8,
    closeDate: "Aug 30, 2026",
    image:
      "https://images.unsplash.com/photo-1634872583967-6417a8638a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
];

function formatAmount(n: number) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
  return `$${n}`;
}

function difficultyColor(d: string) {
  if (d === "D.I.Y.") return "bg-green-50 text-green-700";
  if (d === "Might Need Help") return "bg-yellow-50 text-yellow-700";
  return "bg-red-50 text-red-700";
}

function statusColor(s: string) {
  if (s === "Open") return "bg-green-50 text-green-700";
  if (s === "Pending") return "bg-yellow-50 text-yellow-700";
  return "bg-gray-100 text-gray-500";
}

export function SubscribeSearchPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Grant[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchesUsed, setSearchesUsed] = useState(0);

  const remaining = SEARCH_LIMIT - searchesUsed;
  const isExhausted = searchesUsed >= SEARCH_LIMIT;

  const handleSearch = () => {
    if (isExhausted) {
      navigate("/subscribe/upgrade-modal");
      return;
    }
    if (!query.trim()) return;
    const newUsed = searchesUsed + 1;
    setSearchesUsed(newUsed);
    setResults(mockGrants);
    setHasSearched(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 h-screen flex flex-col shrink-0">
        <div className="px-5 py-4 border-b border-gray-200">
          <Logo />
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <button
            className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-50 transition-colors text-left"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            <FileText size={16} strokeWidth={1.75} />
            All Applications
          </button>
          <button
            className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 rounded-md text-left"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            <Search size={16} strokeWidth={1.75} />
            Grant Search
          </button>
          <button
            className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-50 transition-colors text-left"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            <Star size={16} strokeWidth={1.75} />
            Favorites
          </button>
          <button
            onClick={() => navigate("/subscribe/org")}
            className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-50 transition-colors text-left"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            <Building2 size={16} strokeWidth={1.75} />
            Organization Profile
          </button>
          <button
            className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-50 transition-colors text-left"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            <LayoutGrid size={16} strokeWidth={1.75} />
            My Programs
          </button>
        </nav>
        <div className="px-3 py-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-orange-300 shrink-0" />
            <div className="min-w-0 flex-1">
              <p
                className="text-sm font-medium text-gray-900 truncate"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                Your Account
              </p>
              <p className="text-xs text-gray-500 truncate" style={{ fontFamily: "Cabin, sans-serif" }}>
                Free Plan
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Top banner */}
        <div className="flex items-center justify-between px-6 py-3 bg-teal-50 border-b border-teal-100 shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-teal-600 shrink-0" />
            <p className="text-sm text-teal-800" style={{ fontFamily: "Cabin, sans-serif" }}>
              You're on the <strong>Free Plan</strong> — 5 grant searches per month, 5 saved grants.
            </p>
          </div>
          <button
            onClick={() => navigate("/subscribe/upgrade-modal")}
            className="text-sm font-semibold text-teal-700 hover:text-teal-800 whitespace-nowrap underline underline-offset-2 transition-colors"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            Upgrade Now
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Content area */}
          <div className="flex-1 overflow-y-auto px-8 py-8">
            {/* Search bar */}
            <div className="mb-6">
              <h1
                className="text-2xl font-normal text-gray-900 mb-4"
                style={{ fontFamily: "Lustria, serif" }}
              >
                Grant Search
              </h1>
              <div className="flex gap-2">
                {isExhausted ? (
                  <div className="flex-1 flex items-center gap-2 rounded-lg border border-amber-300 bg-amber-50 px-4 py-2.5">
                    <Search size={16} className="text-amber-500 shrink-0" />
                    <span className="text-sm text-amber-700" style={{ fontFamily: "Cabin, sans-serif" }}>
                      You've used all 5 free searches. Upgrade to continue searching.
                    </span>
                  </div>
                ) : (
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search for grants…"
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  />
                )}
                <button
                  onClick={handleSearch}
                  className={`shrink-0 flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isExhausted
                      ? "bg-amber-500 hover:bg-amber-600 focus:ring-amber-400"
                      : "bg-teal-600 hover:bg-teal-700 focus:ring-teal-500"
                  }`}
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  <Search size={15} strokeWidth={2.5} />
                  {isExhausted ? "Upgrade" : `Search (${remaining} Remaining)`}
                </button>
              </div>
            </div>

            {/* Results or empty state */}
            {!hasSearched && !isExhausted && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-4">
                  <Search size={28} className="text-teal-600" strokeWidth={1.5} />
                </div>
                <h2
                  className="text-xl font-normal text-gray-900 mb-2"
                  style={{ fontFamily: "Lustria, serif" }}
                >
                  Start Your Grant Search
                </h2>
                <p className="text-sm text-gray-500 max-w-sm" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Search by keyword, focus area, or grant type to discover funding opportunities matched to
                  your organization.
                </p>
              </div>
            )}

            {isExhausted && !hasSearched && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                  <Search size={28} className="text-amber-500" strokeWidth={1.5} />
                </div>
                <h2
                  className="text-xl font-normal text-gray-900 mb-2"
                  style={{ fontFamily: "Lustria, serif" }}
                >
                  Zero Free Searches Remain
                </h2>
                <p className="text-sm text-gray-500 max-w-sm mb-6" style={{ fontFamily: "Cabin, sans-serif" }}>
                  You've used all 5 of your free monthly searches. Upgrade to Unlimited Search &amp;
                  Discovery to keep finding grants without limits.
                </p>
                <button
                  onClick={() => navigate("/subscribe/upgrade-modal")}
                  className="rounded-lg bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Upgrade Now
                </button>
              </div>
            )}

            {hasSearched && results.length > 0 && (
              <div className="space-y-4">
                {results.map((grant) => (
                  <div
                    key={grant.id}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-4">
                      {grant.image && (
                        <img
                          src={grant.image}
                          alt=""
                          className="w-16 h-16 rounded-lg object-cover shrink-0"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3
                            className="text-base font-semibold text-gray-900 leading-snug"
                            style={{ fontFamily: "Cabin, sans-serif" }}
                          >
                            {grant.title}
                          </h3>
                          <div className="flex items-center gap-2 shrink-0">
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColor(grant.status)}`}
                              style={{ fontFamily: "Cabin, sans-serif" }}
                            >
                              {grant.status}
                            </span>
                          </div>
                        </div>
                        <p
                          className="text-sm text-gray-500 mb-3 line-clamp-2"
                          style={{ fontFamily: "Cabin, sans-serif" }}
                        >
                          {grant.description}
                        </p>
                        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Banknote size={13} />
                            Up to {formatAmount(grant.maxAmount)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Globe size={13} />
                            {grant.location}
                          </span>
                          {grant.closeDate && (
                            <span className="flex items-center gap-1">
                              <Calendar size={13} />
                              Closes {grant.closeDate}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <TrendingUp size={13} />
                            {grant.relevance}% Match
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2 shrink-0 ml-2">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${difficultyColor(grant.difficulty)}`}
                          style={{ fontFamily: "Cabin, sans-serif" }}
                        >
                          {grant.difficulty}
                        </span>
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 text-gray-400 hover:text-teal-600 transition-colors">
                            <Bookmark size={15} />
                          </button>
                          <button className="flex items-center gap-1 text-xs font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                            View <ArrowUpRight size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right rail */}
          <div className="w-72 shrink-0 border-l border-gray-200 px-5 py-6 overflow-y-auto">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm mb-4">
              <div className="flex items-center justify-between mb-3">
                <p
                  className="text-sm font-semibold text-gray-900"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Free Searches
                </p>
                <span
                  className={`text-sm font-bold ${isExhausted ? "text-red-600" : "text-teal-600"}`}
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  {searchesUsed}/{SEARCH_LIMIT}
                </span>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
                <div
                  className={`h-2 rounded-full transition-all ${isExhausted ? "bg-red-500" : "bg-teal-500"}`}
                  style={{ width: `${(searchesUsed / SEARCH_LIMIT) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mb-4" style={{ fontFamily: "Cabin, sans-serif" }}>
                {isExhausted
                  ? "You've used all your free searches this month."
                  : `${remaining} of ${SEARCH_LIMIT} free searches remaining this month.`}
              </p>
              <button
                onClick={() => navigate("/subscribe/upgrade-modal")}
                className="w-full rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                Upgrade Now
              </button>
            </div>
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              <p
                className="text-sm font-semibold text-gray-900 mb-1"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                Unlock Unlimited Search
              </p>
              <p className="text-xs text-gray-500 mb-3" style={{ fontFamily: "Cabin, sans-serif" }}>
                Unlimited grant searches, saved grants, and more for $49.99/mo.
              </p>
              <button
                onClick={() => navigate("/subscribe/upgrade-modal")}
                className="flex items-center gap-1 text-xs font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                Learn more <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
