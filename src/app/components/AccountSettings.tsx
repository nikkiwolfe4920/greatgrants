import { useState, useEffect } from "react";
import { ArrowLeft, Camera, Mail, User, Bell, Shield, Trash2, Globe, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Switch } from "@/app/components/ui/switch";
import { Separator } from "@/app/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Textarea } from "@/app/components/ui/textarea";
import { Badge } from "@/app/components/ui/badge";
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

// Grant Alerts Manager Component
function GrantAlertsManager() {
  const [alerts, setAlerts] = useState<any[]>([]);
  const [deleteAlertId, setDeleteAlertId] = useState<string | null>(null);

  // Load alerts from localStorage
  useEffect(() => {
    const savedAlerts = JSON.parse(localStorage.getItem("grantAlerts") || "[]");
    setAlerts(savedAlerts);
  }, []);

  // Toggle alert enabled/disabled
  const toggleAlert = (alertId: string) => {
    const updatedAlerts = alerts.map(alert =>
      alert.id === alertId ? { ...alert, enabled: !alert.enabled } : alert
    );
    setAlerts(updatedAlerts);
    localStorage.setItem("grantAlerts", JSON.stringify(updatedAlerts));
  };

  // Update alert frequency
  const updateFrequency = (alertId: string, frequency: string) => {
    const updatedAlerts = alerts.map(alert =>
      alert.id === alertId ? { ...alert, frequency } : alert
    );
    setAlerts(updatedAlerts);
    localStorage.setItem("grantAlerts", JSON.stringify(updatedAlerts));
  };

  // Delete alert
  const deleteAlert = (alertId: string) => {
    const updatedAlerts = alerts.filter(alert => alert.id !== alertId);
    setAlerts(updatedAlerts);
    localStorage.setItem("grantAlerts", JSON.stringify(updatedAlerts));
    setDeleteAlertId(null);
  };

  if (alerts.length === 0) {
    return (
      <div className="text-center py-12">
        <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
        <p className="text-gray-600 mb-2">No grant alerts configured yet</p>
        <p className="text-sm text-gray-500">Start a search to create your first alert</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <div 
          key={alert.id} 
          className="bg-white border border-gray-200 rounded-lg p-5"
          style={{ fontFamily: 'Cabin, sans-serif' }}
        >
          {/* Alert Header with Actions */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="text-base font-semibold text-gray-900">{alert.name}</h3>
                <span className="text-xs text-gray-500">
                  {alert.alertsSent} alerts sent
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {alert.email} • {alert.frequency} emails
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Frequency Dropdown */}
              <Select 
                value={alert.frequency} 
                onValueChange={(value) => updateFrequency(alert.id, value)}
              >
                <SelectTrigger className="w-[110px] h-9 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Weekly">Weekly</SelectItem>
                  <SelectItem value="Bi-Weekly">Bi-Weekly</SelectItem>
                  <SelectItem value="Monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>

              {/* Toggle Switch */}
              <Switch 
                checked={alert.enabled}
                onCheckedChange={() => toggleAlert(alert.id)}
              />

              {/* Delete Button */}
              <button
                className="text-gray-400 hover:text-red-600 transition-colors p-1"
                onClick={() => setDeleteAlertId(alert.id)}
                title="Delete alert"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Alert Criteria */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {/* Programs */}
            {alert.programs && alert.programs.length > 0 && alert.programs[0] !== "" && (
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-2">Program(s)</p>
                <p className="text-sm text-gray-900">
                  {alert.programs.join(", ")}
                </p>
              </div>
            )}

            {/* Search Prompt */}
            {alert.searchQuery && (
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-2">Search Prompt</p>
                <p className="text-sm text-gray-900">
                  {alert.searchQuery}
                </p>
              </div>
            )}
          </div>

          {/* Filters - Full Width Below */}
          {alert.filters && alert.filters.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {alert.filters.map((filter: any) => (
                  <span 
                    key={filter.id} 
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                  >
                    {filter.label}
                    <X className="w-3 h-3" />
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteAlertId !== null} onOpenChange={(open) => !open && setDeleteAlertId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle style={{ fontFamily: 'Lustria, serif' }}>
              Delete Grant Alert?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600 leading-relaxed">
              You're about to delete this alert. You will no longer receive email notifications for grants matching this criteria. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-gray-300">Cancel</AlertDialogCancel>
            <AlertDialogAction 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => deleteAlertId && deleteAlert(deleteAlertId)}
            >
              Delete Alert
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

interface AccountSettingsProps {
  onBack: () => void;
}

export function AccountSettings({ onBack }: AccountSettingsProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Profile state
  const [profile, setProfile] = useState({
    firstName: "Olivia",
    lastName: "Rhye",
    email: "olivia@untitledui.com",
    phone: "+1 (555) 123-4567",
    organization: "Untitled UI",
    bio: "Grant consultant specializing in nonprofit organizations and community development.",
    timezone: "America/New_York",
    language: "en"
  });

  // Notification preferences
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    applicationUpdates: true,
    memberInvites: true,
    grantDeadlines: true,
    weeklyDigest: false,
    marketingEmails: false
  });

  // Privacy settings
  const [privacy, setPrivacy] = useState({
    profileVisibility: "team",
    showEmail: false,
    showPhone: false
  });

  const handleProfileChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const handleNotificationChange = (field: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const handlePrivacyChange = (field: string, value: string | boolean) => {
    setPrivacy(prev => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const handleSaveChanges = () => {
    // TODO: Implement API call to save changes
    console.log("Saving changes...", { profile, notifications, privacy });
    setHasUnsavedChanges(false);
  };

  const handleDeleteAccount = () => {
    // TODO: Implement account deletion
    console.log("Deleting account...");
    setDeleteDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Organizations</span>
          </button>
          <h1 className="text-2xl font-semibold text-gray-900">Account Settings</h1>
          <p className="text-gray-600 text-sm mt-1">Manage your account preferences and settings</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 py-8">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="!bg-white !border-b !border-gray-200 !p-0 !h-auto !w-full !justify-start !rounded-none !inline-flex">
            <TabsTrigger value="profile" className="gap-2 !rounded-none !border-0 border-b-[3px] border-transparent data-[state=active]:!border-0 data-[state=active]:border-b-[3px] data-[state=active]:!border-b-teal-600 data-[state=active]:!text-teal-600 data-[state=active]:!bg-transparent data-[state=active]:!shadow-none !px-4 !pt-3 !pb-3 !bg-transparent !text-gray-600 hover:!text-gray-900 !shadow-none !flex-none">
              <User className="w-4 h-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2 !rounded-none !border-0 border-b-[3px] border-transparent data-[state=active]:!border-0 data-[state=active]:border-b-[3px] data-[state=active]:!border-b-teal-600 data-[state=active]:!text-teal-600 data-[state=active]:!bg-transparent data-[state=active]:!shadow-none !px-4 !pt-3 !pb-3 !bg-transparent !text-gray-600 hover:!text-gray-900 !shadow-none !flex-none">
              <Shield className="w-4 h-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2 !rounded-none !border-0 border-b-[3px] border-transparent data-[state=active]:!border-0 data-[state=active]:border-b-[3px] data-[state=active]:!border-b-teal-600 data-[state=active]:!text-teal-600 data-[state=active]:!bg-transparent data-[state=active]:!shadow-none !px-4 !pt-3 !pb-3 !bg-transparent !text-gray-600 hover:!text-gray-900 !shadow-none !flex-none">
              <Bell className="w-4 h-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="gap-2 !rounded-none !border-0 border-b-[3px] border-transparent data-[state=active]:!border-0 data-[state=active]:border-b-[3px] data-[state=active]:!border-b-teal-600 data-[state=active]:!text-teal-600 data-[state=active]:!bg-transparent data-[state=active]:!shadow-none !px-4 !pt-3 !pb-3 !bg-transparent !text-gray-600 hover:!text-gray-900 !shadow-none !flex-none">
              <Globe className="w-4 h-4" />
              Privacy
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h2>
              
              {/* Avatar */}
              <div className="mb-6">
                <Label className="mb-3 block">Profile Photo</Label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-orange-300 flex items-center justify-center text-white text-2xl font-semibold">
                    OR
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Camera className="w-4 h-4" />
                      Change Photo
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    value={profile.firstName}
                    onChange={(e) => handleProfileChange('firstName', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    value={profile.lastName}
                    onChange={(e) => handleProfileChange('lastName', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-4 mb-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={profile.email}
                    readOnly
                    className="bg-gray-50 cursor-not-allowed opacity-60"
                    onClick={(e) => e.preventDefault()}
                    onFocus={(e) => e.target.blur()}
                  />
                  <p className="text-xs text-gray-500 mt-1">This is your primary contact email and cannot be changed</p>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => handleProfileChange('phone', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="organization">Organization</Label>
                  <Input 
                    id="organization" 
                    value={profile.organization}
                    onChange={(e) => handleProfileChange('organization', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio" 
                    rows={4}
                    value={profile.bio}
                    onChange={(e) => handleProfileChange('bio', e.target.value)}
                    placeholder="Tell us about yourself..."
                  />
                  <p className="text-xs text-gray-500 mt-1">Brief description for your profile. Max 200 characters.</p>
                </div>
              </div>

              <Separator className="my-6" />

              <h3 className="text-base font-medium text-gray-900 mb-4">Regional Settings</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select value={profile.timezone} onValueChange={(value) => handleProfileChange('timezone', value)}>
                    <SelectTrigger id="timezone">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                      <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                      <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                      <SelectItem value="America/Anchorage">Alaska Time (AKT)</SelectItem>
                      <SelectItem value="Pacific/Honolulu">Hawaii Time (HT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="language">Language</Label>
                  <Select value={profile.language} onValueChange={(value) => handleProfileChange('language', value)}>
                    <SelectTrigger id="language">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Password</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                
                <div>
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                  <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters with a mix of letters, numbers, and symbols</p>
                </div>
                
                <div>
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </div>

              <Button className="bg-teal-600 hover:bg-teal-700">Update Password</Button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Two-Factor Authentication</h2>
              <p className="text-sm text-gray-600 mb-4">Add an extra layer of security to your account</p>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">2FA Status</p>
                  <p className="text-sm text-gray-600">Not enabled</p>
                </div>
                <Button variant="outline">Enable 2FA</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Active Sessions</h2>
              <p className="text-sm text-gray-600 mb-4">Manage devices where you're currently logged in</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">MacBook Pro - Chrome</p>
                    <p className="text-sm text-gray-600">New York, US • Current session</p>
                  </div>
                  <span className="text-xs text-green-600 font-medium">Active</span>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">iPhone 14 - Safari</p>
                    <p className="text-sm text-gray-600">New York, US • Last active 2 hours ago</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                    Revoke
                  </Button>
                </div>
              </div>

              <Button variant="outline" className="mt-4 w-full">Sign Out All Other Sessions</Button>
            </div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Bell className="w-5 h-5 text-teal-600" />
                <h2 className="text-lg font-semibold text-gray-900">Grant Opportunity Alerts</h2>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Get automatic email notifications about grants matching your criteria. To configure a new alert,{" "}
                <button 
                  className="text-teal-600 hover:text-teal-700 font-medium underline"
                  onClick={() => window.location.href = '/grants'}
                >
                  start a new search
                </button>.
              </p>
              
              {/* Load and Display Saved Alerts */}
              <GrantAlertsManager />
            </div>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Profile Visibility</h2>
              <p className="text-sm text-gray-600 mb-4">Control who can see your profile information</p>
              
              <div className="mb-6">
                <Label htmlFor="profileVisibility">Who can see your profile?</Label>
                <Select value={privacy.profileVisibility} onValueChange={(value) => handlePrivacyChange('profileVisibility', value)}>
                  <SelectTrigger id="profileVisibility">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Everyone</SelectItem>
                    <SelectItem value="team">Organization members only</SelectItem>
                    <SelectItem value="private">Only me</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-gray-900">Show Email Address</p>
                    <p className="text-sm text-gray-600">Allow organization members to see your email</p>
                  </div>
                  <Switch 
                    checked={privacy.showEmail}
                    onCheckedChange={(checked) => handlePrivacyChange('showEmail', checked)}
                  />
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-gray-900">Show Phone Number</p>
                    <p className="text-sm text-gray-600">Allow organization members to see your phone</p>
                  </div>
                  <Switch 
                    checked={privacy.showPhone}
                    onCheckedChange={(checked) => handlePrivacyChange('showPhone', checked)}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Data & Privacy</h2>
              <p className="text-sm text-gray-600 mb-4">Manage your data and privacy preferences</p>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Download Your Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Privacy Policy
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Terms of Service
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-red-200 p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Trash2 className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">Delete Account</h2>
                  <p className="text-sm text-gray-600">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                </div>
              </div>
              
              <Button 
                variant="destructive" 
                onClick={() => setDeleteDialogOpen(true)}
                className="w-full"
              >
                Delete My Account
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Save Changes Bar */}
        {hasUnsavedChanges && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">You have unsaved changes</p>
              <div className="flex gap-3">
                <Button 
                  variant="ghost" 
                  onClick={() => setHasUnsavedChanges(false)}
                >
                  Discard
                </Button>
                <Button 
                  className="bg-teal-600 hover:bg-teal-700"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Delete Account Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove all your data from our servers including:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>All grant applications</li>
                <li>Organization memberships</li>
                <li>Personal information and settings</li>
              </ul>
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
    </div>
  );
}