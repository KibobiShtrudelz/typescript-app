import styled, { StyledComponent } from "styled-components";
import { SiderCSS } from "./Types";

const Sider = ({ row, column, borderRadius }: SiderCSS): JSX.Element => {
  return (
    <Wrapper column={column} row={row} borderRadius={borderRadius}>
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

const Wrapper: StyledComponent<"nav", any, SiderCSS, never> = styled.nav`
  grid-column: ${({ column }: SiderCSS) => column};
  grid-row: ${({ row }) => row};

  width: 160px;
  color: #fff;
  background-color: #fff;
  border-radius: ${({ borderRadius }) => borderRadius};

  ul {
    color: inherit;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
