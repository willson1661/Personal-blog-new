import React, { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './src/hooks/useTheme';

import Header from './src/components/Header';
import Hero from './Hero';
import About from './src/components/About';
import Projects from './src/components/Projects';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';
import LazyThreeBackground from './LazyThreeBackground';
import FloatingElements from './src/components/FloatingElements';

// Loading component
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  const { darkMode, toggleDarkMode, isLoading } = useTheme();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <AnimatePresence>
      <motion.div
        className={`min-h-screen transition-colors duration-500 ${
          darkMode ? 'dark' : ''
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <LazyThreeBackground darkMode={darkMode} />
          <FloatingElements darkMode={darkMode} />
        </Suspense>

        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="relative z-10">
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} />
      </motion.div>
    </AnimatePresence>
  );
}

export default React.memo(App);
