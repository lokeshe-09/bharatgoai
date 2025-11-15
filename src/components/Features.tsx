import { Brain, Lock, Zap, Globe, Shield, Cpu, Sparkles, MessageSquare, FileText, Languages, Code, Mic, Image, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat Interface",
    description: "Engage in natural conversations with our advanced AI chatbot powered by state-of-the-art language models for intelligent responses.",
    gradient: "from-violet-500 via-purple-500 to-purple-600",
    glowColor: "rgba(139, 92, 246, 0.4)",
    borderGlow: "rgba(168, 85, 247, 0.3)",
    size: "large", // Asymmetric sizing
    position: "top-left"
  },
  {
    icon: FileText,
    title: "Text Generation",
    description: "Generate high-quality content, articles, emails, and creative writing with our powerful text generation capabilities.",
    gradient: "from-blue-500 via-cyan-500 to-cyan-600",
    glowColor: "rgba(59, 130, 246, 0.4)",
    borderGlow: "rgba(56, 189, 248, 0.3)",
    size: "medium",
    position: "top-right"
  },
  {
    icon: Code,
    title: "Code Assistant",
    description: "Write, debug, and optimize code across multiple programming languages with AI-powered coding assistance.",
    gradient: "from-emerald-500 via-teal-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.4)",
    borderGlow: "rgba(20, 184, 166, 0.3)",
    size: "medium",
    position: "middle-left"
  },
  {
    icon: Languages,
    title: "Multi-Language Support",
    description: "Communicate in multiple Indian and international languages with seamless translation and understanding.",
    gradient: "from-amber-500 via-orange-500 to-orange-600",
    glowColor: "rgba(245, 158, 11, 0.4)",
    borderGlow: "rgba(251, 146, 60, 0.3)",
    size: "large",
    position: "middle-right"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security protocols to protect your data and ensure complete privacy.",
    gradient: "from-rose-500 via-pink-500 to-pink-600",
    glowColor: "rgba(244, 63, 94, 0.4)",
    borderGlow: "rgba(236, 72, 153, 0.3)",
    size: "medium",
    position: "bottom-left"
  },
  {
    icon: Zap,
    title: "Lightning Fast Responses",
    description: "Optimized infrastructure delivering instant AI responses for real-time conversations and interactions.",
    gradient: "from-indigo-500 via-blue-500 to-blue-600",
    glowColor: "rgba(99, 102, 241, 0.4)",
    borderGlow: "rgba(79, 70, 229, 0.3)",
    size: "medium",
    position: "bottom-right"
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 sm:py-28 md:py-36 lg:py-44 xl:py-52 relative overflow-hidden bg-background">
      {/* Advanced 3D Background - Responsive */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Orbs - Responsive sizing */}
        <div className="absolute top-[10%] left-[5%] sm:left-[15%] w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] rounded-full blur-[100px] sm:blur-[120px] lg:blur-[150px] opacity-25 sm:opacity-30 animate-pulse-3d" style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), rgba(99, 102, 241, 0.2), transparent)',
          animationDuration: '8s'
        }}></div>
        <div className="absolute top-[40%] right-[5%] sm:right-[10%] w-[400px] sm:w-[550px] lg:w-[700px] h-[400px] sm:h-[550px] lg:h-[700px] rounded-full blur-[110px] sm:blur-[135px] lg:blur-[160px] opacity-25 sm:opacity-30 animate-float-slow" style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), rgba(14, 165, 233, 0.2), transparent)',
          animationDuration: '10s'
        }}></div>
        <div className="absolute bottom-[15%] left-[10%] sm:left-[20%] w-[280px] sm:w-[380px] lg:w-[500px] h-[280px] sm:h-[380px] lg:h-[500px] rounded-full blur-[100px] sm:blur-[120px] lg:blur-[140px] opacity-20 sm:opacity-25 animate-pulse-3d" style={{
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.35), rgba(6, 182, 212, 0.18), transparent)',
          animationDuration: '9s',
          animationDelay: '2s'
        }}></div>

        {/* Advanced Grid Pattern - Responsive */}
        <div className="absolute inset-0 opacity-[0.04] sm:opacity-[0.06]" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}></div>

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/30 to-background"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 max-w-7xl relative z-10">
        {/* Ultra-Premium Section Header - Responsive */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24 md:mb-28 lg:mb-32 space-y-5 sm:space-y-7 md:space-y-8 animate-fade-in-up">
          {/* Refined Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-primary/30 bg-gradient-to-r from-primary/15 via-secondary/10 to-accent/15 backdrop-blur-2xl shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary animate-pulse relative z-10" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-foreground/90 uppercase relative z-10">Premium AI Features</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse relative z-10 shadow-lg shadow-primary/50"></div>
          </div>

          {/* Refined Minimal Typography - Responsive */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] heading-refined">
            <span className="block text-foreground/95 mb-2 sm:mb-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Enterprise-Grade
            </span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-2xl animate-fade-in-up font-semibold" style={{
              animationDelay: '0.2s',
              textShadow: '0 0 80px rgba(139, 92, 246, 0.4)'
            }}>
              AI Capabilities
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground/90 max-w-3xl mx-auto text-airy animate-fade-in-up font-normal px-4 sm:px-0" style={{ animationDelay: '0.3s' }}>
            Experience cutting-edge artificial intelligence with advanced features designed for modern businesses
          </p>
        </div>

        {/* Ultra-Advanced Feature Grid - Asymmetric & Organic Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = feature.size === 'large';

            return (
              <div
                key={index}
                className={`group relative animate-scale-in ${
                  isLarge ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Advanced Card with Multi-Layer Glass & 3D Effect */}
                <div className={`relative h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-2xl border border-white/10 transition-all duration-700 hover:border-white/20 hover:shadow-2xl overflow-hidden glass-multilayer glass-noise glass-refract ${
                  isLarge ? 'p-7 sm:p-9 md:p-10 lg:p-12' : 'p-6 sm:p-8 md:p-9 lg:p-10'
                }`} style={{
                  transform: 'translateZ(0)',
                  boxShadow: `0 20px 60px -15px ${feature.glowColor}`
                }}>

                  {/* Animated Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700`}></div>

                  {/* Dynamic Top Accent Line with Glow */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                    <div className={`h-full bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg`} style={{
                      boxShadow: `0 4px 20px ${feature.borderGlow}`
                    }}></div>
                  </div>

                  {/* Floating 3D Icon Container */}
                  <div className="relative mb-6 sm:mb-7 md:mb-8 group-hover:-translate-y-2 transition-all duration-500">
                    <div className="relative inline-flex">
                      {/* Icon Background with 3D Effect & Responsive sizing */}
                      <div className={`relative ${
                        isLarge ? 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24' : 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20'
                      } rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} p-[2px] shadow-2xl group-hover:scale-110 transition-all duration-500`} style={{
                        boxShadow: `0 10px 40px ${feature.glowColor}, inset 0 1px 2px rgba(255,255,255,0.3)`
                      }}>
                        <div className="w-full h-full bg-background/95 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-xl">
                          <Icon className={`${
                            isLarge ? 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' : 'w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10'
                          } text-primary group-hover:scale-110 transition-transform duration-500`} strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Animated Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-40 blur-3xl rounded-full transition-opacity duration-500 animate-pulse`}></div>
                    </div>
                  </div>

                  {/* Refined Content - Responsive */}
                  <div className="space-y-3 sm:space-y-4 md:space-y-5 relative z-10">
                    <div>
                      <h3 className={`${
                        isLarge ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'
                      } font-semibold text-foreground/95 group-hover:text-foreground transition-colors duration-300 leading-tight tracking-tight`}>
                        {feature.title}
                      </h3>
                    </div>

                    <p className={`${
                      isLarge ? 'text-base sm:text-lg md:text-xl' : 'text-sm sm:text-base md:text-lg'
                    } text-muted-foreground/80 leading-relaxed group-hover:text-muted-foreground transition-colors duration-300 font-normal`}>
                      {feature.description}
                    </p>

                    {/* Explore Link - Only on larger cards */}
                    {isLarge && (
                      <div className="pt-2 sm:pt-3 md:pt-4">
                        <a href="#" className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-primary hover:gap-3 transition-all duration-300 group/link">
                          <span>Explore feature</span>
                          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                        </a>
                      </div>
                    )}

                    {/* Progress Bar Indicator */}
                    <div className="pt-3 sm:pt-4">
                      <div className="h-0.5 sm:h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full w-0 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-1000 ease-out shadow-lg`} style={{
                          boxShadow: `0 0 20px ${feature.borderGlow}`
                        }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Premium Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000" style={{
                      animation: 'shimmer 3s infinite'
                    }}></div>
                  </div>

                  {/* Floating Particles Effect - Asymmetric positions */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className={`absolute top-4 right-4 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${feature.gradient} animate-float-3d`} style={{ animationDelay: `${index * 0.2}s`, animationDuration: '3s' }}></div>
                    <div className={`absolute top-8 right-8 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-gradient-to-r ${feature.gradient} animate-pulse-3d`} style={{ animationDelay: `${index * 0.3}s`, animationDuration: '4s' }}></div>
                    <div className={`absolute top-6 right-12 w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-gradient-to-r ${feature.gradient} animate-float-slow`} style={{ animationDelay: `${index * 0.4}s`, animationDuration: '5s' }}></div>
                  </div>

                  {/* Asymmetric decorative element */}
                  <div className={`absolute ${
                    index % 2 === 0 ? 'bottom-4 left-4' : 'top-4 left-4'
                  } w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-all duration-700 animate-float-natural`} style={{
                    background: `radial-gradient(circle, ${feature.glowColor}, transparent)`,
                    animationDelay: `${index * 0.5}s`
                  }}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advanced CTA Section - Responsive */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center space-y-4 sm:space-y-6">
          <p className="text-sm sm:text-base text-muted-foreground/60">Explore our complete feature ecosystem</p>
          <div className="relative inline-flex flex-col items-center gap-2 sm:gap-3">
            <div className="w-0.5 h-12 sm:h-16 bg-gradient-to-b from-primary via-secondary to-transparent animate-pulse"></div>
            <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-primary animate-bounce shadow-lg shadow-primary/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
