import { useState } from 'react'
import { Building2, Users, Mail, Globe, Plus, Edit2, MapPin } from 'lucide-react'
import { mockOrganizations, mockMembers } from '@/data/mockData'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'

const roleColors = {
  admin: 'brand' as const,
  member: 'default' as const,
  viewer: 'outline' as const,
}

export default function OrganizationsPage() {
  const org = mockOrganizations[0]
  const [editing, setEditing] = useState(false)

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-[var(--border-primary)] bg-white px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--text-primary)]">Organization Profile</h1>
            <p className="text-sm text-[var(--text-tertiary)] mt-1">Manage your organization's information</p>
          </div>
          <Button size="sm" onClick={() => setEditing(!editing)} variant={editing ? 'default' : 'secondary'}>
            <Edit2 className="h-4 w-4" />
            {editing ? 'Save Changes' : 'Edit Profile'}
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        <Tabs defaultValue="profile">
          <TabsList className="mb-6">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <div className="grid gap-6 max-w-2xl">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="text-xl">{org.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{org.name}</CardTitle>
                      <p className="text-sm text-[var(--text-tertiary)] mt-0.5">{org.type}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Organization Name" defaultValue={org.name} disabled={!editing} />
                    <Input label="EIN" defaultValue={org.ein} disabled={!editing} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[var(--text-secondary)] block mb-1.5">Mission Statement</label>
                    <Textarea defaultValue={org.mission} disabled={!editing} rows={3} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Founded Year" defaultValue={String(org.foundedYear)} disabled={!editing} />
                    <Input label="Annual Budget" defaultValue={`$${org.budget.toLocaleString()}`} disabled={!editing} />
                  </div>
                  <Input label="Website" defaultValue={org.website} disabled={!editing} icon={<Globe className="h-4 w-4" />} iconPosition="left" />
                  <Input label="Contact Email" defaultValue={org.contactEmail} disabled={!editing} icon={<Mail className="h-4 w-4" />} iconPosition="left" />
                  <Input label="Address" defaultValue={org.address} disabled={!editing} icon={<MapPin className="h-4 w-4" />} iconPosition="left" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Organization Stats</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Staff', value: org.staff, icon: Users },
                      { label: 'Annual Budget', value: `$${(org.budget / 1000).toFixed(0)}K`, icon: Building2 },
                      { label: 'Years Active', value: new Date().getFullYear() - org.foundedYear, icon: Globe },
                    ].map(({ label, value, icon: Icon }) => (
                      <div key={label} className="text-center p-4 rounded-lg bg-[var(--gray-50)]">
                        <Icon className="h-5 w-5 text-[var(--brand-600)] mx-auto mb-2" />
                        <p className="text-xl font-bold text-[var(--text-primary)]">{value}</p>
                        <p className="text-xs text-[var(--text-tertiary)] mt-0.5">{label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="members">
            <div className="max-w-2xl">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-[var(--text-tertiary)]">{mockMembers.length} team members</p>
                <Button size="sm">
                  <Plus className="h-4 w-4" />
                  Invite Member
                </Button>
              </div>
              <Card>
                <CardContent className="p-0">
                  {mockMembers.map((member, i) => (
                    <div key={member.id}>
                      {i > 0 && <Separator />}
                      <div className="flex items-center gap-3 p-4">
                        <Avatar>
                          <AvatarFallback className="text-sm">{member.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-[var(--text-primary)]">{member.name}</p>
                          <p className="text-xs text-[var(--text-tertiary)]">{member.email}</p>
                        </div>
                        <Badge variant={roleColors[member.role]} size="sm" className="capitalize">{member.role}</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="documents">
            <div className="max-w-2xl">
              <Card>
                <CardContent className="py-12 text-center">
                  <Building2 className="h-10 w-10 text-[var(--text-quaternary)] mx-auto mb-3" />
                  <h3 className="text-base font-medium text-[var(--text-primary)] mb-1">No documents uploaded</h3>
                  <p className="text-sm text-[var(--text-tertiary)] mb-4">Upload your organization's key documents here</p>
                  <Button size="sm">
                    <Plus className="h-4 w-4" />
                    Upload Document
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
