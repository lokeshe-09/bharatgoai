import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import Security from "@/components/Security";
import Stats from "@/components/Stats";
import TrustSection from "@/components/TrustSection";
import Pricing from "@/components/Pricing";
import Docs from "@/components/Docs";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { Github, Linkedin, Mail, ArrowUp, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Solutions />
      <Security />
      <TrustSection />
      <Pricing />
      <Docs />
      <FAQ />
      <CTA />

      {/* Enhanced Footer with glassmorphism */}
      <footer className="relative border-t border-border/40 glass">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Brand Column */}
            <div className="space-y-5">
              <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
                BharatGoAi
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed font-light">
                India's most advanced AI platform combining cutting-edge technology with enterprise-grade security.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+917661081043"
                  className="flex items-center gap-3 text-base text-muted-foreground hover:text-primary transition-smooth group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-butter" />
                  <span>+91 766 108 1043</span>
                </a>
                <div className="flex gap-3">
                  <a
                    href="https://x.com/bharatgoai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-2xl glass-frosted hover:border-primary/50 flex items-center justify-center transition-smooth hover:scale-110 shadow-lg"
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/company/bharatgoai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-2xl glass-frosted hover:border-primary/50 flex items-center justify-center transition-smooth hover:scale-110 shadow-lg"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/bharatgoai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-2xl glass-frosted hover:border-primary/50 flex items-center justify-center transition-smooth hover:scale-110 shadow-lg"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:support@bharatgoai.com"
                    className="w-11 h-11 rounded-2xl glass-frosted hover:border-primary/50 flex items-center justify-center transition-smooth hover:scale-110 shadow-lg"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Product Column */}
            <div className="space-y-5">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Product</h4>
              <ul className="space-y-3 text-base">
                <li>
                  <a href="#features" className="text-muted-foreground hover:text-primary transition-smooth">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-muted-foreground hover:text-primary transition-smooth">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#docs" className="text-muted-foreground hover:text-primary transition-smooth">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#api" className="text-muted-foreground hover:text-primary transition-smooth">
                    API Reference
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-5">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Company</h4>
              <ul className="space-y-3 text-base">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-muted-foreground hover:text-primary transition-smooth">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#careers" className="text-muted-foreground hover:text-primary transition-smooth">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-5">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3 text-base">
                <li>
                  <a href="#privacy" className="text-muted-foreground hover:text-primary transition-smooth">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-muted-foreground hover:text-primary transition-smooth">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#security" className="text-muted-foreground hover:text-primary transition-smooth">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#compliance" className="text-muted-foreground hover:text-primary transition-smooth">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-base text-muted-foreground">
            <p className="font-medium">&copy; 2025 BharatGoAi. All rights reserved.</p>
            <div className="flex flex-wrap gap-6 items-center">
              <span className="flex items-center gap-2">
                Made with <span className="text-red-500 animate-pulse-glow">❤️</span> in India
              </span>
              <span className="text-2xl">🇮🇳</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button with glassmorphism */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-2xl glass-frosted shadow-2xl hover:shadow-primary/50 z-40 p-0 border-2 border-primary/20 hover:border-primary/50 transition-smooth group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-primary group-hover:scale-110 transition-butter" />
        </Button>
      )}
    </main>
  );
};

export default Index;
