import React from 'react';
import { motion } from 'framer-motion';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  rotateOnHover?: boolean;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ 
  children, 
  className = '', 
  hoverScale = 1.05,
  rotateOnHover = false
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: hoverScale,
        rotateY: rotateOnHover ? 10 : 0,
        z: 50
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
    >
      {children}
    </motion.div>
  );
};

export default InteractiveCard;