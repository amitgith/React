import { useNavigate } from "react-router";

export const useAuthHook = () => {
  let navigate = useNavigate();
  return {
    navigate,
  };
};
