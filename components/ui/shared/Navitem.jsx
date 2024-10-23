import Link from "next/link";
import { NavigationMenuDemo } from "../drop-menu";

const Navitem = () => {
  return (
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-950 dark:border-gray-700 dark:text-white text-black ">
      <li>
        <Link
          href="#"
          className="block py-2 px-3  rounded  md:text-lg md:font-semibold md:p-0  "
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="block py-2 px-3  rounded  md:text-lg md:font-semibold md:p-0  "
        >
          Designs
        </Link>
      </li>
      <li>
       <NavigationMenuDemo name={'links'}  />
      </li>



      
    </ul>
  );
};

export default Navitem;

/* Search

Login
Mercedes-Benz brand logo

Art & Culture

Sustainability

Design

Innovation */
