
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-teal/5" />
      
      {/* Circles decoration */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 py-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="animate-bounce-in">
            <Logo size="large" className="mb-6 mx-auto lg:mx-0" />
          </div>
          
          <h1 className="animate-fade-in text-4xl md:text-6xl font-bold mb-6">
            Never Sell Expired Products 
            <span className="gradient-text"> Again</span>
          </h1>
          
          <p className="animate-fade-in animation-delay-100 text-xl md:text-2xl text-muted-foreground mb-10">
            ExpiryGuard helps businesses track, manage, and get alerts for products before they expire.
          </p>
          
          <div className="animate-fade-in animation-delay-200 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              See How It Works <ArrowRight size={16} />
            </Button>
          </div>
        </div>
        
        <div className="flex-1 relative animate-fade-in">
          <img
            src="/dashboard-preview.webp"
            alt="ExpiryGuard Dashboard"
            className="rounded-xl shadow-2xl border border-gray-200"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl border border-gray-100 animate-fade-in animation-delay-300">
            <img
              src="/integrations-preview.webp"
              alt="Integration Options"
              className="w-48 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
