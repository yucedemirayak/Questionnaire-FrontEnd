import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { LogInModel } from "../../../Services/Utils/Forms/Log-In/initialModel";
import { LogInValidationScheme } from "../../../Services/Utils/Forms/Log-In/validationScheme";
import { useDispatch } from "react-redux";
import { createAdminToken } from "../../../Services/Store/Auth/createToken";
import Styles from "./LoginAdmin.module.scss"

const LoginAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (loginModel) => {
    await dispatch(createAdminToken(loginModel));
    if (await createAdminToken.fulfilled) {
      navigate("/AdminDashboard");
    }
  };

  return (
    <section className={Styles.login}>
      <h2>Admin Login</h2>
      <div className="d-flex justify-content-center">
        <Formik
          initialValues={LogInModel}
          validationSchema={LogInValidationScheme}
          onSubmit={(_values) => {
            login(_values);
          }}
        >
          {({ errors, touched, handleChange }) => (
            <Form>
              <div className="mb-4">
                <span>Email Address</span>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label">
                  {errors.email && touched.email ? (
                    <small>{errors.email}</small>
                  ) : null}
                </label>
              </div>

              <div className="form-outline mb-3">
              <span>Password</span>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter password"
                />
                <label className="form-label" htmlFor="form3Example4">
                  {errors.password && touched.password ? (
                    <small>{errors.password}</small>
                  ) : null}
                </label>
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <Link to={"/"} className="btn btn-warning" type="button">
                  Back
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default LoginAdmin;
