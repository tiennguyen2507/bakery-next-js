import { FunctionComponent } from "react";
import BaseLoading from "../BaseLoading";

interface BaseButtonProps {
  label: string;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const BaseButton: FunctionComponent<BaseButtonProps> = ({
  label,
  className,
  loading,
  disabled,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-1 font-medium text-lg
      bg-yellow-400 text-white disabled:bg-gray-200
      rounded-lg py-3 px-5 active:bg-yellow-500 ${className}`}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading && <BaseLoading inline size="15" />}
      {label}
    </button>
  );
};

BaseButton.defaultProps = {
  label: "",
  className: "",
  onClick: () => null,
  loading: false,
  disabled: false,
};

export default BaseButton;
