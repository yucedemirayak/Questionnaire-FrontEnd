import { createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../Utils/Helpers/requestHelpers";

export const getCompaniesWithDetails = createAsyncThunk(
  "Admin/getCompaniesWithDetails",
  async () => {
    const response = await Get("Admin/getCompaniesWithDetails");
    return response.data;
  }
);