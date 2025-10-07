import { Brain, Lock, Zap, Globe, Shield, Cpu, Sparkles, MessageSquare, FileText, Languages, Code, Mic, Image } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat Interface",
    description: "Engage in natural conversations with our advanced AI chatbot powered by state-of-the-art language models for intelligent responses.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: FileText,
    title: "Text Generation",
    description: "Generate high-quality content, articles, emails, and creative writing with our powerful text generation capabilities.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Code,
    title: "Code Assistant",
    description: "Write, debug, and optimize code across multiple programming languages with AI-powered coding assistance.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Languages,
    title: "Multi-Language Support",
    description: "Communicate in multiple Indian and international languages with seamless translation and understanding.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security protocols to protect your data and ensure complete privacy.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: Zap,
    title: "Lightning Fast Responses",
    description: "Optimized infrastructure delivering instant AI responses for real-time conversations and interactions.",
    gradient: "from-indigo-500 to-blue-600",
  },
];

const Features = () => {
  return (
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
        </div>
      </div>
    </section>
  );
};

export default Features;
