import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import logoImg from "figma:asset/80f16235e4f02631f57c6cf6e509cba581c33eb4.png";
import {
  Settings,
  Trash2,
  AlertCircle,
  X,
  Eye,
  EyeOff,
  CheckCircle2,
  Shield,
  Bell,
  Lock,
  Clock,
  Smartphone,
  Mail,
  Monitor,
  LogOut,
  MapPin,
  Calendar,
  Download,
  Building2,
  Check
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Switch } from "@/app/components/ui/switch";
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
import { SuccessNotification } from "@/app/components/SuccessNotification";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbHome,
} from "@/app/components/ui/breadcrumb";
import { Link } from "react-router";

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

interface AccountSettingsComprehensiveProps {
  onBack?: () => void;
  onAccountDeleted?: () => void;
}

export function AccountSettingsComprehensive({ onBack, onAccountDeleted }: AccountSettingsComprehensiveProps = {}) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [activeTab, setActiveTab] = useState('profile');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [accountDeletedModalOpen, setAccountDeletedModalOpen] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [successDescription, setSuccessDescription] = useState("");
  const [enable2FADialog, setEnable2FADialog] = useState(false);
  const [disable2FADialog, setDisable2FADialog] = useState(false);
  const [verifyEmailDialog, setVerifyEmailDialog] = useState(false);

  // Profile state
  const [profile, setProfile] = useState({
    firstName: "Olivia",
    lastName: "Rhye",
    email: "olivia@untitledui.com",
    emailVerified: true,
    phone: "+1 (555) 123-4567",
    organization: "Untitled Foundation",
    role: "Grant Consultant",
    timezone: "America/New_York",
  });

  // Password state
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  });

  // 2FA state
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  // Notification preferences
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    applicationUpdates: true,
    deadlineReminders: true,
    teamInvites: true,
    weeklyDigest: false,
    marketingEmails: false,
    pushNotifications: true,
    smsNotifications: false,
  });

  // Privacy settings
  const [privacy, setPrivacy] = useState({
    profileVisibility: "team", // public, team, private
    showEmail: false,
    showPhone: false,
    allowSearch: true,
    activityTracking: true,
  });

  // Active sessions
  const [sessions] = useState([
    {
      id: "1",
      device: "Chrome on MacBook Pro",
      location: "San Francisco, CA",
      lastActive: "Active now",
      current: true,
    },
    {
      id: "2",
      device: "Safari on iPhone 13",
      location: "San Francisco, CA",
      lastActive: "2 hours ago",
      current: false,
    },
  ]);

  // Activity log
  const [activityLog] = useState([
    { id: "1", action: "Password changed", timestamp: "2026-02-04 10:30 AM", ip: "192.168.1.1" },
    { id: "2", action: "Logged in from new device", timestamp: "2026-02-03 2:15 PM", ip: "192.168.1.2" },
    { id: "3", action: "Email verified", timestamp: "2026-02-01 9:00 AM", ip: "192.168.1.1" },
    { id: "4", action: "Profile updated", timestamp: "2026-01-28 4:45 PM", ip: "192.168.1.1" },
    { id: "5", action: "Account created", timestamp: "2026-01-15 11:20 AM", ip: "192.168.1.1" },
  ]);

  // Error state
  const [errors, setErrors] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  const [storedPassword] = useState("password123");
  const [passwordHistory] = useState(["oldpass1", "oldpass2", "oldpass3"]);

  const calculatePasswordStrength = (password: string): { score: number; label: string; color: string } => {
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^a-zA-Z\d]/.test(password)) score++;

    if (score <= 1) return { score: 20, label: "Weak", color: "bg-red-500" };
    if (score === 2) return { score: 40, label: "Fair", color: "bg-orange-500" };
    if (score === 3) return { score: 60, label: "Good", color: "bg-yellow-500" };
    if (score === 4) return { score: 80, label: "Strong", color: "bg-teal-500" };
    return { score: 100, label: "Very Strong", color: "bg-green-500" };
  };

  const passwordStrength = calculatePasswordStrength(passwords.new);

  const handleProfileChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field: string, value: string) => {
    setPasswords(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const togglePasswordVisibility = (field: keyof typeof showPassword) => {
    setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const validatePassword = () => {
    let hasErrors = false;
    const newErrors = { current: "", new: "", confirm: "" };

    if (!passwords.current) {
      newErrors.current = "Current password is required.";
      hasErrors = true;
    } else if (passwords.current !== storedPassword) {
      newErrors.current = "The current password you entered is incorrect.";
      hasErrors = true;
    }

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
      setPasswords({ current: "", new: "", confirm: "" });
      showSuccess("Your password has been successfully updated.", "Next time you sign in, you can use your new password.");
    }
  };

  const handleSaveProfile = () => {
    showSuccess("Profile updated successfully.", "Your changes have been saved.");
  };

  const handleDeleteAccount = () => {
    setDeleteDialogOpen(false);
    setAccountDeletedModalOpen(true);
  };

  const handleAccountDeletedConfirm = () => {
    setAccountDeletedModalOpen(false);
    onAccountDeleted?.();
  };

  const handleEnable2FA = () => {
    setTwoFactorEnabled(true);
    setEnable2FADialog(false);
    showSuccess("Two-factor authentication enabled", "Your account is now more secure.");
  };

  const handleDisable2FA = () => {
    setTwoFactorEnabled(false);
    setDisable2FADialog(false);
    showSuccess("Two-factor authentication disabled", "You can re-enable it anytime.");
  };

  const handleLogoutSession = (sessionId: string) => {
    showSuccess("Session ended", "The device has been logged out.");
  };

  const handleVerifyEmail = () => {
    setVerifyEmailDialog(false);
    showSuccess("Verification email sent", "Please check your inbox.");
  };

  const showSuccess = (message: string, description?: string) => {
    setSuccessMessage(message);
    setSuccessDescription(description || "");
    setShowSuccessNotification(true);
    setTimeout(() => setShowSuccessNotification(false), 5000);
  };

  const profileCompletion = 85;

  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <aside className="w-52 border-r border-gray-200 flex flex-col bg-white">
        <div className="p-4 border-b border-gray-200">
          <img src={logoImg} alt="Great Grants" className="h-6" />
        </div>

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
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto p-8">
          {/* Success Notification */}
          {showSuccessNotification && (
            <SuccessNotification
              message={successMessage}
              description={successDescription}
              onClose={() => setShowSuccessNotification(false)}
            />
          )}

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
                <BreadcrumbPage>Settings</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="mb-3">
                <Settings
                  className="w-8 h-8"
                  strokeWidth={1.5}
                />
              </div>
              <h1 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif', fontWeight: 600 }}>Account settings</h1>
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-white border-b border-gray-200 w-full justify-start rounded-none p-0 h-auto">
              <TabsTrigger 
                value="profile" 
                className="rounded-none !border-0 border-b-[3px] border-transparent data-[state=active]:!border-0 data-[state=active]:border-b-[3px] data-[state=active]:!border-b-teal-600 data-[state=active]:text-teal-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3 bg-transparent text-gray-600 hover:text-gray-900 shadow-none"
              >
                Profile
              </TabsTrigger>
              <TabsTrigger 
                value="security"
                className="rounded-none !border-0 border-b-[3px] border-transparent data-[state=active]:!border-0 data-[state=active]:border-b-[3px] data-[state=active]:!border-b-teal-600 data-[state=active]:text-teal-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3 bg-transparent text-gray-600 hover:text-gray-900 shadow-none"
              >
                Security
              </TabsTrigger>
              <TabsTrigger 
                value="notifications"
                className="rounded-none !border-0 border-b-[3px] border-transparent data-[state=active]:!border-0 data-[state=active]:border-b-[3px] data-[state=active]:!border-b-teal-600 data-[state=active]:text-teal-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3 bg-transparent text-gray-600 hover:text-gray-900 shadow-none"
              >
                Notifications
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-base font-semibold text-gray-900 mb-6">Personal Information</h2>
                
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
                      <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      {profile.emailVerified && (
                        <Badge className="absolute -top-2 -right-2 bg-green-100 text-green-700 border-green-200">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    {!profile.emailVerified && (
                      <Button 
                        variant="link" 
                        size="sm" 
                        className="px-0 h-auto mt-1 text-teal-600"
                        onClick={() => setVerifyEmailDialog(true)}
                      >
                        Verify email address
                      </Button>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Input 
                        id="phone" 
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => handleProfileChange('phone', e.target.value)}
                        className="pl-8"
                      />
                      <Smartphone className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button onClick={handleSaveProfile} className="bg-teal-600 hover:bg-teal-700 text-white">
                    Save Changes
                  </Button>
                </div>
              </div>

              {/* Delete Account Section */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900 mb-1">Delete Account</h2>
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
              {/* Password Section */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-base font-semibold text-gray-900 mb-2">Password</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Update your password regularly to keep your account secure. For this prototype, the current password is: <code className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">password123</code>
                </p>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">
                      Current Password <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Input 
                        id="currentPassword" 
                        type={showPassword.current ? "text" : "password"}
                        value={passwords.current}
                        onChange={(e) => handlePasswordChange('current', e.target.value)}
                        className={errors.current ? "border-red-300 focus-visible:ring-red-500 pr-10" : "pr-10"}
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility('current')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword.current ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.current && (
                      <div className="flex items-start gap-1.5 mt-1.5">
                        <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-600">{errors.current}</p>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="newPassword">
                        New Password <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Input 
                          id="newPassword" 
                          type={showPassword.new ? "text" : "password"}
                          value={passwords.new}
                          onChange={(e) => handlePasswordChange('new', e.target.value)}
                          className={errors.new ? "border-red-300 focus-visible:ring-red-500 pr-10" : "pr-10"}
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility('new')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword.new ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      {passwords.new && !errors.new && (
                        <div className="mt-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-600">Password strength:</span>
                            <span className={`text-xs font-medium ${
                              passwordStrength.score >= 80 ? 'text-green-600' : 
                              passwordStrength.score >= 60 ? 'text-teal-600' : 
                              passwordStrength.score >= 40 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {passwordStrength.label}
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                              style={{ width: `${passwordStrength.score}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {!errors.new && (
                        <p className="text-xs text-gray-500 mt-1.5">
                          Must be at least 8 characters with a mix of letters, numbers, and symbols.
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
                      <div className="relative">
                        <Input 
                          id="confirmPassword" 
                          type={showPassword.confirm ? "text" : "password"}
                          value={passwords.confirm}
                          onChange={(e) => handlePasswordChange('confirm', e.target.value)}
                          className={errors.confirm ? "border-red-300 focus-visible:ring-red-500 pr-10" : "pr-10"}
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility('confirm')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword.confirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      {errors.confirm && (
                        <div className="flex items-start gap-1.5 mt-1.5">
                          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-red-600">{errors.confirm}</p>
                        </div>
                      )}
                    </div>
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

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Bell className="w-5 h-5 text-teal-600" />
                  <h2 className="text-base font-semibold text-gray-900">Grant Opportunity Alerts</h2>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  Get automatic email notifications about grants matching your criteria. To configure a new alert,{" "}
                  <button 
                    className="text-teal-600 hover:text-teal-700 font-medium underline"
                    onClick={() => navigate('/search')}
                  >
                    start a new search
                  </button>.
                </p>
                
                {/* Load and Display Saved Alerts */}
                <GrantAlertsManager />
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
          <div className="flex justify-end items-start mb-4">
            <button 
              onClick={() => setAccountDeletedModalOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <AlertDialogHeader className="space-y-3">
            <AlertDialogTitle className="text-xl" style={{ fontFamily: 'Lustria, serif' }}>Account Deleted</AlertDialogTitle>
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

      {/* Enable 2FA Dialog */}
      <AlertDialog open={enable2FADialog} onOpenChange={setEnable2FADialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Enable Two-Factor Authentication</AlertDialogTitle>
            <AlertDialogDescription>
              Scan the QR code below with your authenticator app (e.g., Google Authenticator, Authy) to set up 2FA.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-center py-6">
            <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-sm text-gray-500">QR Code Placeholder</p>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleEnable2FA}
              className="bg-teal-600 hover:bg-teal-700"
            >
              Enable 2FA
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Disable 2FA Dialog */}
      <AlertDialog open={disable2FADialog} onOpenChange={setDisable2FADialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Disable Two-Factor Authentication</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to disable two-factor authentication? This will make your account less secure.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDisable2FA}
              className="bg-red-600 hover:bg-red-700"
            >
              Disable 2FA
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Verify Email Dialog */}
      <AlertDialog open={verifyEmailDialog} onOpenChange={setVerifyEmailDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Verify Email Address</AlertDialogTitle>
            <AlertDialogDescription>
              We'll send a verification link to {profile.email}. Click the link in the email to verify your address.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleVerifyEmail}
              className="bg-teal-600 hover:bg-teal-700"
            >
              Send Verification Email
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}