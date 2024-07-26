import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CartProduct from "../Components/CartProduct";
import CardRightSide from "../Components/CardRightSide";
import CartIsEmpty from "../Components/CartIsEmpty";
import ProductRecommendationInUserCart from "../Components/ProductRecommendationInUserCart";

// type Props = {};

const Cart = () => {
  let data = useSelector((state: RootState) => state.userCart);

  return (
    <>
      {data.cart.length > 0 ? (
        <div className="mt-8 max-w-xl mx-auto">
          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-3 h-[200px] flex flex-col gap-2">
              {data?.cart.map((pr: any, i: number) => {
                return <CartProduct product={pr} key={i} />;
              })}
              <ProductRecommendationInUserCart />
            </div>
            <div className="col-span-2 h-[200px]">
              <CardRightSide />
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
