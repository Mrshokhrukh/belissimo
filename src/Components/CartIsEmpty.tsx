import React from "react";

interface Props {}

const CartIsEmpty = (props: Props) => {
  return (
    <div className="w-full mx-auto max-w-xl mt-10">
      <div className="flex flex-col justify-center items-center gap-10">
        <img src="https://bellissimo.uz/images/emptystate/empty-cart-icon.svg" alt="" />
        <p className="text-2xl font-bold">Hozircha sizning savatchangiz boʻsh 😕</p>
        <button
          className="text-white 
       font-semibold flex-1 bg-blackgray p-3 px-3.5 
       rounded-full hover:bg-black transition-all duration-200
       w-[250px] h-[auto]"
        >
          Menuni ko'rish
        </button>
      </div>
    </div>
  );
};

export default CartIsEmpty;
