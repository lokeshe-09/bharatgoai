import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Shield, Languages } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const [activeUsers, setActiveUsers] = useState(12847);
  const [queries, setQueries] = useState(2896341);

  // Counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 5));
      setQueries(prev => prev + Math.floor(Math.random() * 23));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Premium ambient background - muted and sophisticated */}
      <div className="absolute inset-0 -z-10 charcoal-bg">
        {/* Subtle depth layers - asymmetric placement */}
        <div className="absolute top-[15%] left-[12%] w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/8 via-cyan-600/5 to-transparent rounded-full blur-[160px] animate-float-gentle" />
        <div className="absolute top-[40%] right-[15%] w-[500px] h-[500px] bg-gradient-to-bl from-cyan-400/6 via-transparent to-transparent rounded-full blur-[140px] animate-float-gentle" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-[20%] left-[40%] w-[420px] h-[420px] bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-full blur-[120px] animate-float-ethereal" style={{ animationDelay: '5s' }} />

        {/* Ambient glow accents - very subtle */}
        <div className="absolute top-[50%] right-[25%] w-[280px] h-[280px] bg-gradient-to-r from-cyan-500/6 to-transparent rounded-full blur-[100px] animate-breathe-glow opacity-70" style={{ animationDelay: '2s' }} />
      </div>

      {/* Subtle mesh overlay */}
      <div className="absolute inset-0 -z-10 graphite-mesh opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Asymmetric grid - intentional off-balance */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">

            {/* Left Content - Asymmetric spacing */}
            <div className="lg:col-span-7 space-y-12 animate-fade-in-up">

              {/* Premium badge with subtle glass effect */}
              <div className="inline-block animate-morph-in">
                <div className="glass-whisper text-cyan-500 px-6 py-3 rounded-2xl text-sm font-semibold shadow-ultrathin relative overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer border border-cyan-500/20 hover:border-cyan-500/30">
                  <span className="relative z-10 flex items-center gap-2.5">
                    <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full animate-pulse-glow shadow-glow" />
                    India's #1 Enterprise AI Platform
                  </span>
                  {/* Subtle shimmer */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-flow" />
                </div>
              </div>

              {/* Headline - Premium editorial typography with asymmetric line breaks */}
              <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.1] tracking-tighter">
                  India's Most{' '}
                  <span className="relative inline-block font-medium">
                    <span className="text-cyan-gradient">
                      Trusted
                    </span>
                  </span>
                  {' '}AI Platform
                </h1>

                {/* Premium tagline - authoritative and specific */}
                <p className="text-xl sm:text-2xl md:text-3xl text-neutral-200 font-light leading-[1.4] tracking-tight max-w-3xl">
                  Built for Real Work, Real Languages, and Real Businesses.
                </p>
              </div>

              {/* Description - cleaner hierarchy */}
              <div className="max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                  Enterprise-grade AI intelligence with native support for 15+ Indian languages.
                  Secure, compliant, and built for Indian businesses.
                </p>
              </div>

              {/* CTA Buttons - premium with asymmetric spacing */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-morph-in" style={{ animationDelay: '0.3s' }}>
                <Button
                  onClick={() => navigate('/chat')}
                  size="lg"
                  className="group relative overflow-hidden px-8 py-6 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 hover:from-cyan-500 hover:via-cyan-600 hover:to-cyan-500 bg-[length:200%_100%] shadow-elegant-lg hover:shadow-glow transition-all duration-500 hover:scale-105 hover:-translate-y-1 active:scale-98 rounded-xl"
                >
                  <span className="relative z-10 flex items-center gap-2.5 font-medium text-base">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-400" />
                  </span>
                  {/* Subtle shimmer */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-flow" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/docs')}
                  className="group relative overflow-hidden glass-breath px-8 py-6 border-cyan-500/25 hover:border-cyan-500/40 shadow-ultrathin hover:shadow-glow transition-all duration-500 hover:scale-102 active:scale-98 rounded-xl"
                >
                  <span className="relative z-10 flex items-center gap-2.5 font-medium text-base">
                    <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-400" />
                    View Documentation
                  </span>
                  {/* Subtle shimmer */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-flow" />
                </Button>
              </div>

              {/* Stats - premium frosted glass with handcrafted spacing */}
              <div className="grid grid-cols-3 gap-4 pt-6 animate-morph-in" style={{ animationDelay: '0.4s' }}>
                <div className="relative p-6 rounded-2xl glass-breath border border-cyan-500/15 group hover:border-cyan-500/30 transition-all duration-500 hover:scale-105 cursor-pointer shadow-ultrathin hover:shadow-elegant-sm overflow-hidden">
                  <div className="text-3xl sm:text-4xl font-light text-cyan-gradient">
                    {(activeUsers/1000).toFixed(1)}K+
                  </div>
                  <div className="text-xs text-muted-foreground mt-2.5 font-medium">
                    Active Users
                  </div>
                  {/* Subtle shimmer */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/8 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-flow" />
                </div>

                <div className="relative p-6 rounded-2xl glass-breath border border-cyan-500/15 group hover:border-cyan-500/30 transition-all duration-500 hover:scale-105 cursor-pointer shadow-ultrathin hover:shadow-elegant-sm overflow-hidden">
                  <div className="text-3xl sm:text-4xl font-light text-cyan-gradient">
                    {(queries/1000000).toFixed(1)}M+
                  </div>
                  <div className="text-xs text-muted-foreground mt-2.5 font-medium">
                    Queries Processed
                  </div>
                  {/* Subtle shimmer */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/8 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-flow" />
                </div>

                <div className="relative p-6 rounded-2xl glass-breath border border-cyan-500/15 group hover:border-cyan-500/30 transition-all duration-500 hover:scale-105 cursor-pointer shadow-ultrathin hover:shadow-elegant-sm overflow-hidden">
                  <div className="text-3xl sm:text-4xl font-light text-cyan-gradient">
                    15+
                  </div>
                  <div className="text-xs text-muted-foreground mt-2.5 font-medium">
                    Indian Languages
                  </div>
                  {/* Subtle shimmer */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/8 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-flow" />
                </div>
              </div>
            </div>

            {/* Right Content - Premium asymmetric cards */}
            <div className="lg:col-span-5 space-y-6">

              {/* Feature Cards - asymmetric sizing and premium glass */}
              <div className="space-y-5">

                {/* Card 1 - Larger, premium positioning */}
                <div className="relative glass-breath group animate-morph-in rounded-3xl p-8 shadow-elegant-md hover:shadow-elegant-lg transition-all duration-500 hover:scale-102 cursor-pointer border border-cyan-500/20 hover:border-cyan-500/30 overflow-hidden" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/25 via-cyan-600/20 to-cyan-700/15 rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Zap className="w-7 h-7 text-cyan-400" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan-400 transition-colors duration-400">
                        Lightning Performance
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Sub-second response times with our optimized infrastructure and edge computing
                      </p>
                    </div>
                  </div>
                  {/* Subtle shimmer */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/8 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-flow" />
                </div>

                {/* Card 2 - Offset slightly */}
                <div className="relative glass-breath group animate-morph-in rounded-3xl p-8 shadow-elegant-md hover:shadow-elegant-lg transition-all duration-500 hover:scale-102 cursor-pointer border border-cyan-500/20 hover:border-cyan-500/30 overflow-hidden ml-6" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/25 via-cyan-600/20 to-cyan-700/15 rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Shield className="w-7 h-7 text-cyan-400" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan-400 transition-colors duration-400">
                        Enterprise Security
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        SOC 2 Type II certified with end-to-end encryption and data residency
                      </p>
                    </div>
                  </div>
                  {/* Subtle shimmer */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/8 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-flow" />
                </div>

                {/* Card 3 - Back to standard alignment */}
                <div className="relative glass-breath group animate-morph-in rounded-3xl p-8 shadow-elegant-md hover:shadow-elegant-lg transition-all duration-500 hover:scale-102 cursor-pointer border border-cyan-500/20 hover:border-cyan-500/30 overflow-hidden" style={{ animationDelay: '0.7s' }}>
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/25 via-cyan-600/20 to-cyan-700/15 rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Languages className="w-7 h-7 text-cyan-400" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan-400 transition-colors duration-400">
                        Multilingual Intelligence
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Native understanding of Hindi, Tamil, Bengali, Telugu, and 15+ languages
                      </p>
                    </div>
                  </div>
                  {/* Subtle shimmer */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/8 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-flow" />
                </div>
              </div>

              {/* Trust Badge - Premium frosted panel */}
              <div className="relative glass-depth-1 rounded-3xl p-8 space-y-6 shadow-depth animate-morph-in border border-cyan-500/25 overflow-hidden" style={{ animationDelay: '0.8s' }}>
                {/* Subtle ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-600/5 pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center gap-5 group cursor-pointer">
                    <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500/20 via-cyan-600/15 to-transparent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-ultrathin">
                      <span className="text-2xl">🇮🇳</span>
                    </div>
                    <span className="text-base font-medium text-foreground group-hover:text-cyan-400 transition-colors duration-400">Made in India, for India</span>
                  </div>

                  <div className="flex items-center gap-5 group cursor-pointer">
                    <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500/20 via-cyan-600/15 to-transparent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-ultrathin">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <span className="text-base font-medium text-foreground group-hover:text-cyan-400 transition-colors duration-400">99.9% Uptime SLA</span>
                  </div>

                  <div className="flex items-center gap-5 group cursor-pointer">
                    <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500/20 via-cyan-600/15 to-transparent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-ultrathin">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <span className="text-base font-medium text-foreground group-hover:text-cyan-400 transition-colors duration-400">ISO 27001 Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
