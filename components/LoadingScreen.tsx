// components/LoadingScreen.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsLoaded(true);
          return prev;
        }
      });
    }, 30); // Update this interval as needed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShowWelcome(true);
      }, 500); // Show welcome message after loading completes

      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex text-slate-950 items-center justify-center bg-white dark:text-white dark:bg-black z-50">
      <AnimatePresence>
        {!showWelcome ? (
          <div className="flex flex-row items-center">
            <div className="bg-none w-1 h-64 rounded-full overflow-hidden relative">
              <motion.div
                className="bg-black dark:bg-white w-1 rounded-full absolute bottom-0 left-0"
                initial={{ height: '0%' }}
                animate={{ height: `${loadingPercentage}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.div
              className="text-[7rem] sm:text-[10rem] font-semibold text-slate-950 dark:text-white"
              initial={{ y: '100%' }}
              animate={{ y: `${100 - loadingPercentage}%` }}
              transition={{ duration: 0.3 }}
            >
              {loadingPercentage}%
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="text-3xl font-bold text-slate-950 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoadingScreen;
