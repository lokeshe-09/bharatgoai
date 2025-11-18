import Navbar from "@/components/Navbar";
import { HelpCircle, MessageCircle, Mail, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      category: "Getting Started",
      icon: "🚀",
      color: "from-ocean-500 to-seafoam-600",
      questions: [
        {
          q: "How do I get started with BharatGoAi?",
          a: "Sign up for an account, get your API key from the dashboard, and you're ready to go. We have SDKs for Python, JavaScript, Go, and more. Check our documentation for a quick start guide."
        },
        {
          q: "Do I need coding experience?",
          a: "Not necessarily. Our chat interface works for everyone. If you want to use the API, basic programming knowledge helps, but our documentation is designed to be beginner-friendly."
        },
        {
          q: "Is there a free plan?",
          a: "Yes. Our Starter plan gives you 50 requests per day at no cost. Perfect for testing and small projects. No credit card required."
        }
      ]
    },
    {
      category: "Features & Capabilities",
      icon: "⚡",
      color: "from-seafoam-500 to-ocean-600",
      questions: [
        {
          q: "What can BharatGoAi do?",
          a: "BharatGoAi can handle chat conversations, code generation, content writing, translations, data analysis, and more. We support 15+ Indian languages plus English."
        },
        {
          q: "How accurate is the AI?",
          a: "Our AI is highly accurate for most tasks, but like any AI system, it's not perfect. We recommend reviewing critical outputs. We're constantly improving based on user feedback."
        },
        {
          q: "Can I fine-tune models on my data?",
          a: "Yes. Enterprise customers can fine-tune custom models with their own data. Your data stays private and is never mixed with other customers' data."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      icon: "💰",
      color: "from-ocean-500 to-coral-600",
      questions: [
        {
          q: "How does pricing work?",
          a: "We keep it simple. Starter is free. Pro is ₹2,999/month for unlimited requests. Enterprise is custom pricing based on your needs. No hidden fees."
        },
        {
          q: "Can I cancel anytime?",
          a: "Yes. You can cancel with one click anytime. No lock-in contracts or penalties."
        },
        {
          q: "Do you offer student discounts?",
          a: "Yes. Students get 50% off Pro with a valid student ID. We believe in supporting the next generation of builders."
        }
      ]
    },
    {
      category: "Security & Privacy",
      icon: "🔒",
      color: "from-coral-500 to-seafoam-600",
      questions: [
        {
          q: "Is my data safe?",
          a: "Yes. We use AES-256 encryption, the same standard used by banks. Your data is encrypted in transit and at rest. We're SOC 2 Type II certified and GDPR compliant."
        },
        {
          q: "Do you train models on my data?",
          a: "No. We never use your conversations or data to train our models. Your data is yours and remains completely private."
        },
        {
          q: "Where is my data stored?",
          a: "All data is stored in India. We have servers in Mumbai, Bangalore, and Delhi. Your data stays within Indian borders unless you explicitly choose otherwise."
        }
      ]
    },
    {
      category: "Technical Support",
      icon: "🛠️",
      color: "from-seafoam-500 to-coral-600",
      questions: [
        {
          q: "What kind of support do you offer?",
          a: "Starter gets community support. Pro gets email support with 24-hour response time. Enterprise gets 24/7 phone and chat support with dedicated account managers."
        },
        {
          q: "Do you have API documentation?",
          a: "Yes. We have comprehensive documentation with examples in multiple languages, plus an interactive API playground to test before you code."
        },
        {
          q: "What if I find a bug?",
          a: "Report it on GitHub or email us at support@bharatgoai.com. We triage bugs within 24 hours and typically ship fixes within a week."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen ocean-bg ocean-mesh">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-seafoam-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-block p-4 mb-8 rounded-3xl glass-ocean border border-ocean-500/30">
            <HelpCircle className="w-16 h-16 text-ocean-400" />
          </div>

          <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 leading-tight">
            Frequently Asked
            <br />
            <span className="text-ocean-gradient">
              Questions
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about BharatGoAi. Clear answers to common questions.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="relative pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.category}
                  </h2>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex;
                    const isOpen = openFAQ === globalIndex;

                    return (
                      <div
                        key={faqIndex}
                        className="rounded-2xl border border-white/10 glass-ocean overflow-hidden hover:border-ocean-500/30 transition-glass"
                      >
                        <button
                          onClick={() => setOpenFAQ(isOpen ? null : globalIndex)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left transition-all"
                        >
                          <span className="text-lg font-semibold text-white pr-4">
                            {faq.q}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? 'max-h-96' : 'max-h-0'
                          }`}
                        >
                          <div className="px-6 pb-5 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                            {faq.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-20">
            <div className="p-10 rounded-3xl glass-ocean border border-white/10 text-center relative overflow-hidden group transition-glass hover-lift">
              <div className="absolute inset-0 bg-gradient-to-r from-ocean-500/0 via-ocean-500/10 to-seafoam-500/0 group-hover:via-ocean-500/20 transition-all duration-700" />

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Still have questions?
                </h2>
                <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                  We're here to help. Reach out and we'll get back to you as soon as possible.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:support@bharatgoai.com"
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-ocean-500 to-seafoam-600 text-white font-bold hover:shadow-2xl hover:shadow-ocean-500/50 transition-glass hover-lift"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                  <a
                    href="/chat"
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-white/20 text-white font-bold hover:border-ocean-500/50 glass-ocean transition-glass"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Try Live Chat
                  </a>
                  <a
                    href="tel:+917661081043"
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-white/20 text-white font-bold hover:border-ocean-500/50 glass-ocean transition-glass"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us
                  </a>
                </div>
              </div>
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

export default FAQPage;
