import { StyledComponentBase } from "styled-components";

export type StyledComponent<
  C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  T extends object, // theme interface
  O extends object = {}, // props interface
  A extends keyof any = never
> = string & StyledComponentBase<C, T, O, A>;
