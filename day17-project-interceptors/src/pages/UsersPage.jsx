import React, { useContext, useEffect, useState } from "react";
import { Auth } from "../context/AuthContext";
import UserCard from "../components/UserCard";
import { axiosInstance } from "../config/axiosinstance";

const UsersPage = () => {
  const { usersData, setUsersData } = useContext(Auth);
  const { isLoading, setIsLoading } = useContext(Auth);
  const getUsersData = async () => {
    try {
      let res = await axiosInstance("/users");
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
