import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { getAllRecipes } from "./api/receipeApi";
import RecipeCard from "./components/ReceipeCard";

const Infinite = () => {
  let limit = 5;
  let { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["recipes"],
      queryFn: ({ pageParam }) => getAllRecipes(limit, pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPage) => {
        let loadData = allPage.length * limit;
        if (loadData < lastPage.total) return loadData;
        return undefined;
      },
    });
  if (isPending) return "Loading...";
  console.log(data);
  let allRecipes = data?.pages?.flatMap((val) => val.recipes) ?? [];

  return (
    <div className="flex p-5 flex-col gap-4 items-center">
      <div className="grid grid-cols-4 w-full gap-5 items-center">
        {allRecipes.map((val) => (
          <RecipeCard key={val.id} recipe={val} />
        ))}
      </div>
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "loading..." : "Load mores"}
        </button>
      )}
    </div>
  );
};

export default Infinite;
