
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Box,
  CalendarCheck2,
  Home,
  Settings,
  ShoppingCart,
  Tag,
  Users
} from "lucide-react";

interface SidebarNavProps {
  className?: string;
}

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Inventory",
    href: "/inventory",
    icon: Box,
  },
  {
    title: "Expiry Calendar",
    href: "/calendar",
    icon: CalendarCheck2,
  },
  {
    title: "Products",
    href: "/products",
    icon: ShoppingCart,
  },
  {
    title: "Categories",
    href: "/categories",
    icon: Tag,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: BarChart3,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function SidebarNav({ className }: SidebarNavProps) {
  return (
    <nav className={cn("flex flex-col gap-2 px-2", className)}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
            location.pathname === item.href
              ? "bg-brand-purple text-white"
              : "hover:bg-muted"
          )}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  );
}
