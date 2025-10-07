import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, CheckCircle2, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(to right, hsl(263 70% 60% / 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(263 70% 60% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-glow-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[140px] animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 sm:space-y-8 animate-fade-in px-4">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 backdrop-blur-md shadow-lg hover:shadow-glow transition-all duration-300 cursor-pointer group">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold bg-gradient-text bg-clip-text text-transparent">
                India's #1 AI Platform
              </span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse"></div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-tight">
              <span className="text-foreground/90 block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 sm:mb-3">
                Welcome to
              </span>
              <span className="bg-gradient-text bg-clip-text text-transparent drop-shadow-2xl block mb-2 sm:mb-3">
                BharatGoAi
              </span>
              <span className="text-foreground/80 block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium">
                India's Advanced AI Platform
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground/85 max-w-3xl mx-auto leading-relaxed font-normal">
              India's most advanced AI platform combining cutting-edge technology with
              <span className="text-primary font-medium"> enterprise-grade security</span>.
              Experience the future of intelligent automation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6">
              <Button
                variant="hero"
                size="lg"
                className="group shadow-2xl text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 hover:scale-105 w-full sm:w-auto"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button
                variant="glass"
                size="lg"
                className="text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 hover:scale-105 group w-full sm:w-auto"
              >
                <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
