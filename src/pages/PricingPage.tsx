import Navbar from "@/components/Navbar";
import { Check, Sparkles, Zap, Crown, ArrowRight } from "lucide-react";
import { useState } from "react";

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      subtitle: "For individuals",
      price: { monthly: 0, annual: 0 },
      icon: Sparkles,
      gradient: "from-seafoam-500 to-ocean-600",
      popular: false,
      features: [
        "50 requests/day",
        "Basic chat",
        "Community support",
        "Standard speed",
        "Public API"
      ],
      limitations: ["No custom models", "Limited languages"]
    },
    {
      name: "Pro",
      subtitle: "For professionals",
      price: { monthly: 2999, annual: 29990 },
      icon: Zap,
      gradient: "from-ocean-500 to-seafoam-600",
      popular: true,
      features: [
        "Unlimited requests",
        "Chat + Voice",
        "Priority support",
        "Sub-50ms responses",
        "Full API access",
        "15+ languages",
        "Code generation",
        "File uploads",
        "Custom instructions"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      subtitle: "For teams",
      price: { monthly: "Custom", annual: "Custom" },
      icon: Crown,
      gradient: "from-coral-500 to-ocean-600",
      popular: false,
      features: [
        "Everything in Pro",
        "Custom models",
        "Dedicated servers",
        "24/7 support",
        "SLA guarantees",
        "On-premise option",
        "Advanced analytics",
        "Team tools",
        "Admin dashboard",
        "Full compliance"
      ],
      limitations: []
    }
  ];

  return (
    <main className="min-h-screen ocean-bg ocean-mesh">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-seafoam-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-block px-4 py-2 rounded-full glass-ocean border border-ocean-500/30 mb-8">
            <span className="text-ocean-400 font-semibold text-sm">TRANSPARENT PRICING</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 leading-tight">
            Simple Pricing
            <br />
            <span className="text-ocean-gradient">
              Clear Value
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Choose the plan that works for you. Change or cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className={`font-semibold transition-colors ${!isAnnual ? 'text-white' : 'text-slate-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-glass ${isAnnual ? 'bg-gradient-to-r from-ocean-500 to-seafoam-600' : 'bg-slate-700'}`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}
              />
            </button>
            <span className={`font-semibold transition-colors ${isAnnual ? 'text-white' : 'text-slate-500'}`}>
              Annual
            </span>
            <span className="px-3 py-1 rounded-full bg-seafoam-500/20 text-seafoam-400 text-sm font-bold">
              Save 17%
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const price = isAnnual ? plan.price.annual : plan.price.monthly;
              const isPopular = plan.popular;

              return (
                <div
                  key={index}
                  className={`relative rounded-3xl border-2 transition-glass hover-lift group
                    ${isPopular
                      ? 'border-ocean-500/50 glass-ocean scale-105 shadow-2xl shadow-ocean-500/20'
                      : 'border-white/10 glass-seafoam hover:scale-105 hover:border-white/30'
                    }
                  `}
                  style={{
                    transform: isPopular ? 'translateY(-10px)' : 'translateY(0)',
                  }}
                >
                  {/* Popular badge */}
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-ocean-500 to-seafoam-600 text-white text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8 sm:p-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${plan.gradient} transform ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'} transition-transform group-hover:rotate-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Plan name */}
                    <div className="mb-8">
                      <h3 className="text-3xl font-bold text-white mb-1">
                        {plan.name}
                      </h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent uppercase tracking-wider`}>
                        {plan.subtitle}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      {typeof price === 'number' ? (
                        <>
                          <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-black text-white">
                              ₹{price === 0 ? '0' : price.toLocaleString('en-IN')}
                            </span>
                            {price !== 0 && (
                              <span className="text-slate-400">
                                /{isAnnual ? 'year' : 'month'}
                              </span>
                            )}
                          </div>
                          {price !== 0 && isAnnual && (
                            <p className="text-sm text-slate-500 mt-2">
                              ₹{Math.round(price / 12).toLocaleString('en-IN')}/month billed annually
                            </p>
                          )}
                        </>
                      ) : (
                        <div className="text-4xl font-black text-white">
                          Let's talk
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={typeof price === 'number' && price === 0 ? '/chat' : (typeof price === 'string' ? 'mailto:sales@bharatgoai.com' : '/chat')}
                      className={`w-full block text-center px-6 py-4 rounded-2xl font-bold mb-8 transition-glass hover-lift
                        ${isPopular
                          ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-2xl hover:shadow-ocean-500/50`
                          : 'glass-ocean text-white hover:bg-ocean-500/30'
                        }
                      `}
                    >
                      {typeof price === 'string' ? 'Contact Sales' : (price === 0 ? 'Start Free' : 'Get Started')}
                      <ArrowRight className="inline-block ml-2 w-5 h-5" />
                    </a>

                    {/* Features */}
                    <div className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                      {plan.limitations.map((limitation, i) => (
                        <div key={i} className="flex items-start gap-3 opacity-50">
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                            <span className="text-slate-500 text-xs">×</span>
                          </div>
                          <span className="text-slate-500 text-sm line-through">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FAQ */}
          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Common Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "Can I cancel anytime?",
                  a: "Yes. Cancel with one click. No questions asked."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "UPI, credit/debit cards, and net banking."
                },
                {
                  q: "Do you offer refunds?",
                  a: "Full refund within 7 days if you're not satisfied."
                },
                {
                  q: "Is there a student discount?",
                  a: "Yes. Students get 50% off Pro with valid ID."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl glass-ocean border border-ocean-500/30 hover:border-ocean-500/50 transition-glass hover-lift">
                  <h3 className="text-white font-bold mb-2">{item.q}</h3>
                  <p className="text-slate-400 text-sm">{item.a}</p>
                </div>
              ))}
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

export default PricingPage;
