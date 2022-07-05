import React from "react";
import { Outlet } from "react-router-dom";
import ManagerHeader from "./ManagerHeader";
import ManagerSideBar from "./ManagerSideBar";

const LayoutManager = () => {
  return (
    <>
      <ManagerHeader />
      <section className="ant-layout ant-layout-has-sider">
        <ManagerSideBar />
        <Outlet />
      </section>
    </>
  );
};

export default LayoutManager;
