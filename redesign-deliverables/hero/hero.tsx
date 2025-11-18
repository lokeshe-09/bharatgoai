import React from 'react';
import { ArrowRight, Send, Star } from 'lucide-react';

/**
 * BHARATGOAI PREMIUM HERO COMPONENT - REACT/TAILWIND VERSION
 *
 * Design System: Graphite Elegance v3.0
 * Framework: React 18 + TypeScript + Tailwind CSS
 *
 * RESPONSIVE BEHAVIOR (CRITICAL):
 * - Desktop (>= 1024px): 60/40 split layout, chat panel on right
 * - Tablet (768-1023px): 55/45 split layout, reduced spacing
 * - Mobile (< 768px): VERTICAL STACK - hero content → stats → chat panel
 *
 * CHAT PANEL RESPONSIVE RULES:
 * - Desktop/Tablet: Fixed percentage width, positioned to right side
 * - Mobile: Stacks BELOW all hero content, 100% width, max-height 400px
 * - Internal scrolling ONLY within chat messages container
 * - NO horizontal overflow at any breakpoint
 */

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <section
      className={`hero relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#0B0D0F] px-4 py-20 md:px-8 lg:px-12 lg:py-20 ${className}`}
      role="main"
      aria-label="Hero section"
    >
      {/* ============================================
          BACKGROUND DECORATIVE ELEMENTS
          ============================================ */}
      <div className="hero-background absolute inset-0 pointer-events-none z-0" aria-hidden="true">

        {/* Floating gradient blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-radial from-[rgba(58,186,214,0.4)] to-transparent blur-[80px] opacity-15 animate-float" />
        <div className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-radial from-[rgba(58,186,214,0.3)] to-transparent blur-[80px] opacity-15 animate-float-delayed" />
        <div className="absolute bottom-[-10%] left-[40%] w-[400px] h-[400px] rounded-full bg-gradient-radial from-[rgba(184,199,204,0.2)] to-transparent blur-[80px] opacity-15 animate-float-slow" />

        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* ============================================
          MAIN CONTENT CONTAINER
          Desktop: 60% left / 40% right grid
          Tablet: 55% left / 45% right grid
          Mobile: Single column stack
          ============================================ */}
      <div className="hero-content relative z-10 mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center">

        {/* ============================================
            LEFT CONTENT (60% on desktop)
            Col span: 7 columns on lg breakpoint
            ============================================ */}
        <div className="hero-left flex flex-col gap-6 lg:col-span-7">

          {/* Premium Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 w-fit rounded-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm text-[12px] font-medium uppercase tracking-wide text-[#3ABAD6] animate-fade-in-up">
            <Star className="w-3 h-3 fill-current" />
            India's #1 Enterprise AI Platform
          </span>

          {/* Headline */}
          <h1 className="hero-headline font-display text-[34px] leading-[1.12] tracking-[-0.01em] md:text-[52px] md:leading-[1.08] md:tracking-[-0.015em] lg:text-[72px] lg:leading-[1.05] lg:tracking-[-0.02em] xl:text-[88px] xl:leading-[1.02] xl:tracking-[-0.025em] font-bold text-[#F6F7F8] animate-fade-in-up animation-delay-100">
            India's Most{' '}
            <span className="bg-gradient-to-br from-[#3ABAD6] to-[#2A9AB8] bg-clip-text text-transparent">
              Trusted
            </span>{' '}
            AI Platform
          </h1>

          {/* Subheading */}
          <p className="hero-subhead text-[18px] md:text-[20px] leading-[1.4] font-medium text-[#AEB6BD] animate-fade-in-up animation-delay-200">
            Built for Real Work, Real Languages, and Real Businesses
          </p>

          {/* Description */}
          <p className="hero-description text-[16px] leading-[1.6] text-[#6B7280] max-w-[580px] animate-fade-in-up animation-delay-300">
            Experience enterprise-grade AI that understands India's diverse business landscape.
            Secure, compliant, and optimized for mission-critical applications across all industries.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up animation-delay-400">
            <a
              href="/chat"
              className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[10px] bg-[rgba(58,186,214,0.86)] text-white text-[16px] font-medium shadow-[0_6px_30px_rgba(58,186,214,0.08)] transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[rgba(58,186,214,0.96)] hover:shadow-[0_8px_36px_rgba(58,186,214,0.14)] hover:-translate-y-[3px] active:translate-y-0"
            >
              Try It Free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/docs"
              className="btn-secondary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[10px] bg-white/[0.04] text-[#F6F7F8] text-[16px] font-medium border border-white/[0.12] backdrop-blur-sm transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/[0.08] hover:border-white/[0.20] hover:-translate-y-[2px] active:translate-y-0"
            >
              Read Documentation
            </a>
          </div>

          {/* Stats Grid */}
          <div className="hero-stats grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-5 animate-fade-in-up animation-delay-500">

            <div className="stat-card p-5 rounded-xl bg-gradient-to-b from-white/[0.02] to-white/[0.01] border border-white/[0.06] backdrop-blur-sm text-center">
              <span className="stat-value block text-[28px] font-bold text-[#3ABAD6]">
                12.8K+
              </span>
              <span className="stat-label block text-[13px] text-[#6B7280] mt-1">
                Active Users
              </span>
            </div>

            <div className="stat-card p-5 rounded-xl bg-gradient-to-b from-white/[0.02] to-white/[0.01] border border-white/[0.06] backdrop-blur-sm text-center">
              <span className="stat-value block text-[28px] font-bold text-[#3ABAD6]">
                2.8M+
              </span>
              <span className="stat-label block text-[13px] text-[#6B7280] mt-1">
                Queries Processed
              </span>
            </div>

            <div className="stat-card p-5 rounded-xl bg-gradient-to-b from-white/[0.02] to-white/[0.01] border border-white/[0.06] backdrop-blur-sm text-center">
              <span className="stat-value block text-[28px] font-bold text-[#3ABAD6]">
                15+
              </span>
              <span className="stat-label block text-[13px] text-[#6B7280] mt-1">
                Languages
              </span>
            </div>

          </div>

        </div>

        {/* ============================================
            RIGHT CONTENT - CHAT MOCKUP PANEL (40% on desktop)
            Col span: 5 columns on lg breakpoint

            CRITICAL RESPONSIVE BEHAVIOR:
            - Desktop/Tablet (>= 768px): Fixed percentage width, height 600px/500px
            - Mobile (< 768px):
              * Stacks BELOW hero content (order is automatic with grid)
              * Width: 100% of container
              * Max-height: 400px
              * Internal scroll ONLY within .chat-messages
              * NO horizontal overflow (max-w-full, overflow-x-hidden)
            ============================================ */}
        <div className="hero-right lg:col-span-5 w-full h-auto lg:h-[600px] md:h-[500px] animate-fade-in-up animation-delay-600">

          <div className="chat-mockup relative h-full max-h-[400px] lg:max-h-full w-full max-w-full rounded-[20px] bg-gradient-to-b from-white/[0.03] to-white/[0.015] border border-white/[0.08] backdrop-blur-[16px] shadow-[0_12px_30px_rgba(3,6,8,0.55)] p-4 lg:p-6 flex flex-col overflow-hidden">

            {/* Chat Header */}
            <div className="chat-header flex items-center justify-between pb-4 border-b border-white/[0.06] mb-4">
              <span className="chat-title text-[16px] font-semibold text-[#F6F7F8]">
                BharatGo AI Assistant
              </span>
              <div className="chat-status flex items-center gap-1.5 text-[12px] text-[#6B7280]">
                <span className="status-indicator w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span>Online</span>
              </div>
            </div>

            {/* Chat Messages Container
                CRITICAL: This div has overflow-y-auto for internal scrolling
                On mobile, this scrolls within the max-height: 400px panel
            */}
            <div className="chat-messages flex-1 overflow-y-auto overflow-x-hidden flex flex-col gap-4 mb-4 scrollbar-thin scrollbar-thumb-[rgba(58,186,214,0.3)] scrollbar-track-white/[0.02]">

              {/* User message (right-aligned) */}
              <div className="message-bubble message-user self-end max-w-[85%] md:max-w-[90%] p-3 rounded-xl bg-[rgba(58,186,214,0.15)] border border-[rgba(58,186,214,0.25)] text-[#F6F7F8] text-[13px] md:text-[14px] leading-[1.5]">
                What industries do you serve in India?
              </div>

              {/* AI message (left-aligned) */}
              <div className="message-bubble message-ai self-start max-w-[85%] md:max-w-[90%] p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-[#AEB6BD] text-[13px] md:text-[14px] leading-[1.5]">
                We serve 6 major industries: Enterprise B2B, E-Commerce, Education, Healthcare,
                Startups, and Marketing. Our AI solutions are customized for India's business
                landscape with multilingual support for 15+ languages including Hindi, Tamil,
                Telugu, and more.
              </div>

              {/* User message */}
              <div className="message-bubble message-user self-end max-w-[85%] md:max-w-[90%] p-3 rounded-xl bg-[rgba(58,186,214,0.15)] border border-[rgba(58,186,214,0.25)] text-[#F6F7F8] text-[13px] md:text-[14px] leading-[1.5]">
                How secure is your platform?
              </div>

              {/* AI message */}
              <div className="message-bubble message-ai self-start max-w-[85%] md:max-w-[90%] p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-[#AEB6BD] text-[13px] md:text-[14px] leading-[1.5]">
                BharatGoAI is ISO 27001 certified with 99.9% uptime SLA. We offer enterprise-grade
                encryption, on-premise deployment options, and full compliance with Indian data
                protection regulations.
              </div>

              {/* User message */}
              <div className="message-bubble message-user self-end max-w-[85%] md:max-w-[90%] p-3 rounded-xl bg-[rgba(58,186,214,0.15)] border border-[rgba(58,186,214,0.25)] text-[#F6F7F8] text-[13px] md:text-[14px] leading-[1.5]">
                Can I try it for free?
              </div>

              {/* AI message */}
              <div className="message-bubble message-ai self-start max-w-[85%] md:max-w-[90%] p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-[#AEB6BD] text-[13px] md:text-[14px] leading-[1.5]">
                Yes! Our Starter plan includes a free trial with 1,000 queries/month. No credit
                card required. You can upgrade anytime as your needs grow.
              </div>

            </div>

            {/* Chat Input */}
            <div className="chat-input-wrapper flex gap-2 pt-4 border-t border-white/[0.06]">
              <input
                type="text"
                className="chat-input flex-1 px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[#F6F7F8] text-[14px] placeholder:text-[#6B7280] outline-none transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] focus:border-[rgba(58,186,214,0.40)] focus:bg-white/[0.06]"
                placeholder="Ask anything about BharatGoAI..."
                aria-label="Chat input"
              />
              <button
                className="chat-send-btn w-10 h-10 rounded-lg bg-[rgba(58,186,214,0.86)] flex items-center justify-center transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[rgba(58,186,214,0.96)] hover:scale-105 active:scale-100"
                aria-label="Send message"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;


// ============================================
// TAILWIND CONFIG ADDITIONS
// ============================================
/**
 * Add these configurations to your tailwind.config.ts:
 *
 * module.exports = {
 *   theme: {
 *     extend: {
 *       fontFamily: {
 *         display: ['"Satoshi"', '"Inter"', 'system-ui', 'sans-serif'],
 *         body: ['"Inter"', 'system-ui', 'sans-serif'],
 *       },
 *       backgroundImage: {
 *         'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
 *       },
 *       keyframes: {
 *         'fade-in-up': {
 *           '0%': { opacity: '0', transform: 'translateY(20px)' },
 *           '100%': { opacity: '1', transform: 'translateY(0)' },
 *         },
 *         'float': {
 *           '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
 *           '50%': { transform: 'translate(20px, -20px) scale(1.05)' },
 *         },
 *       },
 *       animation: {
 *         'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
 *         'float': 'float 8s ease-in-out infinite',
 *         'float-delayed': 'float 8s ease-in-out 2s infinite',
 *         'float-slow': 'float 8s ease-in-out 4s infinite',
 *       },
 *     },
 *   },
 *   plugins: [
 *     require('tailwind-scrollbar')({ nocompatible: true }),
 *   ],
 * };
 *
 * CSS for animation delays (add to globals.css):
 *
 * .animation-delay-100 {
 *   animation-delay: 0.1s;
 * }
 * .animation-delay-200 {
 *   animation-delay: 0.2s;
 * }
 * .animation-delay-300 {
 *   animation-delay: 0.3s;
 * }
 * .animation-delay-400 {
 *   animation-delay: 0.4s;
 * }
 * .animation-delay-500 {
 *   animation-delay: 0.5s;
 * }
 * .animation-delay-600 {
 *   animation-delay: 0.6s;
 * }
 *
 * @media (prefers-reduced-motion: reduce) {
 *   *,
 *   *::before,
 *   *::after {
 *     animation-duration: 0.01ms !important;
 *     animation-iteration-count: 1 !important;
 *     transition-duration: 0.01ms !important;
 *   }
 * }
 */
