import { useState } from "react";
import { useNavigate } from "react-router";
import { Logo } from "@/app/components/Logo";
import { OrganizationProfileForm } from "@/app/components/OrganizationProfileForm";
import { ReadinessScoreProvider } from "@/app/contexts/ReadinessScoreContext";
import { TooltipProvider } from "@/app/components/ui/tooltip";
import { FileText, Search, Star, Building2, LayoutGrid, Info, X } from "lucide-react";

function SubscribeOrgSidebar() {
  const navigate = useNavigate();
  return (
    <aside className="w-56 bg-white border-r border-gray-200 h-screen flex flex-col shrink-0">
      <div className="px-5 py-4 border-b border-gray-200">
        <Logo />
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <button
          className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-50 transition-colors text-left"
          style={{ fontFamily: "Cabin, sans-serif" }}
        >
          <FileText size={16} strokeWidth={1.75} />
          All Applications
        </button>
        <button
          onClick={() => navigate("/subscribe/search")}
          className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-50 transition-colors text-left"
          style={{ fontFamily: "Cabin, sans-serif" }}
        >
          <Search size={16} strokeWidth={1.75} />
          Grant Search
        </button>
        <button
          className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-50 transition-colors text-left"
          style={{ fontFamily: "Cabin, sans-serif" }}
        >
          <Star size={16} strokeWidth={1.75} />
          Favorites
        </button>
        <button
          className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 rounded-md text-left"
          style={{ fontFamily: "Cabin, sans-serif" }}
        >
          <Building2 size={16} strokeWidth={1.75} />
          Organization Profile
        </button>
        <button
          className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-50 transition-colors text-left"
          style={{ fontFamily: "Cabin, sans-serif" }}
        >
          <LayoutGrid size={16} strokeWidth={1.75} />
          My Programs
        </button>
      </nav>
      <div className="px-3 py-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-orange-300 shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900 truncate" style={{ fontFamily: "Cabin, sans-serif" }}>
              Your Account
            </p>
            <p className="text-xs text-gray-500 truncate" style={{ fontFamily: "Cabin, sans-serif" }}>
              Free Plan
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function SubscribeOrgPage() {
  // Banner dismissal lives in component state — reappears on page refresh
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <TooltipProvider>
      <ReadinessScoreProvider>
        <div className="flex h-screen bg-white overflow-hidden">
          <SubscribeOrgSidebar />
          <div className="flex flex-col flex-1 min-w-0">
            {/* Top banner — blue #0ba5ec per Figma 7207-39694 */}
            {bannerVisible && (
              <div
                className="flex items-center justify-between px-6 py-3 shrink-0 border-b border-black/10"
                style={{ backgroundColor: "#0ba5ec" }}
              >
                <div className="flex items-center gap-3">
                  {/* White circle with info icon */}
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-full shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <Info size={16} className="text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-white leading-5"
                      style={{ fontFamily: "Cabin, sans-serif" }}
                    >
                      Great Grants (Free Tier)
                    </p>
                    <p
                      className="text-xs leading-4"
                      style={{ fontFamily: "Cabin, sans-serif", color: "rgba(255,255,255,0.9)" }}
                    >
                      You have 5 free searches. Your free searches will reset in 30 days, giving you 5 new searches to use.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setBannerVisible(false)}
                  className="ml-4 shrink-0 text-white hover:text-white/70 transition-colors focus:outline-none"
                  aria-label="Dismiss banner"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              </div>
            )}

            {/* Main content — hide OrganizationProfileForm's built-in sidebar */}
            <div className="flex-1 overflow-auto subscribe-org-wrapper">
              <style>{`
                .subscribe-org-wrapper > div > aside { display: none !important; }
                .subscribe-org-wrapper > div { display: flex !important; }
                .subscribe-org-wrapper > div > main { flex: 1 !important; }
              `}</style>
              <OrganizationProfileForm onBack={() => {}} />
            </div>
          </div>
        </div>
      </ReadinessScoreProvider>
    </TooltipProvider>
  );
}
