import React, { useEffect , Component } from "react";
//import Styles from './CreateSurvey.module.scss'
import { useDispatch } from "react-redux";
import { getCompanyNames } from "../../../../Services/Store/Company/getCompanyNames";
import { useSelector } from "react-redux";



const CreateSurvey = () => {
  const dispatch = useDispatch();
  const compnayNameList = useSelector((state) => state.company.list);

  // useEffect(() => {
  //   dispatch(getCompanyNames());
  // }, [dispatch]);

  return <>
  
  </>;
};

export default CreateSurvey;
