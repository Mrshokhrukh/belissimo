import React from "react";
import ToggleLocation from "./ToggleLocation";
import MapEditField from "./MapEditField";
import ContextProvider from "../hooks/ContextProvider";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

type LocationInfoCategoryProps = {};

const LocationInfoCategory: React.FC<LocationInfoCategoryProps> = () => {
  return (
    <ContextProvider>
      <div className="flex flex-col gap-3 justify-between md:flex-row">
        <div className="md:mx-0 w-[100%] md:w-[40%] flex items-center justify-between px-3">
          <span className="block md:hidden text-[22px] cursor-pointer">
            <HiOutlineMenuAlt1 />
          </span>
          <ToggleLocation />
          <div className="relative cursor-pointer block md:hidden">
            <img
              src="https://bellissimo.uz/images/cart-icon-black.svg"
              className="w-[21px] cursor-pointer"
              alt=""
            />
            <span
              className="absolute top-[-12px] right-[-12px] w-[17px] h-[17px] flex
             items-center justify-center bg-cartbtnred rounded-full text-sm text-white"
            >
              0
            </span>
          </div>
        </div>
        <div className="mx-auto md:mx-0 w-[95%] md:w-[50%]">
          <MapEditField />
        </div>
      </div>
    </ContextProvider>
  );
};
export default LocationInfoCategory;
