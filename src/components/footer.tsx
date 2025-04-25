import { Logo } from "./logo";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Contact Form removed */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-400">
              Never sell expired products again with our smart inventory management solution.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400">© {currentYear} ExpiryGuard. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
