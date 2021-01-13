import styled, { StyledComponent } from "styled-components";
import { Position } from "./Types";

const Sider = (props: Position): JSX.Element => {
  return (
    <Wrapper column={props.column} row={props.row}>
      <ul>
        <li>nav item 1</li>
        <li>nav item 2</li>
        <li>nav item 3</li>
        <li>nav item 4</li>
      </ul>
    </Wrapper>
  );
};

export default Sider;

const Wrapper: StyledComponent<
  "nav",
  any,
  { column: string; row: string },
  never
> = styled.nav`
  grid-column: ${(props: any) => props.column};
  grid-row: ${(props: any) => props.row};

  color: #fff;
  background-color: #303030;

  ul {
    color: inherit;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
