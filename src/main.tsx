import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound.tsx";
import Combo from "./pages/Combo.tsx";
import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";
import store from "./redux/store.ts";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { productsApi } from "./services/api.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/combo/:comboId",
        element: <Combo />,
      },
    ],
  },
]);
let queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* <ApiProvider api={productsApi}> */}
        <RouterProvider router={router} />
        {/* </ApiProvider> */}
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
