import { SlClose } from "react-icons/sl";
import Toggler from "./Toggler";
import { useContext, useEffect, useState } from "react";
import ProductModalMasalliqlar from "./ProductModalMasalliqlar";
import FormatPrice from "./formatPrice";
import { ChangeCategory } from "../hooks/ContextProvider";
import { addProduct } from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

interface Props {}

const ProductsModal = ({}: Props) => {
  let dispatch = useDispatch();
  const [selectPizzaSize, setSelectSize] = useState("");
  const [_, setIsQalin] = useState("");

  const [pizzaData, setPizzaData] = useState<any>();
  const { isProductModalOpen, setIsProductModalOpen } = useContext(ChangeCategory);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("pizza-product") || "");
    setPizzaData(data);
  }, [isProductModalOpen]);

  const addToCart = (id: any) => {
    dispatch(addProduct(id));
    toast.success("Mahsulot qo'shildi", {
      position: "top-right",
    });
  };

  return (
    <div className={`${isProductModalOpen ? "" : "hidden"}`}>
      <div
        className={`w-[100%] h-[100%] bg-black z-[100] fixed top-0 left-0 `}
        id="authmodal"
        onClick={() => setIsProductModalOpen(false)}
      ></div>

      <div className="w-[900px] h-[600px] fixed z-[101] top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%] flex items-center justify-center">
        <div className="relative p-8 w-[100%] h-[100%] bg-white shadow-cardshadow rounded-3xl">
          <SlClose
            className="absolute right-4 top-4 text-3xl cursor-pointer"
            onClick={() => setIsProductModalOpen(false)}
          />
          <div className="flex gap-1 px-2 mt-3 relative">
            <div className="flex flex-col gap-4 flex-1">
              <img
                src={pizzaData?.image}
                className="max-w-[380px] object-cover cursor-pointer"
                alt=""
              />
              <div className="border-b border-b-lightborder pb-4 space-y-2">
                <h1 className="font-semibold text-3xl">{pizzaData?.title}</h1>
                <p className="text-lightgray text-sm">
                  «{pizzaData?.title}» {pizzaData?.description} 😋 🙃
                </p>
              </div>
              <div className="space-y-2 h-[80px] overflow-auto">
                <h1 className="font-semibold text-blackgray text-[16px]">
                  Tanlangan bort:{" "}
                  <span className="text-sm font-normal ml-2 text-lightgray">Oddiy bort</span>
                </h1>
                <h1 className="font-semibold text-blackgray text-[16px]">
                  Masalliqlar:{" "}
                  <span className="text-sm font-normal ml-2 text-lightgray">
                    pomidor bodring go'sht
                  </span>
                </h1>
              </div>
              <div>
                <h1 className="font-semibold text-3xl text-blackgray">
                  <FormatPrice price={pizzaData?.new_price} /> so'm
                </h1>
              </div>
            </div>

            <div className="h-full flex-1">
              <div
                id="scrollnav"
                className="flex flex-col gap-4 min-h-[480px] max-h-[485px] overflow-auto pb-3 px-1 transition-all duration-150"
              >
                <h1 className="font-semibold text-blackgray text-lg">Pitsa kattaligi</h1>
                <div className="space-y-2.5">
                  <Toggler values={["Kichik", "O'rtacha", "Katta"]} setSelect={setSelectSize} />
                  <div className="w-full flex gap-3">
                    <div className="flex-1">
                      {selectPizzaSize === "O'rtacha" || selectPizzaSize === "Katta" ? (
                        <Toggler values={["Yupqa", "Qalin"]} setSelect={setIsQalin} />
                      ) : (
                        <Toggler values={["Qalin"]} />
                      )}
                    </div>
                    <button className="text-[15px] font-medium flex-1 h-[47px] rounded-full  bg-orange disabled:bg-toggleColor disabled:text-grayReal disabled:cursor-not-allowed">
                      Bort Qo'shish
                    </button>
                  </div>
                  <ProductModalMasalliqlar />
                </div>
              </div>
              <button
                onClick={() => addToCart(pizzaData._id)}
                className="hover:bg-hoverGreen hover:text-green border border-green 
            transition-all duration-200 w-[100%] bg-green rounded-full p-2.5 mt-2 text-white 
            font-semibold active:bg-green active:text-white"
              >
                Savatga qo'shish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsModal;
