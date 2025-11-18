import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background effects matching main site */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(263 70% 60%) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
          {/* 404 Number */}
          <div className="relative">
            <h1 className="text-9xl sm:text-[12rem] font-black bg-gradient-text bg-clip-text text-transparent leading-none">
              404
            </h1>
            <div className="absolute inset-0 blur-3xl opacity-30">
              <h1 className="text-9xl sm:text-[12rem] font-black bg-gradient-text bg-clip-text text-transparent">
                404
              </h1>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Page Not Found
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground/90 max-w-md mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/">
              <Button variant="hero" size="lg" className="group shadow-2xl text-base h-12 px-6 w-full sm:w-auto">
                <Home className="mr-2 w-5 h-5" />
                Back to Home
              </Button>
            </Link>
            <Button
              variant="glass"
              size="lg"
              className="text-base h-12 px-6 w-full sm:w-auto"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back
            </Button>
          </div>

          {/* Additional Info */}
          <div className="pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm">
              <Search className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Error Code: <span className="text-primary font-semibold">404</span> |
                Path: <span className="text-foreground/70 font-mono text-xs">{location.pathname}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
