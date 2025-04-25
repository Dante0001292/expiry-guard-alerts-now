
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { StatsCard } from "@/components/dashboard/stats-card";
import { ExpiryTable } from "@/components/dashboard/expiry-table";
import { NotificationPanel } from "@/components/dashboard/notification-panel";
import { AlertTriangle, ArrowRight, BarChart3, Bell, Clock, Menu, Package, Search, User } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
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
                placeholder="Search products..."
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
            <div className="flex items-center justify-between">
              <h1 className="text-2xl md:text-3xl font-bold">
                Dashboard
              </h1>
              <Button className="bg-brand-purple hover:bg-brand-purple/90">
                Add Product <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                title="Expiring Soon (30 days)"
                value="24 Products"
                icon={<Clock className="h-6 w-6" />}
                change={{ value: "12% more", positive: false }}
                priority="medium"
              />
              <StatsCard
                title="Expired Products"
                value="3 Products"
                icon={<AlertTriangle className="h-6 w-6" />}
                change={{ value: "5% less", positive: true }}
                priority="high"
              />
              <StatsCard
                title="Total Inventory"
                value="421 Products"
                icon={<Package className="h-6 w-6" />}
                change={{ value: "8% more", positive: true }}
              />
              <StatsCard
                title="Potential Savings"
                value="$1,240"
                icon={<BarChart3 className="h-6 w-6" />}
                change={{ value: "15% more", positive: true }}
                priority="low"
              />
            </div>

            {/* Expiry Table */}
            <ExpiryTable />
          </div>
        </main>
      </div>
    </div>
  );
}

// Helper function for conditional classes
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
