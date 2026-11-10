import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Search,
  MapPin,
  Users,
  Plus,
  Check,
  X,
  List,
  LayoutGrid,
  ArrowUpDown,
  Download,
} from "lucide-react";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { PRIVATE_OPPORTUNITIES } from "@/data/privateOpportunities";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { TooltipProvider } from "../components/ui/tooltip";
import { GrantResultCard } from "../components/GrantResultCard";

/* ─────────────────────────────────────────────────────────────────
   /super-admin-p — Private Opportunities (Super Admin)

   Same Keyword / Geographic Focus / People Served search pattern used
   elsewhere in the product, and the same GrantResultCard for results —
   minus the match badge, Project Fit, Word Match, Last viewed, Exclude
   and Watch, which don't apply to a Super Admin browsing private
   opportunities. Spans the full width of the page (no max-width).
───────────────────────────────────────────────────────────────── */

const PREDEFINED_POPULATIONS = [
  "Children / Youth",
  "Homeless Individuals",
  "Seniors / Elderly",
  "People with Disabilities",
  "Immigrants / Refugees",
  "Veterans",
  "Low-Income Families",
  "Indigenous Communities",
];

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

type SortKey = "relevance" | "amount" | "deadline" | "recent";
const SORT_LABELS: Record<SortKey, string> = {
  relevance: "Relevance",
  amount: "Funding Amount",
  deadline: "Deadline",
  recent: "Recently Added",
};

const RECENT_SEARCHES: string[][] = [
  ["#KeywordEntered", "#attribute", "#attribute", "#attribute", "#attribute"],
  ["#KeywordEntered", "#attribute", "#attribute"],
];

interface GeoLocation {
  id: string;
  country: string;
  state: string;
}

interface Criteria {
  keyword: string;
  locations: GeoLocation[];
  populations: string[];
}

const EMPTY_CRITERIA: Criteria = { keyword: "", locations: [], populations: [] };

function SectionCard({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: typeof Search;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 text-teal-600 shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
            {title} <span className="text-red-500">*</span>
          </h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

export function SuperAdminPrivateOpportunitiesPage() {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const [country, setCountry] = useState("USA");
  const [state, setState] = useState("");
  const [locations, setLocations] = useState<GeoLocation[]>([]);
  const [populations, setPopulations] = useState<string[]>([]);
  const [customCategories, setCustomCategories] = useState<string[]>([]);
  const [addingCategory, setAddingCategory] = useState(false);
  const [categoryDraft, setCategoryDraft] = useState("");
  const [submitted, setSubmitted] = useState<Criteria | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [sortBy, setSortBy] = useState<SortKey>("relevance");

  const hasInput = keyword.trim() !== "" || locations.length > 0 || populations.length > 0;

  function addLocation() {
    if (!country || !state) return;
    if (locations.some((l) => l.country === country && l.state === state)) {
      setState("");
      return;
    }
    setLocations((prev) => [...prev, { id: `${country}-${state}`, country, state }]);
    setState("");
  }

  function togglePopulation(name: string) {
    setPopulations((prev) => (prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]));
  }

  function addCustomCategory() {
    const name = categoryDraft.trim();
    if (!name) return;
    if (![...PREDEFINED_POPULATIONS, ...customCategories].includes(name)) {
      setCustomCategories((prev) => [...prev, name]);
    }
    setPopulations((prev) => (prev.includes(name) ? prev : [...prev, name]));
    setCategoryDraft("");
    setAddingCategory(false);
  }

  function clearAll() {
    setKeyword("");
    setCountry("USA");
    setState("");
    setLocations([]);
    setPopulations([]);
    setCustomCategories([]);
    setAddingCategory(false);
    setCategoryDraft("");
    setSubmitted(null);
  }

  function runSearch() {
    if (!hasInput) return;
    setSubmitted({ keyword: keyword.trim(), locations, populations });
  }

  const filtered = PRIVATE_OPPORTUNITIES.filter((o) => {
    if (!submitted) return true;
    const q = submitted.keyword.toLowerCase();
    const keywordOk = !q || o.title.toLowerCase().includes(q) || o.description.toLowerCase().includes(q);
    const geoOk = submitted.locations.length === 0 || submitted.locations.some((l) => o.states.includes(l.state));
    const popOk = submitted.populations.length === 0 || submitted.populations.some((p) => o.populations.includes(p));
    return keywordOk && geoOk && popOk;
  });

  const results = [...filtered].sort((a, b) => {
    if (sortBy === "amount") return b.maxAmount - a.maxAmount;
    if (sortBy === "deadline") return Date.parse(a.closeDate ?? "") - Date.parse(b.closeDate ?? "");
    return 0; // relevance / recently added: source order
  });

  const allPopulations = [...PREDEFINED_POPULATIONS, ...customCategories];

  return (
    <TooltipProvider>
    <div className="flex h-screen bg-white">
      <AdminSidebar />

      {/* Main content — full width of the page */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="w-full p-6">
          <h1
            className="text-2xl text-gray-900 leading-8 mb-6"
            style={{ fontFamily: "Lustria, serif" }}
          >
            Private Opportunities
          </h1>

          <div className="flex flex-col gap-5">
            {/* Keyword */}
            <SectionCard
              icon={Search}
              title="Keyword"
              description="Discover funding opportunities tailored to your needs."
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" />
                <Input
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") runSearch();
                  }}
                  placeholder="Search Grant Opportunities"
                  aria-label="Search grant opportunities"
                  className="h-[54px] pl-12 rounded-xl border-gray-200 shadow-sm"
                />
              </div>
            </SectionCard>

            {/* Geographic Focus */}
            <SectionCard
              icon={MapPin}
              title="Geographic Focus"
              description="Add at least one location where organization operates"
            >
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex flex-wrap items-end gap-3">
                  <div className="w-[264px] max-w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <Select value={country} onValueChange={setCountry}>
                      <SelectTrigger className="border border-gray-300">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USA">USA</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-[264px] max-w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State <span className="text-red-500">*</span>
                    </label>
                    <Select value={state} onValueChange={setState}>
                      <SelectTrigger className="border border-gray-300">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent className="max-h-64">
                        {US_STATES.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <button
                    type="button"
                    onClick={addLocation}
                    disabled={!country || !state}
                    aria-label="Add location"
                    className="size-9 shrink-0 flex items-center justify-center rounded-md border border-[#e9eaeb] bg-[#f5f5f5] text-gray-400 shadow-xs transition-colors enabled:bg-teal-600 enabled:border-teal-600 enabled:text-white enabled:hover:bg-teal-700 disabled:cursor-not-allowed"
                  >
                    <Check className="size-4" />
                  </button>
                </div>

                {locations.length > 0 && (
                  <ul className="flex flex-wrap gap-2 mt-4">
                    {locations.map((l) => (
                      <li
                        key={l.id}
                        className="flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full border border-teal-200 bg-teal-50 text-sm text-teal-900"
                      >
                        {l.state}, {l.country}
                        <button
                          type="button"
                          onClick={() => setLocations((prev) => prev.filter((x) => x.id !== l.id))}
                          aria-label={`Remove ${l.state}`}
                          className="p-0.5 rounded-full hover:bg-teal-100"
                        >
                          <X className="size-3.5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </SectionCard>

            {/* People Served */}
            <SectionCard
              icon={Users}
              title="People Served"
              description="Select at least one population organization supports"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                {allPopulations.map((name) => {
                  const selected = populations.includes(name);
                  return (
                    <button
                      key={name}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => togglePopulation(name)}
                      className={`p-2.5 rounded-lg border text-left transition-all text-sm ${
                        selected
                          ? "bg-teal-50 border-teal-600 text-teal-900"
                          : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                            selected ? "bg-teal-600 border-teal-600" : "border-gray-300"
                          }`}
                        >
                          {selected && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="font-medium">{name}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {addingCategory ? (
                <div className="flex items-center gap-2 max-w-md">
                  <Input
                    autoFocus
                    value={categoryDraft}
                    onChange={(e) => setCategoryDraft(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") addCustomCategory();
                      if (e.key === "Escape") {
                        setAddingCategory(false);
                        setCategoryDraft("");
                      }
                    }}
                    placeholder="Custom category name"
                    aria-label="Custom category name"
                  />
                  <Button size="sm" onClick={addCustomCategory} disabled={!categoryDraft.trim()}>
                    Add
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setAddingCategory(false);
                      setCategoryDraft("");
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <Button variant="outline" size="sm" className="gap-2" onClick={() => setAddingCategory(true)}>
                  <Plus className="w-3.5 h-3.5" />
                  Add Custom Category
                </Button>
              )}
            </SectionCard>

            {/* Actions */}
            <div className="flex items-center justify-end gap-4">
              <button
                type="button"
                onClick={clearAll}
                disabled={!hasInput && !submitted}
                className="text-xs font-medium underline text-gray-500 hover:text-gray-700 disabled:text-gray-300 disabled:no-underline disabled:cursor-not-allowed"
              >
                Clear all
              </button>
              <Button
                onClick={runSearch}
                disabled={!hasInput}
                className="gap-1.5 bg-teal-600 text-white hover:bg-teal-700 disabled:bg-[#f5f5f5] disabled:text-[#a4a7ae] disabled:border disabled:border-[#e9eaeb]"
              >
                <Search className="size-4" />
                Search
              </Button>
            </div>
          </div>

          {/* Recent searches */}
          <section className="mt-8">
            <p className="text-[9.5px] font-bold uppercase tracking-wide text-gray-400">Recent searches</p>
            <div className="flex flex-col">
              {RECENT_SEARCHES.map((tags, i) => (
                <div key={i} className="flex items-center gap-1.5 pt-2.5 pb-1 text-xs text-gray-500">
                  <Search className="size-3 text-gray-300 shrink-0" />
                  {tags.map((t, j) => (
                    <span key={j}>{t}</span>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Results — full width, same toolbar + cards as Grant Search */}
          <section className="mt-8 w-full" aria-live="polite">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {results.length} <span className="text-gray-500 font-normal">grants</span>
              </h2>
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-white border border-gray-200 rounded-lg p-0.5">
                  <button
                    type="button"
                    onClick={() => setViewMode("list")}
                    aria-label="List view"
                    aria-pressed={viewMode === "list"}
                    className={`p-1.5 rounded transition-colors ${
                      viewMode === "list" ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("grid")}
                    aria-label="Grid view"
                    aria-pressed={viewMode === "grid"}
                    className={`p-1.5 rounded transition-colors ${
                      viewMode === "grid" ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-2">
                      <ArrowUpDown className="w-3.5 h-3.5" />
                      <span className="text-sm">{SORT_LABELS[sortBy]}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-44">
                    {(Object.keys(SORT_LABELS) as SortKey[]).map((key) => (
                      <DropdownMenuItem key={key} onClick={() => setSortBy(key)}>
                        {SORT_LABELS[key]}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-3.5 h-3.5" />
                  Export
                </Button>
              </div>
            </div>

            {results.length === 0 ? (
              <div className="border border-gray-200 rounded-xl py-12 text-center">
                <p className="text-sm font-semibold text-gray-700">No private opportunities match</p>
                <p className="text-xs text-gray-400 mt-1">Try removing a filter or searching a different keyword.</p>
              </div>
            ) : (
              <div className={viewMode === "grid" ? "grid grid-cols-1 xl:grid-cols-2 gap-4" : "space-y-3"}>
                {results.map((o) => (
                  <GrantResultCard key={o.id} grant={o} onOpen={() => navigate(`/super-admin-op/${o.id}`)} />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
    </TooltipProvider>
  );
}
