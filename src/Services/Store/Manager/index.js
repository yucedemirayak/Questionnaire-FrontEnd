import { createSlice } from "@reduxjs/toolkit";
import { errorToast, successToast } from "../../Utils/Helpers/toastHelper";
import { createManager } from "./createManager";
import { getManagers } from "./getManagers";

const managerStore = createSlice({
  name: "manager",
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: {
    [createManager.fulfilled]: (state, action) => {
      successToast("Manager Created");
    },
    [createManager.rejected]: (state, action) => {
      errorToast("Failed");
    },
    [getManagers.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [getManagers.rejected]: (state, action) => {
      state.list = undefined;
    },
  },
});

export default managerStore.reducer;
