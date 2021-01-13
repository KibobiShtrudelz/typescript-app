import styled from "styled-components";

const Main = () => {
  return (
    <Wrapper>
      <h1>Main</h1>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.main`
  grid-column: 2 / 12;
  grid-row: 2 / 12;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  background-color: #303030;

  h1 {
    color: inherit;
  }
`;
