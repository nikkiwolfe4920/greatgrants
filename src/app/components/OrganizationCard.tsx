import { useState } from "react";
import { Building2, ChevronDown, ChevronUp, MoreVertical } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu";
import { MembersList, type Member } from "@/app/components/MembersList";
import { ApplicationsList, type Application } from "@/app/components/ApplicationsList";
import { BlankState } from "@/app/components/BlankState";
import { InviteMemberModal } from "@/app/components/InviteMemberModal";

export interface Organization {
  id: string;
  name: string;
  role: "owner" | "admin";
  applications: Application[];
  members: Member[];
}

interface OrganizationCardProps {
  organization: Organization;
  onRemove?: () => void;
  viewingFromContext?: string; // The organization context we're viewing from
}

export function OrganizationCard({ organization, onRemove, viewingFromContext }: OrganizationCardProps) {
  const [isExpanded, setIsExpanded] = useState(true); // Open by default
  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  const [members, setMembers] = useState<Member[]>(organization.members);

  // Determine if we're viewing from Great Grants Foundation or not
  const isViewingFromGreatGrants = viewingFromContext === "Great Grants Foundation";
  
  // Update member permissions based on viewing context
  const membersWithPermissions = members.map(member => ({
    ...member,
    canChangeRole: !isViewingFromGreatGrants,
    canRemove: !isViewingFromGreatGrants
  }));
  
  const handleRemoveOrganization = () => {
    if (onRemove) {
      onRemove();
    }
  };

  const handleMembersInvited = (invitedMembers: Array<{ email: string; role: string }>) => {
    const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    const newMembers: Member[] = invitedMembers.map((invited, index) => {
      const emailParts = invited.email.split('@');
      const name = emailParts[0].split('.').map(part => 
        part.charAt(0).toUpperCase() + part.slice(1)
      ).join(' ');
      
      const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
      
      // Generate a color based on email
      const colors = ['#E0E7FF', '#DBEAFE', '#FCE7F3', '#FEF3C7', '#D1FAE5', '#E5E7EB'];
      const colorIndex = invited.email.charCodeAt(0) % colors.length;
      
      return {
        id: `invited-${Date.now()}-${index}`,
        name: name,
        email: invited.email,
        role: invited.role,
        status: "pending" as const,
        joinedDate: currentDate,
        initials: initials,
        avatarColor: colors[colorIndex],
        canChangeRole: false,
        canRemove: true
      };
    });
    
    setMembers([...members, ...newMembers]);
  };
  
  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="flex items-center gap-4 p-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center flex-shrink-0">
            <Building2 className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          
          <div className="flex-1">
            <h3 className="font-medium text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
              {organization.name}
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-transparent">
                  <MoreVertical className="w-5 h-5 text-teal-600" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px] rounded-2xl border border-gray-200 shadow-lg p-2">
                <DropdownMenuItem 
                  className="text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-50 rounded-lg cursor-pointer text-base py-3 px-4 justify-center"
                  onClick={handleRemoveOrganization}
                >
                  Remove
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
        
        {isExpanded && (
          <div className="border-t border-gray-200">
            <Tabs defaultValue="members" className="w-full">
              <TabsList className="bg-white border-b border-gray-200 w-full justify-start rounded-none p-0 h-auto px-4">
                <TabsTrigger 
                  value="applications"
                  className="rounded-none !border-0 border-b-[3px] border-transparent data-[state=active]:!border-0 data-[state=active]:border-b-[3px] data-[state=active]:!border-b-teal-600 data-[state=active]:text-teal-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pt-3 pb-3 bg-transparent text-gray-600 hover:text-gray-900 shadow-none relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-transparent data-[state=active]:after:bg-teal-600"
                  style={{ fontFamily: 'Cabin, sans-serif' }}
                >
                  Applications
                  <Badge 
                    variant="secondary" 
                    className="ml-2 bg-gray-100 text-gray-700 hover:bg-gray-100 rounded-full px-2 h-5 text-xs min-w-[20px] flex items-center justify-center"
                    style={{ fontFamily: 'Cabin, sans-serif' }}
                  >
                    {organization.applications.length}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger 
                  value="members"
                  className="rounded-none !border-0 border-b-[3px] border-transparent data-[state=active]:!border-0 data-[state=active]:border-b-[3px] data-[state=active]:!border-b-teal-600 data-[state=active]:text-teal-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pt-3 pb-3 bg-transparent text-gray-600 hover:text-gray-900 shadow-none relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-transparent data-[state=active]:after:bg-teal-600"
                  style={{ fontFamily: 'Cabin, sans-serif' }}
                >
                  Members
                  <Badge 
                    variant="secondary" 
                    className="ml-2 bg-teal-100 text-teal-700 data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 hover:bg-teal-100 rounded-full px-2 h-5 text-xs min-w-[20px] flex items-center justify-center"
                    style={{ fontFamily: 'Cabin, sans-serif' }}
                  >
                    {members.length}
                  </Badge>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="applications" className="m-0 p-0">
                {organization.applications.length > 0 ? (
                  <ApplicationsList applications={organization.applications} />
                ) : (
                  <div className="py-12 px-6 text-center">
                    <p className="text-sm text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      No applications yet
                    </p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="members" className="m-0 p-0">
                <MembersList 
                  members={membersWithPermissions}
                  onInviteMember={() => setInviteModalOpen(true)}
                  showInviteButton={!isViewingFromGreatGrants}
                />
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
      
      <InviteMemberModal 
        open={inviteModalOpen}
        onOpenChange={setInviteModalOpen}
        organizationName={organization.name}
        onMembersInvited={handleMembersInvited}
      />
    </>
  );
}