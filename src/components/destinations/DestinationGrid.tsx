
import React from 'react';
import DestinationCard from './DestinationCard';
import { Destination } from '@/utils/mockData';
import AnimatedSection from '../ui/AnimatedSection';
import { getStaggeredDelay } from '@/utils/animations';

interface DestinationGridProps {
  destinations: Destination[];
  className?: string;
}

const DestinationGrid = ({ destinations, className }: DestinationGridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {destinations.map((destination, index) => (
        <AnimatedSection 
          key={destination.id} 
          variant="fade-up"
          delay={getStaggeredDelay(index) as number}
        >
          <DestinationCard destination={destination} />
        </AnimatedSection>
      ))}
    </div>
  );
};

export default DestinationGrid;
