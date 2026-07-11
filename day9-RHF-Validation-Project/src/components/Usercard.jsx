import React from "react";

const Usercard = ({ users }) => {
  return (
    <div className="p-2 border border-white rounded flex flex-col gap-2 bg-black">
      <div className="h-40 w-40">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={users.image}
          alt=""
        />
      </div>
      <div className="text-white flex flex-col gap-1">
        <h1>{users.name}</h1>
        <p>{users.email}</p>
        <p>{users.mobile}</p>
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
