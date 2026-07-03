import React, { useState } from "react";

const About = () => {
  const [formdata, SetFormData] = useState({});
  console.log(formdata);
  let handleClick = (e) => {
    let { name, value } = e.target;
    SetFormData({ ...formdata, [name]: value });
  };

  return (
    <div className="flex flex-col gap-5 w-60">
      <input
        name="name"
        onChange={handleClick}
        className="border-2"
        type="text"
        placeholder="Name"
      />
      <input
        name="email"
        onChange={handleClick}
        className="border-2"
        type="text"
        placeholder="Email"
      />
      <input
        name="password"
        onChange={handleClick}
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

export default About;
