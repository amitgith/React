import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { loginUserApi } from "../api/AutHapi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { loginUserAction } from "./authAction";

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
    console.log("register", data);
  };

  const loginForm = async (data) => {
    try {
      dispatch(loginUserAction(data));
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
