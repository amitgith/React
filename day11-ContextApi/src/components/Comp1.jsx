import React from "react";
import Comp2 from "./Comp2";

const Comp1 = ({ data }) => {
  console.log(data);

  return (
    <div>
      comp1
      <Comp2 data={data} />
    </div>
  );
};

export default Comp1;
