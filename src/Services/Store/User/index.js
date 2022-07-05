import { createSlice } from "@reduxjs/toolkit";
import { errorToast, successToast } from "../../Utils/Helpers/toastHelper";
import { createUser } from "./createUser";
import { getUsers } from "./getUsers";

const userStore = createSlice({
  name: "user",
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: {
    [createUser.fulfilled]: (state, action) => {
      successToast("Manager Created");
    },
    [createUser.rejected]: (state, action) => {
      errorToast("Failed");
    },
    [getUsers.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.list = undefined;
    },
  },
});

export default userStore.reducer;
