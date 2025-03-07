
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, Search, Plus } from 'lucide-react';
import BottomNavigation from '@/components/layout/BottomNavigation';
import DestinationGrid from '@/components/destinations/DestinationGrid';
import { Button } from '@/components/ui/button';
import { destinations, categories } from '@/utils/mockData';
import AnimatedSection from '@/components/ui/AnimatedSection';

const Destinations = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveFilters([category]);
    }
  }, [searchParams]);
  
  useEffect(() => {
    let result = [...destinations];
    
    if (activeFilters.length > 0) {
      result = result.filter(dest => activeFilters.includes(dest.category));
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        dest => 
          dest.title.toLowerCase().includes(term) || 
          dest.location.toLowerCase().includes(term) || 
          dest.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredDestinations(result);
  }, [activeFilters, searchTerm]);
  
  const toggleFilter = (categoryId: string) => {
    setActiveFilters(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };
  
  return (
    <div className="android-app-container bg-white dark:bg-gray-950">
      <div className="android-status-bar" />
      
      <div className="android-toolbar android-elevation-1">
        <h1 className="text-xl font-medium ml-2">Explore Destinations</h1>
      </div>
      
      <main className="android-content flex-1 overflow-y-auto pb-20">
        <section className="relative h-40 mb-6">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
              alt="Destinations in North Bengal" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <AnimatedSection variant="fade-up">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                Discover North Bengal
              </h1>
              <p className="text-sm text-white/90 max-w-2xl">
                Explore offbeat destinations and hidden gems
              </p>
            </AnimatedSection>
          </div>
        </section>
        
        <div className="px-4">
          <AnimatedSection variant="fade-up">
            <div className="android-material-card p-3 mb-6">
              <div className="flex gap-2">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search destinations..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-offbeats-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button 
                  variant="outline" 
                  className="md:w-auto flex items-center gap-2 android-ripple"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              
              {showFilters && (
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-3">
                    <SlidersHorizontal className="h-4 w-4 text-gray-500" />
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Categories
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => toggleFilter(category.id)}
                        className={`py-1.5 px-3 rounded-full text-sm transition-colors android-ripple ${
                          activeFilters.includes(category.id)
                            ? 'bg-offbeats-600 text-white' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>
          
          <AnimatedSection variant="fade-up" delay={0.2}>
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {filteredDestinations.length} Destinations
              </h2>
            </div>
          </AnimatedSection>
          
          {filteredDestinations.length > 0 ? (
            <DestinationGrid destinations={filteredDestinations} />
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                No destinations found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </main>
      
      <div className="android-fab android-elevation-2 bg-offbeats-600 text-white fixed right-4 bottom-20">
        <Plus className="h-6 w-6" />
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Destinations;
