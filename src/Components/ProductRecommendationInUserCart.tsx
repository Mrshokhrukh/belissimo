import toast from "react-hot-toast";
import { useGetProductsQuery } from "../services/api";

interface Props {
  resetData: any;
}

const ProductRecommendationInUserCart = ({ resetData }: Props) => {
  const { data: products, isLoading } = useGetProductsQuery("");

  const addToCart = (data: any) => {
    let cartData = JSON.parse(localStorage.getItem("user-cart") || "[]");
    const existingProductIndex = cartData.findIndex((item: any) => item._id === data._id);

    if (existingProductIndex !== -1) {
      cartData[existingProductIndex].quantity += 1;
    } else {
      cartData.push({ ...data, quantity: 1 });
    }
    localStorage.setItem("user-cart", JSON.stringify(cartData));
    resetData(cartData);
    toast.success("Mahsulot qo'shildi", {
      position: "top-right",
    });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="mt-5 pb-10">
      <p className="font-medium text-xl">Qo'shishni maslahat beramiz</p>
      <div className="mt-1 flex gap-2 whitespace-nowrap overflow-auto p-4">
        {products
          .filter((val: any) => val.category != "combo")
          .map((pr: any) => {
            return (
              <div
                className="cursor-pointer p-3 rounded-xl min-w-[160px] h-[170px] bg-white shadow-recommended 
                flex items-center justify-center flex-col gap-1 hover:scale-105 transition duration-300"
                key={pr.id}
                onClick={() => addToCart(pr)}
              >
                <img src={pr?.image} alt="" />
                <p className="font-semibold h-[20px]">{pr?.title}</p>
                <p className="font-light text-cardDescColor h-[20px]">{pr.new_price}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductRecommendationInUserCart;
