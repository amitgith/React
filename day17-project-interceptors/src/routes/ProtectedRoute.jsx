import React, { useState } from "react";
import { Navigate, Outlet } from "react-router";
import { Auth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { loggedInUser } = useState(Auth);
  if (!loggedInUser) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
