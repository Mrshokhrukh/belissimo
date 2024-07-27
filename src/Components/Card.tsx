import { useNavigate } from "react-router-dom";
import { products } from "../db/data";
import { addProduct } from "../redux/CartSlice";
import { useDispatch } from "react-redux";

interface Props {
  product: any;
  key: number;
}

const Card = ({ product }: Props) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const navigateCombo = (id: number) => {
    let data = products?.find((val) => val.id === id);
    if (data?.category === "combo") navigate(`/combo/${id}`);
    else {
      dispatch(addProduct(id));
    }
    localStorage.setItem("data-product", JSON.stringify(id));
  };
  return (
    <div
      className="h-[auto] hover:scale-[102%] p-3 transition duration-200 bg-white w-full rounded-xl shadow-cardshadow cursor-pointer"
      onClick={() => {
        navigateCombo(product.id);
      }}
    >
      <img src={product.img} alt="" />
      <div className="px-1 mt-2 space-y-1">
        <h2 className="font-bold capitalize text-lg">{product.name}</h2>
        <p className="text-sm font-light">{product.desc}</p>
        {product.discountPrice && (
          <div className="flex items-center relative">
            <p className="absolute text-lightgray font-light">{product.discountPrice}</p>
            <img
              className="absolute w-[65px] rotate-[14deg] left-[-4px] top-1"
              src="https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/hkxsgdpn/57f975b4-4271-4549-ad2f-dc82295abe52.png"
              alt=""
            />
            <div className="text-sm font-semibold text-white ml-16 px-3 py-[3px] rounded-full bg-cartbtnred">
              {product.discountPercent}%
            </div>
          </div>
        )}
        <h1 className="font-semibold text-md">{product.price} so'm</h1>

        {/* <button className="bg-green">qo'sh</button> */}

      </div>
    </div>
  );
};

export default Card;
