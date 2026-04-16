import { Building2, FileText, Settings } from "lucide-react";
import logoImg from "figma:asset/80f16235e4f02631f57c6cf6e509cba581c33eb4.png";

interface SidebarProps {
  onNavigate?: (view: string) => void;
  currentView?: string;
}

export function Sidebar({ onNavigate, currentView = "organizations" }: SidebarProps) {
  return (
    <aside className="w-52 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <img src={logoImg} alt="Great Grants" className="h-6" />
      </div>
      
      <nav className="flex-1 p-3">
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => onNavigate?.("grants")}
              className={`flex items-center gap-3 px-3 py-2 w-full text-left rounded-md transition-colors ${
                currentView === "grants" 
                  ? "text-gray-700 bg-gray-100" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm">All Applications</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate?.("organizations")}
              className={`flex items-center gap-3 px-3 py-2 w-full text-left rounded-md transition-colors ${
                currentView === "organizations" 
                  ? "text-gray-700 bg-gray-100" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span className="text-sm">My Organizations</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate?.("settings")}
              className={`flex items-center gap-3 px-3 py-2 w-full text-left rounded-md transition-colors ${
                currentView === "settings" 
                  ? "text-gray-700 bg-gray-100" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Settings className="w-4 h-4" />
              <span className="text-sm">Account Settings</span>
            </button>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-orange-300"></div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900">Olivia Rhye</div>
            <div className="text-xs text-gray-500 truncate">olivia@untitledui.com</div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13.3333 8H2.66666M2.66666 8L6.66666 12M2.66666 8L6.66666 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}