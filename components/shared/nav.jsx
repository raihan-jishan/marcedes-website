"use client";
import { useState } from "react";
import NavLink from "../ui/navLink";
import { navLinkData } from "@/constants";
import Logo from "../ui/logo";
import Wrapper from "@/animation/wrapper";
import { AlignHorizontalSpaceBetween, AlignVerticalJustifyEnd, AlignVerticalJustifyStart, Search, User } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  const [nav, setNav] = useState("");
  const handleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);
  return (
    <nav className="fixed w-full z-20 top-0 start-0  backdrop-blur ">
      <Wrapper>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8 max-lg:p-2">
          <Logo />
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex items-center gap-1">
              <Link href={"/[modelId]"} as={`/1`}>
                <User
                  size={30}
                  className="text-purple-200 hover:scale-95 transition-all cursor-pointer"
                />
              </Link>
              <Search
                size={28}
                className="text-purple-200 hover:scale-95 transition-all cursor-pointer"
              />
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden "
                onClick={handleNav}
              >
                <span className="sr-only">Open main menu</span>
                {nav ? <AlignVerticalJustifyEnd size={25} /> : <AlignVerticalJustifyStart size={25} />}
              </button>
            </div>
          </div>
          <div
            className={
              nav
                ? "items-center justify-between   w-full md:flex md:w-auto md:order-1"
                : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            }
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium   rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  text-center ">
              {navLinkData.map((item, index) => {
                return (
                  <NavLink key={index} label={item.label} path={item.path} onClick={closeNav} />
                );
              })}
            </ul>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};

export default Nav;
