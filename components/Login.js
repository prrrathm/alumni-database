import React from "react";
import Image from "next/dist/client/image";
import { Formik, Form, Field } from "formik";
import loginStyle from "../styles/Login.module.css";
import Link from "next/dist/client/link";
export const Login = () => {
  return (
    <div className={loginStyle.loginBody}>
      <h1>Sign In</h1>
      <Formik
        initialValues={{
          userName: "",
          password: "",
          otp: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <Form className={loginStyle.loginBox} onSubmit={props.handleSubmit}>
            <Field
              // className="form-control"
              type="text"
              name="userName"
              placeholder="Email or Phone Number"
              value={props.values.userName}
              onChange={props.handleChange}
            />
            <Field
              // className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              value={props.values.password}
              onChange={props.handleChange}
            />
            <div>
              <button
                type="submit"
                onClick={() => {
                  // dispatch(setActiveIndex(-1));
                }}
              >
                Login
              </button>
            </div>
            or
            <div>
              <button
                type="button"
                onClick={() => {
                  //   Will request OTP
                }}
              >
                Login with OTP
              </button>
            </div>
            <a href="">Create new account?</a>
            <div className={loginStyle.adminLogin}>
              Login as <u>admin</u>
              <Link href="/admin/login">{">"}</Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
