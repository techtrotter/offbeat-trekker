
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import DestinationCard from '../destinations/DestinationCard';
import { featuredDestinations } from '@/utils/mockData';
import AnimatedSection from '../ui/AnimatedSection';

const FeaturedDestinations = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <AnimatedSection variant="fade-up">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="block text-sm font-medium text-offbeats-700 dark:text-offbeats-400 mb-2">
                Handpicked For You
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Featured Destinations
              </h2>
            </div>
            <Link 
              to="/destinations" 
              className="hidden md:flex items-center text-offbeats-700 dark:text-offbeats-400 hover:text-offbeats-800 dark:hover:text-offbeats-300 font-medium"
            >
              View All 
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {featuredDestinations.slice(0, 2).map((destination, index) => (
            <AnimatedSection key={destination.id} variant="fade-up" delay={0.1 * (index + 1)}>
              <DestinationCard destination={destination} featured={true} />
            </AnimatedSection>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredDestinations.slice(2, 5).map((destination, index) => (
            <AnimatedSection key={destination.id} variant="fade-up" delay={0.1 * (index + 3)}>
              <DestinationCard destination={destination} />
            </AnimatedSection>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            to="/destinations" 
            className="md:hidden inline-flex items-center text-offbeats-700 dark:text-offbeats-400 hover:text-offbeats-800 dark:hover:text-offbeats-300 font-medium"
          >
            View All Destinations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
