import { createBrowserRouter, Navigate } from "react-router";
import { AppLayout } from "./components/AppLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { ApplicationsPage } from "./pages/ApplicationsPage";
import { ApplicationSectionPage } from "./pages/ApplicationSectionPage";
import { GrantSearchPage } from "./pages/GrantSearchPage";
import { GrantDetailPage } from "./pages/GrantDetailPage";
import { WatchListPage } from "./pages/WatchListPage";
import { OrganizationPage } from "./pages/OrganizationPage";
import { OrganizationsPage } from "./pages/OrganizationsPage";
import { SettingsPage } from "./pages/SettingsPage";
import { SignInPage } from "./pages/SignInPage";
import { MarketingPage } from "./pages/MarketingPage";
import { OnboardingPage } from "./pages/OnboardingPage";
import { OnboardingPage1 } from "./pages/OnboardingPage1";
import { OnboardingPage2 } from "./pages/OnboardingPage2";
import { OnboardingPage3 } from "./pages/OnboardingPage3";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";
import { MyGrantReadiness } from "./pages/MyGrantReadiness.tsx";
import { EligibilityAssessmentPage } from "./pages/EligibilityAssessmentPage";
import { DesignSystemPage } from "./pages/DesignSystemPage";
import { CopyPage } from "./pages/CopyPage";
import { EmailsPage } from "./pages/EmailsPage";
import { SuperAdminIAPage } from "./pages/SuperAdminIAPage";
import { SuperAdminSearchPage } from "./pages/SuperAdminSearchPage";
import { SubscribeEntryPage } from "./pages/SubscribeEntryPage";
import { SubscribeCreateAccountPage } from "./pages/SubscribeCreateAccountPage";
import { SubscribeOrgPage } from "./pages/SubscribeOrgPage";
import { SubscribeSearchPage } from "./pages/SubscribeSearchPage";
import { SubscribeUpgradeModalPage } from "./pages/SubscribeUpgradeModalPage";
import { SubscribeStripePage } from "./pages/SubscribeStripePage";
import { SubscribeAccountPage } from "./pages/SubscribeAccountPage";
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
    // Public, shareable demo walkthrough — deliberately outside AppLayout so
    // it renders its own marketing shell rather than the app sidebar.
    path: "/marketing",
    element: <MarketingPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/subscribe-entry",
    element: <SubscribeEntryPage />,
  },
  {
    path: "/subscribe/create-account",
    element: <SubscribeCreateAccountPage />,
  },
  {
    path: "/subscribe/org",
    element: <SubscribeOrgPage />,
  },
  {
    path: "/subscribe/search",
    element: <SubscribeSearchPage />,
  },
  {
    path: "/subscribe/upgrade-modal",
    element: <SubscribeUpgradeModalPage />,
  },
  {
    path: "/subscribe/stripe",
    element: <SubscribeStripePage />,
  },
  {
    path: "/subscribe/account",
    element: <SubscribeAccountPage />,
  },
  {
    path: "/design-system",
    element: <DesignSystemPage />,
  },
  {
    path: "/copy",
    element: <CopyPage />,
  },
  {
    path: "/emails",
    element: <EmailsPage />,
  },
  {
    path: "/super-admin",
    element: <SuperAdminIAPage />,
  },
  {
    path: "/super-admin/search",
    element: <SuperAdminSearchPage />,
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
        // Saved Grants has been merged into the Watch List — redirect any
        // old bookmarks/links rather than 404ing.
        path: "saved-grants",
        element: <Navigate to="/watch-list" replace />,
      },
      {
        path: "watch-list",
        element: <WatchListPage />,
      },
      {
        path: "grant/:id",
        element: <GrantDetailPage />,
      },
      {
        path: "eligibility-assessment",
        element: <EligibilityAssessmentPage />,
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