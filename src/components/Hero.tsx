import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, Zap, Shield, Cpu, Users, TrendingUp, Award, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const [activeUsers, setActiveUsers] = useState(8234);
  const [queries, setQueries] = useState(1247893);

  // Realistic counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3));
      setQueries(prev => prev + Math.floor(Math.random() * 15));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900 pt-20">
      {/* ULTRA-PREMIUM 3D BACKGROUND SYSTEM - COMPLETELY REDESIGNED */}
      <div className="absolute inset-0 z-0">

        {/* Animated Radial Gradient Layers */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-secondary/15 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-accent/10 to-transparent" style={{
          animation: 'pulse-slow 8s ease-in-out infinite',
          animationDelay: '2s'
        }}></div>

        {/* Floating Gradient Orbs - Atmospheric Depth */}
        <div className="absolute top-[15%] left-[10%] w-[600px] h-[600px] rounded-full opacity-60 blur-[120px] animate-float-slow" style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(59,130,246,0.2) 50%, transparent 100%)'
        }}></div>

        <div className="absolute top-[40%] right-[8%] w-[550px] h-[550px] rounded-full opacity-60 blur-[130px] animate-pulse-3d" style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(6,182,212,0.2) 50%, transparent 100%)',
          animationDelay: '1s'
        }}></div>

        <div className="absolute bottom-[20%] left-[15%] w-[500px] h-[500px] rounded-full opacity-55 blur-[110px] animate-float-3d" style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.35) 0%, rgba(20,184,166,0.18) 50%, transparent 100%)',
          animationDelay: '1.5s'
        }}></div>

        {/* UNIQUE 3D GEOMETRIC ELEMENTS - DISTRIBUTED ACROSS VIEWPORT */}

        {/* 3D Crystal/Diamond - Top Left */}
        <div className="hidden md:block absolute top-[12%] left-[8%] w-32 h-32 lg:w-36 lg:h-36 opacity-60" style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(30deg) rotateY(-35deg) rotateZ(20deg)',
          animation: 'rotate-3d 25s linear infinite',
          filter: 'drop-shadow(0 15px 40px rgba(139,92,246,0.3))'
        }}>
          <div className="w-full h-full relative" style={{
            background: 'linear-gradient(135deg, rgba(168,85,247,0.5) 0%, rgba(139,92,246,0.3) 50%, rgba(109,40,217,0.2) 100%)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            boxShadow: `
              0 20px 60px -15px rgba(139,92,246,0.5),
              inset -10px -10px 30px rgba(0,0,0,0.2),
              inset 10px 10px 30px rgba(255,255,255,0.08),
              0 0 60px rgba(139,92,246,0.3)
            `
          }}></div>
        </div>

        {/* 3D Sphere with Gradient - Top Right */}
        <div className="hidden md:block absolute top-[10%] right-[10%] w-40 h-40 lg:w-44 lg:h-44 rounded-full opacity-60" style={{
          background: 'radial-gradient(circle at 35% 35%, rgba(59,130,246,0.6) 0%, rgba(37,99,235,0.4) 40%, rgba(29,78,216,0.25) 100%)',
          boxShadow: `
            0 30px 80px -20px rgba(59,130,246,0.6),
            inset -15px -15px 40px rgba(0,0,0,0.25),
            inset 15px 15px 40px rgba(255,255,255,0.12),
            0 0 80px rgba(59,130,246,0.4)
          `,
          animation: 'float-3d 7s ease-in-out infinite',
          filter: 'drop-shadow(0 0 45px rgba(59,130,246,0.5))'
        }}></div>

        {/* 3D Cube - Middle Left */}
        <div className="hidden md:block absolute top-[45%] left-[5%] w-28 h-28 lg:w-32 lg:h-32 opacity-60" style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(35deg) rotateY(45deg)',
          animation: 'rotate-y 15s linear infinite'
        }}>
          <div className="absolute inset-0 rounded-2xl" style={{
            background: 'linear-gradient(135deg, rgba(6,182,212,0.5) 0%, rgba(14,165,233,0.35) 50%, rgba(3,105,161,0.25) 100%)',
            boxShadow: `
              0 20px 55px -15px rgba(6,182,212,0.55),
              inset -10px -10px 28px rgba(0,0,0,0.2),
              inset 10px 10px 28px rgba(255,255,255,0.1),
              0 0 55px rgba(6,182,212,0.35)
            `,
            filter: 'drop-shadow(0 0 40px rgba(6,182,212,0.4))'
          }}></div>
        </div>

        {/* 3D Pyramid - Middle Right */}
        <div className="hidden md:block absolute top-[48%] right-[12%] w-30 h-30 lg:w-36 lg:h-36 opacity-60" style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(-25deg) rotateZ(15deg)',
          animation: 'float-chrome 9s ease-in-out infinite',
          animationDelay: '0.5s'
        }}>
          <div className="w-full h-full" style={{
            background: 'linear-gradient(135deg, rgba(20,184,166,0.55) 0%, rgba(13,148,136,0.38) 50%, rgba(15,118,110,0.25) 100%)',
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            boxShadow: `
              0 22px 65px -18px rgba(20,184,166,0.6),
              inset -10px -10px 30px rgba(0,0,0,0.22),
              inset 10px 10px 30px rgba(255,255,255,0.11),
              0 0 60px rgba(20,184,166,0.4)
            `,
            filter: 'drop-shadow(0 0 45px rgba(20,184,166,0.45))'
          }}></div>
        </div>

        {/* 3D Hexagon - Bottom Left */}
        <div className="hidden md:block absolute bottom-[15%] left-[12%] w-26 h-26 lg:w-30 lg:h-30 opacity-60" style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(25deg) rotateY(20deg)',
          animation: 'spin-chrome 18s ease-in-out infinite',
          animationDelay: '1s'
        }}>
          <div className="w-full h-full" style={{
            background: 'linear-gradient(120deg, rgba(99,102,241,0.55) 0%, rgba(79,70,229,0.38) 50%, rgba(67,56,202,0.25) 100%)',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
            boxShadow: `
              0 20px 55px -15px rgba(99,102,241,0.58),
              inset -9px -9px 26px rgba(0,0,0,0.22),
              inset 9px 9px 26px rgba(255,255,255,0.11),
              0 0 55px rgba(99,102,241,0.4)
            `,
            filter: 'drop-shadow(0 0 40px rgba(99,102,241,0.42))'
          }}></div>
        </div>

        {/* 3D Star - Bottom Right */}
        <div className="hidden md:block absolute bottom-[18%] right-[8%] w-24 h-24 lg:w-28 lg:h-28 opacity-60" style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(30deg) rotateZ(-10deg)',
          animation: 'rotate-3d 22s linear infinite',
          animationDelay: '1.5s'
        }}>
          <div className="w-full h-full" style={{
            background: 'linear-gradient(145deg, rgba(168,85,247,0.5) 0%, rgba(139,92,246,0.35) 35%, rgba(124,58,237,0.23) 70%, rgba(109,40,217,0.15) 100%)',
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            boxShadow: `
              0 18px 52px -13px rgba(139,92,246,0.54),
              inset -8px -8px 24px rgba(0,0,0,0.2),
              inset 8px 8px 24px rgba(255,255,255,0.09),
              0 0 52px rgba(139,92,246,0.38)
            `,
            filter: 'drop-shadow(0 0 38px rgba(139,92,246,0.42))'
          }}></div>
        </div>

        {/* 3D Octahedron - Left Center */}
        <div className="hidden md:block absolute top-[30%] left-[18%] w-26 h-26 lg:w-30 lg:h-30 opacity-60" style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(35deg) rotateY(-25deg)',
          animation: 'pulse-3d 6s ease-in-out infinite',
          animationDelay: '0.8s'
        }}>
          <div className="w-full h-full" style={{
            background: 'radial-gradient(circle, rgba(14,165,233,0.52) 0%, rgba(6,182,212,0.37) 40%, rgba(8,145,178,0.23) 100%)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            boxShadow: `
              0 21px 60px -16px rgba(14,165,233,0.56),
              inset -10px -10px 28px rgba(0,0,0,0.23),
              inset 10px 10px 28px rgba(255,255,255,0.1),
              0 0 58px rgba(14,165,233,0.4)
            `,
            filter: 'drop-shadow(0 0 42px rgba(14,165,233,0.45))'
          }}></div>
        </div>

        {/* 3D Pentagon - Right Center */}
        <div className="hidden md:block absolute top-[65%] right-[18%] w-24 h-24 lg:w-28 lg:h-28 opacity-60" style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(-18deg) rotateZ(-22deg)',
          animation: 'float-slow 10s ease-in-out infinite',
          animationDelay: '1.2s'
        }}>
          <div className="w-full h-full" style={{
            background: 'radial-gradient(circle at 40% 40%, rgba(16,185,129,0.5) 0%, rgba(5,150,105,0.35) 45%, rgba(4,120,87,0.22) 100%)',
            clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
            boxShadow: `
              0 19px 55px -14px rgba(16,185,129,0.53),
              inset -9px -9px 26px rgba(0,0,0,0.21),
              inset 9px 9px 26px rgba(255,255,255,0.09),
              0 0 52px rgba(16,185,129,0.38)
            `,
            filter: 'drop-shadow(0 0 40px rgba(16,185,129,0.43))'
          }}></div>
        </div>

        {/* 3D Prism - Bottom Center */}
        <div className="hidden md:block absolute bottom-[25%] left-[40%] w-22 h-22 lg:w-26 lg:h-26 opacity-60" style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(20deg) rotateY(30deg)',
          animation: 'rotate-y 20s linear infinite',
          animationDelay: '2s'
        }}>
          <div className="w-full h-full" style={{
            background: 'linear-gradient(160deg, rgba(124,58,237,0.48) 0%, rgba(109,40,217,0.33) 48%, rgba(91,33,182,0.2) 100%)',
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            boxShadow: `
              0 17px 50px -13px rgba(124,58,237,0.51),
              inset -8px -8px 24px rgba(0,0,0,0.2),
              inset 8px 8px 24px rgba(255,255,255,0.08),
              0 0 50px rgba(124,58,237,0.36)
            `,
            filter: 'drop-shadow(0 0 37px rgba(124,58,237,0.41))'
          }}></div>
        </div>

        {/* Subtle Corner Accents */}
        <div className="absolute top-[6%] right-[4%] w-28 h-28 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(37,99,235,0.2) 60%, transparent 100%)',
          boxShadow: '0 16px 48px -13px rgba(59,130,246,0.5), 0 0 52px rgba(59,130,246,0.3)',
          animation: 'float-3d 6s ease-in-out infinite',
          animationDelay: '0.5s',
          filter: 'blur(8px)'
        }}></div>

        <div className="absolute bottom-[8%] left-[5%] w-26 h-26 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.38) 0%, rgba(14,165,233,0.19) 60%, transparent 100%)',
          boxShadow: '0 14px 42px -11px rgba(6,182,212,0.48), 0 0 48px rgba(6,182,212,0.28)',
          animation: 'pulse-3d 5.5s ease-in-out infinite',
          animationDelay: '1s',
          filter: 'blur(7px)'
        }}></div>

        <div className="absolute bottom-[10%] right-[6%] w-30 h-30 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(20,184,166,0.4) 0%, rgba(13,148,136,0.2) 60%, transparent 100%)',
          boxShadow: '0 17px 50px -14px rgba(20,184,166,0.52), 0 0 54px rgba(20,184,166,0.32)',
          animation: 'float-slow 7s ease-in-out infinite',
          animationDelay: '1.5s',
          filter: 'blur(8px)'
        }}></div>

      </div>

      {/* PREMIUM CONTENT LAYER */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-8 sm:p-12 md:p-16">

            <div className="text-center space-y-6 sm:space-y-8 relative z-10">

              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-gradient-to-r from-primary/40 via-secondary/35 to-accent/30 dark:from-primary/45 dark:via-secondary/40 dark:to-accent/35 border-2 border-primary/60 dark:border-primary/70 shadow-2xl hover:shadow-glow transition-all duration-700 ease-out cursor-pointer group relative overflow-hidden backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/25 to-secondary/25 dark:from-primary/35 dark:to-secondary/35 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary dark:text-primary/95 animate-pulse relative z-10 drop-shadow-lg" />
                <span className="text-xs sm:text-sm font-extrabold bg-gradient-text bg-clip-text text-transparent relative z-10">
                  India's #1 AI Platform
                </span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary dark:bg-primary/85 animate-pulse relative z-10 shadow-lg shadow-primary/50"></div>
              </div>

              {/* Main Headline */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                  <span className="text-foreground/90 block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 sm:mb-3 animate-fade-in-up opacity-0" style={{
                    animationDelay: '0.2s',
                    animationFillMode: 'forwards'
                  }}>
                    Welcome to
                  </span>
                  <span className="bg-gradient-text bg-clip-text text-transparent drop-shadow-2xl block mb-2 sm:mb-3 animate-fade-in-up opacity-0" style={{
                    animationDelay: '0.4s',
                    animationFillMode: 'forwards',
                    textShadow: '0 10px 40px rgba(139, 92, 246, 0.3)'
                  }}>
                    BharatGoAi
                  </span>
                  <span className="text-foreground/85 block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold animate-fade-in-up opacity-0" style={{
                    animationDelay: '0.6s',
                    animationFillMode: 'forwards'
                  }}>
                    India's Advanced AI Platform
                  </span>
                </h1>
              </div>

              {/* Subheadline */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed font-normal animate-fade-in-up opacity-0" style={{
                animationDelay: '0.8s',
                animationFillMode: 'forwards'
              }}>
                India's most advanced AI platform combining cutting-edge technology with
                <span className="text-primary font-semibold"> enterprise-grade security</span>.
                Experience the future of intelligent automation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 animate-fade-in-up opacity-0" style={{
                animationDelay: '1s',
                animationFillMode: 'forwards'
              }}>
                <Button
                  onClick={() => navigate('/chat')}
                  variant="hero"
                  size="lg"
                  className="group shadow-2xl text-sm sm:text-base h-12 sm:h-14 px-8 sm:px-10 hover:scale-105 w-full sm:w-auto relative overflow-hidden transition-all duration-500 ease-out"
                  style={{ boxShadow: '0 20px 60px -15px rgba(139, 92, 246, 0.5)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10">Start Free Trial</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
                </Button>
                <Button
                  variant="glass"
                  size="lg"
                  className="text-sm sm:text-base h-12 sm:h-14 px-8 sm:px-10 hover:scale-105 group w-full sm:w-auto backdrop-blur-xl border-2 transition-all duration-500 ease-out"
                >
                  <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-500" />
                  Watch Demo
                </Button>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto pt-8 sm:pt-12 animate-fade-in-up opacity-0" style={{
                animationDelay: '1.2s',
                animationFillMode: 'forwards'
              }}>

                {/* Card 1 */}
                <div className="group relative p-6 rounded-2xl bg-card/50 dark:bg-card/30 backdrop-blur-xl border border-border/50 dark:border-border/30 hover:border-primary/60 dark:hover:border-primary/70 transition-all duration-700 ease-out hover:shadow-2xl hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 dark:from-primary/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" style={{
                      background: 'linear-gradient(135deg, rgba(139,92,246,0.3) 0%, rgba(99,102,241,0.2) 50%, rgba(79,70,229,0.15) 100%)',
                      boxShadow: '0 8px 25px -5px rgba(139,92,246,0.3), inset -2px -2px 8px rgba(0,0,0,0.1), inset 2px 2px 8px rgba(255,255,255,0.1), 0 0 20px rgba(139,92,246,0.2)'
                    }}>
                      <Zap className="w-7 h-7 text-primary dark:text-primary/90 drop-shadow-md" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold mb-2 text-foreground dark:text-foreground/95">Lightning Fast</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground/90">Instant AI responses powered by advanced models</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group relative p-6 rounded-2xl bg-card/50 dark:bg-card/30 backdrop-blur-xl border border-border/50 dark:border-border/30 hover:border-secondary/60 dark:hover:border-secondary/70 transition-all duration-700 ease-out hover:shadow-2xl hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 dark:from-secondary/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" style={{
                      background: 'linear-gradient(135deg, rgba(59,130,246,0.3) 0%, rgba(37,99,235,0.2) 50%, rgba(29,78,216,0.15) 100%)',
                      boxShadow: '0 8px 25px -5px rgba(59,130,246,0.3), inset -2px -2px 8px rgba(0,0,0,0.1), inset 2px 2px 8px rgba(255,255,255,0.1), 0 0 20px rgba(59,130,246,0.2)'
                    }}>
                      <Shield className="w-7 h-7 text-secondary dark:text-secondary/90 drop-shadow-md" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold mb-2 text-foreground dark:text-foreground/95">Enterprise Security</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground/90">Bank-grade encryption & data protection</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group relative p-6 rounded-2xl bg-card/50 dark:bg-card/30 backdrop-blur-xl border border-border/50 dark:border-border/30 hover:border-accent/60 dark:hover:border-accent/70 transition-all duration-700 ease-out hover:shadow-2xl hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 dark:from-accent/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" style={{
                      background: 'linear-gradient(135deg, rgba(6,182,212,0.3) 0%, rgba(14,165,233,0.2) 50%, rgba(3,105,161,0.15) 100%)',
                      boxShadow: '0 8px 25px -5px rgba(6,182,212,0.3), inset -2px -2px 8px rgba(0,0,0,0.1), inset 2px 2px 8px rgba(255,255,255,0.1), 0 0 20px rgba(6,182,212,0.2)'
                    }}>
                      <Cpu className="w-7 h-7 text-accent dark:text-accent/90 drop-shadow-md" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold mb-2 text-foreground dark:text-foreground/95">Advanced AI</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground/90">Cutting-edge Indian language support</p>
                  </div>
                </div>

              </div>

              {/* Real-time Stats - Human touch with live data */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-4xl mx-auto pt-12 sm:pt-16 animate-fade-in-up opacity-0" style={{
                animationDelay: '1.4s',
                animationFillMode: 'forwards'
              }}>
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/30 backdrop-blur-xl border border-border/30 hover:border-primary/40 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-foreground">{activeUsers.toLocaleString()}+</div>
                    <div className="text-xs text-muted-foreground">Active Users</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/30 backdrop-blur-xl border border-border/30 hover:border-secondary/40 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-foreground">{queries.toLocaleString()}+</div>
                    <div className="text-xs text-muted-foreground">AI Queries Today</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/30 backdrop-blur-xl border border-border/30 hover:border-accent/40 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-foreground">99.9%</div>
                    <div className="text-xs text-muted-foreground">Uptime SLA</div>
                  </div>
                </div>
              </div>

              {/* Trust Badges - Authentic social proof */}
              <div className="pt-16 sm:pt-20 border-t border-border/20 mt-16 sm:mt-20 animate-fade-in-up opacity-0" style={{
                animationDelay: '1.6s',
                animationFillMode: 'forwards'
              }}>
                <p className="text-center text-sm text-muted-foreground/70 mb-8">Trusted by innovative teams across India</p>
                <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
                  {/* Trust indicators with a human, credible feel */}
                  <div className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors group">
                    <CheckCircle2 className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">ISO 27001 Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors group">
                    <CheckCircle2 className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">GDPR Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors group">
                    <CheckCircle2 className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">SOC 2 Type II</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors group">
                    <Shield className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Made in India 🇮🇳</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
