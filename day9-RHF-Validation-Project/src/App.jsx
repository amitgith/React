import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-slate-400 w-full h-screen">
      <Navbar />
      {toggle ? (
        <div className="p-2 flex">
          <Usercard />
        </div>
      ) : (
        <div className="flex justify-center items-center h-[70%] p-2 text-white">
          <Form />
        </div>
      )}
    </div>
  );
};

export default App;
