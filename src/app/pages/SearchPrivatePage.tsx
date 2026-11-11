import { GrantSearch } from "../components/GrantSearch";

/**
 * SearchPrivatePage — a duplicate of GrantSearchPage (/search) with one
 * addition: a private opportunity (Figma node 17516:54036) is permanently
 * pinned to the top of the results list. It's always visible, ignores the
 * query and filters, can't be unpinned, and stays on screen while scrolling.
 * See PinnedPrivateOpportunity.
 */
export function SearchPrivatePage() {
  return <GrantSearch pinnedPrivate />;
}
