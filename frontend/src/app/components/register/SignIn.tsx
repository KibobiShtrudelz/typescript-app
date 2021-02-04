import { faEnvelope, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { toastr } from "react-redux-toastr";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import ApplicationState from "../../types/state";
import userStore from "../../redux/userStore";

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

type Props = {
  hide: () => void;
};

export const SignIn = ({ hide }: Props) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const user = useAppSelector(({ user }: ApplicationState) => user);

  const dispatch = useAppDispatch();

  const SignupSchema: any = Yup.object().shape({
    email: Yup.string().email("Invalid e-mail!").required("E-mail is required"),
    password: Yup.string()
      .min(2, "Password is too Short!")
      .max(50, "Password is too Long!")
      .required("Password is required"),
  });

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values: any) => {
      dispatch(
        userStore.actions.userSignIn({
          email: values.email,
          password: values.password,
          username: values.email,
          authType: isSignUp ? "sign up" : "log in",
        })
      );
    },
  });

  const showBtnText = (): JSX.Element | string => {
    if (user.loading)
      return (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        />
      );

    return isSignUp ? "Sign Up" : "Log In";
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => formik.resetForm(), [isSignUp]);

  // TODO: Fix logic below because button form is not displayed after second click on Header's Sign in button
  useEffect(() => {
    if (user.data && user.data.id) {
      if (typeof user.data.id === "number" && !user.loading) {
        toastr.success("", "You have successfully logged in.");
        hide && hide();
      }
    }
  }, [hide, user.loading, user.data]);

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

        <ErrorMessage>
          <span>{user.error}</span>
        </ErrorMessage>

        <span>
          {isSignUp ? "Allready have account?" : "Don't have an account?"}{" "}
          <span className="link" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Log in" : "Sign up"}
          </span>
        </span>

        <div className="d-flex justify-content-end mt-3">
          <button
            type="submit"
            className="btn btn-primary mt-3"
            disabled={user.loading}
          >
            {showBtnText()}
          </button>
        </div>
      </StyledForm>
    </Wrap>
  );
};

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
  button {
    width: 100px;
  }

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

const ErrorMessage = styled.div`
  margin-bottom: 10px;

  & > span {
    color: #ff0033;
  }
`;
