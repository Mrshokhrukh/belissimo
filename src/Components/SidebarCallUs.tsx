import React from "react";
import { IoMdCall } from "react-icons/io";
type SidebarCallUsProps = {};

const SidebarCallUs: React.FC<SidebarCallUsProps> = () => {
  return (
    <a href="tel:+998915236003" className="mt-4 bg-graybtn rounded-full cursor-pointer p-2.5 flex justify-center">
      <p className="text-lightgray font-semibold flex items-center gap-3">
        <span className="text-xl">
          <IoMdCall />
        </span>
        Bizga qo'ng'iroq
      </p>
    </a>
  );
};
export default SidebarCallUs;
