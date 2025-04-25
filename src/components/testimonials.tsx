import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Inventory Manager",
    company: "Fresh Foods Market",
    content: "ExpiryGuard has saved us thousands in potential losses. The automated alerts are a game-changer for our inventory management.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Store Owner",
    company: "Chen's Pharmacy",
    content: "The integration with our POS system was seamless. Now we never have to worry about expired medications on our shelves.",
    rating: 5
  },
  {
    name: "Lisa Martinez",
    role: "Operations Director",
    company: "Sunset Grocers",
    content: "Since implementing ExpiryGuard, we've reduced our expired product waste by 85%. The ROI has been incredible.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative SVG background */}
      <svg className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="200" cy="200" rx="180" ry="80" fill="#a78bfa" />
        <ellipse cx="600" cy="100" rx="120" ry="60" fill="#5eead4" />
      </svg>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Trusted by Businesses <span className="gradient-text">Like Yours</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          See how ExpiryGuard is helping real businesses save money, reduce waste, and stay compliant.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white relative overflow-hidden">
              <CardContent className="pt-6">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-purple/20" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
