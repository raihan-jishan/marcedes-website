import AnimateCard from "@/global/animation";
import { AlignVerticalJustifyStart, Heart, Telescope } from "lucide-react";
import Image from "next/image";
import CustomButton from "../customButton";

export const ImageCard = ({ data }) => {
  return (
    <AnimateCard>
      <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white dark:bg-black hover:shadow-xl transition-shadow duration-300">
        <Image
          className="w-full"
          src={data.image}
          alt={data.name}
          width={300}
          height={200}
        />
        <div className="px-7 py-4">
          <div className="font-semibold text-xl mb-2 text-black dark:text-gray-100">{data.name}</div>
          
          <p className="text-gray-900 dark:text-gray-100 text-[1.1rem] font-semibold">
            {data.description}
          </p>
        </div>
        {/* btn */}
       <div className="flex items-center justify-between mt-5 m-2">
       <CustomButton label={'explore now'} paddingMedium roundedFull  
       icon={<Telescope />}
       />
       <div className="flex gap-3">
       <Heart />
       <AlignVerticalJustifyStart />
       </div>
       </div>
      </div>
    </AnimateCard>
  );
};
