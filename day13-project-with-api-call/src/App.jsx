import React from "react";
import axios from "axios";
const App = () => {
  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };
  getProductsData();
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
