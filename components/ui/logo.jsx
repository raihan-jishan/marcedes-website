import Image from "next/image";
const Logo = () => {
  return (
    <a href="" className="flex items-center space-x-2 rtl:space-x-reverse">
      <Image
        src="/assets/logo.webp"
        width="30"
        height="20"
        className="h-8"
        alt="marcedes website logo"
      />
      <span className="self-center text-2xl max-lg:text-xl font-semibold whitespace-nowrap  text-gray-100">
        Marcedes
      </span>
    </a>
  );
};

export default Logo;
