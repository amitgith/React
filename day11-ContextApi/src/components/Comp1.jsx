import React from "react";
import Comp2 from "./Comp2";

const Comp1 = ({ data, children }) => {
  console.log(data);

  return (
    <div>
      comp1
      {/* <Comp2 data={data} /> */}
      {children}
    </div>
  );
};

export default Comp1;
