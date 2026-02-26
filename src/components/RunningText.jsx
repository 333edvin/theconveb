'use client';

import React, { useState, useEffect, useRef } from 'react';

const RunningText = ({ 
  text, 
  className = '', 
  speed = 50, 
  delay = 0,
  triggerOnView = false,
  scrambleCount = 10,
  as: Component = 'span' 
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);
  
  // Get unique letters from "nextphase" - all lowercase
  const getScrambleChars = () => {
    const uniqueLetters = new Set();
    // Add all letters from "nextphase" (lowercase only)
    'nextphase'.split('').forEach(char => {
      if (char !== ' ') {
        uniqueLetters.add(char.toLowerCase());
      }
    });
    return Array.from(uniqueLetters).join('');
  };
  
  const scrambleChars = getScrambleChars(); // Returns: "nextphas"
  
  const getRandomChar = () => {
    return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
  };
  
  const startAnimation = () => {
    if (isAnimating || hasAnimated) return;
    
    setIsAnimating(true);
    let scrambleIteration = 0;
    
    setTimeout(() => {
      const interval = setInterval(() => {
        if (scrambleIteration < scrambleCount) {
          // Scramble using only lowercase letters from "nextphase"
          const scrambled = text
            .split('')
            .map(char => {
              if (char === ' ') return ' ';
              return getRandomChar(); // Always return lowercase
            })
            .join('');
          
          setDisplayText(scrambled);
          scrambleIteration++;
        } else {
          setDisplayText(text);
          setIsAnimating(false);
          setHasAnimated(true);
          clearInterval(interval);
        }
      }, speed);
    }, delay);
  };
  
  useEffect(() => {
    if (!triggerOnView) {
      startAnimation();
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [triggerOnView]);
  
  return (
    <Component ref={elementRef} className={className}>
      {displayText}
    </Component>
  );
};

export default RunningText;