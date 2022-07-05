import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../Utils/Helpers/requestHelpers";

export const createSurvey = createAsyncThunk(
  "Admin/createSurvey",
  async (survey, { dispatch }) => {
    const response = await Post("Admin/createSurvey", survey);
    return response.data;
  }
);