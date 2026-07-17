import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-black p-3 font-bold">
      LOGO
      <div className="flex gap-8 cursor-pointer">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      <button className="px-3 py-2 bg-amber-500 cursor-pointer rounded">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
