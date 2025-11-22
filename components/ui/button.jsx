import { MoveRight } from "lucide-react";
import Link from "next/link";

export const HeroBtn = ({ label }) => {
  return (
    <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50 border-2 border-white/15">
      <span className="z-10 pr-2">{label}</span>
      <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-700  transition-[width] group-hover:w-[calc(100%-8px)] duration-300">
        <div className="mr-3.5 flex items-center justify-center">
          <MoveRight size={30} />
        </div>
      </div>
    </button>
  );
};

export const ModelBtn = ({ label, path }) => {
  return (
    <Link
      className="bg-transparent border border-white text-gray-300  group-hover:bg-purple-300/60 group-hover:text-black group-hover:border-transparent group-hover:scale-100 transition-all p-2 px-4 rounded-full  font-semibold"
      href={path ? path : "/"}
    >
      {label}
    </Link>
  );
};

export const StoryBtn = ({ children, path, icon }) => {
  return (
    <Link
      href={path ? path : "/"}
      className="min-w-32   bg-purple-200 p-3 rounded-sm font-semibold px-8 border border-transparent text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex items-center gap-1"
    >
      {icon} {children}
    </Link>
  );
};

export const TestDriveBtn = ({ children }) => {
  return (
    <button className="bg-purple-200 font-semibold  p-3 px-5 rounded-full text-black   ">
      {children}
    </button>
  );
};
