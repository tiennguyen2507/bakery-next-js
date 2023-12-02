export { default } from "./BaseButton";

export type BaseButtonProps = {
  label: string;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  color?: string;
};
