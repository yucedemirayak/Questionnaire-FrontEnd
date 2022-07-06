import React, { useEffect } from "react";
//import Styles from "./CreateTitle.module.scss";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { getCompanyNames } from "../../../../../../Services/Store/Company/getCompanyNames";
import {
  setSurveyComponent,
  setSurveyValues,
} from "../../../../../../Services/Store/CreateSurvey";
import { getCompanyNameById } from "../../../../../../Services/Store/CreateSurvey/getCompanyNameById";
import { SurveyValuesModel } from "../../../../../../Services/Utils/Forms/Survey/Values/initialModel";
import { SurveyValuesValidationScheme } from "../../../../../../Services/Utils/Forms/Survey/Values/validationScheme";

const CreateTitle = () => {
  const dispatch = useDispatch();
  const companyNameList = useSelector((state) => state.company.nameList);

  const createNewSurveyTitle = async (values) => {
    await dispatch(setSurveyValues(values));
    await dispatch(setSurveyComponent("CreateQuestion"));
    console.log(values);
    var companyId = Object.values(values)[1];
    await dispatch(getCompanyNameById(companyId));
  };

  useEffect(() => {
    dispatch(getCompanyNames());
  }, [dispatch]);
  return (
    <>
      <section className="">
        <div className="d-flex">
          <Formik
            initialValues={SurveyValuesModel}
            validationSchema={SurveyValuesValidationScheme}
            onSubmit={(_values) => {
              createNewSurveyTitle(_values);
            }}
          >
            {({ errors, touched, handleChange }) => (
              <Form>
                <div className="modal-body">
                  <div className="form-floating">
                    <Field
                      type="text"
                      name="title"
                      onChange={handleChange}
                      className="form-control"
                    />
                    <label htmlFor="floatingInput">
                      {"Survey Title"}
                      {errors.title && touched.title ? (
                        <span className="text-danger">
                          <br /> {errors.title}
                        </span>
                      ) : null}
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
                      {companyNameList.map((x) => (
                        <option key={x.id} value={x.id}>
                          {x.name}
                        </option>
                      ))}
                    </Field>
                    <label htmlFor="floatingInput">
                      {"Company Id"}
                      {errors.companyId && touched.companyId ? (
                        <small className="text-danger">
                          <br />
                          {errors.companyId}
                        </small>
                      ) : null}
                    </label>
                  </div>
                </div>

                <div className="modal-body">
                  <button type="submit" className="btn btn-primary">
                    Next
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

export default CreateTitle;
