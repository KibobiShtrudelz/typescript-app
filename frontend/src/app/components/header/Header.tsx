import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper className="HEADER">
      <div>Logo</div>
      <div>*</div>
      <div>*</div>
      <div>*</div>
      <div>*</div>
      <div>*</div>
      <div>*</div>
      <div>*</div>
      <div>*</div>
      <div>*</div>
      <div>Hello bitch!</div>
      <div>Log out</div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  grid-column: 1 / 13;
  grid-row: 1 / 2;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1;

  width: 100%;
  height: 70px;
  border: 5px dashed;

  div {
    display: grid;
    place-items: center;
  }
`;
