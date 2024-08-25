import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import AuthModal from "./Components/AuthModal";
import ContextProvider from "./hooks/ContextProvider";
import Sidebar from "./Components/Sidebar";
import ProductsModal from "./Components/ProductsModal";
import { Toaster } from "react-hot-toast";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  // const { data: products, isLoading, error } = useGetProductsQuery("");
  // const { data } = useGetProductByIdQuery("66ca42929074b40786fb1f94");
  useEffect(() => {}, []);
  return (
    <div>
      <ContextProvider>
        <Header />
        <Outlet />
        <AuthModal />
        <Sidebar />
        <ProductsModal />
        <Toaster />
      </ContextProvider>
    </div>
  );
};
export default App;
