import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { NotificationPanel } from "@/components/dashboard/notification-panel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Menu, BarChart2, FileText, Filter, Search, User, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Reports() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  // Sample analytics data
  const analytics = [
    { icon: <TrendingUp className="h-6 w-6 text-green-600" />, label: "Waste Prevented", value: "$1,200" },
    { icon: <AlertTriangle className="h-6 w-6 text-amber-500" />, label: "Expiring Soon", value: "8 items" },
    { icon: <CheckCircle className="h-6 w-6 text-blue-600" />, label: "Compliant Batches", value: "98%" },
  ];
  // Sample events data
  const events = [
    { id: 1, type: "Expiry Alert", product: "Organic Milk", date: "2024-06-01", action: "Discounted" },
    { id: 2, type: "Stock Update", product: "Whole Wheat Bread", date: "2024-05-28", action: "Removed" },
    { id: 3, type: "Expiry Alert", product: "Greek Yogurt", date: "2024-05-25", action: "Discounted" },
    { id: 4, type: "Stock Update", product: "Protein Bars", date: "2024-05-20", action: "Sold" },
  ];
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
                placeholder="Search reports..."
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
              <h1 className="text-2xl md:text-3xl font-bold">Reports & Analytics</h1>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>
            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {analytics.map((a, i) => (
                <Card key={i} className="flex flex-row items-center gap-4 p-4">
                  <div>{a.icon}</div>
                  <div>
                    <div className="text-lg font-bold">{a.value}</div>
                    <div className="text-gray-500 text-sm">{a.label}</div>
                  </div>
                </Card>
              ))}
            </div>
            {/* Events Table */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart2 className="h-5 w-5 text-brand-purple" />
                  Recent Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Type</th>
                        <th className="text-left py-3 px-4 font-medium">Product</th>
                        <th className="text-left py-3 px-4 font-medium">Date</th>
                        <th className="text-left py-3 px-4 font-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map((event) => (
                        <tr key={event.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{event.type}</td>
                          <td className="py-3 px-4">{event.product}</td>
                          <td className="py-3 px-4">{event.date}</td>
                          <td className="py-3 px-4">{event.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
} 