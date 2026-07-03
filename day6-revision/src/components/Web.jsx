import React from "react";
import Cards from "./Cards";
import Contacts from "./Contacts";
import About from "./About";

const Web = () => {
  return (
    <div className="h-full grid grid-col-2">
      <h1>This is a Web </h1>
      <Cards />
      <Contacts />
      <About />
    </div>
  );
};

export default Web;
