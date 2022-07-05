import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../Utils/Helpers/requestHelpers";

export const createManager = createAsyncThunk(
  "Admin/newManager",
  async (manager, { dispatch }) => {
    delete manager["rePassword"];
    const response = await Post("Admin/newManager", manager);
    return response.data;
  }
);