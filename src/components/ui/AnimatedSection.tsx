
import React from 'react';
import { cn } from '@/lib/utils';
import { AnimationVariant, useInView } from '@/utils/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className, 
  variant = 'fade-up',
  delay = 0
}: AnimatedSectionProps) => {
  const { ref, animationClass } = useInView({}, variant);

  return (
    <div 
      ref={ref} 
      className={cn(animationClass, className)}
      style={{ animationDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
