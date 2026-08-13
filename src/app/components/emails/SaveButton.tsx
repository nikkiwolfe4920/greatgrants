import { Bookmark } from "lucide-react";
import { Button } from "../ui/button";
import { useSavedGrants } from "@/hooks/useSavedGrants";

/**
 * The same "Save" toggle used on grant cards in GrantSearch.tsx — identical
 * styling and behavior, backed by the same useSavedGrants hook. Save and Get
 * Alert are independent actions (see useSavedGrants.ts / useGrantAlerts.ts),
 * so this never touches alert state.
 */
export function SaveButton({ grant }: { grant: { id: string; title: string } }) {
  const { isGrantSaved, saveGrant, unsaveGrant } = useSavedGrants();
  const saved = isGrantSaved(grant.id);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => (saved ? unsaveGrant(grant) : saveGrant(grant))}
      className={`gap-1.5 ${
        saved
          ? "border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100"
          : "border-gray-200 hover:border-teal-200 hover:bg-teal-50"
      }`}
    >
      <Bookmark className={`w-3.5 h-3.5 ${saved ? "fill-current" : ""}`} />
      {saved ? "Unsave" : "Save"}
    </Button>
  );
}
