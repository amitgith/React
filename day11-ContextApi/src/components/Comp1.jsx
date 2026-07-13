import React from "react";
import Comp2 from "./Comp2";

const Comp1 = ({ data }) => {
  console.log(data);

  return (
    <div>
      comp1
      <Comp2 />
    </div>
  );
};

export default Comp1;
