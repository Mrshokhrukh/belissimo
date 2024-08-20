import { HiPlus } from "react-icons/hi";
// import { IoClose } from "react-icons/io5";
// import { useState } from "react";

import FormatPrice from "./formatPrice";

interface Props {
  data: any;
}

const Masalliqlar = ({ data }: Props) => {
  // const [selectedIngs, setSelectedIngs] = useState<any>();
  
  return (
    <div className="mt-3.5 grid grid-cols-3 gap-3">
      {data?.pizza_products.map((item: any, i: number) => {
        return (
          <div
            key={i}
            className={`relative bg-white shadow-cardshadow rounded-2xl h-[160px] cursor-pointer `}
            onClick={() => ""}
          >
            <span className="absolute top-2 left-2 bg-graybtn rounded-full p-1">
              <HiPlus />
            </span>
            {/* <span className="absolute top-2 left-2 bg-green rounded-full p-1 text-white">
              <IoClose />
            </span> */}
            <div className="h-full flex items-center justify-center gap-2 flex-col p-2">
              <img src={item?.image} alt="" className="w-[70%]" />
              <p className="text-sm">{item?.productTitle}</p>
              <p className="text-sm font-semibold">
                <FormatPrice price={item?.productPrice} /> so'm
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Masalliqlar;
