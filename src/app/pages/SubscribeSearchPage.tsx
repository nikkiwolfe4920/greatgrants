import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Logo } from "@/app/components/Logo";
import {
  Search,
  Star,
  Building2,
  FileText,
  LayoutGrid,
  Globe,
  Calendar,
  Banknote,
  TrendingUp,
  Bookmark,
  ArrowUpRight,
  X,
  Check,
  Zap,
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
    image: "https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
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
    image: "https://images.unsplash.com/photo-1753185234794-e3b41b94a352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
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
    image: "https://images.unsplash.com/photo-1611956565880-10e29a417648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
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
    image: "https://images.unsplash.com/photo-1765109384317-592bf3852007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
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
    image: "https://images.unsplash.com/photo-1634872583967-6417a8638a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
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

// Upgrade modal rendered inline as an overlay on the search page
function UpgradeModal({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();

  const UNLIMITED_FEATURES = [
    "Unlimited Search",
    "AI-driven Grant Matching",
    "Email Alerts (Daily/Weekly/Monthly)",
    "Unlimited Programs",
  ];
  const AI_FEATURES = ["Auto-Grant Drafting", "Team Collaboration", "Fact-checking"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-5 border-b border-gray-200">
          <h2
            className="text-2xl font-normal text-gray-900"
            style={{ fontFamily: "Lustria, serif" }}
          >
            Win More Grants, Write Less
          </h2>
          <button
            onClick={onClose}
            className="ml-4 shrink-0 p-1 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-5 px-6 py-6">
          {/* Unlimited Search & Discovery */}
          <div className="flex flex-col rounded-xl border-2 border-[#8200db] bg-white p-6 shadow-sm">
            <div className="text-center mb-5">
              <h3
                className="text-2xl font-normal text-gray-900 mb-3 leading-tight"
                style={{ fontFamily: "Lustria, serif" }}
              >
                Unlimited Search &<br />Discovery
              </h3>
              <div className="mb-1">
                <span
                  className="text-4xl font-bold text-gray-900"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  $49.99
                </span>
                <span className="text-lg text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
                  /mo
                </span>
              </div>
              <p className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
                per month
              </p>
            </div>
            <ul className="space-y-3 flex-1 mb-5">
              {UNLIMITED_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <Check size={16} className="text-teal-600 shrink-0" strokeWidth={2.5} />
                  <span className="text-base text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate("/subscribe/stripe")}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              style={{ fontFamily: "Cabin, sans-serif" }}
            >
              Get Started
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </button>
          </div>

          {/* AI Grant Writer */}
          <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span
                className="inline-block rounded-full bg-gray-200 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-gray-900"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                First 2 Months Free
              </span>
            </div>
            <div className="text-center mb-5 mt-2">
              <h3
                className="text-2xl font-normal text-gray-900 mb-3"
                style={{ fontFamily: "Lustria, serif" }}
              >
                AI-Grant Writer
              </h3>
              <div className="mb-1">
                <span
                  className="text-4xl font-bold text-gray-400 line-through"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  $499
                </span>
                <span className="text-lg text-gray-400 line-through" style={{ fontFamily: "Cabin, sans-serif" }}>
                  /mo
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-1" style={{ fontFamily: "Cabin, sans-serif" }}>
                for 10 active grants
              </p>
              <p
                className="text-sm font-bold text-gray-900"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                FREE FOR 15 MORE DAYS
              </p>
              <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: "Cabin, sans-serif" }}>
                Everything in Search &amp; Discovery* +
              </p>
            </div>
            <ul className="space-y-3 flex-1 mb-5">
              {AI_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <Check size={16} className="text-gray-400 shrink-0" strokeWidth={2.5} />
                  <span className="text-base text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <button
              disabled
              className="w-full rounded-lg bg-gray-100 border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-400 cursor-not-allowed"
              style={{ fontFamily: "Cabin, sans-serif" }}
            >
              Coming Soon
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <svg width="48" height="20" viewBox="0 0 120 50" aria-label="Stripe">
              <text x="0" y="38" fontSize="42" fill="#635bff" fontFamily="sans-serif" fontWeight="700">stripe</text>
            </svg>
            <span className="text-xs text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
              Powered by. *Upgrade or downgrade anytime. Cancel whenever you need.
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function SubscribeSearchPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Grant[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchesUsed, setSearchesUsed] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const remaining = SEARCH_LIMIT - searchesUsed;
  const isExhausted = searchesUsed >= SEARCH_LIMIT;

  // Open modal if navigated here with ?upgrade=1
  useEffect(() => {
    if (new URLSearchParams(location.search).get("upgrade") === "1") {
      setShowModal(true);
    }
  }, [location.search]);

  const handleSearch = () => {
    if (isExhausted) {
      setShowModal(true);
      return;
    }
    if (!query.trim()) return;
    setSearchesUsed((n) => n + 1);
    setResults(mockGrants);
    setHasSearched(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const openModal = () => setShowModal(true);

  return (
    <>
      {showModal && <UpgradeModal onClose={() => setShowModal(false)} />}

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
                <p className="text-sm font-medium text-gray-900 truncate" style={{ fontFamily: "Cabin, sans-serif" }}>
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
          {/* Top banner — dark teal with white text */}
          <div className="flex items-center justify-between px-6 py-2.5 bg-teal-600 shrink-0">
            <p className="text-xs text-white/90" style={{ fontFamily: "Cabin, sans-serif" }}>
              You have {remaining} free search{remaining !== 1 ? "es" : ""}. Your free searches will reset in 30 days, giving you 5 new searches to use.
            </p>
            <button
              onClick={openModal}
              className="text-xs font-semibold text-white underline underline-offset-2 hover:text-white/80 whitespace-nowrap ml-4 transition-colors"
              style={{ fontFamily: "Cabin, sans-serif" }}
            >
              Upgrade Now
            </button>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Content area */}
            <div className="flex-1 overflow-y-auto px-8 py-8">
              {/* Heading */}
              <div className="mb-4">
                <h1
                  className="text-3xl font-normal text-gray-900 mb-1"
                  style={{ fontFamily: "Lustria, serif" }}
                >
                  Grant Search
                </h1>
                <p className="text-base text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Discover funding tailored to your organization
                </p>
              </div>

              {/* Search bar */}
              <div className="flex gap-2 mb-6 rounded-xl border border-gray-200 bg-white shadow-sm p-1">
                <div className="flex-1 flex items-center gap-2 px-3">
                  <Search size={16} className="text-gray-400 shrink-0" />
                  {isExhausted ? (
                    <span className="text-sm text-gray-400 py-2" style={{ fontFamily: "Cabin, sans-serif" }}>
                      Upgrade to our gold tier for unlimited searches and regular email alerts for new opportunities
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Search for grants…"
                      className="flex-1 py-2 text-sm text-gray-900 bg-transparent focus:outline-none placeholder:text-gray-400"
                      style={{ fontFamily: "Cabin, sans-serif" }}
                    />
                  )}
                </div>
                <button
                  onClick={handleSearch}
                  className="shrink-0 rounded-lg bg-teal-600 px-6 py-2 text-sm font-semibold text-white hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  {isExhausted ? "Upgrade Now" : `Search (${remaining} Remaining)`}
                </button>
              </div>

              {/* Results or empty state */}
              {/* When exhausted, ALWAYS show empty state — never show results */}
              {isExhausted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center mb-5">
                    <Search size={30} className="text-teal-600" strokeWidth={1.5} />
                  </div>
                  <h2
                    className="text-xl font-semibold text-gray-900 mb-3"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Zero Free Searches Remain
                  </h2>
                  <div className="text-sm text-gray-600 mb-6 max-w-md" style={{ fontFamily: "Cabin, sans-serif" }}>
                    <p className="mb-2">In order to search for more grants, you must subscribe.</p>
                    <ul className="text-left inline-block space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 shrink-0">•</span>
                        <span>Get unlimited searches every month</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 shrink-0">•</span>
                        <span>Set weekly or monthly alerts for grants that match your needs</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={openModal}
                    className="rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Upgrade Now
                  </button>
                </div>
              ) : !hasSearched ? (
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
              ) : (
                <div>
                  <p className="text-sm text-gray-500 mb-4" style={{ fontFamily: "Cabin, sans-serif" }}>
                    <span className="font-semibold text-gray-900">{results.length}</span> grants found
                  </p>
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
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium shrink-0 ${statusColor(grant.status)}`}
                                style={{ fontFamily: "Cabin, sans-serif" }}
                              >
                                {grant.status}
                              </span>
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
                </div>
              )}
            </div>

            {/* Right rail */}
            <div className="w-72 shrink-0 border-l border-gray-200 px-5 py-6 overflow-y-auto">
              {/* Free searches card — teal when exhausted */}
              <div
                className={`rounded-xl border p-5 shadow-sm mb-4 ${
                  isExhausted ? "bg-teal-600 border-teal-600" : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={18} className={isExhausted ? "text-white" : "text-teal-600"} strokeWidth={2} />
                  <p
                    className={`text-sm font-semibold ${isExhausted ? "text-white" : "text-gray-900"}`}
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    {searchesUsed}/{SEARCH_LIMIT} Free Searches
                  </p>
                </div>

                {isExhausted ? (
                  <div className="mb-4">
                    <p className="text-xs text-white/80 mb-2" style={{ fontFamily: "Cabin, sans-serif" }}>
                      All free searches have been used
                    </p>
                    <p className="text-xs text-white/80 mb-1" style={{ fontFamily: "Cabin, sans-serif" }}>
                      Upgrade to unlock:
                    </p>
                    <ul className="text-xs text-white/80 space-y-0.5 list-disc list-inside" style={{ fontFamily: "Cabin, sans-serif" }}>
                      <li>Manage up to 5 grants at the same time</li>
                      <li>AI-powered grant drafting</li>
                      <li>Collaborate with your team</li>
                      <li>Built-in fact-checking for accuracy</li>
                    </ul>
                  </div>
                ) : (
                  <div>
                    <div className="w-full bg-white/30 rounded-full h-1.5 mb-3">
                      <div
                        className="h-1.5 rounded-full bg-teal-500 transition-all"
                        style={{ width: `${(searchesUsed / SEARCH_LIMIT) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mb-4" style={{ fontFamily: "Cabin, sans-serif" }}>
                      {remaining} of {SEARCH_LIMIT} free searches remaining this month.
                    </p>
                  </div>
                )}

                <button
                  onClick={openModal}
                  className={`w-full rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isExhausted
                      ? "bg-white text-teal-600 hover:bg-gray-50 focus:ring-white"
                      : "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500"
                  }`}
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
