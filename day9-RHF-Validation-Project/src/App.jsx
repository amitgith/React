import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div className="bg-slate-400 w-full h-screen">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="p-2 flex gap-2">
          {users.map((elem) => {
            return <Usercard users={elem} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[70%] p-2 text-white">
          <Form setUsers={setUsers} />
        </div>
      )}
    </div>
  );
};

export default App;
