
import { useEffect, useRef, useState } from 'react';

export type AnimationVariant = 
  | 'fade-in'
  | 'fade-up'
  | 'zoom-in'
  | 'slide-in-right'
  | 'slide-in-left';

export const useInView = (options = {}, variant: AnimationVariant = 'fade-in') => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1,
      ...options,
    });
    
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  const animationClass = isInView ? `animate-${variant}` : 'opacity-0';
  
  return { ref, isInView, animationClass };
};

export const getStaggeredDelay = (index: number, baseDelay = 0.05) => {
  return `${baseDelay * index}s`;
};
