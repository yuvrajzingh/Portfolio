import { motion } from 'framer-motion';

const WelcomeScreen = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
    <motion.div
      className="text-4xl font-bold text-black dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Ensure that this is configured for fade-out
      transition={{ duration: 0.5 }} // Match this duration with the exit animation
    >
      Welcome.
    </motion.div>
  </div>
);

export default WelcomeScreen;
