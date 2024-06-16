import React from "react";
import { useParams } from "react-router-dom";

type ComboProps = {};

const Combo: React.FC<ComboProps> = () => {
  let { comboId } = useParams<{ comboId: string }>();

  return <div>Have a good coding</div>;
};
export default Combo;
