import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { loginUserApi } from "../api/AutHapi";

export const useAuthHook = () => {
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    // let arr = [...registeredUsers, data];
    // setRegisteredUsers(arr);
    // localStorage.setItem("registeredUsers", JSON.stringify(arr));
    // toast.success("User registered..");
    console.log("register", data);
  };

  const loginForm = async(data) => {
    // let user = registeredUsers.find((val) => {
    //   return val.email === data.email && val.password === data.password;
    // });
    // if (!user) {
    //   toast.error("Invalid something");
    //   return;
    // }

  try {
    let response = await loginUserApi(data)
    
  } catch (error) {
    
  }

    console.log("login", data);
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  };
};
