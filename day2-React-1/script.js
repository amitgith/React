// const { createElement } = require("react");

// console.log(React);

import React from "react";
const rootElem = document.querySelector(".root");
const rh1 = React.createElement(
  "div",
  {},
  React.createElement(
    "h1",
    {},
    React.createElement("span", {}, "i am inside span"),
  ),
);

const appElem = ReactDOM.createRoot(rootElem);
appElem.render(rh1);
console.log(rh1);
