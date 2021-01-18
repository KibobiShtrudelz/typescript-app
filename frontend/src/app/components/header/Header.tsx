import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import clsx from "clsx";
import useViewport from "../../hooks/useViewport";
import Button from "../common/Button";
import { Modal } from "antd";
import { useAppDispatch } from "../../redux/store";
import userStore from "../../redux/userStore";

interface FormValues {
  email: string;
  password: string;
  username: string;
}

function Header(): JSX.Element {
  const [isLogIn, setIsLogIn] = useState<boolean>(false);
  console.log("isLogIn", isLogIn);
  const [visible, setVisible] = useState<boolean>(false);

  const viewport = useViewport();

  const dispatch = useAppDispatch();

  const initialValues: FormValues = {
    email: "",
    password: "",
    username: "",
  };

  function form(): JSX.Element {
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
            <div className="form-row">
              <label htmlFor="email">E-mail</label>
              <Field name="email" type="email" />
              {errors.email && touched.email && (
                <span className="error">{errors.email}</span>
              )}
            </div>

            <div className="form-row">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              {errors.password && touched.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>

            <div className="form-row">
              <label htmlFor="username">Username</label>
              <Field name="username" />
              {errors.username && touched.username && (
                <span className="error">{errors.username}</span>
              )}
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    );
  }

  function logInOrSignUp() {
    return (
      <div className="log-in-or-sign-up">
        <span
          className={clsx(isLogIn && "active")}
          onClick={() => setIsLogIn(true)}
        >
          Log in
        </span>

        <span
          className={clsx(!isLogIn && "active")}
          onClick={() => setIsLogIn(false)}
        >
          Sign up
        </span>
      </div>
    );
  }

  return (
    <>
      <Wrapper className="HEADER">
        <div className="logo">Logo</div>

        <div className="welcome">
          <span>Welcome, Guest!</span>
        </div>

        <div>
          {viewport.device === "mobile" ? (
            <span
              className="mobile-sign-btn"
              onClick={() => setVisible(!visible)}
            >
              Log in / Sign up
            </span>
          ) : (
            <Button
              className="login-signup"
              type="button"
              text="Log in / Sign up"
              onClick={() => setVisible(!visible)}
            />
          )}
        </div>
      </Wrapper>

      <StyledModal
        title={logInOrSignUp()}
        centered
        visible={visible}
        width={1000}
        footer={null}
      >
        {form()}
      </StyledModal>
    </>
  );
}

export default Header;

const Wrapper = styled.header`
  grid-column: 1 / 13;
  grid-row: 1 / 2;

  display: flex;
  flex-direction: column;

  z-index: 10;
  width: 100%;
  height: auto;
  background-color: #fff;
  box-shadow: 0 0 5px 0 #303030;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;

    &.logo {
      margin: 10px 0;
    }

    &.welcome {
      margin: 10px 0;
    }

    & > span.mobile-sign-btn {
      color: #4267b2;
      margin-bottom: 10px;
      text-decoration: underline;
    }

    & > button.login-signup {
      border: none;
      width: 140px;
      color: #fff;
      outline: none;
      padding: 6px 0;
      border-radius: 10px;
      margin-bottom: 10px;
      background-color: #4267b2;
    }
  }
`;

const StyledModal = styled(Modal)`
  div.log-in-or-sign-up {
    display: flex;
    align-items: center;
    justify-content: space-around;

    & > span {
      color: #d5d5d5;
      text-decoration: underline;

      &.active {
        color: #000;
        font-weight: 600;
        font-size: 1.3rem;
      }
    }
  }

  form {
    div.form-row {
      display: flex;
      flex-direction: column;

      margin: 10px 0;

      & > span.error {
        color: red;
      }
    }
  }
`;
