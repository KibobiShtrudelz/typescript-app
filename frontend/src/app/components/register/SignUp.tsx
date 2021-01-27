import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

// import { useAppDispatch } from "../../redux/store";
// import userStore from "../../redux/userStore";

import { faEnvelope, faUserLock } from "@fortawesome/free-solid-svg-icons";
// import backgroundImg from "../../../images/signin-background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "../../redux/store";
import userStore from "../../redux/userStore";
// import { device } from "../../theme";

interface FormValues {
  email: string;
  password: string;
  errors: {
    email: string;
    password: string;
  };
}

const initialValues: FormValues = {
  email: "",
  password: "",
  errors: {
    email: "",
    password: "",
  },
};

const SignUp = (props: { hide: () => void }) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const SignupSchema: any = Yup.object().shape({
    email: Yup.string().email("Invalid e-mail!").required("E-mail is required"),
    password: Yup.string()
      .min(2, "Password is too Short!")
      .max(50, "Password is too Long!")
      .required("Password is required"),
  });

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values: any) => {
      dispatch(
        userStore.actions.userSignUp({
          email: values.email,
          password: values.password,
          username: values.email,
        })
      );
      // props.hide && props.hide();
    },
  });

  // eslint-disable-next-lines
  useEffect(() => formik.resetForm(), [isSignUp]);

  return (
    <Wrap className="container-fluid">
      <h1>{isSignUp ? "SIGN UP" : "LOG IN"}</h1>

      <StyledForm className="p-3" onSubmit={formik.handleSubmit}>
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

          <div id="emailHelp" className="form-text">
            <small>We'll never share your email with anyone else.</small>
          </div>
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

        <span>
          {isSignUp ? "Allready have account?" : "Don't have an account?"}{" "}
          <span className="link" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Log in" : "Sign up"}
          </span>
        </span>

        <div className="d-flex justify-content-end mt-3">
          <button type="submit" className="btn btn-primary mt-3">
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </div>
      </StyledForm>
    </Wrap>
  );
};

export default SignUp;

// type BgProps = {
//   img: string;
// };

// const Background = styled.div<BgProps>`
//   background-image: url(${({ img }) => img});
// `;

const Wrap = styled.div`
  background-color: #fff;
  border-radius: 6px;
  max-width: 1500px;
  padding: 10px;

  h1 {
    text-align: center;
  }
`;

const StyledForm = styled.form`
  div.mb-3 {
    span {
      &.error {
        color: #ff0033;
      }
    }
  }

  span {
    &.link {
      text-decoration: underline;
      font-weight: bold;
      color: #007fff;
      cursor: pointer;
    }
  }
`;
