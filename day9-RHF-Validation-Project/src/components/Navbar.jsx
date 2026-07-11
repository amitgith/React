import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-black">
      <div>
        <img
          className="w-10 h-10 rounded-full"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="flex gap-8 text-white font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button className="p-2 bg-sky-500 text-white rounded cursor-pointer">
        Create
      </button>
    </div>
  );
};

export default Navbar;
