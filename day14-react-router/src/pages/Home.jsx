import React from "react";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      Home Page
      <Outlet />
    </div>
  );
};

export default Home;
