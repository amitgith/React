import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

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

  const loginForm = (data) => {
    // let user = registeredUsers.find((val) => {
    //   return val.email === data.email && val.password === data.password;
    // });
    // if (!user) {
    //   toast.error("Invalid something");
    //   return;
    // }
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
