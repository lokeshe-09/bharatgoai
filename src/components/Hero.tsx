import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Shield, Cpu, Users, TrendingUp, Award, CheckCircle2, Sparkle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const [activeUsers, setActiveUsers] = useState(8234);
  const [queries, setQueries] = useState(1247893);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Realistic counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3));
      setQueries(prev => prev + Math.floor(Math.random() * 15));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFFBF5] dark:bg-slate-950 pt-20">

      {/* UNIQUE EDITORIAL BACKGROUND - NO TYPICAL AI PATTERNS */}
      <div className="absolute inset-0 z-0">

        {/* Organic flowing shape - Top Left */}
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] opacity-80"
          style={{
            background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
            clipPath: 'polygon(0 0, 100% 0, 45% 100%, 0 85%)',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />

        {/* Bold color block - Top Right */}
        <div
          className="absolute top-10 right-0 w-[450px] h-[350px] opacity-20 dark:opacity-10"
          style={{
            background: '#028090',
            clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />

        {/* Hand-drawn style circle - decorative */}
        <div
          className="absolute bottom-20 right-[10%] w-64 h-64 opacity-30 dark:opacity-20"
          style={{
            background: 'none',
            border: '8px solid #E07A5F',
            borderRadius: '47% 53% 44% 56% / 55% 47% 53% 45%',
            animation: 'morphing 8s ease-in-out infinite'
          }}
        />

        {/* Abstract rangoli-inspired pattern */}
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-15 dark:opacity-8"
          style={{
            background: `
              repeating-conic-gradient(from 0deg at 50% 50%,
                #00A896 0deg 30deg,
                transparent 30deg 60deg,
                #2D6A4F 60deg 90deg,
                transparent 90deg 120deg
              )
            `,
            transform: 'rotate(15deg)',
            mixBlendMode: 'multiply'
          }}
        />

        {/* Textured overlay for organic feel */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        />

      </div>

      {/* MAIN CONTENT - EDITORIAL STYLE LAYOUT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">

          {/* Asymmetric Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Content Area - 7 columns */}
            <div className="lg:col-span-7 space-y-8">

              {/* Bold Editorial Badge */}
              <div className="inline-block">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] opacity-30 blur"></div>
                  <div className="relative px-6 py-2 bg-white dark:bg-slate-900 border-4 border-[#FF6B35] transform -rotate-1">
                    <span className="text-sm font-black uppercase tracking-wider text-[#FF6B35]">
                      भारत का #1 AI
                    </span>
                  </div>
                </div>
              </div>

              {/* ULTRA BOLD HEADLINE - Editorial Style */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="block text-slate-900 dark:text-white mb-2">
                    Intelligence
                  </span>
                  <span
                    className="block text-[#FF6B35] transform -rotate-1 inline-block relative"
                    style={{
                      textShadow: '4px 4px 0px rgba(0,0,0,0.1)'
                    }}
                  >
                    Reimagined
                  </span>
                  <span className="block text-[#028090] dark:text-[#00A896] mt-2 text-4xl sm:text-5xl md:text-6xl">
                    for Bharat.
                  </span>
                </h1>
              </div>

              {/* Subheadline with editorial flair */}
              <div className="relative max-w-xl">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#E07A5F]"></div>
                <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed pl-4 font-medium">
                  Break free from cookie-cutter AI. We built something different—
                  <span className="text-[#028090] dark:text-[#00A896] font-bold"> raw intelligence</span> that speaks your language,
                  understands your context, and delivers results that matter.
                </p>
              </div>

              {/* CTA Buttons - Bold and Unconventional */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => navigate('/chat')}
                  className="group relative h-14 px-8 bg-[#FF6B35] hover:bg-[#ff5722] text-white font-bold text-lg border-4 border-slate-900 dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
                >
                  <span>Try It Free</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  className="h-14 px-8 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg border-4 border-slate-900 dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Real-time Stats - Editorial Card Style */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="relative p-4 bg-white dark:bg-slate-900 border-4 border-slate-900 dark:border-white transform hover:-rotate-1 transition-transform">
                  <div className="absolute top-2 right-2 w-3 h-3 bg-[#00A896] rounded-full animate-pulse"></div>
                  <div className="text-3xl font-black text-[#FF6B35]">{(activeUsers/1000).toFixed(1)}K+</div>
                  <div className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">Live Users</div>
                </div>

                <div className="relative p-4 bg-white dark:bg-slate-900 border-4 border-slate-900 dark:border-white transform hover:rotate-1 transition-transform">
                  <div className="absolute top-2 right-2 w-3 h-3 bg-[#E07A5F] rounded-full animate-pulse"></div>
                  <div className="text-3xl font-black text-[#028090] dark:text-[#00A896]">{(queries/1000).toFixed(0)}K+</div>
                  <div className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">Queries</div>
                </div>

                <div className="relative p-4 bg-white dark:bg-slate-900 border-4 border-slate-900 dark:border-white transform hover:-rotate-1 transition-transform">
                  <div className="absolute top-2 right-2 w-3 h-3 bg-[#2D6A4F] rounded-full"></div>
                  <div className="text-3xl font-black text-[#2D6A4F]">99.9%</div>
                  <div className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">Uptime</div>
                </div>
              </div>

            </div>

            {/* Right Content Area - 5 columns */}
            <div className="lg:col-span-5 space-y-6">

              {/* Feature Cards - Stacked, Editorial Style */}
              <div className="space-y-6">

                {/* Card 1 - Lightning Fast */}
                <div className="group relative bg-gradient-to-br from-[#FF6B35] to-[#F7931E] p-6 border-4 border-slate-900 dark:border-white transform hover:rotate-1 transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-slate-900 border-3 border-slate-900 dark:border-white flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                      <Zap className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-white mb-2">Lightning Fast</h3>
                      <p className="text-sm text-white/90 font-medium">Sub-second responses. No waiting. No buffering. Just pure speed.</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Enterprise Security */}
                <div className="group relative bg-gradient-to-br from-[#028090] to-[#00A896] p-6 border-4 border-slate-900 dark:border-white transform hover:-rotate-1 transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] ml-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-slate-900 border-3 border-slate-900 dark:border-white flex items-center justify-center transform group-hover:-rotate-12 transition-transform">
                      <Shield className="w-6 h-6 text-[#028090]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-white mb-2">Fort Knox Security</h3>
                      <p className="text-sm text-white/90 font-medium">Military-grade encryption. Your data stays yours. Period.</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Advanced AI */}
                <div className="group relative bg-gradient-to-br from-[#2D6A4F] to-[#00A896] p-6 border-4 border-slate-900 dark:border-white transform hover:rotate-1 transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-slate-900 border-3 border-slate-900 dark:border-white flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                      <Cpu className="w-6 h-6 text-[#2D6A4F]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-white mb-2">Built for India</h3>
                      <p className="text-sm text-white/90 font-medium">Understands Hindi, Tamil, Bengali, and 20+ Indian languages natively.</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Trust Indicators - Bold Style */}
              <div className="bg-white dark:bg-slate-900 border-4 border-slate-900 dark:border-white p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 border-2 border-slate-900 dark:border-white flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 border-2 border-slate-900 dark:border-white flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 border-2 border-slate-900 dark:border-white flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Made in India 🇮🇳</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Decorative Elements - Hand-drawn style */}
      <div className="absolute bottom-8 left-8 hidden lg:block">
        <div className="relative w-32 h-32 transform rotate-12">
          <div className="absolute inset-0 border-4 border-[#E07A5F] rounded-full opacity-60" style={{ borderRadius: '48% 52% 55% 45% / 52% 48% 52% 48%' }}></div>
          <div className="absolute inset-2 border-4 border-[#FF6B35] rounded-full opacity-40" style={{ borderRadius: '52% 48% 45% 55% / 48% 52% 48% 52%' }}></div>
        </div>
      </div>

      {/* Bottom gradient - subtle */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>

      {/* Custom keyframes for animations */}
      <style>{`
        @keyframes morphing {
          0%, 100% {
            border-radius: 47% 53% 44% 56% / 55% 47% 53% 45%;
          }
          25% {
            border-radius: 52% 48% 59% 41% / 48% 62% 38% 52%;
          }
          50% {
            border-radius: 41% 59% 48% 52% / 62% 45% 55% 38%;
          }
          75% {
            border-radius: 59% 41% 52% 48% / 45% 55% 45% 55%;
          }
        }
      `}</style>

    </section>
  );
};

export default Hero;
