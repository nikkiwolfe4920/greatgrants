import { BrowserRouter, Routes, Route } from 'react-router'
import { SharedSidebar } from '@/components/features/SharedSidebar'
import { Toaster } from '@/components/ui/sonner'
import GrantSearchPage from './pages/GrantSearchPage'
import ApplicationsPage from './pages/ApplicationsPage'
import OrganizationsPage from './pages/OrganizationsPage'
import MyProgramsPage from './pages/MyProgramsPage'
import GrantReadinessPage from './pages/GrantReadinessPage'
import AccountSettingsPage from './pages/AccountSettingsPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-full bg-[var(--gray-50)]">
        <SharedSidebar />
        <main className="flex-1 min-w-0 overflow-hidden flex flex-col bg-white">
          <Routes>
            <Route path="/" element={<GrantSearchPage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
            <Route path="/organizations" element={<OrganizationsPage />} />
            <Route path="/programs" element={<MyProgramsPage />} />
            <Route path="/readiness" element={<GrantReadinessPage />} />
            <Route path="/settings" element={<AccountSettingsPage />} />
          </Routes>
        </main>
      </div>
      <Toaster />
    </BrowserRouter>
  )
}
