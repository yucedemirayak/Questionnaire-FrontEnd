import React from "react";
// import Styles from "./AdminDashboard.module.scss";
import { useSelector } from "react-redux";
import CreateCompany from "../../Components/AdminDashboard/Companies/CreateCompany";
import CompanyList from "../../Components/AdminDashboard/Companies/CompanyList";
import CreateManager from "../../Components/AdminDashboard/Managers/CreateManager";
import ManagerList from "../../Components/AdminDashboard/Managers/ManagerList";
import CreateUser from "../../Components/AdminDashboard/Users/CreateUser";
import UserList from "../../Components/AdminDashboard/Users/UserList";
import CreateSurvey from "../../Components/AdminDashboard/Surveys/CreateSurvey";
import SurveyList from "../../Components/AdminDashboard/Surveys/SurveyList";
import Results from "../../Components/AdminDashboard/Results";


const AdminDashboard = () => {
  const dCompName = useSelector((state) => state.dashboard.name);
  const setComponent = (componentName) => {
    if (!dCompName) {
      return null;
    }
    switch (componentName) {
      case "CreateCompany":
        return <CreateCompany />;
      case "CompanyList":
        return <CompanyList />;
      case "CreateManager":
        return <CreateManager />;
      case "ManagerList":
        return <ManagerList />;
      case "CreateUser":
        return <CreateUser />;
      case "UserList":
        return <UserList />;
      case "CreateSurvey":
        return <CreateSurvey />;
      case "SurveyList":
        return <SurveyList />;
      case "Results":
        return <Results/>;
      default:
        break;
    }
  };

  return (
    <section className="ant-layout bg-white">
      <main className="ant-layout-content p-5">{setComponent(dCompName)}</main>
    </section>
  );
};

export default AdminDashboard;
