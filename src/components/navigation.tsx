import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
    <header className={`md:fixed md:top-0 md:left-0 md:right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />
          
          {/* Desktop Navigation - moved more to the right */}
          <div className="hidden md:flex items-center justify-end flex-1">
            <nav className="flex items-center space-x-8 mr-8">
              <a href="#features" className="font-medium hover:text-brand-purple transition">Features</a>
              <a href="#pricing" className="font-medium hover:text-brand-purple transition">Pricing</a>
              <a href="#about" className="font-medium hover:text-brand-purple transition">About</a>
              <a href="#contact" className="font-medium hover:text-brand-purple transition">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <a href="/signin" className="font-medium hover:text-brand-purple transition">Sign In</a>
              <Link to="/signup">
                <Button className="bg-brand-purple hover:bg-brand-purple/90">Get Started</Button>
              </Link>
            </div>
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
            <a href="#features" className="py-2 font-medium">Features</a>
            <a href="#pricing" className="py-2 font-medium">Pricing</a>
            <a href="#about" className="py-2 font-medium">About</a>
            <a href="#contact" className="py-2 font-medium">Contact</a>
            <div className="mt-4 flex flex-col space-y-2">
              <Link to="/signin" className="py-2 font-medium">Sign In</Link>
              <Link to="/signup">
                <Button className="bg-brand-purple hover:bg-brand-purple/90">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
