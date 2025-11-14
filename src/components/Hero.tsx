import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Shield, Cpu, Sparkle, Award } from "lucide-react";
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

  // Sophisticated mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 25,
        y: (e.clientY / window.innerHeight) * 25
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFFBF5] dark:bg-slate-950 pt-20">

      {/* ULTRA PREMIUM BACKGROUND - HAND-CRAFTED AESTHETICS */}
      <div className="absolute inset-0 z-0">

        {/* Luxury gradient mesh - Top Left */}
        <div
          className="absolute -top-20 -left-20 w-[700px] h-[700px] opacity-70 dark:opacity-50"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #6B4654 0%, #8B6F47 35%, transparent 70%)',
            transform: `translate(${-mousePosition.x * 0.8}px, ${-mousePosition.y * 0.8}px)`,
            transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            filter: 'blur(60px)'
          }}
        />

        {/* Organic shape - Top Right */}
        <div
          className="absolute -top-10 -right-10 w-[600px] h-[600px] opacity-25 dark:opacity-15"
          style={{
            background: 'radial-gradient(ellipse at 70% 30%, #2C5F2D 0%, #4A6E8A 50%, transparent 80%)',
            clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) rotate(${mousePosition.x * 0.05}deg)`,
            transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        />

        {/* Premium geometric pattern - Bottom Left */}
        <div
          className="absolute -bottom-20 -left-20 w-[550px] h-[550px] opacity-20 dark:opacity-12"
          style={{
            background: `
              repeating-conic-gradient(from 15deg at 50% 50%,
                #4A6E8A 0deg 25deg,
                transparent 25deg 50deg,
                #2C5F2D 50deg 75deg,
                transparent 75deg 100deg
              )
            `,
            transform: `rotate(${mousePosition.x * 0.1}deg)`,
            transition: 'transform 0.8s ease-out',
            mixBlendMode: 'multiply',
            filter: 'blur(40px)'
          }}
        />

        {/* Floating orb - Bottom Right */}
        <div
          className="absolute bottom-20 right-[15%] w-72 h-72 opacity-40 dark:opacity-25"
          style={{
            background: 'radial-gradient(circle, #A0674A 0%, transparent 70%)',
            borderRadius: '43% 57% 52% 48% / 48% 55% 45% 52%',
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
            filter: 'blur(80px)',
            animation: 'morphing 12s ease-in-out infinite'
          }}
        />

        {/* Luxury texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.8'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Premium gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FFFBF5] dark:to-slate-950 opacity-80"></div>

      </div>

      {/* MAIN CONTENT - LUXURY EDITORIAL LAYOUT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">

          {/* Premium Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-10">

              {/* Exclusive Premium Badge */}
              <div className="inline-block animate-fade-in-up">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#2C5F2D] via-[#4A6E8A] to-[#6B4654] opacity-20 blur-xl group-hover:opacity-40 transition-all duration-700"></div>
                  <div className="relative px-6 py-2.5 bg-white dark:bg-slate-900 border-[2px] border-slate-900 dark:border-white transform -rotate-1 group-hover:rotate-0 transition-transform duration-500 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)]">
                    <span className="text-sm font-bold uppercase tracking-[0.12em] text-[#2C5F2D] dark:text-[#4A6E8A]">
                      भारत का #1 AI
                    </span>
                  </div>
                </div>
              </div>

              {/* REFINED MINIMAL HEADLINE - PREMIUM TYPOGRAPHY */}
              <div className="space-y-5 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-[-0.04em]">
                  <span className="block text-slate-900 dark:text-white mb-3 heading-refined">
                    Intelligence
                  </span>
                  <span
                    className="block text-[#6B4654] dark:text-[#A0674A] transform -rotate-1 inline-block relative font-semibold"
                    style={{
                      textShadow: '3px 3px 0px rgba(0,0,0,0.05)',
                    }}
                  >
                    Reimagined
                  </span>
                  <span className="block text-[#2C5F2D] dark:text-[#4A6E8A] mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium heading-minimal">
                    for Bharat.
                  </span>
                </h1>
              </div>

              {/* Premium Subheadline with Editorial Accent */}
              <div className="relative max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-[#A0674A] via-[#6B4654] to-transparent opacity-60"></div>
                <p className="text-lg sm:text-xl md:text-2xl text-slate-700 dark:text-slate-300 text-airy pl-6 font-normal">
                  Break free from cookie-cutter AI. We built something different—
                  <span className="text-[#2C5F2D] dark:text-[#4A6E8A] font-semibold"> raw intelligence</span> that speaks your language,
                  understands your context, and delivers results that matter.
                </p>
              </div>

              {/* Refined Minimal CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Button
                  onClick={() => navigate('/chat')}
                  className="group relative h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg bg-[#2C5F2D] hover:bg-[#1E4D2B] text-white font-semibold border-[2px] border-slate-900 dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,0.9)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.9)] dark:hover:shadow-[1.5px_1.5px_0px_0px_rgba(255,255,255,0.9)] hover:translate-x-[1.5px] hover:translate-y-[1.5px] transition-all duration-200 w-full sm:w-auto tracking-tight"
                >
                  <span>Try It Free</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-[2px] border-slate-900 dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,0.9)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.9)] dark:hover:shadow-[1.5px_1.5px_0px_0px_rgba(255,255,255,0.9)] hover:translate-x-[1.5px] hover:translate-y-[1.5px] transition-all duration-200 w-full sm:w-auto tracking-tight"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Refined Minimal Stats Cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-5 pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#6B4654] to-[#A0674A] opacity-0 blur-lg group-hover:opacity-20 transition-all duration-500"></div>
                  <div className="relative p-4 sm:p-5 bg-white dark:bg-slate-900 border-[1.5px] border-slate-900 dark:border-white transform hover:-rotate-1 transition-all duration-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]">
                    <div className="absolute top-2 right-2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#4A6E8A] rounded-full animate-pulse shadow-lg shadow-[#4A6E8A]/50"></div>
                    <div className="text-3xl sm:text-4xl font-bold text-[#6B4654] dark:text-[#A0674A] mb-1 tracking-tight">{(activeUsers/1000).toFixed(1)}K+</div>
                    <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">Live Users</div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#2C5F2D] to-[#4A6E8A] opacity-0 blur-lg group-hover:opacity-20 transition-all duration-500"></div>
                  <div className="relative p-4 sm:p-5 bg-white dark:bg-slate-900 border-[1.5px] border-slate-900 dark:border-white transform hover:rotate-1 transition-all duration-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]">
                    <div className="absolute top-2 right-2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#A0674A] rounded-full animate-pulse shadow-lg shadow-[#A0674A]/50"></div>
                    <div className="text-3xl sm:text-4xl font-bold text-[#2C5F2D] dark:text-[#4A6E8A] mb-1 tracking-tight">{(queries/1000).toFixed(0)}K+</div>
                    <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">Queries</div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#4A6E8A] to-[#2C5F2D] opacity-0 blur-lg group-hover:opacity-20 transition-all duration-500"></div>
                  <div className="relative p-4 sm:p-5 bg-white dark:bg-slate-900 border-[1.5px] border-slate-900 dark:border-white transform hover:-rotate-1 transition-all duration-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]">
                    <div className="absolute top-2 right-2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#2C5F2D] rounded-full shadow-lg shadow-[#2C5F2D]/50"></div>
                    <div className="text-3xl sm:text-4xl font-bold text-[#2C5F2D] mb-1 tracking-tight">99.9%</div>
                    <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">Uptime</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Content - 5 columns */}
            <div className="lg:col-span-5 space-y-6 lg:space-y-8">

              {/* Refined Minimal Feature Cards - Stacked Editorial Style */}
              <div className="space-y-5 sm:space-y-7 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>

                {/* Card 1 - Lightning Fast */}
                <div className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-[#6B4654] to-[#8B6F47] opacity-15 blur-2xl group-hover:opacity-30 transition-all duration-700"></div>
                  <div className="relative bg-gradient-to-br from-[#6B4654] to-[#8B6F47] p-6 sm:p-7 border-[2px] border-slate-900 dark:border-white transform hover:rotate-1 transition-all duration-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.9)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.9)]">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-slate-900 border-[2px] border-slate-900 dark:border-white flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
                        <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-[#6B4654]" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">Lightning Fast</h3>
                        <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed">Sub-second responses. No waiting. No buffering. Just pure speed.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Enterprise Security */}
                <div className="group relative ml-6 sm:ml-10">
                  <div className="absolute -inset-2 bg-gradient-to-br from-[#2C5F2D] to-[#4A6E8A] opacity-15 blur-2xl group-hover:opacity-30 transition-all duration-700"></div>
                  <div className="relative bg-gradient-to-br from-[#2C5F2D] to-[#4A6E8A] p-6 sm:p-7 border-[2px] border-slate-900 dark:border-white transform hover:-rotate-1 transition-all duration-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.9)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.9)]">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-slate-900 border-[2px] border-slate-900 dark:border-white flex items-center justify-center transform group-hover:-rotate-12 transition-transform duration-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
                        <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-[#2C5F2D]" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">Fort Knox Security</h3>
                        <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed">Military-grade encryption. Your data stays yours. Period.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Built for India */}
                <div className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-[#4A6E8A] to-[#2C5F2D] opacity-15 blur-2xl group-hover:opacity-30 transition-all duration-700"></div>
                  <div className="relative bg-gradient-to-br from-[#4A6E8A] to-[#2C5F2D] p-6 sm:p-7 border-[2px] border-slate-900 dark:border-white transform hover:rotate-1 transition-all duration-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.9)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.9)]">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-slate-900 border-[2px] border-slate-900 dark:border-white flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
                        <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-[#2C5F2D]" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">Built for India</h3>
                        <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed">Understands Hindi, Tamil, Bengali, and 20+ Indian languages natively.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Refined Badge - Minimal Design */}
              <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#6B4654] via-[#2C5F2D] to-[#4A6E8A] opacity-20 blur-lg group-hover:opacity-35 transition-all duration-500"></div>
                <div className="relative bg-white dark:bg-slate-900 border-[1.5px] border-slate-900 dark:border-white p-6 space-y-3 transform group-hover:-rotate-1 transition-all duration-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)] dark:group-hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#2C5F2D] to-[#4A6E8A] border-[1.5px] border-slate-900 dark:border-white flex items-center justify-center shadow-md">
                      <Sparkle className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Made in India 🇮🇳</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#6B4654] to-[#A0674A] border-[1.5px] border-slate-900 dark:border-white flex items-center justify-center shadow-md">
                      <Sparkle className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Enterprise Grade</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#4A6E8A] to-[#2C5F2D] border-[1.5px] border-slate-900 dark:border-white flex items-center justify-center shadow-md">
                      <Award className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Premium Quality</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Decorative Hand-drawn Elements */}
      <div className="absolute bottom-12 left-12 hidden xl:block opacity-60 dark:opacity-40">
        <div className="relative w-40 h-40 transform rotate-12 animate-float-slow">
          <div className="absolute inset-0 border-[5px] border-[#A0674A] opacity-70" style={{ borderRadius: '48% 52% 55% 45% / 52% 48% 52% 48%' }}></div>
          <div className="absolute inset-3 border-[5px] border-[#6B4654] opacity-50" style={{ borderRadius: '52% 48% 45% 55% / 48% 52% 48% 52%' }}></div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFFBF5] dark:from-slate-950 to-transparent z-10"></div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes morphing {
          0%, 100% {
            border-radius: 43% 57% 52% 48% / 48% 55% 45% 52%;
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
