import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
type LocationSelectorProps = {};
let cities = [
  "Samarqand",
  "Toshkent",
  "Andijon",
  "Farg'ona",
  "Chirchiq",
  "Buxoro",
  "Olmaliq",
  "Nurafshon",
  "Angren",
];
const LocationSelector: React.FC<LocationSelectorProps> = () => {
  const [dropdownOpen] = useState(false);

  return (
    <div className="transition-all duration-200">
      <div
        className={`${
          dropdownOpen
            ? "shadow-toggleshadow rounded-full p-2.5 px-3"
            : "bg-graybtn rounded-full cursor-pointer p-2.5 px-3"
        } flex justify-between items-center`}
      >
        <p className="font-medium">Samarqand</p>
        <span className="text-2xl">{dropdownOpen ? <IoMdArrowDropup /> : <MdArrowDropDown />}</span>
      </div>
      <div className={`${dropdownOpen ? "" : "hidden"} transition-all duration-200 `}>
        {cities.map((city: any, i) => {
          return (
            <p
              key={i}
              className="transition-all duration-200 font-light p-2.5 cursor-pointer hover:text-lightgray"
            >
              {city}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default LocationSelector;
