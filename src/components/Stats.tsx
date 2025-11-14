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
      <div className="relative h-full p-8 sm:p-10 rounded-3xl bg-card/40 backdrop-blur-xl border border-border/40 hover:border-border transition-all duration-500 hover:shadow-2xl overflow-hidden">

        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1">
          <div className={`h-full bg-gradient-to-r ${stat.color} opacity-70 group-hover:opacity-100 transition-opacity duration-500`}></div>
        </div>

        {/* Background gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700`}></div>

        {/* Icon */}
        <div className="relative mb-6">
          <div className={`inline-flex w-16 h-16 rounded-2xl items-center justify-center bg-gradient-to-br ${stat.color} p-[2px] shadow-lg group-hover:scale-110 transition-all duration-500`}>
            <div className="w-full h-full bg-background/95 rounded-2xl flex items-center justify-center">
              <Icon className="w-8 h-8 text-foreground/80" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Animated Number */}
        <div className="relative mb-3">
          <div className="text-5xl sm:text-6xl font-black text-foreground tracking-tight">
            {formatNumber(count)}
            <span className="text-primary ml-1">{stat.suffix}</span>
          </div>
        </div>

        {/* Label */}
        <h3 className="text-xl sm:text-2xl font-bold text-foreground/95 mb-2">
          {stat.label}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed">
          {stat.description}
        </p>

        {/* Decorative element */}
        <div className="absolute bottom-4 right-4 w-20 h-20 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" style={{
          background: `radial-gradient(circle, ${stat.color.includes('violet') ? 'rgba(139, 92, 246, 0.4)' : stat.color.includes('blue') ? 'rgba(59, 130, 246, 0.4)' : stat.color.includes('emerald') ? 'rgba(16, 185, 129, 0.4)' : 'rgba(245, 158, 11, 0.4)'}, transparent)`
        }}></div>
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

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="block text-foreground/95 mb-2">Built for scale,</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              proven in production
            </span>
          </h2>

          <p className="text-lg text-muted-foreground/80 leading-relaxed">
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
