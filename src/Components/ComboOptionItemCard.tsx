import React from "react";

interface Props {
  productData: any;
}

const ComboOptionItemCard = ({ productData }: Props) => {
  return (

      <div className="gap-2 p-2 flex flex-col justify-center items-center cursor-pointer h-[280px] shadow-cardshadow rounded-xl hover:scale-[102%] transition-all duration-200">
        <img src={productData?.img} alt="" className="h-[50%] object-cover mb-5" />
        <button className="rounded-full border-green border-2 bg-lightgreen py-1 px-2.5 font-semibold text-green">
          +{productData?.price} so'm
        </button>
        <p className="font-medium">{productData?.name}</p>
      </div>
  
  );
};

export default ComboOptionItemCard;
