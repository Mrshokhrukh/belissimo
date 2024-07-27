import { products } from "../db/data";

// interface Props {}

const ProductRecommendationInUserCart = () => {
  return (
    <div className="mt-5 pb-10">
      <p className="font-medium text-xl">Qo'shishni maslahat beramiz</p>
      <div className="mt-1 flex gap-2 whitespace-nowrap overflow-auto p-4">
        {products.map((pr) => {
          return (
            <div
              className="cursor-pointer p-3 rounded-xl min-w-[160px] h-[170px] bg-white shadow-recommended 
              flex items-center justify-center flex-col gap-1"
              key={pr.id}
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
