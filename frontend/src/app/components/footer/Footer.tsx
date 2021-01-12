import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <h1>Footer</h1>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  grid-column: 1 / 2;
  grid-row: 3 / 4;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;
  background-color: #d1d1d1;
`;
