import { useNavigate } from "react-router-dom";
import { products } from "../db/data";
import { addProduct } from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import FormatPrice from "./formatPrice";

interface Props {
  product: any;
}

const Card = ({ product }: Props) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const navigateCombo = (id: any) => {
    let data = products?.find((val) => val.id === String(id));
    if (data?.category === "combo") navigate(`/combo/${id}`);
    else {
      dispatch(addProduct(id));
      localStorage.setItem("pizza-product", JSON.stringify(id));
    }
    localStorage.setItem("data-product", JSON.stringify(id));
  };

  const calculateDiscount = (newprice: number, oldprice: number) => {
    if (newprice < oldprice) {
      let calculatePercent = (newprice / oldprice) * 100;
      return Math.floor(100 - calculatePercent);
    } else {
      return 0;
    }
  };

  return (
    <div
      className="h-[auto] hover:scale-[102%] p-3 transition duration-200 bg-white w-full rounded-xl shadow-cardshadow cursor-pointer"
      onClick={() => {
        navigateCombo(product._id);
      }}
    >
      <img src={product.image} alt="" className="rounded-md" />
      <div className="px-1 mt-2 space-y-1">
        <h2 className="font-bold capitalize text-lg">{product.title}</h2>
        <p className="text-sm font-light">{product.description}</p>
        {product.old_price && (
          <div className="flex items-center relative">
            <p className="absolute text-lightgray font-light">
              <FormatPrice price={product.old_price} />
            </p>
            <img
              className="absolute w-[65px] rotate-[14deg] left-[-4px] top-1"
              src="https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/hkxsgdpn/57f975b4-4271-4549-ad2f-dc82295abe52.png"
              alt=""
            />
            <div className="text-sm font-semibold text-white ml-16 px-3 py-[3px] rounded-full bg-cartbtnred">
              {calculateDiscount(product.new_price, product.old_price)}%
            </div>
          </div>
        )}
        <h1 className="font-semibold text-md">
          <FormatPrice price={product.new_price} /> so'm
        </h1>

        {/* <button className="bg-green">qo'sh</button> */}
      </div>
    </div>
  );
};

export default Card;
