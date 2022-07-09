import { createSlice } from "@reduxjs/toolkit";
import { _setQuestionQTY, _setSurveyComponent, _setSurveyValues } from "./createSurveyActions";
import { getCompanyNameById } from "./getCompanyNameById";

const createSurveyStore = createSlice({
  name: "createSurvey",
  initialState: {
    componentName: "CreateTitle",
    survey: {
      title: "",
      companyId: "",
      companyName: "",
      questionQTY: "",
      questions: [
        {
          title: "",
          questionType: "",
          optionQTY: 0,
          options: [{ text: "", optionType: ""}],
        },
      ],
    },
  },
  reducers: {
    setSurveyComponent: _setSurveyComponent,
    setSurveyValues: _setSurveyValues,
    setQuestionQTY: _setQuestionQTY,
  },
  extraReducers: {
    [getCompanyNameById.fulfilled]: (state, action) => {
      state.survey.companyName = action.payload.data.name;
    },
    [getCompanyNameById.rejected]: (state, action) => {
      state.survey.companyName = undefined;
    },
  },
});

export const { setSurveyComponent, setSurveyValues, setQuestionQTY } = createSurveyStore.actions;

export default createSurveyStore.reducer;
