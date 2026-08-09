import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeCard from "./components/ReceipeCard";

const App = () => {
  const [receipes, setReceipes] = useState(null);
  console.log(receipes);

  const getAllReceipes = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/recipes");
      setReceipes(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };
  useEffect(() => {
    getAllReceipes();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-3 mt-2">
      {receipes?.recipes.map((val) => (
        <RecipeCard key={val.id} recipe={val} />
      ))}
    </div>
  );
};

export default App;
