import Button from "react-bootstrap/Button";
import React from "react";
import styled from "styled-components";

import useViewport from "../../hooks/useViewport";
import { device } from "../../theme";

import logo from "../../../images/logo-react-js.png";

const Header = (): JSX.Element => {
  const viewport = useViewport();

  return (
    <Wrapper className="HEADER">
      <div className="logo">
        <StyledImg src={logo} alt="logo" />
      </div>

      <Welcome>
        <div className="welcome">
          <span>Welcome, Guest!</span>
        </div>

        <div>
          {viewport.device === "mobile" ? (
            <span className="mobile-sign-btn">Sign up</span>
          ) : (
            <Button as="input" type="button" value="Sign up" />
          )}
        </div>
      </Welcome>
    </Wrapper>
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
  box-shadow: 0 0 5px 0 #303030;
  background-color: ${({ theme }) => theme.palette.common.white};

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;

    &.logo {
      margin: 10px 0;
    }

    & > span.mobile-sign-btn {
      cursor: pointer;
      color: #4267b2;
      margin-bottom: 10px;
      text-decoration: underline;
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;

    padding-right: 50px;
  }
`;

const StyledImg = styled.img`
  width: 160px;
`;

const Welcome = styled.div`
  display: flex;
  flex-direction: column;

  & > div.welcome {
    margin-bottom: 10px;
  }

  @media ${device.tablet} {
    flex-direction: row;

    & > div.welcome {
      margin-right: 20px;
    }
  }
`;
