"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionDivider = ({ className }: any) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { delay: 1, duration: 0.5 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={`${className} bg-gray-700 h-0.5 w-full rounded-full mt-2 dark:bg-gray-300`}
      initial={{ opacity: 0 }}
      animate={controls}
    ></motion.div>
  );
};

export default SectionDivider