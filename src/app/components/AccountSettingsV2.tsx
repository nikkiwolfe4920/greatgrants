import { useState } from "react";
import logoImg from "figma:asset/80f16235e4f02631f57c6cf6e509cba581c33eb4.png";
import { ArrowLeft, Settings, Trash2, AlertCircle, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle 
} from "@/app/components/ui/alert-dialog";
import { SuccessNotification } from "@/app/components/SuccessNotification";

interface AccountSettingsV2Props {
  onBack: () => void;
  onAccountDeleted?: () => void;
}

export function AccountSettingsV2({ onBack, onAccountDeleted }: AccountSettingsV2Props) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [accountDeletedModalOpen, setAccountDeletedModalOpen] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  // Profile state
  const [profile, setProfile] = useState({
    firstName: "Olivia",
    lastName: "Rhye",
    email: "olivia@untitledui.com",
    phone: "+1 (555) 123-4567",
  });

  // Password state
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  // Error state
  const [errors, setErrors] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  // Simulate a stored current password for the prototype
  const [storedPassword] = useState("password123");
  // Simulate password history
  const [passwordHistory] = useState(["oldpass1", "oldpass2", "oldpass3"]);

  const handleProfileChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field: string, value: string) => {
    setPasswords(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const validatePassword = () => {
    let hasErrors = false;
    const newErrors = { current: "", new: "", confirm: "" };

    // Validate current password
    if (!passwords.current) {
      newErrors.current = "Current password is required.";
      hasErrors = true;
    } else if (passwords.current !== storedPassword) {
      newErrors.current = "The current password you entered is incorrect.";
      hasErrors = true;
    }

    // Validate new password
    if (!passwords.new) {
      newErrors.new = "New password is required.";
      hasErrors = true;
    } else if (passwords.new.length < 8) {
      newErrors.new = "Must be at least 8 characters with a mix of letters, numbers, and symbols.";
      hasErrors = true;
    } else if (passwords.new === storedPassword) {
      newErrors.new = "New password cannot be the same as your current password.";
      hasErrors = true;
    } else if (passwordHistory.includes(passwords.new)) {
      newErrors.new = "New password cannot be one of your previous passwords.";
      hasErrors = true;
    }

    // Validate confirm password
    if (!passwords.confirm) {
      newErrors.confirm = "Please confirm your new password.";
      hasErrors = true;
    } else if (passwords.new !== passwords.confirm) {
      newErrors.confirm = "New password and confirmation do not match.";
      hasErrors = true;
    }

    setErrors(newErrors);
    return !hasErrors;
  };

  const handleUpdatePassword = () => {
    if (validatePassword()) {
      // TODO: Implement API call to update password
      console.log("Updating password...");
      
      // Clear form
      setPasswords({ current: "", new: "", confirm: "" });
      
      // Show success notification
      setShowSuccessNotification(true);
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowSuccessNotification(false);
      }, 5000);
    }
  };

  const handleDeleteAccount = () => {
    setDeleteDialogOpen(false);
    setAccountDeletedModalOpen(true);
  };

  const handleAccountDeletedConfirm = () => {
    setAccountDeletedModalOpen(false);
    onAccountDeleted?.();
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <aside className="w-52 border-r border-gray-200 flex flex-col bg-white">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <img src={logoImg} alt="Great Grants" className="h-6" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3">
          <ul className="space-y-1">
            <li>
              <button className="flex items-center gap-2 px-3 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M2 6L8 2L14 6V13C14 13.5304 13.7893 14.0391 13.4142 14.4142C13.0391 14.7893 12.5304 15 12 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                All Available Grants
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 px-3 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M13.3333 2H2.66667C1.93029 2 1.33333 2.59695 1.33333 3.33333V12.6667C1.33333 13.403 1.93029 14 2.66667 14H13.3333C14.0697 14 14.6667 13.403 14.6667 12.6667V3.33333C14.6667 2.59695 14.0697 2 13.3333 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.6667 1.33334V2.66667M5.33333 1.33334V2.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                My Organizations
              </button>
            </li>
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-orange-300 flex items-center justify-center relative">
              <span className="text-white text-xs font-semibold">OR</span>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900">Olivia Rhye</div>
              <div className="text-xs text-gray-500 truncate">olivia@untitledui.com</div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 9.33334L8 13.3333M8 9.33334C6.52667 9.33334 5.33333 8.14001 5.33333 6.66668C5.33333 5.19334 6.52667 4.00001 8 4.00001M8 9.33334C9.47333 9.33334 10.6667 8.14001 10.6667 6.66668C10.6667 5.19334 9.47333 4.00001 8 4.00001M8 4.00001L8 2.66668" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <div className="max-w-4xl mx-auto p-8">
          {/* Success Notification */}
          {showSuccessNotification && (
            <SuccessNotification
              message="Your password has been successfully updated."
              description="Next time you sign in, you can use your new password."
              onClose={() => setShowSuccessNotification(false)}
            />
          )}

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                <Settings className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Account settings</h1>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Manage your account preferences and settings</p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="bg-white border-b border-gray-200 w-full justify-start rounded-none p-0 h-auto">
              <TabsTrigger 
                value="profile" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-teal-600 data-[state=active]:text-teal-600 px-4 py-3"
              >
                Profile
              </TabsTrigger>
              <TabsTrigger 
                value="security"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-teal-600 data-[state=active]:text-teal-600 px-4 py-3"
              >
                Security
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-base font-semibold text-gray-900 mb-6">Personal Information</h2>
                
                {/* Avatar */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xl font-semibold">
                    OR
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="firstName">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="firstName" 
                      value={profile.firstName}
                      onChange={(e) => handleProfileChange('firstName', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="lastName" 
                      value={profile.lastName}
                      onChange={(e) => handleProfileChange('lastName', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Input 
                        id="email" 
                        type="email"
                        value={profile.email}
                        onChange={(e) => handleProfileChange('email', e.target.value)}
                        className="pl-8"
                      />
                      <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 16 16" fill="none">
                        <path d="M2.66667 2.66666H13.3333C14.0667 2.66666 14.6667 3.26666 14.6667 4V12C14.6667 12.7333 14.0667 13.3333 13.3333 13.3333H2.66667C1.93333 13.3333 1.33333 12.7333 1.33333 12V4C1.33333 3.26666 1.93333 2.66666 2.66667 2.66666Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.6667 4L8 8.66666L1.33333 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Input 
                        id="phone" 
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => handleProfileChange('phone', e.target.value)}
                        className="pl-8"
                      />
                      <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 16 16" fill="none">
                        <path d="M14.6667 11.28V13.28C14.6675 13.4657 14.6294 13.6494 14.555 13.8195C14.4807 13.9897 14.3716 14.1424 14.2348 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5847 14.608 13.3983 14.6301 13.2133 14.6133C11.1619 14.3904 9.19137 13.6894 7.46 12.5667C5.84919 11.5431 4.48353 10.1774 3.46 8.56665C2.33334 6.82745 1.6322 4.84731 1.41333 2.78665C1.39667 2.60219 1.41862 2.41649 1.4777 2.24107C1.53679 2.06564 1.63175 1.90444 1.75655 1.76773C1.88134 1.63102 2.03324 1.52179 2.20256 1.44695C2.37189 1.37211 2.55493 1.33328 2.74 1.33332H4.74C5.06353 1.33013 5.37721 1.4447 5.62248 1.65567C5.86775 1.86664 6.02802 2.15961 6.07333 2.47998C6.15779 3.12003 6.31434 3.74847 6.54 4.35332C6.62974 4.59193 6.64908 4.85126 6.59591 5.10058C6.54274 5.3499 6.41928 5.57873 6.24 5.75998L5.39333 6.60665C6.34238 8.27568 7.72431 9.65761 9.39333 10.6067L10.24 9.75998C10.4212 9.5807 10.6501 9.45724 10.8994 9.40407C11.1487 9.3509 11.4081 9.37024 11.6467 9.45998C12.2515 9.68564 12.88 9.8422 13.52 9.92665C13.8439 9.97234 14.1396 10.1355 14.3511 10.385C14.5625 10.6345 14.6748 10.953 14.6667 11.28Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delete Account Section */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900 mb-1">Delete Accounts</h2>
                    <p className="text-sm text-gray-600">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                  </div>
                </div>
                
                <Button 
                  onClick={() => setDeleteDialogOpen(true)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  Delete My Account
                </Button>
              </div>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-base font-semibold text-gray-900 mb-2">Password</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Update your password regularly to keep your account secure. For this prototype, the current password is: <code className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">password123</code>
                </p>
                
                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                  <div>
                    <Label htmlFor="currentPassword">
                      Current Password <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="currentPassword" 
                      type="password"
                      value={passwords.current}
                      onChange={(e) => handlePasswordChange('current', e.target.value)}
                      className={errors.current ? "border-red-300 focus-visible:ring-red-500" : ""}
                    />
                    {errors.current && (
                      <div className="flex items-start gap-1.5 mt-1.5">
                        <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-600">{errors.current}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="newPassword">
                      New Password <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="newPassword" 
                      type="password"
                      value={passwords.new}
                      onChange={(e) => handlePasswordChange('new', e.target.value)}
                      className={errors.new ? "border-red-300 focus-visible:ring-red-500" : ""}
                    />
                    {!errors.new && (
                      <p className="text-xs text-gray-500 mt-1.5">
                        Must be at least 8 characters with a mix of letters, numbers, and symbols. Cannot be your current or previous passwords.
                      </p>
                    )}
                    {errors.new && (
                      <div className="flex items-start gap-1.5 mt-1.5">
                        <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-600">{errors.new}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="confirmPassword">
                      Confirm New Password <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="confirmPassword" 
                      type="password"
                      value={passwords.confirm}
                      onChange={(e) => handlePasswordChange('confirm', e.target.value)}
                      className={errors.confirm ? "border-red-300 focus-visible:ring-red-500" : ""}
                    />
                    {errors.confirm && (
                      <div className="flex items-start gap-1.5 mt-1.5">
                        <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-600">{errors.confirm}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button 
                    onClick={handleUpdatePassword}
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    Update Password
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Delete Account Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove all your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteAccount}
              className="bg-red-600 hover:bg-red-700"
            >
              Yes, Delete My Account
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Account Deleted Modal */}
      <AlertDialog open={accountDeletedModalOpen} onOpenChange={setAccountDeletedModalOpen}>
        <AlertDialogContent className="max-w-md">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-black rounded-sm flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rotate-45"></div>
            </div>
            <button 
              onClick={() => setAccountDeletedModalOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <AlertDialogHeader className="space-y-3">
            <AlertDialogTitle className="text-xl">Account Deleted</AlertDialogTitle>
            <AlertDialogDescription className="text-base">
              Your account and all associated data have been permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-6">
            <AlertDialogAction 
              onClick={handleAccountDeletedConfirm}
              className="w-full bg-teal-600 hover:bg-teal-700"
            >
              Back to Sign In
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}