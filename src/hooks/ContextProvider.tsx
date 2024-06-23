import { createContext, useState } from "react";

type Props = {
  children: any;
};

const ChangeCategory = createContext<any>("");

const ContextProvider = ({ children }: Props) => {
  const [deliveryText, setDeliveryText] = useState(
    "Yetkazib berish manzili tanlang"
  );

  return (
    <ChangeCategory.Provider value={{ deliveryText, setDeliveryText }}>
      {children}
    </ChangeCategory.Provider>
  );
};
export { ChangeCategory };
export default ContextProvider;
