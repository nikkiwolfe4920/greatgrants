import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Badge } from "@/app/components/ui/badge";

export interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  status?: "pending" | "active";
  joinedDate: string;
  initials: string;
  avatarColor: string;
  canChangeRole?: boolean; // Whether the role can be changed
  canRemove?: boolean; // Whether the member can be removed
}

interface MembersListProps {
  members: Member[];
  onInviteMember: () => void;
  showInviteButton?: boolean;
}

export function MembersList({ members, onInviteMember, showInviteButton = false }: MembersListProps) {
  const [pendingRoleChanges, setPendingRoleChanges] = useState<{ [key: string]: string }>({});
  const [pendingRemovals, setPendingRemovals] = useState<{ [key: string]: boolean }>({});

  const handleRoleChange = (memberId: string, newRole: string) => {
    setPendingRoleChanges((prev) => ({
      ...prev,
      [memberId]: newRole
    }));
  }

  const handleConfirmRoleChange = (memberId: string) => {
    // TODO: Implement actual role update logic
    console.log('Updating role for member:', memberId, 'to', pendingRoleChanges[memberId]);
    setPendingRoleChanges((prev) => {
      const updated = { ...prev };
      delete updated[memberId];
      return updated;
    });
  };

  const handleCancelRoleChange = (memberId: string) => {
    setPendingRoleChanges((prev) => {
      const updated = { ...prev };
      delete updated[memberId];
      return updated;
    });
  };

  const handleRemoveMember = (memberId: string) => {
    setPendingRemovals((prev) => ({
      ...prev,
      [memberId]: true
    }));
  };

  const handleConfirmRemoval = (memberId: string) => {
    // TODO: Implement actual member removal logic
    console.log('Removing member:', memberId);
    setPendingRemovals((prev) => {
      const updated = { ...prev };
      delete updated[memberId];
      return updated;
    });
  };

  const handleCancelRemoval = (memberId: string) => {
    setPendingRemovals((prev) => {
      const updated = { ...prev };
      delete updated[memberId];
      return updated;
    });
  };

  return (
    <div className="space-y-0">
      {members.map((member) => {
        const hasPendingChange = pendingRoleChanges[member.id] !== undefined;
        const hasPendingRemoval = pendingRemovals[member.id] === true;
        const currentRole = hasPendingChange ? pendingRoleChanges[member.id] : member.role.toLowerCase();

        return (
          <div 
            key={member.id}
            className="flex items-center gap-4 py-4 px-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors"
          >
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0"
              style={{ backgroundColor: member.avatarColor, color: '#374151' }}
            >
              {member.initials}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <div className="font-medium text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>{member.name}</div>
                {member.status === "pending" && (
                  <Badge 
                    variant="outline" 
                    className="border border-amber-700 bg-amber-50 text-amber-700 hover:bg-amber-50 px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{ fontFamily: 'Cabin, sans-serif' }}
                  >
                    Pending
                  </Badge>
                )}
              </div>
              <div className="text-sm text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>{member.email}</div>
            </div>
            
            <div className="flex items-center gap-3">
              {hasPendingChange && (
                <div className="flex items-center gap-2 mr-2">
                  <span className="text-sm text-gray-600">Are you sure?</span>
                  <Button 
                    size="sm"
                    className="h-8 bg-teal-600 hover:bg-teal-700 text-white"
                    onClick={() => handleConfirmRoleChange(member.id)}
                  >
                    Update
                  </Button>
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="h-8"
                    onClick={() => handleCancelRoleChange(member.id)}
                  >
                    Cancel
                  </Button>
                </div>
              )}

              {hasPendingRemoval && (
                <div className="flex items-center gap-2 mr-2">
                  <span className="text-sm text-gray-600">Remove member and lose all data?</span>
                  <Button 
                    size="sm"
                    variant="destructive"
                    className="h-8"
                    onClick={() => handleConfirmRemoval(member.id)}
                  >
                    Continue
                  </Button>
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="h-8"
                    onClick={() => handleCancelRemoval(member.id)}
                  >
                    Cancel
                  </Button>
                </div>
              )}
              
              {!hasPendingChange && !hasPendingRemoval && (
                <>
                  <Select 
                    value={currentRole}
                    onValueChange={(value) => handleRoleChange(member.id, value)}
                    disabled={member.canChangeRole === false}
                  >
                    <SelectTrigger className={`w-40 h-9 text-sm border-gray-300 bg-white ${member.canChangeRole === false ? 'opacity-60 cursor-not-allowed bg-gray-50' : ''}`}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="consultant">Consultant</SelectItem>
                      <SelectItem value="member">Member</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  {member.status === "pending" ? (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="h-9 text-sm min-w-[120px] border-gray-300 hover:bg-gray-50"
                    >
                      Resend
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="h-9 text-sm min-w-[120px] border-gray-300 hover:bg-gray-50"
                      onClick={() => handleRemoveMember(member.id)}
                      disabled={member.canRemove === false}
                    >
                      Remove Member
                    </Button>
                  )}
                  
                  <div className="text-sm text-gray-500 w-32 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    {member.status === "pending" ? `Invited ${member.joinedDate}` : `Joined ${member.joinedDate}`}
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
      {showInviteButton && (
        <div className="px-4 py-4 border-t border-gray-100">
          <Button 
            variant="outline"
            size="sm"
            className="w-full h-9 text-sm border-gray-300 hover:bg-gray-50"
            onClick={onInviteMember}
            style={{ fontFamily: 'Cabin, sans-serif' }}
          >
            <Plus className="w-4 h-4 mr-2" />
            Invite Members
          </Button>
        </div>
      )}
    </div>
  );
}