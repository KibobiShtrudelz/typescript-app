import React, { useState } from "react";
import { PageHeader, Button } from "antd";
// import { UserOutlined, LoginOutlined } from "@ant-design/icons";
import styled from "styled-components";
import SignUp from "../../pages/signUp/SignUp";

const Header = () => {
  const [showSignUpModal, setShowSignUpModal] = useState<boolean>(false);
  console.log("showSignUpModal", showSignUpModal);

  const closeSignUpModal = () => setShowSignUpModal(false);

  return (
    <StyledHeader
      title="my app"
      subTitle="sub title"
      extra={[
        <Button key="1">Log in</Button>,
        <Button key="2" type="primary" onClick={() => setShowSignUpModal(true)}>
          Sign up
        </Button>,
      ]}
    >
      <SignUp
        showSignUpModal={showSignUpModal}
        closeSignUpModal={closeSignUpModal}
      />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled(PageHeader)``;
