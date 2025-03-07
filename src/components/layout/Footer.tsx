
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-offbeats-700 dark:text-offbeats-400">Offbeats</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Discover offbeat destinations, connect with fellow travelers, and create memorable adventures in North Bengal.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-offbeats-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-offbeats-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-offbeats-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="Youtube" className="text-gray-500 hover:text-offbeats-600 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-offbeats-700 dark:text-offbeats-400">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { text: 'Home', url: '/' },
                { text: 'Destinations', url: '/destinations' },
                { text: 'Login', url: '/login' },
                { text: 'Sign Up', url: '/signup' },
                { text: 'Profile', url: '/profile' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.url} 
                    className="text-gray-600 dark:text-gray-400 hover:text-offbeats-600 dark:hover:text-offbeats-400 text-sm transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-offbeats-700 dark:text-offbeats-400">Explore</h3>
            <ul className="space-y-2">
              {[
                'Treks',
                'Waterfalls',
                'Lakes',
                'Homestays',
                'Hotels',
                'Adventure Packages',
              ].map((category, idx) => (
                <li key={idx}>
                  <Link 
                    to="/destinations" 
                    className="text-gray-600 dark:text-gray-400 hover:text-offbeats-600 dark:hover:text-offbeats-400 text-sm transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-offbeats-700 dark:text-offbeats-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-offbeats-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  123 Adventure Street, Siliguri, West Bengal, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-offbeats-600 mr-2 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-offbeats-600 mr-2 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  info@offbeats.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Offbeats. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/terms" className="text-gray-600 dark:text-gray-400 text-sm hover:text-offbeats-600 dark:hover:text-offbeats-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-gray-600 dark:text-gray-400 text-sm hover:text-offbeats-600 dark:hover:text-offbeats-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/faq" className="text-gray-600 dark:text-gray-400 text-sm hover:text-offbeats-600 dark:hover:text-offbeats-400 transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
