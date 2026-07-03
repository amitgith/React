import React, { useState } from "react";
import Contacts from "./Contacts";

const Cards = () => {
  const [user, setUser] = useState("");
  console.log(user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col gap-5 w-60">
      <input
        onChange={(e) => {
          setUser(e.target.value);
        }}
        className="border-2"
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="border-2"
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="border-2"
        type="text"
        placeholder="Password"
      />
      <button className="border-2">Submit</button>
      <h1>This is Name - {user}</h1>
      <h1>This is Email - {email}</h1>
      <h1>This is Password - {password}</h1>
    </div>
  );
};

export default Cards;
