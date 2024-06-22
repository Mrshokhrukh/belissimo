import React from "react";
import ToggleLocation from "./ToggleLocation";
import MapEditField from "./MapEditField";

type LocationInfoCategoryProps = {};

const LocationInfoCategory: React.FC<LocationInfoCategoryProps> = () => {
  return (
    <div className="flex gap-3 justify-between">
      <div className="w-[40%]">
        <ToggleLocation />
      </div>
      <div className="w-[50%]">
        <MapEditField />
      </div>
    </div>
  );
};
export default LocationInfoCategory;
