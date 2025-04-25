
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Trusted by Businesses <span className="gradient-text">Like Yours</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="pt-6">
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
