import { FiEdit2 } from "react-icons/fi";
import { ChangeCategory } from "../hooks/ContextProvider";
import { useContext } from "react";

type Props = {};

const MapEditField = (props: Props) => {
  const { deliveryText } = useContext(ChangeCategory);
  return (
    <div className="w-full max-w-[714px] text-sm font-medium h-[41px] cursor-pointer flex items-center justify-between px-4 border border-orangeborder rounded-xl text-orange bg-lightorange">
      {deliveryText}
      <span className="text-xl">
        <FiEdit2 />
      </span>
    </div>
  );
};

export default MapEditField;
