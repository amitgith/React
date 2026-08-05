import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { loginUserApi } from "../api/AutHapi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";

export const useAuthHook = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
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

  const loginForm = async (data) => {
    // let user = registeredUsers.find((val) => {
    //   return val.email === data.email && val.password === data.password;
    // });
    // if (!user) {
    //   toast.error("Invalid something");
    //   return;
    // }

    try {
      let response = await loginUserApi(data);
      // console.log(response);
      dispatch(addUser(response));
      toast.success("User login in");
    } catch (error) {
      console.log("from api error", error);
    }
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
