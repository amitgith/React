import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const [toggle, setToggle] = useState("Home");
  return (
    <div className="h-screen flex  flex-col bg-slate-400 text-3xl text-white">
      <nav className="flex justify-between items-center bg-black p-3 font-bold">
        LOGO
        <div className="flex gap-8 cursor-pointer">
          <p onClick={() => setToggle("home")}>Home</p>
          <p onClick={() => setToggle("about")}>About</p>
          <p onClick={() => setToggle("contact")}>Contact</p>
        </div>
        <button className="px-3 py-2 bg-amber-500 cursor-pointer rounded">
          Login
        </button>
      </nav>
      {/* {toggle ? <Home /> : <About />} */}

      {toggle === "home" && <Home />}
      {toggle === "about" && <About />}
      {toggle === "contact" && <Contact />}
      {/* <Contact /> */}
    </div>
  );
};

export default App;
