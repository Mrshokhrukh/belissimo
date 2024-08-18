import { SlClose } from "react-icons/sl";
import img from "../assets/94844930-5c66-4c12-a670-93b048169dbe.webp";
interface Props {}

const ProductsModal = ({}: Props) => {
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
        <div className="flex gap-1 px-2 mt-3">
          <div className="flex flex-col gap-4 flex-1">
            <img src={img} className="max-w-[380px] object-cover cursor-pointer" alt="" />
            <div className="border-b border-b-lightborder pb-4 space-y-2">
              <h1 className="font-semibold text-3xl">Super Miks</h1>
              <p className="text-lightgray text-sm">
                «Super Miks» pitsasi 1 ta pitsada 4 xil sevimli pitsalaringiz birlashmasi 😋 Hammasini va birdan tatib
                ko‘rishni xush ko‘ruvchilar uchun nihoyatda mos keladi 🙃
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="font-semibold text-blackgray text-[16px]">
                Tanlangan bort: <span className="text-sm font-normal ml-2 text-lightgray">Oddiy bort</span>
              </h1>
              <h1 className="font-semibold text-blackgray text-[16px]">
                Masalliqlar: <span className="text-sm font-normal ml-2 text-lightgray">pomidor bodring go'sht</span>
              </h1>
            </div>
            <div className="">
              <h1 className="font-semibold text-3xl text-blackgray">124,000 so'm</h1>
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1 ml-2">
            <h1 className="font-semibold text-blackgray text-lg">Pitsa kattaligi</h1>
            <div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsModal;
