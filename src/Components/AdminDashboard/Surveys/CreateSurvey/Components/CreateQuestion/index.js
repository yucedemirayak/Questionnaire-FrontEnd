import React, { useEffect, useRef } from "react";
//import Styles from "./CreateQuestion.module.scss"
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { getCompanyNames } from "../../../../../../Services/Store/Company/getCompanyNames";
import { setSurveyComponent } from "../../../../../../Services/Store/CreateSurvey";
import { questionTypes } from "../../../../../../Services/Utils/Enums/QuestionTypes/questionTypes";

const CreateQuestion = () => {
  const dispatch = useDispatch();
  const surveyValues = useSelector((state) => state.createSurvey.survey);
  const qtyFormRef = useRef();
  const questionFormRef = useRef();
  // const questionQTY = useSelector(
  //   (state) => state.createSurvey.survey.questionQTY
  // );

  // const createNewSurveyTitle = async (values) => {
  //   await dispatch(setSurveyComponent("CreateOptions"));
  // };

  const handleSubmit = () => {
    if (qtyFormRef.current) {
      qtyFormRef.current.handleSubmit();
    }
  };

  const renderQuestions = (qty, component) => {
    const output = [];
    for (var i = 1; i <= qty; i++) {
      output.push(component);
    }
    return output;
  };

  const renderOptions = (qty, optionType) => {
    const output = [];

    for (var i = 1; i <= qty; i++) {
      output.push(optionFormikEl(optionType));
    }
    return output;
  };

  const optionFormikEl = (optionType) => {
    var fieldType = "";
    if (optionType == questionTypes.MULTIPLE_CHOICE) {
      fieldType = "checkbox";
    } else if (optionType == questionTypes.SINGLE_CHOICE) {
      fieldType = "radio";
    } else {
      fieldType = "text";
    }
    const formikEl = (
      <Formik initialValues={{ text: "" , selected:""}} validationSchema={""}>
        {({ errors, touched, handleChange, values }) => (
          <Form className="border border-1 m-1">
            {optionFieldEl(fieldType)}
          </Form>
        )}
      </Formik>
    );
    return formikEl;
  };

  const optionFieldEl = (fieldType) => {
    if (fieldType == "checkbox") {
      return (
        <>
          <Field type={fieldType} name="selected"></Field>
          <Field type="text" name="text"></Field>
        </>
      );
    }
    else if (fieldType == "radio") {
      return (
        <>
          <Field type={fieldType} name="selected"></Field>
          <Field type="text" name="text"></Field>
        </>
      );
    }
  };

  const backToTitle = async () => {
    await dispatch(setSurveyComponent("CreateTitle"));
  };

  useEffect(() => {
    dispatch(getCompanyNames());
  }, [dispatch]);
  return (
    <>
      <div className="row">
        <section className="offset-1 col-10">
          <div className="d-flex">
            <div className="modal-body">
              <div className="form-floating">
                <input
                  disabled
                  value={surveyValues.title}
                  className="form-control"
                />
                <label htmlFor="floatingInput">Survey Title</label>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="modal-body">
              <div className="form-floating">
                <input
                  disabled
                  value={surveyValues.companyName}
                  className="form-control"
                />
                <label htmlFor="floatingInput">Company Name</label>
              </div>
            </div>
          </div>
        </section>

        <section className="offset-2 col-8">
          <div className="d-flex">
            <Formik
              innerRef={qtyFormRef}
              initialValues={{ questionQTY: 1 }}
              validationSchema={""}
              onSubmit={(_values) => {
                console.log(_values);
              }}
            >
              {({ errors, touched, handleChange, values }) => (
                <Form className="row">
                  <div className="col-12">
                    <div className="modal-body">
                      <div className="form-floating">
                        <Field
                          type="number"
                          name="questionQTY"
                          onChange={handleChange}
                          className="form-control"
                        />
                        <label htmlFor="floatingInput">
                          {"Question Quantity"}
                        </label>
                      </div>
                    </div>
                    {renderQuestions(
                      values.questionQTY,
                      <Formik
                        innerRef={questionFormRef}
                        initialValues={{
                          title: "",
                          questionType: "",
                          optionQTY: 1,
                        }}
                        validationSchema={""}
                        onSubmit={(_values) => {
                          console.log(_values);
                        }}
                      >
                        {({ errors, touched, handleChange, values }) => (
                          <Form className="offset-1 col-10">
                            <div className="modal-body">
                              <div className="form-floating">
                                <Field
                                  type="text"
                                  name="title"
                                  onChange={handleChange}
                                  className="form-control"
                                />
                                <label htmlFor="floatingInput">
                                  {"Question Title"}
                                </label>
                              </div>
                            </div>
                            <div className="modal-body border border-1 m-3">
                              <div
                                id="my-radio-group"
                                className="text-decoration-underline"
                              >
                                Question Type
                              </div>
                              <div
                                role="group"
                                aria-labelledby="my-radio-group"
                                className="d-flex justify-content-between"
                                onChange={handleChange}
                              >
                                <label>
                                  <Field
                                    type="radio"
                                    name="questionType"
                                    value={questionTypes.MULTIPLE_CHOICE.toString()}
                                  />
                                  Multiple Select
                                </label>
                                <label>
                                  <Field
                                    type="radio"
                                    name="questionType"
                                    value={questionTypes.SINGLE_CHOICE.toString()}
                                  />
                                  Single Select
                                </label>
                                <label>
                                  <Field
                                    type="radio"
                                    name="questionType"
                                    value={questionTypes.COMMENT.toString()}
                                  />
                                  Text Input
                                </label>
                              </div>
                            </div>
                            <div className="modal-body">
                              <div className="form-floating">
                                <Field
                                  type="number"
                                  name="optionQTY"
                                  onChange={handleChange}
                                  className="form-control"
                                />
                                <label htmlFor="floatingInput">
                                  {"Option Quantity"}
                                </label>
                              </div>
                            </div>
                            <div className="offset-2 col-8">
                              {renderOptions(
                                values.optionQTY,
                                values.questionType
                              )}
                            </div>
                          </Form>
                        )}
                      </Formik>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </section>
        <section className="col-12 mt-5">
          <div className="modal-body d-flex justify-content-between">
            <button
              type="button"
              onClick={() => backToTitle()}
              className="btn btn-warning"
            >
              Prev
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                handleSubmit();
              }}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default CreateQuestion;
