import { useState } from "react";

interface Props {}

const TogglePizzaSize = ({}: Props) => {
  const [pizzaSize, setPizzaSize] = useState<number>(1);

  return (
    <div className="flex relative w-full h-[47px] bg-toggleColor rounded-full p-1 transition-all duration-300">
      <div
        id="toggler"
        className={`${
          pizzaSize == 1 ? "left-[1%]" : pizzaSize == 2 ? "left-[34%]" : "left-[66%]"
        } bg-white absolute w-[33%] h-[40px] transition-all duration-300 shadow-toggleshadow  rounded-full cursor-pointer`}
      ></div>
      <div
        className={`${
          pizzaSize == 1 ? "text-black" : "text-lightgray"
        } z-10 flex-1 h-full font-medium text-sm cursor-pointer rounded-full justify-center flex items-center transition-all duration-75 delay-200`}
        onClick={() => setPizzaSize(1)}
      >
        Kichik
      </div>
      <div
        className={`${
          pizzaSize == 2 ? "text-black" : "text-lightgray"
        } z-10 flex-1 h-full font-medium text-sm cursor-pointer rounded-full justify-center flex items-center transition-all duration-75 delay-200`}
        onClick={() => setPizzaSize(2)}
      >
        O'rtacha
      </div>
      <div
        className={`${
          pizzaSize == 3 ? "text-black" : "text-lightgray"
        } z-10 flex-1 h-full font-medium text-sm cursor-pointer rounded-full justify-center flex items-center transition-all duration-75 delay-200 `}
        onClick={() => setPizzaSize(3)}
      >
        Katta
      </div>
    </div>
  );
};

export default TogglePizzaSize;
