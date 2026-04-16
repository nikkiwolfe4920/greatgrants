import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router";
import logoImg from "figma:asset/80f16235e4f02631f57c6cf6e509cba581c33eb4.png";
import { 
  Home, 
  LogOut,
  Loader2,
  Plus,
  ChevronRight,
  ChevronDown,
  Settings,
  Building2
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";

const organizations = [
  { id: "1", name: "Great Grants Foundation", initials: "GG" },
  { id: "2", name: "Community Impact Fund", initials: "CI" },
  { id: "3", name: "Tech for Good Alliance", initials: "TG" },
];

const VALID_ORGANIZATIONS = organizations.map(org => org.name);

interface Section {
  id: string;
  name: string;
}

interface Application {
  id: string;
  title: string;
  sections: Section[];
}

const mockApplications: Application[] = [
  {
    id: "1",
    title: "Administration for Community L...",
    sections: [
      { id: "s1", name: "Mission & Vision" },
      { id: "s2", name: "Focus Area" },
      { id: "s3", name: "Program Details" },
      { id: "s4", name: "Performance Metrics" },
      { id: "s5", name: "Budget" },
      { id: "s6", name: "Narrative" },
      { id: "s7", name: "Documents" },
      { id: "s8", name: "Compliance" },
      { id: "s9", name: "Eligibility" },
    ]
  },
  {
    id: "2",
    title: "FY26 National Network Cooperat...",
    sections: [
      { id: "s1", name: "Mission & Vision" },
      { id: "s2", name: "Focus Area" },
      { id: "s3", name: "Program Details" },
      { id: "s4", name: "Performance Metrics" },
      { id: "s5", name: "Budget" },
      { id: "s6", name: "Narrative" },
      { id: "s7", name: "Documents" },
      { id: "s8", name: "Compliance" },
      { id: "s9", name: "Eligibility" },
    ]
  }
];

export function AppNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  
  // Initialize with Great Grants Foundation as the absolute default
  const [selectedOrganization, setSelectedOrganization] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('selectedOrganization');
      console.log('AppNav initializing with stored value:', stored);
      // Only use stored value if it's valid, otherwise default to Great Grants Foundation
      if (stored && VALID_ORGANIZATIONS.includes(stored)) {
        console.log('Using stored organization:', stored);
        return stored;
      }
      // Set default and save to localStorage
      console.log('Setting default to Great Grants Foundation');
      localStorage.setItem('selectedOrganization', 'Great Grants Foundation');
      return 'Great Grants Foundation';
    }
    return 'Great Grants Foundation';
  });
  
  const [isLoadingOrganization, setIsLoadingOrganization] = useState(false);
  const [expandedApp, setExpandedApp] = useState<string>("1");
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  // Listen for localStorage changes and re-sync
  useEffect(() => {
    const handleStorageChange = () => {
      const stored = localStorage.getItem('selectedOrganization');
      console.log('Storage event detected, new value:', stored);
      if (stored && VALID_ORGANIZATIONS.includes(stored) && stored !== selectedOrganization) {
        console.log('Updating selectedOrganization to:', stored);
        setSelectedOrganization(stored);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [selectedOrganization]);

  const handleOrganizationSwitch = (orgName: string) => {
    setIsLoadingOrganization(true);
    setSelectedOrganization(orgName);
    
    // Save to localStorage so OrganizationsPage can read it
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedOrganization', orgName);
    }
    
    setTimeout(() => {
      setIsLoadingOrganization(false);
    }, 1200);
  };

  const isActive = (path: string) => location.pathname === path;
  const isApplicationsPage = location.pathname === "/applications";
  const isApplicationSectionPage = location.pathname.startsWith("/application/");

  useEffect(() => {
    if (params.appId) {
      setExpandedApp(params.appId);
    }
  }, [params.appId]);

  return (
    <>
      {/* Loading Overlay */}
      {isLoadingOrganization && (
        <div className="fixed inset-0 bg-gray-900/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm mx-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-4">
                <Loader2 className="w-8 h-8 text-teal-600 animate-spin" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Switching Organization
              </h3>
              <p className="text-sm text-gray-600">
                Loading {selectedOrganization}...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Left Navigation */}
      <aside className="w-64 border-r border-gray-200 flex flex-col bg-white">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <img src={logoImg} alt="Great Grants" className="h-6" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-1">
            <li>
              <button 
                onClick={() => navigate("/")}
                className={`flex items-center gap-2 px-3 py-2 w-full text-left text-sm rounded-md transition-colors ${
                  isActive("/") 
                    ? "bg-gray-100 text-gray-900 font-medium" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Home className="w-4 h-4" />
                Home
              </button>
            </li>
            
            <li>
              <button 
                onClick={() => navigate("/applications")}
                className={`px-3 py-2 w-full text-left rounded-md transition-colors ${
                  isActive("/applications") 
                    ? "bg-gray-100 text-gray-900" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                style={{ fontFamily: 'Cabin, sans-serif', fontWeight: isActive("/applications") ? 600 : 400, fontSize: '14px' }}
              >
                All Applications
              </button>
              
              {/* Nested Application List - Only show when on Applications page */}
              {isApplicationsPage && (
                <ul className="ml-3 mt-1 space-y-1">
                  {mockApplications.map((app) => (
                    <li key={app.id}>
                      <button
                        onClick={() => setExpandedApp(expandedApp === app.id ? "" : app.id)}
                        className="flex items-center gap-2 px-3 py-1.5 w-full text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md group"
                      >
                        {expandedApp === app.id ? (
                          <ChevronDown className="w-3 h-3 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="w-3 h-3 flex-shrink-0" />
                        )}
                        <span className="truncate text-xs font-medium">
                          {app.title}
                        </span>
                      </button>
                      
                      {/* Sections */}
                      {expandedApp === app.id && (
                        <ul className="ml-5 mt-1 space-y-0.5">
                          {app.sections.map((section) => (
                            <li key={section.id}>
                              <button
                                onClick={() => setSelectedSection(section.id)}
                                className={`px-3 py-1.5 w-full text-left text-xs rounded-md transition-colors ${
                                  selectedSection === section.id
                                    ? "bg-gray-100 text-gray-900 font-medium"
                                    : "text-gray-600 hover:bg-gray-50"
                                }`}
                              >
                                {section.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            
            <li>
              <button 
                onClick={() => navigate("/search")}
                className={`px-3 py-2 w-full text-left rounded-md transition-colors ${
                  isActive("/search") 
                    ? "bg-gray-100 text-gray-900" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                style={{ fontFamily: 'Cabin, sans-serif', fontWeight: isActive("/search") ? 600 : 400, fontSize: '14px' }}
              >
                Grant Search
              </button>
            </li>
            
            <li>
              <button 
                onClick={() => navigate("/organization")}
                className={`px-3 py-2 w-full text-left rounded-md transition-colors ${
                  isActive("/organization") 
                    ? "bg-gray-100 text-gray-900" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                style={{ fontFamily: 'Cabin, sans-serif', fontWeight: isActive("/organization") ? 600 : 400, fontSize: '14px' }}
              >
                Organization Profile
              </button>
            </li>
            
            <li>
              <button 
                onClick={() => navigate("/settings")}
                className={`px-3 py-2 w-full text-left rounded-md transition-colors ${
                  isActive("/settings") 
                    ? "bg-gray-100 text-gray-900" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                style={{ fontFamily: 'Cabin, sans-serif', fontWeight: isActive("/settings") ? 600 : 400, fontSize: '14px' }}
              >
                Account Settings
              </button>
            </li>
          </ul>
        </nav>

        {/* User Avatar Dropdown */}
        <div className="p-4 border-t border-gray-200">
          {/* DEBUG: Clear localStorage button */}
          <button 
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="w-full mb-2 px-3 py-1.5 text-xs bg-red-50 text-red-700 rounded-md hover:bg-red-100 transition-colors"
          >
            🔧 Debug: Clear Storage & Reload
          </button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-3 w-full hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#E9EAEB] flex items-center justify-center relative">
                  <span className="text-[#181D27] text-xs font-semibold">OR</span>
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="text-sm font-medium text-gray-900">Olivia Rhye</div>
                  <div className="text-xs text-gray-500 truncate">{selectedOrganization}</div>
                </div>
                <Plus className="w-4 h-4 text-gray-400 flex-shrink-0" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 p-0">
              {/* Switch Organizations Section */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Switch organizations</h3>
                <div className="space-y-2">
                  {organizations.map((org) => (
                    <button
                      key={org.id}
                      onClick={() => handleOrganizationSwitch(org.name)}
                      className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-gray-600">{org.initials}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 flex-1 text-left">{org.name}</span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        selectedOrganization === org.name
                          ? "border-teal-600 bg-teal-600"
                          : "border-gray-300 group-hover:border-gray-400"
                      }`}>
                        {selectedOrganization === org.name && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <DropdownMenuSeparator />

              {/* Account Settings */}
              <DropdownMenuItem onClick={() => navigate("/settings")} className="gap-3 py-3 mx-2 rounded-lg">
                <Settings className="w-4 h-4 text-gray-500" />
                <div className="flex-1 text-sm font-medium">Account settings</div>
                <span className="text-xs text-gray-400 font-mono">⌘S</span>
              </DropdownMenuItem>

              {/* Organizations & Roles */}
              <DropdownMenuItem onClick={() => navigate("/organizations")} className="gap-3 py-3 mx-2 rounded-lg">
                <Building2 className="w-4 h-4 text-gray-500" />
                <div className="flex-1 text-sm font-medium">Organizations & Roles</div>
              </DropdownMenuItem>

              {/* Sign Out */}
              <DropdownMenuItem onClick={() => navigate("/signin")} className="gap-3 py-3 mx-2 mb-2 rounded-lg bg-gray-50">
                <LogOut className="w-4 h-4 text-gray-500" />
                <div className="flex-1 text-sm font-medium">Sign out</div>
                <span className="text-xs text-gray-400 font-mono">⌃⌘Q</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>
    </>
  );
}