import React from "react";
import { useSelector } from "react-redux";
import Styles from "./UserDashboard.module.scss";

const UserDashboard = () => {
  const dCompName = useSelector((state) => state.dComponents.name);
  const setComponent = (componentName) => {
    if (!dCompName) {
      return null;
    }
    switch (componentName) {
      case "SurveyList":
        return;
      case "PreviousSurveys":
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

export default UserDashboard;
