import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
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
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
