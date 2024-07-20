import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  setComboModalOpen: any;
}

const ComboOptionSelection = ({ setComboModalOpen }: Props) => {
  return (
    <div
      className="w-full flex justify-between items-center cursor-pointer shadow-cardshadow py-3 px-5 rounded-xl hover:scale-[103%] transition-all duration-200"
      onClick={() => setComboModalOpen(true)}
    >
      <div className="flex flex-col">
        <p className="text-lightgray font-sm font-light">Pitsa</p>
        <h2 className="font-medium">Tanlash</h2>
      </div>
      <span className="text-xl text-green">
        <MdKeyboardArrowRight />
      </span>
    </div>
  );
};

export default ComboOptionSelection;
