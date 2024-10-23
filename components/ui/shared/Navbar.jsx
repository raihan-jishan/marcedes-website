"use client";
import ToggleTheme from "@/components/ToggleTheme";
import { LoadingAnimation } from "@/global/animation";
import { Logo } from "@/utils/index";
import { Menu, Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navitem from "./Navitem";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // openNavbar
  const openNavbar = () => setNav(!nav);
  // closeNavbar
  const closeNavbar = () => setNav(false);
  return (
    <div>
      <nav className="bg-white dark:bg-black fixed w-full z-20 top-0 start-0 ">
      <LoadingAnimation>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={Logo}
              width="30"
              height="20"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              AMG
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex gap-2 max-lg:mt-2 text-black dark:text-white">
            <Search className="transition-all hover:scale-95"/>
            <ToggleTheme /> 
            <User  className="transition-all hover:scale-95"/>
            </div>
            <button
              onClick={openNavbar}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <Menu />
            </button>
          </div>
          <div
            className={
              nav
                ? "items-center justify-between  w-full md:flex md:w-auto md:order-1"
                : "items-center justify-between hidden  w-full md:flex md:w-auto md:order-1"
            }
            id="navbar-sticky"
          >
            <Navitem />
          </div>
        </div>
      </LoadingAnimation>
      </nav>
    </div>
  );
};

export default Navbar;
