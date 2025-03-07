
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, Map, User, Home, PlusCircle, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Change navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { text: 'Home', href: '/', icon: <Home className="h-4 w-4 mr-1" /> },
    { text: 'Destinations', href: '/destinations', icon: <Map className="h-4 w-4 mr-1" /> },
    { text: 'Profile', href: '/profile', icon: <User className="h-4 w-4 mr-1" /> },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled || isOpen
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-xl font-bold flex items-center text-offbeats-700 dark:text-offbeats-400"
        >
          <span className="bg-gradient-to-r from-offbeats-600 to-earth-600 bg-clip-text text-transparent">
            Offbeats
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-offbeats-700 dark:hover:text-offbeats-400 flex items-center',
                location.pathname === link.href
                  ? 'text-offbeats-700 dark:text-offbeats-400'
                  : 'text-gray-600 dark:text-gray-300'
              )}
            >
              {link.icon}
              {link.text}
            </Link>
          ))}
          
          <Link to="/login">
            <Button variant="ghost" size="sm" className="flex items-center">
              <LogIn className="h-4 w-4 mr-1" />
              Login
            </Button>
          </Link>
          
          <Link to="/signup">
            <Button variant="default" size="sm" className="bg-offbeats-600 hover:bg-offbeats-700 flex items-center">
              <PlusCircle className="h-4 w-4 mr-1" />
              Sign Up
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? (
            <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 top-[57px] bg-white/95 dark:bg-gray-900/95 z-40 transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-lg font-medium transition-colors hover:text-offbeats-700 dark:hover:text-offbeats-400 flex items-center',
                location.pathname === link.href
                  ? 'text-offbeats-700 dark:text-offbeats-400'
                  : 'text-gray-600 dark:text-gray-300'
              )}
            >
              {link.icon}
              <span className="ml-2">{link.text}</span>
            </Link>
          ))}
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col space-y-4">
            <Link 
              to="/login"
              className="w-full py-3 text-center text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Login
            </Link>
            <Link 
              to="/signup"
              className="w-full py-3 text-center text-white bg-offbeats-600 rounded-lg transition-colors hover:bg-offbeats-700"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
