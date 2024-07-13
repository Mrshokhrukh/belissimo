import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
type SidebarLoginProps = {};

const SidebarLogin: React.FC<SidebarLoginProps> = () => {
  return (
    <div className="p-5 py-5 bg-graybtn mt-4 rounded-2xl cursor-pointer">
      <div className="flex items-center gap-4">
        <span className="text-3xl">
          <AiOutlineLogin />
        </span>
        <p className="font-light ">Kirish</p>
      </div>
    </div>
  );
};
export default SidebarLogin;
