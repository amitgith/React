import React, { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

const Carts = () => {
  let { cartItems } = useContext(MyShop);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-5">
          <h1 className="text-3xl font-bold">
            Shopping Cart ({cartItems.length})
          </h1>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-5 flex gap-5"
            >
              {/* Image */}
              <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 object-contain"
                />
              </div>

              {/* Details */}
              <div className="flex-1">
                <h2 className="font-semibold text-lg line-clamp-2">
                  {item.title}
                </h2>

                <p className="text-gray-500 text-sm capitalize mt-1">
                  {item.category}
                </p>

                <div className="flex items-center gap-2 mt-3">
                  <span className="text-yellow-500">
                    ⭐ {item.rating?.rate}
                  </span>

                  <span className="text-gray-500 text-sm">
                    ({item.rating?.count} Reviews)
                  </span>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">
                    ${item.price}
                  </span>

                  <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-8">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          <div className="flex justify-between mb-3">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>

            <span className="text-green-600">${totalPrice.toFixed(2)}</span>
          </div>

          <button className="w-full mt-6 bg-black hover:bg-gray-800 text-white py-3 rounded-lg transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
