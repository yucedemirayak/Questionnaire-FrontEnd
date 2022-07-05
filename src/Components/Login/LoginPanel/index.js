import React from "react";
import { useNavigate } from "react-router";
import Styles from "./LoginPanel.module.scss";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../Services/Store/Login";

const LoginPanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setTarget = (target) => {
    dispatch(setLogin(target));
    navigate("/Login")
  };

  return (
    <>
      <div className={`${Styles.login}`}>
        <button className="btn btn-danger" onClick={() => {setTarget("Admin")}}>
          Admin Login
        </button>
        <button className="btn btn-warning" onClick={() => {setTarget("Manager")}}>
          Manager Login
        </button>
        <button className="btn btn-primary" onClick={() => {setTarget("User")}}>
          User Login
        </button>
      </div>
    </>
  );
};

export default LoginPanel;
