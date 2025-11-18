import Navbar from "@/components/Navbar";
import { Shield, Lock, Eye, Server, FileCheck, Users, Fingerprint, AlertCircle } from "lucide-react";

const SecurityPage = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "AES-256 encryption for all data in transit and at rest. Your information stays private.",
      color: "from-seafoam-500 to-ocean-600"
    },
    {
      icon: Shield,
      title: "Zero Trust Architecture",
      description: "Every request is verified. Every access is logged. Nothing is assumed.",
      color: "from-ocean-500 to-seafoam-600"
    },
    {
      icon: Server,
      title: "India-Based Infrastructure",
      description: "Servers located in Mumbai, Bangalore, and Delhi. Your data stays in India.",
      color: "from-ocean-500 to-coral-600"
    },
    {
      icon: Eye,
      title: "No Training on Your Data",
      description: "Your conversations are never used for model training. They remain completely private.",
      color: "from-coral-500 to-ocean-600"
    },
    {
      icon: Fingerprint,
      title: "Advanced Authentication",
      description: "Two-factor authentication, SSO, and biometric options to secure your account.",
      color: "from-seafoam-500 to-coral-600"
    },
    {
      icon: FileCheck,
      title: "Complete Data Control",
      description: "Export or delete your data anytime. You're always in control.",
      color: "from-ocean-500 to-seafoam-600"
    }
  ];

  const securityStats = [
    { name: "Zero Breaches", color: "seafoam" },
    { name: "99.9% Uptime", color: "ocean" },
    { name: "India First", color: "coral" }
  ];

  return (
    <main className="min-h-screen ocean-bg ocean-mesh">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated security grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="absolute top-20 left-20 w-72 h-72 bg-seafoam-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 mb-8 rounded-3xl glass-seafoam border border-seafoam-500/30">
              <Shield className="w-16 h-16 text-seafoam-400" />
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 leading-tight">
              Enterprise-Grade
              <br />
              <span className="text-seafoam-gradient">
                Security
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Your data is protected with bank-level security. We take privacy seriously.
            </p>

            {/* Security Stats */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {securityStats.map((stat, i) => (
                <div
                  key={i}
                  className={`px-6 py-3 rounded-2xl glass-${stat.color} border-2 border-${stat.color}-500/30 backdrop-blur-xl transition-glass hover-lift`}
                >
                  <span className={`text-${stat.color}-400 font-bold`}>{stat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-3xl glass-ocean border border-white/10 hover:border-ocean-500/30 transition-glass hover-lift"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 transform rotate-3 group-hover:rotate-6 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Stats */}
            <div className="space-y-12 lg:pl-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                  Security by the Numbers
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Our commitment to keeping your data safe.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "99.9%", label: "Uptime Track Record" },
                  { number: "256-bit", label: "Encryption Standard" },
                  { number: "< 50ms", label: "Response Time" },
                  { number: "0", label: "Breaches Ever" }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl glass-ocean border border-ocean-500/30 transition-glass hover-lift"
                  >
                    <div className="text-3xl font-black text-seafoam-gradient mb-2">
                      {stat.number}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Security Promise */}
            <div className="relative">
              <div className="p-10 rounded-3xl glass-seafoam border-2 border-seafoam-500/30 backdrop-blur-xl transition-glass hover-lift">
                <AlertCircle className="w-12 h-12 text-seafoam-400 mb-6" />

                <h3 className="text-3xl font-bold text-white mb-6">
                  Our Security Commitments
                </h3>

                <div className="space-y-4 text-slate-300">
                  <p className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-seafoam-400 flex-shrink-0" />
                    <span>Your data is never sold or shared with third parties.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-seafoam-400 flex-shrink-0" />
                    <span>We don't use your conversations to train our models.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-seafoam-400 flex-shrink-0" />
                    <span>Any security incident is disclosed immediately.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-seafoam-400 flex-shrink-0" />
                    <span>You can export or delete your data anytime.</span>
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-seafoam-500/20">
                  <a
                    href="mailto:security@bharatgoai.com"
                    className="inline-flex items-center gap-2 text-seafoam-400 hover:text-seafoam-300 font-semibold transition-colors"
                  >
                    Report a security issue
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-3xl glass-ocean border border-white/10 relative overflow-hidden group transition-glass hover-lift">
              <div className="absolute inset-0 bg-gradient-to-r from-seafoam-500/0 via-seafoam-500/10 to-ocean-500/0 group-hover:via-seafoam-500/20 transition-all duration-700" />

              <div className="relative z-10">
                <Users className="w-16 h-16 text-seafoam-400 mx-auto mb-6" />

                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Enterprise Security Solutions
                </h2>

                <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                  Custom security controls, on-premise deployment, and dedicated infrastructure for your organization.
                </p>

                <a
                  href="mailto:enterprise@bharatgoai.com"
                  className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-seafoam-500 to-ocean-600 text-white font-bold hover:shadow-2xl hover:shadow-seafoam-500/50 transition-glass hover-lift"
                >
                  Contact Enterprise Sales
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

export default SecurityPage;
