export const _setSurveyComponent = (state, action) => {
    state.componentName = action.payload;
  };

  export const _setSurveyTitle = (state, action) => {
    state.survey.title = action.payload.title;
    state.survey.companyId = action.payload.companyId;
  };