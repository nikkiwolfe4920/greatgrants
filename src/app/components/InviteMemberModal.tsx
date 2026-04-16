import { useState } from "react";
import { X, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Badge } from "@/app/components/ui/badge";
import logoMark from "figma:asset/13e1a83af014d5259eb6cef7298fecb2bcd3b937.png";

interface InviteMemberModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  organizationName: string;
  onMembersInvited?: (members: Array<{ email: string; role: string }>) => void;
}

interface AddedMember {
  email: string;
  role: string;
}

export function InviteMemberModal({ open, onOpenChange, organizationName, onMembersInvited }: InviteMemberModalProps) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("member");
  const [addedMembers, setAddedMembers] = useState<AddedMember[]>([]);

  // Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isEmailValid = email.trim() !== "" && isValidEmail(email);
  const canAddMember = isEmailValid;
  const canSendInvitations = addedMembers.length > 0;

  const handleAddMember = () => {
    if (canAddMember) {
      setAddedMembers([...addedMembers, { email: email.trim(), role }]);
      setEmail("");
      setRole("member");
    }
  };

  const handleRemoveMember = (index: number) => {
    setAddedMembers(addedMembers.filter((_, i) => i !== index));
  };

  const handleSendInvitations = () => {
    if (canSendInvitations && onMembersInvited) {
      onMembersInvited(addedMembers);
    }
    // Reset state
    setEmail("");
    setRole("member");
    setAddedMembers([]);
    onOpenChange(false);
  };

  const handleClose = () => {
    // Reset state when closing
    setEmail("");
    setRole("member");
    setAddedMembers([]);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0" aria-describedby={undefined}>
        {/* Custom Header with Logo */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-4">
            <img src={logoMark} alt="Great Grants" className="h-8 w-auto" />
          </div>

          <DialogHeader className="text-left space-y-2">
            <DialogTitle 
              className="text-lg text-gray-900" 
              style={{ fontFamily: 'Cabin, sans-serif', fontWeight: 600 }}
            >
              Invite Members
            </DialogTitle>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Enter a member's email and assign a role to add one or more members to your organization.
            </p>
          </DialogHeader>
        </div>

        {/* Form Content */}
        <div className="px-6 pb-6 space-y-5">
          {/* Email Input */}
          <div className="space-y-1.5">
            <Label 
              htmlFor="member-email"
              className="text-sm font-medium text-gray-900"
              style={{ fontFamily: 'Cabin, sans-serif' }}
            >
              Invite Members <span className="text-red-500">*</span>
            </Label>
            <Input
              id="member-email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus-visible:border-teal-600 border-gray-300"
              style={{ fontFamily: 'Cabin, sans-serif' }}
            />
          </div>

          {/* Role Select */}
          <div className="space-y-1.5">
            <Label 
              htmlFor="member-role"
              className="text-sm font-medium text-gray-900"
              style={{ fontFamily: 'Cabin, sans-serif' }}
            >
              Member Role <span className="text-red-500">*</span>
            </Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger 
                id="member-role"
                className="w-full border-gray-300 bg-white"
                style={{ fontFamily: 'Cabin, sans-serif' }}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="consultant">Consultant</SelectItem>
                <SelectItem value="member">Member</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Add Member Button */}
          <button
            onClick={handleAddMember}
            disabled={!canAddMember}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              canAddMember
                ? "text-teal-600 hover:text-teal-700 cursor-pointer"
                : "text-gray-400 cursor-not-allowed"
            }`}
            style={{ fontFamily: 'Cabin, sans-serif' }}
          >
            <Plus className="w-4 h-4" />
            Add Member
          </button>

          {/* Added Members Section */}
          {addedMembers.length > 0 && (
            <div className="space-y-3">
              <Label 
                className="text-sm font-medium text-gray-900"
                style={{ fontFamily: 'Cabin, sans-serif' }}
              >
                Added Members ({addedMembers.length})
              </Label>
              <div className="flex flex-wrap gap-2">
                {addedMembers.map((member, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-50 px-3 py-1.5 text-sm font-medium flex items-center gap-2"
                    style={{ fontFamily: 'Cabin, sans-serif' }}
                  >
                    {member.email}
                    <button
                      onClick={() => handleRemoveMember(index)}
                      className="hover:text-blue-900 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Send Invitations Button */}
          <Button
            onClick={handleSendInvitations}
            disabled={!canSendInvitations}
            className={`w-full text-sm font-medium transition-colors ${
              canSendInvitations
                ? "bg-teal-600 hover:bg-teal-700 text-white"
                : "bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-100"
            }`}
            style={{ fontFamily: 'Cabin, sans-serif' }}
          >
            Invite Members
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
