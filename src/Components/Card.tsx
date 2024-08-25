import { useNavigate } from "react-router-dom";
import FormatPrice from "./formatPrice";
import { useContext } from "react";
import { ChangeCategory } from "../hooks/ContextProvider";

interface Props {
  product: any;
}

const Card = ({ product }: Props) => {
  let navigate = useNavigate();

  const { setIsProductModalOpen } = useContext(ChangeCategory);

  const navigateCombo = (prData: any) => {
    if (product?.category.toLowerCase() === "combo") navigate(`/combo/${prData._id}`);
    else {
      if (prData.category === "pizza") {
        localStorage.setItem("pizza-product", JSON.stringify(prData));
        setIsProductModalOpen(true);
      }
    }
    localStorage.setItem("data-product", JSON.stringify(prData._id));
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
        navigateCombo(product);
      }}
    >
      <img src={product.image} alt="" className="rounded-md" />
      <div className="px-1 mt-2 space-y-1">
        <h2 className="font-bold capitalize text-lg">{product.title}</h2>
        <p className="text-sm font-light line-clamp-4">{product.description}</p>
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
