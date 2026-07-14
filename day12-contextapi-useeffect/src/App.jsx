import React, { useContext, useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { MyShop, MyShopProvider } from "./context/MyContext";

const App = () => {
  const { count, setCount } = useContext(MyShop);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    console.log("App rendering");
  }, [toggle]);
  return (
    <div>
      <h1>count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setToggle((prev) => !prev)}>
        Change Toggle state
      </button>
      {/* <Home /> */}
      {toggle ? <Contact /> : <About />}
    </div>
  );
};

export default App;
