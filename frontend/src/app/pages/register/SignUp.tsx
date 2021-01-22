import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useAppDispatch } from "../../redux/store";
import userStore from "../../redux/userStore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUserLock,
  // faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

const SignupSchema: any = Yup.object().shape({
  email: Yup.string().email("Invalid e-mail!").required("Required"),
  password: Yup.string()
    .min(2, "Password is too Short!")
    .max(50, "Password is too Long!")
    .required("Required"),
  username: Yup.string()
    .min(2, "Username is too Short!")
    .max(50, "Username is too Long!")
    .required("Required"),
});

const SignUp = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const formik = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Wrap className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} /> Email Address
          </label>

          <input
            id="email"
            className="form-control"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          {formik.errors.email && formik.touched.email && (
            <span className="error">{formik.errors.email}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password">
            <FontAwesomeIcon icon={faUserLock} /> Password
          </label>

          <input
            id="password"
            className="form-control"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          {formik.errors.password && formik.touched.password && (
            <span className="error">{formik.errors.password}</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </Wrap>
  );
};

export default SignUp;

const Wrap = styled.div`
  padding: 10px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 #adadad;
`;
