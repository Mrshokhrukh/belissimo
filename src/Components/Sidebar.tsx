import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import LocationSelector from "./LocationSelector";
import SidebarLogin from "./SidebarLogin";
import SidebarLinks from "./SidebarLinks";
import SidebarCallUs from "./SidebarCallUs";
import SidebarLang from "./SidebarLang";
import { ChangeCategory } from "../hooks/ContextProvider";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(ChangeCategory);

  return (
    <div>
      <div
        className={`${
          isSidebarOpen ? "" : "hidden"
        } w-[100%] h-[100%] bg-black z-[100] fixed top-0 left-0 md:hidden`}
        id="authmodal"
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      <div
        className={`${
          isSidebarOpen ? "left-[0%]" : "left-[-120%]"
        } fixed top-0 z-[101] p-4 pt-7 transition-all duration-300 justify-center flex-col gap-3 w-[315px] h-[100vh]
         bg-white shadow-cardshadow rounded-lg md:left-[-120%]`}
      >
        <div
          className="absolute top-3 right-[-13%] w-[37px] h-[37px] bg-white rounded-full flex items-center justify-center 
                    text-[22px] cursor-pointer text-lightgray"
          onClick={() => setIsSidebarOpen(false)}
        >
          <IoClose />
        </div>

        <LocationSelector />
        <SidebarLogin />
        <SidebarLinks />
        <SidebarCallUs />
        <SidebarLang />
      </div>
    </div>
  );
};
export default Sidebar;
