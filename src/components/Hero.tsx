import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Shield, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const [activeUsers, setActiveUsers] = useState(8234);
  const [queries, setQueries] = useState(1247893);

  // Counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3));
      setQueries(prev => prev + Math.floor(Math.random() * 15));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Advanced animated background - Responsive */}
      <div className="absolute inset-0 -z-10">
        {/* Floating gradient orbs with glassmorphism - Responsive sizing */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl animate-float-smooth" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] bg-gradient-to-bl from-accent/20 via-secondary/10 to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl animate-float-smooth" style={{ animationDelay: '2s' }} />

        {/* Subtle grid overlay - Responsive */}
        <div className="absolute inset-0 opacity-[0.02] sm:opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(162, 89, 255, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(162, 89, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 md:space-y-10 animate-fade-in-up">

              {/* Badge with ultra-premium glass effect */}
              <div className="inline-block animate-scale-in">
                <div className="glass-frosted text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg relative overflow-hidden group hover:scale-105 transition-butter cursor-pointer touch-target">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse-glow" />
                    भारत का #1 AI Platform
                  </span>
                  {/* Animated gradient background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
                  {/* Border glow */}
                  <span className="absolute inset-0 border border-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Headline with premium typography - Responsive */}
              <div className="space-y-3 sm:space-y-4 md:space-y-5 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[1.1]">
                  AI Intelligence
                  <br />
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent animate-gradient">
                      Reimagined
                    </span>
                    <span className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl opacity-50 -z-10" />
                  </span>
                  <br />
                  for India
                </h1>
              </div>

              {/* Description with refined spacing - Responsive */}
              <div className="max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
                  Experience the next generation of artificial intelligence.
                  Built with cutting-edge technology and designed specifically
                  for Indian businesses and developers.
                </p>
              </div>

              {/* CTA Buttons with ultra-premium effects - Responsive */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 pt-4 sm:pt-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Button
                  onClick={() => navigate('/chat')}
                  size="lg"
                  className="group relative overflow-hidden text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 md:py-7 bg-gradient-to-r from-primary via-primary/90 to-primary shadow-2xl hover:shadow-primary/50 hover:shadow-2xl transition-luxury hover:scale-[1.02] active:scale-[0.98] touch-target w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 font-semibold">
                    Get Started
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-butter" />
                  </span>
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/30 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  {/* Glow pulse on hover */}
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="group glass-frosted text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 md:py-7 border-border/50 hover:border-primary/50 shadow-lg transition-luxury hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] relative overflow-hidden touch-target w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 font-semibold">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-butter" />
                    Watch Demo
                  </span>
                  {/* Subtle background pulse on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
              </div>

              {/* Stats with glassmorphism - Responsive */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-8 md:pt-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="glass-card glass-multilayer glass-noise p-4 sm:p-5 md:p-6 group">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                    {(activeUsers/1000).toFixed(1)}K+
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2 font-medium">
                    Active Users
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl sm:rounded-b-3xl" />
                </div>

                <div className="glass-card glass-multilayer glass-noise p-4 sm:p-5 md:p-6 group" style={{ animationDelay: '0.05s' }}>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                    {(queries/1000).toFixed(0)}K+
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2 font-medium">
                    Queries
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl sm:rounded-b-3xl" />
                </div>

                <div className="glass-card glass-multilayer glass-noise p-4 sm:p-5 md:p-6 group" style={{ animationDelay: '0.1s' }}>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                    99.9%
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2 font-medium">
                    Uptime
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl sm:rounded-b-3xl" />
                </div>
              </div>
            </div>

            {/* Right Content with advanced glassmorphism - Responsive */}
            <div className="lg:col-span-5 space-y-3 sm:space-y-4 md:space-y-5">

              {/* Feature Cards with sophisticated glass effects */}
              <div className="space-y-3 sm:space-y-4">

                {/* Card 1 */}
                <div className="glass-card glass-liquid glass-noise glass-refract group animate-scale-in" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-butter">
                        <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" strokeWidth={2} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                        Lightning Fast
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Get instant responses with our optimized AI infrastructure
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="glass-card glass-liquid glass-noise glass-refract group animate-scale-in" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-butter">
                        <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" strokeWidth={2} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                        Enterprise Security
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Military-grade encryption keeps your data safe and secure
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="glass-card glass-liquid glass-noise glass-refract group animate-scale-in" style={{ animationDelay: '0.7s' }}>
                  <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-butter">
                        <Cpu className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" strokeWidth={2} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                        Built for India
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Native support for Hindi, Tamil, Bengali, and 20+ languages
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge with premium glassmorphism - Responsive */}
              <div className="glass-frosted glass-multilayer rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 space-y-3 sm:space-y-4 shadow-xl animate-scale-in" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer touch-target">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-butter flex-shrink-0">
                    <span className="text-xl sm:text-2xl">🇮🇳</span>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-foreground">Made in India</span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer touch-target">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-butter flex-shrink-0">
                    <span className="text-xl sm:text-2xl">⚡</span>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-foreground">Enterprise Grade</span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer touch-target">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-butter flex-shrink-0">
                    <span className="text-xl sm:text-2xl">★</span>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-foreground">Premium Quality</span>
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
