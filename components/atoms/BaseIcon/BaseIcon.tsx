import { MouseEventHandler } from "react";

export type BaseIconProps = {
  name:
    | "menu"
    | "cart"
    | "email"
    | "history"
    | "clock"
    | "user"
    | "cancel-circle"
    | "warning";
  className?: string;
  size?: string;
  onClick?: MouseEventHandler | undefined;
  cursorPointer?: boolean;
  color?: string;
};

const BaseIcon: React.FC<BaseIconProps> = ({
  name,
  className,
  onClick,
  size,
  cursorPointer,
  color = "black",
}) => {
  return (
    <span
      className={`icon-${name} ${className} color-${color}`}
      onClick={onClick}
      style={{ fontSize: size, cursor: cursorPointer ? "pointer" : "initial" }}
    />
  );
};

BaseIcon.defaultProps = {
  className: "",
};

export default BaseIcon;
