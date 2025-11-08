<<<<<<< HEAD
import { Brain, Lock, Zap, Globe, Shield, Cpu, Sparkles, MessageSquare, FileText, Languages, Code, Mic, Image } from "lucide-react";
=======
import { Brain, Lock, Zap, Globe, Shield, Cpu, Sparkles, MessageSquare, FileText, Languages, Code, Mic, Image, ArrowUpRight } from "lucide-react";
>>>>>>> e122ece (Updated project files)
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat Interface",
    description: "Engage in natural conversations with our advanced AI chatbot powered by state-of-the-art language models for intelligent responses.",
<<<<<<< HEAD
    gradient: "from-violet-500 to-purple-600",
=======
    gradient: "from-violet-500 via-purple-500 to-purple-600",
    glowColor: "rgba(139, 92, 246, 0.4)",
    borderGlow: "rgba(168, 85, 247, 0.3)"
>>>>>>> e122ece (Updated project files)
  },
  {
    icon: FileText,
    title: "Text Generation",
    description: "Generate high-quality content, articles, emails, and creative writing with our powerful text generation capabilities.",
<<<<<<< HEAD
    gradient: "from-blue-500 to-cyan-600",
=======
    gradient: "from-blue-500 via-cyan-500 to-cyan-600",
    glowColor: "rgba(59, 130, 246, 0.4)",
    borderGlow: "rgba(56, 189, 248, 0.3)"
>>>>>>> e122ece (Updated project files)
  },
  {
    icon: Code,
    title: "Code Assistant",
    description: "Write, debug, and optimize code across multiple programming languages with AI-powered coding assistance.",
<<<<<<< HEAD
    gradient: "from-emerald-500 to-teal-600",
=======
    gradient: "from-emerald-500 via-teal-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.4)",
    borderGlow: "rgba(20, 184, 166, 0.3)"
>>>>>>> e122ece (Updated project files)
  },
  {
    icon: Languages,
    title: "Multi-Language Support",
    description: "Communicate in multiple Indian and international languages with seamless translation and understanding.",
<<<<<<< HEAD
    gradient: "from-amber-500 to-orange-600",
=======
    gradient: "from-amber-500 via-orange-500 to-orange-600",
    glowColor: "rgba(245, 158, 11, 0.4)",
    borderGlow: "rgba(251, 146, 60, 0.3)"
>>>>>>> e122ece (Updated project files)
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security protocols to protect your data and ensure complete privacy.",
<<<<<<< HEAD
    gradient: "from-rose-500 to-pink-600",
=======
    gradient: "from-rose-500 via-pink-500 to-pink-600",
    glowColor: "rgba(244, 63, 94, 0.4)",
    borderGlow: "rgba(236, 72, 153, 0.3)"
>>>>>>> e122ece (Updated project files)
  },
  {
    icon: Zap,
    title: "Lightning Fast Responses",
    description: "Optimized infrastructure delivering instant AI responses for real-time conversations and interactions.",
<<<<<<< HEAD
    gradient: "from-indigo-500 to-blue-600",
=======
    gradient: "from-indigo-500 via-blue-500 to-blue-600",
    glowColor: "rgba(99, 102, 241, 0.4)",
    borderGlow: "rgba(79, 70, 229, 0.3)"
>>>>>>> e122ece (Updated project files)
  },
];

const Features = () => {
  return (
<<<<<<< HEAD
    <section id="features" className="py-32 relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20 animate-fade-in px-4">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary">Why Choose BharatGoAi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight px-4">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Enterprise-Grade
            </span>
            <br />
            <span className="text-foreground">AI Capabilities</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Built with cutting-edge technology to deliver exceptional AI capabilities that scale with your needs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative p-5 sm:p-6 lg:p-8 bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-xl border-2 border-primary/40 hover:border-primary/80 transition-all duration-500 shadow-2xl hover:shadow-primary/20 hover:scale-[1.05] animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-700`}></div>

              {/* Glowing Corner Effect */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity duration-700`}></div>
              <div className={`absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-tr ${feature.gradient} opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity duration-700`}></div>

              {/* Top Border Glow */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.gradient} opacity-50 group-hover:opacity-100 group-hover:h-1 transition-all duration-500`}></div>

              {/* Content */}
              <h3 className="relative text-lg sm:text-xl lg:text-2xl font-black mb-2 sm:mb-3 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent group-hover:from-white group-hover:to-primary transition-all duration-500">
                {feature.title}
              </h3>

              <p className="relative text-sm sm:text-base text-muted-foreground/95 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Bottom Accent Line with Animation */}
              <div className={`absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r ${feature.gradient} shadow-lg shadow-current`}>
                <div className={`h-full w-0 bg-gradient-to-r ${feature.gradient} brightness-150 group-hover:w-full transition-all duration-700`}></div>
              </div>

              {/* Particle Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className={`absolute top-1/4 right-1/4 w-1 h-1 bg-gradient-to-r ${feature.gradient} rounded-full blur-sm animate-pulse`}></div>
                <div className={`absolute top-3/4 left-1/3 w-1 h-1 bg-gradient-to-r ${feature.gradient} rounded-full blur-sm animate-pulse`} style={{ animationDelay: '0.3s' }}></div>
                <div className={`absolute top-1/2 right-1/3 w-1 h-1 bg-gradient-to-r ${feature.gradient} rounded-full blur-sm animate-pulse`} style={{ animationDelay: '0.6s' }}></div>
              </div>
            </Card>
          ))}
=======
    <section id="features" className="py-32 sm:py-40 lg:py-48 relative overflow-hidden bg-background">
      {/* Advanced 3D Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-30 animate-pulse-3d" style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), rgba(99, 102, 241, 0.2), transparent)',
          animationDuration: '8s'
        }}></div>
        <div className="absolute top-[40%] right-[10%] w-[700px] h-[700px] rounded-full blur-[160px] opacity-30 animate-float-slow" style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), rgba(14, 165, 233, 0.2), transparent)',
          animationDuration: '10s'
        }}></div>
        <div className="absolute bottom-[15%] left-[20%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-25 animate-pulse-3d" style={{
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.35), rgba(6, 182, 212, 0.18), transparent)',
          animationDuration: '9s',
          animationDelay: '2s'
        }}></div>

        {/* Advanced Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/30 to-background"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
        {/* Ultra-Premium Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-24 sm:mb-32 space-y-8 animate-fade-in-up">
          {/* Advanced Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-primary/30 bg-gradient-to-r from-primary/15 via-secondary/10 to-accent/15 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Sparkles className="w-4 h-4 text-primary animate-pulse relative z-10" />
            <span className="text-sm font-bold tracking-wider text-foreground/90 uppercase relative z-10">Premium Features</span>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse relative z-10 shadow-lg shadow-primary/50"></div>
          </div>

          {/* Enhanced Typography */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]">
            <span className="block text-foreground/95 mb-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Enterprise-Grade
            </span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-2xl animate-fade-in-up" style={{
              animationDelay: '0.2s',
              textShadow: '0 0 80px rgba(139, 92, 246, 0.4)'
            }}>
              AI Capabilities
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Experience cutting-edge artificial intelligence with advanced features designed for modern businesses
          </p>
        </div>

        {/* Ultra-Advanced Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Advanced Card with 3D Effect */}
                <div className="relative h-full p-10 rounded-3xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-2xl border border-white/10 transition-all duration-700 hover:border-white/20 hover:shadow-2xl overflow-hidden" style={{
                  transform: 'translateZ(0)',
                  boxShadow: `0 20px 60px -15px ${feature.glowColor}`
                }}>

                  {/* Animated Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700`}></div>

                  {/* Top Accent Line with Glow */}
                  <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg`} style={{
                      boxShadow: `0 4px 20px ${feature.borderGlow}`
                    }}></div>
                  </div>

                  {/* Floating 3D Icon Container */}
                  <div className="relative mb-8 group-hover:-translate-y-2 transition-all duration-500">
                    <div className="relative inline-flex">
                      {/* Icon Background with 3D Effect */}
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[2px] shadow-2xl group-hover:scale-110 transition-all duration-500`} style={{
                        boxShadow: `0 10px 40px ${feature.glowColor}, inset 0 1px 2px rgba(255,255,255,0.3)`
                      }}>
                        <div className="w-full h-full bg-background/95 rounded-2xl flex items-center justify-center backdrop-blur-xl">
                          <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Animated Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-40 blur-3xl rounded-full transition-opacity duration-500 animate-pulse`}></div>
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="space-y-5 relative z-10">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground/95 group-hover:text-foreground transition-colors duration-300 leading-tight">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed group-hover:text-muted-foreground transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Progress Bar Indicator */}
                    <div className="pt-4">
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full w-0 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-1000 ease-out shadow-lg`} style={{
                          boxShadow: `0 0 20px ${feature.borderGlow}`
                        }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Premium Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000" style={{
                      animation: 'shimmer 3s infinite'
                    }}></div>
                  </div>

                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} animate-float-3d`} style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                    <div className={`absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient} animate-pulse-3d`} style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
                    <div className={`absolute top-6 right-12 w-1 h-1 rounded-full bg-gradient-to-r ${feature.gradient} animate-float-slow`} style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advanced CTA Section */}
        <div className="mt-24 text-center space-y-6">
          <p className="text-base text-muted-foreground/60">Explore our complete feature ecosystem</p>
          <div className="relative inline-flex flex-col items-center gap-3">
            <div className="w-0.5 h-16 bg-gradient-to-b from-primary via-secondary to-transparent animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-primary animate-bounce shadow-lg shadow-primary/50"></div>
          </div>
>>>>>>> e122ece (Updated project files)
        </div>
      </div>
    </section>
  );
};

export default Features;
