"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const CustomButton = ({
  label,
  onClick,
  icon,
  paddingMedium,
  roundedFull,
  showIcon,
  bgWhite
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonClasses = `
      inline-flex items-center capitalize justify-center
      px-8 ${paddingMedium ? "py-3" : "py-4"} border border-transparent
      text-lg font-semibold  ${roundedFull ? "rounded-full  " : "rounded-xl"}
      text-white transition-all duration-300
      relative bg-black text-black dark:text-black dark:bg-gray-200
      hover:shadow-lg hover:bg-black/90 dark:hover:bg-white/80 gap-2
      max-w-xs
      overflow-hidden  
    `;

  // Animation variants
  const variants = {
    hover: {
      scale: 1.05, // Scale up on hover
      rotate: [0, 5, -5, 0], // Subtle shake effect
      transition: { duration: 0.3 }, // Duration of hover effect
    },
    tap: {
      scale: 0.95, // Scale down on click
      transition: { duration: 0.2 }, // Duration of tap effect
    },
    iconHover: {
      x: [0, 10, -10, 0], // Move icon left and right
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={variants}
      whileHover="hover" // Use hover animation
      whileTap="tap" // Use tap animation
    >
      {showIcon ? (
        icon
      ) : (
        <>
          {isHovered && (
            <motion.span
              className="ml-2"
              animate={isHovered ? "iconHover" : { x: 0 }} // Animate icon position on hover
              variants={variants}
            >
              {icon}
            </motion.span>
          )}
        </>
      )}

      {label}
    </motion.button>
  );
};

export default CustomButton;
