import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { userRoles } from "../Utils/Enums/UserRoles/userRoles";
import LayoutAdmin from "../../Containers/LayoutAdmin";
import LayoutManager from "../../Containers/LayoutManager";
import Home from "../../Pages/Home";
import AdminDashboard from "../../Pages/AdminDashBoard";
import ManagerDashboard from "../../Pages/ManagerDashboard";
import UserDashboard from "../../Pages/UserDashboard";
import Login from "../../Pages/Login";
import RequireAuth from "./requireAuth";
import LayoutUser from "../../Containers/LayoutUser";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route
          element={
            <RequireAuth _userRole={userRoles.ADMIN}>
              <LayoutAdmin />{" "}
            </RequireAuth>
          }
        >
          <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        </Route>
        <Route
          element={
            <RequireAuth _userRole={userRoles.MANAGER}>
              <LayoutManager />{" "}
            </RequireAuth>
          }
        >
          <Route
            exact
            path="/ManagerDashboard"
            element={<ManagerDashboard />}
          />
        </Route>
        <Route
          element={
            <RequireAuth _userRole={userRoles.USER}>
              <LayoutUser />{" "}
            </RequireAuth>
          }
        >
          <Route
            exact
            path="/UserDashboard"
            element={<UserDashboard />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default PageRoutes;
