import Image from "next/image";
import { StoryBtn } from "./button";
import { BookText } from "lucide-react";

export const FeatureCard = ({ label, icon, description, point }) => {
  return (
    <div className="flex items-center justify-between flex-col p-5 relative overflow-hidden   bg-gradient-to-tl from-purple-200/10   ">
      {/* === Background Image === */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url('/assets/feature-bg.jpg')" }}
      ></div>

      {/* === Optional Overlay for better text contrast === */}
      <div className="absolute inset-0     opacity-5"></div>

      {/* === Content === */}
      <div className="relative z-10 text-white">
        <label
          htmlFor="point"
          className="block    font-extrabold opacity-80 text-2xl   tracking-widest"
        >
          {point}
        </label>
        <h1 className="text-3xl max-lg:text-4xl font-semibold font-openSans mt-2 tracking-tight bg-gradient-to-r from-purple-100 via-purple-400 to-purple-600 bg-clip-text text-transparent">
          {label}
        </h1>
        <p className="w-[90%] mt-2 text-gray-600">{description}</p>
      </div>

      <div className="relative z-10 mt-4 max-lg:flex max-lg:items-center max-lg:justify-center">
        <Image
          src={icon}
          width={320}
          height={300}
          alt="engine"
          className="w-[50%] "
        />
      </div>
    </div>
  );
};

export const StoryCard = ({ label, imageUrl, description, date }) => {
  return (
    <div className="relative flex flex-col   bg-black shadow-sm rounded-lg ">
      {/* === Background Image === */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/assets/feature-card.jpg')" }}
      ></div>

      {/* === Optional Overlay for better text contrast === */}
      <div className="absolute inset-0     opacity-5"></div>

      <div className="relative h-56   overflow-hidden text-white rounded-md">
        <Image src={imageUrl} width={500} height={300} alt="card-image" />
      </div>
      <div className="p-4">
        <div className="font-mono tracking-tighter text-[1rem]">{date}</div>
        <h6 className="mb-2 text-purple-100 text-xl font-semibold mt-4">{label}</h6>
        <p className="text-slate-300 leading-normal font-mono">{description}</p>
      </div>

      <div className="flex items-center justify-center p-4">
        <StoryBtn icon={<BookText size={20} />}>Read Story</StoryBtn>
      </div>
    </div>
  );
};

export const ModelInfoCard = ({ info, label, description, icon }) => {
  return (
    <div className=" flex  flex-col p-4 w-full h-fit max-w-2xl ">
      <span className="flex items-end justify-end font-semibold">{info}</span>
      <div className="flex flex-col items-center justify-center">
        <label htmlFor="number" className="text-9xl font-Comfortaa">
          {label}
        </label>

        <span className="flex items-center justify-center mt-3 gap-1 font-ElmsSans ">
          {icon}
          {description}
        </span>
      </div>
    </div>
  );
};
