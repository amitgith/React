import React from "react";

const Usercard = () => {
  return (
    <div className="p-2 border border-white rounded flex flex-col gap-2 bg-black">
      <div className="h-40 w-40">
        <img
          className="object-full w-full h-full rounded-xl"
          src="https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="text-white flex flex-col gap-1">
        <h1>Name</h1>
        <p>Email</p>
        <p>Contact</p>
      </div>
      <div className="text-white flex justify-between">
        <button className="bg-yellow-700 px-2 py-2 rounded cursor-pointer">
          Update
        </button>
        <button className="bg-red-700 px-2 py-2 rounded cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;
