import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllRecipes } from "./api/receipeApi";
import RecipeCard from "./components/ReceipeCard";

const Tanstack = () => {
  let limit = 10;
  const [page, setPage] = useState(0);
  let { data, isPending, isError, isPlaceholderData } = useQuery({
    queryKey: ["recipes", page],
    queryFn: () => getAllRecipes(limit, page),
    placeholderData: keepPreviousData,
  });
  if (isPending) return "Loading...";
  if (isError) return "Something went wrong";
  console.log(data);
  let totalPages = data.total / limit;
  console.log(totalPages);

  return (
    <div className="flex flex-col gap-5 items-center">
      <div
        style={{ opacity: isPlaceholderData ? 0.3 : 1 }}
        className="grid w-full grid-cols-4 gap-3 mt-2"
      >
        {data?.recipes.map((val) => (
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

export default Tanstack;
