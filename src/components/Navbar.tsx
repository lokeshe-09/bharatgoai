import { Button } from "@/components/ui/button";
import { Menu, X, Terminal, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "FEATURES", href: "#features" },
    { name: "SOLUTIONS", href: "#solutions" },
    { name: "SECURITY", href: "#security" },
    { name: "PRICING", href: "#pricing" },
    { name: "DOCS", href: "#docs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-background border-b-4 border-foreground"
          : "bg-background/90 border-b-4 border-foreground/50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* BRUTAL LOGO */}
          <a
            href="/"
            className="group cursor-pointer relative"
          >
            <div className="brutal-border bg-primary px-6 py-2 rotate-brutal-2 group-hover:rotate-brutal-4 group-hover:scale-110 transition-all duration-200">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-foreground animate-glitch" />
                <span className="text-brutal text-xl text-foreground tracking-wider">
                  BGAI
                </span>
                <Zap className="w-4 h-4 text-foreground animate-pulse-brutal" />
              </div>
            </div>
            {/* Decorative pixels */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive border-2 border-foreground animate-pixel-drift" />
          </a>

          {/* DESKTOP NAVIGATION - BRUTAL STYLE */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`brutal-border bg-card hover:bg-primary px-4 py-2 text-retro text-xs lg:text-sm text-foreground hover:text-foreground font-bold transition-all duration-200 hover:scale-110 hover:rotate-brutal-2 ${
                  index % 2 === 0 ? 'rotate-brutal-1' : '-rotate-brutal-1'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* DESKTOP CTA - BRUTAL */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={() => navigate('/chat')}
              className="brutal-border-thick bg-accent hover:bg-accent/80 text-foreground text-brutal text-sm lg:text-base px-6 py-5 rotate-brutal-2 hover:rotate-brutal-3 hover:scale-110 transition-all duration-200 relative group"
            >
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary border-2 border-foreground animate-bounce-brutal" />
              <Terminal className="mr-2 w-5 h-5 animate-glitch" />
              GET_STARTED
              <Zap className="ml-2 w-5 h-5 group-hover:animate-rotate-chaos" />
            </Button>
          </div>

          {/* MOBILE MENU BUTTON - BRUTAL */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="brutal-border bg-primary hover:bg-secondary p-3 hover:rotate-brutal-3 hover:scale-110 transition-all duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground animate-glitch" strokeWidth={3} />
              ) : (
                <Menu className="w-6 h-6 text-foreground animate-pulse-brutal" strokeWidth={3} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU - CHAOTIC BRUTALIST */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b-4 border-foreground pixel-grid noise-texture">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`block brutal-border bg-card hover:bg-primary p-4 text-retro text-base text-foreground font-bold transition-all duration-200 hover:scale-105 ${
                  index % 2 === 0 ? 'rotate-brutal-1' : '-rotate-brutal-1'
                } hover:rotate-brutal-2`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  <div className="w-2 h-2 bg-primary border-2 border-foreground animate-pixel-drift" />
                </div>
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-4">
              <Button
                onClick={() => {
                  navigate('/chat');
                  setIsMobileMenuOpen(false);
                }}
                className="brutal-border-thick bg-accent hover:bg-accent/80 text-foreground text-brutal text-lg px-8 py-6 rotate-brutal-2 hover:rotate-brutal-4 hover:scale-105 transition-all duration-200 relative"
              >
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-destructive border-2 border-foreground animate-glitch" />
                <Terminal className="mr-2 w-6 h-6" />
                GET_STARTED
                <Zap className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
