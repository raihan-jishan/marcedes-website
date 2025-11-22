import Logo from "@/components/ui/logo";
import { Home, Search, User } from "lucide-react";

const TopBar = () => {
  const iconStyle =
    "text-purple-100 hover:scale-95 transition-all cursor-pointer ";
  return (
    <div className="flex items-center justify-between">
      <div className="p-5">
        <Logo />
      </div>

      <div className="flex items-center   p-3 gap-0.5">
        <Home size={30} className={`${iconStyle}`} />
        <User size={30} className={`${iconStyle}`} />
        <Search size={30} className={`${iconStyle}`} />
      </div>
    </div>
  );
};

export default TopBar;
