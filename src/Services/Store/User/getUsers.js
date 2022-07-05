import { createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../Utils/Helpers/requestHelpers";

export const getUsers = createAsyncThunk(
  "Admin/getUsersWithCompanyDetails",
  async () => {
    const response = await Get("Admin/getUsersWithCompanyDetails");
    return response.data;
  }
);