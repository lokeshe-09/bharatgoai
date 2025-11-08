import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();


  return (
    <section className="py-32 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[150px] animate-glow-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" style={{ 
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(263 70% 60%) 1px, transparent 0)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 backdrop-blur-md shadow-lg">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-text bg-clip-text text-transparent">Start Your AI Journey Today</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1]">
            <span className="text-foreground/95">Ready to Experience</span>
            <br />
            <span className="bg-gradient-text bg-clip-text text-transparent drop-shadow-2xl">
              India's Most Advanced AI?
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed font-light">
            Join thousands of innovators building the future with BharatGoAi. 
            <span className="text-primary font-medium"> Experience enterprise-grade AI</span> technology 
            designed for tomorrow's challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
            <Button
              onClick={() => navigate('/chat')}
              variant="hero"
              size="lg"
              className="group shadow-2xl text-base h-14 px-8"
            >
              Start Building Now
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              onClick={() => navigate('/chat')}
              variant="glass"
              size="lg"
              className="text-base h-14 px-8"
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
