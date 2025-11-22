import Link from "next/link";

const NavLink = ({ label, path, onClick }) => {
  return (
    <li>
      <Link
        href={path ? path : "/"}
        className="block py-2 px-3 text-white  rounded-sm   md:p-0 border-b-2 border-transparent hover:border-gray-400 transition-all duration-300 hover:text-gray-200"
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
