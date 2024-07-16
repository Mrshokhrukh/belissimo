import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../db/data";

type ComboProps = {};

const Combo: React.FC<ComboProps> = () => {
  let { comboId } = useParams<{ comboId: string }>();
  const [productData, setProductData] = useState<any>();

  useEffect(() => {
    // let productDatastore = localStorage.getItem("data-product");

    const catchData = async () => {
      let data = await products?.find((val) => String(val.id) === '0.9851051579352363');
      localStorage.setItem("product", JSON.stringify(data));
    };

    catchData();
  }, [comboId]);

  console.log(productData);

  return (
    <div>
    
      <h1>{comboId}</h1>
    </div>
  );
};
export default Combo;
