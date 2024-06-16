import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default App;
