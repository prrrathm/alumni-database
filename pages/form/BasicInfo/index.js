import React from "react";
// import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
// import { setActiveIndex } from "../dependencies/actions/setActiveIndex";
import { useBasicInfo } from "../dependencies/actions/basicInfoActions";
import homeStyle from '../../../styles/Home.module.css'

export const BasicInfo = () => {
  // const activeIndex = useSelector((state) => state.registerReducer.activeIndex);\
  // const BasicInfo = useSelector((state) => state.registerReducer.basicInfo);
  // const dispatch = useDispatch();
  return (
    <div>
      <br />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          yearOfGraduation: "",
          course: "",
          twitterHandle: "",
          linkedinHandle: "",
          examsCleared: [
            {
              nameOfExam: "",
              rank: -1,
              year: -1,
            },
          ],
          higherEducation: [
            {
              course: "",
              yearOfGraduation: 0,
              institute: "",
            },
          ],
          workExperience: [
            {
              currentOrg: -1,
              type: "",
              experience: "",
              organisation: "",
              profile: "",
            },
          ],
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <Field
              className="form-control"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={props.values.firstName}
              onChange={props.handleChange}
            />
            <Field
              className="form-control"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={props.values.lastName}
              onChange={props.handleChange}
            />
            <Field
              className="form-control"
              type="text"
              name="course"
              placeholder="Course"
              value={props.values.course}
              onChange={props.handleChange}
            />
            <Field
              className="form-control"
              type="year"
              name="yearOfGraduation"
              placeholder="Year of Graduation"
              value={props.values.yearOfGraduation}
              onChange={props.handleChange}
            />
            <Field
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              onChange={props.handleChange}
              value={props.values.email}
            />
            <br />
            <button
              type="submit"
              className="btn btn-danger"
              onClick={() => {
                // dispatch(setActiveIndex(-1));
              }}
            >
              Previous
            </button>
            <button
              type="submit"
              className="btn btn-danger"
              onClick={() => {
                // dispatch(setActiveIndex(1));
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
