import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Activity, User, LogOut, ChevronDown, FlaskConical, Stethoscope, HeartPulse } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, profile, isAdmin, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/${href}`);
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Solutions", href: "#solutions" },
    { name: "Partnerships", href: "#partnerships" },
    { name: "Vision", href: "#vision" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-primary">Smartcare Health Solutions</h1>
              <p className="text-xs text-muted-foreground">Primary Healthcare Innovation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.name === "Solutions") {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer flex items-center gap-1 outline-none">
                      Solutions
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64 bg-white">
                      <DropdownMenuItem
                        onClick={(e) => handleNavClick(e as unknown as React.MouseEvent, "#solutions")}
                        className="cursor-pointer"
                      >
                        <Activity className="h-4 w-4 mr-2 text-primary" />
                        <div>
                          <div className="font-medium">All Solutions</div>
                          <div className="text-xs text-muted-foreground">Overview of our offerings</div>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link to="/solutions/remote-diagnostic-devices">
                          <Stethoscope className="h-4 w-4 mr-2 text-primary" />
                          <div>
                            <div className="font-medium">Remote Diagnostic Devices</div>
                            <div className="text-xs text-muted-foreground">Connected diagnostic technologies</div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link to="/solutions/higo-device">
                          <HeartPulse className="h-4 w-4 mr-2 text-primary" />
                          <div>
                            <div className="font-medium">Higo Device and App</div>
                            <div className="text-xs text-muted-foreground">Remote diagnostic technology</div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link to="/solutions/smartcare-labs">
                          <FlaskConical className="h-4 w-4 mr-2 text-primary" />
                          <div>
                            <div className="font-medium">Smartcare Labs</div>
                            <div className="text-xs text-muted-foreground">Innovation in primary healthcare</div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
                >
                  {item.name}
                </a>
              );
            })}
            {isAdmin && (
              <Link to="/admin" className="text-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center">
                Admin
                <Badge variant="secondary" className="ml-2">Admin</Badge>
              </Link>
            )}
            
            {/* Auth Section - Only show for logged in users */}
            {user && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">
                  {profile?.first_name || profile?.email}
                </span>
                <Button onClick={handleSignOut} variant="outline" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer block"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                  {item.name === "Solutions" && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-border">
                      <Link
                        to="/solutions/remote-diagnostic-devices"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Stethoscope className="h-4 w-4 mr-2" />
                        Remote Diagnostic Devices
                      </Link>
                      <Link
                        to="/solutions/higo-device"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <HeartPulse className="h-4 w-4 mr-2" />
                        Higo Device and App
                      </Link>
                      <Link
                        to="/solutions/smartcare-labs"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <FlaskConical className="h-4 w-4 mr-2" />
                        Smartcare Labs
                      </Link>
                    </div>
                  )}
                </div>
              ))}
              {isAdmin && (
                <Link 
                  to="/admin" 
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin
                </Link>
              )}
              
              {/* Auth Section - Only show for logged in users */}
              {user && (
                <div className="border-t pt-4 mt-4">
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      Welcome, {profile?.first_name || profile?.email}
                    </div>
                    <Button onClick={handleSignOut} variant="outline" size="sm" className="w-full">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;