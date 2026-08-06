import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      console.log("thunk action triggered...");
      let res = await api.post("auth/login", credentials);
      localStorage.setItem("accessToken", res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue("login failed");
    }
  },
);
