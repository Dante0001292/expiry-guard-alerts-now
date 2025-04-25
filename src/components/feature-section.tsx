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
    <div id="features" className="bg-white py-24 relative overflow-hidden">
      {/* Decorative SVG background */}
      <svg className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="400" cy="200" rx="350" ry="120" fill="#a78bfa" />
        <ellipse cx="600" cy="300" rx="180" ry="60" fill="#5eead4" />
      </svg>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Features</span> Designed for Prevention
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          ExpiryGuard gives you the tools to automate expiry management, reduce waste, and protect your bottom line.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="animate-fade-in p-6 rounded-xl border border-muted shadow-sm hover:shadow-md transition duration-300 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-brand-purple/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 transition-transform hover:scale-110">
                <feature.icon className="w-6 h-6 text-brand-purple transition-colors duration-200 group-hover:text-brand-teal" />
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
