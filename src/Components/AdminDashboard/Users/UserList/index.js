import React from "react";
//import Styles from './UserList.module.scss'
import { List } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Field, Form, Formik } from "formik";
import Moment from "moment";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { getUsers } from "../../../../Services/Store/User/getUsers";
import { getCompanyNames } from "../../../../Services/Store/Company/getCompanyNames";
import { DatePickerField } from "../../../../Services/Utils/Helpers/datePickerHelper";

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.list);
  const companyNameList = useSelector((state) => state.company.nameList);

  const updateModalShow = () => setModalShow(true);
  const updateModalClose = () => setModalShow(false);
  const [isModalShow, setModalShow] = useState(false);
  const [updatedItem, setUpdatedItem] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [fieldDate, setFieldDate] = useState("");

  const deleteById = async (id) => {
    //TODO: deleteManagerById
    await dispatch(getUsers());
  };

  const editItem = (item) => {
    setUpdatedItem(item);
    setFieldDate(Moment(item.birthDate).format("DD/MM/YYYY"));
    setModalTitle(item.id);
    updateModalShow();
  };

  const updateItem = (values) => {
    //TODO: dispatch update
    updateModalClose();
  };

  const closeModal = () => {
    updateModalClose();
    setUpdatedItem("");
  };

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getCompanyNames());
  }, [dispatch]);
  return (
    <>
      <Modal show={isModalShow} onHide={updateModalClose}>
        <Modal.Header>
          <Modal.Title>User Id: {modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={updatedItem}
            onSubmit={(values, { resetForm }) => {}}
          >
            {({ handleChange, values, setFieldValue }) => (
              <Form>
                <div className="modal-body">
                  <div className="form-floating mb-3">
                    <Field
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      className="form-control"
                    />
                    <label htmlFor="floatingInput">First Name</label>
                  </div>
                </div>

                <div className="modal-body">
                  <div className="form-floating mb-3">
                    <Field
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      className="form-control"
                    />
                    <label htmlFor="floatingInput">Last Name</label>
                  </div>
                </div>

                <div className="modal-body">
                  <div className="form-floating mb-3">
                    <Field
                      type="text"
                      name="email"
                      onChange={handleChange}
                      className="form-control"
                    />
                    <label htmlFor="floatingInput">Email</label>
                  </div>
                </div>

                <div className="modal-body">
                  <div className="form-floating mb-3">
                    <span>Birth Date</span>
                    <DatePickerField
                      className="form-control"
                      fieldValue={fieldDate}
                      name="birthDate"
                    />
                  </div>
                </div>

                <div className="modal-body">
                  <div className="form-floating mb-3">
                    <Field
                      type="number"
                      name="companyId"
                      onChange={handleChange}
                      className="form-control"
                      as="select"
                    >
                      {companyNameList.map((x) => (
                        <option key={x.name} value={x.id}>
                          {x.name}
                        </option>
                      ))}
                    </Field>
                    <label htmlFor="floatingInput">Company Name</label>
                  </div>
                </div>
                <Modal.Footer>
                  <Button
                    onClick={() => {
                      closeModal();
                    }}
                  >
                    Close
                  </Button>
                  <button
                    type="submit"
                    onClick={() => {
                      updateItem();
                    }}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
      <List
        itemLayout="horizontal"
        dataSource={userList}
        renderItem={(item) => (
          <List.Item
            id={item.id}
            actions={[
              <button
                id="item.id"
                onClick={() => {
                  editItem(item);
                }}
                type="button"
                className="btn border border-2 border-primary"
              >
                Edit
              </button>,
              <button
                id="item.id"
                type="button"
                onClick={() => {
                  deleteById(item.id);
                }}
                className="btn border border-2 border-danger"
              >
                Delete
              </button>,
            ]}
          >
            <ul className="list-group w-100">
              <li className="list-group-item" key={item.id}>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    First Name :{" "}
                    <span className="fw-normal">{item.firstName}</span>
                  </div>
                  <div className="fw-bold">
                    Last Name :{" "}
                    <span className="fw-normal">{item.lastName}</span>
                  </div>
                  <div className="fw-bold">
                    Email : <span className="fw-normal">{item.email}</span>
                  </div>
                  <span className="fw-bold">
                    CreatedTime :{" "}
                    <span className="fw-normal">
                      {Moment(item.createdTime).format("DD.MMMM.YYYY")}
                    </span>
                  </span>
                  <br />
                  <span className="fw-bold">
                    Birth Date :{" "}
                    <span className="fw-normal">
                      {Moment(item.birthDate).format("DD.MMMM.YYYY")}
                    </span>
                  </span>
                  <div className="fw-bold">
                    Company Id :{" "}
                    <span className="fw-normal">{item.companyId}</span>
                  </div>
                  <div className="fw-bold">
                    Company Name :{" "}
                    <span className="fw-normal">{item.company.name}</span>
                  </div>
                  <small className="fw-bold">Id : {item.id}</small>
                </div>
              </li>
            </ul>
          </List.Item>
        )}
      />
    </>
  );
};

export default UserList;
