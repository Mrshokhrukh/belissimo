import { useDispatch } from "react-redux";
import { products } from "../db/data";
import { addProduct, calculateSum } from "../redux/CartSlice";

// interface Props {}

const ProductRecommendationInUserCart = () => {
  let dispatch = useDispatch();
  return (
    <div className="mt-5 pb-10">
      <p className="font-medium text-xl">Qo'shishni maslahat beramiz</p>
      <div className="mt-1 flex gap-2 whitespace-nowrap overflow-auto p-4">
        {products
          .filter((val) => val.category != "combo")
          .map((pr) => {
            return (
              <div
                className="cursor-pointer p-3 rounded-xl min-w-[160px] h-[170px] bg-white shadow-recommended 
              flex items-center justify-center flex-col gap-1 hover:scale-105 transition duration-300"
                key={pr.id}
                onClick={() => {
                  dispatch(addProduct(pr.id));
                  dispatch(calculateSum());
                }}
              >
                <img src={pr.img} alt="" />
                <p className="font-semibold h-[20px]">{pr.name}</p>
                <p className="font-light text-cardDescColor h-[20px]">{pr.price}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductRecommendationInUserCart;
