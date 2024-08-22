import React, { useState } from "react";
import Toggler from "./Toggler";

type SidebarLangProps = {};

const SidebarLang: React.FC<SidebarLangProps> = () => {
  const [_, setLang] = useState<any>();

  return (
    <div className="mt-6">
      <p className="text-[19px] ml-2 text-lightgray font-light">Til</p>
      <Toggler values={["O'zbek tili", "Русский язык"]} setSelect={setLang} />
    </div>
  );
};
export default SidebarLang;
