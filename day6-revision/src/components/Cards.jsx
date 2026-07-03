import React from "react";
import Contacts from "./Contacts";

const Cards = () => {
  let arr = [2, 4, 13, 65, 3, 54, 3, 1, 5, 3, 4, 23, 1, 11, 1];
  return (
    <div className=" bg-yellow-500">
      {arr.map((elem,index) => {
        return <Contacts key={index} />;
      })}
      {/* <h1>This is a Cards</h1> */}
    </div>
  );
};

export default Cards;
