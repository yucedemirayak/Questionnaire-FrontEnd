import { createSlice } from "@reduxjs/toolkit";
import { errorToast, successToast } from "../../Utils/Helpers/toastHelper";
import { _setCompany } from "./companyActions";
import { createCompany } from "./createCompany";
import { deleteCompany } from "./deleteCompany";
import { getCompaniesWithDetails } from "./getAllCompaniesWithDetails";
import { getCompanyNames } from "./getCompanyNames";

const companyStore = createSlice({
  name: "company",
  initialState: {
    list: [],
    nameList: [],
  },
  reducers: {
    setCompany: _setCompany,
  },
  extraReducers: {
    [createCompany.fulfilled]: (state, action) => {
      successToast("Company Created");
    },
    [createCompany.rejected]: (state, action) => {
      errorToast("Failed");
    },
    [getCompaniesWithDetails.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [getCompaniesWithDetails.rejected]: (state, action) => {
      state.list = undefined;
    },
    [deleteCompany.fulfilled]: (state, action) => {
      successToast("Company Name : " + action.payload.data.name + " deleted");
    },
    [deleteCompany.rejected]: (state, action) => {
      errorToast("Company could not be deleted");
    },
    [getCompanyNames.fulfilled]: (state, action) => {
      state.nameList = action.payload;
    },
    [getCompanyNames.rejected]: (state, action) => {
      state.nameList = undefined;
    },
  },
});

export const { setCompany } = companyStore.actions;

export default companyStore.reducer;
