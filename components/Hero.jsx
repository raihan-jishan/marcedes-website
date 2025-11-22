import Heading from "./ui/heading";
import { HeroBtn } from "./ui/button";
import Wrapper from "@/animation/wrapper";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <Wrapper>
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        {/* === Background Image === */}
        <img
          src="/assets/hero-image.jpg"
          alt="Mercedes Hero"
          className="absolute inset-0 w-full h-full object-contain object-center mt-36"
        />

        {/* === Overlay for readability === */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* === Hero Text Content === */}
        <div className="relative z-10 text-center text-gray-200 px-6">
          <Heading />
          <Wrapper>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <HeroBtn label={"Book a Test Drive"} />
            </div>
          </Wrapper>
        </div>

        {/* === Decorative Bottom Fade === */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/60 to-transparent"></div>
      </section>
    </Wrapper>
  );
};

// modelHero
export const ModelHero = ({ shortSologan, heroTitle, imageUrl }) => {
  return (
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 max-lg:flex max-lg:flex-col-reverse">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('/assets/feature-bg.jpg')" }}
      ></div>
      <div className="mr-auto place-self-center lg:col-span-7 max-lg:mt-10">
        <label className="text-purple-200/60 font-semibold text-lg  ">
          {shortSologan}
        </label>
        <h1 className="max-w-2xl mb-4 text-4xl  font-extrabold md:text-5xl xl:text-[4.5rem] bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 bg-clip-text text-transparent max-lg:text-5xl   ">
          {heroTitle}
        </h1>

        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-purple-200 rounded-lg bg-purple-200/10 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Configure Now
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className=" lg:mt-0 lg:col-span-4 lg:flex">
        <Image
          src={imageUrl}
          className=" rotate-0 rounded-lg"
          width={1000}
          height={500}
          alt="mockup"
        />
      </div>
    </div>
  );
};
