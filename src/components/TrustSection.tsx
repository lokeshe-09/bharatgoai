import { Shield, Lock, Eye, Server, Zap, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const securityFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption protecting your data at every layer",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data remains yours—zero-knowledge architecture",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "Complete visibility into AI decision-making processes",
  },
  {
    icon: Server,
    title: "99.9% Uptime",
    description: "Reliable infrastructure with redundant global systems",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast AI responses with minimal latency",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Distributed architecture serving users worldwide",
  },
];

const TrustSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-card opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Built for Trust & Performance
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Advanced security architecture combined with cutting-edge AI technology—
            engineered for the most demanding enterprise environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-start space-y-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
