import { Shield, Lock, Eye, FileCheck, Server, Globe, CheckCircle2 } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using AES-256 encryption standard"
  },
  {
    icon: Shield,
    title: "SOC 2 Type II Compliant",
    description: "Independently audited and certified for security, availability, and confidentiality"
  },
  {
    icon: Eye,
    title: "Privacy First",
    description: "Your data is never used to train models. Complete data isolation and privacy"
  },
  {
    icon: FileCheck,
    title: "GDPR & DPDPA Compliant",
    description: "Full compliance with Indian and international data protection regulations"
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Enterprise-grade infrastructure with 99.9% uptime SLA and redundancy"
  },
  {
    icon: Globe,
    title: "Indian Data Centers",
    description: "Data stored in India with optional on-premise deployment for enterprises"
  }
];

const certifications = [
  { name: "ISO 27001", description: "Information Security" },
  { name: "SOC 2 Type II", description: "Security & Availability" },
  { name: "GDPR", description: "Data Protection" },
  { name: "DPDPA", description: "India Data Privacy" }
];

const Security = () => {
  return (
    <section id="security" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Organic background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[20%] right-[15%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-15 bg-gradient-to-br from-primary to-accent animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl">
        {/* Two-column layout for visual interest */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">

          {/* Left column - Header */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-frosted mb-7 shadow-lg">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold tracking-wide text-foreground/90 uppercase">Security</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.15]">
              <span className="block text-foreground/95 mb-2">Enterprise-Grade</span>
              <span className="block bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">Security & Compliance</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground/85 leading-relaxed font-normal mb-8">
              Built with security at its core. Your data is protected by industry-leading encryption and compliance standards.
            </p>

            {/* Certifications - compact visual display */}
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl glass-frosted border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg group"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-foreground/95 text-sm mb-1">{cert.name}</div>
                      <div className="text-xs text-muted-foreground/75">{cert.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Visual element */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Main security card */}
              <div className="glass-card p-10 rounded-[32px] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent to-primary opacity-80" />

                {/* Lock icon visual */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Shield className="w-14 h-14 text-white" strokeWidth={1.5} />
                      </div>
                      {/* Pulsing rings */}
                      <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" style={{ animationDuration: '3s' }} />
                      <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
                    </div>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground/95 mb-3">
                    Bank-Grade Security
                  </h3>
                  <p className="text-base text-muted-foreground/80">
                    Your data is protected with the same level of security used by leading financial institutions
                  </p>
                </div>

                {/* Security stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                      256-bit
                    </div>
                    <div className="text-xs text-muted-foreground/75">Encryption</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                      SOC 2
                    </div>
                    <div className="text-xs text-muted-foreground/75">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-7 rounded-3xl bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.07}s`
                }}
              >
                {/* Icon */}
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground/95 mb-3 group-hover:text-foreground transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-muted-foreground/80 leading-relaxed group-hover:text-muted-foreground transition-colors">
                  {feature.description}
                </p>

                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Security;
