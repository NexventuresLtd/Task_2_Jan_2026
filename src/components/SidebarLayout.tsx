import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarLayoutProps {
  children: ReactNode;
}

const menuItems = [
  { label: "Dashboard", path: "/dashboard", icon: "🏠" },
  { label: "My Profile", path: "/profile", icon: "👤" },
  { label: "Services", path: "/", icon: "🛠️" },
];

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-primary/10 border-r border-border flex flex-col">
        <div className="px-6 py-8 font-bold text-2xl text-primary">
          GovConnect
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? "bg-primary text-white font-semibold"
                  : "text-foreground hover:bg-primary/20"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}
