import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Auth } from "../context/AuthContext";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const { productsData, setProductsData } = useContext(Auth);
  const { isLoading, setIsLoading } = useContext(Auth);

  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
      console.log(res);
      setIsLoading(false);
    } catch (error) {
      console.log("Products in error", error);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);

  if (isLoading) return <h1 className="text-4xl">Loading Products......</h1>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {productsData.map((val) => (
        <ProductCard key={val.id} product={val} />
      ))}
    </div>
  );
};

export default ProductPage;
