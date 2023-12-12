import { useController, UseControllerProps } from "react-hook-form";
import styles from "./CountNumber.module.css";

export type TypePickSizeProps = {
  control?: UseControllerProps<any, string>;
};

const CountNumber: React.FC<TypePickSizeProps> = ({ control }) => {
  const controll = control && useController(control);

  return (
    <BaseFlexBox gap={16} className={styles.wrapper} align="start">
      <button
        type="button"
        className={styles.countBtn}
        onClick={() =>
          controll?.field.value > 1 &&
          controll?.field.onChange(controll?.field.value - 1)
        }
      >
        <BaseIcon name="minus" size="8px" cursorPointer />
      </button>
      <BaseTypography weight={600}>{controll?.field.value || 1}</BaseTypography>
      <button
        type="button"
        className={styles.countBtn}
        onClick={() => controll?.field.onChange(controll?.field.value + 1)}
      >
        <BaseIcon name="plus" size="8px" cursorPointer />
      </button>
    </BaseFlexBox>
  );
};

export default CountNumber;
