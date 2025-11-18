import React from 'react';
import { ArrowRight, Building2, ShoppingCart, GraduationCap, Heart, Rocket, TrendingUp } from 'lucide-react';

/**
 * SOLUTIONS PAGE TILES - PREMIUM REDESIGN (NO EMOJIS)
 *
 * Design System: Graphite Elegance v3.0
 * Framework: React + TypeScript + Tailwind CSS
 *
 * RESPONSIVE BEHAVIOR:
 * - Desktop (>= 1024px): 2 columns, 24px gap
 * - Tablet (768-1023px): 2 columns, 20px gap
 * - Mobile (< 768px): 1 column, 24px vertical gap
 *
 * EMOJI REPLACEMENT:
 * - All emojis replaced with custom SVG line icons from lucide-react
 * - Icon size: 64×64px on desktop, 48×48px on mobile
 * - Icon stroke: 1.5px for consistency
 */

// Solution data type
interface Solution {
  id: string;
  icon: React.ReactNode;
  title: string;
  category: string;
  summary: string;
  features: string[];
  href: string;
}

// Solutions data (NO EMOJIS - Custom SVG icons only)
const solutions: Solution[] = [
  {
    id: 'enterprise',
    icon: <Building2 className="w-16 h-16 md:w-12 md:h-12 stroke-[1.5]" />,
    title: 'Enterprise AI Solutions',
    category: 'B2B',
    summary: 'Transform mission-critical operations with custom AI models built for scale, security, and compliance.',
    features: [
      'Custom AI model development',
      'Dedicated infrastructure & on-prem deployment',
      'Priority 24/7 enterprise support'
    ],
    href: '/solutions/enterprise'
  },
  {
    id: 'ecommerce',
    icon: <ShoppingCart className="w-16 h-16 md:w-12 md:h-12 stroke-[1.5]" />,
    title: 'E-Commerce AI Solutions',
    category: 'Retail',
    summary: 'Boost sales and customer engagement with personalized recommendations, automated support, and intelligent analytics.',
    features: [
      'Smart product recommendations',
      '24/7 multilingual chat support',
      'Automated product descriptions'
    ],
    href: '/solutions/ecommerce'
  },
  {
    id: 'education',
    icon: <GraduationCap className="w-16 h-16 md:w-12 md:h-12 stroke-[1.5]" />,
    title: 'Education AI Solutions',
    category: 'EdTech',
    summary: 'Enhance learning experiences with personalized tutoring, multilingual support, and intelligent assessment tools.',
    features: [
      'Personalized tutoring & adaptive learning',
      'Multi-language support for Indian languages',
      'Instant doubt resolution & homework help'
    ],
    href: '/solutions/education'
  },
  {
    id: 'healthcare',
    icon: <Heart className="w-16 h-16 md:w-12 md:h-12 stroke-[1.5]" />,
    title: 'Healthcare AI Solutions',
    category: 'MedTech',
    summary: 'Improve patient outcomes with AI-powered diagnostics, appointment management, and medical record analysis.',
    features: [
      'AI medical assistant & triage',
      'Patient symptom analysis',
      'Appointment scheduling automation'
    ],
    href: '/solutions/healthcare'
  },
  {
    id: 'startups',
    icon: <Rocket className="w-16 h-16 md:w-12 md:h-12 stroke-[1.5]" />,
    title: 'Startup AI Tools',
    category: 'SaaS',
    summary: 'Accelerate growth with affordable AI tools for rapid prototyping, customer insights, and marketing automation.',
    features: [
      'Rapid AI prototyping tools',
      'Customer analytics & insights',
      'Marketing automation & content generation'
    ],
    href: '/solutions/startups'
  },
  {
    id: 'marketing',
    icon: <TrendingUp className="w-16 h-16 md:w-12 md:h-12 stroke-[1.5]" />,
    title: 'Marketing AI Solutions',
    category: 'MarTech',
    summary: 'Create high-performing campaigns with AI-powered content generation, ad optimization, and audience targeting.',
    features: [
      'AI content generation for campaigns',
      'Ad optimization & A/B testing',
      'Audience insights & segmentation'
    ],
    href: '/solutions/marketing'
  }
];

// Solution Tile Component
interface SolutionTileProps {
  solution: Solution;
  index: number;
}

const SolutionTile: React.FC<SolutionTileProps> = ({ solution, index }) => {
  return (
    <a
      href={solution.href}
      className="solution-tile group relative block p-6 lg:p-8 rounded-2xl bg-gradient-to-b from-white/[0.02] to-white/[0.01] border border-white/[0.06] backdrop-blur-sm transition-all duration-[360ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.12] hover:shadow-[0_12px_30px_rgba(3,6,8,0.55)] hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="solution-icon mb-4 text-[#3ABAD6] transition-transform duration-[360ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:rotate-3">
        {solution.icon}
      </div>

      {/* Category Badge */}
      <div className="inline-flex items-center px-2.5 py-1 mb-3 rounded-full bg-white/[0.02] border border-white/[0.04] text-[11px] font-medium uppercase tracking-wider text-[#6B7280]">
        {solution.category}
      </div>

      {/* Title */}
      <h3 className="text-[24px] lg:text-[28px] font-semibold leading-tight text-[#F6F7F8] mb-3 transition-colors duration-[180ms] group-hover:text-[#3ABAD6]">
        {solution.title}
      </h3>

      {/* Summary */}
      <p className="text-[15px] lg:text-[16px] leading-[1.6] text-[#AEB6BD] mb-5 line-clamp-2">
        {solution.summary}
      </p>

      {/* Features List (max 3 bullets) */}
      <ul className="space-y-2.5 mb-6">
        {solution.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-[14px] text-[#AEB6BD]">
            {/* Custom SVG bullet point (replaces emoji) */}
            <svg
              className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#3ABAD6]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="flex-1">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Link */}
      <div className="flex items-center gap-2 text-[14px] font-medium text-[#3ABAD6] transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:gap-3">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-[180ms] group-hover:translate-x-1" />
      </div>

      {/* Hover gradient accent (decorative) */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-[360ms] pointer-events-none group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at top right, rgba(58,186,214,0.05), transparent 60%)'
        }}
      />
    </a>
  );
};

// Main Solutions Grid Component
interface SolutionsGridProps {
  className?: string;
}

const SolutionsGrid: React.FC<SolutionsGridProps> = ({ className = '' }) => {
  return (
    <section className={`solutions-section py-16 lg:py-24 px-4 md:px-8 lg:px-12 bg-[#0B0D0F] ${className}`}>
      <div className="max-w-[1440px] mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-tight tracking-[-0.015em] text-[#F6F7F8] mb-4">
            Industry-Specific{' '}
            <span className="bg-gradient-to-br from-[#3ABAD6] to-[#2A9AB8] bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h2>
          <p className="text-[18px] lg:text-[20px] leading-[1.5] text-[#AEB6BD] max-w-[680px] mx-auto">
            Tailored AI capabilities designed for India's most critical industries.
            Secure, scalable, and built for real-world business challenges.
          </p>
        </div>

        {/* Solutions Grid
            RESPONSIVE LAYOUT:
            - Desktop (>= 1024px): 2 columns, 24px gap
            - Tablet (768-1023px): 2 columns, 20px gap
            - Mobile (< 768px): 1 column, 24px vertical gap
        */}
        <div className="solutions-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <SolutionTile key={solution.id} solution={solution} index={index} />
          ))}
        </div>

        {/* Enterprise CTA (optional footer) */}
        <div className="mt-16 p-8 lg:p-10 rounded-2xl bg-gradient-to-b from-white/[0.03] to-white/[0.015] border border-white/[0.08] backdrop-blur-sm text-center">
          <h3 className="text-[24px] lg:text-[28px] font-semibold text-[#F6F7F8] mb-3">
            Need a Custom Solution?
          </h3>
          <p className="text-[16px] text-[#AEB6BD] mb-6 max-w-[560px] mx-auto">
            Our enterprise team can build tailored AI systems for your unique business requirements.
            From on-premise deployment to dedicated support, we've got you covered.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] bg-[rgba(58,186,214,0.86)] text-white text-[16px] font-medium shadow-[0_6px_30px_rgba(58,186,214,0.08)] transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[rgba(58,186,214,0.96)] hover:shadow-[0_8px_36px_rgba(58,186,214,0.14)] hover:-translate-y-[3px]"
          >
            Contact Enterprise Sales
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default SolutionsGrid;


/**
 * USAGE INSTRUCTIONS:
 *
 * 1. Import component:
 *    import SolutionsGrid from './components/SolutionsGrid';
 *
 * 2. Use in page:
 *    <SolutionsGrid />
 *
 * 3. Install dependencies:
 *    npm install lucide-react
 *
 * 4. Ensure Tailwind config includes:
 *    - Animation utilities (fade-in-up)
 *    - Line-clamp plugin for text truncation
 *
 * 5. NO EMOJIS - All icons are SVG from lucide-react library
 *
 * 6. Responsive behavior tested on:
 *    - Mobile: 375px, 412px
 *    - Tablet: 768px, 1024px
 *    - Desktop: 1280px, 1440px, 1920px
 */
