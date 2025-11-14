import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles, Zap, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const pricingPlans = [
  {
    name: "Starter",
    tagline: "Perfect for trying things out",
    price: "Free",
    period: "forever",
    description: "Get started with basic AI capabilities. No credit card needed.",
    icon: Sparkles,
    features: [
      "1,000 AI queries per month",
      "Basic chat interface",
      "Standard response time",
      "Email support",
      "Community access",
      "Basic analytics"
    ],
    cta: "Start Free",
    popular: false,
    gradient: "from-slate-500 to-slate-600",
    ctaVariant: "outline" as const
  },
  {
    name: "Professional",
    tagline: "For growing teams",
    price: "₹2,999",
    period: "per month",
    description: "Everything you need to scale your AI operations.",
    icon: Zap,
    features: [
      "50,000 AI queries per month",
      "Advanced chat + code assistant",
      "Priority response time (<500ms)",
      "Priority email & chat support",
      "Advanced analytics dashboard",
      "API access with 99.9% uptime",
      "Multi-language support",
      "Team collaboration tools",
      "Custom integrations"
    ],
    cta: "Start 14-day trial",
    popular: true,
    gradient: "from-primary via-secondary to-accent",
    ctaVariant: "hero" as const
  },
  {
    name: "Enterprise",
    tagline: "For large organizations",
    price: "Custom",
    period: "contact sales",
    description: "Tailored solutions with dedicated support and SLAs.",
    icon: Crown,
    features: [
      "Unlimited AI queries",
      "Full platform access",
      "Dedicated infrastructure",
      "24/7 phone + email support",
      "Dedicated account manager",
      "Custom model training",
      "On-premise deployment option",
      "Advanced security & compliance",
      "Custom SLA guarantees",
      "White-label solutions"
    ],
    cta: "Contact Sales",
    popular: false,
    gradient: "from-amber-500 to-orange-600",
    ctaVariant: "outline" as const
  }
];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-24 sm:py-32 lg:py-40 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[30%] left-[5%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 animate-pulse-3d" style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent)',
          animationDuration: '12s'
        }}></div>
        <div className="absolute bottom-[20%] right-[5%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 animate-float-slow" style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent)',
          animationDuration: '14s'
        }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-xl">
            <span className="text-sm font-semibold text-foreground/90">Simple, transparent pricing</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight heading-minimal">
            <span className="block text-foreground/95 mb-2">Choose the plan</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              that fits your needs
            </span>
          </h2>

          <p className="text-lg text-muted-foreground/80 text-airy font-normal">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative group animate-scale-in ${
                  plan.popular ? 'lg:scale-105 lg:-mt-4' : ''
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
                    <div className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`relative h-full p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden ${
                  plan.popular
                    ? 'bg-card/60 border-primary/50 hover:border-primary shadow-2xl'
                    : 'bg-card/40 border-border/40 hover:border-border'
                }`}>

                  {/* Top Gradient Line */}
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 h-1">
                      <div className={`h-full bg-gradient-to-r ${plan.gradient}`}></div>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex w-14 h-14 rounded-2xl items-center justify-center bg-gradient-to-br ${plan.gradient} p-[2px] shadow-xl`}>
                      <div className="w-full h-full bg-background/95 rounded-2xl flex items-center justify-center">
                        <Icon className={`w-7 h-7 ${plan.popular ? 'text-primary' : 'text-foreground/70'}`} />
                      </div>
                    </div>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-semibold text-foreground mb-2 tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground/70 mb-6 font-normal">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-foreground tracking-tight">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground/70 mt-1 font-normal">
                      {plan.period}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground/80 mb-8 leading-relaxed font-normal">
                    {plan.description}
                  </p>

                  {/* CTA Button */}
                  <Button
                    onClick={() => navigate('/chat')}
                    variant={plan.ctaVariant}
                    className={`w-full mb-8 group/btn ${
                      plan.popular ? 'shadow-lg' : ''
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>

                  {/* Features List */}
                  <div className="space-y-4 pt-6 border-t border-border/30">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.popular ? 'bg-primary/20' : 'bg-foreground/10'
                        }`}>
                          <Check className={`w-3 h-3 ${
                            plan.popular ? 'text-primary' : 'text-foreground/70'
                          }`} strokeWidth={3} />
                        </div>
                        <span className="text-sm text-foreground/80 leading-relaxed font-normal">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-sm text-muted-foreground/70">
            All plans include bank-grade security and data encryption
          </p>
          <p className="text-xs text-muted-foreground/60">
            Need something custom? <a href="#contact" className="text-primary hover:underline">Talk to our team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
