import { createSlice } from "@reduxjs/toolkit";
import { _setSurveyComponent, _setSurveyTitle } from "./createSurveyActions";

const createSurveyStore = createSlice({
  name: "createSurvey",
  initialState: {
    componentName: "CreateTitle",
    survey: {
      title: "",
      companyId: "",
      questions: [
        {
          title: "",
          questionType: "",
          surveyId: "",
          options: [{ text: "", questionId: "", id: "" }],
        },
      ],
    },
  },
  reducers: {
    setSurveyComponent: _setSurveyComponent,
    setSurveyTitle: _setSurveyTitle,
  },
});

export const { setSurveyComponent, setSurveyTitle } = createSurveyStore.actions;

export default createSurveyStore.reducer;
