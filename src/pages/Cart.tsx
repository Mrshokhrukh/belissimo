import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CartProduct from "../Components/CartProduct";

type Props = {};

const Cart = (props: Props) => {
  let data = useSelector((state: RootState) => state.userCart);

  return (
    <div className="mt-8 max-w-xl mx-auto">
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-3 h-[200px] flex flex-col gap-2">
          {data?.cart.map((pr: any, i: number) => {
            return <CartProduct product={pr} key={i} />;
          })}
        </div>
        <div className="col-span-2  h-[200px]"></div>
      </div>
    </div>
  );
};

export default Cart;
