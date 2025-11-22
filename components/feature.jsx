"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FeatureCard } from "./ui/card";
import { featureCardData } from "@/data";
import Label from "./ui/label";

gsap.registerPlugin(ScrollTrigger);

const Feature = () => {
  const Ref = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // === Parallax background slow zoom ===
      gsap.to(bgRef.current, {
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // ===  fade-up ===
      gsap.from(Ref.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: Ref.current,
          start: "top 85%",
        },
      });

      // === Feature cards stagger animation ===
      gsap.from(".feature-card", {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: Ref.current,
          start: "top 80%",
        },
      });
    }, Ref);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={Ref}
      className="mt-14 p-5 relative rounded-2xl overflow-hidden shadow-lg feature-card"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center scale-100"
        style={{ backgroundImage: "url('/assets/feature-bg.jpg')" }}
      ></div>

      {/* === Dark overlay for text contrast === */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>

      <div className="relative z-10">
        <Label label={"What Makes Us Different"} />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2 max-lg:grid-cols-1 max-lg:gap-3">
          {featureCardData.map((item) => (
            <div key={item.id} className="feature-card">
              <FeatureCard
                label={item.label}
                description={item.description}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
