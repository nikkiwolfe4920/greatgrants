import { createBrowserRouter } from "react-router";
import { AppLayout } from "./components/AppLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { ApplicationsPage } from "./pages/ApplicationsPage";
import { ApplicationSectionPage } from "./pages/ApplicationSectionPage";
import { GrantSearchPage } from "./pages/GrantSearchPage";
import { GrantDetailPage } from "./pages/GrantDetailPage";
import { SavedGrantsPage } from "./pages/SavedGrantsPage";
import { OrganizationPage } from "./pages/OrganizationPage";
import { OrganizationsPage } from "./pages/OrganizationsPage";
import { SettingsPage } from "./pages/SettingsPage";
import { SignInPage } from "./pages/SignInPage";
import { OnboardingPage } from "./pages/OnboardingPage";
import { OnboardingPage1 } from "./pages/OnboardingPage1";
import { OnboardingPage2 } from "./pages/OnboardingPage2";
import { OnboardingPage3 } from "./pages/OnboardingPage3";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";
import { MyGrantReadiness } from "./pages/MyGrantReadiness.tsx";
import { ReadinessScoreProvider } from "./contexts/ReadinessScoreContext";
import { TooltipProvider } from "./components/ui/tooltip";

// Wrapper component to ensure all routes have access to the ReadinessScoreProvider
function LayoutWithProvider() {
  return (
    <TooltipProvider>
      <ReadinessScoreProvider>
        <AppLayout />
      </ReadinessScoreProvider>
    </TooltipProvider>
  );
}

const routes = [
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/onboarding",
    element: <OnboardingPage />,
  },
  {
    path: "/onboarding-1",
    element: <OnboardingPage1 />,
  },
  {
    path: "/onboarding-2",
    element: <OnboardingPage2 />,
  },
  {
    path: "/onboarding-3",
    element: <OnboardingPage3 />,
  },
  {
    path: "/",
    element: <LayoutWithProvider />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "applications",
        element: <ApplicationsPage />,
      },
      {
        path: "application/:applicationId/s/:sectionId",
        element: <ApplicationSectionPage />,
      },
      {
        path: "search",
        element: <GrantSearchPage />,
      },
      {
        path: "saved-grants",
        element: <SavedGrantsPage />,
      },
      {
        path: "grant/:id",
        element: <GrantDetailPage />,
      },
      {
        path: "organization",
        element: <OrganizationPage />,
      },
      {
        path: "organizations",
        element: <OrganizationsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "project-details",
        element: <ProjectDetailsPage />,
      },
      {
        path: "my-grant-readiness",
        element: <MyGrantReadiness />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);