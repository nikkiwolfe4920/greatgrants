import { useNavigate, useLocation } from "react-router";
import { ApplicationSectionPage } from "./ApplicationSectionPage";
import { PartnerSearchModal } from "../components/PartnerSearchModal";

const BACKDROP_PATH = "/application/1/s/s1";

/**
 * /partner-search-organizations — the "Add a partner" modal laid over
 * /application/1/s/s1. The application page is rendered as the backdrop (not
 * redirected to) so the URL stays shareable while the page stays visible
 * behind the overlay. Closing returns to wherever the user came from, or to
 * the application page when the modal URL was opened directly.
 */
export function PartnerSearchOrganizationsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const close = () => {
    if (location.key !== "default") navigate(-1);
    else navigate(BACKDROP_PATH, { replace: true });
  };

  return (
    <>
      <ApplicationSectionPage applicationId="1" sectionId="s1" />
      <PartnerSearchModal open onOpenChange={(open) => !open && close()} />
    </>
  );
}
