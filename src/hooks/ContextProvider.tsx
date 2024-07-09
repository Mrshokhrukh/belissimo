import { createContext, useState } from "react";

type Props = {
  children: any;
};

const ChangeCategory = createContext<any>("");

const ContextProvider = ({ children }: Props) => {
  const [deliveryText, setDeliveryText] = useState("Yetkazib berish manzili tanlang");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  return (
    <ChangeCategory.Provider
      value={{ deliveryText, setDeliveryText, isAuthModalOpen, setIsAuthModalOpen }}
    >
      {children}
    </ChangeCategory.Provider>
  );
};
export { ChangeCategory };
export default ContextProvider;
