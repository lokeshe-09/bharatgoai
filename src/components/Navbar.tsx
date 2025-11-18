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

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Solutions", href: "/solutions" },
    { name: "Security", href: "/security" },
    { name: "Pricing", href: "/pricing" },
    { name: "Docs", href: "/docs" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-depth-1 border-b border-cyan-500/20 shadow-elegant-lg"
          : "glass-whisper border-b border-white/8 shadow-ultrathin"
      }`}
    >
      {/* Premium accent line - subtle and refined */}
      <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent transition-all duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />

      {/* Subtle ambient background */}
      <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/3 via-transparent to-cyan-500/3 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'} pointer-events-none`} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo with subtle premium effect */}
          <a
            href="/"
            className="group flex items-center gap-2 font-semibold text-2xl text-white hover:text-cyan-400 transition-all duration-400 relative z-10"
          >
            <span className="relative">
              <span className="transition-colors duration-400">
                BharatGoAi
              </span>
              {/* Subtle glow effect */}
              <span className="absolute -inset-1 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
            </span>
          </a>

          {/* Desktop Navigation - clean and refined */}
          <div className="hidden md:flex items-center gap-1 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2.5 text-sm font-medium text-neutral-300 hover:text-white transition-all duration-400 group overflow-hidden rounded-xl"
              >
                <span className="relative z-10">{link.name}</span>
                {/* Premium glass background on hover */}
                <span className="absolute inset-0 glass-breath rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-400 scale-95 group-hover:scale-100 shadow-ultrathin" />
                {/* Subtle shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-flow rounded-xl" />
                {/* Bottom accent line */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-cyan-400 group-hover:w-1/2 transition-all duration-400 rounded-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA - premium and refined */}
          <div className="hidden md:flex items-center gap-4 relative z-10">
            <Button
              onClick={() => navigate('/chat')}
              size="lg"
              className="relative overflow-hidden group bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 hover:from-cyan-500 hover:via-cyan-600 hover:to-cyan-500 bg-[length:200%_100%] shadow-elegant-md hover:shadow-glow transition-all duration-500 hover:-translate-y-0.5 hover:scale-105 active:scale-98 rounded-xl"
            >
              <span className="relative z-10 font-medium">Get Started</span>
              {/* Subtle shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-flow" />
            </Button>
          </div>

          {/* Mobile Menu Button - premium glass */}
          <div className="md:hidden flex items-center relative z-10">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 glass-breath rounded-xl text-neutral-300 hover:text-white transition-all duration-400 hover:scale-105 active:scale-95 shadow-ultrathin hover:shadow-elegant-sm border border-cyan-500/15"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-5 h-5 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - premium frosted glass */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-cyan-500/20 glass-depth-1 animate-morph-in backdrop-blur-2xl shadow-elegant-lg">
          <div className="container mx-auto px-4 py-6 space-y-3 relative">
            {/* Subtle ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="relative block px-5 py-3.5 text-base font-medium text-neutral-300 hover:text-white glass-breath rounded-2xl transition-all duration-400 hover:scale-102 active:scale-98 shadow-ultrathin hover:shadow-elegant-sm animate-morph-in overflow-hidden group border border-cyan-500/15"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10">{link.name}</span>
                {/* Subtle shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-flow" />
              </a>
            ))}

            <div className="pt-4 animate-morph-in" style={{ animationDelay: '300ms' }}>
              <Button
                onClick={() => {
                  navigate('/chat');
                  setIsMobileMenuOpen(false);
                }}
                className="relative w-full overflow-hidden group bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 hover:from-cyan-500 hover:via-cyan-600 hover:to-cyan-500 bg-[length:200%_100%] shadow-elegant-md hover:shadow-glow transition-all duration-500 hover:scale-105 active:scale-98 font-medium rounded-xl"
                size="lg"
              >
                <span className="relative z-10">Get Started</span>
                {/* Subtle shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-flow" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
