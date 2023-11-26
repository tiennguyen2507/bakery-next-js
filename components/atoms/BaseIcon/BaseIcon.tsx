import { MouseEventHandler } from "react";

export type BaseIconProps = {
  name:
    | "menu"
    | "cart"
    | "email"
    | "history"
    | "clock"
    | "user"
    | "cancel-circle";
  className?: string;
  size?: string;
  onClick?: MouseEventHandler | undefined;
  cursorPointer?: boolean;
};

const BaseIcon: React.FC<BaseIconProps> = ({
  name,
  className,
  onClick,
  size,
  cursorPointer,
}) => {
  return (
    <span
      className={`icon-${name} ${className}`}
      onClick={onClick}
      style={{ fontSize: size, cursor: cursorPointer ? "pointer" : "initial" }}
    />
  );
};

BaseIcon.defaultProps = {
  className: "",
};

export default BaseIcon;
