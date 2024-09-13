import { motion, MotionValue } from 'framer-motion';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const MainContent = ({ scaleX } : {scaleX: MotionValue<number>}) => (
  <main className="flex flex-col items-center px-4">
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-light dark:bg-dark origin-top-left z-20"
      style={{ scaleX }}
    />
    <Header />
    <Intro />
    <About />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
    <Footer />
  </main>
);

export default MainContent;
