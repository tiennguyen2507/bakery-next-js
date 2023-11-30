import { FunctionComponent, PropsWithChildren, CSSProperties } from "react";

type TypeBaseFlexBox = {
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  direction?: CSSProperties["flexDirection"];
  className?: string;
};

const BaseFlexBox: FunctionComponent<PropsWithChildren<TypeBaseFlexBox>> = ({
  children,
  align,
  justify,
  direction,
  className,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: align ? align : "initial",
        justifyContent: justify ? justify : "initial",
        flexDirection: direction ? direction : "initial",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default BaseFlexBox;
