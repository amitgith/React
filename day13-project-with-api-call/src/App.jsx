import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
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
    <div className="h-screen p-2">
      <Navbar />
    </div>
  );
};

export default App;
