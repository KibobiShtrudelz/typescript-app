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
      {({ errors, touched }: any) => (
        <Form noValidate>
          <div className="container">
            <div className="row">
              <div className="col-1">
                <label htmlFor="email">
                  <FontAwesomeIcon icon={faEnvelope} />
                </label>
              </div>

              <div className="col-2">
                <Field name="email" type="email" />
              </div>

              {errors.email && touched.email && (
                <span className="error">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faUserLock} />
            </label>
            <Field name="password" type={showPwd ? "text" : "password"} />
            <FontAwesomeIcon icon={faShower} />
            <Button variant="info" onClick={() => setShowPwd(!showPwd)}>
              Show password
            </Button>

            {errors.password && touched.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="username">
              <FontAwesomeIcon icon={faUserAlt} />
            </label>
            <Field name="username" />

            {errors.username && touched.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>

          <Button variant="primary" as="input" type="submit" value="Sign Up" />

          {/* <div className="submit-btn-wrapper">
            <button type="submit">Submit</button>
          </div> */}
        </Form>
      )}
    </Formik>
  );
}

export default SignUp;
