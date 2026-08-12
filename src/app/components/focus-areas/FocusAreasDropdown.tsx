import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/app/components/ui/command";
import { TooltipProvider } from "@/app/components/ui/tooltip";
import { useIsMobile } from "@/app/components/ui/use-mobile";
import {
  FOCUS_AREA_MAX_SELECTIONS,
  FOCUS_AREA_PARENT_ORDER,
  FOCUS_AREA_TAXONOMY,
  getAllFocusAreaLeaves,
} from "@/lib/constants/focus-areas";
import { FocusAreaOption } from "./FocusAreaOption";
import { FocusAreaParent } from "./FocusAreaParent";

interface FocusAreasDropdownProps {
  /** Currently selected leaf values. */
  value: string[];
  onToggle: (leaf: string) => void;
  atCap: boolean;
}

/**
 * Popover content for the Focus Areas field: type-ahead search across all
 * leaf values, or (when search is empty) the 20 parent categories with a
 * single expandable child list. Reuses the existing cmdk-based Command
 * primitives for the combobox shell; filtering/grouping logic is manual
 * (shouldFilter=false) since we need cross-category search plus a
 * hierarchical browse mode cmdk doesn't model on its own.
 */
export function FocusAreasDropdown({ value, onToggle, atCap }: FocusAreasDropdownProps) {
  const [search, setSearch] = useState("");
  const [expandedParent, setExpandedParent] = useState<string | null>(null);
  const [showAllParent, setShowAllParent] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const trimmedSearch = search.trim().toLowerCase();
  const isSearching = trimmedSearch.length > 0;
  const searchResults = isSearching
    ? getAllFocusAreaLeaves().filter(({ value: leaf }) =>
        leaf.toLowerCase().includes(trimmedSearch),
      )
    : [];

  const handleToggleExpand = (parent: string) => {
    setExpandedParent((current: string | null) => (current === parent ? null : parent));
    setShowAllParent(null);
  };

  return (
    <TooltipProvider>
      <Command shouldFilter={false} className="w-full">
        <CommandInput
          placeholder="Search focus areas..."
          value={search}
          onValueChange={setSearch}
          autoFocus={!isMobile}
        />

        {atCap && (
          <div className="px-3 py-2 text-xs font-medium text-amber-800 bg-amber-50 border-b border-amber-100">
            You've selected the maximum of {FOCUS_AREA_MAX_SELECTIONS} focus areas. Remove one to select another.
          </div>
        )}

        <CommandList className="max-h-[320px]">
          {isSearching ? (
            searchResults.length === 0 ? (
              <CommandEmpty>No focus areas found.</CommandEmpty>
            ) : (
              <CommandGroup
                heading={`${searchResults.length} result${searchResults.length === 1 ? "" : "s"}`}
              >
                {searchResults.map(({ value: leaf, parent }) => (
                  <FocusAreaOption
                    key={leaf}
                    value={leaf}
                    parentContext={parent}
                    isSelected={value.includes(leaf)}
                    atCap={atCap}
                    onToggle={onToggle}
                  />
                ))}
              </CommandGroup>
            )
          ) : (
            <div className="p-1">
              {FOCUS_AREA_PARENT_ORDER.map((parent) => (
                <FocusAreaParent
                  key={parent}
                  parent={parent}
                  options={FOCUS_AREA_TAXONOMY[parent]}
                  selectedValues={value}
                  expanded={expandedParent === parent}
                  onToggleExpand={() => handleToggleExpand(parent)}
                  showAll={showAllParent === parent}
                  onShowAll={() => setShowAllParent(parent)}
                  atCap={atCap}
                  onToggleLeaf={onToggle}
                />
              ))}
            </div>
          )}
        </CommandList>
      </Command>
    </TooltipProvider>
  );
}
