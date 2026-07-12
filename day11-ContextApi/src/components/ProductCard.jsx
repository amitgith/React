import React from "react";
import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full capitalize mb-3">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="font-semibold text-lg line-clamp-2 mb-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-3 mb-4">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{product.rating.rate}</span>

            <span className="text-gray-400 text-sm">
              ({product.rating.count})
            </span>
          </div>

          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Button */}
        <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
