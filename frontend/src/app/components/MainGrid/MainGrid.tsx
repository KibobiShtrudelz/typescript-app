import styled from "styled-components";

const MainGrid = ({ children }: any): JSX.Element => {
  return <Wrapper className="App__Main-container-grid">{children}</Wrapper>;
};

export default MainGrid;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-gap: 10px;

  height: 100vh;
  overflow-y: auto;
`;
