import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SignIn from "../../components/register";

import logo from "../../../images/logo-react-js.png";
import pathnames from "../../../pathnames";
import BsModal from "../common/Modal";

const Header = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <StyledHeader className="HEADER-WRAP container-fluid d-flex flex-sm-column">
        <Row className="row">
          <LCol className="LEFT-COL col d-flex justify-content-start align-items-center">
            <ImgWrap>
              <Link to={pathnames.root}>
                <StyledImg src={logo} alt="logo" />
              </Link>
            </ImgWrap>
          </LCol>

          <RCol className="RIGHT-COL col d-flex justify-content-end align-items-center">
            <ButtonWrap>
              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => setShowModal(!showModal)}
                >
                  Sign in
                </button>
              </div>
            </ButtonWrap>
          </RCol>
        </Row>
      </StyledHeader>

      {showModal && (
        <BsModal
          show={showModal}
          onHide={() => setShowModal(false)}
          body={<SignIn hide={() => setShowModal(false)} />}
        />
      )}
    </>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: relative;
  z-index: 10;
  padding: 10px 0;
  box-shadow: 0 0 10px 0 #303030;
`;

const ImgWrap = styled.div``;

const StyledImg = styled.img`
  width: 120px;
`;

const ButtonWrap = styled.div`
  margin-right: 20px;
`;

const Row = styled.div`
  width: 100vw;
`;

const LCol = styled.div``;

const RCol = styled.div``;
