import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  // Carousel images and alt text
  const carouselImages = [
    "/cyber-laptop.jpg",
    "/cyber-lock.jpg",
    "/cyber-abstract.jpg",
  ];
  const carouselAlts = [
    "Cyber security themed laptop with code on screen",
    "Cyber security lock symbol on keyboard",
    "Abstract cyber security background with blue tones",
  ];
  const [currentImage, setCurrentImage] = useState(0);

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
            ExpiryGuard is your automated expiry date management system. Track inventory, 
            get timely alerts, and save thousands in potential losses from expired products.
          </p>
          
          <div className="animate-fade-in animation-delay-200 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/signup">
              <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
                Start Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              See How It Works <ArrowRight size={16} />
            </Button>
          </div>
        </div>
        
        <div className="flex-1 relative animate-fade-in flex flex-col items-center justify-center">
          {/* Real Dashboard Screenshot as Hero Image */}
          <img
            src="/Screenshot 2025-04-25 165402.png"
            alt="ExpiryGuard Dashboard Screenshot"
            className="rounded-2xl shadow-2xl border border-gray-200 w-full max-w-2xl object-cover object-top"
            style={{ minHeight: '320px', background: '#f6f8fa' }}
          />
        </div>
      </div>
    </div>
  );
}
