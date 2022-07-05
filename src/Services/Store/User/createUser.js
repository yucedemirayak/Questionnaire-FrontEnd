import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../Utils/Helpers/requestHelpers";

export const createUser = createAsyncThunk(
  "Admin/newUser",
  async (user, { dispatch }) => {
    delete user["rePassword"];
    const response = await Post("Admin/newUser", user);
    return response.data;
  }
);