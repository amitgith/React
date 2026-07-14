import React, { useContext, useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { MyShop, MyShopProvider } from "./context/MyContext";
import axios from "axios";

const App = () => {
  const { count, setCount } = useContext(MyShop);
  const [toggle, setToggle] = useState(false);
  const [apiData, setApiData] = useState(null);
  let getData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    console.log(res.data);
    setApiData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
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
      {/* {toggle ? <Contact /> : <About />} */}
    </div>
  );
};

export default App;
