import React from "react";

interface Props {
  product: any;
}

const Card = ({ product }: Props) => {
  return (
    <div className="h-[320px] hover:scale-105 p-3 transition duration-200 bg-white w-full rounded-xl shadow-cardshadow cursor-pointer">
      <img src={product.img} alt="" />
      <div className="px-1 mt-2 space-y-1">
        <h2 className="font-bold capitalize text-lg">{product.name}</h2>
        <p className="text-sm font-light">{product.desc}</p>
      </div>
    </div>
  );
};

export default Card;
