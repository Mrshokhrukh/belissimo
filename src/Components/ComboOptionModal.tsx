import { useEffect, useState } from "react";
import { products } from "../db/data";
import ComboOptionItemCard from "./ComboOptionItemCard";

interface Props {
  ComboFoodModalOpen: boolean;
  setComboModalOpen: any;
}

const ComboOptionModal = ({ ComboFoodModalOpen, setComboModalOpen }: Props) => {
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    let data = products.filter((dt) => dt.category === "pitsa");
    setProduct(data);
  }, []);

  return (
    <div
      className={`${
        ComboFoodModalOpen ? "" : "hidden"
      } w-[100%] h-[100%] bg-black z-[100] fixed top-0 left-0 flex items-center justify-center`}
      id="authmodal"
      onClick={() => setComboModalOpen(false)}
    >
      <div
        className="relative flex-col gap-3 p-4 px-5 w-[450px] h-[450px] bg-white shadow-cardshadow rounded-lg overflow-y-auto"
        id="scrollnav"
      >
        <h1>{"Pizza"}</h1>
        <div className="grid grid-cols-2 gap-3 mt-3">
          {product?.map((data: any) => {
            return <ComboOptionItemCard productData={data} key={data.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ComboOptionModal;
