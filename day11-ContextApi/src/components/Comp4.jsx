import React, { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const Comp4 = () => {
  let cd = useContext(MyStore);
  console.log(cd);

  return <div>Comp4 inside Comp3</div>;
};

export default Comp4;
