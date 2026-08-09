import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeCard from "./components/ReceipeCard";

const App = () => {
  const [recipes, setRecipes] = useState(null);
  console.log(recipes);
  const [page, setPage] = useState(0);
  console.log(page);

  let limit = 10;

  const getAllRecipes = async () => {
    try {
      console.log("Api calling....");

      let res = await axios.get(
        `https://dummyjson.com/recipes?limit=${limit}&skip=${page * limit}`,
      );
      setRecipes(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };
  useEffect(() => {
    getAllRecipes();
  }, [page]);

  let totalPages = recipes?.total / limit;

  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="grid w-full grid-cols-4 gap-3 mt-2">
        {recipes?.recipes.map((val) => (
          <RecipeCard key={val.id} recipe={val} />
        ))}
      </div>
      <div className="flex gap-5 mb-5 items-center">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="bg-red-500 text-white px-3 py-2 text-xl rounded cursor-pointer"
        >
          Prev
        </button>
        <p>
          Page {page + 1} of {totalPages}
        </p>
        <button
          disabled={page >= totalPages - 1}
          onClick={() => setPage(page + 1)}
          className="bg-red-500 text-white px-3 py-2 text-xl rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
