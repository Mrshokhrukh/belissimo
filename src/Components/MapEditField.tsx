import { FiEdit2 } from "react-icons/fi";

type Props = {};

const MapEditField = (props: Props) => {
  return (
    <div className="w-full max-w-[714px] text-sm font-semibold h-[41px] cursor-pointer flex items-center justify-between px-4 border border-orangeborder rounded-xl text-orange">
      Yetkazib berish manzilini tanlang
      <span className="text-xl">
        <FiEdit2 />
      </span>
    </div>
  );
};

export default MapEditField;
