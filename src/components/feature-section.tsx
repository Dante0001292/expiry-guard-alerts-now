
import { Check, Bell, Calendar, BarChart3, Tag } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Receive customizable notifications 30, 60, or 90 days before products expire.",
  },
  {
    icon: Calendar,
    title: "FEFO/FIFO Management",
    description: "Automatically prioritize selling products with the earliest expiration dates.",
  },
  {
    icon: Tag,
    title: "Automatic Discounting",
    description: "Set rules to automatically discount products as they approach expiration.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track inventory health and potential savings from proactive management.",
  },
];

export function FeatureSection() {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Features</span> Designed for Prevention
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="animate-fade-in p-6 rounded-xl border border-muted shadow-sm hover:shadow-md transition duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-brand-purple/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
