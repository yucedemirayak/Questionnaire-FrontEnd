import React, { useEffect } from "react";
// import Styles from "./CreateManager.module.scss";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import { CreateManagerModel } from "../../../../Services/Utils/Forms/Create/Manager/initialModel";
import { CreateManagerValidationScheme } from "../../../../Services/Utils/Forms/Create/Manager/validationScheme";
import { getCompanyNames } from "../../../../Services/Store/Company/getCompanyNames";
import { useSelector } from "react-redux";
import { createManager } from "../../../../Services/Store/Manager/createManager";

const CreateManager = () => {
  const dispatch = useDispatch();
  const { nameList } = useSelector((state) => state.company)

  const rstForm = () => {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  };

  const createNewManager = async (values) => {
    await dispatch(createManager(values));
    if (createManager.fulfilled) {
      rstForm();
    }
  };

  useEffect(() => {
    dispatch(getCompanyNames())
  }, [dispatch]);

  return (
    <>
      <section className="">
        <div className="d-flex">
          <Formik
            initialValues={CreateManagerModel}
            validationSchema={CreateManagerValidationScheme}
            onSubmit={(_values) => {
              createNewManager(_values);
            }}
          >
            {({ errors, touched, handleChange }) => (
              <Form>
                <div className="modal-body">
                  <div className="form-floating">
                    <Field
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      className="form-control"
                    />
                    <label htmlFor="floatingInput">
                      {"First Name"}
                      {errors.firstName && touched.firstName ? (
                        <span className="text-danger"><br/> {errors.firstName}</span>
                      ) : (
                        null
                      )}
                    </label>
                  </div>
                </div>

                <div className="modal-body">
                  <div className="form-floating">
                    <Field
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      className="form-control"
                    />
                    <label htmlFor="floatingInput">
                      {"Last Name "}
                      {errors.lastName && touched.lastName ? (
                        <span className="text-danger"><br/>{errors.lastName}</span>
                      ) : (
                        null
                      )}
                    </label>
                  </div>
                </div>

                <div className="modal-body">
                  <div className="form-floating">
                    <Field
                      type="email"
                      name="email"
                      onChange={handleChange}
                      className="form-control"
                    />
                    <label htmlFor="floatingInput">
                      {"Email"}
                      {errors.email && touched.email ? (
                        <span className="text-danger"><br/> {errors.email}</span>
                      ) : (
                        null
                      )}
                    </label>
                  </div>
                </div>

                <div className="modal-body">
                  <div className="form-floating">
                    <Field
                      type="password"
                      name="password"
                      onChange={handleChange}
                      className="form-control"
                    />
                    <label htmlFor="floatingInput">
                      {"Password"}
                      {errors.password && touched.password ? (
                        <span className="text-danger"><br/>{errors.password}</span>
                      ) : (
                        null
                      )}
                    </label>
                  </div>
                </div>

                <div className="modal-body">
                  <div className="form-floating">
                    <Field
                      type="password"
                      name="rePassword"
                      onChange={handleChange}
                      className="form-control"
                    />
                    <label htmlFor="floatingInput">
                      {"Re-Password"}
                      {errors.rePassword && touched.rePassword ? (
                        <span className="text-danger"><br/>{errors.rePassword}</span>
                      ) : (
                        null
                      )}
                    </label>
                  </div>
                </div>

                <div className="modal-body">
                  <div className="form-floating">
                    <Field
                      type="number"
                      as="select"
                      name="companyId"
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option key={0} value=""></option>
                      {nameList.map(x => <option key={x.id} value={x.id}>{x.name}</option>)}
                    </Field>
                    <label htmlFor="floatingInput">
                      {"Company Id"}
                      {errors.companyId && touched.companyId ? (
                        <small className="text-danger"><br/>{errors.companyId}</small>
                      ) : (
                        null
                      )}
                    </label>
                  </div>
                </div>

                <div className="modal-body">
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default CreateManager;
