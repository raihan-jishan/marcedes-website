"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Explore = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      y: 30,
      duration: 1,
      ease: "power1.out",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-7xl mx-auto overflow-hidden mt-10 rounded-lg"
    >
      {/* === Background Video === */}
      <video
        src="/assets/discover.mp4"
        className="w-full h-64 sm:h-[450px] object-cover z-0 bg-black/90"
        playsInline
        muted
        loop
        autoPlay
      />

      {/* === Balanced Overlay === */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div className="absolute bottom-6 left-6 text-gray-300 z-20">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
          Discover the Experience
        </h2>
        <p className="text-sm sm:text-base opacity-80">
          Immerse yourself in motion and innovation.
        </p>
      </div>
    </div>
  );
};

export default Explore;
