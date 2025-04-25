
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "For small businesses just getting started",
    features: [
      "Up to 100 products",
      "Basic email alerts",
      "Single user account",
      "Shopify integration",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$20",
    description: "Most popular for growing businesses",
    features: [
      "Unlimited products",
      "Email, SMS & WhatsApp alerts",
      "Up to 5 user accounts",
      "Multiple platform integrations",
      "Marketing automation tools",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$50",
    description: "For businesses with complex inventory",
    features: [
      "Everything in Standard",
      "Advanced analytics",
      "Multi-warehouse support",
      "Priority support",
      "Custom integrations",
      "Bulk operations",
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`animate-fade-in rounded-xl p-6 flex flex-col border ${
                plan.highlighted 
                  ? 'border-brand-purple shadow-lg relative bg-white' 
                  : 'border-muted shadow-sm bg-white'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 inset-x-0 mx-auto w-fit px-4 py-1 bg-brand-purple text-white rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.price !== "Free" && <span className="text-muted-foreground">/month</span>}
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-brand-purple flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className={plan.highlighted ? 'bg-brand-purple hover:bg-brand-purple/90' : ''}
                variant={plan.highlighted ? 'default' : 'outline'}
              >
                {plan.price === "Free" ? "Sign Up" : "Start Free Trial"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
