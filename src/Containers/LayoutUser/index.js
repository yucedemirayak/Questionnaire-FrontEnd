import React from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserSideBar from "./UserSideBar";

const LayoutUser = () => {
  return (
    <>
      <UserHeader />
      <section className="ant-layout ant-layout-has-sider">
        <UserSideBar />
        <Outlet />
      </section>
    </>
  );
};

export default LayoutUser;
