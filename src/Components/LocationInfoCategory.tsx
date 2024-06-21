import React from "react";
import ToggleLocation from "./ToggleLocation";
import DeliveryField from "./DeliveryField";

type LocationInfoCategoryProps = {};

const LocationInfoCategory: React.FC<LocationInfoCategoryProps> = () => {
  return (
    <div className="flex gap-3 justify-between">
      <div className="bg-cartbtnred">
        <ToggleLocation />
      </div>
      <div className="bg-cartbtnred">
        <DeliveryField />
      </div>
    </div>
  );
};
export default LocationInfoCategory;
