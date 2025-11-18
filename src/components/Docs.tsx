import { Book, Code, Rocket, Terminal, FileText, Zap, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const docCategories = [
  {
    icon: Rocket,
    title: "Quick Start",
    description: "Get up and running in minutes",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Terminal,
    title: "SDK Guides",
    description: "Libraries for all languages",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: FileText,
    title: "Tutorials",
    description: "Step-by-step guides",
    color: "from-amber-500 to-orange-600"
  }
];

const codeExample = `// Initialize BharatGoAi
import { BharatGoAi } from '@bharatgoai/sdk';

const ai = new BharatGoAi({
  apiKey: process.env.BGAI_API_KEY
});

// Generate text
const response = await ai.chat.completions.create({
  model: "bgai-turbo",
  messages: [
    { role: "user", content: "Hello!" }
  ]
});

console.log(response.choices[0].message);`;

const Docs = () => {
  return (
    <section id="docs" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 bg-gradient-to-br from-blue-500 to-cyan-600 animate-float-natural" />
      </div>

      <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-frosted mb-7 shadow-lg">
            <Book className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold tracking-wide text-foreground/90 uppercase">Documentation</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.15]">
            <span className="block text-foreground/95 mb-2">Everything You Need</span>
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">To Get Started</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground/85 leading-relaxed font-normal">
            Comprehensive guides, API references, and tutorials to help you integrate BharatGoAi
          </p>
        </div>

        {/* Main content - asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">

          {/* Left - Code example */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-10 rounded-[32px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary opacity-60" />

              {/* Code header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-sm text-muted-foreground/75 font-mono">example.js</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
                  <Terminal className="w-4 h-4" />
                  <span>Node.js</span>
                </div>
              </div>

              {/* Code block */}
              <div className="relative">
                <pre className="text-sm leading-relaxed overflow-x-auto">
                  <code className="font-mono text-foreground/90">
                    {codeExample}
                  </code>
                </pre>
              </div>

              {/* Features below code */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                <div className="text-center">
                  <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground/75">Fast Setup</div>
                </div>
                <div className="text-center">
                  <Code className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground/75">TypeScript</div>
                </div>
                <div className="text-center">
                  <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground/75">Full Docs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Doc categories */}
          <div className="lg:col-span-5 space-y-5">
            {docCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-3xl bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl cursor-pointer relative overflow-hidden"
                  style={{
                    animationDelay: `${index * 0.08}s`
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} p-[2px] flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-background/95 rounded-2xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground/95 mb-1 group-hover:text-foreground transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground/75 group-hover:text-muted-foreground transition-colors">
                        {category.description}
                      </p>
                    </div>

                    <ArrowRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>

                  {/* Hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4">
            <Button
              size="lg"
              className="group relative overflow-hidden px-8 py-6 bg-gradient-to-r from-primary via-primary/90 to-primary shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center gap-2 font-semibold">
                View Full Documentation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/30 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 glass-frosted border-border/50 hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center gap-2 font-semibold">
                <Code className="w-5 h-5" />
                API Reference
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Docs;
