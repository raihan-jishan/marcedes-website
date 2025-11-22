"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { modelData } from "@/constants/data";
import Label from "./ui/label";
import ModelCard from "./ui/modelCard";

gsap.registerPlugin(ScrollTrigger);

const Model = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section Reveal
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // Cards Animation (Stagger)
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="mt-28 bg-gray-800/10" id="models">
      <Label label={"Models"} />

      <div className="grid grid-cols-3 p-4 gap-4 max-lg:grid-cols-1 max-lg:p-0">
        {modelData.map((item, index) => (
          <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
            <ModelCard
              image={item.imageUrl}
              title={item.label}
              description={item.description}
              path={item.path}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Model;
