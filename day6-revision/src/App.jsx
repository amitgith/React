import React, { useState } from "react";

const App = () => {
  console.log("App rendering...");

  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "amit" });
  return (
    <div>
      <h1>Count is - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>name is - {user.name}</h1>
      <button
        onClick={() => {
          // user.name = "sanjeet";
          // setUser(user);
          // setUser({ name: "sanjeet" }); correct
        }}
      >
        Change name
      </button>
    </div>
  );
};

export default App;
