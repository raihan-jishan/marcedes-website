"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ModelBtn } from "./button"; 

const ModelCard = ({ image, title, description, path }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      y: 40,
      duration: 1,
      ease: "power1.out",
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative bg-gradient-to-tl from-purple-200/10  rounded-2xl p-5 shadow-2xl overflow-hidden group 
      hover:shadow-[0_0_10px_rgba(168,85,247,0.35)] transition-all duration-500 h-fit"
    >
      {/* Purple Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-purple-400/5 to-transparent opacity-0 group-hover:opacity-10 transition-all duration-700"></div>
      {/* === Background Image === */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url('/assets/feature-bg.jpg')" }}
      ></div>

      {/* === Optional Overlay for better text contrast === */}
      <div className="absolute inset-0     opacity-5"></div>
      {/* Car Image */}
      <div className="w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover rounded-xl   transition-all duration-700"
        />
      </div>

      {/* Content */}
      <div className="mt-4 text-white">
        <h2 className="text-xl font-semibold font-Comfortaa tracking-tight font-Manrope">
          {title}
        </h2>

        <p className=" text-[1rem]  text-gray-400 font-ElmsSans mt-2">
          {description}
        </p>

        {/* CTA Button */}
        <div className="mt-6 flex items-start justify-start  ">
          <ModelBtn label={"Explore Now"} path={path}/>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
