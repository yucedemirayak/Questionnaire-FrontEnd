import React, { useEffect } from "react";
import Styles from './Login.module.scss'
import { useSelector } from "react-redux";
import LoginAdmin from "../../Components/Login/LoginAdmin";
import LoginManager from "../../Components/Login/LoginManager";
import LoginUser from "../../Components/Login/LoginUser";
import { useNavigate } from "react-router";

const Login = () => {
  const dCompName = useSelector((state) => state.login.name);
  const navigate = useNavigate();
  const setComponent = (componentName) => {
    if (!dCompName) {
      return null;
    }
    switch (componentName) {
      case "Admin":
        return <LoginAdmin/>;
      case "Manager":
        return <LoginManager/>;
      case "User":
        return <LoginUser/>;
      default:
        break;
    }
  };

  const redirrect = () => {
    if (!dCompName) {
      navigate("/");
    }
  }

  useEffect(() => {
    redirrect();
  });

  return (
    <>
        <main className="ant-layout-content">
          {setComponent(dCompName)}
        </main>
    </>
  );
};

export default Login;
