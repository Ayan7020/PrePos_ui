"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  Users, 
  Settings, 
  LogOut, 
  Store,
  Bell,
  User as UserIcon
} from "lucide-react";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEmail = localStorage.getItem("userEmail") || "User";
      setUserEmail(storedEmail);
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userEmail");
    }
    router.push("/login");
  };

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      active: pathname === "/dashboard",
      disabled: false,
    },
    {
      name: "Sales (POS)",
      href: "/dashboard/sales",
      icon: ShoppingBag,
      active: pathname === "/dashboard/sales",
      disabled: true,
    },
    {
      name: "Inventory",
      href: "/dashboard/inventory",
      icon: Package,
      active: pathname === "/dashboard/inventory",
      disabled: true,
    },
    {
      name: "Members",
      href: "/dashboard/members",
      icon: Users,
      active: pathname === "/dashboard/members",
      disabled: true,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      active: pathname === "/dashboard/settings",
      disabled: true,
    },
  ];

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-border flex flex-col justify-between h-full">
        {/* Brand/Header */}
        <div>
          <div className="h-16 flex items-center px-6 border-b border-border gap-2">
            <Store className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold tracking-tight text-primary">PrEpos</span>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              if (item.disabled) {
                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-disabled cursor-not-allowed select-none text-sm font-medium"
                    title="Coming soon"
                  >
                    <Icon className="w-5 h-5 opacity-60" />
                    <span>{item.name}</span>
                    <span className="ml-auto text-[10px] bg-border px-1.5 py-0.5 rounded text-foreground font-semibold uppercase tracking-wider">
                      Soon
                    </span>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    item.active
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-background hover:text-primary"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Info / Logout */}
        <div className="p-4 border-t border-border space-y-3">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              <UserIcon className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold truncate">{userEmail}</span>
              <span className="text-xs text-text-secondary">Owner</span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-lg transition-all animate-duration-150"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top bar */}
        <header className="h-16 bg-surface border-b border-border flex items-center justify-between px-8">
          <h1 className="text-lg font-semibold capitalize">
            {pathname.split("/").pop() || "Dashboard"}
          </h1>
          <div className="flex items-center gap-4">
            <button className="p-2 text-text-secondary hover:text-foreground hover:bg-background rounded-full transition-all">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
