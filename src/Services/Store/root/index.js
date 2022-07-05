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

const rootReducer = combineReducers({
  auth: authStore,
  dComponents: dashboardStore,
  login: loginStore,
  company: companyStore,
  manager: managerStore,
  user: userStore,
  survey: surveyStore,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth" , "company" , "manager"],
};

const reducers = persistReducer(persistConfig, rootReducer);

export default reducers;
