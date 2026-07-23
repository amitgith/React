import React from "react";
import { Star, ShoppingCart, Eye } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Product Image */}
      <div className="relative bg-gray-100 h-64 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain group-hover:scale-110 transition duration-300"
        />

        <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 h-14">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2 h-10">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{product.rating.rate}</span>

            <span className="text-gray-500 text-sm">
              ({product.rating.count})
            </span>
          </div>

          <p className="text-2xl font-bold text-indigo-600">${product.price}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition">
            <ShoppingCart size={18} />
            Add Cart
          </button>

          <button className="p-3 border rounded-xl hover:bg-gray-100 transition">
            <Eye size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
