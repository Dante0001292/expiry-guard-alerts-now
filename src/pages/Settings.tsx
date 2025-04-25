import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { NotificationPanel } from "@/components/dashboard/notification-panel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Menu, Settings as SettingsIcon, User, Building2, Bell, Lock, Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-30 h-screen w-64 border-r bg-white transition-transform lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-center border-b px-6">
          <Logo />
        </div>
        <div className="space-y-4 py-4">
          <SidebarNav />
        </div>
      </aside>
      {/* Main Content */}
      <div className={cn("flex flex-col flex-1 transition-all", sidebarOpen ? "lg:ml-64" : "")}> 
        {/* Header */}
        <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex-1 md:grow-0">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search settings..."
                className="w-full md:w-[300px] pl-8"
              />
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <NotificationPanel />
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </header>
        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Settings</h1>
            {/* Profile Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-brand-purple" />
                  Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <Input type="text" placeholder="Your Name" defaultValue="Alice Johnson" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input type="email" placeholder="you@email.com" defaultValue="alice@company.com" />
                  </div>
                  <div className="md:col-span-2">
                    <Button className="bg-brand-purple mt-2">Update Profile</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-brand-purple" />
                  Company Info
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Company Name</label>
                    <Input type="text" placeholder="Company Name" defaultValue="Acme Retailers" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <Input type="tel" placeholder="Phone Number" defaultValue="+1 555-1234" />
                  </div>
                  <div className="md:col-span-2">
                    <Button className="bg-brand-purple mt-2">Update Company</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            {/* Notification Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-brand-purple" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4 text-brand-purple" defaultChecked />
                    Email me about expiring products
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4 text-brand-purple" defaultChecked />
                    Email me about inventory updates
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4 text-brand-purple" />
                    Email me about new features
                  </label>
                  <Button className="bg-brand-purple mt-2 w-fit">Save Preferences</Button>
                </form>
              </CardContent>
            </Card>
            {/* Security Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-brand-purple" />
                  Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4 max-w-md">
                  <div>
                    <label className="block text-sm font-medium mb-1">Change Password</label>
                    <Input type="password" placeholder="New Password" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Confirm Password</label>
                    <Input type="password" placeholder="Confirm Password" />
                  </div>
                  <Button className="bg-brand-purple mt-2 w-fit">Update Password</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
} 