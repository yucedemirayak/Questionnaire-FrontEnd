import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import Styles from "./CreateCompany.module.scss";
import { CreateCompanyModel } from "../../../../Services/Utils/Forms/Create/Company/initialModel";
import { CreateCompanyValidationScheme } from "../../../../Services/Utils/Forms/Create/Company/validationScheme";
import { createCompany } from "../../../../Services/Store/Company/createCompany";

const CreateCompany = () => {
  const dispatch = useDispatch();

  const rstForm = () => {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  };

  const createNewCompany = async (values) => {
    await dispatch(createCompany(values))
    if (createCompany.fulfilled) {
      rstForm();
    }
  }

  return (
    <>
      <section className="">
        <div className="d-flex">
          <Formik
            initialValues={CreateCompanyModel}
            validationSchema={CreateCompanyValidationScheme}
            onSubmit={(_values) => {
              createNewCompany(_values);
            }}
          >
            {({ errors, touched, handleChange }) => (
              <Form>
                <div className="modal-body">
                  <div className="form-floating">
                    <Field
                      type="text"
                      name="name"
                      onChange={handleChange}
                      className="form-control"
                    />
                    <label htmlFor="floatingInput">
                      {" "}
                      {errors.name && touched.name ? (
                        <small>{errors.name}</small>
                      ) : (
                        "Company Name"
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

export default CreateCompany;
