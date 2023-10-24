import { FunctionComponent } from "react";

interface BaseButtonProps {
  name: "menu" | "cart";
  className?: string;
  onClick?: () => void;
}

const BaseIcon: FunctionComponent<BaseButtonProps> = ({
  name,
  className,
  onClick,
}) => {
  return <span className={`icon-${name} ${className}`} onClick={onClick} />;
};

BaseIcon.defaultProps = {
  className: "",
};

export default BaseIcon;
