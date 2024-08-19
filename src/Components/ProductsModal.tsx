import { SlClose } from "react-icons/sl";
import img from "../assets/94844930-5c66-4c12-a670-93b048169dbe.webp";
import Toggler from "./Toggler";
import { useState } from "react";
import ProductModalMasalliqlar from "./ProductModalMasalliqlar";
interface Props {}

const ProductsModal = ({}: Props) => {
  const [selectPizzaSize, setSelectSize] = useState("");
  const modal = true;
  return (
    <div
      className={`${
        modal ? "" : "hidden"
      } w-[100%] h-[100%] bg-black z-[100] fixed top-0 left-0 flex items-center justify-center`}
      id="authmodal"
    >
      <div className="relative p-8 w-[900px] h-[600px] bg-white shadow-cardshadow rounded-3xl">
        <SlClose className="absolute right-4 top-4 text-3xl cursor-pointer" onClick={() => ""} />
        <div className="flex gap-1 px-2 mt-3 relative">
          <div className="flex flex-col gap-4 flex-1">
            <img src={img} className="max-w-[380px] object-cover cursor-pointer" alt="" />
            <div className="border-b border-b-lightborder pb-4 space-y-2">
              <h1 className="font-semibold text-3xl">Super Miks</h1>
              <p className="text-lightgray text-sm">
                «Super Miks» pitsasi 1 ta pitsada 4 xil sevimli pitsalaringiz birlashmasi 😋 Hammasini va birdan tatib
                ko‘rishni xush ko‘ruvchilar uchun nihoyatda mos keladi 🙃
              </p>
            </div>
            <div className="space-y-2 h-[80px] overflow-auto">
              <h1 className="font-semibold text-blackgray text-[16px]">
                Tanlangan bort: <span className="text-sm font-normal ml-2 text-lightgray">Oddiy bort</span>
              </h1>
              <h1 className="font-semibold text-blackgray text-[16px]">
                Masalliqlar: <span className="text-sm font-normal ml-2 text-lightgray">pomidor bodring go'sht</span>
              </h1>
            </div>
            <div>
              <h1 className="font-semibold text-3xl text-blackgray">124,000 so'm</h1>
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
                      <Toggler values={["Yupqa", "Qalin"]} />
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
  );
};

export default ProductsModal;
