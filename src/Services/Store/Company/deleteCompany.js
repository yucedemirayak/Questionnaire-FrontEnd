import { createAsyncThunk } from "@reduxjs/toolkit";
import { Delete } from "../../Utils/Helpers/requestHelpers";

export const deleteCompany = createAsyncThunk(
  "Admin/deleteCompany?id=",
  async (id, { dispatch }) => {
    const data = await Delete("Admin/deleteCompany?id=" + id);
    return data;
  }
);
