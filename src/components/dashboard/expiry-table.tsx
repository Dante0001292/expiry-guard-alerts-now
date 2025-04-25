
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Tag, 
  ArrowDown, 
  ArrowUp, 
  ChevronLeft, 
  ChevronRight, 
  Clock,
  AlertTriangle
} from "lucide-react";

// Define your data structure
interface Product {
  id: string;
  name: string;
  category: string;
  stock: number;
  expiryDate: Date;
  daysLeft: number;
  batchNumber: string;
}

// Sample product data
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Organic Milk",
    category: "Dairy",
    stock: 24,
    expiryDate: new Date(2025, 4, 30),
    daysLeft: 5,
    batchNumber: "B2023-001"
  },
  {
    id: "2",
    name: "Greek Yogurt",
    category: "Dairy",
    stock: 18,
    expiryDate: new Date(2025, 5, 15),
    daysLeft: 20,
    batchNumber: "B2023-005"
  },
  {
    id: "3",
    name: "Whole Wheat Bread",
    category: "Bakery",
    stock: 12,
    expiryDate: new Date(2025, 5, 2),
    daysLeft: 7,
    batchNumber: "B2023-010"
  },
  {
    id: "4",
    name: "Fresh Orange Juice",
    category: "Beverages",
    stock: 36,
    expiryDate: new Date(2025, 5, 10),
    daysLeft: 15,
    batchNumber: "B2023-015"
  },
  {
    id: "5",
    name: "Chocolate Cookies",
    category: "Snacks",
    stock: 48,
    expiryDate: new Date(2025, 6, 25),
    daysLeft: 61,
    batchNumber: "B2023-020"
  }
];

export function ExpiryTable() {
  const [sortField, setSortField] = useState<keyof Product>("daysLeft");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  
  const handleSort = (field: keyof Product) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };
  
  // Sort products based on the selected field and order
  const sortedProducts = [...sampleProducts].sort((a, b) => {
    if (sortField === "expiryDate" || sortField === "daysLeft") {
      return sortOrder === "asc" 
        ? a[sortField] > b[sortField] ? 1 : -1
        : a[sortField] < b[sortField] ? 1 : -1;
    }
    
    return sortOrder === "asc" 
      ? String(a[sortField]).localeCompare(String(b[sortField]))
      : String(b[sortField]).localeCompare(String(a[sortField]));
  });
  
  // Helper function to format dates
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  // Helper function to get the appropriate style based on days left
  const getDaysLeftStyle = (daysLeft: number) => {
    if (daysLeft <= 7) {
      return "text-red-600 font-medium flex items-center";
    } else if (daysLeft <= 30) {
      return "text-amber-500 font-medium flex items-center";
    } else {
      return "text-green-600 font-medium flex items-center";
    }
  };
  
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold flex items-center">
          <Calendar className="mr-2 h-5 w-5 text-brand-purple" />
          Products Expiring Soon
        </h2>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">
                <button 
                  className="flex items-center" 
                  onClick={() => handleSort("name")}
                >
                  Product Name
                  {sortField === "name" && (
                    sortOrder === "asc" ? <ArrowUp className="ml-2 h-4 w-4" /> : <ArrowDown className="ml-2 h-4 w-4" />
                  )}
                </button>
              </TableHead>
              <TableHead>
                <button 
                  className="flex items-center" 
                  onClick={() => handleSort("category")}
                >
                  Category
                  {sortField === "category" && (
                    sortOrder === "asc" ? <ArrowUp className="ml-2 h-4 w-4" /> : <ArrowDown className="ml-2 h-4 w-4" />
                  )}
                </button>
              </TableHead>
              <TableHead className="text-right">Stock</TableHead>
              <TableHead>
                <button 
                  className="flex items-center" 
                  onClick={() => handleSort("expiryDate")}
                >
                  Expiry Date
                  {sortField === "expiryDate" && (
                    sortOrder === "asc" ? <ArrowUp className="ml-2 h-4 w-4" /> : <ArrowDown className="ml-2 h-4 w-4" />
                  )}
                </button>
              </TableHead>
              <TableHead>
                <button 
                  className="flex items-center" 
                  onClick={() => handleSort("daysLeft")}
                >
                  Days Left
                  {sortField === "daysLeft" && (
                    sortOrder === "asc" ? <ArrowUp className="ml-2 h-4 w-4" /> : <ArrowDown className="ml-2 h-4 w-4" />
                  )}
                </button>
              </TableHead>
              <TableHead>Batch #</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedProducts.map((product) => (
              <TableRow key={product.id} className="animate-fade-in">
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple">
                    <Tag className="mr-1 h-3 w-3" />
                    {product.category}
                  </span>
                </TableCell>
                <TableCell className="text-right">{product.stock}</TableCell>
                <TableCell>{formatDate(product.expiryDate)}</TableCell>
                <TableCell>
                  <span className={getDaysLeftStyle(product.daysLeft)}>
                    {product.daysLeft <= 7 && <AlertTriangle className="mr-1 h-4 w-4" />}
                    {product.daysLeft > 7 && product.daysLeft <= 30 && <Clock className="mr-1 h-4 w-4" />}
                    {product.daysLeft} days
                  </span>
                </TableCell>
                <TableCell>{product.batchNumber}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button size="sm" variant="outline">Discount</Button>
                  <Button size="sm" variant="outline">Move</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-muted-foreground">
          Showing 5 of 24 products
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
