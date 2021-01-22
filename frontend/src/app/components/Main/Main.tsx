import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const Main = ({ children }: Props): JSX.Element => (
  <StyledMain className="container-fluid">{children}</StyledMain>
);

export default Main;

const StyledMain = styled.main`
  /* border: 3px dashed #000; */
  background-color: #e9e8e8;
  position: relative;
  min-height: 100vh;
  padding-top: 12px;
`;
