import { OrganizationProfileForm } from "../components/OrganizationProfileForm";

export function OrganizationPage() {
  return (
    <>
      <style>{`
        /* Hide the duplicate sidebar in OrganizationProfileForm */
        .organization-wrapper > div > aside {
          display: none !important;
        }
        .organization-wrapper > div {
          display: flex !important;
        }
        .organization-wrapper > div > main {
          flex: 1 !important;
        }
      `}</style>
      <div className="organization-wrapper">
        <OrganizationProfileForm onBack={() => {}} />
      </div>
    </>
  );
}
