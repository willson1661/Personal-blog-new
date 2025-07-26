import React, { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import InteractiveCard from './InteractiveCard';
import SolarSystem from './SolarSystem';

interface HeroProps {
  darkMode: boolean;
}

const Hero = memo<HeroProps>(({ darkMode }) => {
  const scrollToAbout = useCallback(() => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href =
      'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/Willson%20Raj%20Manda%20Resume.pdf?alt=media&token=52103178-1501-4598-a0ce-fe3d95a3b1b8';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <motion.section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden z-[10] ${
        darkMode
          ? 'bg-gradient-to-br from-black via-black to-black'
          : 'bg-gradient-to-br from-blue-50 via-white to-blue-50'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Solar System Animated Background */}
   

      {/* Background Pattern */}
      <div className="absolute opacity-10 z-0">
        <div
          className="absolute"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${
              darkMode ? '#3b82f6' : '#1e40af'
            } 2px, transparent 2px)`,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Main Hero content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-[10]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedSection className="text-center lg:text-left" delay={0.2}>
            <motion.h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              } leading-tight`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Hi, I'm{' '}
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
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
              transition={{ duration: 0.8, delay: 1 }}
            >
              Front-end Developer & Web Designer
            </motion.p>

            <motion.p
              className={`text-lg mb-10 ${
                darkMode ? 'text-gray-400' : 'text-gray-700'
              } max-w-2xl`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              With over 2.3 years of experience in modern web technologies, I
              build clean, functional, and user-centered digital experiences
              that bring ideas to life through thoughtful design and
              development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-[12]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
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
  hover:shadow-lg transition-all duration-300 flex items-center justify-center`}
                  style={{ pointerEvents: 'auto' }}
                >
                  <Download
                    size={20}
                    className="mr-2 group-hover:translate-y-1 transition-transform"
                  />
                  Download Resume
                </button>
              </InteractiveCard>
            </motion.div>
          </AnimatedSection>

          {/* Profile Image */}
          <AnimatedSection
            className="flex justify-center lg:justify-end"
            delay={0.6}
          >
            <InteractiveCard hoverScale={1.05} rotateOnHover={true}>
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
                      src="https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/WhatsApp%20Image%202025-04-21%20at%2011.09.01_c18a96a3%20(1).png?alt=media&token=4df8c10b-85d6-4aa2-af15-bcb9895067da"
                      alt="Willson Raj Manda"
                      className="w-full h-full object-cover filter brightness-[0.7]"
                      loading="eager"
                    />
                       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-40">
<SolarSystem darkMode={darkMode} />
      </div>
                  </div>
                </motion.div>

                {/* Reduced floating elements animations */}
              
               
              </div>
            </InteractiveCard>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[12]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className={`${
              darkMode
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-gray-900'
            } transition-colors duration-300`}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ pointerEvents: 'auto' }}
            aria-label="Scroll to About section"
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
});

export default Hero;
