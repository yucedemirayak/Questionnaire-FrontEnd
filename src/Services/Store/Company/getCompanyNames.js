import { createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../Utils/Helpers/requestHelpers";

export const getCompanyNames = createAsyncThunk(
  "Admin/getCompanyNames",
  async () => {
    const response = await Get("Admin/getCompanyNames");
    return response.data;
  }
);