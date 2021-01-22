import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

import pathnames from "../../../pathnames";

import logo from "../../../images/logo-react-js.png";

const Header = (): JSX.Element => {
  return (
    <Wrap className="HEADER-WRAP container-fluid d-flex flex-sm-column">
      <Row className="row">
        <LCol className="LEFT-COL col d-flex justify-content-center align-items-center">
          <ImgWrap className="">
            <StyledImg src={logo} alt="logo" />
          </ImgWrap>
        </LCol>

        <RCol className="RIGHT-COL col d-flex justify-content-center align-items-center">
          <ButtonWrap className="">
            <Link to={pathnames.signin}>
              <Button as="input" type="button" value="Sign in" />
            </Link>
          </ButtonWrap>
        </RCol>
      </Row>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  border: 5px dashed;
`;

const ImgWrap = styled.div``;

const StyledImg = styled.img`
  width: 120px;
`;

const ButtonWrap = styled.div``;

const Row = styled.div`
  border: 4px dotted;
  width: 100vw;
`;

const LCol = styled.div`
  border: 3px solid red;
`;

const RCol = styled.div`
  border: 3px solid blue;
`;
