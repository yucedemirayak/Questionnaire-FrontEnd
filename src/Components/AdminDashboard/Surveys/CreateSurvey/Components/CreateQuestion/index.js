import React, { useEffect, useRef } from "react";
//import Styles from "./CreateQuestion.module.scss"
import { useDispatch } from "react-redux";
import { Field, FieldArray, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { getCompanyNames } from "../../../../../../Services/Store/Company/getCompanyNames";
import {
  setQuestionQTY,
  setSurveyComponent,
} from "../../../../../../Services/Store/CreateSurvey";
import { questionTypes } from "../../../../../../Services/Utils/Enums/QuestionTypes/questionTypes";

const CreateQuestion = () => {
  const dispatch = useDispatch();
  const surveyValues = useSelector((state) => state.createSurvey.survey);
  const qtyFormRef = useRef();
  const questionFormRefs = useRef([]);
  const questionQTY = useSelector(
    (state) => state.createSurvey.survey.questionQTY
  );

  const changeQuestionQty = (qty) => {
    dispatch(setQuestionQTY(qty));
  };

  // const createNewSurveyTitle = async (values) => {
  //   await dispatch(setSurveyComponent("CreateOptions"));
  // };

  const handleSubmit = () => {
    if (questionFormRefs.current) {
      questionFormRefs.current.map((x) => x.handleSubmit());
    }
  };

  const renderQuestions = (qty) => {
    const output = [];
    for (var i = 0; i < qty; i++) {
      output.push(questionFormikEl(i));
    }
    return output;
  };

  const questionFormikEl = (qId) => {
    return (
      <Formik
        innerRef={(el) => (questionFormRefs.current[qId] = el)}
        initialValues={{
          title: "",
          questionType: questionTypes.MULTIPLE_CHOICE.toString(),
          optionQTY: 0,
          optionTexts: [],
          questionId: qId,
        }}
        validationSchema={""}
        onSubmit={(_values) => {
          console.log(_values);
        }}
      >
        {({ errors, touched, handleChange, values }) => (
          <Form className="offset-1 col-10 border border-1 mb-3">
            <div className="modal-body">
              <div className="form-floating">
                <Field
                  type="text"
                  name="title"
                  onChange={handleChange}
                  className="form-control"
                />
                <label htmlFor="floatingInput">{"Question Title"}</label>
              </div>
            </div>
            <div className="modal-body border border-1 m-3">
              <div id="my-radio-group" className="text-decoration-underline">
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
                    selected
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
              {optionQTYFieldEl(values.questionType)}
            </div>
            <div className="offset-2 col-8">
              <FieldArray name="optionText">
                <div>
                  {renderOptions(values.optionQTY, values.questionType)}
                </div>
              </FieldArray>
            </div>
          </Form>
        )}
      </Formik>
    );
  };

  const optionQTYFieldEl = (questionType) => {
    if (questionType === questionTypes.COMMENT.toString()) {
      return (
        <div className="form-floating">
          <Field type="number" name="optionQTY" className="form-control" value={1} disabled/>
          <label htmlFor="floatingInput">{"Option Quantity"}</label>
        </div>
      );
    }
    else {
      return (
        <div className="form-floating">
          <Field type="number" name="optionQTY" className="form-control" />
          <label htmlFor="floatingInput">{"Option Quantity"}</label>
        </div>
        );
    }
  };

  const renderOptions = (qty, optionType) => {
    const output = [];
    if (optionType === questionTypes.COMMENT.toString()) {
      qty = 1;
    }
    for (var i = 0; i < qty; i++) {
      output.push(optionFormikEl(optionType, i));
    }
    return output;
  };

  const optionFormikEl = (optionType, index) => {
    var fieldType = "";
    if (optionType === questionTypes.MULTIPLE_CHOICE.toString()) {
      fieldType = "checkbox";
    } else if (optionType === questionTypes.SINGLE_CHOICE.toString()) {
      fieldType = "radio";
    } else if (optionType === questionTypes.COMMENT.toString()) {
      fieldType = "text";
    }
    const formikOptionEl = optionFieldEl(fieldType, index);
    return formikOptionEl;
  };

  const optionFieldEl = (fieldType, index) => {
    if (fieldType === "checkbox") {
      return (
        <div className="d-flex">
          <Field type={fieldType}></Field>
          <Field
            type="text"
            name={`optionTexts.${index}`}
            className="form-control ms-2"
          ></Field>
        </div>
      );
    } else if (fieldType === "radio") {
      return (
        <div className="d-flex">
          <Field type={fieldType}></Field>
          <Field
            type="text"
            name={`optionTexts.${index}`}
            onSubmit={() => {
              console.log("hi");
            }}
            className="form-control ms-2"
          ></Field>
        </div>
      );
    } else if (fieldType === "text") {
      return (
        <div>
          <Field type="text" value={""} className="form-control"></Field>
        </div>
      );
    } else {
      return null;
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
              initialValues={{ questionQTY: 0 }}
              validationSchema={""}
              onSubmit={(values) => {
                changeQuestionQty(values.questionQTY);
              }}
            >
              {({ errors, touched, handleChange, values }) => (
                <Form
                  className="row"
                  onChange={changeQuestionQty(values.questionQTY)}
                >
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
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          {renderQuestions(questionQTY)}
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
