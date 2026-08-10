import { useState } from "react";
import { Link } from "react-router";
import { Plus, ChevronDown, ChevronRight, X, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { EligibilityAssessmentResults } from "../components/EligibilityAssessmentResults";
import { OverallNofoFitScorecard } from "../components/OverallNofoFitScorecard";

interface FilterOption {
  id: string;
  label: string;
  subcategories?: FilterOption[];
}

// Only Quick Filters are exposed on this page: Application Status,
// Focus Areas (all options, flattened), and Subscription Tiers.
const filterCategories: FilterOption[] = [
  {
    id: "application-status",
    label: "Application Status",
    subcategories: [
      { id: "status-open", label: "Open" },
      { id: "status-pending", label: "Pending" },
      { id: "status-closed", label: "Closed" },
    ],
  },
  {
    id: "focus-areas",
    label: "Focus Areas",
    subcategories: [
      { id: "focus-literacy", label: "Literacy" },
      { id: "focus-scholarships", label: "Scholarships" },
      { id: "focus-stem-programs", label: "STEM Programs" },
      { id: "focus-vocational-training", label: "Vocational Training" },
      { id: "focus-medical-research", label: "Medical Research" },
      { id: "focus-mental-health", label: "Mental Health" },
      { id: "focus-public-health", label: "Public Health" },
      { id: "focus-wellness-programs", label: "Wellness Programs" },
      { id: "focus-affordable-housing", label: "Affordable Housing" },
      { id: "focus-infrastructure", label: "Infrastructure" },
      { id: "focus-economic-development", label: "Economic Development" },
      { id: "focus-public-safety", label: "Public Safety" },
    ],
  },
  {
    id: "subscription-tiers",
    label: "Subscription Tiers",
    subcategories: [
      { id: "tier-free", label: "Free" },
      { id: "tier-unlimited-search-discovery", label: "Unlimited Search & Discovery" },
      { id: "tier-ai-grant-writer", label: "AI Grant Writer" },
      { id: "tier-enterprise", label: "Enterprise" },
    ],
  },
];

export function CopyPage() {
  const [isFilterPopoverOpen, setIsFilterPopoverOpen] = useState(true);
  const [filterNavigationStack, setFilterNavigationStack] = useState<FilterOption[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<{ id: string; label: string; category: string }[]>([]);

  const handleFilterNavigation = (option: FilterOption) => {
    if (option.subcategories && option.subcategories.length > 0) {
      setFilterNavigationStack([...filterNavigationStack, option]);
      return;
    }

    const parentCategory = filterNavigationStack.length > 0
      ? filterNavigationStack[filterNavigationStack.length - 1].label
      : "Other";

    if (!appliedFilters.find(f => f.id === option.id)) {
      setAppliedFilters([...appliedFilters, { id: option.id, label: option.label, category: parentCategory }]);
    }

    setIsFilterPopoverOpen(false);
    setFilterNavigationStack([]);
  };

  const handleFilterBack = () => {
    setFilterNavigationStack(filterNavigationStack.slice(0, -1));
  };

  const removeAppliedFilter = (filterId: string) => {
    setAppliedFilters(appliedFilters.filter(f => f.id !== filterId));
  };

  const getCurrentFilterOptions = (): FilterOption[] => {
    if (filterNavigationStack.length === 0) {
      return filterCategories;
    }
    return filterNavigationStack[filterNavigationStack.length - 1].subcategories || [];
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Copy</h1>
        <p className="text-sm text-gray-500 mb-6">Add Filters menu — quick filters only</p>

        <div className="flex items-center gap-2 flex-wrap">
          {appliedFilters.map(filter => (
            <Badge
              key={filter.id}
              className="gap-1.5 pr-1 py-1.5 text-sm bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
            >
              <span className="font-medium">{filter.label}</span>
              <button
                onClick={() => removeAppliedFilter(filter.id)}
                className="hover:bg-black/10 rounded-full p-0.5 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </Badge>
          ))}

          <Popover open={isFilterPopoverOpen} onOpenChange={setIsFilterPopoverOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="gap-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-700 font-semibold"
              >
                <Plus className="w-4 h-4" />
                Add Filters
                <ChevronDown className={`w-4 h-4 transition-transform ${isFilterPopoverOpen ? 'rotate-180' : ''}`} />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-96 p-0"
              align="start"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                {filterNavigationStack.length > 0 ? (
                  <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-50 to-white border-b border-teal-100">
                    <button
                      onClick={handleFilterBack}
                      className="p-1.5 hover:bg-teal-100 rounded-lg transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-teal-600 rotate-180" />
                    </button>
                    <div className="flex-1">
                      <p className="text-sm text-teal-600 font-semibold">
                        {filterNavigationStack[filterNavigationStack.length - 1].label}
                      </p>
                      <p className="text-xs text-teal-600/70">Select an option</p>
                    </div>
                  </div>
                ) : (
                  <div className="px-4 py-3 bg-gradient-to-r from-teal-600 to-teal-500 border-b border-teal-700">
                    <p className="text-sm text-white font-semibold">Add Filters</p>
                    <p className="text-xs text-teal-100">Refine your grant search</p>
                  </div>
                )}

                <div className="max-h-[32rem] overflow-y-auto">
                  {filterNavigationStack.length === 0 && (
                    <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Quick Filters</p>
                    </div>
                  )}
                  <div className="py-1">
                    {getCurrentFilterOptions().map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleFilterNavigation(option)}
                        className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-teal-50 transition-colors group"
                      >
                        <span className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors">
                          {option.label}
                        </span>
                        {option.subcategories && option.subcategories.length > 0 && (
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="mt-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Eligibility Assessment Results
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Figma node 12683:25855, with an added 20/100 fit score meter. See the full 4-step
            workflow this feeds into at{" "}
            <Link to="/eligibility-assessment" className="text-teal-600 font-medium hover:underline inline-flex items-center gap-1">
              /eligibility-assessment
              <ArrowRight className="size-3.5" />
            </Link>
            .
          </p>
          <EligibilityAssessmentResults />
        </div>

        <div className="mt-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Overall NOFO Fit Scorecard
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Same card pattern, extended with a category breakdown and next steps
          </p>
          <OverallNofoFitScorecard />
        </div>
      </div>
    </div>
  );
}
