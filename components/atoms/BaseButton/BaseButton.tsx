import { FunctionComponent } from "react";

interface BaseButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

const BaseButton: FunctionComponent<BaseButtonProps> = ({
  label,
  className,
  onClick,
}) => {
  return (
    <button
      className={`font-medium text-lg
      bg-yellow-400 text-white 
      rounded-lg py-3 px-5 active:bg-yellow-500 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

BaseButton.defaultProps = {
  label: "",
  className: "",
  onClick: () => null,
};

export default BaseButton;
