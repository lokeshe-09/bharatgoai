import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Shield, Cpu, Terminal, Radio, Asterisk } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const [activeUsers, setActiveUsers] = useState(8234);
  const [queries, setQueries] = useState(1247893);
  const [glitchText, setGlitchText] = useState("INTELLIGENCE");

  // Counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3));
      setQueries(prev => prev + Math.floor(Math.random() * 15));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Glitch text effect
  useEffect(() => {
    const words = ["INTELLIGENCE", "POWER", "REVOLUTION", "FUTURE", "CHAOS"];
    const interval = setInterval(() => {
      setGlitchText(words[Math.floor(Math.random() * words.length)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 pixel-grid scanlines">

      {/* CHAOTIC BACKGROUND - BRUTALIST RETRO-FUTURISTIC */}
      <div className="absolute inset-0 z-0">

        {/* Rotating geometric shapes */}
        <div
          className="absolute top-20 left-[10%] w-64 h-64 brutal-border bg-primary/20 animate-rotate-chaos"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />

        <div
          className="absolute top-40 right-[15%] w-48 h-48 brutal-border bg-secondary/30 animate-float-chaotic"
          style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
        />

        <div
          className="absolute bottom-32 left-[20%] w-56 h-56 brutal-border-thick bg-accent/25 animate-bounce-brutal"
        />

        {/* Diagonal stripes */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--foreground)), hsl(var(--foreground)) 20px, transparent 20px, transparent 40px)',
          }}
        />

        {/* Floating text background */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="text-brutal text-[200px] absolute top-10 -left-20 text-foreground animate-slide-diagonal">
            ERROR_404
          </div>
          <div className="text-brutal text-[150px] absolute bottom-20 -right-10 text-foreground rotate-brutal-4">
            DIGITAL
          </div>
        </div>

      </div>

      {/* MAIN CONTENT - CHAOTIC BRUTALIST LAYOUT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">

          {/* Experimental Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Content - 8 columns */}
            <div className="lg:col-span-8 space-y-8 sm:space-y-10">

              {/* BRUTAL BADGE */}
              <div className="inline-block">
                <div className="relative brutal-border bg-primary px-6 py-3 rotate-brutal-2 animate-pulse-brutal">
                  <span className="text-brutal text-sm text-foreground">
                    /// भारत_का_#1_AI ///
                  </span>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-destructive border-2 border-foreground animate-glitch" />
                </div>
              </div>

              {/* GLITCH HEADLINE - BRUTAL TYPOGRAPHY */}
              <div className="space-y-6">
                <h1 className="relative">
                  {/* Main title with glitch effect */}
                  <span className="block text-glitch text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground rotate-brutal-1 animate-glitch-intense mb-4">
                    {glitchText}
                  </span>

                  {/* Secondary text */}
                  <span className="block text-brutal text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
                    <span className="bg-secondary text-foreground px-4 py-2 inline-block rotate-brutal-3 brutal-border mr-4">
                      REIMAGINED
                    </span>
                  </span>

                  {/* Third line */}
                  <span className="block text-brutal text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    <span className="bg-accent text-foreground px-4 py-2 inline-block rotate-brutal-2 brutal-border-thick">
                      FOR_BHARAT.EXE
                    </span>
                  </span>

                  {/* Decorative pixel elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary border-4 border-foreground animate-pixel-drift" />
                  <div className="absolute top-1/2 -right-8 w-12 h-12 bg-quaternary border-4 border-foreground animate-rotate-chaos" />
                  <div className="absolute -bottom-4 left-[30%] w-6 h-6 bg-destructive border-4 border-foreground animate-bounce-brutal" />
                </h1>
              </div>

              {/* BRUTAL DESCRIPTION */}
              <div className="relative max-w-2xl">
                <div className="brutal-border bg-card p-6 rotate-brutal-1 noise-texture">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-chaos" />
                  <p className="text-retro text-lg sm:text-xl text-foreground leading-relaxed">
                    <span className="bg-primary text-foreground px-2 py-1 font-black">BREAK_FREE</span> from cookie-cutter AI.
                    We built something{" "}
                    <span className="bg-destructive text-foreground px-2 py-1 font-black">DIFFERENT</span>—
                    <span className="bg-quaternary text-foreground px-2 py-1 font-black rotate-brutal-1 inline-block ml-1">RAW_INTELLIGENCE</span>
                    {" "}that delivers results that matter.
                  </p>
                </div>
              </div>

              {/* BRUTAL CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Button
                  onClick={() => navigate('/chat')}
                  className="group h-16 sm:h-20 px-10 sm:px-12 brutal-border-thick bg-primary hover:bg-primary/80 text-foreground text-brutal text-lg sm:text-xl rotate-brutal-1 hover:rotate-brutal-3 hover:scale-105 transition-all duration-200"
                >
                  <Terminal className="mr-3 w-6 h-6 animate-glitch" />
                  <span>TRY_IT_FREE</span>
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  className="h-16 sm:h-20 px-10 sm:px-12 brutal-border-thick bg-background hover:bg-secondary/50 text-foreground text-brutal text-lg sm:text-xl rotate-brutal-2 hover:rotate-brutal-1 hover:scale-105 transition-all duration-200"
                >
                  <Play className="mr-3 w-6 h-6" />
                  <span>WATCH_DEMO</span>
                </Button>
              </div>

              {/* BRUTAL STATS GRID */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8">
                <div className="brutal-border bg-card p-5 sm:p-6 rotate-brutal-1 hover:rotate-brutal-3 hover:scale-110 transition-all duration-300 cursor-pointer relative group">
                  <div className="absolute top-2 right-2 w-3 h-3 bg-primary animate-glitch border-2 border-foreground" />
                  <Radio className="w-6 h-6 mb-3 text-primary animate-pulse-brutal" />
                  <div className="text-brutal text-3xl sm:text-4xl text-primary mb-2">
                    {(activeUsers/1000).toFixed(1)}K+
                  </div>
                  <div className="text-pixel text-[10px] sm:text-xs text-muted-foreground uppercase">
                    [LIVE_USERS]
                  </div>
                </div>

                <div className="brutal-border bg-card p-5 sm:p-6 rotate-brutal-2 hover:rotate-brutal-1 hover:scale-110 transition-all duration-300 cursor-pointer relative group">
                  <div className="absolute top-2 right-2 w-3 h-3 bg-secondary animate-bounce-brutal border-2 border-foreground" />
                  <Asterisk className="w-6 h-6 mb-3 text-secondary animate-rotate-chaos" />
                  <div className="text-brutal text-3xl sm:text-4xl text-secondary mb-2">
                    {(queries/1000).toFixed(0)}K+
                  </div>
                  <div className="text-pixel text-[10px] sm:text-xs text-muted-foreground uppercase">
                    [QUERIES]
                  </div>
                </div>

                <div className="brutal-border bg-card p-5 sm:p-6 rotate-brutal-3 hover:rotate-brutal-2 hover:scale-110 transition-all duration-300 cursor-pointer relative group">
                  <div className="absolute top-2 right-2 w-3 h-3 bg-accent animate-pixel-drift border-2 border-foreground" />
                  <Terminal className="w-6 h-6 mb-3 text-accent animate-glitch" />
                  <div className="text-brutal text-3xl sm:text-4xl text-accent mb-2">
                    99.9%
                  </div>
                  <div className="text-pixel text-[10px] sm:text-xs text-muted-foreground uppercase">
                    [UPTIME]
                  </div>
                </div>
              </div>

            </div>

            {/* Right Content - 4 columns */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">

              {/* BRUTAL FEATURE CARDS - STACKED CHAOS */}
              <div className="space-y-6 sm:space-y-8">

                {/* Card 1 */}
                <div className="group relative brutal-border-thick bg-gradient-chaos p-6 sm:p-7 rotate-brutal-2 hover:rotate-brutal-4 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 brutal-border bg-background flex items-center justify-center group-hover:animate-shake-brutal">
                      <Zap className="w-8 h-8 text-primary animate-glitch" strokeWidth={3} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-brutal text-xl sm:text-2xl text-foreground mb-2">
                        LIGHTNING_FAST
                      </h3>
                      <p className="text-retro text-sm sm:text-base text-foreground/80">
                        Sub-second responses. No waiting. Just pure SPEED.
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 w-4 h-4 bg-primary border-2 border-foreground animate-pixel-drift" />
                </div>

                {/* Card 2 */}
                <div className="group relative brutal-border-thick gradient-chaos p-6 sm:p-7 rotate-brutal-3 hover:rotate-brutal-1 hover:scale-105 transition-all duration-300 cursor-pointer ml-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 brutal-border bg-background flex items-center justify-center group-hover:animate-bounce-brutal">
                      <Shield className="w-8 h-8 text-secondary animate-pulse-brutal" strokeWidth={3} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-brutal text-xl sm:text-2xl text-foreground mb-2">
                        FORT_KNOX
                      </h3>
                      <p className="text-retro text-sm sm:text-base text-foreground/80">
                        Military-grade encryption. Your data stays YOURS.
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 w-4 h-4 bg-secondary border-2 border-foreground animate-rotate-chaos" />
                </div>

                {/* Card 3 */}
                <div className="group relative brutal-border-thick bg-gradient-chaos p-6 sm:p-7 rotate-brutal-1 hover:rotate-brutal-5 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 brutal-border bg-background flex items-center justify-center group-hover:animate-rotate-chaos">
                      <Cpu className="w-8 h-8 text-accent animate-color-shift" strokeWidth={3} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-brutal text-xl sm:text-2xl text-foreground mb-2">
                        BUILT_FOR_INDIA
                      </h3>
                      <p className="text-retro text-sm sm:text-base text-foreground/80">
                        Hindi, Tamil, Bengali, and 20+ languages NATIVELY.
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 w-4 h-4 bg-accent border-2 border-foreground animate-bounce-brutal" />
                </div>

              </div>

              {/* BRUTAL BADGE CLUSTER */}
              <div className="relative brutal-border-thick bg-card p-6 space-y-4 rotate-brutal-2 noise-texture">
                <div className="absolute -top-3 -right-3 brutal-border bg-destructive text-foreground text-brutal text-xs px-3 py-1 rotate-brutal-5 animate-pulse-brutal">
                  HOT
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 brutal-border bg-primary flex items-center justify-center animate-glitch">
                    <span className="text-brutal text-xs text-foreground">🇮🇳</span>
                  </div>
                  <span className="text-retro text-sm font-bold text-foreground">MADE_IN_INDIA</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 brutal-border bg-secondary flex items-center justify-center animate-rotate-chaos">
                    <span className="text-brutal text-xs text-foreground">⚡</span>
                  </div>
                  <span className="text-retro text-sm font-bold text-foreground">ENTERPRISE_GRADE</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 brutal-border bg-accent flex items-center justify-center animate-bounce-brutal">
                    <span className="text-brutal text-xs text-foreground">★</span>
                  </div>
                  <span className="text-retro text-sm font-bold text-foreground">PREMIUM_QUALITY</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* CHAOTIC DECORATIVE ELEMENTS */}
      <div className="absolute top-32 right-[5%] hidden xl:block">
        <div className="w-32 h-32 brutal-border-xl bg-quaternary/50 animate-float-chaotic rotate-brutal-5" />
      </div>

      <div className="absolute bottom-20 left-[8%] hidden xl:block">
        <div className="text-brutal text-9xl text-primary/10 animate-rotate-chaos">
          &lt;/&gt;
        </div>
      </div>

      <div className="absolute top-1/2 right-[3%] hidden xl:block">
        <div className="brutal-border bg-destructive/80 p-4 rotate-brutal-4 animate-pulse-brutal">
          <span className="text-brutal text-2xl text-foreground">ERROR</span>
        </div>
      </div>

      {/* Terminal-style scanline effect */}
      <div className="absolute inset-0 pointer-events-none z-30">
        <div className="w-full h-1 bg-primary/30 absolute top-0 animate-scanline" />
      </div>

    </section>
  );
};

export default Hero;
