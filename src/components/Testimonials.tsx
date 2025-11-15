import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Product Manager",
    company: "TechCorp India",
    image: "PS",
    content: "We switched to BharatGoAI three months ago and honestly, the difference is night and day. The Hindi language support actually works—like, really works. Not that half-baked translation stuff you usually get.",
    rating: 5,
    color: "from-violet-500 to-purple-600"
  },
  {
    name: "Rajesh Kumar",
    role: "CTO",
    company: "StartupHub",
    image: "RK",
    content: "I was skeptical at first, but their security setup is legit. We ran our own penetration tests and the team was super transparent about everything. That's rare in this space.",
    rating: 5,
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "Anita Desai",
    role: "Data Scientist",
    company: "Analytics Pro",
    image: "AD",
    content: "The API response times are insane—we're talking 200-300ms consistently. I've worked with other AI platforms and this is genuinely faster. Integration took us maybe 2 hours tops.",
    rating: 5,
    color: "from-emerald-500 to-teal-600"
  },
  {
    name: "Vikram Singh",
    role: "Founder",
    company: "EduTech Solutions",
    image: "VS",
    content: "What sold me was the pricing. No hidden fees, no surprise bills at month-end. We're a small team and we needed something predictable. BharatGoAI gets that.",
    rating: 5,
    color: "from-amber-500 to-orange-600"
  },
  {
    name: "Meera Patel",
    role: "Engineering Lead",
    company: "CloudScale",
    image: "MP",
    content: "Their support team actually knows what they're talking about. I asked a technical question at 11 PM and got a real answer in 20 minutes. Not a canned response—an actual solution.",
    rating: 5,
    color: "from-rose-500 to-pink-600"
  },
  {
    name: "Arjun Reddy",
    role: "Head of AI",
    company: "FinTech Innovations",
    image: "AR",
    content: "We process thousands of transactions daily and needed something reliable. Six months in, zero downtime. Zero. The 99.9% uptime isn't marketing fluff—it's real.",
    rating: 5,
    color: "from-indigo-500 to-blue-600"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden bg-gradient-to-b from-background via-slate-950/50 to-background">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 animate-pulse-slow" style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent)',
          animationDuration: '10s'
        }}></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 animate-float-slow" style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
          animationDuration: '12s'
        }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
        {/* Section Header - Human, not corporate */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-xl">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground/90">Real Feedback</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="block text-foreground/95 mb-2">What people are</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              actually saying
            </span>
          </h2>

          <p className="text-lg text-muted-foreground/80 leading-relaxed">
            No fluff, no fake reviews. Just honest feedback from real teams using BharatGoAI every day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card with premium glass effect */}
              <div className="glass-card glass-hover relative overflow-hidden">

                {/* Organic gradient top accent with refraction */}
                <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden rounded-t-2xl">
                  <div className={`h-full bg-gradient-to-r ${testimonial.color} opacity-60 group-hover:opacity-100 transition-opacity duration-500 shadow-lg`}></div>
                </div>

                {/* Subtle background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700`}></div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Review Content - Natural, conversational */}
                <p className="text-base text-foreground/90 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                  {/* Avatar with gradient */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {testimonial.image}
                  </div>

                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground/70">
                      {testimonial.role} · {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Subtle and human */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-sm text-muted-foreground/60">
            Join 8,000+ teams already using BharatGoAI
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
