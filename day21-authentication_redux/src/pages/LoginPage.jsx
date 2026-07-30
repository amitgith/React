import React from "react";
import { useSelector } from "react-redux";

const LoginPage = () => {
    let {count} = useSelector9()
  return <div>
    <h1>Count is {count}</h1>
  </div>;
};

export default LoginPage;
