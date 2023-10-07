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
  className = "",
}: BaseTextProps) {
  return <p className={className}>{children}</p>;
}
