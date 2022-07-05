import React from "react";
import Styles from "./UserSideBar.module.scss";
import {
  RiListUnordered,
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
  getItem("Surveys", "Surveys", "", [
    getItem("Survey List", "SurveyList", <RiListUnordered />),
  ]),
  getItem("LogOut", "LogOut", <RiLogoutBoxRLine />),
];

const UserSideBar = () => {
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

export default UserSideBar