import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  Search,
  Globe,
  Building2,
  UserCircle2,
  LockKeyhole,
  MapPin,
  Users,
  Plus,
  Check,
  ChevronsUpDown,
  X,
  List,
  LayoutGrid,
  ArrowUpDown,
  Download,
} from "lucide-react";
import { Logo } from "../components/Logo";
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
import { GrantResultCard, type GrantResultCardGrant } from "../components/GrantResultCard";

/* ─────────────────────────────────────────────────────────────────
   /super-admin-p — Private Opportunities (Super Admin)

   Same Keyword / Geographic Focus / People Served search pattern used
   elsewhere in the product, and the same GrantResultCard for results —
   minus the match badge, Project Fit, Word Match, Last viewed, Exclude
   and Watch, which don't apply to a Super Admin browsing private
   opportunities. Spans the full width of the page (no max-width).
───────────────────────────────────────────────────────────────── */

const NAV_ITEMS = [
  { label: "Global Grant Search", icon: Globe, path: "/super-admin/search" },
  { label: "All Organizations", icon: Building2, path: null },
  { label: "All Users", icon: UserCircle2, path: null },
  { label: "Private Opportunities", icon: LockKeyhole, path: "/super-admin-p" },
] as const;

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

interface PrivateOpportunity extends GrantResultCardGrant {
  states: string[];
  populations: string[];
}

const PRIVATE_OPPORTUNITIES: PrivateOpportunity[] = [
  {
    id: "po-1",
    title: "Harbor Light Family Foundation — Youth Opportunity Fund",
    description: "Multi-year support for after-school and mentoring programs serving children and youth in coastal communities.",
    status: "Open",
    maxAmount: 75000,
    location: "California, Oregon, Washington",
    closeDate: "Dec 15, 2026",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    states: ["California", "Oregon", "Washington"],
    populations: ["Children / Youth"],
  },
  {
    id: "po-2",
    title: "Meridian Community Foundation — Housing Stability Grants",
    description: "Invitation-only grants for organizations providing rapid rehousing and eviction prevention services.",
    status: "Open",
    maxAmount: 150000,
    location: "Texas",
    closeDate: "Jan 31, 2027",
    image: "https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtZW50b3JpbmclMjB5b3V0aCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzE5NDQwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Texas"],
    populations: ["Homeless Individuals", "Low-Income Families"],
  },
  {
    id: "po-3",
    title: "Silverleaf Corporate Giving — Veterans Workforce Initiative",
    description: "Funds job training and placement programs that help veterans transition into civilian careers.",
    status: "Pending",
    maxAmount: 50000,
    location: "Virginia, Maryland, District of Columbia",
    closeDate: "Mar 1, 2027",
    image: "https://images.unsplash.com/photo-1753185234794-e3b41b94a352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjB3b3JraW5nfGVufDF8fHx8MTc3MTkxNzM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Virginia", "Maryland", "District of Columbia"],
    populations: ["Veterans"],
  },
  {
    id: "po-4",
    title: "Oak & Ember Trust — Aging in Place Program",
    description: "Supports home-based care, transportation and social connection programs for seniors and elders.",
    status: "Closed",
    maxAmount: 40000,
    location: "New York",
    closeDate: "Sep 30, 2026",
    image: "https://images.unsplash.com/photo-1611956565880-10e29a417648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMGJ1c2luZXNzJTIwb3duZXJ8ZW58MXx8fHwxNzcxODYzODU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["New York"],
    populations: ["Seniors / Elderly", "People with Disabilities"],
  },
  {
    id: "po-5",
    title: "Northstar Philanthropies — Newcomer Integration Fund",
    description: "Language access, legal aid and community navigation programs for immigrants and refugees.",
    status: "Open",
    maxAmount: 100000,
    location: "Minnesota, Illinois",
    closeDate: "Feb 14, 2027",
    image: "https://images.unsplash.com/photo-1765109384317-592bf3852007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21lbiUyMHRlYW13b3JrfGVufDF8fHx8MTc3MTk0NDAyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Minnesota", "Illinois"],
    populations: ["Immigrants / Refugees"],
  },
  {
    id: "po-6",
    title: "Cedar Ridge Family Foundation — Rural Health Access",
    description: "Mobile clinics and telehealth partnerships serving low-income rural families.",
    status: "Open",
    maxAmount: 120000,
    location: "Montana, Idaho",
    closeDate: "Jan 10, 2027",
    image: "https://images.unsplash.com/photo-1634872583967-6417a8638a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBzY2llbmNlfGVufDF8fHx8MTc3MTg1NTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Montana", "Idaho"],
    populations: ["Low-Income Families", "Seniors / Elderly"],
  },
  {
    id: "po-7",
    title: "Lakeshore Giving Circle — Inclusive Recreation Grants",
    description: "Adaptive sports and recreation programs for people with disabilities.",
    status: "Open",
    maxAmount: 35000,
    location: "Michigan, Ohio",
    closeDate: "Dec 1, 2026",
    image: "https://images.unsplash.com/photo-1766846573044-f1107ca5418b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRzJTIwY3VsdHVyZSUyMGNvbW11bml0eSUyMHRoZWF0ZXJ8ZW58MXx8fHwxNzcxOTQ0MDIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Michigan", "Ohio"],
    populations: ["People with Disabilities", "Children / Youth"],
  },
  {
    id: "po-8",
    title: "Tribal Futures Trust — Cultural Preservation Fund",
    description: "Language revitalization and cultural programming led by Indigenous communities.",
    status: "Pending",
    maxAmount: 90000,
    location: "Arizona, New Mexico",
    closeDate: "Apr 15, 2027",
    image: "https://images.unsplash.com/photo-1760033444489-462f148d598b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGJ1c2luZXNzJTIwZmFybSUyMGNvdW50cnlzaWRlfGVufDF8fHx8MTc3MTk0NDAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Arizona", "New Mexico"],
    populations: ["Indigenous Communities"],
  },
  {
    id: "po-9",
    title: "Greenway Corporate Foundation — Neighborhood Revitalization",
    description: "Community-led housing, green space and small business projects in underinvested neighborhoods.",
    status: "Open",
    maxAmount: 250000,
    location: "Georgia, Florida",
    closeDate: "Feb 28, 2027",
    image: "https://images.unsplash.com/photo-1758936381780-8092bc60e153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGhvdXNpbmd8ZW58MXx8fHwxNzcxOTQ0MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Georgia", "Florida"],
    populations: ["Low-Income Families", "Homeless Individuals"],
  },
  {
    id: "po-10",
    title: "Brightpath Family Foundation — Early Literacy Initiative",
    description: "Reading programs and family engagement for children in under-resourced schools.",
    status: "Open",
    maxAmount: 60000,
    location: "North Carolina, South Carolina",
    closeDate: "Jan 20, 2027",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    states: ["North Carolina", "South Carolina"],
    populations: ["Children / Youth"],
  },
  {
    id: "po-11",
    title: "Summit Community Foundation — Arts for All",
    description: "Community theater, music and visual arts programs that reach youth and seniors.",
    status: "Closed",
    maxAmount: 30000,
    location: "Colorado",
    closeDate: "Oct 15, 2026",
    image: "https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtZW50b3JpbmclMjB5b3V0aCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzE5NDQwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Colorado"],
    populations: ["Children / Youth", "Seniors / Elderly"],
  },
  {
    id: "po-12",
    title: "Riverbend Trust — Emergency Shelter Support",
    description: "Operating support for emergency shelters and transitional housing providers.",
    status: "Open",
    maxAmount: 200000,
    location: "Pennsylvania, New Jersey",
    closeDate: "Mar 15, 2027",
    image: "https://images.unsplash.com/photo-1753185234794-e3b41b94a352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjB3b3JraW5nfGVufDF8fHx8MTc3MTkxNzM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Pennsylvania", "New Jersey"],
    populations: ["Homeless Individuals"],
  },
  {
    id: "po-13",
    title: "Harvest Table Foundation — Food Security Fund",
    description: "Food bank, pantry and meal delivery programs serving families and seniors.",
    status: "Open",
    maxAmount: 80000,
    location: "Wisconsin, Iowa",
    closeDate: "Feb 1, 2027",
    image: "https://images.unsplash.com/photo-1611956565880-10e29a417648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMGJ1c2luZXNzJTIwb3duZXJ8ZW58MXx8fHwxNzcxODYzODU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Wisconsin", "Iowa"],
    populations: ["Low-Income Families", "Seniors / Elderly"],
  },
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
      {/* Admin sidebar */}
      <aside className="w-64 shrink-0 border-r border-gray-200 bg-white flex flex-col">
        <div className="px-4 py-3 border-b border-gray-200">
          <Logo />
        </div>

        <nav className="flex-1 min-h-0 overflow-y-auto p-3">
          <p className="px-3 text-[10px] font-bold text-gray-400 leading-6 uppercase">Admin</p>
          <ul className="flex flex-col gap-0.5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = item.path === "/super-admin-p";
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
                  <GrantResultCard key={o.id} grant={o} onOpen={() => navigate(`/grant/${o.id}`)} />
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
