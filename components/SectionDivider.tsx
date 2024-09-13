"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionDivider = ({ className } : { className?: string }) => {

  return (
    <div
      className={`${className} bg-gray-700 h-0.5 w-full rounded-full mt-2 dark:bg-gray-300`}
    ></div>
  );
};

export default SectionDivider