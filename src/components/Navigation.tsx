
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, BarChart, BookOpen, User, Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navigationItems = [
  {
    name: "Dashboard",
    icon: Home,
    path: "/dashboard",
  },
  {
    name: "Journal",
    icon: BookOpen,
    path: "/journal",
  },
  {
    name: "Insights",
    icon: BarChart,
    path: "/insights",
  },
  {
    name: "Profile",
    icon: User,
    path: "/profile",
  },
];

export function Navigation() {
  const location = useLocation();
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const isMobile = useIsMobile();

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  if (isMobile) {
    return (
      <>
        <button
          onClick={toggleMobileNav}
          className="fixed top-4 right-4 z-50 p-2 rounded-full bg-primary text-primary-foreground shadow-md"
        >
          <Menu size={24} />
        </button>

        {isMobileNavOpen && (
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setIsMobileNavOpen(false)}
          />
        )}

        <nav
          className={cn(
            "fixed bottom-0 left-0 right-0 bg-background border-t z-50 transform transition-transform duration-300",
            isMobileNavOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          <div className="flex justify-around items-center h-16">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center p-2 rounded-md transition-colors",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setIsMobileNavOpen(false)}
              >
                <item.icon size={20} />
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            ))}
          </div>
        </nav>

        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <div 
            className="bg-primary/90 text-primary-foreground rounded-full px-4 py-2 shadow-lg text-sm animate-pulse-soft"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            <div className="flex items-center space-x-1 cursor-pointer">
              <Menu size={16} />
              <span>Menu</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <aside className="hidden md:flex flex-col glass-card w-60 h-screen sticky top-0 border-r animate-slide-right">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            W
          </div>
          <span className="text-xl font-light">Wellness</span>
        </div>
      </div>

      <nav className="flex-1 px-4 pb-4">
        <ul className="space-y-1">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-md transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t">
        <div className="glass-card rounded-md p-4 bg-primary/5">
          <h4 className="font-medium mb-1">Pro Tip</h4>
          <p className="text-xs text-muted-foreground">Take a moment to breathe deeply and center yourself.</p>
        </div>
      </div>
    </aside>
  );
}
