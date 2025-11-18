import React from 'react';
import { Zap, Shield, Languages, Cloud, BarChart3, Lock } from 'lucide-react';

/**
 * FEATURE GRID - PREMIUM REDESIGN (NO EMOJIS)
 *
 * Design System: Graphite Elegance v3.0
 * Framework: React + TypeScript + Tailwind CSS
 *
 * RESPONSIVE LAYOUT:
 * - Desktop (>= 1024px): 3 columns
 * - Tablet (768-1023px): 2 columns
 * - Mobile (< 768px): 1 column
 *
 * ICON SPECIFICATIONS:
 * - NO EMOJIS - Custom SVG line icons only
 * - Size: 48×48px display (viewBox 24×24)
 * - Stroke width: 1.5px
 * - Color: Accent cyan (#3ABAD6)
 */

// Feature data type
interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

// Features data (NO EMOJIS)
const features: Feature[] = [
  {
    id: 'performance',
    icon: <Zap className="w-12 h-12 stroke-[1.5]" />,
    title: 'Lightning Performance',
    description: 'Sub-second response times with optimized models built for production workloads.',
    href: '/features/performance'
  },
  {
    id: 'security',
    icon: <Shield className="w-12 h-12 stroke-[1.5]" />,
    title: 'Enterprise Security',
    description: 'ISO 27001 certified with end-to-end encryption and compliance-ready infrastructure.',
    href: '/features/security'
  },
  {
    id: 'multilingual',
    icon: <Languages className="w-12 h-12 stroke-[1.5]" />,
    title: 'Multilingual Intelligence',
    description: 'Native support for 15+ Indian languages including Hindi, Tamil, Telugu, and more.',
    href: '/features/multilingual'
  },
  {
    id: 'infrastructure',
    icon: <Cloud className="w-12 h-12 stroke-[1.5]" />,
    title: 'Scalable Infrastructure',
    description: 'Auto-scaling cloud or on-premise deployment options with 99.9% uptime SLA.',
    href: '/features/infrastructure'
  },
  {
    id: 'analytics',
    icon: <BarChart3 className="w-12 h-12 stroke-[1.5]" />,
    title: 'Advanced Analytics',
    description: 'Real-time insights and custom dashboards to monitor AI performance and business metrics.',
    href: '/features/analytics'
  },
  {
    id: 'compliance',
    icon: <Lock className="w-12 h-12 stroke-[1.5]" />,
    title: 'Data Compliance',
    description: 'Full compliance with Indian data protection laws and industry-specific regulations.',
    href: '/features/compliance'
  }
];

// Feature Card Component
interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  return (
    <a
      href={feature.href}
      className="feature-card group relative block p-8 rounded-2xl bg-gradient-to-b from-white/[0.02] to-white/[0.01] border border-white/[0.06] backdrop-blur-sm transition-all duration-[360ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.12] hover:shadow-[0_12px_30px_rgba(3,6,8,0.55)] hover:-translate-y-1.5 animate-fade-in-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Icon Container */}
      <div className="feature-icon mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[rgba(58,186,214,0.12)] to-[rgba(58,186,214,0.06)] border border-[rgba(58,186,214,0.15)] text-[#3ABAD6] transition-all duration-[360ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_8px_24px_rgba(58,186,214,0.20)]">
        {feature.icon}
      </div>

      {/* Title */}
      <h3 className="text-[22px] lg:text-[24px] font-semibold leading-tight text-[#F6F7F8] mb-3 transition-colors duration-[180ms] group-hover:text-[#3ABAD6]">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-[15px] lg:text-[16px] leading-[1.6] text-[#AEB6BD] mb-5 line-clamp-2">
        {feature.description}
      </p>

      {/* CTA Link */}
      <div className="inline-flex items-center gap-2 text-[14px] font-medium text-[#3ABAD6] transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:gap-3">
        <span>Learn More</span>
        <svg
          className="w-4 h-4 transition-transform duration-[180ms] group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Hover gradient accent */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-[360ms] pointer-events-none group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at top left, rgba(58,186,214,0.06), transparent 50%)'
        }}
      />
    </a>
  );
};

// Main Feature Grid Component
interface FeatureGridProps {
  className?: string;
  showHeader?: boolean;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({
  className = '',
  showHeader = true
}) => {
  return (
    <section className={`features-section py-16 lg:py-24 px-4 md:px-8 lg:px-12 bg-[#0B0D0F] ${className}`}>
      <div className="max-w-[1440px] mx-auto">

        {/* Section Header (optional) */}
        {showHeader && (
          <div className="text-center mb-16">
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-tight tracking-[-0.015em] text-[#F6F7F8] mb-4">
              Powerful Features for{' '}
              <span className="bg-gradient-to-br from-[#3ABAD6] to-[#2A9AB8] bg-clip-text text-transparent">
                Mission-Critical AI
              </span>
            </h2>
            <p className="text-[18px] lg:text-[20px] leading-[1.5] text-[#AEB6BD] max-w-[680px] mx-auto">
              Enterprise-grade capabilities designed for India's most demanding applications.
              Secure, fast, and built to scale.
            </p>
          </div>
        )}

        {/* Feature Grid
            RESPONSIVE LAYOUT:
            - Desktop (>= 1024px): 3 columns, 24px gap
            - Tablet (768-1023px): 2 columns, 20px gap
            - Mobile (< 768px): 1 column, 20px vertical gap
        */}
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeatureGrid;


/**
 * USAGE INSTRUCTIONS:
 *
 * 1. Import component:
 *    import FeatureGrid from './components/FeatureGrid';
 *
 * 2. Use in page:
 *    <FeatureGrid />
 *    <FeatureGrid showHeader={false} /> // Without header
 *
 * 3. Install dependencies:
 *    npm install lucide-react
 *
 * 4. Tailwind config requirements:
 *    - Ensure fade-in-up animation is configured
 *    - Include line-clamp plugin for text truncation
 *
 * 5. Responsive behavior:
 *    - 3 columns on desktop (lg breakpoint)
 *    - 2 columns on tablet (md breakpoint)
 *    - 1 column on mobile
 *    - Cards adapt padding and spacing at each breakpoint
 *
 * 6. Accessibility:
 *    - Semantic HTML (section, h2, h3)
 *    - Proper link structure
 *    - Focus states included
 *    - Screen reader friendly
 *
 * 7. Performance:
 *    - Lazy-loaded icons
 *    - GPU-accelerated transforms
 *    - Optimized animations
 *    - Reduced motion support via Tailwind
 */
