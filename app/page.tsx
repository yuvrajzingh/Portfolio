"use client"

// pages/index.tsx (or pages/page.tsx)
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3300); // Simulate loading duration, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const welcomeTimer = setTimeout(() => {
        setShowWelcome(false);
        const contentTimer = setTimeout(() => {
          setShowContent(true);
        }, 500); // Transition delay after hiding welcome message
        return () => clearTimeout(contentTimer);
      }, 2000); // Duration to display the welcome message
      return () => clearTimeout(welcomeTimer);
    }
  }, [loading]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  return (
    <AnimatePresence>
      {loading && <LoadingScreen />}
      {!loading && showWelcome && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-lightBg dark:bg-darkBg z-50">
          <motion.div
            className="text-4xl font-bold text-black dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Fades out when transitioning
            transition={{ duration: 1 }}
          >
            Welcome.
          </motion.div>
        </div>
      )}
      {!loading && showContent && (
        <main className="flex flex-col items-center px-4">
          <motion.div className='fixed top-0 left-0 right-0 h-1 bg-red-500 dark:bg-orange-500 origin-top-left z-20' style={{ scaleX }}/>
          <Header />
          <Intro />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
        </main>
      )}
    </AnimatePresence>
  );
}
