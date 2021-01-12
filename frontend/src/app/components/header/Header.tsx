import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <h1>Header</h1>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  background-color: #d1d1d1;

  grid-column: 1 / 2;
  grid-row: 1 / 2;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;
