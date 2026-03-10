'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

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
  const isAnimatingRef = useRef(false);
  const hasAnimatedRef = useRef(false);
  
  const scrambleChars = 'nextphas';
  
  const getRandomChar = useCallback(() => {
    return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
  }, []);
  
  const startAnimation = useCallback(() => {
    if (isAnimatingRef.current || hasAnimatedRef.current) return;
    
    isAnimatingRef.current = true;
    setIsAnimating(true);
    let scrambleIteration = 0;
    
    const run = () => {
      const interval = setInterval(() => {
        if (scrambleIteration < scrambleCount) {
          const scrambled = text
            .split('')
            .map(char => char === ' ' ? ' ' : getRandomChar())
            .join('');
          
          setDisplayText(scrambled);
          scrambleIteration++;
        } else {
          setDisplayText(text);
          isAnimatingRef.current = false;
          hasAnimatedRef.current = true;
          setIsAnimating(false);
          setHasAnimated(true);
          clearInterval(interval);
        }
      }, speed);
    };

    if (delay > 0) {
      setTimeout(run, delay);
    } else {
      run();
    }
  }, [text, speed, delay, scrambleCount, getRandomChar]);
  
  useEffect(() => {
    if (!triggerOnView) {
      startAnimation();
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            startAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [triggerOnView, startAnimation]);
  
  return (
    <Component ref={elementRef} className={className}>
      {displayText}
    </Component>
  );
};

export default RunningText;