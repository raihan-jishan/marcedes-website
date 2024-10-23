"use client";
import CustomButton from "@/components/customButton";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import Image from "next/image"; // Importing the Image component

const ImageSection = ({ text, description, imageUrl, icon, ctaText }) => {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={
            imageUrl
              ? imageUrl
              : "https://www.mercedes-benz.ca/content/dam/mb-nafta/ca/myco/my24/g-class/class-page/series/MBCAN-2024-G-SUV-HERO-DR.jpg"
          }
          alt="Professional Mercedes"
          layout="fill"
          className="border-none object-cover rounded-xl shadow-md shadow-black/20"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-start h-full p-6 md:p-10 text-white mb-8">
        <div className="flex flex-col items-start max-w-md">
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-gray-100 max-lg:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {text ? text : " Digital Companion."}
          </motion.h1>

          <p className="mt-3 text-lg md:text-xl">
            {description ? description : "Knows you like no other car."}
          </p>

          <CustomButton
            label={ctaText ? ctaText : "Discover"}
            paddingMedium
            roundedFull
            bgWhite
            icon={icon ? "" : <Gift />}
            showIcon
            className="mt-6 md:mt-8 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
