import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Auth } from "../context/AuthContext";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const { productsData, setProductsData } = useContext(Auth);
  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
      console.log(res);
    } catch (error) {
      console.log("Products in error", error);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {productsData.map((val) => (
        <ProductCard key={val.id} product={val} />
      ))}
    </div>
  );
};

export default ProductPage;
