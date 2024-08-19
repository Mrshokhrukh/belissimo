import { useState } from "react";

interface Props {
  values: any[];
  setSelect?: any;
}

const Toggler = ({ values, setSelect }: Props) => {
  const [pizzaSize, setPizzaSize] = useState<number>(1);

  const togglerWidth =
    values.length == 1
      ? "w-[96%]"
      : values.length == 2
      ? "w-[49%]"
      : values.length == 3
      ? "w-[33%]"
      : values.length == 4
      ? "w-[25%]"
      : "w-[20%]";

  return (
    <div className="flex relative w-full h-[47px] bg-toggleColor rounded-full p-1 transition-all duration-300">
      {values.length === 1 ? (
        <div
          id="toggler"
          className={`bg-white absolute 
            ${togglerWidth} h-[40px] transition-all duration-300 shadow-toggleshadow  rounded-full cursor-pointer`}
        ></div>
      ) : values.length === 2 ? (
        <div
          id="toggler"
          className={`${pizzaSize == 1 ? "left-[2%]" : "left-[49%]"} bg-white absolute 
        ${togglerWidth} h-[40px] transition-all duration-300 shadow-toggleshadow  rounded-full cursor-pointer`}
        ></div>
      ) : values.length === 3 ? (
        <div
          id="toggler"
          className={`${pizzaSize == 1 ? "left-[1%]" : pizzaSize == 2 ? "left-[34%]" : "left-[66%]"} bg-white absolute 
            ${togglerWidth} h-[40px] transition-all duration-300 shadow-toggleshadow  rounded-full cursor-pointer`}
        ></div>
      ) : values.length === 4 ? (
        <div
          id="toggler"
          className={`${
            pizzaSize == 1
              ? "left-[1%]"
              : pizzaSize == 2
              ? "left-[24%]"
              : pizzaSize == 3
              ? "left-[50%]"
              : pizzaSize === 4
              ? "left-[74%]"
              : ""
          } bg-white absolute 
            ${togglerWidth} h-[40px] transition-all duration-300 shadow-toggleshadow  rounded-full cursor-pointer`}
        ></div>
      ) : (
        <div
          id="toggler"
          className={`${
            pizzaSize == 1
              ? "left-[1%]"
              : pizzaSize == 2
              ? "left-[20%]"
              : pizzaSize == 3
              ? "left-[40%]"
              : pizzaSize === 4
              ? "left-[60%]"
              : "left-[79%]"
          } bg-white absolute 
            ${togglerWidth} h-[40px] transition-all duration-300 shadow-toggleshadow  rounded-full cursor-pointer`}
        ></div>
      )}

      {values.map((toggle, i) => {
        return (
          <div
            key={i}
            className={`${
              pizzaSize == i + 1 ? "text-black" : "text-lightgray"
            } z-10 flex-1 h-full font-medium text-sm cursor-pointer rounded-full justify-center flex items-center transition-all duration-75 delay-200`}
            onClick={() => {
              setPizzaSize(i + 1);
              setSelect(toggle);
            }}
          >
            {toggle}
          </div>
        );
      })}
    </div>
  );
};

export default Toggler;
