import React from "react";

const UsersCard = ({ user }) => {
  return (
    <div className="p-4 flex flex-col gap-4 border-gary-400 border rounded">
      <div className="w-50 h-50 rounded overflow-hidden">
        <img
          className="h-full w-full"
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default UsersCard;
