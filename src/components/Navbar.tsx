import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Security", href: "#security" },
    { name: "Pricing", href: "#pricing" },
    { name: "Docs", href: "#docs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "glass-frosted glass-multilayer border-b border-border/40 shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Gradient accent line */}
      <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo with glow effect - Responsive */}
          <a
            href="/"
            className="group flex items-center gap-2 font-bold text-xl sm:text-2xl text-foreground hover:text-primary transition-smooth relative"
          >
            <span className="relative">
              BharatGoAi
              <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </span>
          </a>

          {/* Desktop Navigation with glass effect */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 lg:px-4 py-2 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 glass-frosted rounded-xl opacity-0 group-hover:opacity-100 transition-smooth scale-95 group-hover:scale-100" />
              </a>
            ))}
          </div>

          {/* Desktop CTA with ultra-premium styling */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={() => navigate('/chat')}
              size="lg"
              className="relative overflow-hidden group bg-gradient-to-r from-primary via-primary/90 to-primary shadow-lg hover:shadow-primary/50 transition-luxury hover:scale-[1.02] active:scale-[0.98] text-sm lg:text-base px-6 lg:px-8 py-2 lg:py-3"
            >
              <span className="relative z-10 font-semibold">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/30 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button with enhanced glass effect */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 sm:p-3 glass-frosted glass-multilayer rounded-xl sm:rounded-2xl text-muted-foreground hover:text-foreground transition-smooth hover:scale-105 active:scale-95 touch-target relative overflow-hidden group"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with advanced glassmorphism - Enhanced */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 glass-frosted glass-multilayer glass-noise animate-fade-in-up backdrop-blur-3xl">
          <div className="container mx-auto px-4 py-5 sm:py-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground glass-liquid rounded-xl sm:rounded-2xl transition-smooth hover:scale-[1.02] active:scale-[0.98] animate-fade-in-up relative overflow-hidden group touch-target"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
            <div className="pt-3 sm:pt-4 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
              <Button
                onClick={() => {
                  navigate('/chat');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-primary via-primary/90 to-primary shadow-lg hover:shadow-primary/50 transition-luxury hover:scale-[1.02] active:scale-[0.98] font-semibold relative overflow-hidden group text-sm sm:text-base py-5 sm:py-6 touch-target"
                size="lg"
              >
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/30 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
