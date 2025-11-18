import Navbar from "@/components/Navbar";
import { Github, Linkedin, Mail, ArrowRight, MessageSquare, Shield, Zap, Globe2, Phone, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
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

  const sections = [
    {
      title: "Features",
      description: "See what you can build with our platform",
      icon: Zap,
      href: "/features",
      glassColor: "glass-ocean"
    },
    {
      title: "Solutions",
      description: "Find the right fit for your business",
      icon: Globe2,
      href: "/solutions",
      glassColor: "glass-seafoam"
    },
    {
      title: "Security",
      description: "Learn how we protect your data",
      icon: Shield,
      href: "/security",
      glassColor: "glass-coral"
    },
    {
      title: "Pricing",
      description: "Simple plans that scale with you",
      icon: MessageSquare,
      href: "/pricing",
      glassColor: "glass-ocean"
    }
  ];

  return (
    <main className="min-h-screen ocean-bg ocean-mesh">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 perspective-far">
        {/* Hyper-Advanced Floating background elements with quantum effects */}
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-ocean-500/10 rounded-full blur-3xl animate-float-gentle animate-quantum-pulse" />
        <div className="absolute top-40 right-[15%] w-80 h-80 bg-seafoam-500/8 rounded-full blur-3xl animate-float-ethereal delay-300" />
        <div className="absolute bottom-32 left-[40%] w-72 h-72 bg-coral-500/8 rounded-full blur-3xl animate-float-gentle delay-500 animate-breathe-glow" />

        {/* Additional aurora background layers */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-ocean-500/5 via-transparent to-seafoam-500/5 animate-aurora-dance" />
        </div>

        {/* Particle effects */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-ocean-400/60 animate-particle-float" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-seafoam-400/60 animate-particle-float delay-200" />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-coral-400/60 animate-particle-float delay-400" />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side - Hero content */}
            <div className="lg:col-span-7 space-y-8 max-w-3xl">
              {/* Badge with holographic effect */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-holographic border border-ocean-500/20 hover-scale transition-luxury animate-pulse-glow">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ocean-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-ocean-500 shadow-particle"></span>
                </span>
                <span className="text-ocean-400 font-semibold text-sm tracking-wide">Made in India 🇮🇳</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.15] tracking-tight">
                AI that speaks
                <br />
                <span className="text-ocean-gradient">
                  your language
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Chat with AI in 15+ Indian languages. Your data stays on Indian servers.
                Built for teams and businesses.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-4">
                <Button
                  onClick={() => navigate('/chat')}
                  size="lg"
                  className="w-full sm:w-auto px-7 py-5 text-base rounded-2xl bg-gradient-to-r from-ocean-500 to-ocean-600 hover:from-ocean-600 hover:to-ocean-700 shadow-lg hover:shadow-ocean-500/30 transition-all hover:-translate-y-0.5 active-press"
                >
                  <span className="flex items-center gap-2">
                    Try it free
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>

                <Button
                  onClick={() => navigate('/docs')}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-7 py-5 text-base rounded-2xl glass-medium border-ocean-500/30 hover:border-ocean-500/50 hover:bg-ocean-500/10 text-white"
                >
                  Read docs
                </Button>
              </div>

            </div>

            {/* Right side - Ultra-Advanced Interactive preview */}
            <div className="lg:col-span-5 hidden lg:block transform-3d">
              <div className="glass-infinity rounded-3xl p-8 hover-3d-float transition-luxury shadow-holographic animate-perspective-rotate">
                <div className="space-y-5">
                  {/* User message with chromatic effect */}
                  <div className="flex gap-3 animate-morph-in">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-ocean-500 to-ocean-600 flex items-center justify-center text-white font-semibold text-sm shadow-glow hover-glow transition-smooth">
                      U
                    </div>
                    <div className="flex-1 glass-prism rounded-2xl px-4 py-3 hover-lift transition-glass">
                      <p className="text-white text-sm">Explain AI in simple words</p>
                    </div>
                  </div>

                  {/* AI response with holographic shimmer */}
                  <div className="flex gap-3 animate-morph-in delay-300">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-seafoam-500 to-seafoam-600 flex items-center justify-center text-white font-bold text-sm shadow-glow-intense hover:rotate-12 transition-luxury">
                      AI
                    </div>
                    <div className="flex-1 glass-aurora rounded-2xl px-4 py-3 hover-scale transition-glass">
                      <p className="text-slate-200 text-sm leading-relaxed">
                        AI helps computers learn from data, just like how you learn from experience.
                        It can understand patterns and make decisions.
                      </p>
                    </div>
                  </div>

                  {/* Typing indicator with quantum pulse */}
                  <div className="flex gap-3 animate-morph-in delay-500">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-seafoam-500 to-seafoam-600 flex items-center justify-center opacity-50 animate-quantum-pulse">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-particle" />
                    </div>
                    <div className="flex-1 glass-chromatic rounded-2xl px-4 py-3 hover-glow transition-smooth">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse shadow-particle" />
                        <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse delay-100 shadow-particle" />
                        <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse delay-200 shadow-particle" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Explore the platform
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Everything you need to get started with AI
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-mid">
            {sections.map((section, index) => {
              const Icon = section.icon;

              // Assign advanced glass effects to each card
              const glassEffects = [
                'glass-magnetic shadow-hyperdeep',
                'glass-3d-lift glass-liquid shadow-infinity',
                'glass-holographic glass-particle shadow-holographic',
                'glass-quantum-effect shadow-quantum'
              ];

              return (
                <button
                  key={index}
                  onClick={() => navigate(section.href)}
                  className={`group relative ${glassEffects[index]} rounded-3xl p-8 transition-luxury hover-3d-float text-left animate-morph-in transform-3d`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon with quantum pulse */}
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-2xl glass-hyperdeep backdrop-blur-sm group-hover:scale-110 transition-luxury group-hover:shadow-particle">
                      <Icon className="w-7 h-7 text-white group-hover:text-glow" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-glow transition-smooth">
                      {section.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {section.description}
                    </p>
                  </div>

                  {/* Arrow with holographic effect */}
                  <div className="mt-6 flex items-center gap-2 text-white/60 group-hover:text-white transition-smooth">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </div>

                  {/* Lens flare effect on hover */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-ocean-400/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-lens-flare" />
                </button>
              );
            })}
          </div>

          {/* Additional links with advanced glassmorphism */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/docs')}
              className="px-6 py-3 rounded-2xl glass-hyperdeep border border-ocean-500/20 text-white hover:border-ocean-500/40 hover:shadow-holographic transition-luxury font-medium hover-lift hover-scale"
            >
              📚 Documentation
            </button>
            <button
              onClick={() => navigate('/faq')}
              className="px-6 py-3 rounded-2xl glass-hyperdeep border border-ocean-500/20 text-white hover:border-ocean-500/40 hover:shadow-holographic transition-luxury font-medium hover-lift hover-scale"
            >
              ❓ FAQ
            </button>
          </div>
        </div>
      </section>

      {/* Footer with hyper-advanced glassmorphism */}
      <footer className="relative border-t border-white/10 glass-depth-2 animate-aurora-flow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-5">
              <h3 className="text-2xl sm:text-3xl font-bold text-ocean-gradient">
                BharatGoAi
              </h3>
              <p className="text-base text-slate-400 leading-relaxed">
                Indian AI platform designed for Indian businesses. Multi-language support with data sovereignty.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+917661081043"
                  className="flex items-center gap-3 text-base text-slate-400 hover:text-ocean-400 transition-smooth group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>+91 766 108 1043</span>
                </a>
                <div className="flex gap-3">
                  <a
                    href="https://x.com/bharatgoai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-2xl glass-magnetic border border-white/10 hover:border-ocean-500/30 flex items-center justify-center transition-luxury hover-glow shadow-glow transform-3d"
                  >
                    <svg className="w-4 h-4 text-white group-hover:text-glow" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/company/bharatgoai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-2xl glass-holographic border border-white/10 hover:border-ocean-500/30 flex items-center justify-center transition-luxury hover-glow shadow-glow-intense transform-3d"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://github.com/bharatgoai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-2xl glass-chromatic border border-white/10 hover:border-ocean-500/30 flex items-center justify-center transition-luxury hover-glow shadow-quantum transform-3d"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="mailto:support@bharatgoai.com"
                    className="w-11 h-11 rounded-2xl glass-prism border border-white/10 hover:border-ocean-500/30 flex items-center justify-center transition-luxury hover-glow shadow-holographic transform-3d"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Product Column */}
            <div className="space-y-5">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Product</h4>
              <ul className="space-y-3 text-base">
                <li><a href="/features" className="text-slate-400 hover:text-ocean-400 transition-smooth">Features</a></li>
                <li><a href="/pricing" className="text-slate-400 hover:text-ocean-400 transition-smooth">Pricing</a></li>
                <li><a href="/docs" className="text-slate-400 hover:text-ocean-400 transition-smooth">Documentation</a></li>
                <li><a href="/chat" className="text-slate-400 hover:text-ocean-400 transition-smooth">Try Chat</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-5">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company</h4>
              <ul className="space-y-3 text-base">
                <li><a href="/solutions" className="text-slate-400 hover:text-ocean-400 transition-smooth">Solutions</a></li>
                <li><a href="/security" className="text-slate-400 hover:text-ocean-400 transition-smooth">Security</a></li>
                <li><a href="/faq" className="text-slate-400 hover:text-ocean-400 transition-smooth">FAQ</a></li>
                <li><a href="mailto:support@bharatgoai.com" className="text-slate-400 hover:text-ocean-400 transition-smooth">Contact</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-5">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3 text-base">
                <li><a href="#privacy" className="text-slate-400 hover:text-ocean-400 transition-smooth">Privacy Policy</a></li>
                <li><a href="#terms" className="text-slate-400 hover:text-ocean-400 transition-smooth">Terms of Service</a></li>
                <li><a href="/security" className="text-slate-400 hover:text-ocean-400 transition-smooth">Security</a></li>
                <li><a href="#compliance" className="text-slate-400 hover:text-ocean-400 transition-smooth">Compliance</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-base text-slate-400">
            <p className="font-medium">&copy; 2025 BharatGoAi. All rights reserved.</p>
            <div className="flex flex-wrap gap-6 items-center">
              <span className="flex items-center gap-2">
                Made in India <span className="text-2xl">🇮🇳</span>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button with quantum effects */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-2xl glass-quantum-effect border-2 border-ocean-500/30 hover:border-ocean-500/50 z-40 p-0 transition-luxury hover-3d-float group shadow-holographic animate-quantum-pulse transform-3d"
        >
          <ArrowUp className="w-6 h-6 text-ocean-400 group-hover:text-ocean-300 group-hover:-translate-y-2 transition-all group-hover:text-glow" />
        </Button>
      )}
    </main>
  );
};

export default HomePage;
