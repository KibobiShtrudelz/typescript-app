import { Formik, Form, Field } from "formik";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import * as Yup from "yup";

import { useAppDispatch } from "../../redux/store";
import userStore from "../../redux/userStore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUserLock,
  faUserAlt,
  faShower,
} from "@fortawesome/free-solid-svg-icons";

interface FormValues {
  email: string;
  password: string;
  username: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
  username: "",
};

function SignUp(): JSX.Element {
  const [showPwd, setShowPwd] = useState<boolean>(false);

  const dispatch = useAppDispatch();

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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values: FormValues, actions: any) => {
        actions.setSubmitting(true);
        actions.resetForm();
        dispatch(userStore.actions.userSignUp(values));
      }}
    >
      {(props: any) => {
        console.log("props", props);

        return (
          <Form noValidate>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                <FontAwesomeIcon icon={faEnvelope} /> Email address
              </label>
              <Field
                id="email"
                className="form-control"
                name="email"
                type="email"
                aria-describedby="emailHelp"
              />

              {props.errors.email && props.touched.email && (
                <span className="error">{props.errors.email}</span>
              )}

              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                <FontAwesomeIcon icon={faUserLock} /> Password
              </label>

              <Field
                id="password"
                className="form-control"
                name="password"
                type={showPwd ? "text" : "password"}
              />

              {props.errors.password && props.touched.password && (
                <span className="error">{props.errors.password}</span>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUp;
