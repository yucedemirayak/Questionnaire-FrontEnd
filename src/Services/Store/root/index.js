import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import authStore from "../Auth";
import dashboardStore from "../Dashboard"
import loginStore from "../Login"
import companyStore from "../Company"
import managerStore from "../Manager"
import userStore from "../User"
import surveyStore from "../Survey"
import createSurveyStore from "../CreateSurvey"

const rootReducer = combineReducers({
  auth: authStore,
  dashboardComponents: dashboardStore,
  login: loginStore,
  company: companyStore,
  manager: managerStore,
  user: userStore,
  survey: surveyStore,
  createSurvey: createSurveyStore,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth" , "company" , "manager", "createSurvey"],
};

const reducers = persistReducer(persistConfig, rootReducer);

export default reducers;
