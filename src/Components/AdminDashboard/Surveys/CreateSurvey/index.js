import React from "react";
//import Styles from './CreateSurvey.module.scss'
import { useSelector } from "react-redux";
import CreateTitle from "./Components/CreateTitle";
import CreateQuestion from "./Components/CreateQuestion";
import CreateOptions from "./Components/CreateOptions";
import AssignUsers from "./Components/AssignUsers";
import Preview from "./Components/Preview";

const CreateSurvey = () => {
  const { componentName } = useSelector((state) => state.createSurvey);
  const setComponent = (componentName) => {
    if (!componentName) {
      return null;
    }
    switch (componentName) {
      case "CreateTitle":
        return <CreateTitle />;
      case "CreateQuestion":
        return <CreateQuestion />;
      case "CreateOptions":
        return <CreateOptions />;
      case "AssignUsers":
        return <AssignUsers />;
      case "Preview":
        return <Preview />;
      default:
        break;
    }
  };

  return <>{setComponent(componentName)}</>;
};

export default CreateSurvey;
