import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does the free plan actually work? What's the catch?",
    answer: "No catch, seriously. You get 1,000 queries per month, forever. We built it this way because we remember being a small team once. The only limit is query volume—everything else (security, speed, quality) is the same across all plans. When you hit the limit, we'll just ask if you want to upgrade. That's it."
  },
  {
    question: "Is my data actually secure? I've heard that before.",
    answer: "Fair question. Here's what we do: end-to-end encryption, zero-knowledge architecture (we literally can't read your data even if we wanted to), SOC 2 certified infrastructure, and annual third-party security audits. We also don't train our models on your data—ever. You can read our full security white paper or even request a pentest report. We're that confident."
  },
  {
    question: "What makes this different from ChatGPT or other AI tools?",
    answer: "Three things: (1) We're built specifically for Indian languages—not just Hindi, but regional languages too. (2) Our infrastructure is India-based, so you get way faster response times. (3) We're designed for businesses, not consumers, so we have proper APIs, analytics, team features, and compliance out of the box."
  },
  {
    question: "Can I cancel anytime, or is there a contract?",
    answer: "Cancel anytime, no questions asked. Your data gets exported within 24 hours if you want it. We hate when companies make it hard to leave, so we didn't build it that way. Month-to-month for Pro, and we can do annual for Enterprise if you want a discount, but it's always your call."
  },
  {
    question: "What happens if I go over my query limit?",
    answer: "We'll email you at 80% usage. If you hit 100%, we don't cut you off immediately—we give you a 10% buffer and send another email. After that, you can either upgrade or wait for the next billing cycle. We're not trying to surprise you with overage fees."
  },
  {
    question: "Do you have an API? How's the documentation?",
    answer: "Yes, REST API with WebSocket support for streaming responses. The docs are pretty solid (we actually use them ourselves). If something's unclear, ping our Discord or support—we update docs based on real questions we get. Most devs have it running in under an hour."
  },
  {
    question: "What's your uptime? I need this to be reliable.",
    answer: "Enterprise-grade reliability with automatic failover. We're hosted on multiple availability zones in India (Mumbai and Bangalore). We publish real-time status at status.bharatgoai.com—nothing hidden."
  },
  {
    question: "Can I get a refund if I'm not happy?",
    answer: "Yeah, 14-day money-back guarantee on the Pro plan, no questions. If you're on Enterprise and something's not working, we'll either fix it or refund you. We'd rather make it right than keep your money."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden bg-gradient-to-b from-background via-slate-950/30 to-background">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[40%] left-[15%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 animate-pulse-slow" style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent)',
          animationDuration: '10s'
        }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-xl">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground/90">FAQ</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight heading-minimal">
            <span className="block text-foreground/95 mb-2">Questions?</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              We've got answers
            </span>
          </h2>

          <p className="text-lg text-muted-foreground/80 text-airy font-normal">
            Real questions from real people. If yours isn't here, just ask us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`rounded-2xl transition-all duration-300 overflow-hidden relative ${
                openIndex === index
                  ? 'glass-tinted border-primary/40 shadow-2xl'
                  : 'glass-frosted border-border/30 hover:border-border/50 glass-hover'
              }`}>
                {/* Subtle top accent for open state */}
                {openIndex === index && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden rounded-t-2xl">
                    <div className="h-full bg-gradient-to-r from-primary via-secondary to-accent shadow-lg" style={{
                      boxShadow: '0 3px 15px rgba(162, 89, 255, 0.3)'
                    }}></div>
                  </div>
                )}

                {/* Premium shimmer on hover */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-2000"></div>
                </div>
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left group/btn"
                >
                  <span className={`text-base sm:text-lg font-medium transition-colors tracking-tight ${
                    openIndex === index ? 'text-foreground' : 'text-foreground/90'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                    openIndex === index
                      ? 'text-primary rotate-180'
                      : 'text-muted-foreground group-hover/btn:text-foreground'
                  }`} />
                </button>

                {/* Answer */}
                <div className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-[500px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6 pt-2">
                    <p className="text-base text-muted-foreground/90 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-base text-muted-foreground/80">
            Still have questions?
          </p>
          <a
            href="mailto:support@bharatgoai.com"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Talk to our team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
