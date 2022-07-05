import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSideBar from "./AdminSideBar";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <AdminHeader />
      <section className="ant-layout ant-layout-has-sider">
        <AdminSideBar />
        <Outlet />
      </section>
    </>
  );
};

export default LayoutAdmin;
