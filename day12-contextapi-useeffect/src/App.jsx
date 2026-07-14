import React, { useContext, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { MyShop, MyShopProvider } from "./context/MyContext";

const App = () => {
  console.log("App rendering");
  // let { count, setCount } = useContext(MyShop);
  return (
    <div>
      <MyShopProvider>
        <Home />
      </MyShopProvider>
      <About />
      <Contact />
    </div>
  );
};

export default App;
