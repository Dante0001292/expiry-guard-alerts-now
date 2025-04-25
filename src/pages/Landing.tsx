
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { PricingSection } from "@/components/pricing-section";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <FeatureSection />
        <Testimonials />
        <PricingSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
