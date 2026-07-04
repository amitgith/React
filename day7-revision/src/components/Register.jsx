import React from "react";

const Register = ({ setToggle }) => {
  return (
    <div className="bg-white w-90 p-6 rounded flex flex-col gap-4">
      <h1 className="text-center text-xl">Register</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Name"
        />
        <input
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Email"
        />
        <input
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Password"
        />
        <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
          Register
        </button>
      </form>
      <p>
        Already have an Account?
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="text-blue-600 cursor-pointer hover:text-blue-700"
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
