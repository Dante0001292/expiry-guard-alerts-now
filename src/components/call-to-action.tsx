
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="relative py-20">
      <div className="absolute inset-0 gradient-bg opacity-90" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Stop Losing Money on Expired Products?
        </h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses using ExpiryGuard to prevent waste and maximize profits.
        </p>
        <Button size="lg" className="bg-white text-brand-purple hover:bg-white/90">
          Start Your Free Trial Today
        </Button>
      </div>
    </div>
  );
}
