
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/utils/mockData';
import { 
  Mountain, 
  Droplet, 
  Waves, 
  Home, 
  Building, 
  Compass 
} from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const getCategoryIcon = (iconName: string) => {
  switch(iconName) {
    case 'mountain':
      return <Mountain className="h-6 w-6" />;
    case 'droplet':
      return <Droplet className="h-6 w-6" />;
    case 'waves':
      return <Waves className="h-6 w-6" />;
    case 'home':
      return <Home className="h-6 w-6" />;
    case 'building':
      return <Building className="h-6 w-6" />;
    case 'compass':
      return <Compass className="h-6 w-6" />;
    default:
      return <Compass className="h-6 w-6" />;
  }
};

const ExploreCategories = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection variant="fade-up">
          <div className="text-center mb-12">
            <span className="block text-sm font-medium text-offbeats-700 dark:text-offbeats-400 mb-2">
              Find Your Adventure
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore by Category
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Discover North Bengal's diverse offerings - from scenic treks and picturesque waterfalls to cozy homestays and thrilling adventures.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <AnimatedSection key={category.id} variant="zoom-in" delay={0.1 * index}>
              <Link 
                to={`/destinations?category=${category.id}`}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 h-full border border-gray-100 dark:border-gray-700 hover:border-offbeats-300 dark:hover:border-offbeats-700"
              >
                <div className="w-16 h-16 rounded-full bg-offbeats-100 dark:bg-offbeats-900/50 flex items-center justify-center mb-4 text-offbeats-700 dark:text-offbeats-400">
                  {getCategoryIcon(category.icon)}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
