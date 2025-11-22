import React from "react";
import { HeroBtn } from "./ui/button";
import { Input, AddressInput } from "./ui/input";
import {
  Building2,
  EthernetPort,
  Grid2x2,
  Mail,
  NotebookTabs,
  Phone,
  UserIcon,
} from "lucide-react";

const PlaceBooking = () => {
  return (
    <div className="relative mx-auto w-full max-w-[90rem] p-8 rounded-lg shadow-xl">
      {/* <!-- Background Image Layer --> */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
        style={{ backgroundImage: "url('/assets/feature-bg.jpg')" }}
      ></div>

      {/* <!-- Form --> */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 relative max-lg:flex max-lg:flex-col">
        {/* Left Side - Personal Details */}
        <div className="space-y-6 max-lg:space-y-8">
          <Input
            icon={<UserIcon className="h-6 w-6" />}
            label={"Full Name"}
            placeholder={"Enter full name"}
          />

          <Input
            icon={<Phone className="h-6 w-6" />}
            label={"Phone Number"}
            placeholder={"Enter your phone number"}
          />

          <Input
            icon={<Mail className="h-6 w-6" />}
            label={"Email Address"}
            placeholder={"Enter your email"}
          />
        </div>

        {/* Right Side - Address Details */}
        <div className="space-y-6">
          <div>
            <label className="block text-2xl font-semibold text-gray-100 mb-4 font-ElmsSans">
              Address Details
            </label>

            <div className="grid grid-cols-2 gap-6">
              <AddressInput
                icon={<Grid2x2 className="h-6 w-6  " />}
                placeholder={"Enter area"}
              />
              <AddressInput
                icon={<Building2 className="h-6 w-6  " />}
                placeholder={"Enter City"}
              />
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <AddressInput
                icon={<EthernetPort className="h-6 w-6  " />}
                placeholder={"Enter state"}
              />

              <AddressInput
                icon={<NotebookTabs className="h-6 w-6  " />}
                placeholder={"Post Code"}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-2 mt-8 flex items-center justify-center">
          <HeroBtn label={"Booking  Test Drive"} />
        </div>
      </form>
    </div>
  );
};
export default PlaceBooking;
