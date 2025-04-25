
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium hover:text-brand-purple transition">Features</a>
            <a href="#" className="font-medium hover:text-brand-purple transition">Pricing</a>
            <a href="#" className="font-medium hover:text-brand-purple transition">About</a>
            <a href="#" className="font-medium hover:text-brand-purple transition">Contact</a>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/signin" className="font-medium hover:text-brand-purple transition">Sign In</a>
            <Button className="bg-brand-purple hover:bg-brand-purple/90">Get Started</Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col animate-fade-in">
            <a href="#" className="py-2 font-medium">Features</a>
            <a href="#" className="py-2 font-medium">Pricing</a>
            <a href="#" className="py-2 font-medium">About</a>
            <a href="#" className="py-2 font-medium">Contact</a>
            <div className="mt-4 flex flex-col space-y-2">
              <a href="/signin" className="py-2 font-medium">Sign In</a>
              <Button className="bg-brand-purple hover:bg-brand-purple/90">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
