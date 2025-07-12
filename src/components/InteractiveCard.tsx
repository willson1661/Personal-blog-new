import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  rotateOnHover?: boolean;
}

const InteractiveCard = memo<InteractiveCardProps>(({
  children,
  className = '',
  hoverScale = 1.02,
  rotateOnHover = false,
}) => {
  return (
    <motion.div
      className={`transform transition-all duration-300 ${className}`}
      whileHover={{ 
        scale: hoverScale,
        rotateY: rotateOnHover ? 5 : 0,
      }}
      transition={{ 
        duration: 0.2,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
});

export default InteractiveCard;