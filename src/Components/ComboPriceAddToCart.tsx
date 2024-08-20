import { useState } from "react";

interface Props {
  productPrice: number;
  dicountPrice: number;
}

const ComboPriceAddToCart = ({ productPrice, dicountPrice }: Props) => {
  const [isBtnDisabled] = useState(true);
  
  return (
    <div className="mt-10 space-y-3">
      <div className="flex justify-between items-end">
        <p>Umumiy narx</p>
        <div className="px-3">
          <span className="text-lightgray font-semibold line-through">{dicountPrice} so'm</span>
          <p className="text-xl font-bold">{productPrice} so'm</p>
        </div>
      </div>
      <button
        disabled={isBtnDisabled}
        className={`${
          isBtnDisabled ? "cursor-not-allowed " : "cursor-pointer bg-green"
        } w-[100%] font-semibold text-white rounded-full p-3 bg-gray`}
      >
        Qo'shish
      </button>
    </div>
  );
};

export default ComboPriceAddToCart;
