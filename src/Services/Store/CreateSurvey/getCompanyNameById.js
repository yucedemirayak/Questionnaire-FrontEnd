import { createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../Utils/Helpers/requestHelpers";

export const getCompanyNameById = createAsyncThunk(
  "Admin/getCompanyNameById?id=",
  async (id, { dispatch }) => {
    const data = await Get("Admin/getCompanyNameById?id=" + id);
    return data;
  }
);