import React from "react";
import { Clock3, Flame, Star, Users, ChefHat, ArrowRight } from "lucide-react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Cuisine */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold capitalize text-gray-800 backdrop-blur">
          {recipe.cuisine}
        </span>

        {/* Difficulty */}
        <span className="absolute right-4 top-4 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
          {recipe.difficulty}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="mb-2 line-clamp-1 text-xl font-bold text-gray-900">
          {recipe.name}
        </h2>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-2 py-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-800">
              {recipe.rating}
            </span>
          </div>

          <span className="text-sm text-gray-400">
            ({recipe.reviewCount} reviews)
          </span>
        </div>

        {/* Recipe Information */}
        <div className="mb-5 grid grid-cols-2 gap-3">
          {/* Cooking Time */}
          <div className="flex items-center gap-2 rounded-xl bg-gray-50 p-3">
            <Clock3 size={18} className="text-gray-600" />

            <div>
              <p className="text-xs text-gray-400">Cook Time</p>
              <p className="text-sm font-semibold text-gray-800">
                {recipe.cookTimeMinutes} min
              </p>
            </div>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-2 rounded-xl bg-gray-50 p-3">
            <Flame size={18} className="text-gray-600" />

            <div>
              <p className="text-xs text-gray-400">Calories</p>
              <p className="text-sm font-semibold text-gray-800">
                {recipe.caloriesPerServing}
              </p>
            </div>
          </div>

          {/* Servings */}
          <div className="flex items-center gap-2 rounded-xl bg-gray-50 p-3">
            <Users size={18} className="text-gray-600" />

            <div>
              <p className="text-xs text-gray-400">Servings</p>
              <p className="text-sm font-semibold text-gray-800">
                {recipe.servings}
              </p>
            </div>
          </div>

          {/* Prep Time */}
          <div className="flex items-center gap-2 rounded-xl bg-gray-50 p-3">
            <ChefHat size={18} className="text-gray-600" />

            <div>
              <p className="text-xs text-gray-400">Prep Time</p>
              <p className="text-sm font-semibold text-gray-800">
                {recipe.prepTimeMinutes} min
              </p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {recipe.tags?.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() => console.log("View Recipe:", recipe)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 active:scale-95"
        >
          View Recipe
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
