import CartProduct from "../Components/CartProduct";
import CardRightSide from "../Components/CardRightSide";
import CartIsEmpty from "../Components/CartIsEmpty";
import ProductRecommendationInUserCart from "../Components/ProductRecommendationInUserCart";
import { useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
// type Props = {};

const Cart = () => {
  const [productData, setProductData] = useState<any>();
  let cartData = JSON.parse(localStorage.getItem("user-cart") || "[]");
  let navigate = useNavigate();
  useEffect(() => {
    cartData = JSON.parse(localStorage.getItem("user-cart") || "[]");
    setProductData(cartData);
  }, []);

  return (
    <div>
      <div
        onClick={() => navigate(-1)}
        className="md:hidden relative left-3 top-3 text-xl text-black shadow-cardshadow rounded flex items-center justify-center bg-[#eeeeee] w-[35px] cursor-pointer h-[35px]"
      >
        <IoArrowBackOutline />
      </div>
      {productData?.length > 0 ? (
        <div className="mt-8 max-w-xl mx-auto px-4">
          <div className="grid grid-cols-5 md:gap-5 gap-2">
            <div className="w-full h-full md:col-span-3 col-span-5 flex flex-col gap-2">
              {productData?.map((pr: any, i: number) => {
                return <CartProduct product={pr} key={i} resetData={setProductData} />;
              })}
              <ProductRecommendationInUserCart resetData={setProductData} />
            </div>
            <div className="col-span-5 md:col-span-2">
              <CardRightSide productData={productData} />
            </div>
          </div>
        </div>
      ) : (
        <CartIsEmpty />
      )}
    </div>
  );
};

export default Cart;
