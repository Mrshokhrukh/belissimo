import React from "react";
import { IoCall } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../assets/logo.webp";
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full bg-white">
      <div className="max-w-xl bg-white m-auto py-[20px]">
        <div id="header_left_elements" className="flex items-center gap-6">
          <img src={logo} alt="" className="max-w-[180px] max-h-[47px]" />

          <div className="flex gap-2">
            <div className="header_green_icons">
              <TiLocation className="inside_green_icon" />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <p className="text-[13px] text-lightgray leading-3 cursor-default">Shahar :</p>
              <div className="flex items-center text-[17px] leading-3 font-semibold text-green cursor-pointer hover:underline">
                Samarqand <MdOutlineKeyboardArrowDown />
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="header_green_icons gap-2">
              <IoCall className="inside_green_icon" />
              <span className="text-xl font-semibold text-green">1173</span>
            </div>
            <p className="text-[13px] text-lightgray leading-4 cursor-default hidden md:block">
              Yangi aloqa <br /> markazi
            </p>
          </div>

          <div className="header_green_icons flex gap-2">
            <TbTruckDelivery className="inside_green_icon" />
            <p className="text-[10px] text-lightgray cursor-default hidden lg:block">
              40 daqiqa ichida tekin yetkazib <br /> beramiz yoki pitsa bepul
            </p>
          </div>
        </div>
        <div id="header_right_elements">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};
export default Header;
