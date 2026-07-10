import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import UsersCard from "./components/UsersCard";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div className="bg-gray-300 h-screen">
      <Register setUsers={setUsers} setToggle={setToggle} />
      <div className="flex">
        {users.map((elem, index) => (
          <UsersCard key={elem} user={elem} />
        ))}
      </div>
    </div>
  );
};
export default App;
