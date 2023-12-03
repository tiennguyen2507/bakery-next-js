import clsx from "clsx";
import { CSSProperties, FunctionComponent, PropsWithChildren } from "react";

interface BaseTextProps {
  size?: string;
  color?: string;
  weight?: CSSProperties["fontWeight"];
  className?: string;
  align?: CSSProperties["textAlign"];
}

const BaseTypography: FunctionComponent<PropsWithChildren<BaseTextProps>> = ({
  children,
  weight,
  size,
  className = "",
  align,
  color,
}) => {
  return (
    <p
      style={{
        fontWeight: weight,
        fontSize: size,
        textAlign: align,
      }}
      className={clsx(color && `color-${color}`, className)}
    >
      {children}
    </p>
  );
};

export default BaseTypography;
