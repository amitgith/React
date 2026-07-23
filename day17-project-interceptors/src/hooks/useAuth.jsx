import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import toast from "react-hot-toast";

const useAuth = () => {
  const { registeredUsers, setRegisteredUsers, loggedInUser, setLoggedInUser } =
    useContext(Auth);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const loginFormSubmit = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });
    if (!user) {
      toast.error("User not found or invalid credentails!.");
      reset();
      return;
    }
    setLoggedInUser(user);
    toast.success("User Loggined Successfully!");
    localStorage.setItem("loggedinUser", JSON.stringify(user));
    navigate("/main");
  };

  const registerFormSubmit = (data) => {
    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    toast.success("User Registered Successfully!");
    localStorage.setItem("loggedinUser", JSON.stringify(data));
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    navigate("/main");
    reset();
  };
  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginFormSubmit,
    registerFormSubmit,
  };
};

export default useAuth;
