import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
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
      <TrustSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />

      {/* Enhanced Footer */}
      <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-black bg-gradient-text bg-clip-text text-transparent">
                BharatGoAi
              </h3>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">
                India's most advanced AI platform combining cutting-edge technology with enterprise-grade security.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+917661081043"
                  className="flex items-center gap-2 text-sm text-muted-foreground/80 hover:text-primary transition-colors group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>+91 766 108 1043</span>
                </a>
                <div className="flex gap-3">
                  <a
                    href="https://x.com/bharatgoai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-card/50 hover:bg-primary/20 border border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
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
                    className="w-9 h-9 rounded-lg bg-card/50 hover:bg-primary/20 border border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/bharatgoai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-card/50 hover:bg-primary/20 border border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:support@bharatgoai.com"
                    className="w-9 h-9 rounded-lg bg-card/50 hover:bg-primary/20 border border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Product Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Product</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#features" className="text-muted-foreground/80 hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-muted-foreground/80 hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#docs" className="text-muted-foreground/80 hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#api" className="text-muted-foreground/80 hover:text-primary transition-colors">
                    API Reference
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#about" className="text-muted-foreground/80 hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-muted-foreground/80 hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#careers" className="text-muted-foreground/80 hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground/80 hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#privacy" className="text-muted-foreground/80 hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-muted-foreground/80 hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#security" className="text-muted-foreground/80 hover:text-primary transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#compliance" className="text-muted-foreground/80 hover:text-primary transition-colors">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground/80">
            <p>&copy; 2025 BharatGoAi. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <span>Made with ❤️ in India</span>
              <span>🇮🇳</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-2xl z-40 p-0"
          variant="hero"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </main>
  );
};

export default Index;
