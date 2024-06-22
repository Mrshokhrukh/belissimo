import React from "react";

type ToggleLocationProps = {};

const ToggleLocation: React.FC<ToggleLocationProps> = () => {
  return (
    <div className="flex h-[57px] w-[455px] rounded-[50px] bg-toggleColor p-1">
      <div className="flex-1 flex items-center justify-center font-semibold text-sm text-lightgray rounded-[50px] text-gray cursor-pointer bg-white shadow-toggleshadow text-black">
        Yetkazib berish
      </div>
      <div className="flex-1 flex items-center justify-center font-semibold text-sm text-lightgray rounded-[50px] cursor-pointer ">
        Olib kelish
      </div>
    </div>
  );
};
export default ToggleLocation;
