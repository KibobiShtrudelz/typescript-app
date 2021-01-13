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
  grid-column: 1 / 13;
  grid-row: 12 / 13;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 70px;
  color: #fff;
  background-color: #303030;

  h1 {
    color: inherit;
  }
`;
