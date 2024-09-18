"use client";

import React, { useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useScroll,
  useSpring,
} from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import WelcomeScreen from "@/components/WelcomeScreen";
import MainContent from "@/components/MainContent";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);

  // Check if the user has visited before
  useEffect(() => {
    const visited = sessionStorage.getItem("hasVisited");
    setHasVisited(!!visited);

    if (visited) {
      setLoading(false);
      setShowContent(true);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        setShowWelcome(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  // Handle the transition from the welcome screen to the main content
  useEffect(() => {
    if (!loading && showWelcome) {
      const welcomeTimer = setTimeout(() => {
        setShowWelcome(false);
        sessionStorage.setItem("hasVisited", "true");

        const contentTimer = setTimeout(() => {
          setShowContent(true);
        }, 500);

        return () => clearTimeout(contentTimer);
      }, 1000);

      return () => clearTimeout(welcomeTimer);
    }
  }, [loading, showWelcome]);

  // Scroll progress animation
  const { scrollYProgress } = useScroll();
  const scaleX: MotionValue<number> = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      

      <AnimatePresence>
        {loading && <LoadingScreen hasVisited={hasVisited} />}
        {!loading && showWelcome && <WelcomeScreen />}
        {!loading && !showWelcome && showContent && (
          <MainContent scaleX={scaleX} />
        )}
      </AnimatePresence>
    </div>
  );
}
