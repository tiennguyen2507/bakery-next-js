import { CSSProperties, ReactNode } from "react";

interface BaseTextProps {
  size?: string;
  color?: string;
  weight?: CSSProperties["fontWeight"];
  className?: string;
  children: ReactNode;
}

export default function BaseTypography({
  children,
  size = "16",
  weight = "400",
  className = "",
}: BaseTextProps) {
  return (
    <p
      style={{ fontSize: `${size}px`, fontWeight: weight }}
      className={className}
    >
      {children}
    </p>
  );
}
