import Navbar from "@/components/Navbar";
import { Brain, Languages, Code2, Shield, Zap, MessageSquare, Database, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeaturesPage = () => {
  const navigate = useNavigate();
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Brain,
      title: "Smart AI Models",
      description: "Advanced language models that understand context and respond naturally. Learns from your conversations to give better answers.",
      color: "glass-ocean",
      size: "large"
    },
    {
      icon: Languages,
      title: "15+ Indian Languages",
      description: "Chat in Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, and more. Full support for regional dialects.",
      color: "glass-seafoam",
      size: "large"
    },
    {
      icon: Zap,
      title: "Fast Response Time",
      description: "Get answers in under 50 milliseconds. Optimized for speed without compromising quality.",
      color: "glass-coral",
      size: "medium"
    },
    {
      icon: Code2,
      title: "Code Generation",
      description: "Write code in Python, JavaScript, Java, Go, and more. Explains what it writes so you can learn.",
      color: "glass-ocean",
      size: "medium"
    },
    {
      icon: Shield,
      title: "Data Privacy",
      description: "Your data stays in India. Encrypted at rest and in transit. We don't train models on your data.",
      color: "glass-seafoam",
      size: "large"
    },
    {
      icon: MessageSquare,
      title: "Context Memory",
      description: "Remembers your conversation history. No need to repeat yourself. Pick up where you left off.",
      color: "glass-coral",
      size: "medium"
    },
    {
      icon: Database,
      title: "API Access",
      description: "Integrate with your apps using REST APIs. Complete documentation and code examples included.",
      color: "glass-ocean",
      size: "medium"
    },
    {
      icon: Sparkles,
      title: "Content Creation",
      description: "Write emails, blog posts, social media content. Edit and refine until it sounds right.",
      color: "glass-seafoam",
      size: "medium"
    }
  ];

  return (
    <main className="min-h-screen ocean-bg ocean-mesh">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-20 left-[5%] w-96 h-96 bg-ocean-500/8 rounded-full blur-3xl animate-float-gentle" />
        <div className="absolute top-40 right-[10%] w-80 h-80 bg-seafoam-500/6 rounded-full blur-3xl animate-float-gentle delay-300" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Everything you need</span>
              <br />
              <span className="text-seafoam-gradient">
                in one platform
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              AI tools designed for Indian businesses. Simple to use, powerful when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isLarge = feature.size === "large";

              return (
                <div
                  key={index}
                  className={`
                    group ${feature.color} rounded-3xl
                    transition-glass hover-lift hover-scale
                    ${isLarge ? 'md:col-span-2 lg:col-span-2' : ''}
                    ${hoveredFeature === index ? 'scale-[1.02]' : ''}
                  `}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`p-8 ${isLarge ? 'md:p-10' : 'md:p-8'} h-full flex flex-col`}>
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm group-hover:bg-white/15 transition-smooth">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h3 className={`font-bold text-white ${isLarge ? 'text-3xl' : 'text-2xl'}`}>
                        {feature.title}
                      </h3>
                      <p className={`text-slate-300 leading-relaxed ${isLarge ? 'text-lg' : 'text-base'}`}>
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover line */}
                    <div className="mt-6 h-1 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ width: hoveredFeature === index ? '60px' : '0px' }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="glass-beveled rounded-3xl p-10 lg:p-12 text-center hover-lift transition-glass">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Ready to get started?
              </h2>
              <p className="text-slate-300 text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of Indian businesses already using our platform.
                Start with a free account today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/chat')}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-ocean-500 to-ocean-600 hover:from-ocean-600 hover:to-ocean-700 text-white font-semibold text-lg shadow-lg hover:shadow-ocean-500/30 transition-all hover:-translate-y-0.5 active-press"
                >
                  Try it free
                </button>
                <button
                  onClick={() => navigate('/pricing')}
                  className="px-8 py-4 rounded-2xl glass-medium border border-ocean-500/30 hover:border-ocean-500/50 hover:bg-ocean-500/10 text-white font-semibold text-lg transition-glass"
                >
                  View pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 glass-medium">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-slate-400">
            <p>&copy; 2025 BharatGoAi. Made in India 🇮🇳</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default FeaturesPage;
