export type BaseIconProps = {
  name: "menu" | "cart" | "email" | "history" | "clock" | "user";
  className?: string;
  onClick?: () => void;
};

const BaseIcon: React.FC<BaseIconProps> = ({ name, className, onClick }) => {
  return <span className={`icon-${name} ${className}`} onClick={onClick} />;
};

BaseIcon.defaultProps = {
  className: "",
};

export default BaseIcon;
