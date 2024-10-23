import { LoadingAnimation } from "@/global/animation";
import { Car, Telescope } from "lucide-react";
import CustomButton from "./customButton";
import HeroHeading from "./ui/heroHeading";
import HeroImage from "./ui/heroImage";

const Hero = () => {
  return (
    <section class="bg-white dark:bg-black mt-2">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 max-lg:flex max-lg:flex-col-reverse">
        <div class="mr-auto place-self-center lg:col-span-7">
          <LoadingAnimation>
            <HeroHeading />

            <p class="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-[1.2rem] dark:text-gray-400">
              Discover luxury and performance in our innovative lineup of
              vehicles. Experience cutting-edge technology and timeless design.
              Drive the extraordinary.
            </p>

            <div className="flex gap-3 max-lg:flex-col max-lg:gap-3">
              <CustomButton
                label={"Get Test Drive"}
                icon={<Car />}
                roundedFull
              />
              <CustomButton
                label={"Discover more"}
                icon={<Telescope />}
                roundedFull
              />
            </div>
          </LoadingAnimation>
        </div>
        <div class="  lg:mt-0 lg:col-span-5 lg:flex">
          <LoadingAnimation>
            <HeroImage />
          </LoadingAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
