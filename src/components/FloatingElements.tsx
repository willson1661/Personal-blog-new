import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  darkMode: boolean;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ darkMode }) => {
  const elements = [
    { icon: '⚡', size: 'text-4xl', delay: 0, x: '10%', y: '20%' },
    { icon: '🚀', size: 'text-3xl', delay: 0.5, x: '80%', y: '15%' },
    { icon: '💎', size: 'text-2xl', delay: 1, x: '15%', y: '70%' },
    { icon: '🌟', size: 'text-3xl', delay: 1.5, x: '85%', y: '75%' },
    { icon: '🔥', size: 'text-2xl', delay: 2, x: '50%', y: '10%' },
    { icon: '✨', size: 'text-xl', delay: 2.5, x: '90%', y: '50%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} opacity-20 ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}
          style={{
            left: element.x,
            top: element.y,
          }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 360],
            y: [-20, 20, -20]
          }}
          transition={{
            duration: 6,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;