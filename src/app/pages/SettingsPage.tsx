import { AccountSettingsComprehensive } from "../components/AccountSettingsComprehensive";

export function SettingsPage() {
  return (
    <>
      <style>{`
        /* Hide the duplicate sidebar in AccountSettingsComprehensive */
        .settings-wrapper > div > aside {
          display: none !important;
        }
        .settings-wrapper > div {
          display: flex !important;
        }
        .settings-wrapper > div > main {
          flex: 1 !important;
        }
      `}</style>
      <div className="settings-wrapper">
        <AccountSettingsComprehensive />
      </div>
    </>
  );
}
