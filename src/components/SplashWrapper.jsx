'use client';

import { useState, useEffect } from 'react';
import SplashScreen from './Splash';

export default function SplashWrapper({ children }) {
  const [showSplash, setShowSplash] = useState(true); // 👈 true by default

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // hide after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      {children}
    </>
  );
}