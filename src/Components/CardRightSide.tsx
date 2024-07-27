import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface Props {}

const CardRightSide = ({}) => {
  let sum = useSelector((state: RootState) => state.userCart.totalSum);
  return (
    <div>
      <div className="flex gap-3">
        <input
          type="number"
          className="flex-1 bg-graybtn
                 text-black outline-none border-none p-2.5 px-3.5 rounded-[13px]"
          placeholder="Promokodni kiriting"
        />
        <button className="text-white font-semibold flex-1 bg-blackgray p-3 px-3.5 rounded-full hover:bg-black transition-all duration-200">
          Qo'llash
        </button>
      </div>
      <p className="hidden bg-lightred font-light text-cartbtnred my-3 mx-4 rounded-md px-3 py-1">
        xato kiritldi
      </p>
      <div className="p-4 px-5 bg-white shadow-cardshadow mt-5 flex flex-col gap-2 rounded-2xl">
        <div className="flex justify-between">
          <p className="font-light">Yetkazib berish</p>
          <p className="font-light">Bepul</p>
        </div>
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl">Umumiy narx</h2>
          <h2 className="font-semibold text-xl">{Number(sum)} so'm</h2>
        </div>
        <button className="hover:bg-lightgreen transition-all duration-300 border-2 border-green hover:text-green bg-green p-3 rounded-full font-semibold text-white mt-5">
          Keyingisi
        </button>
      </div>
    </div>
  );
};

export default CardRightSide;
