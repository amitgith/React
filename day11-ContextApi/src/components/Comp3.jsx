import React from "react";
import Comp4 from "./Comp4";

const Comp3 = ({ data }) => {
  console.log(data);

  return (
    <div>
      Comp3 insid Comp2
      <Comp4 />
    </div>
  );
};

export default Comp3;
