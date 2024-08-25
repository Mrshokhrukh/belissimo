import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import FormatPrice from "./formatPrice";
import { useRef } from "react";
import { AiOutlineDelete } from "react-icons/ai";
type Props = {
  product: any;
  resetData: any;
};

const CartProduct = ({ product, resetData }: Props) => {
  let dataRef = useRef<any>();
  let cartData = JSON.parse(localStorage.getItem("user-cart") || "[]");

  const increaseQuant = (data: any) => {
    const existingProductIndex = cartData.findIndex((item: any) => item._id === data._id);
    cartData[existingProductIndex].quantity += 1;
    localStorage.setItem("user-cart", JSON.stringify(cartData));
    resetData(cartData);
  };
  const decreaseQuant = (data: any) => {
    const existingProductIndex = cartData.findIndex((item: any) => item._id === data._id);
    if (cartData[existingProductIndex].quantity > 1) {
      cartData[existingProductIndex].quantity -= 1;
      localStorage.setItem("user-cart", JSON.stringify(cartData));
      resetData(cartData);
    } else {
      cartData = cartData.filter((val: any) => val._id !== data._id);
      localStorage.setItem("user-cart", JSON.stringify(cartData));
      resetData(cartData);
    }
  };

  const hoverElement = (pos: string) => {
    if (pos == "enter") {
      dataRef.current.style.opacity = "1";
    } else {
      dataRef.current.style.opacity = "0";
    }
  };
  const removeItem = (data: any) => {
    cartData = cartData.filter((val: any) => val._id !== data._id);
    localStorage.setItem("user-cart", JSON.stringify(cartData));
    resetData(cartData);
  };

  return (
    <div
      onMouseEnter={() => hoverElement("enter")}
      onMouseLeave={() => hoverElement("leave")}
      className="w-[100%] p-3 py-3.5 px-2 pr-6 flex justify-between bg-white shadow-cardshadow rounded-2xl cursor-pointer relative"
    >
      <div className="flex items-center">
        <img src={product?.image} alt="" className="w-[120px]" />
        <div className="ml-5">
          <p className="font-light text-lg">{product?.title}</p>
          <span className="text-gray font-light ">{"qalin"}</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <button className="rounded-xl p-1 bg-graybtn py-1.5 flex items-center justify-around">
          <span className="cursor-pointer" onClick={() => decreaseQuant(product)}>
            <FiMinus />
          </span>
          <p>{product?.quantity}</p>
          <span className="cursor-pointer" onClick={() => increaseQuant(product)}>
            <FiPlus />
          </span>
        </button>
        <p className="font-semibold">
          {<FormatPrice price={product.new_price * product.quantity} />} so'm
        </p>
      </div>
      <div
        ref={dataRef}
        className="opacity-0 transition-all duration-200 absolute z-10 top-[85%] right-2"
      >
        <button
          onClick={() => removeItem(product)}
          className="bg-[#ff000017] hover:bg-[#ff00002d] shadow-toggleshadow border-[1px] border-[#f00909e8] py-1 px-3 rounded text-cartbtnred"
        >
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
