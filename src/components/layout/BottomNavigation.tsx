
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Map, User, MessageCircle, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: <Home className="h-6 w-6" /> 
    },
    { 
      path: '/destinations', 
      label: 'Explore', 
      icon: <Compass className="h-6 w-6" /> 
    },
    { 
      path: '/messages', 
      label: 'Messages', 
      icon: <MessageCircle className="h-6 w-6" /> 
    },
    { 
      path: '/profile', 
      label: 'Profile', 
      icon: <User className="h-6 w-6" /> 
    },
  ];

  return (
    <nav className="android-bottom-nav android-elevation-2">
      {navItems.map((item) => (
        <Link 
          key={item.path}
          to={item.path}
          className={cn(
            'android-bottom-nav-item android-ripple flex flex-col items-center justify-center w-full h-full py-2',
            location.pathname === item.path 
              ? 'text-offbeats-600 dark:text-offbeats-400' 
              : 'text-gray-600 dark:text-gray-400'
          )}
        >
          {item.icon}
          <span className="text-xs mt-1">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavigation;
