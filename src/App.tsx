import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import AuthModal from "./Components/AuthModal";
type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <AuthModal/>
    </div>
  );
};
export default App;
