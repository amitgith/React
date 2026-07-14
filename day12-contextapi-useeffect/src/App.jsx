import React, { useContext, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { MyShop } from "./context/MyContext";

const App = () => {
  console.log("App rendering");
  let { count, setCount } = useContext(MyShop);
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default App;
