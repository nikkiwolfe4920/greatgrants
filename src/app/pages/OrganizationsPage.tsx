import { Building2, Plus } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { CreateOrganizationModal } from "../components/CreateOrganizationModal";
import { OrganizationCard, Organization } from "../components/OrganizationCard";
import { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbHome,
} from "../components/ui/breadcrumb";

// Get selected org from localStorage or default to Great Grants Foundation
const getSelectedOrg = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('selectedOrganization') || 'Great Grants Foundation';
  }
  return 'Great Grants Foundation';
};

// Get created organizations from localStorage
const getCreatedOrganizations = (): Organization[] => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('createdOrganizations');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse created organizations:', e);
        return [];
      }
    }
  }
  return [];
};

// Save created organizations to localStorage
const saveCreatedOrganizations = (orgs: Organization[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('createdOrganizations', JSON.stringify(orgs));
  }
};

export function OrganizationsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedOrgName, setSelectedOrgName] = useState(getSelectedOrg());
  const [organizations, setOrganizations] = useState<Organization[]>(getCreatedOrganizations());

  // Listen for organization changes from sidebar
  useEffect(() => {
    const handleStorageChange = () => {
      setSelectedOrgName(getSelectedOrg());
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Poll for changes since storage event doesn't fire in same tab
    const interval = setInterval(() => {
      const currentSelected = getSelectedOrg();
      if (currentSelected !== selectedOrgName) {
        setSelectedOrgName(currentSelected);
      }
    }, 100);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [selectedOrgName]);

  // Persist organizations to localStorage whenever they change
  useEffect(() => {
    saveCreatedOrganizations(organizations);
  }, [organizations]);

  const handleOrganizationCreated = (orgName: string, adminEmail: string, adminName: string) => {
    const today = new Date();
    const formattedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
    
    // Generate initials from admin name
    const nameParts = adminName.trim().split(' ');
    const initials = nameParts.length >= 2 
      ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase()
      : nameParts[0].substring(0, 2).toUpperCase();

    const newOrg: Organization = {
      id: `org-${Date.now()}`,
      name: orgName,
      role: "admin",
      applications: [],
      members: [
        {
          id: "admin-1",
          name: adminName,
          email: adminEmail,
          role: "Admin",
          status: "pending",
          joinedDate: formattedDate,
          initials: initials,
          avatarColor: "#E5E7EB",
          canChangeRole: false,
          canRemove: false
        },
        {
          id: "member-2",
          name: "Olivia Rye",
          email: "olivia@example.com",
          role: "Consultant",
          status: "active",
          joinedDate: "1/14/2026",
          initials: "OR",
          avatarColor: "#E5E7EB",
          canChangeRole: false,
          canRemove: false
        }
      ]
    };

    setOrganizations(prev => [newOrg, ...prev]);
    
    // Don't switch context - stay on Great Grants Foundation where we created it
  };

  const handleRemoveOrganization = (orgId: string) => {
    setOrganizations(organizations.filter(org => org.id !== orgId));
  };

  // Transform organizations based on viewing context
  const displayedOrganizations = organizations.map(org => {
    if (selectedOrgName !== "Great Grants Foundation") {
      // When viewing from ANY organization except Great Grants Foundation: admin is active, members are editable
      return {
        ...org,
        members: org.members.map(member => {
          if (member.role === "Admin") {
            return {
              ...member,
              status: "active" as const,
              canChangeRole: false,
              canRemove: false
            };
          }
          return {
            ...member,
            canChangeRole: true,
            canRemove: true
          };
        })
      };
    } else {
      // When viewing from Great Grants Foundation: admin is pending, members not editable
      return {
        ...org,
        members: org.members.map(member => {
          if (member.role === "Admin") {
            return {
              ...member,
              status: "pending" as const,
              canChangeRole: false,
              canRemove: false
            };
          }
          return {
            ...member,
            canChangeRole: false,
            canRemove: false
          };
        })
      };
    }
  });

  // Determine if Create Organization button should show
  const showCreateButton = selectedOrgName === "Great Grants Foundation";

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="border-b border-gray-200 bg-white px-8 py-6">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">
                  <BreadcrumbHome />
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Organizations</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-start justify-between">
          <div>
            <div className="mb-3">
              <Building2
                className="w-8 h-8"
                strokeWidth={1.5}
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Lustria, serif' }}>
              My Organizations
            </h1>
            <p className="mt-1 text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Manage your organizations and team invitations
            </p>
          </div>
          {showCreateButton && (
            <Button 
              className="bg-teal-600 hover:bg-teal-700 text-white"
              onClick={() => setIsCreateModalOpen(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Organization
            </Button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {displayedOrganizations.length === 0 ? (
            // Empty State
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-16 flex flex-col items-center justify-center text-center">
              <div className="mb-6">
                <Building2 
                  className="w-16 h-16" 
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                No Organizations
              </h2>
              <p className="text-sm text-gray-600 mb-6" style={{ fontFamily: 'Cabin, sans-serif' }}>
                {selectedOrgName === "Great Grants Foundation" 
                  ? "Create an organization to get started"
                  : "No organizations found"
                }
              </p>
            </div>
          ) : (
            // Show all displayed organization cards
            <div className="space-y-6">
              {displayedOrganizations.map((org) => (
                <OrganizationCard 
                  key={org.id}
                  organization={org}
                  onRemove={() => handleRemoveOrganization(org.id)}
                  viewingFromContext={selectedOrgName}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Create Organization Modal */}
      <CreateOrganizationModal 
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
        onOrganizationCreated={handleOrganizationCreated}
      />
    </div>
  );
}