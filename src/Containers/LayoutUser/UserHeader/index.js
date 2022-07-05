import React from "react";
import Styles from "./UserHeader.module.scss";
import { Link } from "react-router-dom";

const UserHeader = () => {
  return (
    <nav className="navbar bg-gradient bg-secondary">
      <div className="container-fluid">
        <Link className={`navbar-brand me-5  ms-2`} to="./Dashboard">
          <span className={`${Styles.brand} text-uppercase font-monospace`}>
            user dashboard
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default UserHeader;
