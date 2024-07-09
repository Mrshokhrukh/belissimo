import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import AuthModal from "./Components/AuthModal";
import ContextProvider from "./hooks/ContextProvider";
type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <ContextProvider>
        <Header />
        <Outlet />
        <AuthModal />
      </ContextProvider>
    </div>
  );
};
export default App;
