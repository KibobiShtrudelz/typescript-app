import styled from "styled-components";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

// import { useAppDispatch } from "../../redux/store";
// import userStore from "../../redux/userStore";

import { faEnvelope, faUserLock } from "@fortawesome/free-solid-svg-icons";
// import backgroundImg from "../../../images/signin-background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { device } from "../../theme";

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

const SignUp = (props: { hide: () => void }) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      props.hide && props.hide();
    },
  });

  return (
    <Wrap className="container-fluid">
      <form className="p-3" onSubmit={formik.handleSubmit}>
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

        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary mt-3">
            Sign Up
          </button>
        </div>
      </form>
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
  /* box-shadow: 0 0 12px 0 #adadad; */
  background-color: #fff;
  border-radius: 6px;
  max-width: 1500px;
  padding: 10px;
`;
