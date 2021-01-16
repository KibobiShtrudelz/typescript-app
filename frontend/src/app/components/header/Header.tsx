import { Modal } from "antd";
import { useState } from "react";

import styled from "styled-components";
import useViewport from "../../hooks/useViewport";
import Button from "../common/Button";

const Header = () => {
  const [isLogIn, setIsLogIn] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const viewport = useViewport();

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

      {visible && (
        <Modal
          title={isLogIn ? "Log in" : "Sign up"}
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={800}
          footer={null}
        >
          <h1>DIS IS MODAL</h1>
        </Modal>
      )}
    </>
  );
};

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
