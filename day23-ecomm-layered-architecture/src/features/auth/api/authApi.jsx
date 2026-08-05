import { api } from "../../../config/api";

export const loginUserApi = async (credentails) => {
  try {
    let res = await api.post("/auth/login", credentails);
    console.log("response from login api", res);
  } catch (error) {
    console.log("error in login api", error);
  }
};
