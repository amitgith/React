import React, { useState } from "react";

const Register = ({ setToggle }) => {
  const [formdata, setFormData] = useState({});
  const [users, setUsers] = useState([]);

  const handleClick = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formdata]);
    console.log(users);
  };
  return (
    <div className="bg-white w-90 p-6 rounded flex flex-col gap-4">
      <h1 className="text-center text-xl">Register</h1>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
        <input
          onChange={handleClick}
          className="p-2 border border-gray-400 rounded"
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={handleClick}
          className="p-2 border border-gray-400 rounded"
          name="email"
          type="text"
          placeholder="Email"
        />
        <input
          onChange={handleClick}
          className="p-2 border border-gray-400 rounded"
          name="password"
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
