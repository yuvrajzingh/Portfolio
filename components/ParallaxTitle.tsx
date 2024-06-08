"use client";

import "../app/globals.css";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxTitle({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setContentWidth(containerWidth);
    }
  }, [containerRef]);

  const x = useTransform(baseX, (v) => `${wrap(-contentWidth, 0, v)}px`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="parallax text-white bg-light dark:bg-dark dark:text-black text-5xl overflow-hidden"
      ref={containerRef}
    >
      <motion.div className="scroller font-extrabold flex whitespace-nowrap" style={{ x }}>
        {[...Array(1000)].map((_, i) => (
          <span key={i} className="mr-2">{children}</span>
        ))}
      </motion.div>
    </div>
  );
}

export default ParallaxTitle;
