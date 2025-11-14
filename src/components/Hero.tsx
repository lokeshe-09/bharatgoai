import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Shield, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const [activeUsers, setActiveUsers] = useState(8234);
  const [queries, setQueries] = useState(1247893);

  // Counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3));
      setQueries(prev => prev + Math.floor(Math.random() * 15));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">

              {/* Badge */}
              <div className="inline-block">
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  भारत का #1 AI Platform
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-tight">
                  AI Intelligence
                  <br />
                  <span className="text-primary">Reimagined</span>
                  <br />
                  for India
                </h1>
              </div>

              {/* Description */}
              <div className="max-w-2xl">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Experience the next generation of artificial intelligence.
                  Built with cutting-edge technology and designed specifically
                  for Indian businesses and developers.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => navigate('/chat')}
                  size="lg"
                  className="text-base px-8 py-6"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8 py-6"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-bold text-primary">
                    {(activeUsers/1000).toFixed(1)}K+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Active Users
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-bold text-primary">
                    {(queries/1000).toFixed(0)}K+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Queries Processed
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-bold text-primary">
                    99.9%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Uptime
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-5 space-y-6">

              {/* Feature Cards */}
              <div className="space-y-4">

                {/* Card 1 */}
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Lightning Fast
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Get instant responses with our optimized AI infrastructure
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Enterprise Security
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Military-grade encryption keeps your data safe and secure
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Cpu className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Built for India
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Native support for Hindi, Tamil, Bengali, and 20+ languages
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-muted rounded-lg p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🇮🇳</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">Made in India</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">⚡</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">Enterprise Grade</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">★</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
