export type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  className: string;
  onClick: () => void;
}
