import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-black text-white p-3 font-semibold text-xl rounded">
      <div>Logo</div>
      <div className="flex gap-6">
        <h1 className="cursor-pointer">Home</h1>
        <h1 className="cursor-pointer">Cart</h1>
      </div>
      <button className="bg-sky-500 px-3 py-2 rounded cursor-pointer hover:bg-sky-700">
        Login
      </button>
    </div>
  );
};

export default Navbar;
