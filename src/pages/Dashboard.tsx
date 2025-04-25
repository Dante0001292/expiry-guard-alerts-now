import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { StatsCard } from "@/components/dashboard/stats-card";
import { ExpiryTable } from "@/components/dashboard/expiry-table";
import { NotificationPanel } from "@/components/dashboard/notification-panel";
import { AppIntegrations } from "@/components/dashboard/app-integrations";
import { ArrowRight, BarChart3, Bell, Clock, Menu, Package, Search, User, AlertTriangle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSidebarOpen(true);
      else setSidebarOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to close sidebar (passed to SidebarNav)
  const closeSidebar = () => {
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <aside
        className={cn(
          "fixed top-0 left-0 z-30 h-screen w-64 border-r bg-white transition-transform lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-label="Sidebar"
      >
        {/* Mobile close button */}
        <div className="flex h-16 items-center justify-between border-b px-6 lg:justify-center">
          <Logo />
          <button
            className="lg:hidden p-2 ml-2"
            aria-label="Close sidebar"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-4 py-4">
          <SidebarNav closeSidebar={closeSidebar} />
        </div>
      </aside>

      {/* Main Content */}
      <div className={cn("flex flex-col flex-1 transition-all min-w-0", sidebarOpen ? "lg:ml-64" : "")}>
        {/* Header */}
        <header className="sticky top-0 z-20 flex flex-col sm:flex-row h-auto sm:h-16 items-start sm:items-center gap-2 sm:gap-4 border-b bg-white px-2 sm:px-4 md:px-6 py-2 sm:py-0">
          <div className="flex w-full items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Menu"
              className="lg:hidden mr-2"
              onClick={() => setSidebarOpen((open) => !open)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold flex-1">Dashboard</h1>
            <Button className="bg-brand-purple hover:bg-brand-purple/90 hidden sm:flex">
              Add Product <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex w-full sm:w-auto items-center gap-2 justify-between sm:justify-end">
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
            <NotificationPanel />
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button className="bg-brand-purple hover:bg-brand-purple/90 flex sm:hidden w-full mt-2" >
              Add Product <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-2 sm:p-4 md:p-6 overflow-auto">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* App Integrations Section */}
            <AppIntegrations />

            {/* Stats Grid */}
            <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
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
