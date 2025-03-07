
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
          alt="Mountain landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection variant="fade-in" delay={0.2}>
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm text-white mb-4">
              Discover North Bengal's Hidden Gems
            </span>
          </AnimatedSection>
          
          <AnimatedSection variant="fade-up" delay={0.4}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Explore the <span className="text-offbeats-400">Untraveled Paths</span> of the Himalayas
            </h1>
          </AnimatedSection>
          
          <AnimatedSection variant="fade-up" delay={0.6}>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Discover offbeat destinations, connect with fellow travelers, and create unforgettable adventures in the beautiful landscapes of North Bengal.
            </p>
          </AnimatedSection>
          
          <AnimatedSection variant="fade-up" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/destinations">
                <Button 
                  className="bg-offbeats-600 hover:bg-offbeats-700 text-white px-8 py-6 rounded-full text-lg"
                >
                  Explore Destinations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg"
                >
                  Join Offbeats
                </Button>
              </Link>
            </div>
          </AnimatedSection>
          
          <AnimatedSection variant="fade-up" delay={1}>
            <div className="max-w-2xl mx-auto relative">
              <div className="relative rounded-full overflow-hidden bg-white/10 backdrop-blur-lg p-1.5">
                <div className="flex items-center bg-white dark:bg-gray-900 rounded-full">
                  <Search className="h-5 w-5 text-gray-400 ml-4 flex-shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Search destinations, treks, homestays..." 
                    className="w-full bg-transparent py-3 px-4 outline-none text-gray-800 dark:text-white"
                  />
                  <div className="pr-1 flex-shrink-0">
                    <Button 
                      className="bg-offbeats-600 hover:bg-offbeats-700 transition-colors text-white rounded-full py-2 px-6"
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Wave overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,208C840,213,960,203,1080,176C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
