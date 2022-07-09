export const _setSurveyComponent = (state, action) => {
    state.componentName = action.payload;
  };

  export const _setSurveyValues = (state, action) => {
    state.survey.title = action.payload.title;
    state.survey.companyId = action.payload.companyId;
  };

  export const _setQuestionQTY = (state, action) => {
    state.survey.questionQTY = action.payload;
  }