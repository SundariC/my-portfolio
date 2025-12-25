import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NetworkStatus() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  // Pudusa add panna state
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // --- LOW INTERNET CHECK LOGIC (NEW) ---
    const checkConnection = () => {
      const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (conn) {
        // downlink 1.5 Mbps killa irundha slow-ah consider panrom
        if (conn.downlink < 1.5) {
          setIsSlow(true);
        } else {
          setIsSlow(false);
        }
      }
    };

    checkConnection();
    // Connection speed maarumbothu monitor panna
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn) conn.addEventListener('change', checkConnection);
    // --------------------------------------

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (conn) conn.removeEventListener('change', checkConnection);
    };
  }, []);

  return (
    <AnimatePresence>
      {/* Offline Alert OR Slow Alert */}
      {(isOffline || isSlow) && (
        <motion.div
          initial={{ y: -100, x: '-50%', opacity: 0 }}
          animate={{ y: 30, x: '-50%', opacity: 1 }}
          exit={{ y: -100, x: '-50%', opacity: 0 }}
          className="fixed top-0 left-1/2 z-[10000] w-[90%] max-w-md"
        >
          <div className={`bg-[#0B0B0F]/90 backdrop-blur-2xl border ${isOffline ? 'border-red-500/30' : 'border-orange-500/30'} p-5 rounded-[25px] flex items-center gap-5 shadow-2xl`}>
            
            {/* Warning Icon with Glow */}
            <div className="relative flex items-center justify-center">
              <span className="relative z-10 text-2xl">{isOffline ? '📡' : '⚡'}</span>
              <motion.div 
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className={`absolute w-10 h-10 ${isOffline ? 'bg-red-500' : 'bg-orange-500'} rounded-full blur-lg`}
              />
            </div>
            
            <div className="flex flex-col">
              <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isOffline ? 'text-red-500' : 'text-orange-500'}`}>
                {isOffline ? 'Connection Lost' : 'Slow Connection'}
              </span>
              <p className="text-[12px] text-gray-300 font-medium leading-tight mt-1">
                {isOffline 
                  ? 'You are currently offline. Please check your internet.' 
                  : 'Your internet is a bit slow. Some animations might lag.'}
              </p>
            </div>

            <button 
              onClick={() => { setIsOffline(false); setIsSlow(false); }}
              className="ml-auto bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
            >
              <span className="text-gray-400 text-[10px]">✕</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}