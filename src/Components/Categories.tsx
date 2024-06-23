import { categories } from "../db/data";

const Categories = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4">
        {categories.map((val: any) => {
          return (
            <div className="py-1.5 px-3.5 bg-graybtn text-sm capitalize rounded-full cursor-pointer hover:bg-lightgreen transition duration-150">
              {val}
            </div>
          );
        })}
      </div>
      <div
        id="cart"
        className="w-[140px] py-1.5 bg-cartbtnred text-white rounded-full text-md font-normal cursor-pointer transition-all duration-300 hover:w-[160px] justify-center flex"
      >
        Savatcha | 0
      </div>
    </div>
  );
};

export default Categories;
