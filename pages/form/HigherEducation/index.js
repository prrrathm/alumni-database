import React from "react";
import { useDispatch } from "react-redux";
// import { setActiveIndex } from "../dependencies/actions/setActiveIndex";
import { Formik, Form, Field, FieldArray } from "formik";
import { FormGroup } from "react-bootstrap";

export const HigherEducation = () => {
  // const dispatch = useDispatch();
  return (
    <div className="text-center">
      Page 2
      <Formik
        initialValues={{
          isPostGrad: "no",
          higherEducation: [
            {
              course: "",
              yearOfGraduation: 0,
              institute: "",
            },
          ],
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <br />
            <center>
              {/* POSTGRADUATION */}
              <FieldArray name="higherEducation">
                {({ insert, remove, push }) => {
                  const { higherEducation } = props.values;
                  return (
                    // <></>
                    <div className="form-flex">
                      <h1 className="">
                        Higher Education
                        <button
                        type="button"
                        className="add-btn btn btn-dark"
                        onClick={() =>
                          push({
                            course: "",
                            year: "",
                            institute: "",
                          })
                        }
                      >
                        +
                      </button>
                      </h1>
                      {higherEducation.length >= 0 &&
                        higherEducation.map((higherEducation, index) => (
                          <div className="form-box " key={index + 1}>
                            <button
                              type="button"
                              className="close-btn"
                              onClick={() => remove(index)}
                            >
                              x
                            </button>
                            <br />
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="Course"
                              name={"higherEducation.${index}.course"}
                            />
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="Year"
                              name={"higherEducation.${index}.year"}
                            />
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="Institute"
                              name={"higherEducation.${index}.institute"}
                            />
                            <div></div>
                          </div>
                        ))}
                    </div>
                  );
                }}
              </FieldArray>
              
              
            </center>
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
