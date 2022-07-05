import { createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../Utils/Helpers/requestHelpers";

export const getManagers = createAsyncThunk(
  "Admin/getManagersWithCompanyDetails",
  async () => {
    const response = await Get("Admin/getManagersWithCompanyDetails");
    return response.data;
  }
);