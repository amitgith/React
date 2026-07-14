import React, { useContext } from "react";
import { MyShop } from "../context/MyContext";

const Home = () => {
  console.log("Home rendering");
  const { count, setCount } = useContext(MyShop);
  return (
    <div>
      This is Home
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Home;
