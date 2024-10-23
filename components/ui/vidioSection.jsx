"use client";
import CustomButton from "@/components/customButton";
import { motion } from "framer-motion";
import { AlignStartVertical, MessageSquareText, ThumbsUp } from "lucide-react";

const VidioSection = ({ title, btnTitle, icon, vidioPath, gradientFull }) => {
  return (
    <div className="relative flex flex-col items-start justify-end h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-3/4">
        <video
          autoPlay
          muted
          loop
          className="border-none w-full h-full object-cover rounded-xl shadow-md shadow-black/20"
        >
          <source src={vidioPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Black Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-black ${
            gradientFull ? "opacity-30" : "opacity-20"
          }`}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex justify-between items-center p-10 text-white mb-8">
        <div className="flex justify-between items-center gap-16 max-lg:flex-col max-lg:gap-6">
          <motion.h1
            className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight md:leading-normal xl:text-3xl text-black dark:text-white max-lg:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {title ? title : "The Future of Luxury Driving"}
          </motion.h1>

          <CustomButton
            label={btnTitle ? btnTitle : "Explore Now"}
            paddingMedium
            icon={icon ? icon : <AlignStartVertical />}
            roundedFull
          />

          {/* Icons on the Right */}
          <div className="flex items-center justify-around gap-3 max-lg:gap-32">
            <button className="flex items-center text-black hover:text-gray-900 hover:scale-95 transition-all">
              <ThumbsUp size={32} />
            </button>
            <button className="flex items-center text-black hover:text-gray-900 hover:scale-95">
              <MessageSquareText size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VidioSection;

//   const testDriveVidio = () => {
//   <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
//     {/* Background Video */}
//     <div className="absolute top-0 left-0 w-full h-3/4">
//       <video
//         autoPlay
//         muted
//         loop
//         className="border-none w-full h-full object-cover rounded-xl shadow-md shadow-black/20"
//       >
//         <source src={vidioPath} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Black Gradient Overlay */}
//       <div
//         className={`absolute inset-0 bg-black ${
//           gradientFull ? "opacity-30" : "opacity-20"
//         }`}
//       />
//     </div>

//     {/* Content Overlay */}
//     <div className="relative z-10 flex flex-col items-center justify-center p-10 text-white mb-8">
//       <motion.h1
//         className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight md:leading-normal xl:text-3xl text-black dark:text-white text-center"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         {title ? title : "The Future of Luxury Driving"}
//       </motion.h1>

//       <CustomButton
//         label={btnTitle ? btnTitle : "Explore Now"}
//         paddingMedium
//         icon={icon ? icon : <AlignStartVertical />}
//         roundedFull
//         className="mt-4" // Add margin top for spacing
//       />

//       {/* Icons on the Bottom */}
//       <div className="flex items-center justify-around gap-3 mt-4">
//         <button className="flex items-center text-black hover:text-gray-900 hover:scale-95 transition-all">
//           <ThumbsUp size={32} />
//         </button>
//         <button className="flex items-center text-black hover:text-gray-900 hover:scale-95">
//           <MessageSquareText size={32} />
//         </button>
//       </div>
//     </div>
//   </div>;
// };
