import React, { useState } from "react";

const Contacts = () => {
  const [formdata, SetFormData] = useState({});
  console.log(formdata);

  return (
    <div className="flex flex-col gap-5 w-60">
      <input
        onChange={(e) => {
          SetFormData({ ...formdata, name: e.target.value });
        }}
        className="border-2"
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => {
          SetFormData({ ...formdata, email: e.target.value });
        }}
        className="border-2"
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => {
          SetFormData({ ...formdata, password: e.target.value });
        }}
        className="border-2"
        type="text"
        placeholder="Password"
      />
      <button className="border-2">Submit</button>
      <h1>This is Name - {formdata.name}</h1>
      <h1>This is Email - {formdata.email}</h1>
      <h1>This is Password - {formdata.password}</h1>
    </div>
  );
};

export default Contacts;
