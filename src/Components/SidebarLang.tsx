import React from "react";

type SidebarLangProps = {};

const SidebarLang: React.FC<SidebarLangProps> = () => {
  let isPickDeliveryRu = false;
  let isPickDeliveryUz = false;
  return (
    <div className="mt-6">
      <p className="text-[19px] ml-2 text-lightgray font-light">Til</p>
      <div className="flex items-center h-[45px] w-[100%] relative rounded-[50px] bg-toggleColor p-1">
        <div
          id="whitetoggler"
          className={`${
            isPickDeliveryRu ? "left-[49%]" : "left-[1%]"
          } bg-white cursor-pointer absolute transition-all duration-300 shadow-toggleshadow rounded-[50px] w-[50%] h-[86%]`}
        ></div>
        <div
          className={`${
            isPickDeliveryUz ? "text-lightgray" : "text-black"
          } absolute w-[50%] text-center left-0 flex items-center justify-center transition-all duration-500 font-medium text-sm cursor-pointer`}
          onClick={() => {
            isPickDeliveryUz = true;
            isPickDeliveryRu = false;
          }}
        >
          O'zbek tili
        </div>
        <div
          className={`${
            isPickDeliveryRu ? "text-black" : "text-lightgray"
          } absolute w-[50%] text-center right-0 flex items-center justify-center transition-all duration-500 font-medium text-sm cursor-pointer `}
          onClick={() => {
            isPickDeliveryRu = true;
            isPickDeliveryUz = false;
          }}
        >
          Русский язык
        </div>
      </div>
    </div>
  );
};
export default SidebarLang;
