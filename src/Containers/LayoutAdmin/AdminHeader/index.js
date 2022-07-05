import React from "react";
import Styles from "./AdminHeader.module.scss";
import { Link } from "react-router-dom";

const AdminHeader = () => {

  return (
    <nav className="navbar bg-gradient bg-secondary">
      <div className="container-fluid">
        <Link className={`navbar-brand me-5  ms-2`} to="./Dashboard">
          <span className={`${Styles.brand} text-uppercase font-monospace`}>
            admin dashboard
          </span>
        </Link>

      </div>
    </nav>
  );
};

export default AdminHeader;