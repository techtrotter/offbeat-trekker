
import React from 'react';
import Hero from '@/components/home/Hero';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import ExploreCategories from '@/components/home/ExploreCategories';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <FeaturedDestinations />
        <ExploreCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
