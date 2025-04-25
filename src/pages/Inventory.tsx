
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { NotificationPanel } from "@/components/dashboard/notification-panel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Menu, Package, Search, User, Filter, PlusCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Inventory() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const inventoryItems = [
    { id: 1, name: "Organic Milk", sku: "ORG-MILK-01", quantity: 120, expiryDate: "2025-06-15", category: "Dairy" },
    { id: 2, name: "Whole Wheat Bread", sku: "WWB-124", quantity: 45, expiryDate: "2025-05-10", category: "Bakery" },
    { id: 3, name: "Fresh Apples", sku: "FRUIT-APP-22", quantity: 200, expiryDate: "2025-05-24", category: "Produce" },
    { id: 4, name: "Protein Bars", sku: "PROT-BAR-10", quantity: 85, expiryDate: "2025-10-18", category: "Health" },
    { id: 5, name: "Greek Yogurt", sku: "GRK-YOG-06", quantity: 65, expiryDate: "2025-05-20", category: "Dairy" },
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
                placeholder="Search inventory..."
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
              <h1 className="text-2xl md:text-3xl font-bold">Inventory Management</h1>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button className="bg-brand-purple hover:bg-brand-purple/90 flex items-center gap-1">
                  <PlusCircle className="h-4 w-4" />
                  Add Item
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Current Inventory</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Product Name</th>
                        <th className="text-left py-3 px-4 font-medium">SKU</th>
                        <th className="text-left py-3 px-4 font-medium">Category</th>
                        <th className="text-right py-3 px-4 font-medium">Quantity</th>
                        <th className="text-left py-3 px-4 font-medium">Expiry Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inventoryItems.map((item) => (
                        <tr key={item.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{item.name}</td>
                          <td className="py-3 px-4 text-gray-600">{item.sku}</td>
                          <td className="py-3 px-4">{item.category}</td>
                          <td className="py-3 px-4 text-right">{item.quantity}</td>
                          <td className="py-3 px-4">{item.expiryDate}</td>
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
