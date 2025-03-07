
import React from 'react';
import Hero from '@/components/home/Hero';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import ExploreCategories from '@/components/home/ExploreCategories';
import BottomNavigation from '@/components/layout/BottomNavigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="android-toolbar">
        <h1 className="text-xl font-medium">Offbeats</h1>
      </div>
      
      <main className="android-content">
        <Hero />
        <FeaturedDestinations />
        <ExploreCategories />
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
