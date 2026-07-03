import React from "react";
import Cards from "./components/Cards";
import Contacts from "./components/Contacts";
import About from "./components/About";

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
