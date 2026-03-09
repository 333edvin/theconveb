'use client'
import React, { useEffect, useRef, useState } from 'react';

// The 'index' prop allows it to calculate its own delay automatically
const Reveal = ({ children, index = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Calculates a staggered delay: 0ms, 150ms, 300ms, etc.
  const dynamicDelay = index * 150; 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] transform-gpu ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        // This applies the staggered start time
        transitionDelay: `${isVisible ? dynamicDelay : 0}ms`
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;