import { useState } from "react";
import { categories } from "../db/data";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("combo");
  const handleClick = (val: string) => {
    window.location.href = `#${val}`;
    setActiveCategory(val);
  };

  return (
    <div className="max-w-xl w-[100%] flex items-center justify-between py-2">
      <div className="flex gap-4 overflow-x-auto w-full" id="scrollnav">
        {categories.map((val: any, i) => {
          return (
            <div
              className={`${
                activeCategory === val ? "bg-green text-white" : "hover:bg-hoverGreen"
              }  py-[5px] px-3.5 bg-graybtn text-sm capitalize rounded-full cursor-pointer transition duration-150`}
              onClick={() => handleClick(val)}
              key={i}
            >
              {val}
            </div>
          );
        })}
      </div>
      <div
        id="cart"
        className="absolute right-2 w-[140px] py-1.5 bg-cartbtnred text-white rounded-full text-md font-normal cursor-pointer transition-all duration-300 hover:w-[160px] justify-center flex"
      >
        Savatcha | 0
      </div>
    </div>
  );
};

export default Categories;
