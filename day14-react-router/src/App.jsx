import React, { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen flex  flex-col bg-slate-400 text-3xl text-white">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
