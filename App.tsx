import React, { useState, useEffect, Suspense, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Hero from './components/Hero';
import PerformanceMonitor from './components/PerformanceMonitor';
import {
  LazyThreeBackground,
  LazyProjects,
  LazyContact,
  LazyFooter,
  LazyAbout,
  LazyFloatingElements,
} from './components/LazyComponents';

// Loading component for better UX
const LoadingSpinner = memo(() => (
  <div className="flex items-center justify-center h-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
));

// Memoized dark mode hook
const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return [darkMode, setDarkMode] as const;
};

function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
        {/* Performance monitoring */}
        <PerformanceMonitor enabled={true} />

        {/* Critical above-the-fold content */}
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        {/* Hero loads immediately for better perceived performance */}
        <main className="relative z-10">
          <Hero darkMode={darkMode} />
          
          {/* Lazy load below-the-fold content */}
          <Suspense fallback={<LoadingSpinner />}>
            <LazyAbout darkMode={darkMode} />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <LazyProjects darkMode={darkMode} />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <LazyContact darkMode={darkMode} />
          </Suspense>
        </main>
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyFooter darkMode={darkMode} />
        </Suspense>

        {/* Heavy 3D background - loads last */}
        <Suspense fallback={null}>
          <LazyThreeBackground darkMode={darkMode} />
        </Suspense>
        
        <Suspense fallback={null}>
          <LazyFloatingElements darkMode={darkMode} />
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default memo(App);
