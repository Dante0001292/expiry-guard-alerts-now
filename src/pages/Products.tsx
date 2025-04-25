
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { NotificationPanel } from "@/components/dashboard/notification-panel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Menu, Search, User, Plus, ShoppingCart, Filter } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Products() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Sample products data
  const products = [
    { 
      id: 1, 
      name: "Organic Milk", 
      category: "Dairy",
      sku: "ORG-MILK-01",
      supplier: "Farm Fresh Dairy",
      price: "$4.99",
      stock: 120,
      status: "In Stock"
    },
    { 
      id: 2, 
      name: "Whole Wheat Bread", 
      category: "Bakery",
      sku: "WWB-124",
      supplier: "Natural Bakers Co",
      price: "$3.49",
      stock: 45,
      status: "Low Stock"
    },
    { 
      id: 3, 
      name: "Fresh Apples", 
      category: "Produce",
      sku: "FRUIT-APP-22",
      supplier: "Organic Farms Inc",
      price: "$1.99",
      stock: 200,
      status: "In Stock"
    },
    { 
      id: 4, 
      name: "Protein Bars", 
      category: "Health",
      sku: "PROT-BAR-10",
      supplier: "FitHealth Supplies",
      price: "$2.49",
      stock: 85,
      status: "In Stock"
    },
    { 
      id: 5, 
      name: "Greek Yogurt", 
      category: "Dairy",
      sku: "GRK-YOG-06",
      supplier: "Farm Fresh Dairy",
      price: "$5.99",
      stock: 65,
      status: "In Stock"
    },
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
              <h1 className="text-2xl md:text-3xl font-bold">Products</h1>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button className="bg-brand-purple hover:bg-brand-purple/90 flex items-center gap-1">
                  <Plus className="h-4 w-4" />
                  Add Product
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-brand-purple" />
                  Product Catalog
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Product Name</th>
                        <th className="text-left py-3 px-4 font-medium">Category</th>
                        <th className="text-left py-3 px-4 font-medium">SKU</th>
                        <th className="text-left py-3 px-4 font-medium">Supplier</th>
                        <th className="text-right py-3 px-4 font-medium">Price</th>
                        <th className="text-right py-3 px-4 font-medium">Stock</th>
                        <th className="text-left py-3 px-4 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{product.name}</td>
                          <td className="py-3 px-4">{product.category}</td>
                          <td className="py-3 px-4 text-gray-600">{product.sku}</td>
                          <td className="py-3 px-4">{product.supplier}</td>
                          <td className="py-3 px-4 text-right">{product.price}</td>
                          <td className="py-3 px-4 text-right">{product.stock}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              product.status === "Low Stock" 
                                ? "bg-amber-100 text-amber-800" 
                                : "bg-green-100 text-green-800"
                            }`}>
                              {product.status}
                            </span>
                          </td>
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
