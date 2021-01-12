import React from "react";
import styled from "styled-components";

const MainContentGrid = ({ children }: any): JSX.Element => {
  return <Wrapper className="App__Main-container-grid">{children}</Wrapper>;
};

export default MainContentGrid;

const Wrapper = styled.main`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;
