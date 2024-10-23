"use client";
import BlinkingEffect from "@/global/BlinkingEffect";
import { car, download } from "@/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HeroImage = () => {
  const images = [download, car];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(true); // Start loading the second image
      setCurrentImage(images[1]);
    }, 2500); // Show the first image for 3 seconds

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false); // Image has loaded, stop loading
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }} // Start invisible
        animate={{ opacity: 1 }} // Fade in
        transition={{ duration: 1 }} // Duration of the fade
        className={`${isLoading ? "air" : ""} ${!isLoading ? "slide-in-effect" : ""}`} // Fixed template string
      >
        <div ref={ref}>
          <Image
            src={currentImage}
            alt="Hero"
            layout="responsive" // Ensures the image maintains aspect ratio
            width={1920} // Set a width (adjust as necessary)
            height={1080} // Set a height (adjust as necessary)
            onLoad={handleImageLoad} // Trigger on load
          />
        </div>
      </motion.div>
      <BlinkingEffect />
    </div>
  );
};

export default HeroImage;
