import { useEffect, useState } from "react";
import Masalliqlar from "./Masalliqlar";

interface Props {}

const ProductModalMasalliqlar = ({}: Props) => {
  const [pizzaData, setPizzaData] = useState<any>();
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("pizza-product") || "");
    setPizzaData(data);
  }, []);
  return (
    <div className="pt-5">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-semibold text-lg">Masalliqlarni tanlang</h1>
        <div className="bg-orange rounded-full px-4 py-1.5 font-sans font-semibold">0 / 15</div>
      </div>
      <Masalliqlar data={pizzaData} />
    </div>
  );
};

export default ProductModalMasalliqlar;
