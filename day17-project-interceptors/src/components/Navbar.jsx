import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="border-r border-gray-500 flex flex-col gap-10">
      <h1 className="text-3xl font-semibold">E-comm</h1>
      <div className="flex flex-col gap-5 ml-4">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-red-500 border-b border-gray-500"
              : "text-black border-b border-gray-500"
          }
          to={"/main"}
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-red-500 border-b border-gray-500"
              : "text-black border-b border-gray-500"
          }
          to={"/main/users"}
        >
          Users
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-red-500 border-b border-gray-500"
              : "text-black border-b border-gray-500"
          }
          to={"/main/products"}
        >
          Products
        </NavLink>
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("loggedinUser");
          return <Navigate to={'/'} />;
        }}
        className="bg-red-500 px-2 py-2 mr-2 rounded cursor-pointer text-white"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
