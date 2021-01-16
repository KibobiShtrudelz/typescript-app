import styled from "styled-components";

function Main(): JSX.Element {
  return <Wrapper>Main</Wrapper>;
}

export default Main;

const Wrapper = styled.main`
  grid-column: 1 / 13;
  grid-row: 2 / 13;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  position: relative;
  background-color: #fff;
`;
