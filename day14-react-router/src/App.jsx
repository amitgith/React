import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="h-screen flex  flex-col bg-slate-400 text-3xl text-white">
      <nav className="flex justify-between items-center bg-black p-3 font-bold">
        LOGO
        <div className="flex gap-8 cursor-pointer">
          <p onClick={() => setToggle(true)}>Home</p>
          <p onClick={() => setToggle(false)}>About</p>
          <p>Contact</p>
        </div>
        <button className="px-3 py-2 bg-amber-500 cursor-pointer rounded">
          Login
        </button>
      </nav>
      {toggle ? <Home /> : <About />}

      {/* <Contact /> */}
    </div>
  );
};

export default App;
