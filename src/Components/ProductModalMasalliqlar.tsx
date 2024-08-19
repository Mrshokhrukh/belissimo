import { useEffect, useState } from "react";
import Masalliqlar from "./Masalliqlar";

interface Props {}

const ProductModalMasalliqlar = ({}: Props) => {
  const [pizzaId, setPizzaId] = useState("");
  useEffect(() => {
    let id = JSON.parse(localStorage.getItem("pizza-product") || "");
    setPizzaId(id);
  }, []);
  return (
    <div className="pt-5">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-semibold text-lg">Masalliqlarni tanlang</h1>
        <div className="bg-orange rounded-full px-4 py-1.5 font-sans font-semibold">0 / 15</div>
      </div>
      <Masalliqlar id={pizzaId} />
    </div>
  );
};

export default ProductModalMasalliqlar;
