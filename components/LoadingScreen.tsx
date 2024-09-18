import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC<{ hasVisited: boolean }> = ({ hasVisited }) => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [shouldRenderLoading, setShouldRenderLoading] = useState(false); // State to control loading screen display
  const [isInitialized, setIsInitialized] = useState(false); // State to ensure initialization is complete

  useEffect(() => {
    // Check if `hasVisited` and set loading screen visibility accordingly
    if (hasVisited) {
      setShouldRenderLoading(false); 
    } else {
      setShouldRenderLoading(true); 
    }
    setIsInitialized(true); 
  }, [hasVisited]);

  useEffect(() => {
    if (!shouldRenderLoading) return; // Exit early if loading should not be shown

    // Simulate loading animation
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 10); // Adjust timing as needed

    return () => clearInterval(interval);
  }, [shouldRenderLoading]);

  // Prevent rendering until initialization is complete
  if (!isInitialized || !shouldRenderLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  text-lightText  dark:text-darkText z-50">
      <AnimatePresence>
        <div className="flex items-center">
          <div className="relative w-1 h-64 rounded-full overflow-hidden">
            <motion.div
              className="absolute bottom-0 left-0 w-1 bg-black dark:bg-white rounded-full"
              initial={{ height: '0%' }}
              animate={{ height: `${loadingPercentage}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.div
            className="text-[7rem] sm:text-[10rem] font-semibold dark:text-white"
            initial={{ y: '100%' }}
            animate={{ y: `${100 - loadingPercentage}%` }}
            transition={{ duration: 0.3 }}
          >
            {loadingPercentage}%
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default LoadingScreen;
