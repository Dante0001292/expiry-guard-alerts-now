
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { NotificationPanel } from "@/components/dashboard/notification-panel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Menu, Search, User, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ExpiryCalendar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentMonth, setCurrentMonth] = useState("May 2025");
  
  // Sample expiry data
  const expiryItems = [
    { id: 1, name: "Organic Milk", quantity: 24, date: "May 15, 2025", daysLeft: 21 },
    { id: 2, name: "Greek Yogurt", quantity: 16, date: "May 20, 2025", daysLeft: 26 },
    { id: 3, name: "Whole Wheat Bread", quantity: 8, date: "May 10, 2025", daysLeft: 16 },
    { id: 4, name: "Fresh Apples", quantity: 32, date: "May 24, 2025", daysLeft: 30 }
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
              <h1 className="text-2xl md:text-3xl font-bold">Expiry Calendar</h1>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="font-medium text-xl">{currentMonth}</div>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <Button className="bg-brand-purple hover:bg-brand-purple/90">
                  Today
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-brand-purple" />
                  Products Expiring This Month
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Product Name</th>
                        <th className="text-right py-3 px-4 font-medium">Quantity</th>
                        <th className="text-left py-3 px-4 font-medium">Expiry Date</th>
                        <th className="text-right py-3 px-4 font-medium">Days Left</th>
                      </tr>
                    </thead>
                    <tbody>
                      {expiryItems.map((item) => (
                        <tr key={item.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{item.name}</td>
                          <td className="py-3 px-4 text-right">{item.quantity}</td>
                          <td className="py-3 px-4">{item.date}</td>
                          <td className="py-3 px-4 text-right">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              item.daysLeft < 20 ? "bg-amber-100 text-amber-800" : "bg-green-100 text-green-800"
                            }`}>
                              {item.daysLeft} days
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>May 2025 Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-1">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                        {day}
                      </div>
                    ))}
                    {[...Array(31)].map((_, i) => {
                      const day = i + 1;
                      const hasExpiry = [10, 15, 20, 24].includes(day);
                      return (
                        <div 
                          key={day}
                          className={`text-center py-2 rounded-md border ${
                            hasExpiry ? "bg-amber-50 border-amber-200" : "border-transparent"
                          }`}
                        >
                          <div className="text-sm">{day}</div>
                          {hasExpiry && (
                            <div className="mt-1 h-1 w-1 mx-auto rounded-full bg-amber-500"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Expiry Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Next 7 days</span>
                        <span className="text-sm text-gray-500">0 products</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 rounded-full bg-gray-400" style={{ width: "0%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">8-14 days</span>
                        <span className="text-sm text-gray-500">8 products</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 rounded-full bg-amber-500" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">15-30 days</span>
                        <span className="text-sm text-gray-500">72 products</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 rounded-full bg-brand-purple" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">31-90 days</span>
                        <span className="text-sm text-gray-500">124 products</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 rounded-full bg-green-500" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
