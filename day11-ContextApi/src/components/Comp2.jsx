import React from "react";
import Comp3 from "./Comp3";

const Comp2 = ({ data }) => {
  console.log(data);

  return (
    <div>
      Comp2 inside Comp1
      <Comp3 />
    </div>
  );
};

export default Comp2;
