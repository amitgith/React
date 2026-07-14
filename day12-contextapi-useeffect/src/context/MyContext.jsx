import { createContext, useState } from "react";
// consumer
export const MyShop = createContext();
// Provider
export const MyShopProvider = ({ children }) => {
  console.log("context rendering");
  const [count, setCount] = useState(0);
  return (
    <MyShop.Provider value={{ count, setCount }}>{children}</MyShop.Provider>
  );
};
