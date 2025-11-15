import { Shield, Lock, Eye, Server, Zap, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const securityFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption protecting your data at every layer",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data remains yours—zero-knowledge architecture",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "Complete visibility into AI decision-making processes",
  },
  {
    icon: Server,
    title: "99.9% Uptime",
    description: "Reliable infrastructure with redundant global systems",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast AI responses with minimal latency",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Distributed architecture serving users worldwide",
  },
];

const TrustSection = () => {
  return (
    <section className="py-32 sm:py-40 lg:py-48 relative overflow-hidden bg-background">
      {/* Advanced multi-layered atmospheric background */}
      <div className="absolute inset-0 z-0">
        {/* Asymmetric gradient orbs with varied motion */}
        <div className="absolute top-[15%] right-[18%] w-[650px] h-[650px] rounded-full blur-[160px] opacity-25 animate-float-natural" style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.35), rgba(139, 92, 246, 0.2), transparent)',
          animationDuration: '14s'
        }}></div>
        <div className="absolute bottom-[25%] left-[12%] w-[700px] h-[700px] rounded-full blur-[180px] opacity-30 animate-pulse-3d" style={{
          background: 'radial-gradient(ellipse, rgba(99, 102, 241, 0.4), rgba(59, 130, 246, 0.25), transparent)',
          animationDuration: '16s',
          animationDelay: '2s'
        }}></div>

        {/* Organic mesh pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(162, 89, 255, 0.3) 1.5px, transparent 1.5px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.25) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '72px 72px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
        {/* Ultra-premium section header */}
        <div className="text-center max-w-4xl mx-auto mb-24 sm:mb-32 space-y-8 animate-fade-in-up">
          {/* Refined badge with subtle glow */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-frosted border border-primary/20 shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Shield className="w-4 h-4 text-primary animate-pulse relative z-10" />
            <span className="text-sm font-semibold tracking-wide text-foreground/90 uppercase relative z-10">Enterprise Grade</span>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse relative z-10 shadow-lg shadow-primary/50"></div>
          </div>

          {/* Organic typography with depth */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] heading-refined">
            <span className="block text-foreground/95 mb-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Built for Trust
            </span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-2xl animate-fade-in-up font-semibold" style={{
              animationDelay: '0.2s',
              textShadow: '0 0 80px rgba(139, 92, 246, 0.3)'
            }}>
              & Performance
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground/90 max-w-3xl mx-auto text-airy animate-fade-in-up font-normal leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Advanced security architecture combined with cutting-edge AI technology—
            engineered for the most demanding enterprise environments.
          </p>
        </div>

        {/* Premium glass feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const gradients = [
              { gradient: 'from-violet-500 via-purple-500 to-purple-600', glow: 'rgba(139, 92, 246, 0.4)' },
              { gradient: 'from-pink-500 via-rose-500 to-rose-600', glow: 'rgba(236, 72, 153, 0.4)' },
              { gradient: 'from-blue-500 via-indigo-500 to-indigo-600', glow: 'rgba(99, 102, 241, 0.4)' },
              { gradient: 'from-cyan-500 via-blue-500 to-blue-600', glow: 'rgba(59, 130, 246, 0.4)' },
              { gradient: 'from-amber-500 via-orange-500 to-orange-600', glow: 'rgba(245, 158, 11, 0.4)' },
              { gradient: 'from-emerald-500 via-teal-500 to-teal-600', glow: 'rgba(16, 185, 129, 0.4)' }
            ];
            const color = gradients[index % gradients.length];

            return (
              <div
                key={index}
                className="group relative animate-scale-in"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {/* Ultra-premium glass card with 3D effect */}
                <div className="glass-card glass-hover relative overflow-hidden">

                  {/* Animated top accent with glow */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden rounded-t-3xl">
                    <div className={`h-full bg-gradient-to-r ${color.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg`} style={{
                      boxShadow: `0 4px 20px ${color.glow}`
                    }}></div>
                  </div>

                  {/* Layered background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-700`}></div>

                  {/* Floating 3D icon container */}
                  <div className="relative mb-7 group-hover:-translate-y-2 transition-all duration-500">
                    <div className="relative inline-flex">
                      {/* Icon background with depth and refraction */}
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${color.gradient} p-[2px] shadow-2xl group-hover:scale-110 transition-all duration-500 hover:rotate-6`} style={{
                        boxShadow: `0 10px 40px ${color.glow}, inset 0 1px 2px rgba(255,255,255,0.3)`
                      }}>
                        <div className="w-full h-full bg-background/95 rounded-2xl flex items-center justify-center backdrop-blur-xl">
                          <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Atmospheric glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${color.gradient} opacity-0 group-hover:opacity-50 blur-3xl rounded-full transition-opacity duration-500 animate-pulse`}></div>
                    </div>
                  </div>

                  {/* Refined content */}
                  <div className="space-y-4 relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-foreground/95 group-hover:text-foreground transition-colors duration-300 leading-tight tracking-tight">
                      {feature.title}
                    </h3>

                    <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed group-hover:text-muted-foreground transition-colors duration-300 font-normal">
                      {feature.description}
                    </p>

                    {/* Progress indicator */}
                    <div className="pt-3">
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full w-0 bg-gradient-to-r ${color.gradient} group-hover:w-full transition-all duration-1000 ease-out shadow-lg`} style={{
                          boxShadow: `0 0 20px ${color.glow}`
                        }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Premium shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${color.gradient} animate-float-3d`} style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                    <div className={`absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${color.gradient} animate-pulse-3d`} style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
