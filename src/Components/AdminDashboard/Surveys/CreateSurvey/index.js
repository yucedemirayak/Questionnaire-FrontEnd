import React, { useEffect } from "react";
//import Styles from './CreateSurvey.module.scss'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSurveyComponent } from "../../../../Services/Store/CreateSurvey";
import CreateTitle from "./Components/CreateTitle";
import CreateQuestion from "./Components/CreateQuestion";
import CreateOptions from "./Components/CreateOptions";
import AssignUsers from "./Components/AssignUsers";
import Preview from "./Components/Preview";

const CreateSurvey = () => {
  const dispatch = useDispatch();
  const { componentName } = useSelector((state) => state.surveyComponent);
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
