'use client';
import SplashScreen from '@/components/Splash';
import { createContext, useContext, useState, useCallback } from 'react';

const SplashContext = createContext({ done: false, finish: () => {} });

export function SplashProvider({ children }) {
  const [splashDone, setSplashDone] = useState(false);
  const finish = useCallback(() => 
    setSplashDone(true), 
  []);

  return (
    <SplashContext.Provider value={{ done: splashDone, finish }}>

      {/* Splash sits on top */}
      {!splashDone && <SplashScreen />}

      {/* Children are fully hidden until splash is done */}
      <div style={{ visibility: splashDone ? 'visible' : 'hidden' }}>
        {children}
      </div>

    </SplashContext.Provider>
  );
}

export const useSplashDone = () => useContext(SplashContext).done;
export const useSplashFinish = () => useContext(SplashContext).finish;