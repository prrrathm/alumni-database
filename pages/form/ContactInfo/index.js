import React from "react";
// import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
// import { setActiveIndex } from "../dependencies/actions/setActiveIndex";

export const ContactInfo = () => {
  // const activeIndex = useSelector((state) => state.registerReducer.activeIndex);
  // const dispatch = useDispatch();
  return (
    <div className="text-center">
      <Formik
        initialValues={{
          twitterHandle: "",
          linkedinHandle: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          // setSubmitting(false);
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <h4>Contact Details</h4>
            <Field
              className="form-control"
              type="text"
              name="twitterHandle"
              placeholder="Twitter Username"
              value={props.values.twitterHandle}
              onChange={props.handleChange}
            />

            <Field
              className="form-control"
              type="text"
              name="linkedinHandle"
              placeholder="Linkedin Username"
              value={props.values.linkedinHandle}
              onChange={props.handleChange}
            />
            <br />
            <button
              type="submit"
              className="btn btn-danger"
              onClick={() => {
                dispatch(setActiveIndex(-1));
              }}
            >
              Previous
            </button>
            <button
              type="submit"
              className="btn btn-danger"
              onClick={() => {
                dispatch(setActiveIndex(1));
              }}
            >
              Next
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
