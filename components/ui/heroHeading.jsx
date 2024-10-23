"use client";
import { motion } from "framer-motion";

const HeroHeading = () => {
  const text = "The best or nothing";

  return (
    <div className="relative">
      {/* Smoke Effect */}
      <motion.div
        className="absolute w-full h-20 opacity-50 rounded-full"
        style={{ 
          backgroundColor: "rgba(256, 256, 256, 0.5)", // Light mode color
          filter: "blur(30px)" 
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dark Mode Styling */}
      <style jsx>{`
        @media (prefers-color-scheme: dark) {
          .absolute {
            background-color: rgba(50, 50, 50, 0.6); // Dark mode color with medium opacity
          }
        }
      `}</style>

      <h1 className="relative z-10 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-gray-200">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -10 }} // Start off invisible and slightly to the left
            animate={{ opacity: 1, x: 0 }} // Fade in and move to original position
            transition={{ delay: index * 0.1 }} // Delay for a staggered effect
          >
            {char}
          </motion.span>
        ))}
      </h1>
    </div>
  );
};

export default HeroHeading;
