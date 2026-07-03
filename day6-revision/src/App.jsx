import React, { useState } from "react";

const App = () => {
  console.log("App rendering....");

  const [user, setUser] = useState("ram");
  let handleClick = () => {
    setUser("amit");
  };
  return (
    <div>
      <h1>Hello</h1>
      <h1>User is {user}</h1>
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default App;
