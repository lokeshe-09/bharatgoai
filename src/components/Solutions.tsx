import { Sparkles, Building2, Code2, ShoppingCart, GraduationCap, Stethoscope, Briefcase } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Enterprise AI",
    description: "Transform your business operations with custom AI solutions tailored for large-scale enterprises.",
    features: ["Custom model training", "API integration", "24/7 support"],
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Code2,
    title: "Developer Tools",
    description: "Build faster with AI-powered coding assistants, code generation, and debugging tools for developers.",
    features: ["Code completion", "Bug detection", "Documentation"],
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Enhance customer experience with AI chatbots, product recommendations, and intelligent search.",
    features: ["Smart recommendations", "24/7 chat support", "Inventory optimization"],
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Personalized learning experiences with AI tutors, content generation, and assessment tools.",
    features: ["Adaptive learning", "Auto-grading", "Content creation"],
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Improve patient care with AI-powered diagnostics, medical documentation, and patient engagement.",
    features: ["Medical transcription", "Patient insights", "Care automation"],
    color: "from-rose-500 to-pink-600"
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Streamline operations with AI for document analysis, client communication, and workflow automation.",
    features: ["Document processing", "Client analytics", "Task automation"],
    color: "from-indigo-500 to-blue-600"
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[12%] left-[8%] w-[520px] h-[520px] rounded-full blur-[140px] opacity-20 animate-drift-slow bg-gradient-to-br from-violet-500 to-purple-600" />
        <div className="absolute bottom-[15%] right-[10%] w-[480px] h-[480px] rounded-full blur-[130px] opacity-18 animate-float-natural bg-gradient-to-br from-blue-500 to-cyan-600" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl">
        {/* Header - human-crafted spacing */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-frosted mb-7 shadow-lg">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold tracking-wide text-foreground/90 uppercase">Solutions</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.15]">
            <span className="block text-foreground/95 mb-2">AI Solutions for</span>
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">Every Industry</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground/85 leading-relaxed font-normal">
            Specialized AI capabilities designed to solve real-world challenges across industries
          </p>
        </div>

        {/* Solutions grid - asymmetric layout for human touch */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animationDelay: `${index * 0.08}s`,
                  // Subtle vertical offset for organic feel
                  marginTop: index % 3 === 1 ? '1.5rem' : '0'
                }}
              >
                <div className="h-full p-8 rounded-[28px] bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 shadow-lg hover:shadow-2xl relative overflow-hidden">

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>

                  {/* Icon */}
                  <div className="mb-6 relative inline-block">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} p-[2px] shadow-lg group-hover:scale-110 transition-all duration-500`}>
                      <div className="w-full h-full bg-background/95 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-foreground/95 mb-3 group-hover:text-foreground transition-colors">
                    {solution.title}
                  </h3>

                  <p className="text-base text-muted-foreground/80 leading-relaxed mb-5 group-hover:text-muted-foreground transition-colors">
                    {solution.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2.5">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-muted-foreground/75">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.color}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-[28px]`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
