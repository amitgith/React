import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <main className="w-full h-screen bg-red-300">
      <div className="flex flex-col items-center ">
        <h1>Count is {count}</h1>
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="px-4 py-3 bg-blue-400"
        >
          Increase
        </button>
      </div>
    </main>
  );
};

export default App;
