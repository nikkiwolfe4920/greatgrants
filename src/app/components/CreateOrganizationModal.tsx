import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import logoMark from "figma:asset/13e1a83af014d5259eb6cef7298fecb2bcd3b937.png";

interface CreateOrganizationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOrganizationCreated?: (orgName: string, adminEmail: string, adminName: string) => void;
}

export function CreateOrganizationModal({
  open,
  onOpenChange,
  onOrganizationCreated,
}: CreateOrganizationModalProps) {
  const [organizationName, setOrganizationName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminName, setAdminName] = useState("");

  const handleCreateOrganization = () => {
    // Handle organization creation
    console.log("Creating organization:", { organizationName, adminEmail, adminName });
    
    // Call the callback with the organization data
    if (onOrganizationCreated) {
      onOrganizationCreated(organizationName, adminEmail, adminName);
    }
    
    // Reset form
    setOrganizationName("");
    setAdminEmail("");
    setAdminName("");
    onOpenChange(false);
  };

  const isFormValid = organizationName.trim() !== "" && adminEmail.trim() !== "" && adminName.trim() !== "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-0 gap-0" aria-describedby={undefined}>
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
              Create Organization
            </DialogTitle>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Enter information below to create an organization and assign an Admin role.
            </p>
          </DialogHeader>
        </div>

        {/* Form Content */}
        <div className="px-6 pb-6 space-y-5">
          {/* Organization Name */}
          <div className="space-y-1.5">
            <Label htmlFor="org-name">
              Organization Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="org-name"
              type="text"
              placeholder="Enter name"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              className="focus-visible:border-teal-600"
            />
          </div>

          {/* Invite Admin Section */}
          <div className="space-y-4">
            <div>
              <h3 
                className="text-sm font-semibold text-gray-900 mb-1" 
                style={{ fontFamily: 'Cabin, sans-serif' }}
              >
                Invite Admin
              </h3>
              <p 
                className="text-sm text-gray-600" 
                style={{ fontFamily: 'Cabin, sans-serif' }}
              >
                Enter the admin's information who will own and administer the organization.
              </p>
            </div>

            {/* Admin Name */}
            <div className="space-y-1.5">
              <Label htmlFor="admin-name">
                Admin Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="admin-name"
                type="text"
                placeholder="Enter Name"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
                className="focus-visible:border-teal-600"
              />
            </div>

            {/* Admin Email */}
            <div className="space-y-1.5">
              <Label htmlFor="admin-email">
                Admin Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="admin-email"
                type="email"
                placeholder="Enter Email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="focus-visible:border-teal-600"
              />
            </div>

            {/* Member Role (Disabled) */}
            <div className="space-y-1.5">
              <Label htmlFor="member-role">
                Member Role
              </Label>
              <Select value="admin" disabled>
                <SelectTrigger 
                  id="member-role"
                  className="bg-gray-50 cursor-not-allowed"
                >
                  <SelectValue placeholder="Admin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Create Organization Button */}
          <Button
            onClick={handleCreateOrganization}
            disabled={!isFormValid}
            className={`w-full text-sm font-medium transition-colors ${
              isFormValid
                ? "bg-teal-600 hover:bg-teal-700 text-white"
                : "bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-100"
            }`}
          >
            Create Organization
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}