
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
          'android-material-card android-ripple group h-full flex flex-col mb-3',
          featured ? 'sm:flex-row' : '',
          className
        )}
      >
        <div className={cn('relative overflow-hidden', featured ? 'sm:w-1/2' : '')}>
          <div className="aspect-video overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute top-2 left-2 bg-white/90 dark:bg-gray-800/90 rounded-full px-2 py-0.5 text-xs font-medium flex items-center">
            {getCategoryIcon(category)}
            <span className="ml-1 capitalize">{category}</span>
          </div>
          {difficulty && (
            <div className="absolute top-2 right-2 bg-white/90 dark:bg-gray-800/90 rounded-full px-2 py-0.5 text-xs font-medium">
              {difficulty}
            </div>
          )}
          <div className="absolute bottom-2 right-2 bg-offbeats-600 rounded-full px-2 py-0.5 text-xs font-bold flex items-center text-white">
            <Star className="fill-current h-3 w-3 mr-0.5" />
            {rating}
          </div>
        </div>
        
        <div className={cn('p-3 flex flex-col flex-grow', featured ? 'sm:w-1/2 sm:p-4' : '')}>
          <h3 className={cn('font-bold text-gray-900 dark:text-white group-hover:text-offbeats-700 dark:group-hover:text-offbeats-400 transition-colors', 
            featured ? 'text-lg' : 'text-base'
          )}>
            {title}
          </h3>
          
          <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mt-1 mb-2">
            <MapPin className="h-3 w-3 mr-1 text-offbeats-600" />
            <span>{location}</span>
          </div>
          
          {featured && (
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
              {destination.description}
            </p>
          )}
          
          <div className="mt-auto pt-2 border-t border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-center">
              <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                <Calendar className="h-3 w-3 mr-1 text-offbeats-600" />
                <span>{duration}</span>
              </div>
              <p className="font-bold text-sm text-offbeats-700 dark:text-offbeats-400">
                ₹{price}
                <span className="text-xs text-gray-500 font-normal">
                  {category === 'homestay' || category === 'hotel' ? '/night' : ''}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
