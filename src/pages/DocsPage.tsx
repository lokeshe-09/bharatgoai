import Navbar from "@/components/Navbar";
import { Book, Code, Rocket, Terminal, FileCode, Layers, Zap, GitBranch } from "lucide-react";
import { useState } from "react";

const DocsPage = () => {
  const [activeTab, setActiveTab] = useState("quickstart");

  const tabs = [
    { id: "quickstart", label: "Quick Start", icon: Rocket },
    { id: "api", label: "API Reference", icon: Terminal },
    { id: "sdks", label: "SDKs", icon: Code },
    { id: "examples", label: "Examples", icon: FileCode }
  ];

  const quickstartSteps = [
    {
      number: "01",
      title: "Get Your API Key",
      description: "Sign up and get your API key from the dashboard in under a minute.",
      code: `curl https://api.bharatgoai.com/v1/auth/signup \\
  -H "Content-Type: application/json" \\
  -d '{"email": "you@example.com"}'`,
      color: "from-ocean-500 to-seafoam-600"
    },
    {
      number: "02",
      title: "Install the SDK",
      description: "Choose your preferred language. We support Python, JavaScript, Go, and more.",
      code: `# Python
pip install bharatgoai

# JavaScript/Node.js
npm install @bharatgoai/sdk

# Go
go get github.com/bharatgoai/go-sdk`,
      color: "from-seafoam-500 to-ocean-600"
    },
    {
      number: "03",
      title: "Make Your First Request",
      description: "Start chatting with AI in just a few lines of code.",
      code: `from bharatgoai import BharatGoAi

client = BharatGoAi(api_key="your-api-key")
response = client.chat("Hello! Tell me about India's AI ecosystem")

print(response.text)`,
      color: "from-seafoam-500 to-coral-600"
    }
  ];

  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/v1/chat",
      description: "Send a chat message and get AI response",
      color: "seafoam"
    },
    {
      method: "POST",
      endpoint: "/v1/completions",
      description: "Text completion and generation",
      color: "ocean"
    },
    {
      method: "POST",
      endpoint: "/v1/code",
      description: "Code generation and debugging",
      color: "coral"
    },
    {
      method: "GET",
      endpoint: "/v1/models",
      description: "List available AI models",
      color: "ocean"
    }
  ];

  const sdks = [
    {
      name: "Python",
      icon: "🐍",
      repo: "bharatgoai/python-sdk",
      install: "pip install bharatgoai",
      color: "from-ocean-500 to-seafoam-600"
    },
    {
      name: "JavaScript",
      icon: "📦",
      repo: "bharatgoai/js-sdk",
      install: "npm install @bharatgoai/sdk",
      color: "from-seafoam-500 to-coral-600"
    },
    {
      name: "Go",
      icon: "🐹",
      repo: "bharatgoai/go-sdk",
      install: "go get github.com/bharatgoai/go-sdk",
      color: "from-ocean-500 to-coral-600"
    },
    {
      name: "Ruby",
      icon: "💎",
      repo: "bharatgoai/ruby-sdk",
      install: "gem install bharatgoai",
      color: "from-coral-500 to-seafoam-600"
    }
  ];

  return (
    <main className="min-h-screen ocean-bg ocean-mesh">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-seafoam-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-ocean border border-ocean-500/30 mb-8">
              <Book className="w-4 h-4 text-ocean-400" />
              <span className="text-ocean-400 font-semibold text-sm">DOCUMENTATION</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 leading-tight">
              Developer
              <br />
              <span className="text-ocean-gradient">
                Documentation
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed mb-8">
              Clear, practical guides to help you integrate AI into your applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/chat"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-ocean-500 to-seafoam-600 text-white font-bold hover:shadow-2xl hover:shadow-ocean-500/50 transition-glass hover-lift"
              >
                Try It Live
              </a>
              <a
                href="https://github.com/bharatgoai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl border-2 border-white/20 text-white font-bold hover:border-ocean-500/50 glass-ocean transition-glass"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="relative pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-glass
                    ${isActive
                      ? 'bg-gradient-to-r from-ocean-500 to-seafoam-600 text-white shadow-2xl shadow-ocean-500/50'
                      : 'glass-ocean border border-white/10 text-slate-400 hover:border-ocean-500/30 hover:text-white'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="relative">
            {/* Quick Start */}
            {activeTab === "quickstart" && (
              <div className="space-y-12 animate-in fade-in duration-500">
                {quickstartSteps.map((step, index) => (
                  <div
                    key={index}
                    className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
                  >
                    {/* Left: Content */}
                    <div className="space-y-4">
                      <div className={`inline-block text-6xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-20`}>
                        {step.number}
                      </div>
                      <h3 className="text-3xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-lg text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Right: Code */}
                    <div className="relative rounded-2xl glass-ocean border border-white/10 overflow-hidden group-hover:border-ocean-500/30 transition-glass">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5`} />
                      <div className="relative p-6">
                        <pre className="text-sm text-slate-300 overflow-x-auto">
                          <code>{step.code}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* API Reference */}
            {activeTab === "api" && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-white mb-8">API Endpoints</h2>
                </div>

                {apiEndpoints.map((endpoint, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl glass-ocean border-2 border-${endpoint.color}-500/20 hover:border-${endpoint.color}-500/50 transition-glass hover-lift`}
                  >
                    <div className="flex items-start gap-4">
                      <span className={`px-3 py-1 rounded-lg bg-${endpoint.color}-500/20 text-${endpoint.color}-400 font-mono text-sm font-bold`}>
                        {endpoint.method}
                      </span>
                      <div className="flex-1">
                        <code className="text-lg text-white font-mono">
                          {endpoint.endpoint}
                        </code>
                        <p className="text-slate-400 mt-2">
                          {endpoint.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-8 p-8 rounded-2xl glass-ocean border border-ocean-500/30 transition-glass hover-lift">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Authentication
                  </h3>
                  <p className="text-slate-400 mb-4">
                    All API requests require authentication using your API key in the header:
                  </p>
                  <div className="p-4 rounded-xl glass-ocean border border-white/10">
                    <code className="text-sm text-slate-300">
                      Authorization: Bearer YOUR_API_KEY
                    </code>
                  </div>
                </div>
              </div>
            )}

            {/* SDKs */}
            {activeTab === "sdks" && (
              <div className="animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {sdks.map((sdk, index) => (
                    <div
                      key={index}
                      className="group p-8 rounded-3xl glass-ocean border border-white/10 hover:border-white/30 hover-lift transition-glass"
                    >
                      <div className="text-5xl mb-4">{sdk.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {sdk.name}
                      </h3>
                      <p className="text-slate-400 mb-6">
                        github.com/{sdk.repo}
                      </p>
                      <div className="p-4 rounded-xl glass-ocean border border-white/5">
                        <code className="text-sm text-seafoam-400 font-mono">
                          {sdk.install}
                        </code>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-8 rounded-3xl glass-ocean border border-white/10 transition-glass hover-lift">
                  <GitBranch className="w-12 h-12 text-ocean-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Community SDKs
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Building an SDK for your favorite language? We'd love to feature it here.
                  </p>
                  <a
                    href="https://github.com/bharatgoai"
                    className="inline-block px-6 py-3 rounded-xl glass-ocean text-white font-semibold hover:bg-ocean-500/30 transition-glass"
                  >
                    Contribute on GitHub →
                  </a>
                </div>
              </div>
            )}

            {/* Examples */}
            {activeTab === "examples" && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-white mb-8">Code Examples</h2>
                </div>

                {[
                  {
                    title: "Chat with AI",
                    description: "Basic chat conversation",
                    code: `const client = new BharatGoAi({ apiKey: 'your-key' });

const response = await client.chat({
  messages: [{ role: 'user', content: 'Hello!' }]
});

console.log(response.text);`
                  },
                  {
                    title: "Generate Code",
                    description: "AI-powered code generation",
                    code: `const code = await client.generateCode({
  language: 'python',
  prompt: 'Create a function to sort an array',
  includeTests: true
});

console.log(code);`
                  },
                  {
                    title: "Multi-language Translation",
                    description: "Translate between languages",
                    code: `const translation = await client.translate({
  text: 'Hello, how are you?',
  from: 'en',
  to: 'hi'
});

console.log(translation.text); // "नमस्ते, आप कैसे हैं?"`
                  }
                ].map((example, index) => (
                  <div key={index} className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {example.title}
                      </h3>
                      <p className="text-slate-400">{example.description}</p>
                    </div>
                    <div className="p-6 rounded-2xl glass-ocean border border-white/10 transition-glass hover-lift">
                      <pre className="text-sm text-slate-300 overflow-x-auto">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            )}
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

export default DocsPage;
