import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import AnimatedSection from './src/components/AnimatedSection';
import InteractiveCard from './src/components/InteractiveCard';
import { 
  ANIMATION_DURATIONS, 
  ANIMATION_DELAYS, 
  ANIMATION_EASING, 
  EXTERNAL_URLS, 
  Z_INDEX 
} from './src/constants';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToAbout = useCallback(() => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = EXTERNAL_URLS.RESUME;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', 'Download Willson Raj Manda Resume PDF');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <motion.section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden
      ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900'
          : 'bg-gradient-to-br from-blue-50 via-white to-blue-50'
      }`}
      style={{ zIndex: Z_INDEX.CONTENT }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: ANIMATION_DURATIONS.SLOW }}
    >
      {/* Background Pattern */}
      <div className="absolute opacity-10">
        <div
          className="absolute"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${
              darkMode ? '#3b82f6' : '#1e40af'
            } 2px, transparent 2px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative" style={{ zIndex: Z_INDEX.CONTENT + 1 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedSection className="text-center lg:text-left" delay={ANIMATION_DELAYS.SHORT}>
            <motion.h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 
              ${darkMode ? 'text-white' : 'text-gray-900'} leading-tight`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: ANIMATION_DURATIONS.MEDIUM, 
                delay: ANIMATION_DELAYS.MEDIUM,
                ease: ANIMATION_EASING.SMOOTH 
              }}
            >
              Hi, I'm{' '}
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: ANIMATION_DURATIONS.MEDIUM, 
                  delay: ANIMATION_DELAYS.MEDIUM + 0.3,
                  ease: ANIMATION_EASING.BOUNCE 
                }}
              >
                Willson Raj Manda
              </motion.span>
            </motion.h1>

            <motion.p
              className={`text-xl sm:text-2xl mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              } leading-relaxed`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: ANIMATION_DURATIONS.MEDIUM, 
                delay: ANIMATION_DELAYS.LONG,
                ease: ANIMATION_EASING.SMOOTH 
              }}
            >
              Front-end Developer & Web Designer
            </motion.p>

            <motion.p
              className={`text-lg mb-10 ${
                darkMode ? 'text-gray-400' : 'text-gray-700'
              } max-w-2xl`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: ANIMATION_DURATIONS.MEDIUM, 
                delay: ANIMATION_DELAYS.LONG + 0.2,
                ease: ANIMATION_EASING.SMOOTH 
              }}
            >
              With over 2.3 years of experience in modern web technologies, I
              build clean, functional, and user-centered digital experiences
              that bring ideas to life through thoughtful design and
              development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative"
              style={{ zIndex: Z_INDEX.CONTENT + 2 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: ANIMATION_DURATIONS.MEDIUM, 
                delay: ANIMATION_DELAYS.LONG + 0.4,
                ease: ANIMATION_EASING.SMOOTH 
              }}
            >
              <InteractiveCard>
                <button
                  onClick={handleDownload}
                  className={`group relative ${
                    darkMode
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-white text-gray-900 hover:bg-gray-50'
                  } 
                  px-8 py-4 rounded-lg font-semibold border-2 ${
                    darkMode ? 'border-gray-700' : 'border-gray-200'
                  } 
                  hover:shadow-lg transition-all duration-300 flex items-center justify-center
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                  style={{ pointerEvents: 'auto' }}
                  aria-label="Download resume as PDF"
                >
                  <Download
                    size={20}
                    className="mr-2 group-hover:translate-y-1 transition-transform"
                    aria-hidden="true"
                  />
                  Download Resume
                </button>
              </InteractiveCard>
            </motion.div>
          </AnimatedSection>

          {/* Profile Image */}
          <AnimatedSection
            className="flex justify-center lg:justify-end"
            delay={ANIMATION_DELAYS.MEDIUM + 0.4}
          >
            <InteractiveCard hoverScale={1.1} rotateOnHover={true}>
              <div className="relative">
                <motion.div
                  className={`w-80 h-80 rounded-full ${
                    darkMode
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600'
                      : 'bg-gradient-to-br from-blue-500 to-purple-500'
                  } p-1`}
                >
                  <div
                    className={`w-full h-full rounded-full overflow-hidden ${
                      darkMode ? 'bg-gray-800' : 'bg-white'
                    }`}
                  >
                    <img
                      src={EXTERNAL_URLS.PROFILE_IMAGE}
                      alt="Willson Raj Manda - Front-end Developer"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className={`absolute -top-4 -right-4 w-16 h-16 ${
                    darkMode ? 'bg-blue-600' : 'bg-blue-500'
                  } rounded-full flex items-center justify-center text-white text-2xl`}
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  aria-hidden="true"
                >
                  ⚡
                </motion.div>
                <motion.div
                  className={`absolute -bottom-4 -left-4 w-12 h-12 ${
                    darkMode ? 'bg-purple-600' : 'bg-purple-500'
                  } rounded-full flex items-center justify-center text-white text-xl`}
                  animate={{
                    x: [-5, 5, -5],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  aria-hidden="true"
                >
                  🚀
                </motion.div>
              </div>
            </InteractiveCard>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ zIndex: Z_INDEX.CONTENT + 2 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: ANIMATION_DURATIONS.MEDIUM, 
            delay: ANIMATION_DELAYS.VERY_SLOW,
            ease: ANIMATION_EASING.SMOOTH 
          }}
        >
          <motion.button
            onClick={scrollToAbout}
            className={`${
              darkMode
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-gray-900'
            } transition-colors duration-300 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-2`}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            style={{ pointerEvents: 'auto' }}
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} aria-hidden="true" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default React.memo(Hero);
