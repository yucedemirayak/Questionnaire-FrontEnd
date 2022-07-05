import React from "react";
import Styles from "./AdminSideBar.module.scss";
import {
  RiAddCircleLine,
  RiAdminFill,
  RiListUnordered,
  RiUser3Line,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { useDispatch } from "react-redux";
import { setComponent } from "../../../Services/Store/Dashboard";
import { authLogOut } from "../../../Services/Store/Auth";
import { useNavigate } from "react-router";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Companies", "sub1", "", [
    getItem("Create Company", "CreateCompany", <RiAddCircleLine />),
    getItem("Company List", "CompanyList", <RiListUnordered />),
  ]),
  getItem("Managers", "sub2", <RiAdminFill />, [
    getItem("Create Manager", "CreateManager", <RiAddCircleLine />),
    getItem("Manager List", "ManagerList", <RiListUnordered />),
  ]),
  getItem("Users", "sub3", <RiUser3Line />, [
    getItem("Create User", "CreateUser", <RiAddCircleLine />),
    getItem("User List", "UserList", <RiListUnordered />),
  ]),
  getItem("Surveys", "sub4", "", [
    getItem("Create Survey", "CreateSurvey", <RiAddCircleLine />),
    getItem("Survey List", "SurveyList", <RiListUnordered />),
    getItem("Assign Users", "AssignUsers", ""),
  ]),
  getItem("Results", "Results", "",),
  getItem("LogOut", "LogOut", <RiLogoutBoxRLine />),
];

const AdminSideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    await dispatch(authLogOut());
    await navigate("./");
  };
  const onClick = (e) => {
    if (e.key === "LogOut") {
      logout();
      return;
    }
    dispatch(setComponent(e.key));
  };
  return (
    <aside className={`${Styles.side_menu} ant-layout-sider bg-white`}>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={[""]}
        defaultOpenKeys={[""]}
        mode="inline"
        items={items}
      />
    </aside>
  );
};

export default AdminSideBar;
