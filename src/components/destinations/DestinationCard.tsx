
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Star,
  ArrowRight,
  Mountain,
  Droplet,
  Waves,
  Home,
  Building,
  Compass
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Destination } from '@/utils/mockData';

interface DestinationCardProps {
  destination: Destination;
  className?: string;
  featured?: boolean;
}

const getCategoryIcon = (category: string) => {
  switch(category) {
    case 'trek':
      return <Mountain className="h-4 w-4" />;
    case 'waterfall':
      return <Droplet className="h-4 w-4" />;
    case 'lake':
      return <Waves className="h-4 w-4" />;
    case 'homestay':
      return <Home className="h-4 w-4" />;
    case 'hotel':
      return <Building className="h-4 w-4" />;
    case 'adventure':
      return <Compass className="h-4 w-4" />;
    default:
      return <MapPin className="h-4 w-4" />;
  }
};

const DestinationCard = ({ destination, className, featured = false }: DestinationCardProps) => {
  const { 
    id, 
    title, 
    location, 
    imageUrl, 
    category, 
    rating, 
    price, 
    duration, 
    difficulty 
  } = destination;

  return (
    <Link to={`/destination/${id}`}>
      <div 
        className={cn(
          'group rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col',
          featured ? 'sm:flex-row' : '',
          className
        )}
      >
        <div className={cn('relative overflow-hidden', featured ? 'sm:w-1/2' : '')}>
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
          </div>
          <div className="absolute top-3 left-3 bg-white dark:bg-gray-800 rounded-full px-3 py-1 text-xs font-medium flex items-center">
            {getCategoryIcon(category)}
            <span className="ml-1 capitalize">{category}</span>
          </div>
          {difficulty && (
            <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 rounded-full px-3 py-1 text-xs font-medium">
              {difficulty}
            </div>
          )}
        </div>
        
        <div className={cn('p-4 flex flex-col flex-grow', featured ? 'sm:w-1/2 sm:p-6' : '')}>
          <div className="flex justify-between items-start mb-2">
            <h3 className={cn('font-bold text-gray-900 dark:text-white group-hover:text-offbeats-700 dark:group-hover:text-offbeats-400 transition-colors', 
              featured ? 'text-xl' : 'text-lg'
            )}>
              {title}
            </h3>
            <div className="flex items-center text-yellow-500">
              <Star className="fill-current h-4 w-4" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
            </div>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
            <MapPin className="h-4 w-4 mr-1 text-offbeats-600" />
            <span>{location}</span>
          </div>
          
          {featured && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {destination.description}
            </p>
          )}
          
          <div className="mt-auto">
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="h-4 w-4 mr-1 text-offbeats-600" />
                <span>{duration}</span>
              </div>
              <p className="font-bold text-offbeats-700 dark:text-offbeats-400">
                ₹{price}
                <span className="text-xs text-gray-500 font-normal">
                  {category === 'homestay' || category === 'hotel' ? '/night' : ''}
                </span>
              </p>
            </div>
            
            <div className={cn(
              'mt-3 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-end',
              featured ? 'sm:justify-between' : ''
            )}>
              {featured && (
                <div className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                  View Details
                </div>
              )}
              <button 
                className="flex items-center text-sm font-medium text-offbeats-700 dark:text-offbeats-400 group-hover:text-offbeats-800 dark:group-hover:text-offbeats-300"
                aria-label="View details"
              >
                <span className="mr-1">Explore</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
