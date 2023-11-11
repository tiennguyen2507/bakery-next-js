import { CSSProperties, FunctionComponent, ReactNode } from "react";

interface BaseTextProps {
  size?: string;
  color?: string;
  weight?: CSSProperties["fontWeight"];
  className?: string;
  children: ReactNode;
  align?: CSSProperties["textAlign"];
}

const BaseTypography: FunctionComponent<BaseTextProps> = ({
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
        color: `color-${color}`,
      }}
      className={`color-${color} ${className}`}
    >
      {children}
    </p>
  );
};

BaseTypography.defaultProps = {
  color: "woodsmoke",
};

export default BaseTypography;
