import styled from "styled-components";
import { ButtonProps } from "./types";

function Button(props: ButtonProps): JSX.Element {
  return (
    <StyledButton
      className={props.className}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  cursor: pointer;
`;
