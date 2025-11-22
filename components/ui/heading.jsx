"use client";
import { motion } from "framer-motion"; 
export default function Heading() {
  const text = "Crafted for Perfection.";
 
  // Framer Motion variants for each letter
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 100,
      },
    }),
  };
 
  return (
    <h1 className="text-purple-300 text-4xl md:text-[4rem] font-extrabold font-Montserrat drop-shadow-lg -mt-20 flex flex-wrap justify-center max-lg:text-[3rem] max-lg:leading-[3rem]  ">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterAnimation}
          initial="hidden"
          animate="visible"
        >
          {char === " " ? "\u00A0" : char} {/* preserve spaces */}
        </motion.span>
      ))}
    </h1>
  );
}
