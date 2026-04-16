import { AccountSettingsComprehensive } from "../components/AccountSettingsComprehensive";

export function SettingsPageWrapper() {
  // Extract only the main content from AccountSettingsComprehensive
  // For now, render it but know it will have duplicate sidebar
  // TODO: Refactor AccountSettingsComprehensive to remove built-in sidebar
  return <AccountSettingsComprehensive />;
}
