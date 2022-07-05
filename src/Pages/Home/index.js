import React, { useEffect } from 'react'
import Styles from './Home.module.scss'
import LoginPanel from '../../Components/Login/LoginPanel'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import { userRoles } from '../../Services/Utils/Enums/UserRoles/userRoles';

const Home = () => {
  const { token } = useSelector((state) => state.auth);
  const { role } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const redirrect = () => {
    if (token) {
      if (role === userRoles.ADMIN) {
        navigate("/AdminDashboard")
      }
      else if (role === userRoles.MANAGER) {
        navigate("/ManagerDashboard")
      }
      else if (role === userRoles.USER) {
        navigate("/UserDashboard")
      }
    }
  };

  useEffect(() => {
    redirrect();
  });

  return (
    <>
    <LoginPanel/>
    </>
  )
}

export default Home