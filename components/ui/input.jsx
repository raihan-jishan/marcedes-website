import FormLabel from "./formLabel";

export const Input = ({ label, icon, placeholder }) => {
  return (
    <div className="relative">
      <FormLabel label={label} />
      <div className="flex items-center bg-transparent border border-[#3f3f3f] rounded-lg">
        {/* Icon */}
        <span className="absolute left-4 text-[#6B7280]">{icon}</span>

        {/* Input Field */}
        <input
          type="text"
          name="name"
          id="name"
          placeholder={placeholder}
          className="w-full pl-12 py-4 rounded-lg text-lg text-[#6B7280] bg-transparent focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] transition-all duration-300"
        />
      </div>
    </div>
  );
};

export const AddressInput = ({ placeholder, icon }) => {
  return (
    <div className="relative w-full">
      <div className="flex items-center bg-transparent border border-[#000000] rounded-lg">
        {/* Icon */}
        <span className="absolute left-4 max-lg:left-2 text-[#6B7280]">
          {icon}
        </span>

        <input
          type="text"
          name="area"
          id="area"
          placeholder={placeholder}
          className="w-full px-12 max-lg:px-8 py-4 max-lg:text-center  rounded-lg border border-[#434242] bg-transparent text-lg max-lg:text-sm text-[#6B7280] focus:border-[#333333] focus:ring-2 focus:ring-[#6A64F1] transition-all duration-300
            sm:px-6 md:px-8 lg:px-12"
        />
      </div>
    </div>
  );
};
