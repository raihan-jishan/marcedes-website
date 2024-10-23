
 "use client";
import { motion } from 'framer-motion';

const BlinkingEffect = () => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Light flash color
        opacity: 0, // Start invisible
        boxShadow: '0 0 50px rgba(255, 255, 255, 1)', // Box shadow during flash
      }}
      animate={{ 
        opacity: [0, 1, 0],
        boxShadow: ['0 0 50px rgba(255, 255, 255, 1)', '0 0 100px rgba(255, 255, 255, 1)', '0 0 50px rgba(255, 255, 255, 1)'] 
      }} // Flash effect with box shadow
      transition={{ duration: 0.2, repeat: 3, repeatType: 'loop' }} // Repeat flashing effect
    />
  );
};

export default BlinkingEffect;
