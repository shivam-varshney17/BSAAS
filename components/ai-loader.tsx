'use client'

import React, { useEffect, useState } from 'react';

export default function AILoaderComponent() {
  const [visible, setVisible] = useState(true);

  // Handle loader fadeout on client side only
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div className="text-center">
        <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-4">
          {/* Pulsing core */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-amber-300 opacity-30 animate-pulse"></div>
          
          {/* Spinning rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 md:w-16 h-14 md:h-16 border-4 border-transparent border-t-blue-500 border-b-amber-300 rounded-full animate-spin"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 md:w-12 h-10 md:h-12 border-2 border-dashed border-indigo-500 rounded-full animate-spin-slow"></div>
          </div>
          
          {/* Brain icon */}
          <div className="absolute inset-0 flex items-center justify-center text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
        </div>
        
        <div className="relative inline-block">
          <p className="text-blue-500 font-mono text-base md:text-xl ai-typing">System initializing</p>
          <div className="absolute bottom-0 left-0 w-full h-px bg-blue-500 data-stream"></div>
        </div>
      </div>
    </div>
  );
} 