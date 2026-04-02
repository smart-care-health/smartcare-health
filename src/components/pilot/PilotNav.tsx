import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const pilotLinks = [
  { label: "Overview", href: "/higo-pilot" },
  { label: "How It Works", href: "/higo-pilot/how-it-works" },
  { label: "For Participants", href: "/higo-pilot/participants" },
  { label: "For Providers & Partners", href: "/higo-pilot/partners" },
  { label: "Updates", href: "/higo-pilot/updates" },
  { label: "Privacy Notice", href: "/higo-pilot/privacy" },
];

const PilotNav = () => {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white border-b border-border sticky top-[73px] z-40">
      <div className="container mx-auto px-6">
        <div className="flex overflow-x-auto scrollbar-hide -mb-px">
          {pilotLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "whitespace-nowrap px-4 py-3 text-sm font-medium border-b-2 transition-colors",
                pathname === link.href
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default PilotNav;
