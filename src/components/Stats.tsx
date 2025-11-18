import { useEffect, useState, useRef } from "react";
import { Activity, Globe, Zap, Shield } from "lucide-react";

const stats = [
  {
    icon: Activity,
    value: 8234,
    suffix: "+",
    label: "Active Users",
    description: "Teams trusting us daily",
    color: "from-violet-500 to-purple-600",
    duration: 2000
  },
  {
    icon: Zap,
    value: 12.5,
    suffix: "M+",
    label: "AI Queries Processed",
    description: "And counting every second",
    color: "from-blue-500 to-cyan-600",
    duration: 2500
  },
  {
    icon: Globe,
    value: 15,
    suffix: "+",
    label: "Languages Supported",
    description: "Including 10 Indian languages",
    color: "from-emerald-500 to-teal-600",
    duration: 1800
  },
  {
    icon: Shield,
    value: 99.97,
    suffix: "%",
    label: "Uptime This Year",
    description: "Real performance, not promises",
    color: "from-amber-500 to-orange-600",
    duration: 2200
  }
];

const useCountAnimation = (target: number, duration: number, isVisible: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = startValue + (target - startValue) * easeOutQuart;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, isVisible]);

  return count;
};

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const count = useCountAnimation(stat.value, stat.duration, isVisible);
  const Icon = stat.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const formatNumber = (num: number) => {
    if (stat.label === "Uptime This Year") {
      return num.toFixed(2);
    }
    if (stat.label === "AI Queries Processed") {
      return num.toFixed(1);
    }
    return Math.floor(num).toLocaleString();
  };

  return (
    <div
      ref={cardRef}
      className="group relative animate-scale-in"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="glass-card glass-hover relative overflow-hidden">

        {/* Organic gradient top accent with refraction */}
        <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden rounded-t-3xl">
          <div className={`h-full bg-gradient-to-r ${stat.color} opacity-60 group-hover:opacity-100 transition-opacity duration-500 shadow-lg`} style={{
            boxShadow: `0 2px 12px ${stat.color.includes('violet') ? 'rgba(139, 92, 246, 0.3)' : stat.color.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : stat.color.includes('emerald') ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`
          }}></div>
        </div>

        {/* Layered background gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700`}></div>

        {/* Floating icon with 3D depth */}
        <div className="relative mb-7 group-hover:-translate-y-1 transition-all duration-500">
          <div className="relative inline-flex">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} p-[2px] shadow-xl group-hover:scale-110 transition-all duration-500 hover:rotate-3`} style={{
              boxShadow: `0 8px 32px -4px ${stat.color.includes('violet') ? 'rgba(139, 92, 246, 0.35)' : stat.color.includes('blue') ? 'rgba(59, 130, 246, 0.35)' : stat.color.includes('emerald') ? 'rgba(16, 185, 129, 0.35)' : 'rgba(245, 158, 11, 0.35)'}`
            }}>
              <div className="w-full h-full bg-background/95 rounded-2xl flex items-center justify-center backdrop-blur-xl">
                <Icon className="w-8 h-8 text-foreground/85 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
              </div>
            </div>
            {/* Atmospheric glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-50 blur-2xl rounded-full transition-opacity duration-500 animate-pulse`}></div>
          </div>
        </div>

        {/* Animated Number with subtle glow */}
        <div className="relative mb-3">
          <div className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight">
            {formatNumber(count)}
            <span className="text-primary ml-1 drop-shadow-lg">{stat.suffix}</span>
          </div>
        </div>

        {/* Label with refined typography */}
        <h3 className="text-xl sm:text-2xl font-semibold text-foreground/95 mb-2 tracking-tight group-hover:text-foreground transition-colors duration-300">
          {stat.label}
        </h3>

        {/* Description with organic spacing */}
        <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed font-normal group-hover:text-muted-foreground transition-colors duration-300">
          {stat.description}
        </p>

        {/* Organic floating orb decoration */}
        <div className="absolute bottom-5 right-5 w-24 h-24 rounded-full opacity-15 blur-3xl group-hover:opacity-25 transition-all duration-700 animate-float-natural" style={{
          background: `radial-gradient(circle, ${stat.color.includes('violet') ? 'rgba(139, 92, 246, 0.5)' : stat.color.includes('blue') ? 'rgba(59, 130, 246, 0.5)' : stat.color.includes('emerald') ? 'rgba(16, 185, 129, 0.5)' : 'rgba(245, 158, 11, 0.5)'}, transparent)`,
          animationDelay: `${index * 0.3}s`
        }}></div>

        {/* Subtle specular highlight */}
        <div className="glass-specular absolute top-0 left-0 right-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[30%] right-[10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 animate-float-slow" style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent)',
          animationDuration: '15s'
        }}></div>
        <div className="absolute bottom-[20%] left-[10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 animate-pulse-3d" style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent)',
          animationDuration: '12s'
        }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-xl">
            <span className="text-sm font-semibold text-foreground/90">Performance That Speaks</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight heading-minimal">
            <span className="block text-foreground/95 mb-2">Built for scale,</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              proven in production
            </span>
          </h2>

          <p className="text-lg text-muted-foreground/80 leading-relaxed font-normal text-airy">
            These aren't vanity metrics—they're real numbers from real usage.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16 space-y-2">
          <p className="text-sm text-muted-foreground/60">
            Updated in real-time. Check <span className="text-primary">status.bharatgoai.com</span> for live metrics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
