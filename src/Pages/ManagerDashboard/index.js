import React from "react";
import Styles from './ManagerDashboard.module.scss'
import { useSelector } from "react-redux";

const ManagerDashboard = () => {
  const dCompName = useSelector((state) => state.dComponents.name);
  const setComponent = (componentName) => {
    if (!dCompName) {
      return null;
    }
    switch (componentName) {
      case "CreateUserModal":
        return;
      case "UserList":
        return;
      case "CreateSurveyModal":
        return;
      case "SurveyList":
        return;
      case "Results":
        return;
      default:
        break;
    }
  };

  return (
    <>
      <section className="ant-layout bg-white">
        <main className="ant-layout-content p-5">
          {setComponent(dCompName)}
        </main>
      </section>
    </>
  );
};

export default ManagerDashboard;
