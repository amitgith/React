import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  localStorage.setItem("name", "amit");
  localStorage.setItem("age", 25);
  localStorage.setItem("rollno", 3);

  let userName = localStorage.getItem("name");
  console.log(userName);

  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div className="bg-slate-400 w-full h-screen">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="p-2 flex gap-2">
          {users.map((elem, index) => {
            return <Usercard users={elem} key={index} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[70%] p-2 text-white">
          <Form setUsers={setUsers} setToggle={setToggle} />
        </div>
      )}
    </div>
  );
};

export default App;
