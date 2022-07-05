import { createSlice } from "@reduxjs/toolkit";
import { errorToast, successToast } from "../../Utils/Helpers/toastHelper";
import { createSurvey } from "./createSurvey";
import { getSurveys } from "./getSurveys";

const surveyStore = createSlice({
  name: "survey",
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: {
    [getSurveys.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [getSurveys.rejected]: (state, action) => {
      state.list = undefined;
    },
    [createSurvey.fulfilled]: (state, action) => {
      successToast("Survey Created");
    },
    [createSurvey.fulfilled]: (state, action) => {
      errorToast("Failed");
    },
  },
});

export default surveyStore.reducer;
