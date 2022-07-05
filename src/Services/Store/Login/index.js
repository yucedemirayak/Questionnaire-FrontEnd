import { createSlice } from "@reduxjs/toolkit";
import { _setLogin } from "./loginActions";

const loginStore = createSlice({
  name: "login",
  initialState: {
    name: "",
  },
  reducers: {
    setLogin: _setLogin,
  },
});

export const { setLogin } = loginStore.actions;

export default loginStore.reducer;