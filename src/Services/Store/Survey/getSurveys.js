import { createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../Utils/Helpers/requestHelpers";

export const getSurveys = createAsyncThunk(
  "Admin/GetSurveysWithOptions",
  async () => {
    const response = await Get("Admin/GetSurveysWithOptions");
    return response.data;
  }
);