import React from "react";
import { IoClose } from "react-icons/io5";
import LocationSelector from "./LocationSelector";
import SidebarLogin from "./SidebarLogin";
import SidebarLinks from "./SidebarLinks";
type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  let isSibebarOpen = true;
  return (
    <div
      className={`${isSibebarOpen ? "" : "hidden"} w-[100%] h-[100%] bg-black z-[100] fixed top-0 left-0 md:hidden`}
      id="authmodal"
    >
      <div
        className={`${
          isSibebarOpen ? "left-0" : "left-[-120%]"
        } relative p-4 pt-7 transition-all duration-300 justify-center flex-col gap-3 w-[315px] h-[100vh] bg-white shadow-cardshadow rounded-lg`}
      >
        <div className="absolute top-2 right-[-12%] w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center text-[22px] cursor-pointer text-lightgray">
          <IoClose />
        </div>

        <LocationSelector />
        <SidebarLogin />
        <SidebarLinks />
      </div>
    </div>
  );
};
export default Sidebar;
