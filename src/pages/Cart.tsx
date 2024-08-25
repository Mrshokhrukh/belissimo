import CartProduct from "../Components/CartProduct";
import CardRightSide from "../Components/CardRightSide";
import CartIsEmpty from "../Components/CartIsEmpty";
import ProductRecommendationInUserCart from "../Components/ProductRecommendationInUserCart";
import { useEffect, useState } from "react";

// type Props = {};

const Cart = () => {
  const [productData, setProductData] = useState<any>();
  let cartData = JSON.parse(localStorage.getItem("user-cart") || "[]");

  useEffect(() => {
    cartData = JSON.parse(localStorage.getItem("user-cart") || "[]");
    setProductData(cartData);
  }, []);

  return (
    <>
      {productData?.length > 0 ? (
        <div className="mt-8 max-w-xl mx-auto">
          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-3 h-[200px] flex flex-col gap-2">
              {productData?.map((pr: any, i: number) => {
                return <CartProduct product={pr} key={i} resetData={setProductData} />;
              })}
              <ProductRecommendationInUserCart resetData={setProductData}/>
            </div>
            <div className="col-span-2 h-[200px]">
              <CardRightSide productData={productData}/>
            </div>
          </div>
        </div>
      ) : (
        <CartIsEmpty />
      )}
    </>
  );
};

export default Cart;
