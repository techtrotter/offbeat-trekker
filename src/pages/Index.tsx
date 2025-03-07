
import React from 'react';
import Hero from '@/components/home/Hero';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import ExploreCategories from '@/components/home/ExploreCategories';
import BottomNavigation from '@/components/layout/BottomNavigation';

const Index = () => {
  return (
    <div className="android-app-container bg-white dark:bg-gray-950">
      <div className="android-status-bar" />
      
      <div className="android-toolbar android-elevation-1">
        <h1 className="text-xl font-medium ml-2">Offbeats</h1>
      </div>
      
      <main className="android-content flex-1 overflow-y-auto">
        <Hero />
        <FeaturedDestinations />
        <ExploreCategories />
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
