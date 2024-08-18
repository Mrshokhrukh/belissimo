import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { MdKeyboardArrowRight } from "react-icons/md";
import ComboOptionSelection from "../Components/ComboOptionSelection";
import ComboOptionModal from "../Components/ComboOptionModal";
import ComboPriceAddToCart from "../Components/ComboPriceAddToCart";
import { useQuery } from "react-query";
import axios from "axios";

type ComboProps = {};

const Combo: React.FC<ComboProps> = () => {
  let { comboId } = useParams<{ comboId: string }>();
  const [comboFoodModalOpen, setComboFoodModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useQuery("combo-details", () => {
    return axios.get(`https://bellissimo-avt2.onrender.com/get_one_product/${comboId}`);
  });

  if (isLoading) {
    return <h1>loading</h1>;
  }

  return (
    <div className="flex gap-10 max-w-xxl mt-5 justify-around items-center mx-auto">
      <img src={data?.data.image} alt="" className="" />
      <div className="flex flex-col gap-2 w-[100%] max-w-[450px] pb-10">
        <ComboOptionModal ComboFoodModalOpen={comboFoodModalOpen} setComboModalOpen={setComboFoodModalOpen} />
        <ComboOptionSelection setComboModalOpen={setComboFoodModalOpen} />
        <ComboOptionSelection setComboModalOpen={setComboFoodModalOpen} />

        <ComboOptionSelection setComboModalOpen={setComboFoodModalOpen} />
        <ComboPriceAddToCart productPrice={data?.data?.new_price} dicountPrice={data?.data?.old_price} />
      </div>
    </div>
  );
};
export default Combo;
