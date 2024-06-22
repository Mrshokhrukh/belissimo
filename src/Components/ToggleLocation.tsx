import React, { useState } from "react";

type ToggleLocationProps = {};

const ToggleLocation: React.FC<ToggleLocationProps> = () => {
  const [isPickDelivery, setIsPickDelivery] = useState(false);
  return (
    <div className="flex items-center h-[52px] w-full max-w-[515px] relative rounded-[50px] bg-toggleColor p-1">
      <div
        id="whitetoggler"
        className={`${
          isPickDelivery ? "left-[49%]" : "left-[1%]"
        } bg-white cursor-pointer absolute transition-all duration-300 shadow-toggleshadow rounded-[50px] w-[50%] h-[86%]`}
      ></div>
      <div
        className={`${
          isPickDelivery ? "text-lightgray" : "text-black"
        } absolute w-[50%] left-0 flex items-center justify-center transition-all duration-500 font-medium text-sm cursor-pointer`}
        onClick={() => setIsPickDelivery(false)}
      >
        Yetkazib berish
      </div>
      <div
        className={`${
          isPickDelivery ? "text-black" : "text-lightgray"
        } absolute w-[50%] right-0 flex items-center justify-center transition-all duration-500 font-medium text-sm cursor-pointer `}
        onClick={() => setIsPickDelivery(true)}
      >
        Olib kelish
      </div>
    </div>
  );
};
export default ToggleLocation;
