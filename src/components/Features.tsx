import { Brain, Lock, Zap, Globe, Shield, Cpu, Sparkles, MessageSquare, FileText, Languages, Code, Mic, Image, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat Interface",
    description: "Engage in natural conversations with our advanced AI chatbot powered by state-of-the-art language models for intelligent responses.",
    gradient: "from-violet-500 via-purple-500 to-purple-600",
    glowColor: "rgba(139, 92, 246, 0.4)",
    borderGlow: "rgba(168, 85, 247, 0.3)"
  },
  {
    icon: FileText,
    title: "Text Generation",
    description: "Generate high-quality content, articles, emails, and creative writing with our powerful text generation capabilities.",
    gradient: "from-blue-500 via-cyan-500 to-cyan-600",
    glowColor: "rgba(59, 130, 246, 0.4)",
    borderGlow: "rgba(56, 189, 248, 0.3)"
  },
  {
    icon: Code,
    title: "Code Assistant",
    description: "Write, debug, and optimize code across multiple programming languages with AI-powered coding assistance.",
    gradient: "from-emerald-500 via-teal-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.4)",
    borderGlow: "rgba(20, 184, 166, 0.3)"
  },
  {
    icon: Languages,
    title: "Multi-Language Support",
    description: "Communicate in multiple Indian and international languages with seamless translation and understanding.",
    gradient: "from-amber-500 via-orange-500 to-orange-600",
    glowColor: "rgba(245, 158, 11, 0.4)",
    borderGlow: "rgba(251, 146, 60, 0.3)"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security protocols to protect your data and ensure complete privacy.",
    gradient: "from-rose-500 via-pink-500 to-pink-600",
    glowColor: "rgba(244, 63, 94, 0.4)",
    borderGlow: "rgba(236, 72, 153, 0.3)"
  },
  {
    icon: Zap,
    title: "Lightning Fast Responses",
    description: "Optimized infrastructure delivering instant AI responses for real-time conversations and interactions.",
    gradient: "from-indigo-500 via-blue-500 to-blue-600",
    glowColor: "rgba(99, 102, 241, 0.4)",
    borderGlow: "rgba(79, 70, 229, 0.3)"
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-background">
      {/* Subtle organic background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[15%] left-[10%] w-[480px] h-[480px] rounded-full blur-[130px] opacity-12 bg-gradient-to-br from-violet-500 to-purple-600 animate-drift-slow" />
        <div className="absolute bottom-[20%] right-[12%] w-[520px] h-[520px] rounded-full blur-[140px] opacity-10 bg-gradient-to-br from-blue-500 to-cyan-600 animate-float-natural" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl relative z-10">
        {/* Clean, minimal header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-frosted mb-7 shadow-lg">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold tracking-wide text-foreground/90 uppercase">AI Capabilities</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.15]">
            <span className="block text-foreground/95 mb-2">Advanced Features</span>
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">Built for Excellence</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground/85 leading-relaxed font-normal">
            Powerful AI capabilities designed to transform how you work, create, and innovate
          </p>
        </div>

        {/* Feature Grid - organic spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animationDelay: `${index * 0.07}s`,
                  // Subtle vertical offset for human feel
                  marginTop: index % 2 === 1 ? '1rem' : '0'
                }}
              >
                <div className="relative h-full p-8 rounded-[28px] bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 shadow-lg hover:shadow-xl overflow-hidden">

                  {/* Subtle top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                  </div>

                  {/* Icon - refined sizing */}
                  <div className="mb-6 relative inline-block">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[2px] shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      <div className="w-full h-full bg-background/95 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Content - minimal and clean */}
                  <div className="space-y-4 relative z-10">
                    <h3 className="text-xl font-semibold text-foreground/95 leading-tight group-hover:text-foreground transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-base text-muted-foreground/80 leading-relaxed group-hover:text-muted-foreground transition-colors">
                      {feature.description}
                    </p>
                  </div>

                  {/* Subtle hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-[28px]`} />
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
        </div>
      </div>
    </section>
  );
};

export default Features;
