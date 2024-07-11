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
        <div className="mx-auto md:mx-0 w-[65%] md:w-[40%]">
          <ToggleLocation />
          {/* https://bellissimo.uz/images/cart-icon-black.svg */}
          {/* <HiOutlineMenuAlt1 /> */}
        </div>
        <div className="mx-auto md:mx-0 w-[95%] md:w-[50%]">
          <MapEditField />
        </div>
      </div>
    </ContextProvider>
  );
};
export default LocationInfoCategory;
