import React, { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen flex  flex-col bg-slate-400 text-3xl text-white">
      <nav className="flex justify-between items-center bg-black p-3 font-bold">
        LOGO
        <div className="flex gap-8 cursor-pointer">
          <Navbar />
        </div>
        <button className="px-3 py-2 bg-amber-500 cursor-pointer rounded">
          Login
        </button>
      </nav>
      <AppRoutes />
    </div>
  );
};

export default App;
