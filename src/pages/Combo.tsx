import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../db/data";
import { MdKeyboardArrowRight } from "react-icons/md";
import ComboOptionSelection from "../Components/ComboOptionSelection";
import ComboOptionModal from "../Components/ComboOptionModal";
import ComboPriceAddToCart from "../Components/ComboPriceAddToCart";

type ComboProps = {};

const Combo: React.FC<ComboProps> = () => {
  let { comboId } = useParams<{ comboId: string }>();
  const [productData, setProductData] = useState<any>();
  const [comboFoodModalOpen, setComboFoodModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const catchData = () => {
      let data = products?.find((val) => String(val.id) === comboId);
      setProductData(data);
    };

    catchData();
  }, []);

  return (
    <div className="flex gap-10 max-w-xxl mt-5 justify-around items-center">
      <img src={productData?.img} alt="" className="" />
      <div className="flex flex-col gap-2 w-[100%] max-w-[450px] pb-10">
        <ComboOptionModal ComboFoodModalOpen={comboFoodModalOpen} setComboModalOpen={setComboFoodModalOpen} />
        <ComboOptionSelection setComboModalOpen={setComboFoodModalOpen} />
        <ComboOptionSelection setComboModalOpen={setComboFoodModalOpen} />

        <ComboOptionSelection setComboModalOpen={setComboFoodModalOpen} />
        <ComboPriceAddToCart productPrice={productData?.price} dicountPrice={productData?.discountPrice}/>
      </div>
    </div>
  );
};
export default Combo;
