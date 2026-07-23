import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Auth } from "../context/AuthContext";
import UserCard from "../components/UserCard";

const UsersPage = () => {
  const { usersData, setUsersData } = useContext(Auth);
  const { isLoading, setIsLoading } = useContext(Auth);
  const getUsersData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/users");
      console.log(res);
      setUsersData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Users is error", error);
    }
  };
  useEffect(() => {
    getUsersData();
  }, []);

  if (isLoading) return <h1 className="text-4xl">Loading Users.....</h1>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {usersData.map((val) => (
        <UserCard key={val.id} user={val} />
      ))}
    </div>
  );
};

export default UsersPage;
