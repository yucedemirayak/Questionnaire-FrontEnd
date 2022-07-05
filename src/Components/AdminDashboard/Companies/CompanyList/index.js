import React from "react";
import Styles from "./CompanyList.module.scss";
import { List } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { getCompaniesWithDetails } from "../../../../Services/Store/Company/getAllCompaniesWithDetails";
import Moment from "moment";
import { deleteCompany } from "../../../../Services/Store/Company/deleteCompany";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CompanyList = () => {
  const dispatch = useDispatch();
  const companyList = useSelector((state) => state.company.list);

  const updateModalShow = () => setModalShow(true);
  const updateModalClose = () => setModalShow(false);
  const [isModalShow, setModalShow] = useState(false);
  const [getUpdatedItem, setUpdatedItem] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const deleteById = async (id) => {
    await dispatch(deleteCompany(id));
    await dispatch(getCompaniesWithDetails());
  };

  const editItem = (item) => {
    console.log(item);
    setUpdatedItem(item);
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
    dispatch(getCompaniesWithDetails());
  }, [dispatch]);

  return (
    <>
      <Modal show={isModalShow} onHide={updateModalClose}>
        <Modal.Header>
          <Modal.Title>Company Id: {modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={getUpdatedItem}
            onSubmit={(values, { resetForm }) => {}}
          >
            {({ handleChange }) => (
              <Form>
                <div className="modal-body">
                  <div className="form-floating mb-3">
                    <Field
                      type="text"
                      name="name"
                      onChange={handleChange}
                      className="form-control"
                    />
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
        className={Styles.demo_loadmore_list}
        itemLayout="horizontal"
        dataSource={companyList}
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
                    Company Name :{" "}
                    <span className="fw-normal">{item.name}</span>
                  </div>
                  <span className="fw-bold">
                    CreatedTime :{" "}
                    <span className="fw-normal">
                      {Moment(item.createdTime).format("DD.MMMM.YYYY")}
                    </span>
                  </span>
                  <br />
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

export default CompanyList;
