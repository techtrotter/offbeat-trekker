
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
    <nav className="android-bottom-nav">
      {navItems.map((item) => (
        <Link 
          key={item.path}
          to={item.path}
          className={cn(
            'android-bottom-nav-item android-ripple',
            location.pathname === item.path ? 'active' : ''
          )}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavigation;
