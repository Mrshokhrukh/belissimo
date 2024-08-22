import { createContext, useState } from "react";

type Props = {
  children: any;
};

const ChangeCategory = createContext<any>("");

const ContextProvider = ({ children }: Props) => {
  const [deliveryText, setDeliveryText] = useState("Yetkazib berish manzili tanlang");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <ChangeCategory.Provider
      value={{
        deliveryText,
        setDeliveryText,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isProductModalOpen,
        setIsProductModalOpen,
        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </ChangeCategory.Provider>
  );
};
export { ChangeCategory };
export default ContextProvider;
