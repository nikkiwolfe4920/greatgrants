import { useEffect } from "react";
import { useNavigate } from "react-router";

// The upgrade modal is now rendered inline on the search page.
// This route simply redirects there with the modal open.
export function SubscribeUpgradeModalPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/subscribe/search?upgrade=1", { replace: true });
  }, [navigate]);
  return null;
}
