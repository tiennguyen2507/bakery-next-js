import React from "react";
import styles from "./BaseInput.module.css";

interface BaseInputProps {
  label?: string;
  type?: string;
  className?: string;
  value?: string;
  error?: string;
  disabled?: boolean;
}

const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ label, className, error, ...props }, ref) => (
    <div>
      {label && <label className={styles.label}>{label}</label>}
      <input ref={ref} className={styles.input} {...props} />
      {error && (
        <BaseTypography color="red" size="12px" className={styles.error}>
          {error}
        </BaseTypography>
      )}
    </div>
  )
);

export default BaseInput;
