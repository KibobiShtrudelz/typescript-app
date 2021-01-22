import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const Main = ({ children }: Props): JSX.Element => (
  <StyledMain className="container-fluid">{children}</StyledMain>
);

export default Main;

const StyledMain = styled.main`
  /* border: 5px dashed #000; */

  margin-top: 8px;
`;
