import React from "react";
import Styles from "./ManagerSideBar.module.scss";
import {
  RiAddCircleLine,
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
  getItem("Users", "sub1", <RiUser3Line />, [
    getItem("Create User", "CreateUserModal", <RiAddCircleLine />),
    getItem("User List", "UserListModal", <RiListUnordered />),
  ]),
  getItem("Surveys", "sub2", "", [
    getItem("Create Survey", "CreateSurveyModal", <RiAddCircleLine />),
    getItem("Survey List", "SurveyList", <RiListUnordered />),
    getItem("Assign Users", "AssignUsers", ""),
  ]),
  getItem("Results", "sub3", "",),
  getItem("LogOut", "LogOut", <RiLogoutBoxRLine />),
];


const ManagerSideBar = () => {
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
    console.log(e);
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

export default ManagerSideBar