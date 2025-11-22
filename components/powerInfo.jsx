"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Gauge, Settings, CircleGauge } from "lucide-react";
import { ModelInfoCard } from "./ui/card";

export default function PowerSection({
  torgue,
  zeroHundred,
  kw,
  engineConfig,
  gearbox,
  topspeed,
}) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const powerConfig = [
    {
      info: "NM",
      icon: <Gauge size={20} />,
      label: torgue,
      description: engineConfig,
    },
    {
      info: "0-100 km/h",
      icon: <Settings size={20} />,
      label: zeroHundred,
      description: gearbox,
    },
    {
      info: "kW",
      icon: <CircleGauge size={20} />,
      label: kw,
      description: topspeed,
    },
  ];
  useEffect(() => {
    gsap.from(cardsRef.current, {
      y: 50,
      scale: 0.9,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <section
      id="power-section"
      ref={sectionRef}
      className="relative p-10 grid grid-cols-3 max-lg:grid-cols-1 gap-6"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/assets/infobg.jpeg')" }}
      ></div>

      {/* Cards */}
      {powerConfig.map((item, index) => {
        return (
          <ModelInfoCard
            key={index}
            icon={item.icon}
            info={item.info}
            label={item.label}
            description={item.description}
          />
        );
      })}
    </section>
  );
}
