import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../Utils/Helpers/requestHelpers";

export const createCompany = createAsyncThunk(
  "Admin/newCompany",
  async (companyName, { dispatch }) => {
    const response = await Post("Admin/newCompany", companyName);
    return response.data;
  }
);