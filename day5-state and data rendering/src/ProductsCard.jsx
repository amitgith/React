import React from "react";

const ProductsCard = ({ product, del }) => {
//   del();

  return (
    <div className="p-2 border-2 rounded flex flex-col gap-4 ">
      <div className="w-40">
        <img src={product.image} alt="" />
      </div>
      <div>
        <h2 className="font-semibold">{product.title}</h2>
        <p className="text-xs">{product.category.substring(0, 10)}</p>
        <p className="text-green-600">{product.price}</p>
      </div>
      <button
        className="p-2 bg-red-500 text-white cursor-pointer"
        onClick={() => del(product.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ProductsCard;
