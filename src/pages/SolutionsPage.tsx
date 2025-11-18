import Navbar from "@/components/Navbar";
import { Building2, ShoppingCart, GraduationCap, Stethoscope, Briefcase, TrendingUp, Users, Cpu } from "lucide-react";

const SolutionsPage = () => {
  // Unique solutions with different visual treatments
  const solutions = [
    {
      icon: Building2,
      title: "Enterprise",
      subtitle: "For large organizations",
      description: "Scale AI across your organization with custom models, dedicated support, and enterprise SLAs.",
      features: ["Custom AI models", "Dedicated infrastructure", "24/7 priority support", "SOC 2 compliance"],
      gradient: "from-ocean-600 via-seafoam-500 to-ocean-500",
      accent: "border-seafoam-500/50"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      subtitle: "For online stores",
      description: "Product recommendations, customer support automation, and content generation for your store.",
      features: ["Smart product recommendations", "24/7 AI chat support", "Auto-generate descriptions", "Sentiment analysis"],
      gradient: "from-ocean-600 via-coral-500 to-seafoam-500",
      accent: "border-coral-500/50"
    },
    {
      icon: GraduationCap,
      title: "Education",
      subtitle: "For learning platforms",
      description: "Personalized tutoring, instant doubt clearing, and smart assessments for students.",
      features: ["Personalized tutoring", "Multi-language support", "Instant doubt solving", "Smart assessments"],
      gradient: "from-coral-600 via-ocean-500 to-seafoam-500",
      accent: "border-ocean-500/50"
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      subtitle: "For medical facilities",
      description: "AI-powered medical assistance, patient data analysis, and appointment management.",
      features: ["Medical assistant AI", "Patient data analysis", "Appointment management", "HIPAA compliant"],
      gradient: "from-seafoam-600 via-ocean-500 to-coral-500",
      accent: "border-seafoam-500/50"
    },
    {
      icon: Briefcase,
      title: "Startups",
      subtitle: "For growing companies",
      description: "Build your MVP faster with AI-powered analytics, support automation, and marketing tools.",
      features: ["Rapid prototyping", "AI-powered analytics", "Marketing automation", "Flexible pricing"],
      gradient: "from-coral-600 via-seafoam-500 to-ocean-500",
      accent: "border-coral-500/50"
    },
    {
      icon: TrendingUp,
      title: "Marketing",
      subtitle: "For marketing teams",
      description: "Content generation, ad optimization, and audience insights to improve campaign performance.",
      features: ["Content generation", "Ad optimization", "Audience insights", "Performance tracking"],
      gradient: "from-ocean-600 via-coral-500 to-seafoam-500",
      accent: "border-ocean-500/50"
    }
  ];

  return (
    <main className="min-h-screen ocean-bg ocean-mesh">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Organic background shapes */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-ocean-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-seafoam-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side */}
            <div className="space-y-8 lg:pl-12">
              <div className="inline-block px-4 py-2 rounded-full glass-ocean border border-ocean-500/30">
                <span className="text-ocean-400 font-semibold text-sm">SOLUTIONS FOR EVERY INDUSTRY</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
                AI Solutions
                <br />
                <span className="text-ocean-gradient">
                  For Your Industry
                </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                From small businesses to large enterprises, we have AI solutions tailored to your needs.
              </p>

              <div className="flex gap-4">
                <a
                  href="/chat"
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-ocean-500 to-seafoam-600 text-white font-bold hover:shadow-2xl hover:shadow-ocean-500/50 transition-glass hover-lift"
                >
                  Try It Free
                </a>
                <a
                  href="/pricing"
                  className="px-8 py-4 rounded-2xl border-2 border-white/20 text-white font-bold hover:border-ocean-500/50 glass-ocean transition-glass"
                >
                  See Pricing
                </a>
              </div>
            </div>

            {/* Right side - decorative element */}
            <div className="hidden lg:block relative">
              <div className="grid grid-cols-2 gap-4">
                {[Cpu, Users, TrendingUp, Building2].map((Icon, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-3xl glass-ocean border border-white/10 p-8 flex items-center justify-center hover-lift transition-glass"
                    style={{
                      animationDelay: `${i * 100}ms`,
                      transform: i % 2 === 0 ? 'rotate(2deg)' : 'rotate(-2deg)'
                    }}
                  >
                    <Icon className="w-12 h-12 text-ocean-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`group relative rounded-3xl overflow-hidden ${solution.accent} border-2 transition-glass hover-lift`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'br' : 'bl'} ${solution.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                  <div className="relative z-10 p-8 sm:p-10 glass-ocean backdrop-blur-xl">
                    {/* Icon with unique rotation */}
                    <div className="mb-6">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${solution.gradient} transform ${isEven ? 'rotate-3' : '-rotate-3'} group-hover:rotate-6 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Title with subtitle */}
                    <div className="mb-4">
                      <h3 className={`text-3xl font-bold text-white mb-1`}>
                        {solution.title}
                      </h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent uppercase tracking-wider`}>
                        {solution.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features list with custom bullets */}
                    <ul className="space-y-3">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.gradient} flex-shrink-0`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA with unique styling */}
                    <button className={`mt-8 px-6 py-3 rounded-xl bg-gradient-to-r ${solution.gradient} text-white font-semibold hover:shadow-xl transition-glass hover-lift`}>
                      Learn More →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom industry CTA */}
          <div className="mt-20 text-center">
            <div className="inline-block p-12 rounded-3xl glass-ocean border border-white/10 relative overflow-hidden group transition-glass hover-lift">
              <div className="absolute inset-0 bg-gradient-to-r from-ocean-500/0 via-seafoam-500/10 to-coral-500/0 group-hover:via-seafoam-500/20 transition-all duration-700" />

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Need a custom solution?
                </h2>
                <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                  We build AI solutions tailored to your specific industry and requirements.
                </p>
                <a
                  href="mailto:sales@bharatgoai.com"
                  className="inline-block px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold hover:shadow-2xl hover:shadow-white/50 transition-glass hover-lift"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 glass-ocean backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-slate-500">
            <p>&copy; 2025 BharatGoAi. Built in India</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default SolutionsPage;
