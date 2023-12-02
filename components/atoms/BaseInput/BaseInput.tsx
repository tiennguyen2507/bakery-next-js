import React, { ChangeEventHandler } from "react";
import styles from "./BaseInput.module.css";

interface BaseInputProps {
  label?: string;
  type?: string;
  className?: string;
  value?: string;
  error?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default React.forwardRef<HTMLInputElement, BaseInputProps>(
  function BaseInput(
    { label, type, className, error, disabled, ...props },
    ref
  ) {
    return (
      <div className={styles.wrapper}>
        {label && (
          <label htmlFor="1">
            <BaseTypography weight={500} className={styles.label}>
              {label}
            </BaseTypography>
          </label>
        )}
        <div className={styles.container}>
          <input
            ref={ref}
            className={styles.input}
            type={type}
            disabled={disabled}
            {...props}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);
