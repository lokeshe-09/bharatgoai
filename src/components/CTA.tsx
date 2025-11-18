import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();


  return (
    <section className="py-32 sm:py-40 relative overflow-hidden">
      {/* Sophisticated glassmorphism background */}
      <div className="absolute inset-0">
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent rounded-full blur-3xl animate-float-smooth" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-accent/30 via-accent/10 to-transparent rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

        {/* Elegant grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(162, 89, 255, 0.4) 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Glass container with depth */}
        <div className="max-w-5xl mx-auto glass-frosted rounded-[3rem] p-12 sm:p-16 lg:p-20 shadow-2xl relative overflow-hidden">
          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />
          </div>

          <div className="text-center space-y-10 relative z-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-frosted border border-primary/20 shadow-lg animate-fade-in-up">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Start Your AI Journey Today</span>
            </div>

            <h2 className="text-display text-5xl sm:text-6xl lg:text-7xl leading-[1.08] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-foreground">Ready to Experience</span>
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent animate-gradient">
                  India's Most Advanced AI?
                </span>
                <span className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl opacity-50 -z-10" />
              </span>
            </h2>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Join thousands of innovators building the future with BharatGoAi.
              <span className="text-primary font-semibold"> Experience enterprise-grade AI</span> technology
              designed for tomorrow's challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button
                onClick={() => navigate('/chat')}
                size="lg"
                className="group relative overflow-hidden text-lg px-12 py-7 bg-gradient-to-r from-primary via-primary/90 to-primary shadow-2xl hover:shadow-primary/60 transition-smooth"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Building Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/25 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>

              <Button
                onClick={() => navigate('/chat')}
                variant="outline"
                size="lg"
                className="glass-frosted text-lg px-12 py-7 border-border/50 hover:border-primary/50 shadow-lg transition-smooth"
              >
                Get Started Free
              </Button>
            </div>

            {/* Trust indicators with glassmorphism */}
            <div className="grid grid-cols-3 gap-6 pt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">10K+</div>
                <div className="text-sm text-muted-foreground font-medium">Active Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">1M+</div>
                <div className="text-sm text-muted-foreground font-medium">Queries Daily</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">99.9%</div>
                <div className="text-sm text-muted-foreground font-medium">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
