import React, { useEffect } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import PublicProtected from "./protected/PublicProtected";
import AuthLayout from "../app/layout/AuthLayout";
import LoginPage from "../features/auth/ui/components/pages/LoginPage";
import RegisterPage from "../features/auth/ui/components/pages/RegisterPage";
import MainLayout from "../app/layout/MainLayout";
import MainProtected from "./protected/MainProtected";
import HomePage from "../shared/ui/components/pages/HomePage";
import ProductPage from "../features/products/ui/components/pages/ProductPage";
import CartPage from "../features/orders/ui/components/pages/CartPage";
import OrderPage from "../features/cart/ui/components/pages/OrderPage";
// import { hydrateUser } from "../features/auth/api/AutHapi";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/state/authSlice";
import { hydrateUserAction } from "../features/auth/hooks/authAction";

const Approutes = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        // let res = await hydrateUser();
        // console.log(res);
        dispatch(hydrateUserAction());
      } catch (error) {
        console.log("error in hydration..", error);
      }
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "product",
              element: <ProductPage />,
            },
            {
              path: "cart",
              element: <CartPage />,
            },
            {
              path: "orders",
              element: <OrderPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Approutes;
