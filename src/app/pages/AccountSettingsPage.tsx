import { useState } from 'react'
import { User, Bell, Shield, CreditCard } from 'lucide-react'
import { mockSavedAlerts } from '@/data/mockData'
import type { SavedAlert } from '@/data/types'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger
} from '@/components/ui/alert-dialog'

export default function AccountSettingsPage() {
  const [alerts, setAlerts] = useState<SavedAlert[]>(mockSavedAlerts)

  const toggleAlert = (id: string) => {
    setAlerts(prev => prev.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a))
  }

  const removeAlert = (id: string) => {
    setAlerts(prev => prev.filter(a => a.id !== id))
  }

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-[var(--border-primary)] bg-white px-8 py-6">
        <h1 className="text-2xl font-semibold text-[var(--text-primary)]">Account Settings</h1>
        <p className="text-sm text-[var(--text-tertiary)] mt-1">Manage your account preferences and notifications</p>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        <Tabs defaultValue="profile" className="max-w-2xl">
          <TabsList className="mb-6">
            <TabsTrigger value="profile"><User className="h-4 w-4 mr-1.5" />Profile</TabsTrigger>
            <TabsTrigger value="alerts"><Bell className="h-4 w-4 mr-1.5" />Saved Alerts</TabsTrigger>
            <TabsTrigger value="security"><Shield className="h-4 w-4 mr-1.5" />Security</TabsTrigger>
            <TabsTrigger value="billing"><CreditCard className="h-4 w-4 mr-1.5" />Billing</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader><CardTitle>Personal Information</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input label="First Name" defaultValue="Sarah" />
                  <Input label="Last Name" defaultValue="Johnson" />
                </div>
                <Input label="Email Address" defaultValue="sarah@brightfuturesfoundation.org" type="email" />
                <Input label="Phone Number" defaultValue="+1 (312) 555-0123" type="tel" />
                <Input label="Job Title" defaultValue="Executive Director" />
                <div className="flex justify-end gap-2 pt-2">
                  <Button variant="secondary">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-[var(--text-tertiary)]">
                  {alerts.length} saved alert{alerts.length !== 1 ? 's' : ''}
                </p>
                <Button size="sm">
                  <Bell className="h-4 w-4" />
                  New Alert
                </Button>
              </div>

              {alerts.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Bell className="h-10 w-10 text-[var(--text-quaternary)] mx-auto mb-3" />
                    <p className="text-sm text-[var(--text-tertiary)]">No saved alerts. Create one from Grant Search.</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-3">
                  {alerts.map(alert => (
                    <Card key={alert.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <p className="text-sm font-medium text-[var(--text-primary)]">{alert.name}</p>
                              <Badge variant="outline" size="sm" className="capitalize">{alert.frequency}</Badge>
                            </div>
                            <p className="text-xs text-[var(--text-tertiary)]">
                              Query: "{alert.query}"
                              {alert.lastTriggered && ` · Last sent ${new Date(alert.lastTriggered).toLocaleDateString()}`}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <Switch checked={alert.enabled} onCheckedChange={() => toggleAlert(alert.id)} />
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="ghost" size="sm" className="text-[var(--error-600)] hover:text-[var(--error-700)] hover:bg-[var(--error-50)]">
                                  Remove
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Remove Alert</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to remove "{alert.name}"? You won't receive notifications for this search anymore.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => removeAlert(alert.id)}
                                    className="bg-[var(--error-600)] hover:bg-[var(--error-700)]"
                                  >
                                    Remove
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader><CardTitle>Password</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <Input label="Current Password" type="password" />
                <Input label="New Password" type="password" />
                <Input label="Confirm New Password" type="password" />
                <Button>Update Password</Button>
                <Separator />
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Two-Factor Authentication</h4>
                  <p className="text-sm text-[var(--text-tertiary)] mb-3">Add an extra layer of security to your account</p>
                  <Button variant="secondary">Enable 2FA</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing">
            <Card>
              <CardContent className="py-12 text-center">
                <CreditCard className="h-10 w-10 text-[var(--text-quaternary)] mx-auto mb-3" />
                <h3 className="text-base font-medium text-[var(--text-primary)] mb-1">Free Plan</h3>
                <p className="text-sm text-[var(--text-tertiary)] mb-4">
                  You're currently on the free plan. Upgrade for unlimited grant searches and applications.
                </p>
                <Button>Upgrade to Pro</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
