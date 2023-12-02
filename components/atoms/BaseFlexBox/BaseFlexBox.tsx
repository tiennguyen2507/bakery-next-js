import { FunctionComponent, PropsWithChildren, CSSProperties } from "react";

type TypeBaseFlexBox = {
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  direction?: CSSProperties["flexDirection"];
  className?: string;
  gap?: number;
};

const BaseFlexBox: FunctionComponent<PropsWithChildren<TypeBaseFlexBox>> = ({
  children,
  align = "initial",
  justify = "initial",
  direction = "initial",
  className,
  gap = "initial",
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        gap,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default BaseFlexBox;
