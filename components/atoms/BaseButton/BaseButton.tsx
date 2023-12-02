import { FunctionComponent } from "react";
import BaseLoading from "../BaseLoading";
import { BaseButtonProps } from "./index";
import styles from "./BaseButton.module.css";
import clsx from "clsx";

const BaseButton: FunctionComponent<BaseButtonProps> = ({
  label = "",
  className = "",
  loading = false,
  disabled = false,
  onClick = () => null,
  type = "button",
  color = "primary",
}) => {
  return (
    <button
      type={type}
      className={clsx(styles.button, className, `bg-color-${color}`)}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading && <BaseLoading inline size="15" />}
      {label}
    </button>
  );
};

export default BaseButton;
