import React from "react";
import ToggleLocation from "./ToggleLocation";
import MapEditField from "./MapEditField";
import ContextProvider from "../hooks/ContextProvider";

type LocationInfoCategoryProps = {};

const LocationInfoCategory: React.FC<LocationInfoCategoryProps> = () => {
  return (
    <ContextProvider>
      <div className="flex flex-col gap-3 justify-between md:flex-row">
        <div className="w-full md:w-[40%]">
          <ToggleLocation />
        </div>
        <div className="w-full md:w-[50%]">
          <MapEditField />
        </div>
      </div>
    </ContextProvider>
  );
};
export default LocationInfoCategory;
