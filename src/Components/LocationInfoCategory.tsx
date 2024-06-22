import React from "react";
import ToggleLocation from "./ToggleLocation";
import DeliveryField from "./DeliveryField";

type LocationInfoCategoryProps = {};

const LocationInfoCategory: React.FC<LocationInfoCategoryProps> = () => {
  return (
    <div className="flex gap-3 justify-between">
      <div className="">
        <ToggleLocation />
      </div>
      <div className="bg-lightgray">
        <DeliveryField />
      </div>
    </div>
  );
};
export default LocationInfoCategory;
