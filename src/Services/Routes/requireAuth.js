import { Navigate, useLocation } from "react-router";
import store from "../Store";
import React from "react";

function RequireAuth({ children, _userRole }) {
  let location = useLocation();
  const state = store.getState((state) => state);
  const authToken = state.auth.token;
  const userRole = state.auth.role;
  if (!authToken || userRole !== _userRole) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;
