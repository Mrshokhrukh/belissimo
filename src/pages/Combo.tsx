import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../db/data";
import { MdKeyboardArrowRight } from "react-icons/md";
import ComboOptionSelection from "../Components/ComboOptionSelection";
import ComboOptionModal from "../Components/ComboOptionModal";

type ComboProps = {};

const Combo: React.FC<ComboProps> = () => {
  let { comboId } = useParams<{ comboId: string }>();
  const [productData, setProductData] = useState<any>();
  const [comboFoodModalOpen, setComboFoodModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const catchData = async () => {
      let data = await products?.find((val) => String(val.id) === comboId);
      setProductData(data);
    };

    catchData();
  }, [comboId]);

  return (
    <div className="flex gap-10 max-w-xxl mt-5">
      <img src={productData?.img} alt="" className="" />
      <div className="flex flex-col gap-2 w-[100%]">
        <ComboOptionModal ComboFoodModalOpen={comboFoodModalOpen} setComboModalOpen={setComboFoodModalOpen} />
        <ComboOptionSelection setComboModalOpen={setComboFoodModalOpen} />
        <ComboOptionSelection setComboModalOpen={setComboFoodModalOpen} />
      </div>
    </div>
  );
};
export default Combo;
