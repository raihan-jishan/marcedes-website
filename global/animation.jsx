"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform } from "framer-motion";

export const LoadingAnimation = ({
  children,
  className,
  delay = 0.2,
  reverse,
}) => {
  return (
    <motion.div
      className={cn("w-full h-full", className)}
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: delay, duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function AnimateCard({ children }) {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]); // Reversed values
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]); // Reversed values
  const cardRotateX = useTransform(cardY, [-300, 300], [25, -25]); // Adjusted rotation values
  const cardRotateY = useTransform(cardX, [-300, 300], [-25, 25]); // Adjusted rotation values

  const handleMouseMove = (event) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };
  const isMobile = window.innerWidth <= 637;
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: isMobile ? "60vh" : "80vh",
  };

  return (
    <motion.div
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* this div can be used as the 'dotted grid' */}
      <motion.div
        style={{
          margin: "auto",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          perspective: 800,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          rotateX,
          rotateY,
        }}
        transition={{ velocity: 0 }}
      >
        <motion.div
          key="card"
          style={{
            width: 400,
            height: 250,
            transformStyle: "preserve-3d",
            perspective: 800, // Set perspective on the card
            cardRotateX,
            cardRotateY,
          }}
          transition={{ velocity: 0 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
